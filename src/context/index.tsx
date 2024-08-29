"use client";

import { createContext, use, useContext, useState } from "react";

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  let [file, setfile] = useState("");
  let [leadslength, setleadslength] = useState();
  let [leads, setleads] = useState([]);
  let [open, setOpen] = useState(false);
  let [invalidleads, setinvalidleads] = useState(0);

  return (
    <AppContext.Provider
      value={{
        file,
        setfile,
        leadslength,
        setleadslength,
        leads,
        setleads,
        open,
        setOpen,
        invalidleads,
        setinvalidleads,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
