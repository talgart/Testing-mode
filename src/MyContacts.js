import React from 'react'
import logo from './Vector.png'
import likes from './Heart.png'
import {observable, runInAction} from "mobx";
import {inject} from "mobx-react";
@inject
class MyContacts extends React.Component {
  @observable  isLoading = true;
  @observable  contacts = [];


  componentWillMount() {
    this.contacts = JSON.parse(localStorage.getItem('contacts'));
    this.isLoading = false

  }

  componentDidMount() {
    if (!localStorage.getItem('contacts')) {
      this.load();
    } else {
      console.log("data is already in localStorage")
    }

  }


  load() {
    this.contacts = [];

    fetch('https://my-json-server.typicode.com/RomanChasovitin/demo-api/users')
      .then(response => response.json())
      .then(parsedJSON => parsedJSON.data.map(user => (
        {
          firstName: `${user.firstName}`,
          lastName: `${user.lastName}`,
          phoneNumber: `${user.phoneNumber}`,
          email: `${user.email}`,
          city: `${user.city}`,
          country: `${user.country}`,
          website: `${user.website}`,
          image: `${user.image}`,
          id: `${user.id}`
        }
      )))
      .then(contacts =>
        (this.contacts = contacts, this.isLoading = true)
      )
      .catch(error => console.log('parsing failed', error))

  }


  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('contacts', JSON.stringify(nextState.contacts));
  }

  toggle = (id) => {
    this.props.history.push(`info/${id}`);
  };

  render() {
    return (
      <div>
        <nav className={'nav-header'}>
          <div className="headerTool">
            <img src={logo} alt="logo" className="logo"/>
          </div>
          <ul>
            <li><a className='myContacts' href="#"> MyContacts</a></li>
          </ul>
        </nav>
        <div className="wrapper">
          <div className="controls">
            <input type="text" className="search" placeholder="Type to search" name="search"/>
          </div>
          <div className="heart">
            <img src={likes} alt="likes" className=""/>
          </div>
        </div>
        <main className="grid">
          {!this.isLoading && this.contacts.length > 0 ? this.contacts.map(contact => {
            const {firstName, lastName, image, phoneNumber, email, id, city, country, website} = contact;
            return <article>
              <img src={image} alt="images"/>
              <div className="text">
                <h3>{firstName} {lastName}</h3>
                <p>{city}, {country}</p>
                <p>{phoneNumber}</p>
                <p>{website}</p>
                <p>{email}</p>
                <button onClick={() => this.toggle(id)}>Show me</button>
              </div>
            </article>
          }) : null}
        </main>
      </div>
    )
  }
}

export default MyContacts