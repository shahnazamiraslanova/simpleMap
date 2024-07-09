const colors = {
  2: "#90C474",
  3: "#D2DF8A",
  4: "#EFDB85",
  5: "#F19CC2",
  6: "#F8CCDD",
  7: "#F19CC2",
  8: "#B7D172",
  9: "#F2BF5F",
  10: "#9BA8D5",
  12: "#0574BA",
  13: "#F19CC2",
  14: "#DDE38A",
  15: "#F2D974",
  17: "#DBE390"
};

document.addEventListener('DOMContentLoaded', () => {
  const clickableAreas = document.querySelectorAll('.clickable-area');
  let currentHighlightedElement = null;
  const infoBox = document.getElementById('info-box');

  clickableAreas.forEach(area => {
    area.addEventListener('click', (event) => {
      event.preventDefault();
      const id = area.getAttribute('data-id');
      const element = document.querySelector(`.clickable-area[data-id='${id}']`);

      if (element && id) {
        if (currentHighlightedElement && currentHighlightedElement !== element) {
          resetElement(currentHighlightedElement);
        }

        highlightElement(element, id);

        currentHighlightedElement = element;

        showInfoBox(element);
        console.log(`Clicked area with ID: ${id}, original color: #E9F5FF`);
      }
    });
  });

  function highlightElement(element, id) {
    const originalColor = '#E9F5FF'; 
    const shadowColor = '#0005185';

    element.style.fill = colors[id];
    element.style.filter = `drop-shadow(0 0 10px ${shadowColor})`;
    element.style.transform = 'translate(2px, -2px)';
  }

  function resetElement(element) {
    element.style.fill = '#E9F5FF'; 
    element.style.filter = 'none';
    element.style.transform = 'none';
    hideInfoBox();
  }

  function showInfoBox(element) {
    infoBox.style.display = 'block';
    infoBox.style.top = `${element.getBoundingClientRect().top + element.getBoundingClientRect().height}px`;
    infoBox.style.left = `${element.getBoundingClientRect().left}px`;
  }

  function hideInfoBox() {
    infoBox.style.display = 'none';
  }
});