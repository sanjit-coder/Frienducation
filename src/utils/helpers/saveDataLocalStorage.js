//FUNCTION TO SAVE DATA IN LOCAL STORAGE
const saveDataLocalStorage = (key, value) => {
  if (typeof window !== undefined) {
    window.localStorage.setItem(key, value);
  }
};

export default saveDataLocalStorage;
