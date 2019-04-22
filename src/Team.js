import React, { Component } from 'react'
import MemberCard from './MemberCard'

class Team extends Component {
    render() {
        return (
            <section id="team" className="pb-5">
             <div className="container">
        <h5 className="section-title h1">Our Team</h5>
        <div className="row">
            <MemberCard name={'Liza Cariaga-Lo'}/>
            <MemberCard name={'Lynn Hernandez'}/>
            <MemberCard name={'Jennifer Nazareno'}/>
            <MemberCard name={'Yen Tran'}/>
            <MemberCard name={'Jahnvi SINGH'}/>
            <MemberCard name={'Julie Lee'}/>
            <MemberCard name={'Teresa Malonzo'}/>
            <MemberCard name={'Don Operario'}/>
            <MemberCard name={'Myra Liwang'}/>
            <MemberCard name={'Maria Paula Garcia Mosquera'}/>
            <MemberCard name={'Alexander Chiclana'}/>
            <MemberCard name={'Arjun Ray'}/>
            </div>
        </div>
</section>
        )
    }
}

export default Team
