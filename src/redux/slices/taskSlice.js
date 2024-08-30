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
    searchTasks(state, action) {
      const searchText = action.payload.toLowerCase();
      state.filteredTasks = {
        todo: state.tasks.todo.filter((task) =>
          task.title.toLowerCase().includes(searchText)
        ),
        inProgress: state.tasks.inProgress.filter((task) =>
          task.title.toLowerCase().includes(searchText)
        ),
        peerReview: state.tasks.peerReview.filter((task) =>
          task.title.toLowerCase().includes(searchText)
        ),
        done: state.tasks.done.filter((task) =>
          task.title.toLowerCase().includes(searchText)
        ),
      };
    },
  },
});

export const { addTask, deleteTask, editTask, searchTasks } =
  tasksSlice.actions;
export default tasksSlice.reducer;
