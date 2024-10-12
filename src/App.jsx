import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ViewPage from './components/ViewPage'
import 'bootstrap/dist/css/bootstrap.min.css'
import NewPage from './components/NewPage'
import EditPage from './components/EditPage'
import DeletePage from './components/DeletePage'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  
const [user,setUser]=useState("")
const [list,setList]=useState([])

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path = '/' element={<ViewPage 
        list={list}
        setList={setList}
        />} />

        <Route exact path = '/newPage' element={<NewPage  user={user}
        setUser={setUser}
        list={list}
        setList={setList} />} />

        <Route exact path = '/editPage' element={<EditPage />} />

        <Route exact path = '/deletePage' element={<DeletePage />} />        

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
