import storage from "../../config/storage";


async function handler(req, res) {
    if(req.method == "GET"){
        const { id } = req.query
        const bucketName = process.env.FIREBASE_STORAGE_BUCKET
        const file = storage.bucket(bucketName).file(id);

        const config = {
            action: 'read',
            expires: new Date().getTime() + 604800,  // + 7 days
            version: 'v4'
        }
        file.getSignedUrl(config, function(err, url) {
            if (err) {
                res.status(400).send()
            }
            res.status(200).send(url);
        })
            
        
    }else{
        res.setHeader('Allow', ['GET'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
      }
}


export default handler;