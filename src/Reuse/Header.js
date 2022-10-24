import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    z-index: 1;
    height: 100%;
    width: 100%;
    padding: 0 35px;
    margin-bottom: 10px;
`
export const Heading = styled.div`
    font-size: 32px;
    display: flex;
    align-items: center;
    margin-top: 25px;
    margin-left: 140px;
    font-weight: bold;
    text-decoration: none;
    padding: 24px;
    overflow: hidden;
`
export const NewPost = styled.button`
    margin-right: 180px;
    width: 200px;
    height: 40px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    margin-top: 44px;
    background-color: #E33E11;
    color: white;

    :hover{
    background-color: #FF4512;
    }
`