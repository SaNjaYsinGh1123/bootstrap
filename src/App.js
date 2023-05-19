import React, { useEffect } from 'react';
import {Routes,Route} from 'react-router-dom';
import  Footer from "./components/footer/Footer"
import Header  from "./components/header/Header"
import Book from "./components/book/Cards"
import  DetailsPages  from "./pages/details/DetailsPages"
import  Create  from "./components/post/Create"
import {createContext,useState} from 'react'
const Appstate = createContext();
const App = ()=>{
  
 

  return (
   <Appstate.Provider value={{}}>
        <div>
            <Header />
        <Routes>
              <Route  path='/' element={<Book/>} />
              <Route  path='/details/:id' element={<DetailsPages/>} />
              <Route  path='/create' element={<Create/>} />
          </Routes>

            <Footer />
        </div>
   </Appstate.Provider>
  )
}

export {Appstate};

export default App;