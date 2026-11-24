import { User } from "./User";
import { NoteBook } from "./NoteBook";

export class Admin extends User {
  manageNotes(notebook: NoteBook, noteId: number): void {
    notebook.removeNote(noteId);
    console.log(`Admin ${this.name} removed note ${noteId}`);
  }
}
