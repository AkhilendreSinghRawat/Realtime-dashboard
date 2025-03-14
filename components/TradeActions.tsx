import { Button } from "@mui/material";
import { deleteItem } from "@/lib/database";

export default function TradeActions({
  listType,
  id,
}: {
  listType: string;
  id: string;
}) {
  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => deleteItem(listType, id)}
      >
        Delete
      </Button>
    </>
  );
}
