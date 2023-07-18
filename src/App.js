import { useState } from 'react';
import './App.css';
import { MdDelete } from 'react-icons/md';
import { BsCheckLg } from 'react-icons/bs';
function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  return (
    <div className="App">
      <h1>My Todo's</h1>
      <div className='todo-wrapper'>
        <div className='todo-input'>   
          <div className="todo-input-item">
            <label>Title</label>
            <input type="text" placeholder="What's the task title"/>
          </div>

          <div className="todo-input-item">
            <label>Description</label>
            <input type="text" placeholder="What's the task Description"/>
          </div>

          <div className="todo-input-item">
            <button type="button" className="button">
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
          <div className='todo-list-item'>
            <div>
            <h3>Task 1</h3>
            <p>Description</p>
            </div>
            <div>
          <MdDelete className= 'icon' />
          <BsCheckLg className= 'check-icon' />
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
