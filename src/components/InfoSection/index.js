import React from 'react';
import { Button } from '../ButtonElements';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img
} from './InfoElements';


import icon1 from '../../images/planet-4.svg'
import icon2 from '../../images/planet-2.svg'
import icon3 from '../../images/code-phone.svg'

const InfoSection = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  destination,
  buttonLabel,
  planet,
  planet2,
  phone,
  contact,
  alt,
  id,
  primary,
  darkText,
  dark,
  dark2
}) => {
  const planett = planet;
  const planett2 = planet2
  const phonee = phone;
  const contactt = contact;
  console.log(primary);
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                {contactt ? (
                  <TopLine>248-962-5819</TopLine>
                ) : ("")}
                {!contactt ? (
                  <BtnWrap>
                    <Button
                      to={destination}
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact='true'
                      offset={-80}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                    >
                      {buttonLabel}
                    </Button>
                  </BtnWrap>
                ) : ("")}
              </TextWrapper>
            </Column1>
            <Column2>
            {planett ? (
              <ImgWrap>
                <Img src= {icon1} alt={alt} />
              </ImgWrap>
            ) : ("")}
              {planett2 ? (
              <ImgWrap>
                <Img src= {icon2} alt={alt} />
              </ImgWrap>
            ) : ("")}
            {phonee ? (
              <ImgWrap>
                <Img src= {icon3} alt={alt} />
              </ImgWrap>
            ) : ("")}
            </Column2>
          
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
