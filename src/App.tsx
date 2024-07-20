import React, { Suspense } from "react";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Feed from "./components/Feed.tsx";
import Spinner from "./components/Spinner.tsx";
import RootLayout from "./RootLayout.tsx";

const About = React.lazy(() => import("./pages/about.tsx"));
const Contacts = React.lazy(() => import("./pages/contacts.tsx"));
const Project = React.lazy(() => import("./pages/projects.tsx"));
const Experience = React.lazy(() => import("./pages/experience.tsx"));
const Profile = React.lazy(() => import('./components/Profile.tsx'))


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Feed />} />
      <Route
        path="about"
        element={
          <Suspense fallback={<Spinner />}>
            <About />
          </Suspense>
        }
      />

      <Route
        path="experience"
        element={
          <Suspense fallback={<Spinner />}>
            <Experience />
          </Suspense>
        }
      />

      <Route
        path="projects"
        element={
          <Suspense fallback={<Spinner />}>
            <Project />
          </Suspense>
        }
      />
      <Route
        path="profile"
        element={
          <Suspense fallback={<Spinner />}>
            <Profile />
          </Suspense>
        }
      />
       <Route
        path="contacts"
        element={
          <Suspense fallback={<Spinner />}>
            <Contacts />
          </Suspense>
        }
      />
    </Route>
    
  )
);

const App = () => {
  console.log("Home render");

  return <RouterProvider router={router} />;
};

export default App;
