import { createBrowserRouter } from 'react-router'

// importe de páginas
import Home from '@/pages/Home'


// importe de páginas especiales
import Layout from '@/Layout'
import Landing from '@/pages/Landing'



const router = createBrowserRouter([
    {
        path: '/',
        element: <Landing />,
        index: true,// página principal sin Layout, para q no comparta header y footer

    },
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/home',
                element: <Home />,
            },
        ]
    }

])
export default router