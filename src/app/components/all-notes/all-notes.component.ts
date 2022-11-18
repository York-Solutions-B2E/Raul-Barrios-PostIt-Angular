import { Component, OnInit } from '@angular/core';
import {Note} from 'src/data/note';


@Component({
  selector: 'app-all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.css']
})
export class AllNotesComponent {
  public notes: Note [] = [
    new Note('New Note 1', 'Hopefully this will make sense', 'clueless dev'),
    new Note('New Note 2', 'message 2', 'owner 2'),
  ]

  constructor () {}



}


//
// <h1>Postit Note!</h1>
// <p>{{ note?.title }}</p>
// <p>{{ note?.message }}</p>
// <p>{{ note?.owner }}</p>
//
// import { Component, OnInit } from '@angular/core';
// import { Memo } from 'src/data/memo';

// @Component({
//   selector: 'app-memos',
//   templateUrl: './memos.component.html',
//   styleUrls: ['./memos.component.css']
// })
// export class MemosComponent implements OnInit {
//   public memos: Memo[] = [
//     new Memo('message 1', null, 'sender 1', 'subject 1'),
//     new Memo('message 2', null, 'sender 2', 'subject 2'),
//   ]

//   constructor() { }

//   ngOnInit(): void {
//   }

// }