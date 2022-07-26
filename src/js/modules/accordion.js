const accordion = (triggersSelector) => {
    const btns = document.querySelectorAll(triggersSelector);
        //   items = document.querySelectorAll(itemsSelector);
    
    btns.forEach(btn=> {
        btn.addEventListener('click', function () {
            btns.forEach(btn => {
                btn.classList.remove('active-style');
                btn.nextElementSibling.classList.remove('active-content');
                btn.nextElementSibling.style.maxHeight = '0px';
            });
            this.classList.toggle('active-style');
            this.nextElementSibling.classList.toggle('active-content');
            this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 +'px';

            // if(this.classList.contains('active-style')) {
            //     this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 +'px';
            // } else {
            //     this.nextElementSibling.style.maxHeight = '0px';
            // }
        });
    });

    // items.forEach(item=> {
    //     item.classList.add('animated', 'fadeInDown');
    // });

    // btns.forEach(btn => {
    //     btn.addEventListener('click', function () {
    //         if(!this.classList.contains('active')) {
    //             btns.forEach(btn=> {
    //                 btn.classList.remove('active', 'active-style');
    //             });
    //             this.classList.add('active', 'active-style');
    //         } else {
    //             btns.forEach(btn=> {
    //                 btn.classList.remove('active', 'active-style');
    //             });
        
    //         }
    //     });
    // });
    
};

export default accordion;