"use client";

import { createContext, useContext, useState } from "react";

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  let [name, setname] = useState("Anmol");

  return (
    <AppContext.Provider value={{ name, setname }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
