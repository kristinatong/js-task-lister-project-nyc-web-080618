let listId = 0
class List {
  constructor(name){
    this.id = ++listId
    this.name = name
    this.tasks = []
  }

  render(){
    return `
    <div id='list-item-${this.id}' data-id=${this.id}>
        <h2>${this.name}
          <button data-title="${this.name}" class="delete-list">
            X
          </button>
        </h2>
        <ul id='list-ul'>

        </ul>
      </div>`
  }

  renderOption(){
    return `<option value='${this.id}'>${this.name}</option>`
  }

}
