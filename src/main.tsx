import React from 'react'
import ReactDOM from 'react-dom/client'

import { PokedexApp } from './PokedexApp'

// theme
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";  
// css
import "primereact/resources/primereact.min.css";                  
// icons
import "primeicons/primeicons.css";
// layout (optional)
import "primeflex/primeflex.css";

import './index.css';

import { PrimeReactProvider } from 'primereact/api';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <PokedexApp />
    </PrimeReactProvider>
  </React.StrictMode>,
)
