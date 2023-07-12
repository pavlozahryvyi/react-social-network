import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createRoot } from 'react-dom/client';
import SamuraiNetwork from './SamuraiNetwork';

const b = 2;

const root = createRoot(document.getElementById('root'));
root.render(<SamuraiNetwork />);

serviceWorker.unregister();
