import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HelloWorld from './HelloWorld/HelloWorld.jsx'
import Container from './HelloWorld/Container.jsx'
import TodoList from './todolist/TodoList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container>
      <HelloWorld />
      <TodoList />
    </Container>
  </StrictMode>,
)
