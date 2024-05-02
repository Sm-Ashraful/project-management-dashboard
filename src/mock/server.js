import { createServer } from "miragejs";

export default function () {
  createServer({
    routes() {
      this.get("/api/projects", () => ({
        projects: [
          {
            id: 0,
            name: "E commerce website",
            description:
              "This is a e-comemrce website where user can order see product, product description, cart product, order product",
            status: "on-hold",
            startDate: "2023-04-20",
            dueDate: "2023-06-30",
            tasks: [
              {
                id: 1,
                title: "Design wireframes",
                completed: true,
                dueDate: "2023-05-10",
              },
              {
                id: 2,
                title: "Conduct user research",
                completed: false,
                dueDate: "2023-05-22",
              },
            ],
            teamMembers: [
              { id: 1, name: "Alice Johnson", role: "Project Manager" },
              { id: 2, name: "Bob Smith", role: "Designer" },
            ],
          },
        ],
      }));
    },
  });
}
