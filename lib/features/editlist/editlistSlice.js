'use client'

import { createSlice } from "@reduxjs/toolkit";
import { useAppSelector } from "../../hooks";

export const listSlice =createSlice({
    const lists = useAppSelector((state) => state.list.list);

    name:"editlist",
    initialState:{
       listName:list
    },
    reducers:{
        
        update: (state, action) => {
            const { id, listName, description,status } = action.payload;
            const existingTodo = state.list.find(todo => todo.id === id);
            if (existingTodo) {
                existingTodo.listName = listName;
                existingTodo.description = description;
                existingTodo.status = status;
            }
        }
    }
})
export const {add,deleteLists}= listSlice.actions;
export default listSlice.reducer;
