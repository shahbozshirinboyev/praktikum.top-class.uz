import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

import RootLayout from "./layouts/RootLayout";
import ErrorPage from "./pages/Error/ErrorPage";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <RootLayout />
        </ProtectedRoute>
      ),
      errorElement: <ErrorPage />,
    },
    { path: '/signin', element: <SignIn /> },
    { path: '/signup', element: <SignUp /> },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  );
}

export default App;
