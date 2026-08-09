import { useEffect, useRef } from "react";
import type { Painting } from "../data/paintings";
import Styles from "./expanded-tile.module.css";

const DISPLAY_UNIT = "cm";
const CONVERSION_FACTORS = {
  cm: 1,
  in: 2.54,
};

const convertToDisplayDims = ({ height, width, unit }: Painting["dimensions"]) => {
  const factor = CONVERSION_FACTORS[unit] / CONVERSION_FACTORS[DISPLAY_UNIT];
  return {
    height: Math.round(height * factor),
    width: Math.round(width * factor),
    unit: DISPLAY_UNIT,
  };
};

function Dimensions({ dimensions }: Pick<Painting, "dimensions">) {
  const { height, width, unit } =
    dimensions.unit === DISPLAY_UNIT ? dimensions : convertToDisplayDims(dimensions);
  return (
    <div>
      <p>
        {height}x{width}
        {unit}
      </p>
    </div>
  );
}

export function ExpandedTile({
  title,
  dimensions,
  asset,
  material,
  year,
  onClose,
  onNext,
  onPrevious,
}: Painting & { onClose: () => void; onNext: () => void; onPrevious: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    dialog.showModal();

    const handleCancel = () => {
      onClose();
    };

    const handleKeys = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
          onNext();
          break;
        case "ArrowLeft":
          onPrevious();
          break;
      }
    };

    dialog.addEventListener("cancel", handleCancel);
    dialog.addEventListener("keydown", handleKeys);

    return () => {
      dialog.removeEventListener("cancel", handleCancel);
      dialog.removeEventListener("keydown", handleKeys);

      if (dialog.open) {
        dialog.close();
      }
    };
  }, [onClose, onPrevious, onNext]);

  const handleClose = () => {
    const dialog = dialogRef.current;

    if (dialog?.open) {
      dialog.close();
    }
    onClose();
  };
  return (
    <dialog ref={dialogRef} className={Styles.wrapper} aria-labelledby="painting-title">
      <figure>
        <img className={Styles.image} src={asset.image} alt={asset.alt} />
        <figcaption className={Styles.caption}>
          <h2 id="painting-title">
            {title}, {year}
          </h2>
          <p>{material}</p>
          <Dimensions dimensions={dimensions} />
        </figcaption>
      </figure>

      <div className={Styles.arrows}>
        <button
          className={Styles.previous}
          type="button"
          aria-label="View previous painting"
          onClick={onPrevious}
        >
          <span aria-hidden="true">←</span>
        </button>
        <button
          className={Styles.next}
          type="button"
          aria-label="View next painting"
          onClick={onNext}
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <button
        className={Styles.close}
        type="button"
        aria-label="close painting"
        onClick={handleClose}
      >
        close
      </button>
    </dialog>
  );
}
