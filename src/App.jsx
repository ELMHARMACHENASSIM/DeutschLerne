import { RouterProvider } from "react-router";
import routerDom from "./pages/Layouts/Index";

function App() {
  return (
    <>
      <RouterProvider router={routerDom} />
    </>
  );
}

export default App;
