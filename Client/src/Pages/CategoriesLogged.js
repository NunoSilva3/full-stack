import React from 'react';
import {categories} from '../mockarray';
import {NavLink} from 'react-router-dom'
import axios from 'axios';


export default class CategoriesPage extends React.Component{

    state = {
        categories : []
      }

    componentDidMount(){
        var url = `http://localhost:3003/categories/showall`
        axios.get(url)
        .then ((res)=>{
          
            this.setState({categories:res.data})               
        })
        .catch((error)=>{
             
        })
}


render(){
    

return (

<div>
    <div>
    <h2 id='CreatePost'><NavLink to={`/CreateCategory`}>Click Here to create a new category</NavLink></h2>
    </div>
    <div>
        <ul className='FullPageGridCat'>
            { this.state.categories.map( ele =>{
               return <li> <NavLink to={`/posts/${ele._id}`}>{ele.name}<img src={ele.photoUrl}></img></NavLink> </li>          
            })}
        </ul>
    </div>    

</div>

)

}


}