import JobList from "./molekuls/JobList";
import CreateJob from "./templates/CreateJob";
import EditJob from "./templates/EditJob";

export const routers = [
  {
    id: 1,
    path: "/",
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
  {
    id: 4,
    path: "/job-edit/:id",
    element: <EditJob />,
  },
];
