import { defineStore } from "pinia";
// import { KEY } from "@/lib/key-data";
// import FetchData from "@/lib/localStorage";

export const useNoteStore = defineStore("noteStore", {
  state: () => ({
    // notes: FetchData.all(KEY.key)
    //   ? JSON.parse(FetchData.all(KEY.key)).length
    //   : [],
    // name: "Notes",
    notes: [],
  }),
  getters: {
    noteCount(state) {
      return state.notes.length;
    },
    formatDate() {
      const currentDate = new Date();
      const date = currentDate.toLocaleDateString("vi-VN");
      const time = currentDate.toLocaleTimeString("vi-VN");
      return `${time} - ${date}`;
    },
  },
  actions: {
    addNote(note) {
      this.notes.unshift(note);
      // FetchData.add(KEY.key, this.notes);
    },
    deleteNote(id) {
      this.notes = this.notes.filter((note) => note.id !== id);
    },
    searchName(name) {
      this.notes = this.notes.f((n) => n.name == name);
    },
  },
});
