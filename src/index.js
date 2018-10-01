document.addEventListener('DOMContentLoaded', () => {
  // const listDiv = document.getElementById("app-content");
  const app = new TaskLister();
  const appContent = document.getElementById('app-content')
  const createListForm = document.getElementById('create-list-form')

  createListForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const listObj = new List(document.getElementById('create-list-form').elements['new-list-title'].value)
    app.lists.push(listObj)
    appContent.innerHTML = App.createTaskForm()

    appContent.innerHTML += App.createListSection()
    const listDiv = document.getElementById('lists')
    debugger
    listDiv.innerHTML += listObj.render()

    const dropdown = document.getElementById('parent-list')
    app.lists.forEach((list) =>{
      dropdown.innerHTML += list.renderOption()
    })

    createListForm.reset()

    const createTaskForm = document.getElementById('create-task-form')

    createTaskForm.addEventListener('submit',(e)=>{
      e.preventDefault();
      const taskListId = createTaskForm.elements['parent-list'].value
      const taskContent = createTaskForm.elements['new-task-description'].value
      const taskPriority = createTaskForm.elements['priority-options'].value
      const taskObj = new Task(taskContent,taskPriority)
      const listObj = app.lists.find(list => list.id == taskListId)
      listObj.tasks.push(taskObj)
      const listItemDiv = document.getElementById(`list-item-${taskListId}`)
      listItemDiv.children['list-ul'].innerHTML = ""
      listObj.tasks.forEach(task => {
        listItemDiv.children['list-ul'].innerHTML += task.render()
      })
      createTaskForm.reset()
    })

    listDiv.addEventListener('click',(e)=>{
      if(e.target.className==='delete-list'){
        e.target.parentNode.parentNode.remove()
      }else if(e.target.className==='delete-task'){
        e.target.parentNode.parentNode.remove()
      }
    })




  })
});
