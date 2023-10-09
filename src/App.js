import './App.css';
import React, { useState } from 'react'
import Nav from './Components/Nav';
import News from './Components/News';
import { Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default function App() {

  const [progress, setProgress] = useState(0)
  const apikey = process.env.REACT_APP_NEWS_API

    return (
      <div>
        <div className='sticky-top'>
          <Nav />
        </div>
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path='/' element={<News setProgress={setProgress} apikey={apikey} key='/' pageSize={10} country={"in"} category={"general"} />} />

          <Route exact path='/general' element={<News setProgress={setProgress} apikey={apikey} key='/general' pageSize={10} country={"in"} category={"general"} />} />

          <Route exact path='/business' element={<News setProgress={setProgress} apikey={apikey} key='/business' pageSize={10} country={"in"} category={"business"} />} />

          <Route exact path='/entertainment' element={<News setProgress={setProgress} apikey={apikey} key='/entertainment' pageSize={10} country={"in"} category={"entertainment"} />} />

          <Route exact path='/health' element={<News setProgress={setProgress} apikey={apikey} key='/health' pageSize={10} country={"in"} category={"health"} />} />

          <Route exact path='/science' element={<News setProgress={setProgress} apikey={apikey} key='/science' pageSize={10} country={"in"} category={"science"} />} />

          <Route exact path='/sports' element={<News setProgress={setProgress} apikey={apikey} key='/sports' pageSize={10} country={"in"} category={"sports"} />} />

          <Route exact path='/technology' element={<News setProgress={setProgress} apikey={apikey} key='/technology' pageSize={10} country={"in"} category={"technology"} />} />
        </Routes>
      </div>
    )
}

