export const getSelected = (select) => {
  return select.options[select.selected];
};

export const calculateAmount = (FIATAmount, rate) => {
  if (!rate) {
    return FIATAmount;
  }

  const rawAmount = FIATAmount / rate;

  return Math.round(rawAmount * 100000) / 100000;
};
