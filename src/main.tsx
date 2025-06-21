import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { registerServiceWorker, promptForUpdate } from "./lib/serviceWorker";
import { markPerformance } from "./lib/performance";

// Mark performance timing for app initialization
markPerformance('app-init-start');

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

markPerformance('app-init-end');

// Register service worker for performance caching
if (process.env.NODE_ENV === 'production') {
  registerServiceWorker({
    onSuccess: () => {
      console.log('App is ready for offline use');
    },
    onUpdate: (registration) => {
      console.log('New app version available');
      // Optionally prompt user to update
      promptForUpdate(registration);
    },
    onOfflineReady: () => {
      console.log('App is ready to work offline');
    }
  });
}
