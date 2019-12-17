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
                <li key={pinned._id} className="d-flex flex-wrap justify-content-between align-items-center">
                    <figure><a href="#"><img src={require('./images/p-1.jpg')} alt="" /></a></figure>

                    <div className="entry-content">
                        <h3 className="entry-title"><Link to={'/posts/' + pinned._id}>{pinned.heading}</Link></h3>

                        <div className="posted-date">March 12, 2018</div>
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
