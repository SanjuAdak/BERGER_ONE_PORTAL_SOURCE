import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './styles/custom.css';
// import './styles/tailwind.css';
import './App.css'
import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard';
// import { UseAuthStore } from './services/store/AuthStore';
import FixedLayout from './pages/fixedLayout/FixedLayout';
import EPCAList from './pages/protecton/ePCA/EPCAList';
import { UseAuthStore } from './services/store/AuthStore';
import EPCADetails from './pages/protecton/ePCA/EPCADetails';
import EPCADepotApprovalList from './pages/protecton/ePCA/EPCADepotApprovalList';
import EPCADepotApprovalDetails from './pages/protecton/ePCA/EPCADepotApprovalDetails';
import EPCARsmApprovalList from './pages/protecton/ePCA/EPCARsmApprovalList';
import EPCARsmApprovalDetails from './pages/protecton/ePCA/EPCARsmApprovalDetails';
import EPCAHOApprovalList from './pages/protecton/ePCA/EPCAHOApprovalList';
import EPCAHoApprovalDetails from './pages/protecton/ePCA/EPCAHoApprovalDetails';
import EPCACancellation from './pages/protecton/ePCA/EPCACancellation';
import TLVRevisionRequestList from './pages/protecton/TLV/TLVRevisionRequestList';
import TLVRevisionRequestDetails from './pages/protecton/TLV/TLVRevisionRequestDetails';
import TLVRevisionDepotApproval from './pages/protecton/TLV/TLVRevisionDepotApproval';
import TLVRevisionRSMApproval from './pages/protecton/TLV/TLVRevisionRSMApproval';
import TLVRevisionHoApproval from './pages/protecton/TLV/TLVRevisionHoApproval';

function App() {
  const user = UseAuthStore((state: any) => state.userDetails);
  // console.log(user?.user_id)
  const router = createBrowserRouter([
    {
      path: '/',
      element: <FixedLayout />,
      children: [
        {
          path: '/',
          element: <Dashboard />,
        },
        {
          path: '/Protecton/ePCA/EPCAList',
          element: <EPCAList />,
        },
        {
          path: '/Protecton/ePCA/EPCADetails',
          element: <EPCADetails />,
        },
        {
          path: '/Protecton/ePCA/EPCADepotApprovalList',
          element: <EPCADepotApprovalList />,
        },
        {
          path: '/Protecton/ePCA/EPCADepotApprovalDetails',
          element: <EPCADepotApprovalDetails />,
        },
        {
          path: '/Protecton/ePCA/EPCARsmApprovalList',
          element: <EPCARsmApprovalList />,
        },
        {
          path: '/Protecton/ePCA/EPCARsmApprovalDetails',
          element: <EPCARsmApprovalDetails />,
        },
        {
          path: '/Protecton/ePCA/EPCAHOApprovalList',
          element: <EPCAHOApprovalList />,
        },
        {
          path: '/Protecton/ePCA/EPCAHoApprovalDetails',
          element: <EPCAHoApprovalDetails />,
        },
        {
          path: '/Protecton/ePCA/EPCACancellation',
          element: <EPCACancellation />,
        },
        {
          path: '/Protecton/TLV/TLVRevisionRequestList',
          element: <TLVRevisionRequestList />,
        },
        {
          path: '/Protecton/TLV/TLVRevisionRequestDetails',
          element: <TLVRevisionRequestDetails />,
        },
        {
          path: '/Protecton/TLV/TLVRevisionDepotApproval',
          element: <TLVRevisionDepotApproval />,
        },
        {
          path: '/Protecton/TLV/TLVRevisionRSMApproval',
          element: <TLVRevisionRSMApproval />,
        },
        {
          path: '/Protecton/TLV/TLVRevisionHoApproval',
          element: <TLVRevisionHoApproval />,
        },
      ],
    },
    {
      path: '/login/cover-login/',
      element: <Login />,
    },
  ]);

  return (
    <div className="min-h-screen bg-blue-300 text-black">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
