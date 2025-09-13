import { getDocs, collection } from "firebase/firestore";
import { db } from "../utils/firebase";

const getAll = async () => {
  try {
    const ref = collection(db, "products");
    const querySnapshot = await getDocs(ref);

    const products = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        category: Array.isArray(data.category) ? data.category : [data.category || "uncategorized"],
      };
    });

    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const products = { getAll };
