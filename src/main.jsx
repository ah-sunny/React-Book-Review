import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import ErrorPage from './Component/404Page/ErrorPage';
import Authorlist from './Component/AuthorList/Authorlist';
import CreateAccount from './Component/CreateAccount/CreateAccount';
import BookDetails from './Component/Home/BookDetails';
import Home from './Component/Home/Home';
import ListedBooks from './Component/Listed-Books/ListedBooks';
import PagesToRead from './Component/Pages-to-read/PagesToRead';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/home',
        loader: ()=> fetch('/book.json'),
        element: <Home></Home>
      },
      {
        path: '/listed-book',
        loader: ()=> fetch('/book.json'),
        element: <ListedBooks></ListedBooks>
      },
      {
        path: '/pages-to-read',
        loader: ()=> fetch('/book.json'),
        element: <PagesToRead></PagesToRead>
      },
      {
        path: '/home/book-details/:Id',
        loader: ()=> fetch('/book.json'),
        element: <BookDetails></BookDetails>
      },
      {
        path: '/author',
        loader: ()=> fetch('/book.json'),
        element: <Authorlist></Authorlist>
      },
      {
        path: '/create-Account',
        element: <CreateAccount></CreateAccount>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
