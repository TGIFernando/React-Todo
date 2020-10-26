import React from 'react';
import './components/Todo.css'
import ToDoForm from './components/TodoForm'
import ToDoList from './components/TodoList'

const items = [{
  text: 'Example task',
  id: 123,
  crossed: false,
},]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super()
    this.state={
      items: items
    }
  }

  toggleItem = (itemID) => {
    this.setState({
      items: this.state.items.map((item) => {
        if (item.id === itemID) {
          return{
            ...item,
            crossed: !item.crossed
          }
        } else {
          return item
        }
      })
    })
  }

  addItem = (text) => {
    this.setState({
      items:[...this.state.items, {
        text: text,
        id: Date.now(),
        crossed: false
      }]
    })
  }

  clearItems = () => {
    this.setState({
      items: this.state.items.filter(item=>(!item.crossed))
    })
  }


  render() {
    return (
      <div className='Main-div'>
        <h2 className='fern'>Ferns Todo App!</h2>
        <ToDoForm addItem={this.addItem}/>
        <ToDoList clearItems={this.clearItems} toggleItem={this.toggleItem} items={this.state.items}/>
      </div>
    );
  }
}

export default App;
