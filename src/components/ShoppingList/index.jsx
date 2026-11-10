import "./shopping-list.css";

import { ShoppingBasket } from "lucide-react";

import ShoppingItem from "../ShoppingItem";

import { aisles } from "../../utils/shopping";

export default function ShoppingList({ items }) {
  // A2: os comprados viram estado guardado
  const bought = [];

  const doneCount = items.filter((item) => bought.includes(item.key)).length;
  const itemsLabel = items.length == 1 ? "item" : "itens";

  return (
    <>
      <aside className="shopping" id="lista" aria-labelledby="shopping-title">
        <div className="section-head">
          <h2 id="shopping-title">Lista de compras</h2>
          <p className="hint">
            {items.length == 0
              ? "Nenhum item"
              : `${items.length} ${itemsLabel} · ${doneCount} ${doneCount == 1 ? "comprado" : "comprados"}`}
          </p>
        </div>

        <progress
          className="progress"
          aria-label="Itens comprados"
          value={doneCount}
          max={items.length == 0 ? 1 : items.length}
        ></progress>

        {items.length == 0 ? (
          <div className="empty">
            <div className="empty-plate" aria-hidden="true"></div>
            <strong>Nada para comprar ainda</strong>
            <p>
              Marque os dias em uma receita e os ingredientes aparecem aqui, já
              somados.
            </p>
          </div>
        ) : (
          aisles.map((aisle) => {
            const aisleItems = items.filter((item) => item.aisle == aisle);

            if (aisleItems.length == 0) return null;

            return (
              <section key={aisle} className="aisle">
                <h3>{aisle}</h3>
                <ul>
                  {aisleItems.map((item) => (
                    <ShoppingItem
                      key={item.key}
                      item={item}
                      checked={bought.includes(item.key)}
                      onToggle={() => {}}
                    />
                  ))}
                </ul>
              </section>
            );
          })
        )}
      </aside>

      <a className="list-bar" href="#lista">
        <span>
          <ShoppingBasket size={20} />
          Ver lista de compras
        </span>
        <span className="count">
          {items.length} {itemsLabel}
        </span>
      </a>
    </>
  );
}
