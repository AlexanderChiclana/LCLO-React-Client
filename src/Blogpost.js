import React, { Component } from 'react'
import DOMPurify from 'dompurify'
import { Link } from 'react-router-dom'
import YouTube from 'react-youtube'
import TagBar from './TagBar'



class Blogpost extends Component {
    constructor () {
        super()
        this.state = {
            string: '',
            length: 1000,
            trimmedString: '',
            overflow: false
        }
      }

    componentDidMount() {
        let trimmedString = ''

        if (this.props.text.length > this.state.length) {
            trimmedString = this.props.text.substring(0, this.state.length - 3) + '...' 
            this.setState({ overflow: true })
        } else {
            trimmedString = this.props.text
        }



        this.setState({ trimmedString: trimmedString })
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo()
      }
    
    render() {
        const opts = {
            height: '410',
            width: '100%',
            playerVars: { // https://developers.google.com/youtube/player_parameters
              autoplay: 0,
              rel: 0
            }
          }

        return (
            <div className="news-content">
         

            <header className="entry-header d-flex flex-wrap justify-content-between align-items-center">
                <div className="header-elements">

                    <div className="posted-date">{this.props.date}</div>

                    <h2 className="entry-title mobile-heading">
                        
                    <Link to={'/posts/' + this.props.id}>
                         {this.props.heading}
                    </Link>
                    
                    {/* <a href="#" dangerouslySetInnerHTML= {{ __html: DOMPurify.sanitize(this.props.heading) }}></a> */}
                    
                    </h2>

                     {this.props.tags && <TagBar tags={this.props.tags}/> }
           
                </div>


                {/* <div className="donate-icon">
                    <a href="#"><img src={require('./images/donate-icon.png')} alt="" /></a>
                </div> */}
            </header>

            <div className="blogpost-media">
            
            { this.props.video &&
            <div style={{ marginBottom: '30px' }}
            >
            <YouTube
                videoId={this.props.video.split('https://youtu.be/').pop()}
                opts={opts}
                onReady={this._onReady}
            />
            </div>
            }

{ this.props.image && <img src={this.props.image} alt="" className="single-post-image" style={{ paddingBottom: '30px' }}/>}

            </div>

            <div className="entry-content" >
                <p className="single-post-text single-post-preview" dangerouslySetInnerHTML= {{ __html: DOMPurify.sanitize(this.state.trimmedString) }} ></p>         
            </div>

            <footer className=" d-flex justify-content-end">
                { this.state.overflow ? <Link to={'/posts/' + this.props.id}><div className="btn gradient-bg roundButtonSmall">Read More</div></Link> : null }
            </footer>
            <br />
            <br />
            <br />

        </div>
        )
    }
}

export default Blogpost
