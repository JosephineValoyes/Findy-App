import { createRoot } from 'react-dom/client'
//import AppContextProvider from './context/AppContext';
import AppRouter from './router/AppRouter'
import './index.css';
import AppContextProvider from './context/AppContext';


createRoot(document.getElementById("root")).render(
  <AppContextProvider>
    <AppRouter />
  </AppContextProvider>
  
);