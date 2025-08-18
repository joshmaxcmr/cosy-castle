import React from 'react'
import Button from "../button/Button";
import {useCart} from "../../contexts/CartContext.jsx";


const MenuItem = ({menuItem}) => {

    const {cartItems, addItemToCart, decreaseItemQuantity} = useCart();
    const inCart = cartItems.find((item) => item.name === menuItem.name);
    return (
        <div
            className=" flex cursor-pointer flex-col gap-6 rounded-lg bg-white p-5 text-gray-600 transition-a duration-300 ease-in-out hover:outline hover: outline-[#ec2025] dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600">
            <div className="overflow-hidden rounded-md">
                <img src={menuItem.image} alt={menuItem.name}
                     className="h-48 w-full rounded-md object-cover transition duration-300 ease-in hover:scale-110 sm:h52 md:h-60"/>
            </div>
            <div>
                <h3 className="text-xl font-bold">{menuItem.name}</h3>
                <p className="font-semibold text-[#ec2025]">${menuItem.amount}</p>
            </div>

            {/* Bouton d'ajout card */}

            {
                inCart ? <div
                    className="flex items-center justify-between rounded-lg p-1 px-5 dark:bg-gray-500 dark:text-gray-200">
                    <Button onClick={() => decreaseItemQuantity(menuItem.name)} className="size-8 rounded-full font-bold ">-</Button>
                    <span>{inCart.quantity <10 ? `0${inCart.quantity}` :  inCart.quantity}</span>
                    <Button onClick={() => addItemToCart(menuItem)} className="size-8 rounded-full font-bold">+</Button>
                </div> : <Button onClick={() => addItemToCart(menuItem)} className="w-full ">Ajouter au panier</Button>
            }
        </div>

    )
}

export default MenuItem