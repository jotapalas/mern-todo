import React from 'react';
import './TodoList.css'
import Todo from '../Todo/Todo';

class TodoList extends React.Component{

    render(){
        return (
            <div className='todo-list-container'>
                <div className='todo-list'>                  
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
