import './App.css';
// import {Component} from "react"
import React, { useState, useEffect} from 'react';
import Search from './components/search-box/Search';
import CardList from './components/card-list/CardList'

const App = () =>{
  const [searchField, setsearchField] = useState('')
  const [monsters, setMonster] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState([monsters])
  console.log("rendered")

  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
      setMonster(users)})
    .catch(error =>console.log(error))
  },[])

  useEffect(() =>{
    const filteredList = monsters.filter((monster) =>{
      return monster.name.toLocaleLowerCase().includes(searchField)
    })
    setFilteredMonsters(filteredList)
  },[monsters,searchField])

  const onSearchChange = (event)=>{
    const searchText = event.target.value.toLocaleLowerCase();
    setsearchField(searchText)
  }

  

  return (
    <div className="App">
      <h1 className='app-title'>MONSTERS RODOLEX</h1>
      <Search 
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
        className="monsters-search-box"
      />
      <CardList monsters={filteredMonsters}/>
    </div>
  )
}


// 'App' using class component

// class App extends Component {
//   constructor(){
//     super();
//     this.state={
//       monsters : [],
//       searchText : ''
//       }
//     }
//     // fetching the users using 'async await'
//     // getUser = async ()=>{
//     //   try{
//     //     const dataFromAPI = await fetch("https://jsonplaceholder.typicode.com/users");
//     //     const users = await dataFromAPI.json()
//     //     this.setState({monsters : users})
//     //   }
//     //   catch(err){
//     //     console.log(err);
//     //   }
      
//     // }

//   componentDidMount(){
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(users => {
//       this.setState(()=>{
//         return {monsters : users}
//       })})
//     .catch(error =>console.log(error))

//     // this.getUser();  // Setting the user using 'async await'
//   }

//   onSearchChange = (event)=>{
//     const searchText = event.target.value.toLocaleLowerCase();
//     this.setState(() =>{
//       return { searchText }
//     }) 
//   }

//   render(){
//     const {monsters, searchText} = this.state;
//     const {onSearchChange} = this;
//     const filteredList = monsters.filter((monster) =>{
//       return monster.name.toLocaleLowerCase().includes(searchText)
//     })
//     return (
//       <div className="App">
//         <h1 className='app-title'>MONSTERS RODOLEX</h1>
//         <Search 
//           onChangeHandler={onSearchChange}
//           placeholder="search monsters"
//           className="monsters-search-box"
//         />
//         <CardList monsters={filteredList}/>
//       </div>
//     );
//  } 
// }

export default App;
