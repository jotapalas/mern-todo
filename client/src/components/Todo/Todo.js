import React from 'react';
import './Todo.css';

class Todo extends React.Component{
    constructor(props){
        super(props);

        this.removeTodo = this.removeTodo.bind(this);
        this.markDone = this.markDone.bind(this);

        this.state = {
            backgroundColor: ''
        }
    }

    removeTodo(){
        this.props.removeTodo(this.props.todo.id);
    }

    markDone(){
        if (this.state.backgroundColor === ''){
            this.setState({ backgroundColor: 'rgb(144,238,144, 0.5)' });
        } else {
            this.setState({backgroundColor: ''});
        }
    }

    render(){
        return (
            <div className='todo-container'>
                <div className='todo-container-background' style={{backgroundColor: this.state.backgroundColor}}>
                    <div className='todo-task-container'>
                        <h2 className='todo-task'>{this.props.todo.task}</h2>
                    </div>
                    <div className='todo-info-container'>
                        <span className='todo-info'>{this.props.todo.dueDate || '-'}</span>
                    </div>
                    <div className='todo-info-container'>
                        <span className='todo-info'>{this.props.todo.status}</span>
                    </div>
                    <div className='buttons-container'>
                        <button className='delete-button' onClick={this.removeTodo}>x</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default Todo;