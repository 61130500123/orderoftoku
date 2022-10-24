import styled from "styled-components";


export const NOHightlight = styled.div`
    font-weight: bold;
    border-radius: 50%;
    background-color: #B2B2B2;
    height: 40px;
    width: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
`

export const InputInfo = styled.div`
    flex-direction: column;
    justify-items: center;
    display: flex;
    margin-left: 20px;
    margin-bottom: 20px;

    input {
    margin-top: 6px;
    color: #494949;
    padding: 16px 22px;
    width: 400px;
    margin-bottom: 24px;
    font-size: 14px;
    border: 1px solid #D6D6D6;
    border-radius: 10px;
    transition: border-color 0.25s ease-in;

    :focus {
        border-color: #FF4512;
        outline: 0;
        }
    }

    
    label{
        font-size: 18px;
        font-weight: bold;
        color: #494949;
    }

    textarea{
        margin-top: 6px;
        width: 80%;
        font-size: 18px;
        padding: 10px;
        padding-left: 20px;
        transition: border-color 0.25s ease-in;
        border-color: #D6D6D6;
        border-radius: 10px;

    :focus {
        border-color: #FF4512;
        outline: 0;
        }
    }
`
export const UploadImgContainer = styled.div`
    justify-items: center;
    color: #141414;
    background: #fff;
    padding: 1rem;
    border-radius: 10px
`
export const RemoveImg = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    text-align: center;

    input{
    margin-top: 20px;
    width: 120px;
    height: 40px;
    font-size: 13px;
    font-weight: bold;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    background-color: #E33E11;
    color: white;

        :hover{
        background-color: #FF4512;
        }
    }
`

export const ShowImg = styled.div`
    height: 337.50px;
    width: 600x;
    display: grid;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 8px;

    input{
        display: none;
    }

    label{
        border: dashed;
        color: #FF4512;
        font-size: 22px;
        font-weight: 500;
        padding: 6px 12px;
        cursor: pointer;
        border-radius: 8px;
    }

    img{
    height: 800px;
    width: 450px;
    }
`