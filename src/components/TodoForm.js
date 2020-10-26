import React from 'react'

class ToDoForm extends React.Component{
    constructor(){
        super()
        this.state = {
            input: ''
        }
    }

    onChange = e => {
        this.setState({
            input:e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault()
        this.props.addItem(this.state.input)
        this.setState({
            input: ''
        })
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <input value={this.state.input} onChange={this.onChange} type="text" name="item"/>
                <button>Add Item</button>
            </form>
        )}
}

export default ToDoForm;