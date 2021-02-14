import React, { Component } from 'react'
import MemberCard from './MemberCard'

import JenPic from '../src//images/Jennifer-Nazareno.jpg'
import LizaPic from '../src/images/Liza-Cariaga-Lo.jpg'
import LynnPic from '../src/images/Lynn_Hernandez.jpg'
import YenPic from '../src/images/Yen.jpg'
import JuliePic from '../src/images/Julie_Lee.jpg'
import GregoryPic from '../src/images/gregory.jpg'
import TeresaPic from '../src/images/Teresa.jpg'
import DonPic from '../src/images/Don Operario.jpg'
import MyraPic from '../src/images/myra.jpg'
// import MariaPic from '../src/images/Maria.jpg'
import AlexanderPic from '../src/images/Alexander_Chiclana.jpg'
import YishiuanPic from '../src/images/yishiuan-chin.jpg'

class Team extends Component {
    render() {
        return (
             <div className="container">
        <h5 className="section-title h1" style={{ color: 'white' }}>Our Team</h5>
        <div className="row">
            <MemberCard headshot={LizaPic} description={'CEO, and Founder of LCLO Group'} name={'Liza Cariaga-Lo'} member={'liza'}/>
            <MemberCard headshot={LynnPic} description={'Training and Curricular Innovations'} name={'Lynn Hernandez'} member={'lynn'}/>
            <MemberCard headshot={JenPic} description={'Entrepreneurial and Curricular Initatives'} name={'Jennifer Nazareno'} member={'jennifer'}/>
            <MemberCard headshot={YenPic} description={'Business Development and Outreach'} name={'Yen Tran'} member={'yen'}/>
            <MemberCard headshot={GregoryPic} description={'Curricular Innovations Adviser'} name={'Gregory Llacer'} member={'gregory'}/>
            <MemberCard headshot={JuliePic} description={'Fellowship Programs'} name={'Julie Lee'} member={'julie'}/>
            <MemberCard headshot={TeresaPic} description={'Fellowship Programs'} name={'Teresa Malonzo'} member={'teresa'}/>
            <MemberCard headshot={DonPic} description={'Training and Curricular Innovations'} name={'Don Operario'} member={'don'}/>
            <MemberCard headshot={MyraPic} description={'Fellowship Programs and Outreach'} name={'Myra Liwanag'} member={'myra'}/>
            {/* <MemberCard headshot={MariaPic} description={'Research and Outreach'} name={'Maria Paula Garcia Mosquera'} member={'maria'}/> */}
            <MemberCard headshot={AlexanderPic} description={'Technology and Media'} name={'Alexander Chiclana'} member={'alexander'}/>
            <MemberCard headshot={YishiuanPic} description={'Fellowship Programs and Training'} name={'Yishiuan Chin'} member={'yishiuan'}/>
            </div>
        </div>
        )
    }
}

export default Team
