import React from 'react'
// import { Route, Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

// import NavBar from './NavBar'
import About from './About'
import FeedPage from './FeedPage'
import Footer from './Footer'
import Home from './Home'
import SinglePostPage from './SinglePostPage'
import SearchPage from './SearchPage'
import Contact from './Contact'
import BootstrapNav from './BootstrapNav'
import MemberPage from './MemberPage'

import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faMarker, faArrowLeft, faArrowRight, faSeedling, faChalkboardTeacher, faNewspaper, faLightbulb, faBook, faMapMarked, faInfoCircle, faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faPhone, faEnvelope, faMarker, faArrowLeft, faArrowRight, faSeedling, faChalkboardTeacher, faNewspaper, faLightbulb, faBook, faMapMarked, faInfoCircle, faSearch)

const pageDecriptions = {
  capacityBuilding: 'The LCLO Group offers hands-on, one-on-one coaching and group consultations to higher education leaders and institutions seeking to build, expand and/or innovate in the areas of student recruitment and talent development, faculty development, curricular reform, research infrastructure, pipeline programs, and evaluation/metrics. The Group draws on many years of collective work at highly selective higher education institutions in the United States. Our goal is not merely to share effective practices and policies from these institutions, but we work closely with leaders and institutions to thoughtfully craft culturally- and regionally-relevant approaches to capacity building in emergent higher education environments in the ASEAN region.',
  training: 'The LCLO Group provides opportunities for individuals to participate in highly relevant and essential training and professional development in preparation for meaningful and impactful work as strategists and specialists across different fields and sectors, essential to jobs in the Fourth Industrial Revolution. Individuals may apply to participate in The ASEAN Future of Work Institute Fellows Program. Fellows will participate in an intensive leadership development training program, led and facilitated by leading experts from the higher education, corporate, government and non-profit sectors. Our faculty and mentors will draw from experts at Harvard University, Yale University, Brown University and other outstanding research universities around the globe. Our sponsors and mentors in the corporate sectors are from multinational corporations with investments and presence in the ASEAN region. The Program will be located at Institute Hubs in Southeast Asia, with the first one to be implemented in the Philippines.',
  entrepreneurship: 'Talent and the entrepreneurial spirit are abundant in the ASEAN region—makers, artisans, budding technology idea builders, and community development leaders who are eager to harness their talents to form viable economic opportunities for themselves and for their communities. The LCLO Group works intentionally with promising entrepreneurs and their communities to provide mentorship, training, network development, and infrastructure building to support the development of innovative products that can eventually be produced, marketed, and sold locally and globally.',
  resources: 'The LCLO Group develops uniquely tailored digital systems and on-line materials which can effectively support higher education institutions and other entities who are engaged in talent development, research infrastructure building, training and community engagement endeavors in the ASEAN region. The LCLO Group has a cadre of educational and technology experts who design and build these systems and on-line materials. Purchase of these resources also includes training and support for implementation and assessment.',
  poe: 'How do makers, artisans, scholars, and entrepreneurs come together equitably to encounter one another and form unique collaborations? SARI2 is a space which provides opportunities for such interactions through sponsored events that bring stakeholders locally and globally together for dinner meet-ups, demonstrations, collective problem solving, exhibits and networking. SARI2 is a café and creative space by day and sites of innovative learning and making in the evening. SARI2 is also a store and gallery space which showcases unique products from makers and artisans from the ASEAN region. The cafe’s food is Filipino Modern cuisine, made with products that will also be available for sale in the premises. The first SARI2 is being developed in Providence, RI USA.'
}


const App = () => (
  <React.Fragment>
    <Route path='/' render={() => (< BootstrapNav />)} />

      <div style={{ height: '70px' }} />

      <Route exact path='/' render={() => (<Home />)} /> 
      <Route exact path='/about' render={() => (<About />)} /> 
      <Route exact path='/about/:member' render={() => (<MemberPage />)} /> 
      {/* <Route exact path='/about/:member' render={({ match }) => (<SinglePostPage key={match.params.id} id={match.params.id} teamMember={true} />)} />  */}

      
      <Route exact path='/training' render={() => (<FeedPage pageName={'Training'} page={'training'} description={pageDecriptions.training} />)} /> 
      <Route exact path='/capacity_building' render={() => (<FeedPage page={'capacity_building'} pageName={'Capacity Building'} description={pageDecriptions.capacityBuilding}/>)} /> 
      <Route exact path='/entrepreneurship' render={() => (<FeedPage page={'entrepreneurship'} pageName={'Entrepreneurship'} banner={'./images/business.png'} description={pageDecriptions.entrepreneurship}/>)} /> 
      <Route exact path='/points_of_encounter' render={() => (<FeedPage page={'points_of_encounter'} pageName={'Points of Encounter'} description={pageDecriptions.poe}/>)} /> 
      <Route exact path='/news' render={() => (<FeedPage page={'news'} pageName={'News'} description={pageDecriptions.news}/>)} /> 
      <Route exact path='/resources' render={() => (<FeedPage page={'resources'} pageName={'Resources'} description={pageDecriptions.resources}/>)} /> 
      <Route exact path='/contact' render={() => (<Contact/>)} /> 


      <Route path='/posts/:id' render={({ match }) => (<SinglePostPage key={match.params.id} id={match.params.id} text={'dummy text'} heading={'dummy heading'} />)} />

      <Route path='/search/:id' render={({ match }) => (<SearchPage key={match.params.id} id={match.params.id} />)} />

      <Route path='/' render={() => (< Footer />)} />

  </React.Fragment>
)

export default App
