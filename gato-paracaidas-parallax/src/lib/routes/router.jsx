import {createBrowserRouter} from 'react-router'

// importe de páginas



// importe de páginas especiales
import Layout from '@/Layout'



const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        index: true,// página principal sin Layout, para q no comparta header y footer
        children:[
            {
                path: '/home',
                element: <Home/>,
            },
        ]
    }
   
])
export default router