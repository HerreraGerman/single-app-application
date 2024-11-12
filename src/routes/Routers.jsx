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

const isAuthenticated = () => {
  return localStorage.getItem("authToken") !== null;
};

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/",
    element: isAuthenticated() ? <Home /> : <Login />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/home",
    element: isAuthenticated() ? <Home /> : <Login />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/my-projects",
    element: isAuthenticated() ? <MyProjects /> : <Login />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/my-projects/:projectId",
    element: isAuthenticated() ? <ProjectDetails /> : <Login />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/my-projects/:projectId/:epicId",
    element: isAuthenticated() ? <Epic /> : <Login />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/my-projects/:projectId/:epicId/:storyId",
    element: isAuthenticated() ? <Story /> : <Login />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/my-projects/:projectId/:epicId/:storyId/:taskId",
    element: <p>Not yet</p>,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/my-stories",
    element: isAuthenticated() ? <MyStories /> : <Login />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/my-stories/:storyId",
    element: isAuthenticated() ? <Story /> : <Login />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/settings",
    element: isAuthenticated() ? <Settings /> : <Login />,
    errorElement: <ErrorBoundary />,
  },
]);

export default router;