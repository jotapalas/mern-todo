import React from 'react';
import './TodoList.css'
import Todo from '../Todo/Todo';

class TodoList extends React.Component{

    render(){
        return (
            <div className='todo-list-container'>
                <div className='todo-list'>
                    <div className='todo-list-header'>
                        <div className='todo-task-container'>
                            <h2 className='todo-task'>Task</h2>
                        </div>
                        <div className='todo-info-container'>
                            <span className='todo-info'>Due date</span>
                        </div>
                        <div className='todo-info-container'>
                            <span className='todo-info'>Status</span>
                        </div>
                        <div className='delete-container'>
                        </div>
                    </div>                  
                    { this.props.todos.map(
                        todo => 
                            <Todo
                                key={todo._id}
                                todo={todo}
                                id={todo._id}
                                removeTodo={this.props.removeTodo}
                            />
                    ) }
                </div>
            </div>
        );
    }
}

export default TodoList;
