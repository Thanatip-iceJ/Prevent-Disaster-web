import { ToastContainer } from "react-toastify";
import Routes from "./router/Routes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes />
      <ToastContainer position="bottom-left" autoClose={3000} />
    </>
  );
}

export default App;
