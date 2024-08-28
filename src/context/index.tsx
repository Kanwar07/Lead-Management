"use client";

import { createContext, useContext, useState } from "react";

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  let [file, setfile] = useState("");
  let [leadslength, setleadslength] = useState();
  let [leads, setleads] = useState([]);

  return (
    <AppContext.Provider
      value={{ file, setfile, leadslength, setleadslength, leads, setleads }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
