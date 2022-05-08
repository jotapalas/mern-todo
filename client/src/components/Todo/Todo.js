import React from 'react';
import './Todo.css';

class Todo extends React.Component{
    constructor(props){
        super(props);

        this.state = this.props.todo;
        this.removeTodo = this.removeTodo.bind(this);
        this.markDone = this.markDone.bind(this);

        
    }

    removeTodo(){
        this.props.removeTodo(this.props.todo.id);
    }

    markDone(){
        let newStatus;
        switch (this.state.status) {
            case 'to do':
                newStatus = 'doing';
                break;
            case 'doing':
                newStatus = 'done';
                break;
            default:
                newStatus = 'to do';
        }
        this.props.todo.status = newStatus;
        this.setState(this.props.todo);
    }

    render(){
        let backgroundClass = 'to-do';
        if (this.state.status === 'doing') {
            backgroundClass = 'doing';
        }
        if (this.state.status === 'done') {
            backgroundClass = 'done';
        }
        return (
            <div className='todo-container'>
                <div className={'todo-container-background ' + backgroundClass}>
                    <div className='todo-task-container'>
                        <h2 className='todo-task'>{this.state.task}</h2>
                    </div>
                    <div className='todo-info-container'>
                        <span className='todo-info'>{this.state.dueDate || '-'}</span>
                    </div>
                    <div className='todo-info-container'>
                        <span className='todo-info'>{this.state.status}</span>
                    </div>
                    <div className='buttons-container'>
                        <button className='delete-button' onClick={this.markDone}>v</button>
                        <button className='delete-button' onClick={this.removeTodo}>x</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default Todo;