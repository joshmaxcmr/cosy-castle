import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import { useState } from "react";
import CartSideBar from "./components/cart/CartSidebar";
import Main from "./components/main/Main";
import CartProvider from "./contexts/CartContext.jsx";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isSiderOpen, setIsSiderOpen] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Sidebar
  const toggleSidebar = () => {
    setIsSiderOpen(!isSiderOpen);
  };

  // Cart
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
      <CartProvider>
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
            toggleCart={toggleCart}
            isCartOpen={isCartOpen}
          />
          
          {/* Main content area */}
         <Main />
         
        </div>
      </div>

      {/* Cart Sidebar */}
      <CartSideBar isCartOpen={isCartOpen} toggleCart={toggleCart} />
      
      
      
    </div>
      </CartProvider>
  );
};

export default App;
