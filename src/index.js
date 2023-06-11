import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createRoot } from 'react-dom';
import SamuraiNetwork from './SamuraiNetwork';

const root = createRoot(document.getElementById('root'));
root.render(<SamuraiNetwork />);

serviceWorker.unregister();
