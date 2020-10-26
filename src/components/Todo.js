import React from 'react'

const ToDo = props => {
    const handleClick = () => {
        props.handleToggleItem(props.items.id)
    }
    return(
        <div>
            <p>{props.items.text}</p>
        </div>
    )
}