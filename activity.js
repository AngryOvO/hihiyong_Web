let isDown = false;
      let startX;
      let scrollLeft;

      const imageContainer = document.querySelector('.gallery2022');

      imageContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - imageContainer.offsetLeft;
        scrollLeft = imageContainer.scrollLeft;
      });

      imageContainer.addEventListener('mouseleave', () => {
        isDown = false;
      });

      imageContainer.addEventListener('mouseup', () => {
        isDown = false;
      });

      imageContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - imageContainer.offsetLeft;
        const walk = (x - startX) * 1.5;
        imageContainer.scrollLeft = scrollLeft - walk;
      });

      let isDown2 = false;
      let startX2;
      let scrollLeft2;

      const imageContainer2 = document.querySelector('.gallery2023');

      imageContainer2.addEventListener('mousedown', (e) => {
        isDown2 = true;
        startX2 = e.pageX - imageContainer2.offsetLeft;
        scrollLeft2 = imageContainer2.scrollLeft;
      });

      imageContainer2.addEventListener('mouseleave', () => {
        isDown2 = false;
      });

      imageContainer2.addEventListener('mouseup', () => {
        isDown2 = false;
      });

      imageContainer2.addEventListener('mousemove', (e) => {
        if (!isDown2) return;
        e.preventDefault();
        const x = e.pageX - imageContainer2.offsetLeft;
        const walk = (x - startX2) * 1.5;
        imageContainer2.scrollLeft = scrollLeft2 - walk;
      });