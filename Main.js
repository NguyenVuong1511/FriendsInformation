document.getElementById('next').addEventListener('click', function() {
  let slide = document.getElementById('slide');
  let firstItem = slide.querySelector('.items');

  if (firstItem) {
    slide.appendChild(firstItem);
  }
});

document.getElementById('prev').addEventListener('click', function() {
  let slide = document.getElementById('slide');
  let items = slide.querySelectorAll('.items');
  let lastItem = items[items.length - 1];

  if (lastItem) {
    slide.prepend(lastItem);
  }
});
