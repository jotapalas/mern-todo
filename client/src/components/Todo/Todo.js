import React from 'react';
import axios from 'axios';
import './Todo.css';

class Todo extends React.Component{
    constructor(props){
        super(props);

        this.state = this.props.todo;
        this.removeTodo = this.removeTodo.bind(this);
        this.markDone = this.markDone.bind(this);
    }

    removeTodo(){
        this.props.removeTodo(this.state._id);
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
        axios.put('api/todos/' + this.state._id, {status: newStatus})
            .then((res) => {
                this.setState(res.data);
            });
    }

    render(){
        let backgroundClass = 'to-do';
        let dueDate = this.state.dueDate ? this.state.dueDate.split('T')[0] : '-'
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
                        <span className='todo-info'>{dueDate}</span>
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