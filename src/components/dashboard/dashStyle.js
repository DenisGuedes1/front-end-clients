import style from "styled-components";
export const NavDash = style.nav`
display: flex;
justify-content: space-between;
padding: 1rem;
height: 72px;
width: 100vw;
`;
export const SpanHeader = style.span`
display: flex;
width: 89%;
align-items: center;
justify-content: center;
gap: 36rem;
`;
export const ImgHeader = style.img`
width: 10rem;
`;
export const Btnlogout = style.button`
height: 32px;
width: 56px;
left: 1050px;
top: 20px;
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
cursor: pointer;
`;
export const HeaderInfoUser = style.header`
padding: 1rem;
display: flex;
gap: 30rem;
align-items: center;
justify-content: center;
height: 7rem;
`;
export const NameTiltle = style.p`
color: white;

font-family: "Inter", sans-serif;
font-size: 18px;
font-weight: 700;
line-height: 28px;
letter-spacing: 0em;
text-align: left;
`;
export const NameModule = style.p`
font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0em;
  color: rgba(134, 142, 150, 1);
`;
export const InfoSiteCrash = style.p`
color: white;

font-family: "Inter", sans-serif;
font-size: 18px;
font-weight: 700;
line-height: 28px;
letter-spacing: 0em;
padding: 1rem;
`;

export const ModalDiv = style.div`
display: flex;
    flex-direction: column;
    width: 60%;
  
    gap: 12rem;
    align-items: center;
    justify-content: center;
    position: absolute;
   
    margin: 9rem 0rem 0rem 26rem;
  
`;
export const ModalDivEdit = style.div`
display: flex;
    flex-direction: column;
    width: 64%;
    height: 1rem;
    gap: 12rem;
    align-items: center;
    justify-content: center;
    position: absolute;
   
    margin: 9rem 0rem 0rem 26rem;
  
`;
export const FormEdit = style.form`

    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 41%;
    height: 33rem;
    gap: 1rem;
    background-color: rgb(33, 37, 41);

`
export const FormAddContact = style.form`
display: flex;

flex-direction: column;
justify-content: center;
align-items: center;
width: 41%;
height: 55rem;
gap:1rem;
background-color: #212529;
`;
export const SpanbtnClose = style.span` 
display: flex;
    gap: 5rem;
`;
export const TitleModalAddContact = style.p`

font-family: "Inter", sans-serif;
font-size: 19px;
font-weight: 700;
line-height: 24px;

color:#F8F9FA;

`;
export const LabelAll = style.label`
font-family: "Inter", sans-serif;
font-size: 12px;
font-weight: 400;
letter-spacing: 0em;
text-align: left;
width: 20rem;

color:#F8F9FA;
`;
export const InputModalAdd = style.input`
height: 48px;
width: 330px;
left: 0px;

border-radius: 4px;
background-color: #343B41;
color:#F8F9FA;
&& placceholder{
  color:#F8F9FA
}

`;
export const SelectaddModal = style.select`
height: 48px;
width: 330px;
left: 0px;

border-radius: 4px;
padding: 0px 16px 0px 16px;
background-color: #343B41;
color:#F8F9FA;
outline:#343B41;
`;
export const SpanTitleEClose = style.span`
gap: 8rem;
display: flex;
background-color: #343B41;
widht:24rem;
padding:1rem;
`;
export const ButtonCLoseModal = style.button`
background-color: #343B41;
border:none;
cursor:pointer;
color: #868E96;
font-family: "Inter", sans-serif;
font-size:16px;
`;
export const ButtonCadContact = style.button`
height: 48px;
width: 324px;
left: 22px;
top: 262px;
border-radius:8px;
padding: 0px 22px 0px 22px;
background-color:rgba(255, 87, 127, 1);
cursor:pointer;
border-color:rgba(255, 87, 127, 1);
cursor:pointer;


font-family: "Inter", sans-serif;
font-size: 16px;
font-weight: 500;
line-height: 26px;
letter-spacing: 0em;

color: white;


`;
export const DivNameTitleBtnADD = style.div`
display: flex;
  
    align-content: center;
    justify-content: center;
    gap: 38rem;
    margin-top: 1rem;
    width: 94%;
`;
export const H1Contact = style.h3`
font-family: "Inter", sans-serif;
font-size: 16px;
font-weight: 600;
line-height: 18px;
color: #F8F9FA;

`;
export const ButtonOpenModal = style.button`
height: 32px;
width: 33px;
text-align: center;
border-radius: 4px;
color:rgba(255, 255, 255, 1);
background-color:#212529;
border-color:#212529;
`;
export const MainContact = style.main`
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
`;
export const SectionContact = style.section`    
display: flex;
flex-direction: column;
gap: 1rem;
width: 70%;
padding: 2rem;
background-color: rgba(33, 37, 41, 1);
`;

export const UlConteinerContact = style.ul`

height: 40%;
width: 100%;
display: flex;
background-color: #121214;  
 align-items: center;
`;
export const LiContactList = style.li`
display: flex;
gap: 15.5rem;
width: 48rem;
padding: 1rem;
&focus:{
    background-color:rgba(33, 37, 41, 1);

}
`;
export const NameContact = style.p`
font-family: "Inter", sans-serif;
font-size: 14px;
font-weight: 700;
width: 6rem;
letter-spacing: 0em;
text-align: left;
color:rgba(255, 255, 255, 1);

`;
export const EmailContact = style.p`
font-family:"Inter", sans-serif;
font-size: 12px;
width: 13%;
font-weight: 400;
line-height: 22px;
color:rgba(134, 142, 150, 1);
`;
export const PhoneContact = style.span`
display: flex;
    width: 24rem;
    justify-content: end;
    gap: 3rem;
`;
