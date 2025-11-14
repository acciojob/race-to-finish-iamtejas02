Promise.any(window.promises)
  .then((value) => {
    document.getElementById('output').textContent = value; // fulfills with first fulfilled value [web:1]
  })
  .catch((err) => {
    // only runs if all promises reject (AggregateError)
    document.getElementById('output').textContent = `All failed: ${err}`;
  });