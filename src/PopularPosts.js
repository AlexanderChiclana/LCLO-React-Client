import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from './apiConfig'
import { Link } from 'react-router-dom'


class PopularPosts extends Component {
    constructor () {
        super()

        this.state = {
            pinned: []
        }
      }

      componentDidMount() {
        this.getAllPinnedPosts()
      }

      getAllPinnedPosts = () => {
        axios.get(`${apiUrl}/pinned?page=${this.props.page}`)
          .then(res => {
              console.log(res)
            this.setState({ 
                pinned: res.data.blogposts
            })
          })
      }

    render() {
        const PinnedList = () => this.state.pinned.map(pinned => 
                <li key={pinned._id} className="d-flex flex-wrap align-items-center">
                    <figure className="d-flex justify-content-center"><img src={require('./images/LCLO-Icon.png')} style={{ width: '60%' }} alt="" /></figure>

                    <div className="entry-content d-flex align-items-center">
                        <a><h3 className="entry-title" style={{ color: '#262626' }}><Link to={'/posts/' + pinned._id}>{pinned.heading}</Link></h3></a>

                        {/* <div className="posted-date">March 12, 2018</div> */}
                    </div>
                </li>
          )  

        return (
            <div className="popular-posts">
            { this.state.pinned.length > 0 && <h2>Trending Ideas</h2>}

            <ul className="p-0">


            <PinnedList />

            </ul>
        </div>
        )
    }
}

export default PopularPosts
