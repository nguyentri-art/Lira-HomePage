export function animateCount(element, targetCount, duration) {
    let count = 0;
    const interval = duration / targetCount;
  
    function updateCount() {
      if (count < targetCount) {
        count += 1;
        element.textContent = count;
        setTimeout(updateCount, interval);
      } else {
        element.textContent = targetCount;
      }
    }
  
    updateCount();
  }