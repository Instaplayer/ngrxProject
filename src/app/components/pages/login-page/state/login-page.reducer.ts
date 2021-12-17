import { createReducer, on } from "@ngrx/store";
import { formSave } from "./login-page.actions";

export const loginReducer = createReducer(
    {userInfo: {

        name: "",
        password: "",
        remember: false
    
      }},
    on(formSave, (state,action) => {
        return {
            ...state,
            remember: action.payload.remember,
            name: action.payload.name,
            password: action.payload.password,
        }
    })
);