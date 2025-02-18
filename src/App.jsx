import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../styles.css'

import Home from './pages/Home'
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
        </Routes>
      </Main>
    </BrowserRouter>
    </>
  )
}

export default App
