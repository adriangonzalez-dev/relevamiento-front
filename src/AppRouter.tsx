import {createBrowserRouter} from 'react-router-dom'
import { Root } from './layout/Root';
import { Home } from './pages/Home';
import { ResultCountry } from './pages/ResultCountry';
import { ResultAgent } from './pages/ResultAgent';
import { AuditsComponent } from './pages/Audits';

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
        },
        {
          path:'/audit',
          element: <AuditsComponent/>
        }
      ]
    },
  ]);

export default router;