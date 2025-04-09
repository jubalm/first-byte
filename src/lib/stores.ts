import { map } from "nanostores"

type UIState = {
  darkMode: boolean
}

export const $ui = map<UIState>({
  darkMode: false
})

if (typeof window !== "undefined") {
  const restoreUiStateFromLocalStorage = () => {
    const savedState = localStorage.getItem("uiState");
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      $ui.set(parsedState);
    }
  };

  restoreUiStateFromLocalStorage();

  $ui.listen((state) => {
    localStorage.setItem("uiState", JSON.stringify(state));
  });
}

export const toggleDarkMode = () => {
  $ui.setKey("darkMode", !$ui.get().darkMode)
  document.body.classList.toggle("dark", $ui.get().darkMode)
}
