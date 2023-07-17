import React from "react";
import { BiLogoTailwindCss } from "react-icons/bi";
import { DiMongodb, DiNodejsSmall, DiReact } from "react-icons/di";
import { FiFigma } from "react-icons/fi";
import { SiAdobexd } from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Here are some of the technologies and tools that I have worked with.
    </SectionText>
    <List>
      <ListItem>
        <div>
          <DiReact size="3rem" />
          <BiLogoTailwindCss size="3rem" />
        </div>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js and Tailwind CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <div>
          <DiMongodb size="3rem" />
          <DiNodejsSmall size="3rem" />
        </div>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            MongoDB and Node.js <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <div>
          <FiFigma size="3rem" />
          <SiAdobexd size="3rem" />
        </div>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            Figma and Adobe XD
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
