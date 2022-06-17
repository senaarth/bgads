import React from "react";

import { NavLink } from "../NavLink";

import { Container, ContentContainer, Hamburger, Navigation } from "./styles";

export function Header() {
  const [menuOpen, setMenu] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  function handleClose() {
    setIsClosing(true);

    setTimeout(() => {
      setIsClosing(false);
      setMenu(false);
    }, 600);
  }

  return (
    <Container>
      <ContentContainer>
        <a href="/" className="logo">
          <img src="/images/logo_horizontal.png" alt="Logo BGads" />
        </a>
        <Navigation
          className={menuOpen ? `visible ${isClosing ? "closing" : ""}` : ""}
        >
          <NavLink onClick={() => handleClose()} href="/" label="Home" />
          <NavLink
            onClick={() => handleClose()}
            href="/projetos"
            label="Projetos"
          />
          <NavLink onClick={() => handleClose()} href="/sobre" label="Sobre" />
          <NavLink
            onClick={() => handleClose()}
            href="/contato"
            label="Contato"
          />
        </Navigation>
        <Hamburger
          className={menuOpen ? "close" : ""}
          onClick={() => {
            if (!menuOpen) {
              setIsClosing(false);
              setMenu(true);
              return;
            }

            handleClose();
          }}
        >
          <span className="bar1" />
          <span className="bar2" />
          <span className="bar3" />
        </Hamburger>
      </ContentContainer>
    </Container>
  );
}
