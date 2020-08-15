import React, { Component } from 'react'
import ContactList from './contactList/ContactList';
import { v4 as uuidv4 } from 'uuid';


export default class Phonebook extends Component {

    state = {
        contacts: [],//{name:name, id: id}
        name: ''
      }
      

      addContact= name =>{
          const contact = {
              name: name,
              id: uuidv4()
          };

          this.setState(prevState=>{
              return{
                  contacts:[...prevState.contacts, contact]
              }
          })
      }

      handleChange=(e)=>{
           this.setState({name: e.target.value})
      }

      handleSubmit = evt => {
            evt.preventDefault();
            this.addContact(this.state.name);
             this.setState({name:''});
            
      }

    render() {
        const {name, contacts}= this.state;
       
        return (
            <>
            <h1>Phonebook</h1>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name <input type="text" name="name" value={name}   onChange={this.handleChange} placeholder="Enter name"></input>
                </label>
                <button type="submit" >Add contact</button>
            </form>
           
            {contacts.length>0 &&  <ContactList  contacts={contacts}/>  }
            

</>
        )
    }
}
