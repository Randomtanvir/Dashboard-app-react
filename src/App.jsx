import Dashboard from "./Pages/Dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Support from "./Pages/Support/Support";
import Transaction from "./Pages/Transactions/Transactions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/Transation",
    element: <Transaction />,
  },
  {
    path: "/Support",
    element: <Support />,
  },
]);

function App() {
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
