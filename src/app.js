class App{
  static createTaskForm(){
    return `<form id='create-task-form'>
    <label for="parent-list">Select List:</label>
    <select id="parent-list">
    </select>
    <label for="new-task-description">Task description:</label>
    <input required="" type="text" id="new-task-description" placeholder="description">
    <label for="new-task-priority">Priority level:</label>
    <select id="priority-options">
      <option value='low'>Low</option>
      <option value='medium'>Medium</option>
      <option value='high'>High</option>
    </select>
    <input type="submit" value="Create New Task"></form>`
  }

  static createListSection(){
    return `<div id="lists"></div>`
  }

}
