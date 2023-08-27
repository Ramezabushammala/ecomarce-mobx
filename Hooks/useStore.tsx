
import {RootStoreContext}  from "../store";


if (process.env.NODE_ENV === "development") {
    const { enableLogging } = require("mobx-logger");
    enableLogging();
  }
  
  // custom hook to acces store
  export const useStore = () => (RootStoreContext);