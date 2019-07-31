import React, { Component } from 'react'
import MemberCard from './MemberCard'

class Team extends Component {
    render() {
        return (
             <div className="container">
        <h5 className="section-title h1">Our Team</h5>
        <div className="row">
            <MemberCard name={'Liza Cariaga-Lo'} member={'liza'}/>
            <MemberCard name={'Lynn Hernandez'} member={'lynn'}/>
            <MemberCard name={'Jennifer Nazareno'} member={'jennifer'}/>
            <MemberCard name={'Yen Tran'} member={'yen'}/>
            <MemberCard name={'Jahnvi SINGH'} member={'jahnvi'}/>
            <MemberCard name={'Julie Lee'} member={'julie'}/>
            <MemberCard name={'Teresa Malonzo'} member={'teresa'}/>
            <MemberCard name={'Don Operario'} member={'don'}/>
            <MemberCard name={'Myra Liwang'} member={'myra'}/>
            <MemberCard name={'Maria Paula Garcia Mosquera'} member={'maria'}/>
            <MemberCard name={'Alexander Chiclana'} member={'alexander'}/>
            <MemberCard name={'Arjun Ray'} member={'arjun'}/>
            </div>
        </div>
        )
    }
}

export default Team
