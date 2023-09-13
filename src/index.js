document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    // Create li element then append in #tasks 
    const li = document.createElement('li');
    li.textContent = event.target.querySelector('input').value;

    const btn = document.createElement('button');
    btn.textContent = 'Delete'
    btn.addEventListener('click', () => document.querySelector('li').remove());

    document.querySelector('ul').append(li, btn);
    // Need to remove button element
  })
});
