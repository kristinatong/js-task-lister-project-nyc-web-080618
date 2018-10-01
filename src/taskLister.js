let taskListerId = 0
class TaskLister {
  constructor(){
    this.id = ++taskListerId
    this.lists = []
  }
  render() {
    return (`
      ${this.renderForm()}
      <div id="lists">
        ${this.renderLists()}
      </div>
    `);
  }

  renderForm() {
    if (this.lists.length) {
      return (`
        <form id="create-task-form">
          <label for="parent-list">Select List:</label>
          <select id="parent-list">
            ${this.renderOptions()}
          </select>

          <label for="new-task-description">Task description:</label>
          <input required type="text" id="new-task-description" placeholder="description">

          <label for="new-task-priority">Priority level:</label>
          <input type="text" id="new-task-priority" placeholder="priority">
          <input type="submit" value="Create New Task"></input>
        </form>
      `);
    } else {
      return "";
    }
  }

  renderLists() {
    return this.lists.map(list => list.render()).join("");
  }

}
