import nodemailer from "nodemailer"

async function handler(req, res){

    if(req.method == "POST"){
        const { name, email, phone, subject, message} = req.body;
        let transporter = nodemailer.createTransport({
            service: process.env.EMAIL_SERVICE,
            auth: {
            user: process.env.EMAIL_USER, // generated ethereal user
            pass: process.env.EMAIL_PASSWORD, // generated ethereal password
            },
        });

        try{
            let info = await transporter.sendMail({
                from: `${name} (${phone}) <${email}>`, // sender address
                to: process.env.EMAIL_USER, 
                subject: subject, // Subject line
                text: message, // plain text body
            });
            console.log("Message sent: %s", info.messageId);

            res.status(200).send();
        }catch(err){
            res.status(400).send()
        }
    }else{
        res.setHeader('Allow', ['POST'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }

}

export default handler;