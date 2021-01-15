import React, { Component } from 'react'
import axios from 'axios'

export default class Image extends Component {
    state = {
        imageURL: null
    }
    componentDidMount() {
        console.log('image url ' + this.props.imageURL)

        axios
        .get(`https://cdn.contentful.com/spaces/5babw3v5cb9l/environments/master/assets/${this.props.imageURL}?access_token=tT0wH4gdjnRMag6VTNIhIQtOw2A0QR-L6iSeekeNuNM `)
  
        .then(res => {
          console.log('the response' + res)
          this.setState({
              imageURL: res.data.fields.file.url
          })
        })
    }
    render() {
        return (
            <React.Fragment>
            {this.state.imageURL && <img src={this.state.imageURL} className={this.props.className} style={{ paddingBottom: this.props.paddingBottom }}/>}
            </React.Fragment>
        )
    }
}
