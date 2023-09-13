import { useState } from 'react';

import mockData from './mock_data.json';
import Button from './components/Button';
import Chart from './components/Chart';

const dataArray = Object.entries(mockData.response).map(([key, value]) => ({
  date: key,
  ...value,
}));

function App() {
  const [highlightedID, setHighlightedID] = useState<string | null>(null);

  return (
    <div>
      <Button dataArray={dataArray} highlightedID={highlightedID} setHighlightedID={setHighlightedID} />
      <Chart dataArray={dataArray} highlightedID={highlightedID} setHighlightedID={setHighlightedID} />
    </div>
  );
}

export default App;
