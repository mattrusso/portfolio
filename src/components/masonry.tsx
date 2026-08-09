import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

import type { Painting } from "../data/paintings";
import Styles from "./masonry.module.css";

type MasonryProps = {
  paintings: Painting[];
  gap?: number;
  renderItem: (painting: Painting, index: number) => ReactNode;
};

type Position = {
  x: number;
  y: number;
  width: number;
  height: number;
  track: "left" | "right";
};

const WIDTH = {
  portrait: { min: 0.32, max: 0.42 },
  landscape: { min: 0.42, max: 0.54 },
};

const SCALE = {
  referenceCm: 70,
  min: 0.85,
  max: 1.15,
};

function toCm(value: number, unit: Painting["dimensions"]["unit"]) {
  return unit === "in" ? value * 2.54 : value;
}

function getPhysicalScale(painting: Painting) {
  const { width, height, unit } = painting.dimensions;
  const longestEdge = Math.max(toCm(width, unit), toCm(height, unit));
  return Math.min(SCALE.max, Math.max(SCALE.min, Math.sqrt(longestEdge / SCALE.referenceCm)));
}

function seededRandom(seed: string) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return (Math.abs(hash) % 1000) / 1000;
}

const CENTER_GUTTER = 46;
const RIGHT_TRACK_OFFSET = 60;
const MOBILE_BREAKPOINT = 640;

export function Masonry({ paintings, gap = 110, renderItem }: MasonryProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [layout, setLayout] = useState<{ positions: Position[]; height: number }>({
    positions: [],
    height: 0,
  });

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const calculateLayout = () => {
      const containerWidth = container.clientWidth;
      if (!containerWidth) {
        return;
      }

      if (containerWidth < MOBILE_BREAKPOINT) {
        let y = 0;

        const positions: Position[] = paintings.map((painting) => {
          const { width, height } = painting.dimensions;
          const aspectRatio = width / height;

          const itemWidth = containerWidth * 0.88;
          const itemHeight = itemWidth / aspectRatio;
          const x = (containerWidth - itemWidth) / 2;

          const position: Position = { x, y, width: itemWidth, height: itemHeight, track: "left" };

          y += itemHeight + gap * 0.6;

          return position;
        });

        setLayout({ positions, height: y - gap * 0.6 });
        return;
      }

      const leftInnerEdge = containerWidth / 2 - CENTER_GUTTER / 2;
      const rightInnerEdge = containerWidth / 2 + CENTER_GUTTER / 2;
      const safeMaxWidthPct = leftInnerEdge / containerWidth;
      const trackHeight = { left: 0, right: RIGHT_TRACK_OFFSET };

      const positions: Position[] = paintings.map((painting) => {
        const { width, height } = painting.dimensions;
        const aspectRatio = width / height;

        const range = aspectRatio >= 1.05 ? WIDTH.landscape : WIDTH.portrait;
        const rangeMax = Math.min(range.max, safeMaxWidthPct);
        const rangeMin = Math.min(range.min, rangeMax);

        const physicalScale = getPhysicalScale(painting);
        const randomSpread = seededRandom(painting.id);
        const widthPct = Math.min(
          rangeMax,
          Math.max(rangeMin, (rangeMin + randomSpread * (rangeMax - rangeMin)) * physicalScale),
        );
        const itemWidth = containerWidth * widthPct;
        const itemHeight = itemWidth / aspectRatio;
        const track: "left" | "right" = trackHeight.left <= trackHeight.right ? "left" : "right";
        const x = track === "left" ? leftInnerEdge - itemWidth : rightInnerEdge;
        const y = trackHeight[track];
        const jitter = gap * 0.6 * seededRandom(painting.id + "-gap");
        trackHeight[track] = y + itemHeight + gap + jitter;

        return { x, y, width: itemWidth, height: itemHeight, track };
      });

      setLayout({
        positions,
        height: Math.max(trackHeight.left, trackHeight.right) - gap,
      });
    };

    calculateLayout();

    const observer = new ResizeObserver(calculateLayout);
    observer.observe(container);

    return () => observer.disconnect();
  }, [paintings, gap]);

  return (
    <div ref={containerRef} className={Styles.masonry} style={{ height: layout.height }}>
      {paintings.map((painting, index) => {
        const position = layout.positions[index];

        if (!position) {
          return null;
        }

        return (
          <div
            key={painting.id}
            className={Styles.item}
            data-track={position.track}
            style={{
              width: position.width,
              height: position.height,
              transform: `translate3d(
                  ${position.x}px,
                  ${position.y}px,
                  0
                )`,
            }}
          >
            {renderItem(painting, index)}
          </div>
        );
      })}
    </div>
  );
}
