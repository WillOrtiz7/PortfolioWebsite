import React from "react";

import { Section, SectionTitle } from "../../styles/GlobalComponents";
import { Box, BoxNum, BoxText, Boxes } from "./AcomplishmentsStyles";

const data = [
  { number: 5, text: "Dean's List Award" },
  { number: 3.7, text: "Computer Science GPA" },
  { number: 20, text: "PC's Built" },
  { number: 7, text: "Years of Working Out Consistently" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
