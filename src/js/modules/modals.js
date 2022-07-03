const modal = () => {
    const showModal = (btnSelector, modalSelector, closeSelector, closeClickOverlay = true) => {
        const btn = document.querySelectorAll(btnSelector),
              modal = document.querySelector(modalSelector),
              closeBtn = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]');
              scroll = calcScroll();

        btn.forEach(item=> {
            item.addEventListener('click', (e)=> {
                if(e.target) {
                    e.preventDefault();
                }
                windows.forEach(item=> {
                    item.style.display = 'none';
                });
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
            });
        });

        modal.addEventListener('click', (e)=> {
           
            if(e.target && (e.target === closeBtn || 
               e.target.parentNode === closeBtn ||
               (closeClickOverlay && e.target == modal))) {
                
                windows.forEach(item=> {
                    item.style.display = 'none';
                });

                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`; 
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
            }
        }, 60000);
   };
    
    

    showModal('.button-design', '.popup-design', '.popup-design .popup-close');
    showModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    timer('.popup-consultation');
};

export default modal;