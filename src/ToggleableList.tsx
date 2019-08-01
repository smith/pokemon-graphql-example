import React from "react";

export interface ToggleableListProps {
  description: string;
  hidden: boolean;
  items: string[];
  onChange: () => void;
}

export const ToggleableList: React.FunctionComponent<ToggleableListProps> = ({
  description,
  hidden,
  items,
  onChange
}) => {
  return (
    <div className="ToggleableList">
      <button onClick={onChange}>
        {hidden ? "Show" : "Hide"} {description}
      </button>

      {!hidden && (
        <ul>
          {items.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ToggleableList;
