import styled from "styled-components"

export const Container = styled.div`
    border: 1px solid white;
    margin: 0 5%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 
        "image text text text";
`;

export const Image = styled.image`
    border-radius: 50%;
`
export const TextContainer = styled.div`

`

export const Name = styled.div`

`

export const Comment = styled.div`

`