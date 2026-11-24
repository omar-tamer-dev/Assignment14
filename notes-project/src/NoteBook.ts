import { Note } from "./Note";
import { User } from "./User";

export class NoteBook {
  public name: string;
  private notes: Note[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addNote(id: number, title: string, content: string, author: User): void {
    const note = new Note(id, title, content, author);
    this.notes.push(note);
  }

  removeNote(id: number): void {
    this.notes = this.notes.filter((n) => n.id !== id);
  }

  getNotes(): Note[] {
    return this.notes;
  }
}
