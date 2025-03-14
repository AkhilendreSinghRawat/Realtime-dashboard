import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function MiniChart({
  data,
}: {
  data: { time: string; price: number }[];
}) {
  const isUptrend =
    data?.length > 1 && data[0].price < data[data.length - 1].price;
  const color = isUptrend ? "#00C853" : "#D32F2F";
  const gradientId = `gradient-${Math.random()}`;

  return (
    <ResponsiveContainer width={100} height={40}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={0.6} />
            <stop offset="100%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="price"
          stroke={color}
          fill={`url(#${gradientId})`}
          strokeWidth={2}
        />
        <XAxis dataKey="time" hide />
        <YAxis hide />
        <Tooltip />
      </AreaChart>
    </ResponsiveContainer>
  );
}
