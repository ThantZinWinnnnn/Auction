import { Routes, Route,createBrowserRouter, RouterProvider } from "react-router-dom";

/*Routes */
import router from "./components/Utils/routes/route";



function App() {
  return (
    <main>
      <RouterProvider router={router}/>
    </main>
  );
}

export default App;
