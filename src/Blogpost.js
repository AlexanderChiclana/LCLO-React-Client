import React, { Component } from 'react'
import DOMPurify from 'dompurify'
import { Link } from 'react-router-dom'
import YouTube from 'react-youtube'
import TagBar from './TagBar'
import Image from './Image.js'
import dateFormat from 'dateformat'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'



class Blogpost extends Component {
  constructor() {
    super()
    this.state = {
      string: '',
      length: 1000,
      trimmedString: '',
      overflow: false
    }
  }

  componentDidMount() {

    const element = this.element
    // Things involving accessing DOM properties on element
    // In the case of what this question actually asks:
    const hasOverflowingChildren = element.offsetHeight < element.scrollHeight 
    this.setState({
      overflow: hasOverflowingChildren
    })


    // let fullText = ''

    // this.props.text.content.forEach((node) => {
    //   if (node.nodeType === 'paragraph') {
    //     fullText += node.content[0].value + '<br /> <br />'
    //   }
    // })

    // console.log(previewString)

    // let trimmedString = ''

    // if (fullText.length > this.state.length) {
    //   trimmedString =
    //     fullText.substring(0, this.state.length - 3) + '...'
    //   this.setState({ overflow: true })
    // } else {
    //   trimmedString = fullText
    // }

    // this.setState({ trimmedString: trimmedString })
  }

  _onReady(event) {
    event.target.pauseVideo()
  }

  render() {
    const opts = {
      height: '410',
      width: '100%',
      playerVars: {
        autoplay: 0,
        rel: 0
      }
    }

    return (
      <div className="news-content">
        <header className="entry-header d-flex flex-wrap justify-content-between align-items-center">
          <div className="header-elements">
            <div className="posted-date">{dateFormat(this.props.date, 'mediumDate')}</div>

            <h2 className="entry-title mobile-heading">
              <Link to={'/posts/' + this.props.id}>{this.props.heading}</Link>
            </h2>

            {this.props.tags && <TagBar tags={this.props.tags} />}
          </div>
        </header>

        <div className="blogpost-media">
          {this.props.video && (
            <div style={{ marginBottom: '30px' }}>
              <YouTube
                videoId={this.props.video.split('https://youtu.be/').pop()}
                opts={opts}
                onReady={this._onReady}
              />
            </div>
          )}

          {this.props.image && (
            // <img
            //   src={this.props.image}
            //   alt=""
            //   className="single-post-image"
            //   style={{ paddingBottom: '30px' }}
            // />
            <Image imageURL={this.props.image} className={'single-post-image'} paddingBottom={'30px'}/>
          )}
        </div>

        <div className="entry-content">
          <p
            className="single-post-text single-post-preview"
            // dangerouslySetInnerHTML={{
            //   __html: DOMPurify.sanitize(this.state.trimmedString)
            // }}
            style={{
              maxHeight: '400px',
              overflow: 'hidden'
            }}
            ref={(el) => { this.element = el }}
          >
            {documentToReactComponents(this.props.text)}
          </p>
          {this.state.overflow && <div className="fadeout" />}
        </div>

        <footer className=" d-flex justify-content-end">
          {this.state.overflow ? (
            <Link to={'/posts/' + this.props.id}>
              <div className="btn gradient-bg roundButtonSmall">Read More</div>
            </Link>
          ) : null}
        </footer>
        <br />
        <br />
        <br />
      </div>
    )
  }
}

export default Blogpost
