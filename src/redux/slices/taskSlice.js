import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
  inProgress: [],
  peerReview: [],
  done: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action) {
      const { column, task } = action.payload;
      state[column].push(task);
    },
    deleteTask: (state, action) => {
      const { column, id } = action.payload;
      state[column] = state[column].filter((task) => task.id != id);
    },
    editTask: (state, action) => {
      const { column, id, title, description } = action.payload;
      const task = state[column].find((task) => task.id === id);
      if (task) {
        task.title = title;
        task.description = description;
      }
    },
  },
});

export const { addTask, deleteTask, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;
