// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import ToDo from './Todo'

const ToDoList = props => {
    const onClick = () => {
        props.clearItems()
    }

    return(
        <div>
        <div className="Item-List">
            {props.items.map(item => (
                <ToDo toggleItem={props.toggleItem} key={item.id} item={item}/>
            ))}
            
        </div>
        <button onClick={onClick} className='clear-btn'>Clear Selected</button>
        </div>
    )
}

export default ToDoList