import React from 'react'
import unlike from "../img/unliked.png";

class Card extends React.Component {
  render() {
    let {details, toggle} = this.props;
    return (
      <div>
        <img src={details.image} alt="images"/>
        <div className="text">
          <div className="gridRow">
            <h3>{details.firstName} {details.lastName}</h3>
            <div className="gridCol">
              <img src={unlike} className="unlikes" alt="unlike"/>
            </div>
          </div>
          <p>{details.city}, {details.country}</p>
          <p>{details.phoneNumber}</p>
          <p>{details.website}</p>
          <p>{details.email}</p>
          <button onClick={() => toggle(details.id)}>Show me</button>
        </div>
      </div>
    )
  }

}

export default Card