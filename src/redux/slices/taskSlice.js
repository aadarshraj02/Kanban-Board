import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
  inProgress: [],
  peerReview: [],
  done: [],
  filteredTasks: null,
};
const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    todo: JSON.parse(localStorage.getItem("tasks"))?.todo || [],
    inProgress: JSON.parse(localStorage.getItem("tasks"))?.inProgress || [],
    peerReview: JSON.parse(localStorage.getItem("tasks"))?.peerReview || [],
    done: JSON.parse(localStorage.getItem("tasks"))?.done || [],
  },
  reducers: {
    addTask(state, action) {
      const { column, task } = action.payload;
      state[column].push(task);
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    deleteTask(state, action) {
      const { column, id } = action.payload;
      state[column] = state[column].filter((task) => task.id !== id);
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    editTask(state, action) {
      const { column, id, title, description } = action.payload;
      const task = state[column].find((task) => task.id === id);
      if (task) {
        task.title = title;
        task.description = description;
        localStorage.setItem("tasks", JSON.stringify(state));
      }
    },
    searchTasks(state, action) {
      const searchText = action.payload.toLowerCase();
      state.filteredTasks = {
        todo: state.todo.filter((task) =>
          task.title.toLowerCase().includes(searchText)
        ),
        inProgress: state.inProgress.filter((task) =>
          task.title.toLowerCase().includes(searchText)
        ),
        peerReview: state.peerReview.filter((task) =>
          task.title.toLowerCase().includes(searchText)
        ),
        done: state.done.filter((task) =>
          task.title.toLowerCase().includes(searchText)
        ),
      };
    },
    clearFilter(state) {
      state.filteredTasks = null;
    },
    moveTask(state, action) {
      const { id, fromColumn, toColumn } = action.payload;
      const taskIndex = state[fromColumn].findIndex((task) => task.id === id);
      const [movedTask] = state[fromColumn].splice(taskIndex, 1);
      state[toColumn].push(movedTask);
      localStorage.setItem("tasks", JSON.stringify(state));
    },
  },
});

export const {
  addTask,
  deleteTask,
  editTask,
  searchTasks,
  clearFilter,
  moveTask,
} = tasksSlice.actions;
export default tasksSlice.reducer;
