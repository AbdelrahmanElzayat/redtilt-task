import { RouterProvider } from "react-router-dom";
import { router } from "./utils/Router";

function App() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-inter">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
