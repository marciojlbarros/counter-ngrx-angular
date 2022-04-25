import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../store/counter/counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent implements OnInit {

  count$: Observable<number>

  constructor(private store: Store<{ count: number}>) {
    // TODO: Connect `this.count$` stream to the current store `count` state
    this.count$ = store.select('count');
   }

   // TODO: Dispatch an increment action
   increment() {
     this.store.dispatch(increment());
   }

   // TODO: Dispatch a decrement action
   decrement(){
     this.store.dispatch(decrement());
   }

  // TODO: Dispatch a reset action
  reset(){
    this.store.dispatch(reset());
  }


  ngOnInit(): void {
  }

}
