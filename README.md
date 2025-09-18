# Proyecto Final - Vurger (React + Firebase)

## Descripción
E-commerce de ejemplo con React, React Router, Context API y Firebase Firestore.

## Funcionalidades
- Listado de productos y filtro por categorías.
- Vista detalle con selección de cantidad (ItemCount).
- Carrito global (Context) con acumulación de cantidades.
- Checkout que genera orden (Firestore).
- Navegación SPA con NavBar y NavLink.

## Quick start
1. `npm install`
2. Crear `.env` con configuración de Firebase (o usar `src/utils/firebase.js`)
3. `npm start`

## Estructura
- `src/components` — componentes UI (NavBar, ProductCard, CartWidget, etc.)
- `src/pages` — contenedores / páginas (ItemListContainer, ItemDetailContainer, Checkout)
- `src/context` — CartContext
- `src/services` — servicios para Firestore