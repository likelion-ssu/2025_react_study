import React from "react";
import styled from "styled-components";

const ProductCardContainer = styled.div`
  background-color: #ffffff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 363px;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0;
  position: relative;
  flex-shrink: 0;
  width: 227px;
`;

const ProductImage = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 227px;
  flex-shrink: 0;
  width: 100%;
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
  color: #313131;
  font-size: 14px;
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
  color: #313131;
  font-size: 20px;
  text-align: left;
  white-space: nowrap;
  width: 100%;

  p {
    display: block;
    line-height: normal;
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
  color: #313131;
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

const ProductCard = ({ product, likeIconSrc }) => {
  const { name, price, image, likes } = product;

  return (
    <ProductCardContainer>
      <ProductImage src={image} />
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
                loading="lazy"
                src={likeIconSrc}
              />
            </div>
          </LikeIcon>
          <LikeCount>
            <p>{likes}</p>
          </LikeCount>
        </LikeContainer>
      </ProductInfoContainer>
    </ProductCardContainer>
  );
};

export default ProductCard;
