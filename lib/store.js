'use client'

import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./features/list/listSlice";
import editlistReducer from "./features/list/listSlice";

export default  configureStore({
    reducer:
    {
    list: listReducer,
    editlist:editlistReducer,
    },
});

