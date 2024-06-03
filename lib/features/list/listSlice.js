'use client'

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],  
};
export const listSlice =createSlice({
    name:"list",
    initialState,
    reducers:{
        add:(state,action)=>{
            state.list.push({
                id: new Date().toISOString(),
                listName: action.payload.listName,
                description: action.payload.description,
                status: action.payload.status,
            });
        },
        deleteLists:(state,action)=>{
            state.list=[]
        },
        deleteSingleTodo: (state, action) => {
            state.list = state.list.filter(todo => todo.id !== action.payload.id);
        },
        update:(state,action)=>{
            const {id,listName,description,status}=action.payload
            const existingTask=state.list.find(todo=>todo.id==id)
            if (existingTask) {
                existingTask.id=id;
                existingTask.listName = listName;
                existingTask.description = description;
                existingTask.status = status;
              }
        }
    }
})
export const {add,deleteLists,deleteSingleTodo,update}= listSlice.actions;
export default listSlice.reducer;
