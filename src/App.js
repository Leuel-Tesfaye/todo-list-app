import { useState,useEffect } from 'react';
import './App.css';
import { MdDelete } from 'react-icons/md';
import { BsCheckLg } from 'react-icons/bs';
function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allTodo, setTodo] = useState([]) ;
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const handleAddTodo =() =>{
    let newTodoItem = {
      title:newTitle, 
      description : newDescription
    }
    let updatedTodoArr = [...allTodo];
    updatedTodoArr.push(newTodoItem);
    setTodo(updatedTodoArr);
    localStorage.setItem('todoList', JSON.stringify(updatedTodoArr))
  }

  /** use effect : when ever the page is loaded for the first time */
    useEffect (() =>{
      let savedTodo = JSON.parse(localStorage.getItem('todoList'))
      if(savedTodo) {
        setTodo(savedTodo)
      }
    },[])
  return (
    <div className="App">
      <h1>My Todo's</h1>
      <div className='todo-wrapper'>
        <div className='todo-input'>   
          <div className="todo-input-item">
            <label>Title</label>
            <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="Enter a task ..."/>
          </div>

          <div className="todo-input-item">
            <label>Description</label>
            <input type="text" value={newDescription} onChange={(e) =>setNewDescription (e.target.value)} placeholder=" Task Description...."/>
          </div>

          <div className="todo-input-item">
            <button type="button" className="button" onClick={handleAddTodo}>
              <span className="button__text">Add </span>
              <span className="button__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" height="24" fill="none" className="svg">
                  <line y2="19" y1="5" x2="12" x1="12"></line>
                  <line y2="12" y1="12" x2="19" x1="5"></line>
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div className='btn-area'>
          <button className={`secondaryBtn ${isCompleteScreen === false && 'active'}`} 
            onClick={() => setIsCompleteScreen(false)}>
            Todo
          </button>

          <button className={`secondaryBtn ${isCompleteScreen === true && 'active'}`} 
            onClick={() => setIsCompleteScreen(true)}>
            Completed
          </button>
        </div>

        <div className='todo-list'>
          {allTodo.map((item,index) =>{
            return (
              <div className='todo-list-item'>
            <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            </div>
            <div>
          <MdDelete className= 'icon' />
          <BsCheckLg className= 'check-icon' />
          </div>
          </div>
            )
          })}
          
        </div>
      </div>
    </div>
  );
}

export default App;
