document.getElementById('book-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get input values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;

    // Create a new list item
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = `${title} - ${author} <button class="btn btn-danger btn-sm float-right delete">X</button>`;

    // Add the list item to the booklist
    document.getElementById('book-list').appendChild(li);

    // Clear the form fields
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
});

// Event listener for delete buttons
document.getElementById('book-list').addEventListener('click', function(e) {
    if(e.target.classList.contains('delete')) {
        if(confirm('Are you sure you want to remove this book?')) {
            e.target.parentElement.remove();
        }
    }
});
