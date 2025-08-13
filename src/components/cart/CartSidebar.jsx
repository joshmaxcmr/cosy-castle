import { FaTimes } from "react-icons/fa";
import Button from "../button/Button";
import { IoCartOutline } from "react-icons/io5";

const CartSidebar = ({ isCartOpen, toggleCart }) => {
  return (
    <div className={`fixed right-0 top-0 z-20 h-screen w-[400px] transform transition-transform duration-300 ease-in-out ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}>
      <div className="flex h-screen flex-col bg-white shadow-lg dark:bg-gray-900 dark:text-gray-200 rounded-bl-3xl rounded-tl-3xl">
        {/* cart header */}
        <div className="flex items-center justify-between border-b border-gray-200 p-4 dark:border-gray-700">
          <h2 className="text-xl font-semibold">Votre panier</h2>
          <Button onClick={toggleCart}>
            <FaTimes size={20}/>
          </Button>
        </div>

        {/* cart content */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="text-center text-gray-500 dark:text-gray-400 py-8">
            <IoCartOutline className="text-6xl mx-auto mb-4 opacity-50" />
            <p>Votre panier est vide</p>
            <p className="text-sm">Ajoutez des plats pour commencer</p>
          </div>
        </div>

        {/* cart footer */}
        <div className="border-t border-gray-200 p-4 dark:border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold">Total:</span>
            <span className="font-bold text-lg">0,00 €</span>
          </div>
          <Button className="w-full bg-[#ec2025] text-white hover:bg-red-700">
            Commander
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;



