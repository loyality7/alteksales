import "./App.css";
import { RouterProvider } from "react-router";
import { router } from "./router";
import { useAppSelector } from "./store/hooks";

function App() {

  const state = useAppSelector(state => state.cart);

  console.log(state);

  return <RouterProvider router={router} />
}

export default App;
