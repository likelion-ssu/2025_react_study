import React from "react";
import styled from "styled-components";

const LogoContainer = styled.div`
  height: 60px;
  position: relative;
  flex-shrink: 0;
  width: 166.3px;
`;

const LogoIcon = styled.div`
  position: absolute;
  aspect-ratio: 1024/1024;
  left: 0;
  right: 78.17%;
  top: 11.85px;

  > div {
    position: absolute;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    inset: 0;
    background-image: ${(props) => `url('${props.src}')`};
  }
`;

const LogoText = styled.div`
  position: absolute;
  bottom: 0;
  font-family: "Sandoll_Hoyoyo2_TTF", sans-serif;
  font-weight: 900;
  line-height: 0;
  left: 24.84%;
  font-style: normal;
  right: 0;
  color: #458431;
  font-size: 40px;
  text-align: left;
  white-space: nowrap;
  top: 0;

  p {
    display: block;
    line-height: 60px;
    white-space: pre;
  }
`;

const Logo = ({ text = "싱싱마트", imageSrc }) => {
  return (
    <LogoContainer>
      <LogoIcon src={imageSrc}>
        <div />
      </LogoIcon>
      <LogoText>
        <p>{text}</p>
      </LogoText>
    </LogoContainer>
  );
};

export default Logo;
