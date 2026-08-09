import { useReducer, useEffect } from "react";
import { paintings } from "./data/paintings.ts";
import { Tile } from "./components/tile.tsx";
import { ExpandedTile } from "./components/expanded-tile.tsx";
import { Masonry } from "./components/masonry.tsx";
import { Modal } from "./components/modal.tsx";
import Styles from "./app.module.css";

type ContextState = {
  selectedIndex: number | null;
  info: "statement" | "bio" | null;
};

type Action =
  | { type: "open-info"; info: "statement" | "bio" }
  | { type: "close-info" }
  | { type: "open-painting"; index: number }
  | { type: "close-painting" }
  | { type: "next-painting" }
  | { type: "previous-painting" };

function reducer(state: ContextState, action: Action): ContextState {
  switch (action.type) {
    case "open-info":
      return { ...state, info: action.info };
    case "close-info":
      return { ...state, info: null };
    case "open-painting":
      return { ...state, selectedIndex: action.index };
    case "close-painting":
      return { ...state, selectedIndex: null };
    case "next-painting":
      if (state.selectedIndex === null) {
        return state;
      }
      return {
        ...state,
        selectedIndex: (state.selectedIndex + 1) % paintings.length,
      };
    case "previous-painting":
      if (state.selectedIndex === null) {
        return state;
      }
      return {
        ...state,
        selectedIndex: (state.selectedIndex - 1 + paintings.length) % paintings.length,
      };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    info: null,
    selectedIndex: null,
  });

  useEffect(() => {
    const isOpen = state.info !== null || state.selectedIndex !== null;
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [state.info, state.selectedIndex]);
  return (
    <>
      <header
        className={`${Styles.header} ${(state.info ?? state.selectedIndex ?? false) ? Styles.contentOpen : ""}`}
      >
        <h1>Matt Russo</h1>
        <div>
          <button
            className={Styles.infoButton}
            onClick={() => dispatch({ type: "open-info", info: "statement" })}
          >
            Statement
          </button>
          <button
            className={Styles.infoButton}
            onClick={() => dispatch({ type: "open-info", info: "bio" })}
          >
            Bio
          </button>
        </div>
      </header>
      <main
        className={
          state.info || typeof state.selectedIndex === "number" ? Styles.contentOpen : undefined
        }
      >
        <Masonry
          paintings={paintings}
          gap={72}
          renderItem={(painting, index) => (
            <Tile {...painting} onClick={() => dispatch({ type: "open-painting", index })} />
          )}
        />
      </main>
      {typeof state.selectedIndex === "number" && paintings[state.selectedIndex] && (
        <ExpandedTile
          {...paintings[state.selectedIndex]}
          onNext={() => dispatch({ type: "next-painting" })}
          onPrevious={() => dispatch({ type: "previous-painting" })}
          onClose={() => dispatch({ type: "close-painting" })}
        />
      )}
      {state.info && (
        <Modal
          title={state.info === "statement" ? "Statement" : "Bio"}
          onClose={() => dispatch({ type: "close-info" })}
        >
          {state.info === "statement" ? (
            <>
              <p>
                The paintings I create are small fantasies, moments akin to daydreams and getting
                lost in thought. A viewer might assume that the works are intimate portraits of
                close friends or romantic partners, as is common in figurative painting or
                portraiture, but the figures are strangers, anonymous people mostly encountered
                online in passing.
              </p>
              <p>
                I take these strangers and place them in imagined encounters, transforming the
                original image into someone who only exists within the world of the painting. I want
                to create familiarity and intimacy between the viewer and the subject, often
                altering the gaze to look directly at the viewer. I want the viewer to ask
                themselves: “What have I walked into? What does this person want from me, and what
                do I want from them?”
              </p>
            </>
          ) : (
            <p>Matt Russo is a painter based in Amsterdam.</p>
          )}
        </Modal>
      )}
    </>
  );
}

export default App;
