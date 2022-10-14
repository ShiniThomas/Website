import { Component } from "react";
import "./search.styles.css"


const Search = ({className,placeholder,onChangeHandler}) =>{
    return(
        <div>
            <input 
                className={`search-box ${className}`}
                type="search"
                placeholder={placeholder} 
                onChange={onChangeHandler}
            />
        </div>
    )
    
}

// class Search extends Component{
//     render(){
//         return (
//             <div>
//                 <input 
//                     className={`search-box ${this.props.className}`}
//                     type="search"
//                     placeholder={this.props.placeholder} 
//                     onChange={this.props.onChangeHandler}
//                 />
//             </div>
//         )
//     }
// }

export default Search;