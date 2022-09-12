import {lazy} from 'react';
import {useRoutes} from 'react-router-dom';
import HomeLayout from '../layouts/homeLayout'

export default function Routes () {
    const routing = useRoutes([
        {
            path:'/',
            element:<HomeLayout/>,
            children:[
                {
                    path:'/',
                    element:<Home/>,
                }
            ],
        }
    ])
    
    return routing;
}