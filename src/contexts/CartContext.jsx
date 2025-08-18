import {createContext, useContext, useState} from "react";

// création du contexte
const CartContext = createContext();

// hook personnalisé
export const useCart = () => useContext(CartContext);
const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    // ajout au panier
    const addItemToCart = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((i) => i.name === item.name);

            if (existingItem) {
                return prevItems.map((i) =>
                    i.name === item.name ? {...i, quantity: i.quantity + 1} : i
                )
            } else {
                return [...prevItems, {...item, quantity: 1}];
            }
        })
    }
    //retrait du panier
    const removeItemFromCart = (itemName) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.name !== itemName)
        );
    }
    
    //décrementer la quantité d'un item
    const decreaseItemQuantity = (itemName) => {
        setCartItems(prevItems => {
            return prevItems.map((item) => {
                if (item.name === itemName) {
                    if (item.quantity > 1) {
                        return { ...item, quantity: item.quantity - 1};
                    } else {
                        return null; // retirer l'item si quantité = 1
                    }
                }
                return item;
            }).filter(item => item !== null);
        });
    }

    // calculer le total du panier
    const totalAmount = cartItems.reduce(
        (total, item) => total + item.amount * item.quantity, 0
    )
    return (
        <CartContext.Provider value={{cartItems, addItemToCart, removeItemFromCart, decreaseItemQuantity, totalAmount}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;