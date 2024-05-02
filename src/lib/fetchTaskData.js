import axios from "axios";

export const fetchTaskData = async () => {
  const response = await axios.get("/mock/tasks.json");

  return await response.data;
};

export const fetchSingleTaskData = async ({ queryKey }) => {
  const [, id] = queryKey; // Extract the id from the queryKey

  const response = await axios.get("/mock/tasks.json");
  const tasks = await response.data;

  // Assuming projects is an array of project objects
  const task = tasks.find((task) => task.id === parseInt(id));

  if (!task) {
    throw new Error(`Project with ID ${id} not found`);
  }

  return task;
};
