import { defineStore } from "pinia";
import sourceData from "@/data.json";
export const useData = defineStore({
  id: "source",
  state: () => {
    return {
      data: sourceData,
    };
  },
});
