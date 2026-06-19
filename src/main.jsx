import { createRoot } from 'react-dom/client'
import './index.css'
import './reset.css'
import 'normalize.css';
import App from './app/App.jsx'
import { RouterProvider } from 'react-router';
import { router } from './app/routes/router.js';
import { store } from './app/store/store.js';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router}>
        
        </RouterProvider>
    </Provider>
    
    
)
