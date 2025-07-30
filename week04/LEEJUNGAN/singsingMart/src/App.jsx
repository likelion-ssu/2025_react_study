import { useState } from 'react'
import singsingLogo from './assets/logo-mart.png'
import './App.css'
import styled from 'styled-components'

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 20px;
`

function App() {

  return (
    <>
      <LogoWrapper>
        <img src={singsingLogo} alt="logo" />
        <div style={{textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#26800A', fontSize: 15, fontFamily: 'Sandoll Hoyoyo2 TTF', fontWeight: '900', wordWrap: 'break-word'}}>싱싱마트</div>
      </LogoWrapper>
    </>

  )
}

export default App
