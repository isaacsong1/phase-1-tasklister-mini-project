document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    createToDoItem(event.target.querySelector('#new-task-description').value);
    document.querySelector('form').reset();
    // Need to remove button element
  })
});


// Create li element then append in #tasks 
function createToDoItem(task) {
  const li = document.createElement('li');
  const btn = document.createElement('button');
  btn.addEventListener('click', deleteToDoItem);
  li.textContent = `${task} `;
  btn.textContent = 'x'
  li.appendChild(btn);
  document.querySelector('ul').appendChild(li);
}

function deleteToDoItem(event) {
  event.target.parentNode.remove();
}