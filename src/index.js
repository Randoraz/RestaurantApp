import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { createHashRouter, RouterProvider, Navigate } from 'react-router-dom';
import Root from './routes/Root/Root';
import App from './routes/App/App';
import MenuPage from './routes/MenuPage/MenuPage';
import Reservations from './routes/Reservations/Reservations';
import Order from './routes/Order/Order';
import Address from './routes/Address/Address';
import reportWebVitals from './reportWebVitals';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

const router = createHashRouter([
  {
    path: "/*",
    element: <Root />,
    children: [
      {
        path: "",
        element: <App />
      },
      {
        path: "menu",
        element: <MenuPage />
      },
      {
        path: "reservations",
        element: <Reservations />
      },
      {
        path: "order",
        element: <Order />
      },
      {
        path: "address",
        element: <Address />
      },
      {
        path: "*",
        element: <Navigate to="/" />
      }
    ]
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
