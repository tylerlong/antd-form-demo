import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './app';
import store from './store';

const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);
root.render(<App store={store} />);

setTimeout(() => {
  store.count += 1;
}, 1000);
