import { ref, set, push, get, update, remove } from "firebase/database";
import { database } from "./firebase";
import { FirebaseValueType } from "@/types";

// Function to add data
export const addItem = async (path: string, data: FirebaseValueType) => {
  const newRef = push(ref(database, path));
  await set(newRef, data);
};

// Function to get data
export const getData = async (path: string) => {
  const snapshot = await get(ref(database, path));
  return snapshot.exists() ? snapshot.val() : null;
};

// Function to update data
export function updateItem(
  path: string,
  key: string,
  newData: FirebaseValueType
) {
  return update(ref(database, `${path}/${key}`), newData);
}

// Function to delete data
export const deleteItem = async (path: string, key: string) => {
  await remove(ref(database, `${path}/${key}`));
};
