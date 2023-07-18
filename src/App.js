import './App.css';

function App() {
  return (
    <div className="App">
     <h1>My Todo's</h1>
     <div className='todo-wrapper'>
     <div className='todo-input'>   
      <div class="todo-input-item">
        <label >Title</label>
        <input type="text" placeholder="What's the task title"/>
      </div>

      <div class="todo-input-item">
        <label >Description</label>
        <input type="text" placeholder="What's the task Description"/>
      </div>

      <div class="todo-input-item">
        <label >Description</label>
        <button type="button" className='primaryBtn'> Add</button>
      </div>
    </div>
    <div className='btn-area'>
        <button>Todo</button>
        <button>completed</button>
    </div>

    <div className='todo-list'>
        <div className='todo-list-item'>
          <h3>Task 1</h3>
          <p>Description</p>
        </div>
    </div>
     </div>
    </div>
  );
}

export default App;
