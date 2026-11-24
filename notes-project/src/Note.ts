import { User } from "./User";

export class Note {
  public id: number;
  public title: string;
  public content: string;
  public userId: number;
  public author: User;

  constructor(id: number, title: string, content: string, author: User) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.author = author;
    this.userId = author.id;
  }

  preview(): string {
    if (this.content.length > 20) {
      return this.content.substring(0, 20) + "...";
    }
    return this.content;
  }
}
