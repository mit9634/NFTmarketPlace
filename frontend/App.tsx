import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import { Mint } from "@/pages/Mint";
import { Home } from "@/pages/Home";
import { CreateCollection } from "@/pages/CreateCollection";
import { MyCollections } from "@/pages/MyCollections";
import { TopBanner } from "./components/TopBanner";
import { AddUserDetails } from "./components/AddUserDetails";
import { IS_DEV } from "./constants";

function Layout() {
  return (
    <>
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/mint/:collectionID",
        element: <Mint />,
      },{
        path: "/",
        element: <Home />,
      },
      {
        path: "create-collection",
        element: <CreateCollection />,
      },
      {
        path: "my-collections",
        element: <MyCollections />,
      },
      {
        path: "/add-user-details",
        element: <AddUserDetails />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      {IS_DEV && <TopBanner />}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
