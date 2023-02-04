import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
  Line,
} from "./pages";

import "./App.css";

function App() {
  const [activeMenu, setActiveMenu] = useState(true);
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4 z-[1000] ">
            <TooltipComponent content="Settings" postion="Top ">
              <button
                type="button"
                className="text-3x p-3 rounded-[50%] bg-[blue] hover:drop-shadow-xl hover:bg-light-gray text-[white]"
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
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "  md:ml-72 " : "  m flex-2 "
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              navbar
            </div>
          </div>
          <Routes>
            {/* {dashboard} */}
            <Route path="/" element={<Ecommerce />} />
            <Route path="/EComerce" element={<Ecommerce />} />
            {/* {pages} */}
            <Route path="/orders" element={<Orders />} />
            <Route path="/empoloyees" element={<Employees />} />
            <Route path="/customers" element={<Customers />} />
            {/* {Apps} */}
            <Route path="/kanban" element={<Kanban />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/calender" element={<Calendar />} />
            <Route path="/color-picker" element={<ColorPicker />} />
            {/* {charts} */}
            <Route path="/line" element={<Line />} />
            <Route path="/area" element={<Area />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/Financial" element={<Financial />} />
            <Route path="/color-mapping" element={<Color-mapping />} />
            <Route path="/Pyramid" element={<Pyramid />} />
            <Route path="/Stacked" element={<Stacked />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
