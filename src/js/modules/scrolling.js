const scrolling = (upSelector) => {
    const up = document.querySelector(upSelector);

    window.addEventListener('scroll', ()=> {
        if(document.documentElement.scrollTop > 1650) {
            up.classList.add('animated', 'fadeIn');
            up.classList.remove('fadeOut');
        } else {
            up.classList.add('fadeOut');
            up.classList.remove('animated', 'fadeIn');
        }
    });
    const element = document.documentElement,
          body = document.body;
    
          const calcScroll = () => {
                up.addEventListener('click', function(e) {
                    let scrollTop = Math.round(body.scrollTop || element.scrollTop);
                    
                    if (this.hash !== '') {
                        e.preventDefault();
                        let hashElement = document.querySelector(this.hash),
                            hashElementTop = 0;
                            
                        
                        while (hashElement.offsetParent) {
                            hashElementTop += hashElement.offsetTop;
                            hashElement = hashElement.offsetParent;
                        }
        
                        hashElementTop = Math.round(hashElementTop);
                        smoothScroll(scrollTop, hashElementTop, this.hash);
                    }
                });
            };

    const smoothScroll = (from, to, hash) => {
            let timeInterval = 1,
                prevScrollTop,
                speed;
            console.log(history.state);
            if (to > from) {
                speed = 30;
            } else {
                speed = -30;
            }
            
            let move = setInterval(function() {
                let scrollTop = Math.round(body.scrollTop || element.scrollTop);
    
                if (
                    prevScrollTop === scrollTop ||
                    (to > from && scrollTop >= to) ||
                    (to < from && scrollTop <= to)
                ) {
                    clearInterval(move);
                    history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
                } else {
                    body.scrollTop += speed;
                    element.scrollTop += speed;
                    prevScrollTop = scrollTop;
                }
            }, timeInterval);
        };
    
        calcScroll();
};

export default scrolling;