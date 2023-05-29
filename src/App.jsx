import { RoutesMain } from "./routes";
import { Global } from "./styles/globalStyle";
import { AuthProvider } from "./context";
import 'react-toastify/dist/ReactToastify.css';
import { AuthProviderContact } from "./context/contextContact";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <AuthProvider>
        <AuthProviderContact>
           <Global />
           <RoutesMain />;
        </AuthProviderContact>
      </AuthProvider>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export { App };
