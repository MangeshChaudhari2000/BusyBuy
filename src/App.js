import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Outlet } from "react-router-dom";

import Navbar from "./Pages/Navbar";
import HomePage from "./Pages/HomePage";
import BusyBuyProvider from "./BusyContext";
import Auth from "./Pages/Auth";
import MyCart from "./Pages/MyCart";
import MyOrder from "./Pages/MyOrder";
import ErrorPage from "./Pages/ErrorPage";
import { useBusyBuy } from "./BusyContext";


function App() {
  const ProtectedRoute = ({ children }) => {
    const { userId } = useBusyBuy();
    if (!userId) {      
      return <Navigate to="/Auth" />
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
      element: (
        <BusyBuyProvider>
          <Navbar />
          <Outlet /> {/* This will render child routes */}
        </BusyBuyProvider>
      ),
      children: [
        {
          path: "", element: <HomePage />
        },
        {
          path: "Auth", element: <Auth />
        },
        {
          path: "MyCart", element: <ProtectedRoute><MyCart /></ProtectedRoute>
        },
        {
          path: "MyOrder", element: <ProtectedRoute><MyOrder /></ProtectedRoute>
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
