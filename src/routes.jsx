import JobList from "./molekuls/JobList";
import CreateJob from "./templates/CreateJob";

export const routers = [
  {
    id: 1,
    path: "/job-list",
    element: <JobList />,
  },
  {
    id: 2,
    path: "/job-list",
    element: <JobList />,
  },
  {
    id: 3,
    path: "/job-create",
    element: <CreateJob />,
  },
];
