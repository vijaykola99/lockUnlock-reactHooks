import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(#161617, #0b0c1e, #3c2940);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
`
export const Image = styled.img`
  height: 70px;
  width: 70px;
  margin-bottom: 30px;
`
export const Paragraph = styled.p`
  color: #ffffff;
  font-family: ${props => (props.lock ? 'Roboto' : 'normal')};
`
export const Button = styled.button`
background:#06b6d4;
font-family:'Roboto';
color:#e2e8f0;
border-radius:5px;
border:0px
padding:20px;
padding-left:20px;
padding-right:20px;
font-weight:600;
height:36px;
margin-top:30px;
cursor:pointer;
width:90px;

`
