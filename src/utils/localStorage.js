export const getCounterFromLocalStorage = () => {
  const storedCounter = localStorage.getItem("counter");
  return storedCounter ? parseInt(storedCounter, 10) : 0;
};

export const setCounterToLocalStorage = (counter) => {
  localStorage.setItem("counter", counter);
};
