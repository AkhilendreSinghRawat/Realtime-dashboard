import { useState, useEffect } from "react";
import { database } from "../lib/firebase";
import { ref, onValue } from "firebase/database";
import { FirebaseValueType } from "@/types";

export function useRealtimeData(path: string) {
  const [data, setData] = useState<Record<string, FirebaseValueType> | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dbRef = ref(database, path);
    const unsubscribe = onValue(dbRef, (snapshot) => {
      setData(snapshot.val());
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, [path]);

  return { data, loading };
}
