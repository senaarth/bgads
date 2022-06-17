import styled from "styled-components";

export const Container = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0;

  overflow-x: hidden;
`;

export const ContentContainer = styled.div`
  width: 90%;
  max-width: 1200px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  a.logo {
    width: 30%;
    max-width: 10rem;

    img {
      max-width: 100%;
    }
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  button {
    height: 2.375rem;
    display: flex;
    align-items: center;
    color: #b1b1b1;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: capitalize;
    padding: 0 1.25rem;
    border-radius: 6px;
    transition: all 0.3s;
    outline: none;
    border: 0;
    background-color: transparent;
    cursor: pointer;

    &:hover,
    &.active {
      filter: brightness(1);
      color: #f6f6f6;
    }

    &.active {
      cursor: default;
      pointer-events: none;
      font-weight: 700;
    }
  }

  button + button {
    margin-left: 0.5rem;
  }

  @media (max-width: 720px) {
    display: none;

    position: absolute;
    inset: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.bg};

    flex-direction: column;

    button + button {
      margin: 0.5rem 0 0 0;
    }

    &.visible {
      display: flex;
    }

    -webkit-transform: translateX(0%);
    transform: translateX(0%);
    -webkit-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
    animation: fadeIn 0.5s;
    animation-fill-mode: forwards;
    -webkit-animation: fadeIn 0.5s;
    -webkit-animation-fill-mode: forwards;

    &.closing {
      animation: fadeOut 0.5s;
      animation-fill-mode: forwards;
      -webkit-animation: fadeOut 0.5s;
      -webkit-animation-fill-mode: forwards;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }

    @keyframes fadeOut {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
      }
    }
  }
`;

export const Hamburger = styled.button`
  width: 2.5rem;
  height: 2.25rem;
  padding: 0.5rem;
  background-color: transparent;
  border: 0;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  z-index: 100;

  span {
    width: 100%;
    height: 2px;
    background-color: #b1b1b1;
    span + span {
      margin-top: 0.5rem;
    }

    &.bar1 {
      transition: transform 0.6s;
    }

    &.bar2 {
      transition: opacity 0.6s;
    }

    &.bar3 {
      transition: transform 0.6s;
    }
  }

  transition: background-color 0.3s !important;

  &:hover {
    filter: brightness(1) !important;
    cursor: pointer;
  }

  &.close {
    span.bar1 {
      transform: rotate(-45deg) translate(-6px, 7px);
    }

    span.bar2 {
      opacity: 0;
    }

    span.bar3 {
      transform: rotate(45deg) translate(-5px, -7px);
    }
  }

  @media (min-width: 720px) {
    display: none;
  }
`;
