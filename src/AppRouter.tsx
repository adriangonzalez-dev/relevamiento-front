import {createBrowserRouter} from 'react-router-dom'
import { Root } from './layout/Root';
import { Home } from './pages/Home';
import { ResultCountry } from './pages/ResultCountry';
import { ResultAgent } from './pages/ResultAgent';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
            path: "/",
            element: <Home/>
        },
        {
            path: '/paises/:id',
            element: <ResultCountry/>
        },
        {
            path: '/agentes/:id',
            element: <ResultAgent/>
        }
      ]
    },
  ]);

export default router;