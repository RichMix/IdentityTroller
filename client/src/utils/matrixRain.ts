export function createMatrixRain(container: HTMLElement) {
  const chars = 'アカサタナハマヤラワガザダバパイキシチニヒミリヰギジヂビピウクスツヌフムユルグズヅブプエケセテネヘメレヱゲゼデベペオコソトノホモヨロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  for (let i = 0; i < 50; i++) {
    const char = document.createElement('div');
    char.className = 'matrix-char';
    char.textContent = chars[Math.floor(Math.random() * chars.length)];
    char.style.left = Math.random() * 100 + '%';
    char.style.animationDelay = Math.random() * 20 + 's';
    char.style.animationDuration = (Math.random() * 10 + 10) + 's';
    container.appendChild(char);
  }

  // Periodically add new characters
  setInterval(() => {
    if (container.children.length < 100) {
      const char = document.createElement('div');
      char.className = 'matrix-char';
      char.textContent = chars[Math.floor(Math.random() * chars.length)];
      char.style.left = Math.random() * 100 + '%';
      char.style.animationDuration = (Math.random() * 10 + 10) + 's';
      container.appendChild(char);
      
      // Remove after animation
      setTimeout(() => {
        if (char.parentNode) {
          char.parentNode.removeChild(char);
        }
      }, 20000);
    }
  }, 2000);
}
