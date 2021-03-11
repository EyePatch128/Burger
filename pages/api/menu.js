import firebase from "../../config/firebase";
import storage from "../../config/storage";

const db = firebase.firestore();

async function handler(req, res){
    if(req.method == "GET"){
        try{

            const data = {};
            const collections = ["Burger", "Salad", "Drink"];
            for(let elem of collections){
                let snapshot = await db.collection(elem).get();

                data[elem] = {};
                for(let doc of snapshot.docs){
                    data[elem][doc.id] = doc.data();
                }
            }

            res.status(200).json(data);

        } catch(err){
            console.log("ERROR: ", err);
            res.status(400).send("");
        };

    } else{
        res.setHeader('Allow', ['POST'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}

export default handler;