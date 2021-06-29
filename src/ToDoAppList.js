import React from 'react';

export default class ToDoAppList extends React.Component {

    constructor(){
        super();
        this.removeTask = this.removeTask.bind(this);
    }

    removeTask(i){
        console.log('removeTask metoda', i);
        this.props.removeTaskFromState();
    }

    render () {
        console.log(this.props.taskList);
        var items = this.props.taskList.map((task, i) =>{
            return(
                <li key = {i}>{task}
                <input type="button" value="&times;" onClick={() => {this.removeTask(i)}} className="btn-remove" />
                </li>
            );
        })
                return(
            <ul className = "todo-list">
            {items}
            </ul>
        )
        
    }
}