import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.variant === "primary" ? "#26800a" : "#ffffff"};
  color: ${(props) => (props.variant === "primary" ? "#ffffff" : "#313131")};
  border: ${(props) =>
    props.variant === "outline" ? "1px solid #e9e9e9" : "none"};
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  gap: 10px;
  height: ${(props) => (props.size === "large" ? "59px" : "40px")};
  align-items: center;
  justify-content: center;
  padding: ${(props) => (props.size === "large" ? "16px 246px" : "8px 16px")};
  position: relative;
  flex-shrink: 0;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  font-size: ${(props) => (props.size === "large" ? "18px" : "15px")};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const Button = ({
  variant = "primary",
  size = "medium",
  fullWidth = false,
  children,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
