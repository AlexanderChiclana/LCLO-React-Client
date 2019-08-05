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
                        padding: '5.4px' }}>
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
