import React, { Component } from 'react';
import photo from '../../profile.jpg'
//import './Profile.css'

class Profilephoto extends Component {
    state = {}
    render() {
        return (
         
            <div>
                    <img className="profile" src={photo} />
            </div>
        );
    }
}

export default Profilephoto;