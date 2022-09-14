import { createSlice } from "@reduxjs/toolkit";

const classesSlice = createSlice({
    name: 'classes',
    initialState: {
        classList: null
    },
    reducers: {
        classAdded: (state, action) => {
            const newClass = action.payload;

            const newClassList = [...state.classList];
            newClassList.push(newClass);

            return {...state, classList: newClassList };
            // return Object.assign(state, { classList: newClassList });
        },
        classesLoaded: (state, action) => {
            const loadedClasses = action.payload;
            return {...state, classList: loadedClasses };
        }
    }
});

export const { classAdded, classesLoaded } = classesSlice.actions;

export default classesSlice.reducer;