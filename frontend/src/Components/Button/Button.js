import React from "react";
import styled from "styled-components";

function Button({ name, icon, onClick, bg, bPad, color, bRad }) {
  return (
    <ButtonStyled
      style={{
        background: bg,
        padding: bPad,
        borderRadius: bRad,
        color: color,
      }}
      onClick={onClick}
    >
      {icon}
      {name}
    </ButtonStyled>
  );
}
const ButtonStyled = styled.button`
  outline: none;
  border: none;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 0.75rem 1.5rem;
  background: #007bff;
  color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease-in-out;

  &:hover {
    background: #0056b3;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }

  &:active {
    background: #004085;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    transform: translateY(0);
  }
`;

export default Button;
