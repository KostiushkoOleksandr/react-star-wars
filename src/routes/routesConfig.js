import PeoplePage from "@containers/PeoplePage";
import HomePage from "@containers/HomePage";
import NotFoundPage from "@containers/NotFoundPage";
import PersonPage from "@containers/PersonPage";

const routesConfig = [
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/people',
        element: <PeoplePage/>
    },
    {
        path: '/not-found',
        element: <NotFoundPage/>
    },
    {
        path: '*',
        element: <NotFoundPage/>
    },
    {
        path: '/people/:id',
        element: <PersonPage/>
    }
]



export default routesConfig;
