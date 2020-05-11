const form = document.querySelector('.scheduler__task-form');

form.onsubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const task = formData.get('task');

  addTask(task);

  form.reset();
};

const getUpdatedTemplate = (task) => `
  <div class="task__content">
    <button class="task__checkbox"></button>
    <input class="task__name" type="text" value="${task}" disabled />
  </div>
  <div class="task__actions">
    <button class="task__star"></button>
    <button class="task__edit"></button>
    <button class="task__remove"></button>
  </div>
  `;

const addFavoriteHandler = (taskDOM) => {
  const starDOM = taskDOM.querySelector('.task__star');

  starDOM.onclick = () => {
    starDOM.classList.toggle('selected');
  };
};

const addEditHandler = (taskDOM) => {
  const editDOM = taskDOM.querySelector('.task__edit');

  editDOM.onclick = () => {
    const taskInputDOM = taskDOM.querySelector('.task__name');
    const isDisabled = taskInputDOM.getAttribute('disabled') === null;

    if (isDisabled) {
      taskInputDOM.setAttribute('disabled', true);
    } else {
      taskInputDOM.removeAttribute('disabled');
    }
  };
};

const addRemoveHandler = (taskDOM) => {
  const removeDOM = taskDOM.querySelector('.task__remove');

  removeDOM.onclick = () => taskDOM.remove();
};

const addTask = (task) => {
  const tasksDOM = document.querySelector('.tasks-list');
  const taskDOM = document.createElement('li');
  taskDOM.classList.add('task-list_task');
  taskDOM.classList.add('task');

  taskDOM.innerHTML = getUpdatedTemplate(task);
  tasksDOM.prepend(taskDOM);

  addFavoriteHandler(taskDOM);
  addEditHandler(taskDOM);
  addRemoveHandler(taskDOM);
};
