import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../components/main-layout/MainLayOut";
import Home from "../pages/Home/Home";
import NotFound from "../pages/not-found/NotFound";
import { Suspense } from "react";
import LoadingPage from "../pages/LoadingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingPage />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
