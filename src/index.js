document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    createToDoItem(event.target.querySelector('#new-task-description').value);
  })
});


// Create li element then append in #tasks 
function createToDoItem(task) {
  const li = document.createElement('li');
  const btn = document.createElement('button');
  btn.addEventListener('click', () => li.remove());
  if (task) {
    li.textContent = `${task} `;
    btn.textContent = 'x';
    li.appendChild(btn);
    document.querySelector('ul').appendChild(li);
    document.querySelector('form').reset();
  } else {
    alert('Enter a task in the box.');
  }
}