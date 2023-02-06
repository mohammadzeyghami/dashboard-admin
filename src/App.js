import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Customers,
  Kanban,
  Area,
  ColorPicker,
  Editor,
  Line,
} from "./pages";

import "./App.css";
import { useStateContext } from "./contexts/ContextProvider";

function App() {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();
  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4 z-[1000] ">
            <TooltipComponent content="Settings" postion="Top ">
              <button
                type="button"
                style={{ background: currentColor }}
                onClick={() => setThemeSettings(true)}
                className={`text-3x p-3 rounded-[50%]  hover:drop-shadow-xl hover:bg-light-gray text-[white]`}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72 " : "flex-2 "
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
            {themeSettings && <ThemeSettings />}
            <Routes>
              {/* {dashboard} */}
              <Route path="/" element={<Ecommerce />} />
              <Route path="/ECommerce" element={<Ecommerce />} />
              {/* {pages} */}
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/customers" element={<Customers />} />
              {/* {Apps} */}
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/color-picker" element={<ColorPicker />} />
              {/* {charts} */}
              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
