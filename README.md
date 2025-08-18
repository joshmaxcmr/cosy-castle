# 🏰 Cozy Castle - Restaurant Dashboard

<div align="center">

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

*Une application moderne de tableau de bord pour restaurant avec interface intuitive et gestion de panier*

[🚀 Demo Live](#) • [📖 Documentation](#fonctionnalités) • [🛠️ Installation](#installation)

</div>

---

## 🎯 À Propos

**Cozy Castle** est une application web moderne de tableau de bord de restaurant développée avec React et TailwindCSS. Elle offre une expérience utilisateur fluide pour la navigation dans le menu, la gestion du panier d'achat, et dispose d'un mode sombre élégant.

### ✨ Fonctionnalités Principales

- 🍽️ **Menu Interactif** - Navigation par catégories avec filtres dynamiques
- 🛒 **Panier d'Achat** - Gestion complète des articles avec quantités
- 🌙 **Mode Sombre** - Interface adaptative avec transition fluide
- 📱 **Design Responsive** - Optimisé pour tous les appareils
- ⚡ **Performance** - Chargement rapide avec Vite et React 19
- 🎨 **UI Moderne** - Interface épurée avec animations CSS

## 🏗️ Architecture

```
src/
├── components/           # Composants React réutilisables
│   ├── button/          # Composants de boutons
│   ├── cart/            # Composants du panier (CartSidebar, CartItem)
│   ├── category/        # Filtres de catégories
│   ├── header/          # En-tête avec navigation
│   ├── menu/            # Affichage du menu (MenuItem)
│   └── sidebar/         # Barre latérale de navigation
├── contexts/            # Contextes React (CartContext)
├── constants/           # Données statiques et configuration
└── assets/             # Images et icônes
```

### 🔧 Technologies Utilisées

| Technologie | Version | Rôle |
|-------------|---------|------|
| **React** | 19.1.0 | Framework principal |
| **TailwindCSS** | 4.1.11 | Styling et design system |
| **Vite** | 7.0.4 | Build tool et dev server |
| **React Icons** | 5.5.0 | Bibliothèque d'icônes |
| **ESLint** | 9.30.1 | Linting et qualité de code |

## 🚀 Installation

### Prérequis
- Node.js (v16 ou supérieur)
- npm ou yarn

### Étapes d'installation

```bash
# Cloner le repository
git clone https://github.com/votre-username/cozy-castle-restaurant.git

# Naviguer dans le dossier
cd cozy-castle-restaurant

# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev
```

### Scripts Disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run preview  # Aperçu de la version de production
npm run lint     # Vérification du code
```

## 💡 Utilisation

### Gestion d'État
L'application utilise React Context pour la gestion globale de l'état :

```jsx
// CartContext - Gestion du panier
const { cartItems, addItemToCart, decreaseItemQuantity, totalAmount } = useCart();
```

### Composants Principaux

#### 🍽️ MenuItem
Affiche chaque article du menu avec possibilité d'ajout au panier
```jsx
<MenuItem menuItem={item} />
```

#### 🛒 CartSidebar
Interface de gestion du panier avec calcul automatique du total
```jsx
<CartSidebar isCartOpen={isCartOpen} toggleCart={toggleCart} />
```

#### 🌙 Mode Sombre
Toggle automatique avec sauvegarde de préférence
```jsx
const [darkMode, setDarkMode] = useState(false);
```

## 🎨 Design System

### Palette de Couleurs
- **Primary**: `#ec2025` (Rouge signature)
- **Dark Mode**: Nuances de gris (`gray-700`, `gray-900`)
- **Backgrounds**: Blanc / Gris sombre
- **Text**: Gris adaptif selon le thème

### Responsive Design
- **Mobile First** - Design optimisé mobile
- **Breakpoints TailwindCSS** - `sm:`, `md:`, `lg:`
- **Grid System** - Layouts flexibles et adaptatifs

## 🛠️ Développement

### Structure des Composants
Chaque composant suit la structure :
```
ComponentName/
├── ComponentName.jsx    # Composant principal
└── index.js            # Export (optionnel)
```

### Conventions de Code
- **Naming**: PascalCase pour les composants
- **Props**: Destructuring avec valeurs par défaut
- **Styling**: Classes TailwindCSS avec responsive design
- **State**: Context API pour l'état global, useState pour l'état local

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request



## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👨‍💻 Auteur

**Développé avec ❤️ par YOUANDEU JOHANN**

- GitHub: [@votre-username](joshmaxcmr)
- LinkedIn: [Votre Profil](www.linkedin.com/in/johann-youandeu-8b1b26205)

---

<div align="center">

**⭐ N'hésitez pas à donner une étoile si ce projet vous a plu !**

</div>
