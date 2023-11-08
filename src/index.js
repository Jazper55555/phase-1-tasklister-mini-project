document.addEventListener("DOMContentLoaded", () => {
  const newTaskForm = document.getElementById('create-task-form')
  const newTaskDescription = document.getElementById('new-task-description')
  const prioritySelect = document.getElementById('priority-select')
  const newTaskList = document.getElementById('tasks')

  newTaskForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const task = newTaskDescription.value
    const priority = prioritySelect.value
    const taskItem = document.createElement('li')
    taskItem.textContent = task

    taskItem.classList.add(priority)

    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Take it off'
    deleteButton.addEventListener('click', () => {
      newTaskList.removeChild(taskItem)
    })
    taskItem.appendChild(deleteButton)
    newTaskList.appendChild(taskItem)
    newTaskDescription.value = ''
    e.target.reset()
  })

  const sortAscButton = document.getElementById('sort-asc');
  const sortDescButton = document.getElementById('sort-desc');

  sortAscButton.addEventListener('click', () => {
    sortTasks('asc');
  });

  sortDescButton.addEventListener('click', () => {
    sortTasks('desc');
  });

  function sortTasks(order) {
    const tasks = Array.from(newTaskList.children);
    tasks.sort((a, b) => {
      const priorityA = a.classList[0];
      const priorityB = b.classList[0];
      if (order === 'asc') {
        return priorityA.localeCompare(priorityB);
      } else {
        return priorityB.localeCompare(priorityA);
      }
    });
    tasks.forEach(task => newTaskList.appendChild(task));
  }
});