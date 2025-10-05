import './App.css'
import Layout from './Components/Layout/Layout'
import { Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Menu from './Pages/Menu'
import Contact from './Pages/Contact'
import PageNotFound from './Pages/PageNotFound'

function App() {
  

  return (
    <><div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/*' element={<PageNotFound/>}/>
        
      </Routes>
      </div>
    </>
  )
}

export default App;
