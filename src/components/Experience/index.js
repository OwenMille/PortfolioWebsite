import React from 'react';
import Icon1 from '../../images/teacher.svg';
import Icon2 from '../../images/pencil.svg';
import Icon3 from '../../images/people.svg';
import {
  ExperienceContainer,
  ExperienceH1,
  ExperienceWrapper,
  ExperienceCard,
  ExperienceIcon,
  ExperienceH2,
  ExperienceH3,
  ExperienceP
} from './ExperienceElements';

const Experience = () => {
  return (
    <ExperienceContainer id='Experience'>
      <ExperienceH1>Experience</ExperienceH1>
      <ExperienceWrapper>
        <ExperienceCard>
          <ExperienceIcon src={Icon1} />
          <ExperienceH3>MATH INSTRUCTOR,</ExperienceH3> <ExperienceH2>MATHNASIUM</ExperienceH2>
          <ExperienceP>
            At  15 I made it my mission to get into the workforce, and here I could apply my favorite subject in school and work on my people and teaching skills 
            Tutored 2 – 4 kids at a time, Developed my ability to divide my effort and time. July 2016 - 2017
          </ExperienceP>
        </ExperienceCard>
        <ExperienceCard>
          <ExperienceIcon src={Icon2} />
          <ExperienceH3>PSYCH ASSISTANT,</ExperienceH3> <ExperienceH2>INDEPENDENT CONTRACTOR</ExperienceH2>
          <ExperienceP> 
            Organized and uploaded client files into an online database. July 2018 - December 2019  
          </ExperienceP>
        </ExperienceCard>
        <ExperienceCard>
          <ExperienceIcon src={Icon3} />
          <ExperienceH3>CUSTOMER SERVICE, SALES, DELIVERY, ASST. MANAGER</ExperienceH3> <ExperienceH2>PRIMOS PIZZA</ExperienceH2>
          <ExperienceP>
            Developed strong bonds with coworkers, Primos is an independent family business with about 10 people.
            Handled weekly shipments, bills, customer complaints, and delivery. Because of low staffing, 
            I acted as the manager twice a week, delegating jobs. May 2020 - September 2021
          </ExperienceP>
        </ExperienceCard>
      </ExperienceWrapper>
    </ExperienceContainer>
  );
};

export default Experience;
