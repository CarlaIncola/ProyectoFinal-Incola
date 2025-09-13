import { getDocs, collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { db } from "../utils/firebase";

const getAll = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
  
      const products = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
  
      console.log("Productos desde Firebase:", products); // 👀 debug
      return products;
    } catch (error) {
      console.error("Error al obtener productos:", error);
      throw error;
    }
  };
  

const add = async (newProduct) => {



}

const update = (value) => {



}

const getById = (id) => {


    
}

const remove = (id) => {


    
}

export const products = { getAll , getById , update, remove }