import apiClint from "./api.service";

export const AddBook = async (data) => {
  try {
    const result = await apiClint.post("/books/store", data);
    return result;
  } catch (error) {
    throw new Error("add book err");
  }
};

export const Update = async (id, data) => {
  try {
    if (!id) return;
    const result = await apiClint.put(`/books/edit/${id}`, data);
    return result;
  } catch (error) {
    throw new Error("update book err");
  }
};

export const Delete = async (id) => {
  try {
    if (!id) return;
    const result = await apiClint.delete(`/books/delete/${id}`);
    return result;
  } catch (error) {
    throw new Error("Delete book err");
  }
};

export const ListBooks = async () => {
  try {
    const result = await apiClint.get(`/books/`);
    return result;
  } catch (error) {
    throw new Error("ListBooks book err");
  }
};

export const ListBookByUser = async () => {
  try {
    const result = await apiClint.get(`/books/user`);
    return result;
  } catch (error) {
    throw new Error("ListBooks book err");
  }
};

export const Show = async (id) => {
  try {
    if (!id) return;
    const result = await apiClint.get(`/books/show/${id}`);
    return result;
  } catch (error) {
    throw new Error("show book err");
  }
};
