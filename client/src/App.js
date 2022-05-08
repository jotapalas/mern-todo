import React from 'react';
import axios from 'axios';
import './App.css';
import Form from './components/Form/Form'
import TodoList from './components/TodoList/TodoList'


class App extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            todos: []
        }

        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    componentDidMount() {
        axios.get('api/todos')
            .then((res) => {
                this.setState({
                    todos: res.data
                });
            });
    }

    addTodo(todo){
        axios.post('api/todos', todo)
            .then((res) => {
                this.setState((prevState) => {
                    return { todos: prevState.todos.concat(res.data)};
                });
            })
        
    }

    removeTodo(id){
        console.log(id);
        axios.delete('api/todos/' + id)
            .then((res) => {
                const todos = this.state.todos.filter(element => (element._id !== id));
                this.setState({ todos: todos });
            });
    }

    render(){
        return (
        <div className="App">
            <h1>To-do list</h1>
            <TodoList todos={this.state.todos} removeTodo={this.removeTodo} />
            {this.state.todos.length === 0 &&
                <div className='no-tasks'>Add tasks using the form below.</div>
            }
            <Form addTodo={this.addTodo} />
        </div>
        );
    }
}

export default App;
