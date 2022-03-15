import React from "react";
import styled, { css } from "styled-components";
import { colors, fontSize, fontWeight } from "_foundation";
import Icon from "../Icons/Icon";

function BasicButton({ children }) {
  return <StyledBtn>{children}</StyledBtn>;
}
export default BasicButton;

const StyledBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${(props) => props.width};
  height: 48px;
  padding: 0.6rem 1.5rem;

  border-radius: 4rem;
  border: 1px solid ${colors.gray0};
  color: ${colors.gray0};
  background-color: transparent;

  font-size: ${fontSize.xl};
  line-height: 1.75rem;
  text-align: center;
  text-decoration: none;

  transition: 0.2s;
  cursor: pointer;

  ${(props) =>
    css`
      :hover {
        background: ${colors.blue1};
      }
    `}

  svg {
    width: 22px;
    height: 22px;
    margin-left: 20px;
    vertical-align: top;
  }
`;
