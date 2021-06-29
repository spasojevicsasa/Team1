// preko propsa se prosledjuju metode ili podaci
//to-do lista
import React from 'react';
import AddNewTask from './AddNewTask';
import ToDoAppList from './ToDoAppList';
import "../assets/styles.css";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            taskList:["task 1", "task 2", "task 3"]
        };
        this.addTaskToState = this.addTaskToState.bind(this);
        this.removeTaskFromState = this.removeTaskFromState.bind(this);    }

    

    addTaskToState (inputValue){
        console.log("Metoda addTaskToState");
        console.log("input value", inputValue);
        var tasks = this.state.taskList; //radili smo sa slice, concat, a mozemo i ovako...Ovo je kopija niza (state-a) 
        // tasks.push(inputValue);//dodaje element na kraj niza
        tasks.unshift(inputValue);//dodaje element na pocetak niza
        this.setState({taskList: tasks});
    }

    removeTaskFromState(itemPosition){
        console.log("Metoda removeTaskFromState", itemPosition);
        var tasks = this.state.taskList;
        tasks.splice(itemPosition, 1);
        this.setState({taskList: tasks});
    }
        
    
    render(){
        return(
            <div>
                <h2>To-do list</h2>
                <AddNewTask addTaskToState = {this.addTaskToState} />
                <ToDoAppList taskList = {this.state.taskList} removeTaskFromState = {this.removeTaskFromState} />
            </div>
        );

    }
}