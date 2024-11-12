import { createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "../pages/ErrorBoundary";
import Home from "../pages/Home";
import { Epic } from "../pages/Epic";
import MyProjects from "../pages/MyProjects";
import MyStories from "../pages/MyStories";
import Story from "../pages/Story";
import ProjectDetails from "../pages/ProjectDetails";
import Settings from "../pages/Settings";
import Login from "../pages/Login";
import "../components/styles/App.css";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/my-projects",
    element: <MyProjects />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/my-projects/:projectId",
    element: <ProjectDetails />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/my-projects/:projectId/:epicId",
    element: <Epic />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/my-projects/:projectId/:epicId/:storyId",
    element: <Story />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/my-stories",
    element: <MyStories />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/my-stories/:storyId",
    element: <Story />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/settings",
    element: <Settings />,
    errorElement: <ErrorBoundary />,
  },
]);

export default router;