const form = document.querySelector('.scheduler__task-form');

form.onsubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const task = formData.get('task');

  addTask(task);

  form.reset();
};

const getUpdatedTemplate = (task) => `
  <div class="tasks-list__task-content">
    <button class="tasks-list__task-checkbox"></button>
    <input class="tasks-list__task-name" type="text" value="${task}" disabled />
  </div>
  <div class="tasks-list__task-actions">
    <button class="tasks-list__task-star"></button>
    <button class="tasks-list__task-edit"></button>
    <button class="tasks-list__task-remove"></button>
  </div>
  `;

const addFavoriteHandler = (taskDOM) => {
  const starDOM = taskDOM.querySelector('.tasks-list__task-star');

  starDOM.onclick = () => {
    starDOM.classList.toggle('selected');
  };
};

const addEditHandler = (taskDOM) => {
  const editDOM = taskDOM.querySelector('.tasks-list__task-edit');

  editDOM.onclick = () => {
    const taskInputDOM = taskDOM.querySelector('.tasks-list__task-name');
    const isDisabled = taskInputDOM.getAttribute('disabled') === null;

    if (isDisabled) {
      taskInputDOM.setAttribute('disabled', true);
    } else {
      taskInputDOM.removeAttribute('disabled');
    }
  };
};

const addRemoveHandler = (taskDOM) => {
  const removeDOM = taskDOM.querySelector('.tasks-list__task-remove');

  removeDOM.onclick = () => taskDOM.remove();
};

const addTask = (task) => {
  const tasksDOM = document.querySelector('.tasks-list');
  const taskDOM = document.createElement('li');

  taskDOM.innerHTML = getUpdatedTemplate(task);
  tasksDOM.prepend(taskDOM);

  addFavoriteHandler(taskDOM);
  addEditHandler(taskDOM);
  addRemoveHandler(taskDOM);
};
