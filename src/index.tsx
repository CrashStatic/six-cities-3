import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export interface IData {
  index?: number;
  found: number;
  city: string;
}

const data: IData[] = [
  {
    index: 1,
    found: 312,
    city: 'Amsterdam'
  }
];

root.render(
  <React.StrictMode>
    {data.map((city) => (
      <App key={city.index} found={city.found} city={city.city} />
    ))}
  </React.StrictMode>
);
