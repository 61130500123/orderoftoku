import styled from "styled-components"

export const Content = styled.div`
    max-width: 1024px;
    margin: auto;
    background: white;
    padding: 20px;
`

export const HeaderNFooter = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`
export const SimpleButton = styled.button`
    width: 200px;
    height: 40px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    background-color: #E33E11;
    color: white;

    :hover{
    background-color: #FF4512;
    }
`

export const InputFieldName = styled.p`
    color: white;
`
export const HeaderFieldName = styled.h1`
    color: white;
`
