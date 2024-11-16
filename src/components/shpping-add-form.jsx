import React from "react"

/*const ShoppingAddForm = () => {
  return (
    <div className="form">
      <input type="text" className="title" placeholder="Typing..." />
      <input type="number" className="number" placeholder="14" />
      <button>Add</button>
    </div>
  )
}*/
class ShoppingAddForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: "",
      number: ""
    }
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onAdd = () => {
    const data = {
      title: this.state.title,
      number: this.state.number
    }
    if(!data.number.length || !data.title.length){
      alert("Formani to'ldiring!!!")
    }
    else{
      this.props.onAdd(data)
    }

    
  }
  render(){
    const {title, number} = this.state
    return (
      <div className="form">
        <input type="text" className="title" placeholder="Typing..." name="title" value={title} onChange={this.onChange} />
        <input type="number" className="number" placeholder="14" name="number" value={number} onChange={this.onChange} />
        <button onClick={this.onAdd}>Add</button>
      </div>
    )
  }
}

export default ShoppingAddForm