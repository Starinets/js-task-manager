{
  const form = document.querySelector('.createTaskForm');

  form.onsubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const task = formData.get('task');

    addTask(task);
  };

  const getUpdatedTemplate = (task) => `
  <div class="content">
    <button class="checkbox"></button>
    <input class="taskInput" type="text" value="${task}" disabled />
  </div>
  <div class="actions">
    <button class="star"></button>
    <button class="edit"></button>
    <button class="remove"></button>
  </div>
  `;

  const addRemoveHandler = (taskDOM) => {
    removeDOM = taskDOM.querySelector('.remove');

    removeDOM.onclick = () => taskDOM.remove();
  };

  const addTask = (task) => {
    const tasksDOM = document.querySelector('.tasks');
    const taskDOM = document.createElement('li');

    taskDOM.innerHTML = getUpdatedTemplate(task);
    tasksDOM.prepend(taskDOM);

    addRemoveHandler(taskDOM);
  };
}
