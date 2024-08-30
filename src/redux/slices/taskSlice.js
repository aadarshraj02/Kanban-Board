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
    addTask: (state, action) => {
      state.todo.push(action.payload);
    },
    moveTask: (state, action) => {
      const { taskId, from, to } = action.payload;
      const taskIndex = state[from].findIndex((task) => task.id === taskId);
      if (taskIndex > -1) {
        const [task] = state[from].splice(taskIndex, 1);
        state[to].push(task);
      }
    },
    deleteTask: (state, action) => {
      const { column, id } = action.payload;
      state[column] = state[column].filter((task) => task.id != id);
    },
  },
});

export const { addTask, moveTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
