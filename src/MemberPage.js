import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { capitalCase } from './TextFunctions.js'
import JenPic from '../src//images/Jennifer-Nazareno.jpg'
import LizaPic from '../src/images/Liza-Cariaga-Lo.jpg'
import LynnPic from '../src/images/Lynn_Hernandez.jpg'
import YenPic from '../src/images/Yen.jpg'
import GregoryPic from '../src/images/gregory.jpg'
import JuliePic from '../src/images/Julie_Lee.jpg'
import TeresaPic from '../src/images/Teresa.jpg'
import DonPic from '../src/images/Don Operario.jpg'
import MyraPic from '../src/images/myra.jpg'
// import MariaPic from '../src/images/Maria.jpg'
import AlexanderPic from '../src/images/Alexander_Chiclana.jpg'
import YishiuanPic from '../src/images/yishiuan-chin.jpg'

const memberData = {
  liza: {
    lastName: 'Cariaga-Lo',
    pic: LizaPic,
    bio:
      'Dr. Liza Cariaga-Lo is the CEO and Founder of The LCLO Group. She has just recently stepped down after serving for a number of years as Vice President for Academic Development, Diversity and Inclusion and a faculty member in the Education Department at Brown University. From 2007-2012, Dr. Cariaga-Lo was Assistant Provost for Faculty Development and Diversity at Harvard University. She was previously Assistant Dean at the Yale Graduate School of Arts & Sciences and the Director of the Office for Diversity and Equal Opportunity, as well as a faculty member at Yale Medical School. She received her doctoral training in developmental psychology from Harvard University. She consults widely on diversity, inclusion and equity issues, as well as on broader capacity building and strategic planning in higher education. Dr. Cariaga-Lo is currently a member of the National Institutes of Health (NIH) NAGMS Council and has served as Chair of the NIH–NIGMS Minority Programs Review Committee and continues to work closely with other federal agencies and foundations on broad diversity initiatives to develop and support young scholars from diverse backgrounds. Her areas of research and teaching include diversity and inclusion metrics and program evaluation, developmental aspects of cultivating talent among historically underserved groups, ethnic minority health and education disparities, and public and institutional policies and practices to address inequality. She was the recipient of the Chang-Lin Tien Leadership in Education Award from the Asian Pacific Fund in 2014. She is currently completing work on a book about the identity development of Asian Americans. Over the past two years, Liza has served as a consultant to the SMART Student Health and Wellness Model programs to assess the impact of the model in achieving health and education outcomes in support of diverse communities.'
  },
  lynn: {
    lastName: 'Hernandez',
    pic: LynnPic,
    bio:
      'Dr. Lynn Hernandez is the Director of University Inclusion Programs in the Office of Institutional Equity and Diversity and an Assistant Professor (Research) in Behavioral and Social Sciences in the School of Public Health at Brown University. Within her administrator role, Dr. Hernandez leads and facilitates the development and implementation of inclusion programs and initiatives, particularly in support of the Brown’s Diversity and Inclusion Action Plan. As an NIH-funded researcher and faculty member, her research focuses on the development and implementation of culturally appropriate behavioral interventions for communities of color. Recognizing the important role that community members play in shaping culturally competent intervention approaches, Dr. Hernandez conducts her research within a Community-Based Participatory Research model, where members of the community are seen as the experts and are actively involved in all stages of program development and implementation.'
  },
  jennifer: {
    lastName: 'Nazareno',
    pic: JenPic,
    bio:
      'Jennifer is an Assistant Professor of Public Health and Entrepreneurship at the Nelson Center for Entrepreneurship (Brown University). She has a dual appointment at the Center and in the Department of Behavioral and Social Sciences in the School of Public Health. Jennifer’s speciality areas include medical sociology and health; qualitative methodology; women’s migration, labor and entrepreneurship. She received her Ph.D. from the University of California, San Francisco (UCSF) in 2015 and was an AHRQ and Presidential Diversity Post Doctoral Fellow at Brown. Her dissertation won the UCSF Anselm Strauss Award for Most Distinguished Qualitative Dissertation and was the first study to examine the lived experiences of immigrant Filipino women who emerged as owners of health and long-term service related businesses. Jennifer organized the Center’s first one-day conference, “Entrepreneurship at the Intersection of Diversity and Inequality.” Her vision for the conference engaged the intersectionality of race/ethnicity, gender, class, sexuality, differently-abled bodies, and immigrant status, and how these different social statuses shaped the pursuit of entrepreneurship. Jennifer’s peer-reviewed publications can be found in the International Journal of Health Services, Social Science & Medicine, American Journal of Industrial Medicine, Medical Care, and the International Journal of Entrepreneurial Behavior & Research.'
  },
  yen: {
    lastName: 'Tran',
    pic: YenPic,
    bio: 'Yen grew up in Southern California. He completed his undergraduate at Brown University, graduating Phi Beta Kappa and magna cum laude with a degree in Ethnic Studies (2014). At Brown, he led workshops and coordinated events on intersectional issues of identities and social change. After graduation, he worked as a Research Assistant at the Office of Diversity and Inclusion at Brown and also as a Research Coordinator for clinical trials in a neurorehabilitation lab at Warren Alpert Medical School at Brown University and the Providence VA Medical Center. He then spent five years at investment management firm Cambridge Associates, eventually becoming an Associate Investment Director and Private Investment Specialist, working for the Boston, Singapore, and London offices. He crafted investment portfolios for mainly universities and foundations with ESG and mission-related mandates and completed due diligence on private equity and venture capital funds. He is currently pursuing his MBA at Yale University.'
  },
  gregory: {
    lastName: 'Llacer',
    pic: GregoryPic,
    bio: 'Gregory Llacer is the director of the Harvard College Office of Undergraduate Research and Fellowships. Greg also has been the director of the Harvard College Program for Research in Science and Engineering (PRISE) since its inception in 2005. In addition to his Harvard responsibilities, Greg is editorial chair of the national Mellon-Mays Undergraduate Research Journal and director of the Global Program Office for Amgen Scholars, a consortium of 24 international undergraduate summer research programs focused on biotechnology. Greg has served in several administrative roles at Harvard University, including institutional director of postdoctoral affairs and interim chief of staff for the vice provost of research (in the Office of the President and Provost). Before arriving at Harvard in 2004, he managed educational initiatives and academic enrichment programs for the Harvard-MIT Division of Health Sciences and Technology. Greg spent the first 16 years of his administrative career in the academic planning unit of the Office of Graduate Studies and Research at the University of California, San Diego (UCSD), where he was senior research analyst for the vice chancellor for research.  Following an AB degree from San Diego State University (SDSU) in liberal studies, Greg conducted postgraduate study at UCSD and SDSU focused on policy studies in language and cross-cultural education.'
    },
  julie: {
    lastName: 'Lee',
    pic: JuliePic,
    bio:
      'As an educator and a clinical psychologist, Julie Lee, Ph.D. has worked throughout her career to improve the access to and the educational outcomes of students from marginalized background in higher education institutions. She currently directs Brown University’s academic support services, manages learning initiatives, and administers Brown’s transfer and non-traditional are student advising programs with a strong commitment to helping students from diverse backgrounds to succeed academically and personally through their collegiate experience. Prior to Brown, she completed an administrative fellowship at Harvard University, sponsored by the Office of Equity, Inclusion and Diversity and held an appointment as staff psychologist at the University. In addition to her work in the educational sector, Julie Lee worked as a management consultant for Fortune 500 companies and led numerous technology and process-improvement projects and organizational development initiatives. Julie Lee holds a BA in Psychology from Wellesley College, an M.Ed. in Human Development and Psychology for the Harvard Graduate School of Education, and a Ph.D. in Clinical Psychology from Suffolk University.'
  },
  teresa: {
    lastName: 'Malonzo',
    pic: TeresaPic,
    bio:
      'Teresa C. Malonzo is the Senior Diversity Programs Consultant in the Center for Workplace Development/Workforce Planning and Talent Mobility. Teresa has over 20 years’ experience working in higher education administration and in affirmative action compliance. Teresa manages program development and operations of the Administrative Fellowship Program (AFP), a leadership development fellowship for high potential academic administrators of color. In addition, Teresa facilitates the collection and analysis of data related to affirmative action compliance and the development and strengthening of internal audit and monitoring procedures designed to assure compliance with AA programs, policies and procedures relating to faculty and staff employment.'
  },
  don: {
    lastName: 'Operario',
    pic: DonPic,
    bio:
      'Dr. Don Operario is Professor of Public Health in the Department of Behavior and Social Sciences and Associate Dean for Academic Affairs in the School of Public Health. He was trained as a Social and Health Psychologist (BA, UCLA; MS, PhD, UMass Amherst; Postdoctoral Fellow, UC San Francisco). He was previously on the faculty of the University of Oxford (Department of Social Policy and Social Work) and before that was at the University of California San Francisco (Center for AIDS Prevention Studies – Department of Medicine). His research addresses two inter-related areas. The first general area concerns the social psychological determinants of HIV, sexual health, and related health issues (substance use, mental health) in diverse communities, with an emphasis on developing and evaluating theory-based social and behavioral interventions for members of high-risk groups. A second research area concerns the lived experiences associated with social inequality, with an emphasis on understanding the perspectives of disadvantaged group members and addressing associated health and psychosocial disparities. He conducts research addressing both U.S. domestic and international public health issues.'
  },
  myra: {
    lastName: 'O. Liwanag',
    bio: 'Myra O. Liwanag is a versatile consultant, coach, facilitator, and administrator with over twenty-five years of experience in organization development, human resources, non-profit management, and talent development. As a consultant, Myra approaches engagements with a diversity, equity and inclusion lens. She works primarily with nonprofit organizations who provide education and needed services, uplift communities, and fight for justice. Myra serves as Executive Director of Iskwelahang Pilipino, the oldest Filipino cultural school in the U.S.A. and recipient of the Philippines’ prestigious Presidential Banaag Award. Experienced in the non-profit, higher education and corporate arenas, Myra has worked throughout her career to strengthen diverse communities and amplify voices that might otherwise remain unheard. At Brown University, Myra spent over a decade directing alumni affinity programs that increase community engagement. Responsible for the regional engagement strategy for alumni associations around the world, her work involved spearheading alumni diversity initiatives, establishing student-alumni partnerships, coaching leaders, and deploying hundreds of volunteers and faculty for events and programs. Myra also spent several years working with community-based organizations who champion social justice issues in New York City. Her past professional roles include management consulting with Segal and Community Resource Exchange in New York, where she was instrumental in establishing practices in organizational effectiveness, higher education, human resources, executive search, and leadership development. She began her career at MetLife in the areas of Equal Employment Opportunity and workforce diversity. Myra studied American civilization at Brown University and holds an M.A. in organizational psychology from Columbia University Teachers College. ',
    pic: MyraPic
  },
  // maria: {
  //   lastName: 'Paula Garcia Mosquera',
  //   pic: MariaPic,
  //   bio:
  //     'Maria Paula Garcia Mosquera is a public humanist/cultural administrator interested in exploring ways to narrow the gap that exists between institutions working with cultural heritage and a broader public. This interest has taken her to work in a range of cultural organizations and government institutions, such as the Colombian National Public Radio, the Bogotá’s Office of Culture, Recreation and Sports, and the Museums of the Central Bank of Colombia. Maria Paula holds a BA in History from the Universidad de los Andes (Bogotá, Colombia) and an M.A. in Public Humanities at Brown University. Her work is located at the intersection of informal education on cultural heritage, communications, and cultural management.'
  // },
  alexander: {
    lastName: 'Chiclana',
    pic: AlexanderPic,
    bio:
      'Alexander Chiclana is a web developer based in providence RI. He is a graduate of Brown Unviersity, and a former instructor at General Assembly. He joined LCLO as a technical advisor and is working as the front end lead developer at polyPodia.'
  },
  yishiuan: {
    lastName: 'Chin',
    pic: YishiuanPic,
    bio: 'Yishiuan Chin, Ph.D., is an academic and dissertation coach, an executive function coach, an adjunct professor at Lesley University, and a Pilates instructor. Formerly, she was an administrator at Harvard University, where she managed the administrative operations of Harvard’s center for academic and personal development. She completed the Harvard Administrative Fellowship Program and later served as a peer coach and a sponsor. She was an active member of the Association of Harvard Asian and Asian American Faculty and Staff and served on its steering committee. Yishiuan was born and raised in Malaysia, and moved to the U.S. in the late 1980s. Before settling in Boston, MA, she lived in Hawaii and worked as a mental health therapist and social service coordinator. She holds a Ph.D. in higher education, an M.S. in Counseling Psychology, and a B.S. in Business Administration and International Studies. Her dissertation focuses on the issues of voice and silence in academia. Her areas of interest include identity and belonging, intercultural relations, access to education, and organizational leadership and management. She holds a Certificate in Teaching English to Speakers of Other Languages (CELTA) from the University of Cambridge and has served as an ESL tutor, counselor, and board member at Project Literacy in Watertown, MA.'
  }
}

const memberArray = Object.keys(memberData)

class MemberPage extends Component {
  render() {
    const { member } = this.props

    const nextMember =
      member === memberArray.slice(-1)[0]
        ? memberArray[0]
        : memberArray[memberArray.indexOf(member) + 1]

    return (
      <div>
        <div className="home-page-divider mobile-none" />

        <div className="container single-page about-page">
          <div className="welcome-wrap mobile-padding-none">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-8 order-2 order-lg-1 mobile-padding-y-medium">
                  <div className="welcome-content">
                    <header className="entry-header">
                      <h2 className="entry-title mobile-margin-none">
                        {capitalCase(member)} {memberData[member].lastName}
                      </h2>
                    </header>

                    <div className="mt-5">
                      {/* <p>{memberData[member].bio}</p> */}

                      <div className="col-12 col-lg-12 order-1 order-lg-2 mobile-padding-none">
                        {/* <img src={require('./images/bridge.JPG')} alt="welcome" /> */}
                        <div
                          className="image-flip"
                          // ontouchstart="this.classList.toggle('hover');"
                        >
                          <div>
                            <div className="frontside-no-flip">
                              <div
                                className="card"
                                style={{ borderRadius: '24px' }}
                              >
                                <div className="card-body text-center mobile-padding-small">
                                  <p
                                    style={{
                                      display: 'flex',
                                      justifyContent: 'center'
                                    }}
                                  >
                                    <img
                                      className=" img-fluid"
                                      src={memberData[member].pic}
                                      alt="card image"
                                      style={{ objectFit: 'cover' }}
                                    />
                                  </p>
                                  <h5 className="card-title">
                                    {/* {capitalCase(member)}{' '}
                              {memberData[member].lastName} */}
                                    {memberData[member].role}
                                  </h5>
                                  <p
                                    className="card-text"
                                    style={{ textAlign: 'left' }}
                                  >
                                    {memberData[member].bio}
                                  </p>
                                  <div className="d-flex justify-content-center">
                                    <div
                                      className="templateOrange"
                                      style={{
                                        borderRadius: '10px',
                                        display: 'block',
                                        width: '40px',
                                        height: '5px'
                                      }}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="entry-footer mt-5">
                      {/* <button onClick={ () => scrollToComponent(this.Team, { offset: 0, align: 'top', duration: 1000 }) } className="btn gradient-bg mr-2">Meet the Team</button> */}
                    </div>
                  </div>

                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <div>
                      <Link to={'/about'}>
                        <span style={{ marginRight: '10px' }}>
                          <FontAwesomeIcon icon="arrow-left" />
                        </span>
                        Team
                      </Link>
                    </div>
                    <div>
                      <Link to={'/about/' + nextMember}>
                        About {capitalCase(nextMember)}
                        <span style={{ marginLeft: '10px' }}>
                          <FontAwesomeIcon icon="arrow-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-page-divider mobile-none" />
      </div>
    )
  }
}

export default MemberPage
