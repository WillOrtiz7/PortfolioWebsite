import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello World, <br />
        I'm Will Ortiz
      </SectionTitle>
      <SectionText>Click below to find my resume.</SectionText>
      <Button onClick={() => (window.location = "https://drive.google.com/file/d/1upY67mVQe2ST0XJqP_QfJYlrrff055Wa/view?usp=sharing")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
