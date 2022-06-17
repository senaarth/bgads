import React from "react";
import { useRouter } from "next/router";

import { Container, ContentContainer, Contato } from "./styles";

export function Footer() {
  const router = useRouter();

  return (
    <Container>
      <ContentContainer>
        <Contato>
          <h4>Entre em contato</h4>

          <a
            href="https://api.whatsapp.com/send?phone=5561986071317"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/whatsapp.png" alt="Ícone whatsapp" />
            Via Whatsapp
          </a>

          <button type="button" onClick={() => router.push("/contato")}>
            <img src="/images/email.png" alt="Ícone email" />
            Via E-mail
          </button>
        </Contato>
        <img src="/images/logo_horizontal.png" alt="Logo BGads" />
      </ContentContainer>
    </Container>
  );
}
