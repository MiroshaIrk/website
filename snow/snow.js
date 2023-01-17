const createSnow = (min, max, saturation) => {
  const style = document.createElement('style');
  
  style.textContent = `
    body {
      position: relative;
    }

    .snow {
      position: fixed;
      width: 30px;
      height: 30px;
      top: -30px;
      background-repeat: no-repeat;
      z-index: 9999;
      animation-name: fall;
      pointer-events: none;
      animation-timing-function: linear;
      background-position: center;
    }

    @keyframes fall {
      100% {
        transform: translateY(105vh);
      }
    }
    `;
    
    document.body.append(style);

  let start = 1;
  const count = 4;

  const createSnowItem = () => {
    const snowItem = document.createElement('div');
    let timeAnimation = Math.floor(Math.random() * (max - min + 1)) + min;

    snowItem.classList.add('snow');

    snowItem.style.cssText = `
      left: ${Math.random() * document.documentElement.clientWidth}px;
      background-image: url('./snow/snowflake${start}.svg');
      animation-duration: ${timeAnimation}s;
    `;

    document.body.append(snowItem);

    if(start === count) {
      start = 1;
    } else {
      start++;
    }

    setTimeout(() => {
      snowItem.remove();
    }, (timeAnimation * 1000));

  };

  setInterval(createSnowItem, (1000 / saturation));
};

// createSnow(10, 5, 10);