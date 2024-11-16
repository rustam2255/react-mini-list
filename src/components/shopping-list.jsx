import ShoppingListItems from "./shooping-list-items"

const ShoppingList = ({data, onDelete, onToggleItemActive}) => {
  return (
    <div className="shopping-list">
      {data.length ? data.map(item => (
        <ShoppingListItems
         item = {item}
         key={item.id}
         onDeleteElement = {() => onDelete(item.id)}
         onToggleItemActiveElement = {() => onToggleItemActive(item.id)} />
      )) : 
      <div>No data</div> }
    </div>
    
  )
}

export default ShoppingList