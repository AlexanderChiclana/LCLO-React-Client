import React from 'react'
import { Route } from 'react-router-dom'
import About from './About'
import FeedPage from './FeedPage'
import Footer from './Footer'
import Home from './Home'
import SinglePostPage from './SinglePostPage'
import SearchPage from './SearchPage'
import Contact from './Contact'
import BootstrapNav from './BootstrapNav'
import MemberPage from './MemberPage'
import skyscrapers from './images/skyscrapers.JPG'
import stem from './images/stem.jpg'
import coaching from './images/coaching.jpg'
import farmer from './images/farmer.jpg'
import cafe from './images/cafe.jpg'
import lunch from './images/lunch.jpg'
import newspaper from './images/newspaper.jpg'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faEnvelope, faMarker, faArrowLeft, faArrowRight, faSeedling, faChalkboardTeacher, faNewspaper, faLightbulb, faBook, faMapMarked, faInfoCircle, faSearch } from '@fortawesome/free-solid-svg-icons'
import createHistory from 'history/createBrowserHistory'
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebook, faTwitter, faLinkedin, faPhone, faEnvelope, faMarker, faArrowLeft, faArrowRight, faSeedling, faChalkboardTeacher, faNewspaper, faLightbulb, faBook, faMapMarked, faInfoCircle, faSearch)

const pageDecriptions = {
  capacityBuilding: 'The LCLO Group offers hands-on, one-on-one coaching and group consultations to higher education leaders and institutions seeking to build, expand and/or innovate in the areas of student recruitment and talent development, faculty development, curricular reform, research infrastructure, pipeline programs, and evaluation/metrics. The Group draws on many years of collective work at highly selective higher education institutions in the United States. Our goal is not merely to share effective practices and policies from these institutions, but we work closely with leaders and institutions to thoughtfully craft culturally- and regionally-relevant approaches to capacity building in emergent higher education environments in the ASEAN region.',
  training: 'The LCLO Group provides opportunities for individuals to participate in professionally relevant and essential training and leadership development in preparation for meaningful and impactful work as strategists and specialists across different fields and sectors, essential to jobs in the Fourth Industrial Revolution.  Individuals may apply to participate in the one-year intensive Southeast Asia (SEA) Future of Work Institute Fellows Program or in the one-week intensive Future of Global Entrepreneurs Leadership Development Program. Our faculty and mentors are experts from Harvard University, Yale University, Brown University and other outstanding research universities around the globe. Our sponsors and mentors in the corporate and non-profit sectors are from multinational corporations and entities with interests in the ASEAN region. ',
  entrepreneurship: 'Talent and the entrepreneurial spirit are abundant in the ASEAN region—makers, artisans, budding technology idea builders, and community development leaders who are eager to harness their talents to form viable economic opportunities for themselves and for their communities. The LCLO Group works intentionally with promising entrepreneurs and their communities to provide mentorship, training, network development, and infrastructure building to support the development of innovative products that can eventually be produced, marketed, and sold locally and globally.',
  resources: 'The LCLO Group develops uniquely tailored digital systems and online materials which can effectively support higher education institutions and other entities who are engaged in talent development, research infrastructure building, training and community engagement endeavors in the ASEAN region. The LCLO Group has a cadre of educational and technology experts who design and build these systems and on-line materials. Purchase of these resources also includes training and support for implementation and assessment.',
  news: 'Stay up to date with the latest news from the LCLO Group',
  poe: 'How do makers, artisans, scholars, and entrepreneurs come together equitably to encounter one another and form unique collaborations? SARI2 is a space which provides opportunities for such interactions through sponsored events that bring stakeholders locally and globally together for dinner meet-ups, demonstrations, collective problem solving, exhibits and networking. SARI2 is a café and creative space by day and sites of innovative learning and making in the evening. SARI2 is also a store and gallery space which showcases unique products from makers and artisans from the ASEAN region. The cafe’s food is Filipino Modern cuisine, made with products that will also be available for sale in the premises. The first SARI2 is being developed in Providence, RI USA.',
  gsep: 'The Global Science Education Pathways (GSEP) Program is a learner-focused, inquiry based and interdisciplinary approach to science, technology, engineering and mathematics (STEM) learning.  This innovative program will bring together a cohort of highly talented high school students (current 10th and 11th graders prior to summer year of participation) to engage them in learning STEM through the lenses of Fourth Industrial Revolution (4IR) technological advances, within a problem-based learning (PBL) curriculum environment.'
}


export const history = createHistory()

history.listen((location, action) => {
    window.scrollTo(0, 0)
})

const App = () => (

  <React.Fragment>

    <Route path='/' render={() => (< BootstrapNav />)} />

      <div style={{ height: '70px', backgroundColor: '#2C2C2C' }} className="navBuffer"/>

      <Route exact path='/' render={() => (<Home />)} /> 
      
      <Route exact path='/about' render={() => (<About />)} /> 
      
      <Route path='/about/:member' render={({ match }) => (<MemberPage member={match.params.member}/>)} /> 
      
      <Route exact path='/training' render={() => (<FeedPage icon={'chalkboard-teacher'} pageName={'Training'} pageInitial={'tr-background'} page={'training'} description={pageDecriptions.training} heroImage={coaching}/>)} /> 
      
      <Route exact path='/gsep' render={() => (<FeedPage icon={'chalkboard-teacher'} pageName={'Global Science Education Pathways'} pageInitial={'tr-background'} page={'gsep'} description={pageDecriptions.gsep} heroImage={stem}/>)} /> 

      <Route exact path='/sea-future-of-work' render={() => (<FeedPage icon={'chalkboard-teacher'} pageName={'SEA Future of Work'} pageInitial={'tr-background'} page={'sea_fow'} description={pageDecriptions.training} heroImage={coaching}/>)} /> 

      <Route path='/capacity_building' render={() => (<FeedPage icon={'seedling'} page={'capacity_building'} pageInitial={'cb-background'} pageName={'Capacity Building'} description={pageDecriptions.capacityBuilding} heroImage={skyscrapers}/>)} /> 
      
      <Route path='/entrepreneurship' render={() => (<FeedPage icon={'lightbulb'} page={'entrepreneurship'} pageInitial={'en-background'} pageName={'Entrepreneurship'} description={pageDecriptions.entrepreneurship} heroImage={farmer}/>)} /> 
      
      <Route path='/points_of_encounter' render={() => (<FeedPage icon={'map-marked'} page={'points_of_encounter'} pageInitial={'poe-background'} pageName={'Points of Encounter'} description={pageDecriptions.poe} heroImage={lunch} />)} /> 
      
      <Route path='/news' render={() => (<FeedPage icon={'newspaper'} page={'news'} pageName={'News'} pageInitial={'ne-background'} description={pageDecriptions.news} heroImage={newspaper}/>)} /> 
      
      <Route path='/resources' render={() => (<FeedPage icon={'book'} page={'resources'} pageName={'Resources'} pageInitial={'re-background'} description={pageDecriptions.resources} heroImage={cafe}/>)} /> 
      
      <Route path='/contact' render={() => (<Contact/>)} /> 

      <Route path='/posts/:id' render={({ match }) => (<SinglePostPage key={match.params.id} id={match.params.id} text={'dummy text'} heading={'dummy heading'} />)} />

      <Route exact path='/search' render={() => (<SearchPage empty={true} />)} />

      <Route path='/search/:id' render={({ match }) => (<SearchPage key={match.params.id} id={match.params.id} />)} />

      <Route path='/' render={() => (< Footer />)} />

  </React.Fragment>
)

export default App
