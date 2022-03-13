const groupObjectsBy = function (arr, cri) {
  let answ = {};
  arr.forEach((element) => {
    const newe = arr.filter((e) => e[cri] === element[cri]);
    answ[element[cri]] = newe;
  });
  return answ;
};

groupObjectsBy(
  [
    {
      channel: "A",
      name: "shoe",
    },
    {
      channel: "A",
      name: "electronics",
    },
    {
      channel: "B",
      name: "apparel",
    },
    {
      channel: "C",
      name: "electronics",
    },
  ],
  "channel"
);
