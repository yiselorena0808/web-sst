import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CrearPost from './CrearPost'
import Blog from './Blog'
import Header from './Header'
import Sidebar from './Sidebar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Sidebar />
        <main className="blog-container">
          <Blog />
          <CrearPost />
        </main>
      </div>
    </div>
  )
}

export default App
