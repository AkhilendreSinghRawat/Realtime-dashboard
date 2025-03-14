"use client";

import { useState } from "react";
import { useRealtimeData } from "@/hooks/useRealtimeData";
import { Button, Tabs, Tab } from "@mui/material";
import AddPairDialog from "../../components/AddPairDialog";
import TradingTable from "../../components/Table";

export default function TradingListsComponent() {
  const { data: hotList, loading: hotListLoading } = useRealtimeData("hotList");
  const { data: newList, loading: newListLoading } = useRealtimeData("newList");

  const [listType, setListType] = useState<"hotList" | "newList">("hotList");
  const [openAddDialog, setOpenAddDialog] = useState(false);

  const selectedList = listType === "hotList" ? hotList : newList;
  const loading = listType === "hotList" ? hotListLoading : newListLoading;

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">
        Catch your next trading opportunity
      </h1>
      <div className="bg-gray-200">
        {/* Tabs for Switching Lists */}
        <Tabs
          value={listType}
          onChange={(_, newValue) => setListType(newValue)}
          slotProps={{
            indicator: { sx: { backgroundColor: "green" } },
          }}
          textColor="inherit"
          sx={{
            "& .MuiTab-root": { color: "green" },
            "& .Mui-selected": { color: "green", fontWeight: "bold" },
          }}
        >
          <Tab label="Hot List" value="hotList" />
          <Tab label="New List" value="newList" />
        </Tabs>
      </div>

      {/* Table Component */}
      <TradingTable listType={listType} data={selectedList} loading={loading} />

      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpenAddDialog(true)}
      >
        Add new Data
      </Button>
      {/* Add Pair Dialog */}
      <AddPairDialog
        open={openAddDialog}
        onClose={() => setOpenAddDialog(false)}
        listType={listType}
      />
    </div>
  );
}
