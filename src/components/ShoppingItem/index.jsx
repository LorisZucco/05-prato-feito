import "./shopping-item.css";

import { Check } from "lucide-react";

import { formatQuantity } from "../../utils/format";

export default function ShoppingItem({ item, checked, onToggle }) {
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => onToggle(item.key)}
        />
        <span className="check">
          <Check size={14} strokeWidth={3} />
        </span>
        <span className="item-name">{item.name}</span>
      </label>

      <span className="qty">{formatQuantity(item.quantity, item.unit)}</span>
    </li>
  );
}
