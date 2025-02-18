import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../styles.css'

import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import ScrollTop from './components/ScrollTop'
import Main from "./components/Main"

function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
      <ScrollTop/>
      <Main>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='about' element={<About />}/>
        </Routes>
      </Main>
    </BrowserRouter>
    </>
  )
}

export default App
