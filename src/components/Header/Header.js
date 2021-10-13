import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineProfile } from "react-icons/ai";
import { BiFace } from "react-icons/bi";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <BiFace size="3rem" /> <Span>Will Ortiz</Span>
        </a>
      </Link>
    </Div1>
    {/* MAIN NAV BAR */}
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    {/* SOCIAL ICONS WITH LINKS */}
    <Div3>
      <SocialIcons href="https://www.linkedin.com/in/willortiz7/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://github.com/WillOrtiz7">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://drive.google.com/file/d/1upY67mVQe2ST0XJqP_QfJYlrrff055Wa/view?usp=sharing">
        <AiOutlineProfile size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
