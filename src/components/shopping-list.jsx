import ShoppingListItems from "./shooping-list-items"

const ShoppingList = ({data, onDelete, onToggleItemActive}) => {
  return (
    <div className="shopping-list">
      {data.map(item => (
        <ShoppingListItems
         item = {item}
         key={item.id}
         onDeleteElement = {() => onDelete(item.id)}
         onToggleItemActiveElement = {() => onToggleItemActive(item.id)} />
      ))}
    </div>
    
  )
}

export default ShoppingList