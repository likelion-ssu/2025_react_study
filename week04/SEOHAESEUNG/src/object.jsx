import React from "react";
import styled from "styled-components";

// 이미지 상수들
const imgRectangle692 =
  "http://localhost:3845/assets/6fe4825985976303125a5bde2d80ec461a303f9e.png";
const imgSolarHeartLinear =
  "http://localhost:3845/assets/682f74e229b95757d271c46bcd880ce457f23a31.svg";

// Styled Components
const Container = styled.div`
  background-color: #ffffff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0;
  position: relative;
  width: 100%;
  height: 100%;
`;

const ProductImage = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 227px;
  flex-shrink: 0;
  width: 227px;
  background-image: ${(props) => `url('${props.src}')`};
`;

const ProductInfoContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0;
  position: relative;
  flex-shrink: 0;
  width: 100%;
`;

const ProductTextContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0;
  position: relative;
  flex-shrink: 0;
  width: 227px;
`;

const ProductName = styled.div`
  font-family: "Pretendard", sans-serif;
  font-weight: 500;
  line-height: 0;
  font-style: normal;
  position: relative;
  flex-shrink: 0;
  color: #000000;
  font-size: 15px;
  text-align: left;
  width: 100%;

  p {
    display: block;
    line-height: normal;
  }
`;

const ProductPrice = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  font-family: "Pretendard", sans-serif;
  font-weight: 700;
  gap: 5px;
  align-items: flex-start;
  justify-content: flex-start;
  line-height: 0;
  font-style: normal;
  padding: 0;
  position: relative;
  flex-shrink: 0;
  color: #000000;
  font-size: 20px;
  text-align: left;
  white-space: nowrap;
  width: 100%;

  p {
    display: block;
    line-height: 24px;
    white-space: nowrap;
    white-space: pre;
  }
`;

const LikeContainer = styled.div`
  height: 16px;
  position: relative;
  flex-shrink: 0;
  width: 46px;
`;

const LikeIcon = styled.div`
  position: absolute;
  left: 0;
  overflow: clip;
  width: 16px;
  height: 16px;
  top: 0;

  > div {
    position: absolute;
    left: 0;
    width: 16px;
    height: 16px;
    top: 0;
  }
`;

const LikeCount = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  font-family: "Pretendard", sans-serif;
  font-weight: 500;
  justify-content: center;
  line-height: 0;
  left: 21px;
  font-style: normal;
  color: #000000;
  font-size: 13px;
  text-align: left;
  white-space: nowrap;
  top: 2px;
  transform: translateY(-50%);

  p {
    display: block;
    line-height: 16px;
    white-space: pre;
  }
`;

// WebItem 컴포넌트 (내부 구조)
const WebItem = ({ product }) => {
  const { name, price, image, likes } = product;

  return (
    <div
      style={{
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: 0,
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <ProductImage src={imgRectangle692} />
      <ProductInfoContainer>
        <ProductTextContainer>
          <ProductName>
            <p>{name}</p>
          </ProductName>
          <ProductPrice>
            <div>
              <p>{price.toLocaleString()}</p>
            </div>
            <div>
              <p>원</p>
            </div>
          </ProductPrice>
        </ProductTextContainer>
        <LikeContainer>
          <LikeIcon>
            <div>
              <img
                alt=""
                style={{
                  display: "block",
                  maxWidth: "none",
                  width: "100%",
                  height: "100%",
                }}
                src={imgSolarHeartLinear}
              />
            </div>
          </LikeIcon>
          <LikeCount>
            <p>{likes}</p>
          </LikeCount>
        </LikeContainer>
      </ProductInfoContainer>
    </div>
  );
};

// 메인 컴포넌트
const WebItem1 = ({ product }) => {
  // 기본 상품 데이터
  const defaultProduct = {
    name: "햇 감자 2kg(박스)",
    price: 5490,
    image: imgRectangle692,
    likes: 343,
  };

  const productData = product || defaultProduct;

  return (
    <Container>
      <WebItem product={productData} />
    </Container>
  );
};

export default WebItem1;
