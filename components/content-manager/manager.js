import React, { useState } from "react"

//Styles
import {Container, Form, Input, Button} from './manager-styles'




function Manager(props){
    const [fileLabel, setFileLabel] = useState("");
    function handleFileUpload(e){
        const filename = e.target.files[0].name;
        setFileLabel(filename);
    }


    return(
        <Container>
            <Form action="/content-manager" method="POST">
                <Input type="text" placeholder="Section" name="section" />
                <div>
                    <Input type="text" placeholder="Title" name="title" />
                    <Input type="text" placeholder="Subtitle" name="subtitle" />
                    <textarea type="text" placeholder="Paragraph" name="paragraph" />
                    <Input type="text" placeholder="Button" name="button" />
                </div>
                <div>
                    <label htmlFor="file-upload" class="custom-file-upload">{fileLabel? fileLabel : "Upload file"}</label>
                    <Input type="file" id="file-upload" accept=".png,.jpg,jpeg" name="file" onChange={e=>handleFileUpload(e)}/>
                </div>

                <Button>Update</Button>
            </Form>
        </Container>
    )
}

export default Manager;