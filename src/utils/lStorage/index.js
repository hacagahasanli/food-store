// Get Any Setted Item From Locale Storage
export const getLocaleStorage = (lStorageName) => {
  const value = JSON.parse(localStorage.getItem(lStorageName));
  return value;
};

// Set Any Element To Locale Storage
export const setLocaleStorage = (lStorageName, value) => {
  localStorage.setItem(lStorageName, JSON.stringify(value));
};

