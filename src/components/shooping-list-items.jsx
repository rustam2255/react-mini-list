import React from "react";

/*const ShoppingListItems = ({item}) => {
  return (
    <div key={item.id} className="list-item">
    <div className="item-info">
      <span>{item.size}</span>
      <p>{item.title}</p>
    </div>
    <div className="item-actions">
      <span className="check">&#10003;</span>
      <span className="times">&times;</span>
    </div>
    </div>
  )
}*/
class ShoppingListItems extends React.Component{
  constructor(props){
    super(props)
  }
 
  render(){
   const {item, onDeleteElement, onToggleItemActiveElement} = this.props
    return(
      <div key={item.id} className={`list-item && ${item.active && 'active'}`}>
      <div className="item-info">
        <span>{item.size}</span>
        <p>{item.title}</p>
      </div>
      <div className="item-actions">
        <span className="check" onClick={onToggleItemActiveElement}   >&#10003;</span>
        <span className="times" onClick={onDeleteElement}>&times;</span>
      </div>
      </div>
    )
  }
}

export default ShoppingListItems