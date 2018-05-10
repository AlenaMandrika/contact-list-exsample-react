import React, { Component } from 'react';
import './App.css';

import Contact from './components/contactCard/contactCard'
import Timer from './components/Timer/timer'

import AniLorak from './assets/images/AniLorak.jpeg'
import Anja from './assets/images/Anja.jpeg'
import Natasha from './assets/images/Natasha.jpeg'
import TinaCarol from './assets/images/TinaCarol.jpeg'

let CONTACTS = [
  {
    id: 1,
    name: 'Karolina',
    phoneNumber: '+380966666666',
    email: 'AniLorak@gmail.com',
    image: AniLorak,
    alt: 'AniLorak'
  }, {
    id: 2,
    name: 'Cedokova',
    phoneNumber: '+380966344466',
    email: 'Anja@gmail.com',
    image: Anja,
    alt: 'Anja'
  }, {
    id: 3,
    name: 'Natasha',
    phoneNumber: '+380976654433',
    email: 'Natasha@gmail.com',
    image: Natasha,
    alt: 'Natasha'
  }, {
    id: 4,
    name: 'Tina',
    phoneNumber: '+380456784935',
    email: 'TinaCarol@gmail.com',
    image: TinaCarol,
    alt: 'TinaCarol'
  }
];

class App extends Component {
  constructor (props) {
    super (props)
    this.state = {
      displayedContacts: CONTACTS,

      isVisible: true,
      isHidden: false,

      value: 0,

      mounted: false
    }

    this.handleSearch = this.handleSearch.bind(this)
    this.addContactList = this.addContactList.bind(this)
    this.deleteContactList = this.deleteContactList.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)
    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleMountOrUnmount = this.handleMountOrUnmount.bind(this)
  }

  handleSearch (event) {
    let searchQuery = event.target.value.toLowerCase();
    let displayedContacts = CONTACTS.filter(function(el) {
      let searchValue = el.name.toLowerCase();
      console.log(searchValue)
      return searchValue.indexOf(searchQuery) !== -1;
    });
    console.log(displayedContacts)
    this.setState({
      displayedContacts: displayedContacts
    });
  }

  addContactList () {
    this.setState ({
      isVisible: false,
      isHidden: true,
    });
  }

  deleteContactList () {
    this.setState ({
      isVisible: true,
      isHidden: false,
    });
  }

  handleDecrement () {
    console.log ('value before', this.state.value)
    this.setState ({
      value: this.state.value - 1,
    }, () => {
      console.log ('value after1', this.state.value)//выполнится, когда состояние поменяется
    });
    console.log ('value after2', this.state.value)
  }

  handleIncrement () {
    this.setState ({
      value: this.state.value + 1
    });
  }

  handleMountOrUnmount (){
    this.setState ({
      mounted: !this.state.mounted
    })
  }

  render() {
    return (
      <div className="contacts">
        <div className="container timer-counter">
          <div>
            {
              this.state.mounted
                ? <Timer />
                : false
            }
            <button className="btn-counter" onClick={this.handleMountOrUnmount}>
              {this.state.mounted ? "Unmount Timer" : "Mount Timer"}
            </button>
          </div>
          <div className='counter-block'>
            <button onClick={this.handleDecrement} className='btn-counter'>-</button>
            <h1>{this.state.value}</h1>
            <button onClick={this.handleIncrement} className='btn-counter'>+</button>
          </div>
        </div>
        <div className="container btn-contact">
          <button className='btnAddContactList' onClick={this.addContactList} hidden={!this.state.isVisible}>add contact list</button>
        </div>
        <div className='block-contact' hidden={!this.state.isHidden}>
          <input type="text" placeholder="Search..." className="search-field" onChange={this.handleSearch} />
          <ul className="contacts-list">
            {
              this.state.displayedContacts.map(function(el) {
                return <Contact
                  key={el.id}
                  name={el.name}
                  phoneNumber={el.phoneNumber}
                  email={el.email}
                  image={el.image}
                  alt={el.alt}
                />;
              })
            }
          </ul>
          <button className='btnDeleteContactList' onClick={this.deleteContactList} hidden={this.state.isVisible}>delete contact list</button>
        </div>
      </div>
    );
  }
}

export default App;
