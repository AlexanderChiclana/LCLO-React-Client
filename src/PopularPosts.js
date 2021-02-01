import React, { Component } from 'react'
import axios from 'axios'
// import apiUrl from './apiConfig'
import { Link } from 'react-router-dom'

class PopularPosts extends Component {
  constructor() {
    super()

    this.state = {
      pinned: []
    }
  }

  componentDidMount() {
    this.getAllPinnedPosts()
  }

  getAllPinnedPosts = () => {
    axios.get(`https://cdn.contentful.com/spaces/5babw3v5cb9l/environments/master/entries?access_token=tT0wH4gdjnRMag6VTNIhIQtOw2A0QR-L6iSeekeNuNM&content_type=blogpost&fields.page[all]=${this.props.page}&fields.pinned=true`).then(res => {
      console.log(res)
      this.setState({
        pinned: res.data.items
      })
    })
  }

  render() {
    const PinnedList = () =>
      this.state.pinned.map((pinned, index) => (
        <li key={index} className="d-flex flex-wrap align-items-center">
          <figure className="d-flex justify-content-center">
            <img
              className="LCLO-Icon"
              src={require('./images/LCLO-Icon.png')}
              style={{ width: '60%' }}
              alt=""
            />
          </figure>

          <div className="entry-content d-flex align-items-center">
            <a>
              <h3 className="entry-title" style={{ color: '#262626' }}>
                <Link to={'/posts/' + pinned.sys.id}>{pinned.fields.heading}</Link>
              </h3>
            </a>
          </div>
        </li>
      ))

    return (
      <div className="popular-posts tablet-wide tablet-no-margin">
        {this.state.pinned.length > 0 && <h2>Trending Ideas</h2>}

        <ul className="p-0">
          <PinnedList />
        </ul>
      </div>
    )
  }
}

export default PopularPosts
