import ProfilePage from "../views/private/profile/ProfilePage";
import Music from "../views/public/Home/Pages/Music/Music";
import Sport from "../views/public/Home/Pages/Sport/Sport";
import Theatre from "../views/public/Home/Pages/Theatre/Theatre";
import Home from "../views/public/Home/Pages/Home/Home";

export const publicRoutes = [
    {
        path:'/*',
        element: <Home />
    },
    {
        path:'/music/*',
        element: <Music />
    },
    {
        path:'/sport/*',
        element: <Sport />
    },
    {
        path:'/Theatre/*',
        element: <Theatre />
    },
]

export const privateRoutes = [
    {
        path:'/profile/*',
        element: <ProfilePage />
    },
]