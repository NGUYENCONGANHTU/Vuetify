import { defineStore } from "pinia";
import {
  ListBooks,
  ListBookByUser,
  AddBook,
  Delete,
  Show,
  Update,
} from "@/service/books.service";
// import { KEY } from "@/lib/key-data";
// import FetchData from "@/lib/localStorage";

export const useNoteStore = defineStore("noteStore", {
  state: () => ({
    books: [],
    book: {},
    boosUser: [],
    itemIdEdit: "",
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
    async fetchBooks() {
      const res = await ListBooks();
      this.books = res.data;
    },

    setItemEdit(id) {
      console.log(id);
      this.itemIdEdit = id;
    },

    async fetchUserBooks() {
      const res = await ListBookByUser();
      this.boosUser = res.data;
    },
    async addBook(note) {
      const result = await AddBook(note);
      this.boosUser.unshift(result.data);
      this.books.unshift(result.data);
    },
    async deleteBook(id) {
      this.boosUser = this.boosUser.filter((note) => note.id !== id);
      this.books = this.books.filter((note) => note.id !== id);
      await Delete(id);
    },

    async update(id, data) {
      const updateData = await Update(id, data);
      const index = this.books.findIndex((item) => item.id == id);
      if (index - 1) {
        this.books[index] = updateData.data;
      }
      const indexBookUser = this.boosUser.findIndex((item) => item.id == id);
      if (indexBookUser - 1) {
        this.books[indexBookUser] = updateData.data;
      }
    },
    async show(id) {
      const result = await Show(id);
      this.book = result;
    },
    searchName(name) {
      this.boosUser = this.boosUser.filter((n) => n.name == name);
    },
  },
});
