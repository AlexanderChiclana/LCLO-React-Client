import React, { Component } from 'react'
import MemberCard from './MemberCard'

class Team extends Component {
    render() {
        return (
             <div className="container">
        <h5 className="section-title h1">Our Team</h5>
        <div className="row">
            <MemberCard description={'CEO, and Founder of LCLO Group'} name={'Liza Cariaga-Lo'} member={'liza'}/>
            <MemberCard description={'Training and Curricular Innovations'} name={'Lynn Hernandez'} member={'lynn'}/>
            <MemberCard description={'Entrepreneurial and Curricular Initatives'} name={'Jennifer Nazareno'} member={'jennifer'}/>
            <MemberCard description={'Business Development and Outreach'} name={'Yen Tran'} member={'yen'}/>
            <MemberCard description={'Curricular Innovations Adviser'} name={'Jahnvi SINGH'} member={'jahnvi'}/>
            <MemberCard description={'Fellowship Programs'} name={'Julie Lee'} member={'julie'}/>
            <MemberCard description={'Fellowship Programs'} name={'Teresa Malonzo'} member={'teresa'}/>
            <MemberCard description={'Training and Curricular Innovations'} name={'Don Operario'} member={'don'}/>
            <MemberCard description={'Fellowship Programs and Outreach'} name={'Myra Liwang'} member={'myra'}/>
            <MemberCard description={'Research and Outreach'} name={'Maria Paula Garcia Mosquera'} member={'maria'}/>
            <MemberCard description={'Technolgy and Media, polyPodia'} name={'Alexander Chiclana'} member={'alexander'}/>
            <MemberCard description={'Technology Partner through polyPodia'} name={'Arjun Ray'} member={'arjun'}/>
            </div>
        </div>
        )
    }
}

export default Team
