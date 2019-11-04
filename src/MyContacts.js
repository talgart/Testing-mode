import React  from 'react'
import logo from './img/Vector.png'
import likes from './img/Heart.png'
import {inject, observer} from "mobx-react";
import {runInAction} from "mobx";
import unlike from "./img/unliked.png"

@inject('userData') @observer
class MyContacts extends React.Component {

  componentWillMount() {
    localStorage.getItem('contacts') && runInAction(()=>{
      this.props.userData.contacts = JSON.parse(localStorage.getItem('contacts'));
      this.props.userData.isLoading = false
    })
  }

  componentDidMount() {
    if (!localStorage.getItem('contacts')) {
      this.props.userData.load()
    }


  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('contacts', JSON.stringify(this.props.userData.contacts));
  }

  toggle = (id) => {
    this.props.history.push(`info/${id}`);
  };

  render() {
    let {contacts, isLoading} = this.props.userData;
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
          {!isLoading && contacts.length > 0 ? contacts.map(contact => {
            return <article>
              <img src={contact.image} alt="images"/>
              <div className="text">
                <div className="gridRow">
                  <h3>{contact.firstName} {contact.lastName}</h3>
                  <div className="gridCol">
                    <img src={unlike} className="unlikes" alt="unlike"/>
                  </div>
                </div>
                <p>{contact.city}, {contact.country}</p>
                <p>{contact.phoneNumber}</p>
                <p>{contact.website}</p>
                <p>{contact.email}</p>
                <button onClick={() => this.toggle(contact.id)}>Show me</button>
              </div>
            </article>
          }) : null}
        </main>
      </div>
    )
  }
}

export default MyContacts