import { createSlice } from "@reduxjs/toolkit";

const classesSlice = createSlice({
    name: 'classes',
    initialState: {
        classList: [{ id: 1, title: "5A" }]
    },
    reducers: {
        addClass: (state, action) => {
            const newClass = action.payload;

            const newClassList = [...state.classList];
            newClassList.push(newClass);

            return {...state, classList: newClassList };
            // return Object.assign(state, { classList: newClassList });
        }
    }
});

export const { addClass } = classesSlice.actions;

export default classesSlice.reducer;