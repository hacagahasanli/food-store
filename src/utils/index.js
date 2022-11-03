// If Variable Smaller Than 0 Equal To 0
export const ifNegativeMakeZero = (value) => {
  value = value < 0 ? 0 : value;
  return value;
};

//Creating Unique ID for ORDERED ITEM
export const uniqueIdMaker = () => {
  return Math.floor(100000 + Math.random() * 900000);
};


