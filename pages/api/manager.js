import firebase from "../../config/firebase";
import storage from "../../config/storage"

import formidable from "formidable"
import { unlink } from 'fs/promises'
import path from "path"

export const config = {
  api: {
    bodyParser: false,
  },
}

const db = firebase.firestore();
const auth = firebase.auth();



function create_UUID(){
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (dt + Math.random()*16)%16 | 0;
      dt = Math.floor(dt/16);
      return (c=='x' ? r :(r&0x3|0x8)).toString(16);
  });
  return uuid;
}


const uploadFile = async (file, fileToDelete) => {
  if(file.size > 0){
    const filename = file.path;

    const bucketName = process.env.FIREBASE_STORAGE_BUCKET

    // Delete old file if there is
    if(fileToDelete){
      try{
        await storage.bucket(bucketName).file(fileToDelete).delete();
        console.log(`${fileToDelete} successfully deleted`)
      } catch(err){
        console.log('ERROR!!! ', err)
      }
    }

    // Uploads a local file to the bucket
    await storage.bucket(bucketName).upload(filename, {
        gzip: true,
        metadata: {
            cacheControl: 'public, max-age=31536000',
        },
    });
    console.log(`${filename} uploaded to ${bucketName}`);

    deleteFile(filename);
  } else{
    deleteFile(filename);
  };
  
}

const addEntry = async ({ type, name, description, price }, image)=>{
  
  if(description.length == 0 || price.length == 0 || image.size == 0){
    return {
      success: false,
      status: 400,
      text: "Some inputs have not been filled"
    }
  }

  // Data to enter
  const data = {
    _id: create_UUID(),
    Description: description,
    Price: price,
    ImageURL: path.basename(image.path)
  }

  try{
    await db.collection(type).doc(name).set(data);
    await uploadFile(image);

    return{
      success: true,
      status: 201,
      text: "Entry successfully added"
    }

  }catch(err){
    console.log('ERROR :', err)
    return {
      success: false,
      status: 400,
      text: ""
    }
  }
}

const updateEntry = async (doc, { type, name, description, price }, image)=>{
  const currentData = await doc.data();

  const newData = {}
  if(description.length > 0) newData.Description = description;
  if(price.length > 0) newData.Price = price;
  if(image.size > 0) newData.ImageURL = path.basename(image.path);

  try{
    await uploadFile(image, currentData.ImageURL);
    await db.collection(type).doc(name).update(newData);
    return{
      success: true,
      status: 201,
      text: "Entry successfully updated"
    }

  } catch(err){
    console.log('ERROR :', err)
    return {
      success: false,
      status: 400,
      text: ""
    }
  }


}

const entryExists = async ({ type, name })=>{

  const entryRef = db.collection(type).doc(name);
  const doc = await entryRef.get();

  if (doc.exists) {
    return doc;
  } else {
    return null;
  }
}

const deleteFile = async path => {
  try {
    await unlink(path);
    console.log(`successfully deleted ${path}`);
  } catch (error) {
    console.error('there was an error:', error.message);
  }
}

async function handler(req, res){

  if(req.method == "POST"){
    const user = auth.currentUser
    if(user){

      const form = new formidable.IncomingForm();
      form.uploadDir = path.resolve("./tmp");
      form.keepExtensions = true;
      form.parse(req, (err, data, files) => {
        if(err)
          throw err;
        
        const {image} = files;

        entryExists(data)
          .then(doc=>{
            if(!doc){
              addEntry(data, image)
                .then(response=>res.status(response.status).send(response.text))
                .catch(error=>{
                  throw error;
                })
              
            }else{
              updateEntry(doc, data, image)
                .then(response=>res.status(response.status).send(response.text))
                .catch(error=>{
                  throw error;
                })
            }
          })
          .catch(err=>{
            throw err
          });

      });

    }else{
      res.status(401).send("You are not signed in");
    }

  }else{
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }

}


export default handler;