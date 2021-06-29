import Home from "./components/Home";
import AdminCreateEvent from "./components/CreateEvent/Admin";
import CreateEvent from "./components/CreateEvent";
import Portfolio from "./components/Portfolio";
import PersonalCabinet from "./components/PersonalCabinet";
import OurVolunteers from "./components/OurVolunteers";

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/admin/create-event',
        component: AdminCreateEvent
    },
    {
        path: '/create-event',
        component: CreateEvent
    },
    {
        path: '/portfolio',
        component: Portfolio
    },
    {
        path: '/cabinet',
        component: PersonalCabinet
    },
    {
        path: '/our-volunteers',
        component: OurVolunteers
    },
]

export default routes