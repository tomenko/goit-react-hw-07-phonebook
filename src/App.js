import React, { Component } from 'react';
import {connect} from 'react-redux';
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import ContactItem from './components/ContactItem';
import Filter from './components/Filter'

import { fetchContacts } from './redux/contacts/contacts-operations';
import { getItems } from './redux/contacts/contacts-selectors';

class App extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }
  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm/>
        <h2>Contacts</h2>
  
        {this.props.items.length > 0 ? (
          <>
            <Filter />
            <ContactList>
              <ContactItem />
            </ContactList>
          </>
        ) : (
          <span>You have no contacts!</span>
        )}
      </>
    )
  }
};

/* const mapStateToProps = state => ({
  items: state.contacts.items,
}); */

const mapStateToProps = state => ({
  items: getItems(state),
});

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
