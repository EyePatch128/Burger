import firebase from "../../config/firebase";

const auth = firebase.auth();

async function handler (req, res){
    return new Promise((resolve, reject)=>{

        if(req.method == "POST"){

            const body = req.body;
            const {action} = body;

            if(action == "SIGNIN"){
                const {username, password} = body;
                const email = `${username}@${process.env.FIREBASE_PROJECT_ID}.com`;

                auth.signInWithEmailAndPassword(email, password)
                    .then((userCredential) => {
                        // Signed in
                        res.status(200).send(`Signed in as ${username}`)
                        resolve()
                    })
                    .catch((error) => {
                        try{
                            const errorCode = error.code.split("auth/")[1];
                            const errorMessage = errorCode[0].toUpperCase() + errorCode.replace(/-/g, ' ').slice(1);
                            res.status(400).send(errorMessage);
                        }catch(err){
                            console.log(err)
                            res.status(400).send("")
                        }
                        resolve()
                    });
            }else if (action == 'SIGNOUT'){
                firebase.auth().signOut()
                    .then(()=>{
                        // Signed out
                        res.status(200).send("Signed out")
                    })
                    .catch(error=>{
                        try{
                            const errorCode = error.code.split("auth/")[1];
                            const errorMessage = errorCode[0].toUpperCase() + errorCode.replace(/-/g, ' ').slice(1);
                            res.status(400).send(errorMessage);
                        }catch(err){
                            res.status(400).send()
                        }
                    });
            }else if(action == "CHECKSTATE"){
                const user = auth.currentUser;
                if(user){
                    res.status(200).json({
                        signedIn: true
                    })
                }else{
                    res.status(401).json({
                        signedIn: false
                    })
                }
            }
        }else{
            res.setHeader('Allow', ['POST'])
            res.status(405).end(`Method ${req.method} Not Allowed`)
        }
    })

    
}

export default handler;