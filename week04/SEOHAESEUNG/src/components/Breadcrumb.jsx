import React from "react";
import styled from "styled-components";

const BreadcrumbContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  gap: 3px;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  position: relative;
  flex-shrink: 0;
  width: 100%;
`;

const BreadcrumbText = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Pretendard", sans-serif;
  font-weight: 500;
  justify-content: center;
  line-height: 0;
  font-style: normal;
  position: relative;
  flex-shrink: 0;
  color: #4a4a4a;
  font-size: 15px;
  text-align: left;
  white-space: nowrap;

  p {
    display: block;
    line-height: 16px;
    white-space: pre;
  }
`;

const BreadcrumbIcon = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
`;

const Breadcrumb = ({ items, separatorIcon }) => {
  return (
    <BreadcrumbContainer>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <BreadcrumbText>
            <p>{item}</p>
          </BreadcrumbText>
          {index < items.length - 1 && (
            <BreadcrumbIcon>
              <img
                alt=""
                style={{
                  display: "block",
                  maxWidth: "none",
                  width: "100%",
                  height: "100%",
                }}
                src={separatorIcon}
              />
            </BreadcrumbIcon>
          )}
        </React.Fragment>
      ))}
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;
