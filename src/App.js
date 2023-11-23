import "./App.css";
import AppRouter from "./Router/AppRouter";
import BottomTab from "./components/BottomTab/BottomTab";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

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
    </div>
  );
}

export default App;
