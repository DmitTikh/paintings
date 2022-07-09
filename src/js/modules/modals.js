const modal = () => {
    let btnPressed = false;
    const gift = document.querySelector('.fixed-gift');
    const showModal = (btnSelector, modalSelector, closeSelector, destroy = false) => {
        const btn = document.querySelectorAll(btnSelector),
              modal = document.querySelector(modalSelector),
              closeBtn = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]'),
              scroll = calcScroll();

        btn.forEach(item=> {
            item.addEventListener('click', (e)=> {
                if(e.target) {
                    e.preventDefault();
                }
                
                btnPressed = true;

                windows.forEach(item=> {
                    item.style.display = 'none';
                    item.classList.add('animated', 'fadeIn');
                });

                if (destroy) {
                    item.remove();
                }
              
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
                gift.style.right = `${parseInt(getComputedStyle(gift).right) + scroll}px`;
            });
        });

        modal.addEventListener('click', (e)=> {
           
            if(e.target && (e.target === closeBtn || 
               e.target.parentNode === closeBtn ||
               e.target == modal)) {
                
                windows.forEach(item=> {
                    item.style.display = 'none';
                });

                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
                gift.style.right = `2rem`;
            } 
        });

        
        function calcScroll () {
            let div = document.createElement('div');
            div.style.width = '50px';
            div.style.height ='50px';
            div.style.overflowY = 'scroll';
            div.style.visibility = 'hidden';
            document.body.appendChild(div);
            let scrollWidth = div.offsetWidth - div.clientWidth;
            div.remove();
            return scrollWidth;
        }
    };
   function timer (selector) {
        setTimeout(()=> {
            let display;
            document.querySelectorAll('[data-modal]').forEach(item=> {
            if (getComputedStyle(item).display !== 'none') {
                display = 'block';
                }
            });
            if(!display) {
                document.querySelector(selector).style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
                gift.style.right = `${parseInt(getComputedStyle(gift).right) + scroll}px`;
                
            }
        }, 60000);
   };
    
    function openBodyScroll(selector) {
        window.addEventListener('scroll', ()=> {
            if(!btnPressed && (window.pageYOffset+ document.documentElement.clientHeight >= 
                document.documentElement.scrollHeight)) {
                document.querySelector(selector).click();
            }
        });
    }

    showModal('.button-design', '.popup-design', '.popup-design .popup-close');
    showModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    showModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true );
    openBodyScroll('.fixed-gift');
    timer('.popup-consultation');
};

export default modal;