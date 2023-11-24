import "./App.css";
import AppRouter from "./Router/AppRouter";
import BottomTab from "./components/BottomTab/BottomTab";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="h-screen relative">
      <div>
        <Navbar />
      </div>
      <div className="flex h-[90vh]">
        <div>
          <Sidebar />
        </div>

        <div className="w-full  h-[90vh]">
          <AppRouter />
        </div>
      </div>

      <div>
        <BottomTab />
      </div>
      <Toaster />
    </div>
  );
}

export default App;
