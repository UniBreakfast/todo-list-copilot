const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('#todo-list');
const doneList = document.querySelector('#done-list');

const tasks = [
  {
    id: '1',
    title: 'Task 1',
    completed: true,
  },
  {
    id: '2',
    title: 'Task 2',
    completed: false,
  },
  {
    id: '3',
    title: 'Task 3',
    completed: false,
  },
]


renderTasks();

todoForm.onsubmit = () => {
  const task = {
    id: genId(),
    title: input.value,
    completed: false,
  }

  tasks.push(task);
  renderTasks();
  input.value = '';
}

lists.onclick = ({target}) => {
  if (target.tagName === 'BUTTON') {
    const id = target.closest('li').dataset.id;

    tasks.splice(tasks.findIndex(task => task.id === id), 1);
    renderTasks();
  }
}

lists.onchange = ({target}) => {
  if (target.type === 'checkbox') {
    const id = target.closest('li').dataset.id;
    const task = tasks.find(task => task.id === id);

    task.completed = target.checked;
    renderTasks();
  }
}


function genId() {
  return Math.floor(Math.random() * 1000000).toString();
}

function renderTasks() {
  todoList.innerHTML = '';
  doneList.innerHTML = '';

  tasks.forEach(task => {
    const li = renderTask(task);

    if (task.completed) {
      doneList.appendChild(li);
    } else {
      todoList.appendChild(li);
    }
  });
}

function renderTask(task) {
  const { id, title, completed } = task;

  const li = document.createElement('li');

  li.classList.add('todo-item');
  li.dataset.id = id;

  li.innerHTML = `
    <label>
      <input type="checkbox" ${completed ? 'checked' : ''}>
      <span>${title}</span>
    </label>
    <button>🗑️</button>
  `;

  return li
}
