import styled from 'styled-components'
import CategoryButton from './component/CategoryButton'
import React from 'react'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TopBanner = styled.div`
  padding-top: 60px;
  padding-bottom: 25px;
  display: flex;
  direction: row;
  align-items: center;
  gap: 5px;
  max-width: 1112px;
  width: 100%;
`
const MainContent = styled.div`
  width: 100%;
  max-width: 1112px;
  display: flex;
  flex-direction: row;
`

const CategoryWrapper = styled.aside`
  width: 307px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
`
const CategoryDivider = styled.div`
  width: 100%;
`
const CategoryButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 20px 0;
`
const ProductWrapper = styled.div`
  width: 100%;
  max-width: 725px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 40px;
  overflow-y: auto;
` 
const ProductFilter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  `


function App() {
  const [state, setState] = React.useState('고구마/감자');
  const isSelected = (category) => {
    setState(category);
  }

  return (
    <Wrapper>
      <TopBanner>
        <img style={{width: 36.30, height: 36.30}} src="/assets/cabbage.png" alt="싱싱마트 로고" />
        <h2 style={{ margin: 0, color: '#458431', fontSize: 40, fontFamily: 'Sandoll Hoyoyo2 TTF', fontWeight: '900'}}>싱싱마트</h2>
      </TopBanner>

      <MainContent>

        <CategoryWrapper>
          <div style={{width: '100%', color: 'var(--80%, #313131)', fontSize: 15, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word', marginBottom: '30px'}}>카테고리</div>
          <CategoryDivider>
            <span style={{color: 'var(--50%, #7A7A7A)', fontSize: 15, fontFamily: 'Pretendard', fontWeight: '500'}}>채소</span>
            <CategoryButtonWrapper>
              <CategoryButton isSelected={() => isSelected("고구마/감자")} category="고구마/감자" state={state} />
              <CategoryButton isSelected={() => isSelected("양파/마늘/파")} category="양파/마늘/파" state={state} />
              <CategoryButton isSelected={() => isSelected("오이/가지/호박")} category="오이/가지/호박" state={state} />
            </CategoryButtonWrapper>
          </CategoryDivider>
          <CategoryDivider>
            <span style={{color: 'var(--50%, #7A7A7A)', fontSize: 15, fontFamily: 'Pretendard', fontWeight: '500'}}>과일</span>
            <CategoryButtonWrapper>
              <CategoryButton isSelected={() => isSelected("사과/배")} category="사과/배" state={state} />
              <CategoryButton isSelected={() => isSelected("감귤/만감류")} category="감귤/만감류" state={state} />
              <CategoryButton isSelected={() => isSelected("딸기/체리/블루베리")} category="딸기/체리/블루베리" state={state} />
            </CategoryButtonWrapper>
          </CategoryDivider>
        </CategoryWrapper>

        <ProductWrapper>
          <div style={{width: '100%', color: 'var(--80%, #313131)', fontSize: 32, fontFamily: 'Pretendard', fontWeight: '600'}}>{state}</div>
          <ProductFilter>
            <span style={{color: 'var(--50%, #7A7A7A)', fontSize: 15, fontFamily: 'Pretendard', fontWeight: '500'}}>총 3개의 상품이 있습니다.</span>
            <button style={{border: 'none', backgroundColor: 'transparent', color: '#458431', fontSize: 15, fontFamily: 'Pretendard', fontWeight: '500'}}>필터</button>
          </ProductFilter>
        </ProductWrapper>
      </MainContent>
    </Wrapper>
    
  )
}

export default App
