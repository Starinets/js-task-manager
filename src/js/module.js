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

const addFavoriteHandler = (taskDOM) => {
  const starDOM = taskDOM.querySelector('.star');

  starDOM.onclick = () => {
    starDOM.classList.toggle('selected');
  };
};

const addEditHandler = (taskDOM) => {
  const editDOM = taskDOM.querySelector('.edit');

  editDOM.onclick = () => {
    const taskInputDOM = taskDOM.querySelector('.taskInput');
    const isDisabled = taskInputDOM.getAttribute('disabled') === null;

    if (isDisabled) {
      taskInputDOM.setAttribute('disabled', true);
    } else {
      taskInputDOM.removeAttribute('disabled');
    }
  };
};

const addRemoveHandler = (taskDOM) => {
  const removeDOM = taskDOM.querySelector('.remove');

  removeDOM.onclick = () => taskDOM.remove();
};

const addTask = (task) => {
  const tasksDOM = document.querySelector('.tasks');
  const taskDOM = document.createElement('li');

  taskDOM.innerHTML = getUpdatedTemplate(task);
  tasksDOM.prepend(taskDOM);

  addFavoriteHandler(taskDOM);
  addEditHandler(taskDOM);
  addRemoveHandler(taskDOM);
};
