import React from 'react';

export default class AddNewTask extends React.Component {
    constructor(){
        super();
        this.state = {
            inputValue: ''
        }
        this.handleChangeInputValue = this.handleChangeInputValue.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    handleChangeInputValue(event){
        this.setState({inputValue: event.target.value});

    }
    addTask() {
        if(this.state.inputValue !== ""){
            console.log('Metoda  addTask');
        this.props.addTaskToState(this.state.inputValue);
        this.setState({inputValue:""});//resetuje state
        } else {
            alert("Please enter task!");
        }
        
    
    }       

    render() {
        return(
            <div className="todo-input-container">
                <input type='text' 
                value = {this.state.inputValue} 
                onChange = {this.handleChangeInputValue}/>
                <input type='button' 
                value = 'Add task' 
                onClick = {this.addTask}
                className = "btn-add"/>
            </div>
        )
    }
}