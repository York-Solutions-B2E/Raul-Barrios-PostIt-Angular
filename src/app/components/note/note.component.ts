import { Component, Input } from '@angular/core';
import {Note} from 'src/data/note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  @Input() public note : Note | null = null

  constructor () {
  }

  ngOnInit(): void {
    
  }

}


// import { Component, Input, OnInit } from '@angular/core';
// import { Memo } from 'src/data/memo';

// @Component({
//   selector: 'app-memo',
//   templateUrl: './memo.component.html',
//   styleUrls: ['./memo.component.css']
// })
// export class MemoComponent implements OnInit {
//   @Input() memo: Memo | null = null

//   constructor() {
//   }

//   ngOnInit(): void {
//   }

// }