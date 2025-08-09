import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
import ProductCard from "../components/ProductCard";
import Button from "../components/Button";
import { products, categories, images } from "../data/products";

const Container = styled.div`
  background-color: #ffffff;
  position: relative;
  width: 100%;
  height: 100%;
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
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
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
        src={images.ellipseIcon}
      />
    </div>
  </div>
);

const ProductListPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("potato");
  const [selectedSubcategory, setSelectedSubcategory] = useState("고구마/감자");

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  const handleCategoryClick = (categoryId, subcategoryName) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory(subcategoryName);
  };

  return (
    <Container>
      <CategoriesSection>
        <CategoryTitle>
          <p>카테고리</p>
        </CategoryTitle>
        <CategoryList>
          {categories.map((category) => (
            <CategoryGroup key={category.id}>
              <CategoryGroupTitle>
                <p>{category.name}</p>
              </CategoryGroupTitle>
              <CategoryItemsContainer>
                {category.subcategories.map((subcategory) => (
                  <CategoryItem
                    key={subcategory.id}
                    onClick={() =>
                      handleCategoryClick(subcategory.id, subcategory.name)
                    }
                  >
                    <CategoryItemText>
                      <p>{subcategory.name}</p>
                    </CategoryItemText>
                    {selectedCategory === subcategory.id ? (
                      <CategoryItemSelected>
                        <img
                          alt=""
                          style={{
                            display: "block",
                            maxWidth: "none",
                            width: "100%",
                            height: "100%",
                          }}
                          src={images.selectedIcon}
                        />
                      </CategoryItemSelected>
                    ) : (
                      <CategoryItemIcon>
                        <IconSelectedCategory />
                      </CategoryItemIcon>
                    )}
                  </CategoryItem>
                ))}
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
                    src={images.dividerIcon}
                  />
                </div>
              </Divider>
            </CategoryGroup>
          ))}
        </CategoryList>
      </CategoriesSection>

      <MainContent>
        <MainTitle>
          <p>{selectedSubcategory}</p>
        </MainTitle>
        <ProductInfo>
          <ProductCount>
            <p>{filteredProducts.length}개의 상품</p>
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
                src={images.sortIcon}
              />
            </SortIcon>
          </SortContainer>
        </ProductInfo>
        <ProductsGrid>
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              likeIconSrc={images.likeIcon}
            />
          ))}
        </ProductsGrid>
      </MainContent>

      <TopBanner>
        <LogoContainer>
          <Logo imageSrc={images.cabbage1} />
        </LogoContainer>
      </TopBanner>
    </Container>
  );
};

export default ProductListPage;
