import style from "styled-components";

export const DivConteiner = style.div`
width: 100%;

`;
export const TitleEbtn = style.span`
display: flex;
align-items: center;
justify-content: center;
gap: 2rem;
margin: 5rem auto;
`;
export const TitleP = style.h1`
color: #ff577f;
`;
export const ButtonBack = style.button`
height: 40.10990524291992px;
width: 67.48529052734375px;
left: 837px;
top: 48px;
border-radius: 4px;
padding: 0px 16px 0px 16px;
background-color: #212529;
font-family: "Inter", sans-serif;
font-size: 12px;
font-weight: 600;
line-height: 28px;
letter-spacing: 0em;
text-align: center;
color: #f8f9fa;
cursor:pointer;
`;
export const Formulario = style.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 2px;
margin: 0 auto;
width: 40%;
height: 45rem;
background-color: #212529
`;
export const TitleForm = style.h3`
font-family: "Inter", sans-serif;
font-size: 18px;
font-weight: 700;
line-height: 28px;
letter-spacing: 0em;
text-align: left;
color: white;
`;
export const LabelAll = style.label`
width: 33%;
color: white;
position: initial;
`;
export const Allinput = style.input`
height: 48px;
width: 360px;
border-radius: 8px;
padding: 0px 16px 0px 16px;
-webkit-border-radius: 8px;
-moz-border-radius: 8px;
-ms-border-radius: 8px;
-o-border-radius: 8px;
outline-color: #ff577f;

`;

export const ErrorP = style.p`
color: white;
`;
export const BtnCadastrar = style.button`
height: 48px;
width: 360px;
left: 22px;
top: 815px;
border-radius: 8px;
padding: 0px 22px 0px 22px;
-webkit-border-radius: 8px;
-moz-border-radius: 8px;
-ms-border-radius: 8px;
-o-border-radius: 8px;
margin-top: 1rem;
background-color: rgba(89, 50, 63, 1);

font-family: "Inter", sans-serif;
font-size: 16px;
font-weight: 500;
line-height: 26px;
letter-spacing: 0em;

color: white;
cursor: pointer;
&hover{
  background-color: #ff577f;
}
`;
