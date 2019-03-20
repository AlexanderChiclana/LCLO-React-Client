import React from 'react'
// import { Route, Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

import NavBar from './NavBar'
import About from './About'
import FeedPage from './FeedPage'
import Footer from './Footer'
import Home from './Home'
import SinglePostPage from './SinglePostPage'
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
      <Route exact path='/' render={() => (<Home />)} /> 
      <Route exact path='/about' render={() => (<About />)} /> 

      <Route exact path='/training' render={() => (<FeedPage pageName={'Training'} page={'training'}/>)} /> 
      <Route exact path='/capacity_building' render={() => (<FeedPage page={'capacity_building'} pageName={'Capacity Building'}/>)} /> 
      <Route exact path='/entrepreneurship' render={() => (<FeedPage page={'entrepreneurship'} pageName={'Entrepreneurship'}/>)} /> 
      <Route exact path='/points_of_encounter' render={() => (<FeedPage page={'points_of_encounter'} pageName={'Points of Encounter'}/>)} /> 
      <Route exact path='/news' render={() => (<FeedPage page={'news'} pageName={'News'}/>)} /> 
      <Route exact path='/resources' render={() => (<FeedPage page={'resources'} pageName={'Resources'}/>)} /> 

      <Route path='/posts/:id' render={({ match }) => (
      <SinglePostPage
        key={match.params.id}
        id={match.params.id}
        text={'dummy text'}
        heading={'dummy heading'}
        />
        )} />

      < Footer />
  </body>
)

export default App
