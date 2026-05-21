import { createRoot } from 'react-dom/client'
import './index.css'
import './reset.css'
import 'normalize.css';
import App from './app/App.jsx'
import { RouterProvider } from 'react-router';
import { router } from './app/routes/router.js';

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>
        
    </RouterProvider>
    
)
