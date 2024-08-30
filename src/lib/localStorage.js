class LocalStorage {
  add(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  all(key) {
    return localStorage.getItem(key);
  }

  delete(key) {
    localStorage.removeItem(key);
  }
}
export default new LocalStorage();
