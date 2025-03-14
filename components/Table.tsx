import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import MiniChart from "./MiniChart";
import TradeActions from "./TradeActions";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FirebaseValueType } from "@/types";

interface TradingTableProps {
  listType: "hotList" | "newList";
  data: Record<string, FirebaseValueType> | null;
  loading: boolean;
}

export default function TradingTable({
  listType,
  data,
  loading,
}: TradingTableProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Trending Pairs</strong>
            </TableCell>
            <TableCell>
              <strong>Last Price</strong>
            </TableCell>
            <TableCell>
              <strong>24H Change</strong>
            </TableCell>
            <TableCell>
              <strong>Per Day Chart</strong>
            </TableCell>
            {!isMobile && (
              <TableCell>
                <strong>Actions</strong>
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={5}>Loading...</TableCell>
            </TableRow>
          ) : data ? (
            Object.entries(data).map(
              ([key, value]: [string, FirebaseValueType]) => (
                <TableRow
                  key={key}
                  style={{ cursor: isMobile ? "pointer" : "default" }}
                >
                  <TableCell>{value.pair}</TableCell>
                  <TableCell>${value.lastPrice}</TableCell>
                  <TableCell
                    style={{ color: value.change >= 0 ? "green" : "red" }}
                  >
                    {value.change}%
                  </TableCell>
                  <TableCell>
                    <MiniChart data={value.chartData} />
                  </TableCell>
                  {!isMobile && (
                    <TableCell>
                      <TradeActions listType={listType} id={key} />
                    </TableCell>
                  )}
                </TableRow>
              )
            )
          ) : (
            <TableRow>
              <TableCell colSpan={5}>No data available</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
