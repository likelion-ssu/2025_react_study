import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import styled from 'styled-components'

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Body>
      <App />
    </Body>
  </StrictMode>,
)
