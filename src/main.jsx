import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<div className='bg-white'>
		<QueryClientProvider client={queryClient}>
			<ToastContainer />
			<RouterProvider router={router}></RouterProvider>
		</QueryClientProvider>
		</div>
	</React.StrictMode>
);
