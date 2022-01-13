const counters = document.querySelectorAll(".counter");
console.log(counters);

counters.forEach((counter) => {
  counter.innerHTML = 0;

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    // + is unary operator used to convert string into number
    console.log(target);

    const startCounter = Number(counter.innerHTML);

    const increment = target / 100;
    if (startCounter < target) {
      counter.innerHTML = `${startCounter + increment}`;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerHTML = target;
    }
  };

  updateCounter();
});
