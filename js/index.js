console.log("Welcome to BHU Library");

//Create Book Constructor
function Book(name,author,type){
    this.name = name
    this.author = author
    this.type = type
}

//Display Constructor to display the book
function Display(){

}

Display.prototype.add = function(book){
    let tablebody = document.getElementById('tablebody')

    let uiString = `
                    <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>
                    `
    tablebody.innerHTML += uiString
    console.log("adding book")
}

Display.prototype.clear = function(){
    let libraryform = document.getElementById('libraryform');
    libraryform.reset()
}

Display.prototype.validate = function(book){
    if (book.name.length <2 || book.author.length < 2 || book.type.length < 2){
        return false
    }else{
        return true
    }
}

Display.prototype.show = function(type,displaymessage){
    let message = document.getElementById('message')
    message.innerHTML = ` <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Message :</strong> ${displaymessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>`

    setTimeout(() => {
        message.innerHTML = ''
    }, 2000);
}

//On submit of book
let libraryForm = document.getElementById("libraryform");

libraryForm.addEventListener('submit',onAddBook);

function onAddBook(e){
    e.preventDefault() 
    let name = document.getElementById('bookname').value;
    let author = document.getElementById('author').value;
    let type;
    console.log(name,author)
    let fiction = document.getElementById('fiction');
    let Programming = document.getElementById('Programming');
    let Cooking = document.getElementById('Cooking');

    if(fiction.checked){
        type = fiction.value;
    }
    else if (Programming.checked){
        type = Programming.value;
    }
    else{
        type = Cooking.value;
    }

    let book = new Book(name,author,type)
    
    let display = new Display()

    if(display.validate(book)){
        display.add(book)
        display.clear()
        display.show('success','You have successfully added the book')
    }
    else{
        //show error message
        display.show('danger','Sorry your book is not added')
    }
    
    console.log(book)
}
