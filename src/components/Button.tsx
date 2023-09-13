import { Data } from '../domain/models/Data';

type ButtonProps = {
  dataArray: Data[];
  highlightedID: string | null;
  setHighlightedID: React.Dispatch<React.SetStateAction<string | null>>;
};

function Button({ dataArray, highlightedID, setHighlightedID }: ButtonProps) {
  return (
    <div>
      {Array.from(new Set(dataArray.map((item) => item.id))).map((id) => (
        <button
          key={id}
          onClick={() => setHighlightedID(highlightedID === id ? null : id)}
          style={{
            margin: '10px',
            backgroundColor: highlightedID === id ? 'lightblue' : 'white',
          }}
        >
          {id}
        </button>
      ))}
    </div>
  );
}

export default Button;
