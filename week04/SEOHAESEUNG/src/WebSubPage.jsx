import React from "react";
import styled from "styled-components";

// 이미지 상수들
const imgCabbage1 =
  "http://localhost:3845/assets/6cef8d9837fc1eb732a41db97cd4d22432c65125.png";
const imgRectangle699 =
  "http://localhost:3845/assets/6fe4825985976303125a5bde2d80ec461a303f9e.png";
const imgFrame948 =
  "http://localhost:3845/assets/edd109adade794b5f5be1a65df15ae13f11f461e.svg";

// Styled Components
const Container = styled.div`
  background-color: #ffffff;
  position: relative;
  width: 100%;
  height: 100%;
`;

const MainContent = styled.div`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  left: 200px;
  padding: 0;
  top: 145px;
  width: 1112px;
`;

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

const ProductDetailContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0;
  position: relative;
  flex-shrink: 0;
  width: 100%;
`;

const ProductImage = styled.div`
  background-color: #d9d9d9;
  background-position: 50% 50%, 0% 0%;
  background-size: cover, auto;
  flex-shrink: 0;
  width: 400px;
  height: 400px;
  background-image: ${(props) => `url('${props.src}')`};
`;

const ProductInfoContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 400px;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 40px;
  position: relative;
  flex-shrink: 0;
  width: 712px;
`;

const ProductInfoTop = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 168px;
  align-items: flex-start;
  justify-content: flex-start;
  line-height: 0;
  font-style: normal;
  padding: 20px 0;
  position: relative;
  flex-shrink: 0;
  text-align: left;
  width: 100%;
`;

const ProductTitleContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0;
  position: relative;
  flex-shrink: 0;
  width: 100%;
`;

const ProductTitle = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  justify-content: center;
  position: relative;
  flex-shrink: 0;
  color: #000000;
  font-size: 24px;
  white-space: nowrap;

  p {
    display: block;
    line-height: 27px;
    white-space: pre;
  }
`;

const ProductOrigin = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Pretendard", sans-serif;
  font-weight: 500;
  justify-content: center;
  min-width: 100%;
  position: relative;
  flex-shrink: 0;
  color: #acacac;
  font-size: 20px;
  width: min-content;

  p {
    display: block;
    line-height: 27px;
  }
`;

const ProductPrice = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  justify-content: center;
  position: relative;
  flex-shrink: 0;
  color: #000000;
  font-size: 40px;
  width: 100%;

  p {
    display: block;
    line-height: 44px;
  }
`;

const PurchaseButton = styled.div`
  background-color: #26800a;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  gap: 10px;
  height: 59px;
  align-items: center;
  justify-content: center;
  padding: 16px 246px;
  position: relative;
  flex-shrink: 0;
  width: 100%;
`;

const PurchaseButtonText = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  justify-content: center;
  line-height: 0;
  font-style: normal;
  position: relative;
  flex-shrink: 0;
  color: #ffffff;
  font-size: 18px;
  text-align: left;
  white-space: nowrap;

  p {
    display: block;
    line-height: 27px;
    white-space: pre;
  }
`;

const TopBanner = styled.div`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  left: 200px;
  overflow: clip;
  padding: 60px 0 25px 0;
  top: 0;
  width: 1112px;
`;

const LogoContainer = styled.div`
  background-color: #ffffff;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
  position: relative;
  flex-shrink: 0;
  width: 100%;
`;

const LogoWrapper = styled.div`
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

// WebLogo 컴포넌트
const WebLogo = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <div
        style={{
          position: "absolute",
          aspectRatio: "1024/1024",
          left: 0,
          right: "78.17%",
          top: "11.85px",
        }}
      >
        <div
          style={{
            position: "absolute",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            inset: 0,
            backgroundImage: `url('${imgCabbage1}')`,
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          fontFamily: "Sandoll_Hoyoyo2_TTF",
          fontWeight: 900,
          lineHeight: 0,
          left: "24.84%",
          fontStyle: "normal",
          right: 0,
          color: "#458431",
          fontSize: "40px",
          textAlign: "left",
          whiteSpace: "nowrap",
          top: 0,
        }}
      >
        <p style={{ display: "block", lineHeight: "60px", whiteSpace: "pre" }}>
          싱싱마트
        </p>
      </div>
    </div>
  );
};

// 메인 컴포넌트
const WebSubPage = () => {
  return (
    <Container>
      <MainContent>
        <BreadcrumbContainer>
          <BreadcrumbText>
            <p>채소</p>
          </BreadcrumbText>
          <BreadcrumbIcon>
            <img
              alt=""
              style={{
                display: "block",
                maxWidth: "none",
                width: "100%",
                height: "100%",
              }}
              src={imgFrame948}
            />
          </BreadcrumbIcon>
          <BreadcrumbText>
            <p>고구마/감자</p>
          </BreadcrumbText>
        </BreadcrumbContainer>

        <ProductDetailContainer>
          <ProductImage src={imgRectangle699} />
          <ProductInfoContainer>
            <ProductInfoTop>
              <ProductTitleContainer>
                <ProductTitle>
                  <p>햇 감자 2kg(박스)</p>
                </ProductTitle>
                <ProductOrigin>
                  <p>원산지 : 국산</p>
                </ProductOrigin>
              </ProductTitleContainer>
              <ProductPrice>
                <p>5,490원</p>
              </ProductPrice>
            </ProductInfoTop>
            <PurchaseButton>
              <PurchaseButtonText>
                <p>바로 구매</p>
              </PurchaseButtonText>
            </PurchaseButton>
          </ProductInfoContainer>
        </ProductDetailContainer>
      </MainContent>

      <TopBanner>
        <LogoContainer>
          <LogoWrapper>
            <WebLogo />
          </LogoWrapper>
        </LogoContainer>
      </TopBanner>
    </Container>
  );
};

export default WebSubPage;
