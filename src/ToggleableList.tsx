import { Attack } from "./Pokemon";
import React from "react";

export interface ToggleableListProps {
  description: string;
  hidden: boolean;
  items: Attack[];
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
          {items.map(
            item =>
              item !== null && item.name && <li key={item.name}>{item.name}</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default ToggleableList;
