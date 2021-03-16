async function handler(req, res){
    const cookieName = "orders"

    if(req.method == "POST"){

        const {action, orders} = req.body;
        
        if(action == "ADD"){
            res.setHeader('Set-Cookie', `${cookieName}=${JSON.stringify(orders)}; Path=/`);
            res.status(200).send()
        }
        

    }else if(req.method == "DELETE"){
        
        const {action, id, orders} = req.body;
        if(action == "SINGLE"){
            for(let elem of orders){
                if(elem.id == id){
                    const index = orders.indexOf(elem)
                    orders.splice(index, 1);
                }
            }

            res.setHeader('Set-Cookie', `${cookieName}=${JSON.stringify(orders)}; Path=/`);
            res.status(200).send()

        }else{
            res.setHeader('Set-Cookie', `${cookieName}=${JSON.stringify([])}; Path=/`);
            res.status(200).send()
        };

    }else{
        res.setHeader('Allow', ['POST', "DELETE"])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}


export default handler;