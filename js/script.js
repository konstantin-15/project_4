var swiper = new Swiper(".about-us__swiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      effect: "fade",
    });

    var w = window.screen.availWidth;
    if(w > 1000){
      let parVeg = document.querySelector('.parallax-vegetables')
      let parSpec = document.querySelector('.parallax-special')
      window.addEventListener('mousemove', function(e) {
        let x = e.clientX / this.window.innerWidth;
        let y = e.clientY / this.window.innerHeight;
        parVeg.style.transform = 'translate(+' + x * 30 + 'px, +' + y * 30 + 'px)';
        parSpec.style.transform = 'translate(+' + x * 30 + 'px, +' + y * 30 + 'px)';
      });
    };

    const stat = document.querySelectorAll('.order-info__statistics');
    const speed = 100;
    stat.forEach (counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;
        if(count < target) {
          counter.innerText = Math.ceil(count + inc);
          setTimeout(updateCount, 1);
        }  else {
            count.innerText = target;
        }
      }

      updateCount();
    });