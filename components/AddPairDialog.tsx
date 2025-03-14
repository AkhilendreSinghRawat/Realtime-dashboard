import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import { addItem } from "@/lib/database";

export default function AddPairDialog({
  open,
  onClose,
  listType,
}: {
  open: boolean;
  onClose: () => void;
  listType: string;
}) {
  const [newPair, setNewPair] = useState({
    pair: "",
    lastPrice: "",
    change: "",
  });

  const handleAddNewPair = () => {
    if (!newPair.pair || !newPair.lastPrice || !newPair.change) return;

    const lastPrice = parseFloat(newPair.lastPrice);
    const change = parseFloat(newPair.change);
    const isPositive = change >= 0; // Determine chart trend direction

    const formattedPair = {
      ...newPair,
      lastPrice,
      change,
      chartData: generateRandomChartData(isPositive, lastPrice),
    };

    addItem(listType, formattedPair);
    onClose();
    setNewPair({ pair: "", lastPrice: "", change: "" });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Pair</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Pair"
          value={newPair.pair}
          onChange={(e) => setNewPair({ ...newPair, pair: e.target.value })}
        />
        <TextField
          fullWidth
          label="Last Price"
          type="number"
          value={newPair.lastPrice}
          onChange={(e) =>
            setNewPair({ ...newPair, lastPrice: e.target.value })
          }
        />
        <TextField
          fullWidth
          label="24H Change (%)"
          type="number"
          value={newPair.change}
          onChange={(e) => setNewPair({ ...newPair, change: e.target.value })}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleAddNewPair} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const generateRandomChartData = (isPositive: boolean, basePrice: number) => {
  let price = basePrice;
  return Array.from({ length: 20 }, (_, i) => {
    const changeFactor = (Math.random() - 0.4) * 2; // Random fluctuation
    price += isPositive ? Math.abs(changeFactor) : -Math.abs(changeFactor); // Ensure correct direction

    return {
      time: `${i}:00`,
      price: Math.max(1, parseFloat(price.toFixed(2))), // Ensure price stays above 1
    };
  });
};
