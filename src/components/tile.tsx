import type { Painting } from "../data/paintings";
import Styles from "./tile.module.css";

export function Tile({ title, asset, onClick }: Painting & { onClick: () => void }) {
  return (
    <div key={asset.thumbnail} className={Styles.tile}>
      <button type="button" aria-label={`View ${title}`} onClick={onClick}>
        <img src={asset.thumbnail} alt={asset.alt} />
      </button>
    </div>
  );
}
