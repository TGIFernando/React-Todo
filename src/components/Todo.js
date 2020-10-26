import React from 'react'

const ToDo = props => {
    const handleClick = () => {
        props.toggleItem(props.items.id)
    }
    return(
        <div onClick={handleClick} className={`item${props.item.crossed ? 'cross' : ''}`}>
            <p>{props.item.text}</p>
        </div>
    )
}

export default ToDo