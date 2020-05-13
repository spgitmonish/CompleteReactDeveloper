import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'

class App extends Component {
  constructor() {
    super();

    // State member variable 
    this.state = {
      monsters: [ ],
      searchField: ''
    }
  }

  // When the component is rendered on the DOM for the first time, this function gets called
  // NOTE: This is a lifecycle method
  async componentDidMount() {
    // Fetch resource at the URL
    try {
      const usersResponse = await fetch("https://jsonplaceholder.typicode.com/users");
      // Convert into JSON object and await the promise
      const users = await usersResponse.json();
      // Set the state to the list of users which was obtained from the URL
      this.setState({ monsters: users });
    } catch(err) {
      // Will catch any error in the try block
      console.error(err);
    }   
  } 

  // As soon state changes, react "bot" calls this render function automatically
  render() {
    // Destructuring: Pulling individual properties
    const { monsters, searchField } = this.state;

    // NOTE: Any time setState is called and the properties change
    //       React re-renders the component, that means the render function
    //       gets called. So this section gets called.
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox placeholder='search monsters' handleChange={e => this.setState({ searchField: e.target.value })}/>
        <CardList monsters={ filteredMonsters } />
      </div>
    );
  }
}

export default App;
