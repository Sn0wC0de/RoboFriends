import React, { Component} from 'react';
import CardList from '../components/CardList.js';
// import { robots } from './robots';
import SearchBox from '../components/searchBox.js';
import Scroll from '../components/Scroll.js'
import './App.css';

 
class App extends Component  {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(users => {this.setState({robots: users})})
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
        
    }


    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchfield.toLowerCase())
        })
            return !robots.length ? (
                <div className = "vh-100 dt w-100">
                    <div className="dtc v-mid tc  ph3 ph4-l">
                        <h1 className="f1 tc fw6 ">Loading</h1>
                    </div>
                </div>
                 ) : 
                (
                <div className = "tc">
                    <h1 className="f1">Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots = {filteredRobots} />
                    </Scroll>
                </div>
            );
            
}}

export default App;