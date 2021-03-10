import React, { useEffect, useState } from "react"

//Styles
import {Container, Form, Input, Button, StatusModal, AuthenticationForm, Logout} from './manager-styles'




function Manager(props){
    // Authentication state
    const [signedIn, setSignedIn] = useState(false);

    // Custom file label
    const [fileLabel, setFileLabel] = useState("");
    function handleFileUpload(e){
        try{
            const filename = e.target.files[0].name;
            setFileLabel(filename);
        }catch(err){
            console.log(error)
        }
    }

    // Status stuff
    const [status, setStatus] = useState(null);
    const [statusText, setStatusText] = useState("")
    const [showStatus, setShowStatus] = useState(false);
    //Status Modal
    const statusModalText = statusText.length > 0? statusText : (status < 400? "Operation succeded :)" : "An error occured :(");
    const statusColor = status < 400? "green" : "red";
    // Status update
    function updateStatusVariant(status, text, duration){
        setStatus(status);
        setStatusText(text)
        setShowStatus(true);
        setTimeout(function(){
            setShowStatus(false);
        }, duration);
        setTimeout(function(){
            setStatusText("");
        }, duration + 700)
    }


    // handle entry addition
    function handleEntrySubmit(e){
        e.preventDefault();

        const formData = new FormData(e.target);

        fetch('/api/manager', {
            method: "POST",
            body: formData,
            config:{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        })
        .then(async res=>{
            const data = {
                status: res.status,
                text: await res.text()
            }
            return data
        })
        .then(res=>{
            if(res.status == 401){
                setSignedIn(false);
            }
            
            updateStatusVariant(res.status, res.text, 3000);
        })
        .catch(err=>{
            throw err
        });
    }


    


    //Authentication
    function handleSignIn(e){
        e.preventDefault();

        const data = {
            action: "SIGNIN"
        };
        const formData = new FormData(e.target);
        for(let elem of formData.entries()){
            data[elem[0]] = elem[1];
        }
                
        fetch('/api/manager-auth', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
            
        })
        .then(async res=>{
            const data = {
                status: res.status,
                text: await res.text()
            }
            return data
        })
        .then(res=>{
            updateStatusVariant(res.status, res.text, 3000);

            if(res.status == 200){
                setSignedIn(true);
            }
        })
        .catch(err=>{
            console.log(err)
        });
    }
    
    function handleSignOut(){
        const data = {
            action: "SIGNOUT"
        }
        fetch("/api/manager-auth", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(async res=>{
            const data = {
                status: res.status,
                text: await res.text()
            }
            return data
        })
        .then(res=>{
            updateStatusVariant(res.status, res.text, 3000);
            if(res.status == 200){
                setSignedIn(false);
            }
        })
        .catch(err=>{
            throw err;
        });
    }
    
    const USERNAME = "manager";
    const PASSWORD = "managemyburgers";

    return(
        <React.Fragment>
            <StatusModal color={statusColor} opacity={showStatus? 1 : 0}>
                        <h4>{statusModalText}</h4>
            </StatusModal>

            {signedIn ?
                <Container>
                    <Logout onClick={handleSignOut}>Log out</Logout>
                        
                    <Form onSubmit={e=>handleEntrySubmit(e)}>
                        <div>
                            <label htmlFor="type">Type: </label>
                            <select name="type" required>
                                <option value="Burger">Burger</option>
                                <option value="Salad">Salad</option>
                                <option value="Drink">Drink</option>
                            </select>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="name">Name: </label>
                                <Input type="text" name="name" required/>
                            </div>
                            
                            <div>
                                <label htmlFor="description">Description: </label>
                                <Input type="text" name="description" />
                            </div>

                            <div>
                                <label htmlFor="price">Price: </label>
                                <Input type="number" name="price" min="0" max="100" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="file-upload">{fileLabel? fileLabel : "Upload file"}</label>
                            <Input type="file" id="file-upload" accept=".png,.jpg,.jpeg" name="image" onChange={e=>handleFileUpload(e)} />
                        </div>

                        <Button>Add/Update</Button>
                    </Form>
                </Container>
                :
                <AuthenticationForm>
                    <Form onSubmit={e=>handleSignIn(e)}>
                        <div>
                            <label htmlFor="username">Username: </label>
                            <Input type="text" name="username" required defaultValue={USERNAME || ""} />
                        </div>

                        <div>
                            <label htmlFor="password">Password: </label>
                            <Input type="password" name="password" required defaultValue={PASSWORD || ""} />
                        </div>

                        <div>
                            <button>Sign In</button>
                        </div>
                    </Form>
                </AuthenticationForm>
            }
        </React.Fragment>
    )
}

export default Manager;