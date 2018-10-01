let taskId = 0
class Task {
  constructor(content,priority){
    this.id = ++taskId
    this.content = content
    this.priority = priority
  }

  render(){
    return `<li>Task: ${this.content}  <button id='delete' class='delete-task'>x</button><br>Priority: ${this.priority}</li>`
  }
}
