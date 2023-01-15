const createGarland = () => {
  const garland = document.createElement('div');
  const style = document.createElement('style');

  garland.classList.add('garland', 'garland_one');
  style.textContent = `
    body {
      position: relative;
    }

    body::after {
      content: '';
      position: absolute;
      inset: 0;
      background-image: url(./garland/elka.png);
      background-size: 10%;
      background-position: 0 0;
      background-repeat: no-repeat;
      pointer-events: none;
      z-index: 1000;
    }

    .garland {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      height: 36px;
      background-image: url(./garland/christmas.png);
      pointer-events: none;
      z-index: 999;
    }

    .garland_one {
      background-position: 0 0;
    }

    .garland_two {
      background-position: 0 -36px;
    }

    .garland_three {
      background-position: 0 -72px;
    }

    .garland_four {
      background-position: 0 -108px;
    }
  `;

  document.body.append(garland);
  document.body.append(style);

  let order = 1;

  setInterval(() => {
    switch (order) {
      case 1:
        garland.classList.add('garland_two');
        garland.classList.remove('garland_one');
        order = 2;
        break;
      case 2:
        garland.classList.add('garland_three');
        garland.classList.remove('garland_two');
        order = 3;
        break;
      case 3:
        garland.classList.add('garland_four');
        garland.classList.remove('garland_three');
        order = 4;
        break;
      case 4:
        garland.classList.add('garland_two');
        garland.classList.remove('garland_four');
        order = 2;
        break;

      default:
        break;
    }
  }, 500);
};

createGarland();