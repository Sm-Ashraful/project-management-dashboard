import axios from "axios";

export const fetchData = async () => {
  const response = await axios.get("/mock/projects.json");

  return await response.data;
};

export const fetchSingleData = async ({ queryKey }) => {
  const [, id] = queryKey; // Extract the id from the queryKey
  console.log("Query key: ", id);
  const response = await axios.get("/mock/projects.json");
  const projects = await response.data;

  // Assuming projects is an array of project objects
  const project = projects.find((project) => project.id === parseInt(id));
  console.log("Projects f j: ", project);
  if (!project) {
    throw new Error(`Project with ID ${id} not found`);
  }

  return project;
};
