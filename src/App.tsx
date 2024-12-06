import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Layout from "./appLayout/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import EachProjectPage from "./pages/EachProjectPage";
import { AllContextProvider } from "./features/AllContext";
import ContactPage from "./pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/project",
        element: <ProjectPage />,
      },
      {
        path: "/project/:id",
        element: <EachProjectPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);
function App() {
  return (
    <AllContextProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AllContextProvider>
  );
}

export default App;
