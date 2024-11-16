import React from "react";
import { arr } from "../constants"
import Filter from "./filter"
import Shopping from "./shopping"
import ShoppingList from "./shopping-list"
import ShoppingAddForm from "./shpping-add-form"
import { v4 as uuidv4 } from 'uuid';
import SearchPanel from "./search-panel";
/*function App() {
  const data = [
    {
      id: 1,
      size: 14,
      active: false,
      title: 'Buy bananas'
    },
    {
      id: 2,
      size: 10,
      active: false,
      title: 'Buy ananas'
    },
    {
      id: 3,
      size: 8,
      title: ' Buy milk',
      active: false
    }
  ]

  return (
    <>
     <div className="app">
      <div className="wrapper">
        <div className="card">
          <Shopping />
          <ShoppingAddForm />
          <ShoppingList data = {data} />
          <Filter />
        </div>
        <img src="/first.png" alt="" />
      </div>
     </div>
    </>
  )
}*/
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data: arr,
      search: "",
      filter: 'all'
    }
  }
  onDelete = (id) => {
    const newArr = this.state.data.filter((item) => item.id !== id)
    this.setState({
      data:newArr
    })
  }
  onToggleItemActive = (id) => {
    const newArr = this.state.data.map((item) => {
      if(item.id === id){
        return {...item, active: !item.active}
      }
      return item

      
    })
    this.setState({
      data: newArr
    })
  }
  onAdd = (item) => {
    const {number, title} = item
    const newData = {title, size: number, active: false, id: uuidv4()}
    const newArr = [...this.state.data, newData]
    this.setState({
      data:newArr
    })
  }
  onSearch = (arr, term) => {
    if(term.length === 0 ){
      return arr
    }
    return arr.filter(item => item.title.toLowerCase().indexOf(term.toLowerCase()) > -1)
  }
  onUpdateSearch = (search) => {
    this.setState({search})
  }
  filterData = (arr, filter) => {
    switch(filter){
      case 'completed':
        return arr.filter(item => item.active)
      case 'big-size':
        return arr.filter(item => item.size > 10)
      default:
        return arr
    }
  }
  onFilterSelect = (filter) => {
    this.setState({filter})
  }
  render(){
    const {data, search, filter} = this.state
    const allData = this.filterData(this.onSearch(data, search), filter) 
    return (
      <>
       <div className="app">
        <div className="wrapper">
          <div className="card">
            <Shopping length = {data.length} />
            <SearchPanel onUpdateSearch = {this.onUpdateSearch} />
            <ShoppingAddForm  onAdd = {this.onAdd}/>
            <ShoppingList
               data = {allData}
               onDelete = {this.onDelete}
               onToggleItemActive = {this.onToggleItemActive} />
            <Filter filter = {filter} onFilterSelect = {this.onFilterSelect} />
          </div>
          <img src="/first.png" alt="" />
        </div>
       </div>
      </>
    )
  }
}

export default App
