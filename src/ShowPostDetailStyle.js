import styled from "styled-components"

export const PostDetailContainer = styled.div`
    display: grid;
    background-color: #f5f5f7;
    grid-template-columns: 15% 85%;
    min-width: fit-content;
`
export const PostDetailNav = styled.nav`
    overflow: auto;
    background-color: black;
    position: sticky;
    top: 0;
    color: #fff;
    min-width: fit-content;
`
export const PostSideBarWrapper = styled.form`
    justify-content: center;
`
export const PostSideBarContent = styled.div`
    justify-content: center;  
    border-top: 0.1px solid #28282B;
    border-bottom: 0.1px solid #28282B;
    padding: 20px;
    color: #fff;
    font-size: 14px;

    label{
        color: #fff;
        font-size: 12px;
    }

    img{
        height: 120px;
        width: 213.3px;
        border-radius: 4px;
    }

    h2{
        text-align: center;
    }

`

export const PostDetailWrapper = styled.form`
    overflow: auto;
    padding: 20px;
`
export const PostDetailContent = styled.div`
    margin: 10px;
    padding: 20px;
    border-radius: 10px;
    background-color: #fff;
`
export const SideBarButton = styled.button`
    margin-top: 10px;
    width: 100%;
    height: 50px;
    border: none;
    color: #fff;
    font-size: 16px ;
    background-color: black;
    cursor: pointer;
    
    :hover{
    background-color: #1D1D1E;
    border-left: 4px solid;
    border-color: #FA4616;
    }
`
export const DeleteButton = styled.button`
    margin-top: 10px;
    width: 100%;
    height: 50px;
    border:  2px solid;
    color: #A80505;
    border-color: #A80505;
    font-size: 16px;
    background-color: black;
    cursor: pointer;
    
    :hover{
    background-color: #1D1D1E;
    border: 2px solid;
    border-color: #FF0000;
    color: #FF0000;
    }
`

export const PostImgPreview = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;

    img{
    width: 854px;
    height: 480px;
    border-radius: 4px;
    }
`

export const TableContent = styled.div`
    display: flex;
    justify-content: center;
    background-color: white;
    width: 100%;
    padding: 20px;
    margin:0 auto;

    table{
        text-align: justify;
        width: 100%;
        border: none;
    }

    tr{
        :hover{
        background-color: #F6F6F6;
        border-left: 4px solid;
        }
    }

    th{
        height: 60px;
        font-size: 20px;
        color: #fff;
        background-color: #FA4616;
        padding: 20px;

    }
    
    td{
        height: 40px;
        padding: 20px;
        font-size: 16px bold;
        border-bottom: 0.5px solid;
        border-color: #d2d2d2;     
    }

    img{
        justify-content: center;
        align-items: center;

    
    }

    button{
    margin-top: 10px;
    width: 100%;
    height: 50px;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    padding: 1rem;
    background-color: #FF4512;
    cursor: pointer;
    }
`
