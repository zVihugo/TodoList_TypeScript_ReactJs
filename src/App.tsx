import React, {useState} from 'react';

// Components

import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Modal from './components/Modal';

// Styles

import styles from './App.module.css';

//Interface 

import {Task} from './interfaces/Task'

function App() {

  const [taskList, setTaskList] = useState<Task[]>([])
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null)

  const deleteTask = (id: number) =>{
    setTaskList(
      taskList.filter((task) => {
        //console.log(task.id, id)
        return task.id !== id
      })
    )
  }

  const hideOrShowModal = (display: boolean) =>{
    const modal = document.getElementById("Modal")
    if(display){
      modal!.classList.remove('hide')
    }else{
      modal!.classList.add('hide')
    }
  }

  const editTask = (task: Task): void =>{
    hideOrShowModal(true)
    setTaskToEdit(task)
  }

  const updateTask = (id: number, title: string, difficulty: number) =>{
    const updatedTask: Task = {id, title, difficulty}
    const updateItems = taskList.map((task) => {
      return task.id === id ? updatedTask : task
    })

    setTaskList(updateItems)

    hideOrShowModal(false)
  
  }
  return (
    <div>
      <Modal children={<TaskForm btnText="Editar Tarefa" taskList={taskList} task = {taskToEdit} />}/>
      <Header />
        <main className = {styles.main}>
          <div>
            <h2>O que você vai fazer?</h2>
            <TaskForm btnText="Criar tarefa" taskList={taskList}  setTaskList={setTaskList}/>
          </div>
          <div>
            <h2>Suas tarefas: </h2>
            <TaskList taskList={taskList} handleDelete={deleteTask} handleEdit = {editTask}/>
          </div>
        </main>
      <Footer />
    </div>
  );
}

export default App;


