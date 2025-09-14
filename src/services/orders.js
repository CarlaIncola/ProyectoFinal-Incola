// src/services/orders.js
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../utils/firebase";

export const createOrder = async (order) => {
  try {
    const docRef = await addDoc(collection(db, "orders"), {
      ...order,
      date: serverTimestamp(),
    });
    return docRef.id; // devuelve el id de la orden
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};
