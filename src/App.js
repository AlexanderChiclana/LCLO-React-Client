import React from 'react'
// import { Route, Link } from 'react-router-dom'
import NavBar from './NavBar'
// import About from './About'
import FeedPage from './FeedPage'

// const Dashboard = () => (
//   <div>
//     <h3>Dashboard</h3>
//     <p>This is separate route.</p>
//   </div>
// )

const App = () => (
  <body>
      < NavBar />
      {/* <Route path="/dashboard" component={Dashboard}/> */}
      {/* < About /> */}
      < FeedPage /> 

  </body>
)

export default App
