import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Mine from './pages/mine'
import List from './pages/list'

ReactDOM.render(
  <Router>
    <nav style={{ margin: 10 }}>
      <Link to="/mine" style={{ margin: 10 }}>
        Mine
      </Link>
      <Link to="/list" style={{ margin: 10 }}>
        List
      </Link>
    </nav>
    <Routes>
      <Route path="/mine" element={<Mine />} />
      <Route path="/list" element={<List />} />
    </Routes>
  </Router>,
  document.getElementById('root')
)
