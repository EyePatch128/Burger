const {Storage} = require('@google-cloud/storage');

const storage = new Storage({
    keyFilename: process.env.FIREBASE_CREDENTIALS_FILE
 });



export default storage;