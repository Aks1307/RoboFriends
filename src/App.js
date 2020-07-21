import React, { Component } from 'react'
import {robots} from './robots';
import 'tachyons';
import Card from './components/Card'
import SearchBox from './components/SearchBox';




export class App extends Component {
    constructor(){
        super()
        this.state = {
            robots : robots,
            searchfield : ''
        }
        
    }
    onSearchChange = (event) =>{
        this.setState({searchfield : event.target.value})
      
    }
    render() {
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
        } )
        return (
            <div className="tc">
              <h1 className="f-headline lh-solid grow i">ROBOFRIENDS</h1>
               <SearchBox searchChange={this.onSearchChange}/> 
              {
                  filteredRobots.map((robo)=>{ return <Card key={robo.id} name={robo.name} id={robo.id} email={robo.email} username={robo.username}/>})
              } 
              <Card/>
            </div>
        )
    }
}

export default App
