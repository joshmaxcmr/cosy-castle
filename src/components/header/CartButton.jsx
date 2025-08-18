
import Button from "../button/Button";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../../contexts/CartContext"


const CartButton = ({ toggleCart }) => {
    const { cartItems } = useCart();
    const cartItemCount =  cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <div className="relative">
      <div className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-[#ec2025] text-white text-[12px] font-bold">
          {cartItemCount}
      </div>
      <Button onClick={toggleCart}>
        <IoCartOutline className="text-2xl"/>
      </Button>
    </div>
  );
};

export default CartButton;

