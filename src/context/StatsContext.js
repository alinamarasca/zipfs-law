import { createContext, useState } from "react";

const StatsContext = createContext({
  stats: {},
  updateStats: () => {}
});

export default StatsContext;
