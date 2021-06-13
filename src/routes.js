import Home from "./components/Home";
import CreateEvent from "./components/Admin/CreateEvent";

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/admin/create-event',
        component: CreateEvent
    }
]

export default routes