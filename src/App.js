import Router from "./router";
import { ToastContainer, Flip} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
    <Router/>
    <ToastContainer transition={Flip}  autoClose={2000}/>
    </div>
  );
}

export default App;
