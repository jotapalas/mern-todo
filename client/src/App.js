import React from 'react';
import './App.css';
import Form from './components/Form/Form'
import TodoList from './components/TodoList/TodoList'


class App extends React.Component{
    constructor(props){
        super(props);
        this.state ={todos: [
        {_id: "1", task: "laundry", dueDate: "tomorrow", status: "doing"}
        ]}

        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    addTodo(todo){
        this.setState((prevState) => {
            return { 
                todos: prevState.todos.concat(todo) 
            };
        });
    }

    removeTodo(id){
        const todos = this.state.todos.filter(element => (element._id !== id));
        this.setState({ todos: todos });
    }

    render(){
        return (
        <div className="App">
            <Form addTodo={this.addTodo} />
            <TodoList todos={this.state.todos} removeTodo={this.removeTodo} />
        </div>
        );
    }
}

export default App;
