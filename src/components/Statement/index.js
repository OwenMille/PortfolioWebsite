import React from 'react';
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
} from '../InfoSection/InfoElements';
import {
  Container,
  Form,
  FormH1,
  Icon,
  Text,
  A,
  VideoBg,
  NavBtn,
  NavBtnLink
} from './StatementElements';

import { Button } from '../ButtonElements';
import Video from '../../images/statementVid1.mkv'
const Statement = () => {
  return (
    <>
      <Container>
      <NavBtn>
              <NavBtnLink to='/'>Home</NavBtnLink>
            </NavBtn>
        <InfoWrapper>
        <Column1>
            <Form>
              <TextWrapper>
                <Heading lightText>Author Statement</Heading>
                <Subtitle lightText> - Creating My First Site -</Subtitle>
                <Text>
                Choosing to create a website from scratch was an opportunity for myself to do something for the first 
                time. This was a learning experience like no other. A week before comitting myself to the idea, I had just 
                started learning for my résumé Facebook’s JavaScript library React. This was a big change from what my 
                Wayne State classes taught me, C++ and Java, and presented a great challenge. The day of this project’s 
                due date came fast though, and I thought that putting 15 hours or so would be enough to learn and 
                create a site. However, once I started putting components of the idea I had in my head together in code, 
                everything kept breaking. My site going into that Monday was a page of animated text boxes that 
                opened when you tapped them with information and pictures inside.    
                <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
               </Text>
                </TextWrapper>
                </Form>
                </Column1>
                </InfoWrapper>
                </Container>
                <Container>
        <InfoWrapper>
        <Column1>
                <Form>
                  <TextWrapper>
                    <Text>
                Whenever I tried to add any other element, this design broke down, and Tuesday morning I decided to 
                scrap everything and start clean with a basic UI focusing on clear sections. This is when I decided I would 
                do a head section and 4 smaller sections that could be accessed via navbar. I also wanted to challenge 
                myself and figure out how to travel to a different page (adding Author Statement this took me about 4 
                  hours) but it’s something that’s necessary for any website I build in the future so it was worth it. 
                  </Text>
                </TextWrapper>
                </Form>
                </Column1>
                </InfoWrapper>
                </Container>
                <Container>
                  <InfoWrapper>
                <Column1>
            <Form>
              <TextWrapper>
                <Text>
                      For the final version of the website, my idea was to treat it as professional as I could for job applications, 
                  unfortunately it was restricted by my poor time management, because in Web Development an 
                  applicant having their own website for their résumé is the norm. It isn’t perfect, but the base I built is 
                  scalable to add more components in the future. My next step would be to add more interactivity and 
                  animations for the text, and possibly something more creative than the standard navbar at the top. 
                </Text>
              </TextWrapper>
                <Subtitle lightText>Sources</Subtitle>
                <Text>
                  Planet SVG icons from <A href="https://github.com/briancodex/react-framer-v1/tree/main/src/images">
                     here</A>
                </Text>
                <Text>
                  Work Experience icons from <A href="https://www.iconfinder.com/">
                     here</A>
                </Text>
                <Text>
                   Abstract digital video can be found <A href="https://github.com/briancodex/react-framer-v1/tree/main/src/images">
                     here</A>
                </Text>
              </Form>
              </Column1>
        </InfoWrapper>   
        <NavBtn>
              <NavBtnLink to='/'>Home</NavBtnLink>
            </NavBtn>    
      </Container>
    </>
  );
};


export default Statement;
