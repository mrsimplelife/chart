import { Area, Bar, CartesianGrid, Cell, ComposedChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { Data } from '../domain/models/Data';
import CustomTooltip from './CustomTooltip';
import { DateUtils } from '../utils/DateUtils';
type ChartProps = {
  dataArray: Data[];
  highlightedID: string | null;
  setHighlightedID: React.Dispatch<React.SetStateAction<string | null>>;
};

function Chart({ dataArray, highlightedID, setHighlightedID }: ChartProps) {
  const handleBarClick = ({ id }: Data) => setHighlightedID(highlightedID === id ? null : id);

  return (
    <ComposedChart width={800} height={400} data={dataArray}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" tickFormatter={DateUtils.formatDate} interval={20} />
      <YAxis yAxisId="left" orientation="left" domain={[0, 200]} />
      <YAxis yAxisId="right" orientation="right" domain={[0, 20000]} />
      <Tooltip content={<CustomTooltip />} />
      <Bar yAxisId="right" dataKey="value_bar" fill="#82ca9d">
        {dataArray.map((entry, index) => (
          <Cell cursor="pointer" fill={entry.id === highlightedID ? '#000' : '#82ca9d'} key={`cell-${index}`} onClick={() => handleBarClick(entry)} />
        ))}
      </Bar>
      <Area yAxisId="left" type="monotone" dataKey="value_area" stroke="#8884d8" fill="#8884d8" />
      <Legend />
    </ComposedChart>
  );
}

export default Chart;
