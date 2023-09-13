type CustomTooltipProps = {
  active?: boolean;
  payload?: any;
  label?: string;
};

function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`지역: ${payload[0].payload.id}`}</p>
        <p className="desc">{`Value Area: ${payload[0].value}`}</p>
        <p className="desc">{`Value Bar: ${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
}

export default CustomTooltip;
