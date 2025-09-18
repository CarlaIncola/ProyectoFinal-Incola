import { doc, getDoc, getDocs, collection } from "firebase/firestore";
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

const getById = async (id) => {
  try {
    const docRef = doc(db, "products", id);
    const snap = await getDoc(docRef);
    if (!snap.exists()) return null;
    const data = snap.data();
    return { id: snap.id, ...data, category: Array.isArray(data.category) ? data.category : [data.category || "uncategorized"] };
  } catch (err) {
    console.error("Error getById:", err);
    return null;
  }
};

export const products = { getAll, getById };
