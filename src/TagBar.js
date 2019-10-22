import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Badge } from 'react-bootstrap'

 

class TagBar extends Component {
    render() {
        const TagList = () => this.props.tags.map((tag, index) => 
        // <Link to={'/search/' + tag} key={index}>               
             <span key={index}>
                 <Link to={'/search/' + tag} key={index}>  
                 <Badge variant="light" 
                    style={{ 
                        fontFamily: 'Montserrat',
                        color: '#575757',
                        border: '.5px solid #cccccc', 
                        borderRadius: '3px',
                        padding: '7px' }}>
                        {tag}
                </Badge>
                 </Link>
            </span>
        // </Link>
          ) 

        return (
            <div className="post-metas d-flex flex-wrap align-items-center">
                <TagList />
 

            </div>
        )
    }
}

export default TagBar
