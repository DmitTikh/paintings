import checkNumInputs from "./checkNumInputs";

const forms = () => {
    const formPost = (selector)=> {
        const forms = document.querySelectorAll(selector),
              inputs = document.querySelectorAll('input'),
              message = {
                    loading: 'Загрузка...',
                    success: 'Спасибо! Скоро мы с вами свяжемся',
                    failure: 'Что-то пошло не так'
              };

        checkNumInputs('input[name="phone"]'); 

        const clearInputs = () => {
            inputs.forEach(i => {
                i.value='';
            });
        };
        
        const postData = async (url, data) => {
            document.querySelector('.status').textContent = message.loading;
            let res = await fetch(url, {
                method: 'POST',
                body: data
            })
            return await res.text();
        };

        forms.forEach(item => {
            item.addEventListener('submit', (e)=> {
                e.preventDefault();

                let statusMessage = document.createElement('div');
                statusMessage.classList.add('status');
                item.appendChild(statusMessage);
                statusMessage.textContent = message.loading;

                let formData = new FormData(item);

                postData('./assets/server.php', formData)
                    .then(res=> {
                        statusMessage.textContent = message.success;
                    })
                    .catch(()=> {
                            statusMessage.textContent = message.failure;
                    })
                    .finally(()=> {
                    
                        clearInputs();

                        setTimeout(()=> {
                            statusMessage.remove();
                        }, 5000);
                    });
            });
        });
    }
    formPost('.form');
    formPost('.popup-content>form');
};

export default forms;