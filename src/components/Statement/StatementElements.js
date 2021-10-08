import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Link as LinkR } from 'react-router-dom';

export const Container = styled.div`
  min-height: 692px;
 
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  background: linear-gradient(90deg, #23cbf5, #000000);

`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const VideoBg = styled.video`
  padding: 10px;
  width: 60%;
  height: 60%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #010101;
  justify-content: center;
  positon: relative;
`;

export const Form = styled.form`

  background: #010101;
  max-width: 900px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 14px;
  color: #fff;
  font-size: 19px;
  font-family: "TisaSansPro";

`;
export const A = styled.a`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 19px;
  font-family: "TisaSansPro";

`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  padding-left: 39vh;
  padding-top: 2vh;
  padding-bottom: 2vh;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-family: "TisaSansPro";

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
