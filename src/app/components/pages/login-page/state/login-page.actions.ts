import { createAction } from "@ngrx/store";

export const formSave = createAction('[Form] Form save',function prepare(name: string, password: string, remember: boolean){

    return {
        payload: {
            name,
            password,
            remember
        }
    }
})