# 📚 Guide d'Apprentissage React - Cozy Castle

Ce guide t'aidera à comprendre et reproduire les fonctionnalités principales de l'application Cozy Castle étape par étape.

---

## 🌙 1. IMPLÉMENTATION DU MODE SOMBRE

### 💡 Concept Principal
Le mode sombre utilise un **état booléen** pour basculer entre thème clair et sombre.

### 📋 Étapes d'implémentation :

#### **Étape 1 : Créer l'état dans le composant parent**
```jsx
// Dans App.jsx
import { useState } from "react";

const App = () => {
  // État booléen : false = mode clair, true = mode sombre
  const [darkMode, setDarkMode] = useState(false);
  
  // Fonction pour basculer le mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Inverse la valeur booléenne
  };
```

**📝 Explication :**
- `useState(false)` : Initialise le mode clair par défaut
- `setDarkMode(!darkMode)` : Si `darkMode` est `false`, devient `true` et vice-versa

#### **Étape 2 : Appliquer la classe CSS conditionnellement**
```jsx
// Dans App.jsx - partie render
return (
  <div className={`${darkMode ? "dark" : ""} min-h-screen`}>
    <div className="bg-white dark:bg-gray-950 text-black dark:text-white">
      {/* Le contenu de ton app */}
    </div>
  </div>
);
```

**📝 Explication :**
- `${darkMode ? "dark" : ""}` : Si `darkMode` est `true`, ajoute la classe `"dark"`, sinon rien
- TailwindCSS détecte automatiquement la classe `dark` sur un parent
- Toutes les classes `dark:` s'activent automatiquement

#### **Étape 3 : Créer le bouton de toggle**
```jsx
// Dans DarkModeButton.jsx
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5'

const DarkModeButton = ({ toggleDarkMode, darkMode }) => {
  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? 
        <IoSunnyOutline className="text-2xl" /> : 
        <IoMoonOutline className="text-2xl" />
      }
    </button>
  );
}
```

**📝 Explication :**
- `onClick={toggleDarkMode}` : Appelle la fonction quand on clique
- `{darkMode ? soleil : lune}` : Affiche soleil en mode sombre, lune en mode clair
- Les props `toggleDarkMode` et `darkMode` viennent du parent

#### **Étape 4 : Passer les props au composant enfant**
```jsx
// Dans Header.jsx
const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="bg-white dark:bg-gray-950">
      <DarkModeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
};
```

### ✅ **Résultat :** 
Clic sur le bouton → État change → Classe CSS change → Thème change instantanément !

---

## 📱 2. SIDEBAR TOGGLE (OUVERTURE/FERMETURE)

### 💡 Concept Principal
La sidebar utilise un **état booléen** et des **classes CSS conditionnelles** pour changer sa largeur.

### 📋 Étapes d'implémentation :

#### **Étape 1 : Créer l'état d'ouverture**
```jsx
// Dans App.jsx
const App = () => {
  // État : true = ouverte, false = fermée
  const [isSiderOpen, setIsSiderOpen] = useState(true);
  
  // Fonction pour basculer l'ouverture
  const toggleSidebar = () => {
    setIsSiderOpen(!isSiderOpen);
  };
```

#### **Étape 2 : Appliquer la largeur conditionnelle**
```jsx
// Dans Sidebar.jsx
const Sidebar = ({ isOpen }) => {
  return (
    <div className={`
      ${isOpen ? "w-44" : "w-16"} 
      transition-all duration-500 ease-in-out
    `}>
      {/* Contenu de la sidebar */}
    </div>
  );
};
```

**📝 Explication :**
- `${isOpen ? "w-44" : "w-16"}` : Si ouverte → largeur 176px, sinon 64px
- `transition-all duration-500` : Animation fluide de 500ms
- `ease-in-out` : Animation douce au début et à la fin

#### **Étape 3 : Cacher/Afficher le texte**
```jsx
// Dans NavLinks.jsx (exemple)
const NavLinks = ({ isOpen }) => {
  return (
    <div>
      <FaHome className="text-lg" />
      {isOpen && <span className="text-sm">Accueil</span>}
    </div>
  );
};
```

**📝 Explication :**
- `{isOpen && <span>Texte</span>}` : Affiche le texte SEULEMENT si `isOpen` est `true`
- Quand `isOpen` est `false`, rien ne s'affiche après `&&`

#### **Étape 4 : Adapter le contenu principal**
```jsx
// Dans App.jsx
<div className={`
  ${isSiderOpen ? "ml-44" : "ml-16"} 
  transition-all duration-500
`}>
  {/* Contenu principal qui s'adapte */}
</div>
```

**📝 Explication :**
- `ml-44` ou `ml-16` : Marge à gauche qui s'adapte à la largeur de la sidebar
- Le contenu principal se décale automatiquement

### ✅ **Résultat :** 
Clic sur toggle → État change → Largeur change → Animation fluide !

---

## 🛒 3. GESTION DU PANIER (CONTEXT API)

### 💡 Concept Principal
Le **Context API** permet de partager un état global (le panier) entre tous les composants.

### 📋 Étapes d'implémentation :

#### **Étape 1 : Créer le Context**
```jsx
// Dans CartContext.jsx
import { createContext, useContext, useState } from "react";

// 1. Créer le contexte
const CartContext = createContext();

// 2. Hook personnalisé pour utiliser le contexte
export const useCart = () => useContext(CartContext);
```

**📝 Explication :**
- `createContext()` : Crée un "conteneur" pour les données partagées
- `useCart()` : Hook custom pour accéder facilement au panier

#### **Étape 2 : Créer le Provider (Fournisseur)**
```jsx
// Dans CartContext.jsx (suite)
const CartProvider = ({ children }) => {
  // État du panier (tableau d'objets)
  const [cartItems, setCartItems] = useState([]);

  // Fonction pour ajouter un article
  const addItemToCart = (item) => {
    setCartItems((prevItems) => {
      // Vérifier si l'article existe déjà
      const existingItem = prevItems.find((i) => i.name === item.name);
      
      if (existingItem) {
        // Si existe : augmenter la quantité
        return prevItems.map((i) =>
          i.name === item.name 
            ? { ...i, quantity: i.quantity + 1 } 
            : i
        );
      } else {
        // Si nouveau : ajouter avec quantité = 1
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addItemToCart
    }}>
      {children}
    </CartContext.Provider>
  );
};
```

**📝 Explication :**
- `CartProvider` : Composant qui "enveloppe" l'app et fournit les données
- `value={{}}` : Les données et fonctions partagées
- `{children}` : Tous les composants enfants auront accès au contexte

#### **Étape 3 : Envelopper l'application**
```jsx
// Dans App.jsx
import CartProvider from './contexts/CartContext';

const App = () => {
  return (
    <CartProvider>
      {/* Tous les composants à l'intérieur peuvent utiliser le panier */}
      <Header />
      <Sidebar />
      <Main />
    </CartProvider>
  );
};
```

#### **Étape 4 : Utiliser le panier dans les composants**
```jsx
// Dans MenuItem.jsx
import { useCart } from '../../contexts/CartContext';

const MenuItem = ({ menuItem }) => {
  // Récupérer les données du panier
  const { cartItems, addItemToCart } = useCart();
  
  // Vérifier si l'article est dans le panier
  const inCart = cartItems.find(item => item.name === menuItem.name);
  
  return (
    <div>
      <h3>{menuItem.name}</h3>
      <button onClick={() => addItemToCart(menuItem)}>
        Ajouter au panier
      </button>
      {inCart && <span>Quantité: {inCart.quantity}</span>}
    </div>
  );
};
```

**📝 Explication :**
- `useCart()` : Récupère toutes les données du contexte
- `addItemToCart(menuItem)` : Ajoute l'article au panier global
- Tous les composants voient automatiquement les changements !

#### **Étape 5 : Calculer le total**
```jsx
// Dans CartContext.jsx (ajout)
const totalAmount = cartItems.reduce(
  (total, item) => total + (item.amount * item.quantity), 
  0
);

// Ajouter totalAmount dans le value du Provider
<CartContext.Provider value={{
  cartItems,
  addItemToCart,
  totalAmount
}}>
```

**📝 Explication :**
- `reduce()` : Parcourt tous les articles et additionne les prix × quantités
- Le total se met à jour automatiquement quand le panier change

### ✅ **Résultat :** 
Action dans un composant → État global change → Tous les composants se mettent à jour !

---

## 🧠 CONCEPTS REACT CLÉS APPRIS

### 1. **useState Hook**
```jsx
const [état, setÉtat] = useState(valeurInitiale);
```
- Crée un état local dans un composant
- `état` : valeur actuelle
- `setÉtat` : fonction pour modifier l'état

### 2. **Props (Propriétés)**
```jsx
<Composant prop1={valeur1} prop2={valeur2} />
```
- Données passées du parent vers l'enfant
- Lecture seule dans le composant enfant

### 3. **Rendu Conditionnel**
```jsx
{condition && <ElementAffiche />}
{condition ? <ElementSiVrai /> : <ElementSiFaux />}
```
- Affiche des éléments selon une condition

### 4. **Context API**
```jsx
const Context = createContext();
const Provider = ({ children }) => <Context.Provider>{children}</Context.Provider>;
const useCustomHook = () => useContext(Context);
```
- Partage d'état entre composants sans props drilling

---

## 🎯 DÉFI PERSONNEL

**Maintenant que tu comprends ces concepts, essaie de :**

1. 🌙 Reproduire le mode sombre dans un nouveau projet
2. 📱 Créer une navbar qui se réduit/étend
3. ❤️ Implémenter un système de favoris avec Context API
4. 🚀 Combiner ces 3 fonctionnalités dans une mini-app

**🎉 Tu maîtrises maintenant les bases de React pour créer des interfaces interactives !**