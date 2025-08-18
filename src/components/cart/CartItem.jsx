import React from "react";
import Button from "../button/Button";
import { useCart } from "../../contexts/CartContext";

const CartItem = ({ item }) => {
    const { addItemToCart, decreaseItemQuantity } = useCart();

    return (
        <div className="flex items-center justify-between border-b border-gray-200 py-4 dark:border-gray-700">
            <div className="flex items-center space-x-4">
                <img 
                    src={item.image} 
                    alt={item.name} 
                    className="h-16 w-16 rounded-lg object-cover"
                />
                <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        {item.amount} Fcfa
                    </p>
                </div>
            </div>
            
            <div className="flex items-center space-x-3">
                <Button 
                    onClick={() => decreaseItemQuantity(item.name)}
                    className="size-8 rounded-full font-bold"
                >
                    -
                </Button>
                <span className="font-semibold">
                    {item.quantity < 10 ? `0${item.quantity}` : item.quantity}
                </span>
                <Button 
                    onClick={() => addItemToCart(item)}
                    className="size-8 rounded-full font-bold"
                >
                    +
                </Button>
            </div>
        </div>
    );
};
export default CartItem;