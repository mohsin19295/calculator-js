let res = document.getElementById("input");

const calculate = (n) => {
  res.value += n;
};

const totalResult = () => {
  try {
    res.value = eval(res.value);
  } catch (error) {
    alert("Invalid Input");
  }
};

const clearAll = () => {
  res.value = "";
};

const eraseSingleDigit = () => {
  res.value = res.value.slice(0, -1);
};
