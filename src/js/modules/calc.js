const calc = (size, material, options, promocode, result) => {
    const blockSize = document.querySelector(size),
          blockMaterial = document.querySelector(material),
          blockOptions = document.querySelector(options),
          blockPromo = document.querySelector(promocode),
          blockResult  = document.querySelector(result);
    
    let sum = 0;

    const calcFunc = () => {
        sum = +blockSize.value * blockMaterial.value + (+blockOptions.value);
        
        if (blockMaterial.value == '' || blockSize.value == '') {
            blockResult.textContent= 'Пожалуйтса, выберите размер и материал картины';
        } else if (blockPromo.value == 'IWANTPOPART') {
            blockResult.textContent = Math.round(sum*0.7);
        }  else {
            blockResult.textContent = sum;
        }
    };


    blockSize.addEventListener('change', calcFunc);
    blockMaterial.addEventListener('change', calcFunc);
    blockOptions.addEventListener('change', calcFunc);
    blockPromo.addEventListener('input', calcFunc);
};

export default calc;