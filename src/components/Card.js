import React from 'react'

class Card extends React.Component {
  render() {
    let {details, toggle} = this.props;
    return (
      <div>
        <img src={details.image} alt="images"/>
        <div className="text">
          <h3>{details.firstName} {details.lastName}</h3>
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