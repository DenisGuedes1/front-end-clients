import { Link } from "react-router-dom";
import style from "styled-components";
export const Containerlogin = style.div`
width: 100vw;
background: linear-gradient(180deg, #100F0F 74.66%, #360707 100%);

height: 34rem;
`;
export const TitleLogin = style.h1`
color: #ff577f;

display: flex;
align-items: center;
align-content: center;
justify-content: center;
margin-top: 10rem;
width: 100vw;
`;
export const FormularioLogin = style.form`
  height: 370px;
  width: 369px;
  border-radius: 6rem;
  padding: 42px 22px 42px 22px;
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 0 auto;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  background-color: #212529;
`;
export const TitleFormLoginH3 = style.h3`
font-family: "Inter", sans-serif;
font-size: 18px;
font-weight: 700;
line-height: 28px;
letter-spacing: 0em;
text-align: center;
color: white;
`;
export const LabelFormLogin = style.label`
width: 22rem;
font: "Inter", sans-serif;
color: #f8f9fa;
font-size: 12px;
`;
export const WarningRegister = style.p`
font-family: "Inter", sans-serif;
font-size: 12px;
font-weight: 600;
line-height: 18px;
color: #868e96;
`;
export const Error = style.p`
color: white;
`;
export const ButnLogin = style.button`
margin-top: 1rem;
height: 48px;
width: 330px
border-radius: 8px;
padding: 0px 22px 0px 22px;
-webkit-border-radius: 8px;
-moz-border-radius: 8px;
-ms-border-radius: 8px;
-o-border-radius: 8px;
background-color: #ff577f;
font-family: "Inter", sans-serif;
font-size: 16px;
font-weight: 500;
line-height: 26px;
color: #f8f9fa;
border-color: #ff577f;
cursor: pointer;
`;
export const BtnPageLoginRegister = style.button`

height: 48px;
width: 330px
border-radius: 8px;
padding: 0px 22px 0px 22px;
-webkit-border-radius: 8px;
-moz-border-radius: 8px;
-ms-border-radius: 8px;
-o-border-radius: 8px;
background-color: #868e96;
font-family: "Inter", sans-serif;
font-size: 16px;
font-weight: 500;
line-height: 26px;
color: #ffff;
border-color: #868e96;
cursor: pointer;
`;
export const LinkStyle = style(Link)`
background-color: #868e96;
font-family: "Inter", sans-serif;
font-size: 16px;
font-weight: 500;
line-height: 26px;
color: #ffff;
border-color: #868e96;
text-decoration: none;

`;
export const InputAll = style.input`
height: 48px;
width: 330px;
border-radius: 8px;
padding: 0px 16px 0px 16px;
-webkit-border-radius: 8px;
-moz-border-radius: 8px;
-ms-border-radius: 8px;
-o-border-radius: 8px;

  outline-color: #ff577f;

`;
export const DivContent = style.div`
width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, #100F0F 74.66%, #360707 100%);

`;