import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

import RootLayout from "./layouts/RootLayout";
import ErrorPage from "./pages/Error/ErrorPage";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import HomePage from "./pages/Home/HomePage.jsx";
import Courses from "./pages/Courses/Courses.jsx";
import Profile from "./pages/Profile/Profile.jsx";

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: ( <ProtectedRoute> <RootLayout /> </ProtectedRoute> ),
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: '/courses',
          element: <Courses />
        },
        {
          path: '/profile',
          element: <Profile />
        }
    ]
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
