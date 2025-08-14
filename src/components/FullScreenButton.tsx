import * as React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 40px;
  height: 35px;
  vertical-align: middle;
  cursor: pointer;
  border: none;
  opacity: 0.7;
  background: none;
  &:hover {
    opacity: 1; 
  }
`;

const FullScreenButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <Button {...props}>
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="style=linear">
        <g id="fullscreen">
          <path id="vector" d="M8 2H4C2.89543 2 2 2.89543 2 4V8" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" />
          <path id="vector_2" d="M22 8L22 4C22 2.89543 21.1046 2 20 2H16" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" />
          <path id="vector_3" d="M16 22L20 22C21.1046 22 22 21.1046 22 20L22 16" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" />
          <path id="vector_4" d="M8 22L4 22C2.89543 22 2 21.1046 2 20V16" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" />
        </g>
      </g>
    </svg>
  </Button>;
};

export default FullScreenButton;
