import React, { Component } from 'react'

export default class Phonebook extends Component {

    state = {
        contacts: [],//{name:name, id: id}
        name: ''
      }
      

      handleChange=(e)=>{
this.setState({value: e.target.value})
      }
    render() {
        const {name}= this.props;
        return (
            <>
            <form onSubmit={this.handleChange}>
                <label>
                    Name <input type="text" name="name" value={name}  placeholder="Enter name"></input>
                </label>
                <button type="submit">Add contact</button>
            </form>

</>
        )
    }
}
