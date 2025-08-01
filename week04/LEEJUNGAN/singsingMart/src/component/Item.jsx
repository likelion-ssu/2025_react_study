import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  border: none;
  display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 20px;
`


export default function Item(props) {
    const { product } = props;
  return (
    <Wrapper>
        <img src={product.img} alt={product.name} style={{width: '100%', height: 'auto'}} />
        <h3 style={{fontSize: '18px', fontFamily: 'Pretendard', fontWeight: '600'}}>{product.name}</h3>
        <p style={{color: '#7A7A7A', fontSize: '14px', fontFamily: 'Pretendard'}}>{product.price.toLocaleString()}원</p>
    </Wrapper>
                
  )
}
