import React, { Component } from 'react'
import 'tachyons';
import '../Card.css'
export class Card extends Component {
 
    render() {
        const {name,username,id,email} = this.props;
        return (
            <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                <img alt="robots" src={`https://robohash.org/${id}?200x200`}/>
                <h1>{name}</h1>
                <p>{email}</p>
                <p>{username}</p>

            </div>
        )
    }
}

export default Card
