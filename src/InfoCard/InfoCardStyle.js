import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: none;
    border-radius: 20px;
    box-shadow: 0px 2px 20px #d7dfe2;
    overflow: hidden;
    flex: 0 0 240px;
    margin: 1.5rem;
    transition: 250ms all ease-in-out;
    width: 320px;

    :hover{
		transform: scale(1.05);
    }
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem;
    border: none;
`
export const Title = styled.h2`
    font-size: 1.25rem;
    font-weight: bold;
    margin: 0;
`

export const Date = styled.div`
    line-height: 25px;
    color: #6c757d;
`
export const Participant = styled.div`
    font-weight: 300;
`
export const Image = styled.img`
    width: 320px;
    height: 180px;
    
`
export const CardButton = styled.button`
  width: 100%;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  padding: 1rem;
  background-color: #FF4512;
  cursor: pointer;
`