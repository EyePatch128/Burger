const stages = {
    first: {
        number: 1,
        text: "Next step: Delivery",
        next: "TODELIVERY"
    },
    second: {
        number: 2,
        text: "Next step: Payment",
        next: "TOPAYMENT"
    },
    third: {
        number: 3,
        text: "Confirm payment",
        next: "FINISHED"
    }
}


async function handler(req, res){
    
    const ORDERS_COOKIE = "orders";

    if(req.method == "POST"){

        const {action, orders} = req.body;

        switch(action){
            case "ADD":
                res.setHeader('Set-Cookie', `${ORDERS_COOKIE}=${JSON.stringify(orders)}; Path=/`);
                res.status(200).send();
                break;
                
            case "TODELIVERY":
                const {itemCount, chefComment} = req.body;
                if(itemCount){
                    res.setHeader("Set-Cookie", [`itemCount=${JSON.stringify(itemCount)}; Path=/`, `chefComment=${chefComment}; Path=/`, `stage=${JSON.stringify(stages.second)}; Path=/`]);
                    res.status(200).send();
                }
                break;

            case "TOPAYMENT":
                const formInput = req.body.deliveryFormInput;
                res.setHeader("Set-Cookie", [`delivery=${JSON.stringify(formInput)}; Path=/`, `stage=${JSON.stringify(stages.third)}; Path=/`]);
                res.status(200).send();
                break;

            case "FINISHED":
                const data = req.body.paymentFormInput;
                // Send mail of order to Burger
                // Then reset cookies
                res.setHeader('Set-Cookie', [`${ORDERS_COOKIE}=${JSON.stringify([])}; Path=/`, `itemCount=${JSON.stringify({})}; Path=/`, `stage=${JSON.stringify(stages.first)}; Path=/`]);
                res.status(200).send();
            default:
                res.status(400);
        }
        

    }else if(req.method == "DELETE"){
        
        const {action, id, orders} = req.body;

        switch(action){
            case "SINGLE":
                for(let elem of orders){
                    if(elem.id == id){
                        const index = orders.indexOf(elem)
                        orders.splice(index, 1);
                    }
                }
    
                res.setHeader('Set-Cookie', `${ORDERS_COOKIE}=${JSON.stringify(orders)}; Path=/`);
                res.status(200).send()
                break;

            case "ALL":
                res.setHeader('Set-Cookie', [`${ORDERS_COOKIE}=${JSON.stringify([])}; Path=/`, `itemCount=${JSON.stringify({})}; Path=/`]);
                res.status(200).send()
                break;
            
            case "GOBACK":
                const {currentStage} = req.body;
                if(currentStage == 2){
                    res.setHeader("Set-Cookie", `stage=${JSON.stringify(stages.first)}; Path=/`);
                }else if(currentStage == 3){
                    res.setHeader("Set-Cookie", `stage=${JSON.stringify(stages.second)}; Path=/`);
                }
                res.status(200).send();
                break;

            default:
                res.status(400).send();
        }

    }else{
        res.setHeader('Allow', ['POST', "DELETE"])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}


export default handler;