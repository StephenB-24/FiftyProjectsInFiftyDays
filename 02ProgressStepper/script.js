const circles = document.querySelectorAll('.circle');

// When the #next button is clicked
next.addEventListener('click', () => {
  let currentActive = null;
  let totalActive = 0;

  // Get the current active circle
  circles.forEach((circle, idx) => {
    if (circle.classList.contains('active')) {
      currentActive = circle;
      totalActive++;
    }
  });

  if (totalActive === circles.length - 1) {
    next.disabled = true;
  }

  progress.style.width = `${((totalActive)/(circles.length-1))*100}%`;
  currentActive.nextElementSibling.classList.add('active');
  prev.disabled = false;
});

prev.addEventListener('click', () => {
  let currentActive = null;
  let totalActive = 0;

  circles.forEach((circle, idx) => {
    if (circle.classList.contains('active')) {
      currentActive = circle;
      totalActive++;
    }
  });

  if (totalActive === 2) {
    prev.disabled = true;
  }

  progress.style.width = `${((totalActive-2)/(circles.length-1))*100}%`;
  currentActive.classList.remove('active');
  next.disabled = false;
});
