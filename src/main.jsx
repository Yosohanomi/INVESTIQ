import { createRoot } from 'react-dom/client'
import './index.scss'
import './reset.scss'
import 'normalize.css';
import App from './app/App.jsx'

createRoot(document.getElementById('root')).render(
    <App />
)
