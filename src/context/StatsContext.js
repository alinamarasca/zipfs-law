import { createContext } from "react";

const StatsContext = createContext({
  stats: {},
  updateStats: () => {},
  chart: {},
  updateChart: () => {}
});

export default StatsContext;
