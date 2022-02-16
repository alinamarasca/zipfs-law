import { createContext, useContext } from "react";

const StatsContext = createContext({
  stats: {},
  updateStats: () => {},
  chart: {},
  updateChart: () => {}
});

const AppContext = createContext(0);

export const AppProvider = AppContext.Provider;
export const AppConsumer = AppContext.Consumer;

// Hook for accessing the context value
export const useAppContext = () => {
  // No need to export AppContext if it is already included in the hook
  const appContext = useContext(AppContext);

  // Throw an error to warn other developers they can't use it outside an <AppProvider>
  if (!appContext) {
    throw new Error(
      "You can only use the useAppContext hook inside an AppProvider component"
    );
  }

  return appContext;
};

export default StatsContext;
