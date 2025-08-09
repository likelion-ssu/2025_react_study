import React from "react";
import styled from "styled-components";

// 이미지 상수들
const img1 =
  "http://localhost:3845/assets/6fe4825985976303125a5bde2d80ec461a303f9e.png";
const img3 =
  "http://localhost:3845/assets/9348665b0f11fa1514a2f216c47212363f1eb7fe.png";
const img4 =
  "http://localhost:3845/assets/f52ebc26b7282eff0c3eddb87ce6a5fd6ea0d7fe.png";
const img5 =
  "http://localhost:3845/assets/a7a19d257bfdaa43db99d7f679c8a1a951e7f1df.png";
const img6 =
  "http://localhost:3845/assets/6cef8d9837fc1eb732a41db97cd4d22432c65125.png";
const imgEllipse202 =
  "http://localhost:3845/assets/03abb7afb36d2aef9edba44c322efa14cda60766.svg";
const imgSelected =
  "http://localhost:3845/assets/e0bff79c25fa390335ff926695333de458e281d3.svg";
const img =
  "http://localhost:3845/assets/cacb83b95ff7761e007b8da5a6e00d06b60c7e45.svg";
const imgFrame926 =
  "http://localhost:3845/assets/4ad9e460916a56b0a9871f95e145f9223c3d0db1.svg";
const img2 =
  "http://localhost:3845/assets/2031ab1de717b52850cda2cf890a4313022047ca.svg";

// Styled Components
const Container = styled.div`
  background-color: #ffffff;
  position: relative;
  width: 100%;
  height: 100%;
`;

const CategoriesSection = styled.div`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: flex-start;
  justify-content: flex-start;
  left: 200px;
  padding: 40px 20px 0 20px;
  top: 145px;
  width: 347px;
`;

const CategoryTitle = styled.div`
  font-family: "Pretendard", sans-serif;
  font-weight: 500;
  line-height: 0;
  font-style: normal;
  position: relative;
  flex-shrink: 0;
  color: #313131;
  font-size: 15px;
  text-align: left;
  width: 100%;

  p {
    display: block;
    line-height: normal;
  }
`;

const CategoryList = styled.div`
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

const CategoryGroup = styled.div`
  background-color: #ffffff;
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

const CategoryGroupTitle = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Pretendard", sans-serif;
  font-weight: 500;
  justify-content: center;
  line-height: 0;
  min-width: 100%;
  font-style: normal;
  position: relative;
  flex-shrink: 0;
  color: #7a7a7a;
  font-size: 15px;
  text-align: left;
  width: min-content;

  p {
    display: block;
    line-height: 16px;
  }
`;

const CategoryItemsContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0;
  position: relative;
  flex-shrink: 0;
  width: 100%;
`;

const CategoryItem = styled.div`
  background-color: #ffffff;
  height: 20px;
  overflow: clip;
  position: relative;
  flex-shrink: 0;
  width: 100%;
`;

const CategoryItemText = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  font-family: "Pretendard", sans-serif;
  font-weight: 500;
  height: 20px;
  justify-content: center;
  line-height: 0;
  left: 21px;
  font-style: normal;
  color: #313131;
  font-size: 15px;
  text-align: left;
  top: 2.5px;
  transform: translateY(-50%);
  width: 188px;

  p {
    display: block;
    line-height: 16px;
  }
`;

const CategoryItemIcon = styled.div`
  position: absolute;
  left: 0.5px;
  overflow: clip;
  width: 16px;
  height: 16px;
  top: 0.5px;
`;

const CategoryItemSelected = styled.div`
  position: absolute;
  left: 0;
  width: 16px;
  height: 16px;
  top: 0.5px;
`;

const Divider = styled.div`
  height: 0;
  position: relative;
  flex-shrink: 0;
  width: 230px;

  > div {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: -1px;
  }
`;

const MainContent = styled.div`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px 20px 0 20px;
  top: 145px;
  width: 765px;
  left: calc(20% + 244.6px);
`;

const MainTitle = styled.div`
  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  line-height: 0;
  font-style: normal;
  position: relative;
  flex-shrink: 0;
  color: #313131;
  font-size: 32px;
  text-align: left;
  width: 100%;

  p {
    display: block;
    line-height: 38px;
  }
`;

const ProductInfo = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0;
  position: relative;
  flex-shrink: 0;
  width: 100%;
`;

const ProductCount = styled.div`
  font-family: "Pretendard", sans-serif;
  font-weight: 500;
  line-height: 0;
  font-style: normal;
  position: relative;
  flex-shrink: 0;
  color: #313131;
  font-size: 15px;
  text-align: left;
  white-space: nowrap;

  p {
    display: block;
    line-height: 16px;
    white-space: pre;
  }
`;

const SortContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 18px;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
  position: relative;
  flex-shrink: 0;
`;

const SortText = styled.div`
  font-family: "Pretendard", sans-serif;
  font-weight: 500;
  line-height: 0;
  font-style: normal;
  position: relative;
  flex-shrink: 0;
  color: #313131;
  font-size: 15px;
  white-space: nowrap;
  text-align: right;

  p {
    display: block;
    line-height: 16px;
    white-space: pre;
  }
`;

const SortIcon = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
`;

const ProductsGrid = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: wrap;
  gap: 20px;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: clip;
  padding: 0;
  position: relative;
  flex-shrink: 0;
  width: 100%;
`;

const ProductCard = styled.div`
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

// 컴포넌트들
const IconSelectedCategory = () => (
  <div style={{ position: "relative", width: "100%", height: "100%" }}>
    <div
      style={{
        position: "absolute",
        left: "4px",
        width: "8px",
        height: "8px",
        top: "4px",
      }}
    >
      <img
        alt=""
        style={{
          display: "block",
          maxWidth: "none",
          width: "100%",
          height: "100%",
        }}
        src={imgEllipse202}
      />
    </div>
  </div>
);

const CategoryItems = () => (
  <div style={{ position: "relative", width: "100%", height: "100%" }}>
    <CategoryItemText>
      <p>채소</p>
    </CategoryItemText>
    <CategoryItemSelected>
      <img
        alt=""
        style={{
          display: "block",
          maxWidth: "none",
          width: "100%",
          height: "100%",
        }}
        src={imgSelected}
      />
    </CategoryItemSelected>
  </div>
);

// 메인 컴포넌트
const WebMainStyled = () => {
  return (
    <Container>
      <CategoriesSection>
        <CategoryTitle>
          <p>카테고리</p>
        </CategoryTitle>
        <CategoryList>
          <CategoryGroup>
            <CategoryGroupTitle>
              <p>채소</p>
            </CategoryGroupTitle>
            <CategoryItemsContainer>
              <CategoryItem>
                <CategoryItemText>
                  <p>고구마/감자</p>
                </CategoryItemText>
                <CategoryItemIcon>
                  <IconSelectedCategory />
                </CategoryItemIcon>
              </CategoryItem>
              <CategoryItem>
                <CategoryItems />
              </CategoryItem>
              <CategoryItem>
                <CategoryItems />
              </CategoryItem>
            </CategoryItemsContainer>
            <Divider>
              <div>
                <img
                  alt=""
                  style={{
                    display: "block",
                    maxWidth: "none",
                    width: "100%",
                    height: "100%",
                  }}
                  src={img}
                />
              </div>
            </Divider>
          </CategoryGroup>
          <CategoryGroup>
            <CategoryGroupTitle>
              <p>과일</p>
            </CategoryGroupTitle>
            <CategoryItemsContainer>
              <CategoryItem>
                <CategoryItemText>
                  <p>사과/배</p>
                </CategoryItemText>
                <CategoryItemSelected>
                  <img
                    alt=""
                    style={{
                      display: "block",
                      maxWidth: "none",
                      width: "100%",
                      height: "100%",
                    }}
                    src={imgSelected}
                  />
                </CategoryItemSelected>
              </CategoryItem>
              <CategoryItem>
                <CategoryItemText>
                  <p>감귤/만감류</p>
                </CategoryItemText>
                <CategoryItemSelected>
                  <img
                    alt=""
                    style={{
                      display: "block",
                      maxWidth: "none",
                      width: "100%",
                      height: "100%",
                    }}
                    src={imgSelected}
                  />
                </CategoryItemSelected>
              </CategoryItem>
              <CategoryItem>
                <CategoryItemText>
                  <p>딸기/체리/블루베리</p>
                </CategoryItemText>
                <CategoryItemSelected>
                  <img
                    alt=""
                    style={{
                      display: "block",
                      maxWidth: "none",
                      width: "100%",
                      height: "100%",
                    }}
                    src={imgSelected}
                  />
                </CategoryItemSelected>
              </CategoryItem>
            </CategoryItemsContainer>
            <Divider>
              <div>
                <img
                  alt=""
                  style={{
                    display: "block",
                    maxWidth: "none",
                    width: "100%",
                    height: "100%",
                  }}
                  src={img}
                />
              </div>
            </Divider>
          </CategoryGroup>
        </CategoryList>
      </CategoriesSection>

      <MainContent>
        <MainTitle>
          <p>고구마/감자</p>
        </MainTitle>
        <ProductInfo>
          <ProductCount>
            <p>4개의 상품</p>
          </ProductCount>
          <SortContainer>
            <SortText>
              <p>많이 팔린 순</p>
            </SortText>
            <SortIcon>
              <img
                alt=""
                style={{
                  display: "block",
                  maxWidth: "none",
                  width: "100%",
                  height: "100%",
                }}
                src={imgFrame926}
              />
            </SortIcon>
          </SortContainer>
        </ProductInfo>
        <ProductsGrid>
          <ProductCard>
            <ProductImage src={img1} />
            <ProductInfoContainer>
              <ProductTextContainer>
                <ProductName>
                  <p>햇 감자 2kg(박스)</p>
                </ProductName>
                <ProductPrice>
                  <div>
                    <p>5,490</p>
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
                      src={img2}
                    />
                  </div>
                </LikeIcon>
                <LikeCount>
                  <p>343</p>
                </LikeCount>
              </LikeContainer>
            </ProductInfoContainer>
          </ProductCard>

          <ProductCard>
            <ProductImage src={img3} />
            <ProductInfoContainer>
              <ProductTextContainer>
                <ProductName>
                  <p>감자 1.2KG(봉)</p>
                </ProductName>
                <ProductPrice>
                  <div>
                    <p>4,490</p>
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
                      src={img2}
                    />
                  </div>
                </LikeIcon>
                <LikeCount>
                  <p>343</p>
                </LikeCount>
              </LikeContainer>
            </ProductInfoContainer>
          </ProductCard>

          <ProductCard>
            <ProductImage src={img4} />
            <ProductInfoContainer>
              <ProductTextContainer>
                <ProductName>
                  <p>유명산지 여주 밤고구마</p>
                </ProductName>
                <ProductPrice>
                  <div>
                    <p>6,490</p>
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
                      src={img2}
                    />
                  </div>
                </LikeIcon>
                <LikeCount>
                  <p>343</p>
                </LikeCount>
              </LikeContainer>
            </ProductInfoContainer>
          </ProductCard>

          <ProductCard>
            <ProductImage src={img5} />
            <ProductInfoContainer>
              <ProductTextContainer>
                <ProductName>
                  <p>꿀고구마 1KG(봉)</p>
                </ProductName>
                <ProductPrice>
                  <div>
                    <p>5,990</p>
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
                      src={img2}
                    />
                  </div>
                </LikeIcon>
                <LikeCount>
                  <p>343</p>
                </LikeCount>
              </LikeContainer>
            </ProductInfoContainer>
          </ProductCard>
        </ProductsGrid>
      </MainContent>

      <TopBanner>
        <LogoContainer>
          <LogoWrapper>
            <LogoIcon src={img6} />
            <LogoText>
              <p>싱싱마트</p>
            </LogoText>
          </LogoWrapper>
        </LogoContainer>
      </TopBanner>
    </Container>
  );
};

export default WebMainStyled;
