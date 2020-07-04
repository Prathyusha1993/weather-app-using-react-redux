let p = new Promise((resolve, reject) => {
  let rank = 1;
  if (rank == 1) {
    resolve("scooter");
  } else if (rank == 2) {
    resolve("cycle");
  } else if (rank == 3) {
    resolve("cycle");
  } else {
    reject("failed");
  }
});

p.then((gift) => {
  console.log("show to friends --> " + gift);
  const originalift = gift;
  gift = "broken1";
  if (gift === "broken") {
    return Promise.reject("broken " + originalift);
  }
  return originalift;
})
  .then((gift) => {
    console.log("show to relatives --> " + gift);
    const originalift = gift;
    gift = "broken";
    if (gift === "broken") {
      return Promise.reject("broken " + originalift);
    }
    return originalift;
  })
  .catch((noGift) => {
    console.log("I will cry --> " + noGift);
  });
