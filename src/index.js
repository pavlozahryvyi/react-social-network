import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createRoot } from 'react-dom/client';
import './index.css';
import SamuraiNetwork from './App';

const root = createRoot(document.getElementById('root'));
root.render(<SamuraiNetwork />);

serviceWorker.unregister();
