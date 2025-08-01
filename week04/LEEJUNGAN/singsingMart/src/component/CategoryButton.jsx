import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
    width: 207px;
    border: none;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3px;
    padding-left: 2px;
    padding-right: 98px;

    &:hover {
        background-color: #f0f0f0; 
        cursor: pointer;
    }
`

export default function CategoryButton(props) {
    const { isSelected, category, state } = props;
  return (
    <Wrapper onClick={isSelected}>
      <img src = { state == category ? "/assets/selected.svg" : "/assets/nonSelected.svg" } alt="카테고리 선택 여부" />
      <span style={{ color: 'black', fontSize: 15, fontFamily: 'Pretendard', fontWeight: '500'}}>{category}</span>
    </Wrapper>
  )
}
