import { useState, useEffect } from "react";
import "./App.css";
// import { MdDelete } from "react-icons/md";
// import { BsCheckLg } from "react-icons/bs";
function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allTodo, setTodo] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [completedTodo , setCompletedTodo] = useState([]);
  const handleAddTodo = () => {
    let newTodoItem = {
      title: newTitle,
      description: newDescription,
    };
    let updatedTodoArr = [...allTodo];
    updatedTodoArr.push(newTodoItem);
    setTodo(updatedTodoArr);
    localStorage.setItem("todoList", JSON.stringify(updatedTodoArr));
    setNewDescription ('')
    setNewTitle ('')
  };
    /** For deleting a todo  */
    const handleTodoDelete = (index) => {
      let reducedTodo = [...allTodo];
      reducedTodo.splice(index, 1); // Remove 1 element at the specified index
      localStorage.setItem("todoList", JSON.stringify(reducedTodo));
      setTodo(reducedTodo);
    };
    /** For deleting the item in completed screen */
    const handleCompletedDeleteTodo = (index) =>{
      let reducedTodo = [...completedTodo];
      reducedTodo.splice(index, 1); // Remove 1 element at the specified index
      localStorage.setItem("todoList", JSON.stringify(reducedTodo));
      setCompletedTodo(reducedTodo);
    }
  /** use effect : when ever the page is loaded for the first time */
  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem("todoList"));
    let savedCompletedTodo = JSON.parse(localStorage.getItem('completedTodo'));
    if (savedTodo) {
      setTodo(savedTodo);
    }

    if(savedCompletedTodo) {
      setCompletedTodo(savedCompletedTodo)
    }
  }, []);

  /** For completed screen  */
  const handleComplete = (index) =>{
      let now = new Date () ;
      let dd = now.getDate()
      let mm = now.getMonth() + 1;
      let yyyy = now.getFullYear()
      let h = now.getHours()
      let m = now.getMinutes()
      let s = now.getSeconds()
      let completedOn = dd + "-" + mm + "-" + yyyy + ' at ' + h + ':' + m + ':' + s;
      let filteredItem = {
      ...allTodo[index] , 
      completedOn : completedOn 
      }
      let updatedCompletedArr = [...completedTodo];
      updatedCompletedArr.push(filteredItem)
      setCompletedTodo(updatedCompletedArr)
      handleTodoDelete (index)

      localStorage.setItem("completedTodo", JSON.stringify(updatedCompletedArr));

  }
  return (
    <div className="App">
      <h1>My Todo's</h1>
      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title</label>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="Enter a task ..."
            />
          </div>

          <div className="todo-input-item">
            <label>Description</label>
            <input
              type="text"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              placeholder=" Task Description...."
            />
          </div>

          <div className="todo-input-item">
            <button type="button" className="button" onClick={handleAddTodo}>
              <span className="button__text">Add </span>
              <span className="button__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  stroke="currentColor"
                  height="24"
                  fill="none"
                  className="svg"
                >
                  <line y2="19" y1="5" x2="12" x1="12"></line>
                  <line y2="12" y1="12" x2="19" x1="5"></line>
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div className="btn-area">
          <button
            className={`secondaryBtn ${isCompleteScreen === false && "active"}`}
            onClick={() => setIsCompleteScreen(false)}
          >
            Todo
          </button>

          <button
            className={`secondaryBtn ${isCompleteScreen === true && "active"}`}
            onClick={() => setIsCompleteScreen(true)}
          >
            Completed
          </button>
        </div>

        <div className="todo-list">
          {isCompleteScreen === false &&
            allTodo.map((item, index) => {
              return (
                <div className="todo-list-item">
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <div className="icons">
                    <button class="delete-button" onClick={() => handleTodoDelete(index)}>
                      <svg class="delete-svgIcon" viewBox="0 0 448 512">
                        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                      </svg>
                    </button>
                    <label class="container">
                      <input
                        type="checkbox"
                        checked="checked"
                        onClick={() => handleComplete(index)}
                      />
                      <div class="checkMark"></div>
                    </label>
                  </div>
                </div>
              );
            })}

          {isCompleteScreen === true &&
            completedTodo.map((item, index) => {
              return (
                <div className="todo-list-item">
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p><small>Completed On : {item.completedOn}</small></p>
                  </div>
                  <div className="icons">
                    <button class="delete-button" onClick={() => handleCompletedDeleteTodo(index)}>
                      <svg class="delete-svgIcon" viewBox="0 0 448 512">
                        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                      </svg>
                    </button>
                    
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
