import React from "react";
import './cardlist.styles.css'
import Card from '../card/Card'

const CardList = ({monsters}) =>{
    return(
    <div className="card-list"> 
        {
        monsters.map((monster,index) =>{
                return (
                <Card key={monster.id} monster={monster}/>
            )
        })}
    </div>
    )
}

// class CardList extends Component{
//   render(){
//     const {monsters} = this.props
//       return(
//         <div className="card-list"> {
//             monsters.map((monster,index) =>{
//                     return (
//                     <Card key={monster.id} monster={monster}/>
//                 )
//             })}
//         </div>
//     )
//     }
// }

export default CardList
