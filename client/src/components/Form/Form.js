import React from 'react';
import './Form.css';


class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = { todosCount: 0 };

        this.addItem = this.addItem.bind(this);
    }

    addItem(e) {
        e.preventDefault();
        if (this._inputElement.value !== "") {
            const newItem = {
              task: this._inputElement.value,
              id: this.state.todosCount,
              key: this.state.todosCount,
              status: 'to do',
              dueDate: this._dueDate.value,
            };
            
            this.props.addTodo(newItem);

            this.setState((prevState) => {
                return { 
                    todosCount: prevState.todosCount + 1
                }
            })
            this._inputElement.value = "";
            this._dueDate.value = "";
        }
    }

    render(){
        return (
            <div className='form-container'>
                <div className='form'>
                    <form onSubmit={this.addItem}>
                        <input type='text' required className='input task' ref={(a) => this._inputElement = a} placeholder='Add Task' />
                        <input type='date' className='input' ref={(a) => this._dueDate = a} />
                        <button className='add-button' type='submit'>Add</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;
