let books=[];

function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showbooks();
        clearInputs();
    } else {
        alert('Please fill in all fields correctly.');
    }
    console.log(books)
}

function showbooks() {
    const booksDisplay= books.map((element, index)=> `<h1>Book Number: ${index+1}</h1>
    <p>Book Name: ${element.name}</p>
    <p>Author Name: ${element.authorName}</p>
    <p>Book Description: ${element.bookDescription}</p>
    <p>Page Numbers: ${element.pagesNumber}</p>
    <button onclick="deletebook(${index})">Delete</button>`
  
    );
    document.getElementById("books").innerHTML= booksDisplay.join("")
    
}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';

}

function deletebook(index){    
    books.splice(index, 1);
    showbooks();
    console.log(books);
}



