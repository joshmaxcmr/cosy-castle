import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import { useState } from "react";


const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isSiderOpen, setIsSiderOpen] = useState(true);

  // Dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Sidebar
  const toggleSidebar = () => {
    setIsSiderOpen(!isSiderOpen);
  };

  return (
    <div className={`${darkMode ? "dark" : ""} min-h-screen`}>
      <div className="flex min-h-screen bg-white text-black transition-all duration-300 ease-in-out dark:bg-gray-950 dark:text-white h-screen">
        <Sidebar isOpen={isSiderOpen} toggleSidebar={toggleSidebar} />
        <div
          className={`${
            isSiderOpen ? "ml-44" : "ml-16"
          } flex-1 transition-all duration-500 ease-in-out dark:text-white`}
        >
          {/* Header */}
          <Header
            toggleSidebar={toggleSidebar}
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
          />
          {/* Main */}

          {/* cartsidebar */}
        </div>
      </div>
    </div>
  );
};

export default App;
