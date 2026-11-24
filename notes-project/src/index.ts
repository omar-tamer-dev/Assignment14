import { User } from "./User";
import { Admin } from "./Admin";
import { NoteBook } from "./NoteBook";
import { Storage } from "./Storage";

const user1 = new User(1, "Omar", "omartamer@123", "1234", "0100000000", 25);
user1.displayInfo();

const admin1 = new Admin(2, "Ali", "ali@test.com", "abcd", "01111111111", 30);

const book = new NoteBook("My Notebook");
user1.addNotebook(book);

book.addNote(1, "First", "This is my first note in the notebook", user1);
book.addNote(2, "Second", "Short note", user1);

console.log(book.getNotes()[0].preview());

admin1.manageNotes(book, 2);
console.log("Notes left:", book.getNotes().length);

const numbers = new Storage<number>();
numbers.addItem(10);
numbers.addItem(20);
numbers.removeItem(10);
console.log(numbers.getAllItems());
