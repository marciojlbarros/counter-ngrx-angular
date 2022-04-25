import { createAction } from "@ngrx/store";

//descreve as ações do contador para aumentar, diminuir e redefinir seu valor
export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');