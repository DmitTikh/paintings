/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const calc = (size, material, options, promocode, result) => {
  const blockSize = document.querySelector(size),
        blockMaterial = document.querySelector(material),
        blockOptions = document.querySelector(options),
        blockPromo = document.querySelector(promocode),
        blockResult = document.querySelector(result);
  let sum = 0;

  const calcFunc = () => {
    sum = +blockSize.value * blockMaterial.value + +blockOptions.value;

    if (blockMaterial.value == '' || blockSize.value == '') {
      blockResult.textContent = 'Пожалуйтса, выберите размер и материал картины';
    } else if (blockPromo.value == 'IWANTPOPART') {
      blockResult.textContent = Math.round(sum * 0.7);
    } else {
      blockResult.textContent = sum;
    }
  };

  blockSize.addEventListener('change', calcFunc);
  blockMaterial.addEventListener('change', calcFunc);
  blockOptions.addEventListener('change', calcFunc);
  blockPromo.addEventListener('input', calcFunc);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "./src/js/modules/checkNumInputs.js":
/*!******************************************!*\
  !*** ./src/js/modules/checkNumInputs.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const checkNumInputs = selector => {
  const numInputs = document.querySelectorAll(selector);
  numInputs.forEach(item => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/\D/, '');
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkNumInputs);

/***/ }),

/***/ "./src/js/modules/checkTextInputs.js":
/*!*******************************************!*\
  !*** ./src/js/modules/checkTextInputs.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const checkTextInputs = selector => {
  const textInputs = document.querySelectorAll(selector);
  textInputs.forEach(input => {
    input.addEventListener('keypress', e => {
      if (e.key.match(/[^а-яё 0-9]/ig)) {
        e.preventDefault();
      }
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkTextInputs);

/***/ }),

/***/ "./src/js/modules/filter.js":
/*!**********************************!*\
  !*** ./src/js/modules/filter.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const filter = () => {
  const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        btnAll = menu.querySelector('.all'),
        btnLovers = menu.querySelector('.lovers'),
        btnChef = menu.querySelector('.chef'),
        btnGirl = menu.querySelector('.girl'),
        btnGuy = menu.querySelector('.guy'),
        btnGrandmother = menu.querySelector('.grandmother'),
        btnGranddad = menu.querySelector('.granddad'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        markAll = wrapper.querySelectorAll('.all'),
        markGirl = wrapper.querySelectorAll('.girl'),
        markLovers = wrapper.querySelectorAll('.lovers'),
        markChef = wrapper.querySelectorAll('.chef'),
        markGuy = wrapper.querySelectorAll('.guy'),
        no = document.querySelector('.portfolio-no');

  const typeFilter = markType => {
    markAll.forEach(mark => {
      mark.style.display = 'none';
      mark.classList.remove('animated', 'fadeIn');
    });
    no.style.display = "none";
    no.classList.remove('animated', 'fadeIn');

    if (markType) {
      markType.forEach(mark => {
        mark.style.display = 'block';
        mark.classList.add('animated', 'fadeIn');
      });
    } else {
      no.style.display = 'block';
      no.classList.add('animated', 'fadeIn');
    }
  };

  btnAll.addEventListener('click', () => {
    typeFilter(markAll);
  });
  btnLovers.addEventListener('click', () => {
    typeFilter(markLovers);
  });
  btnChef.addEventListener('click', () => {
    typeFilter(markChef);
  });
  btnGuy.addEventListener('click', () => {
    typeFilter(markGuy);
  });
  btnGirl.addEventListener('click', () => {
    typeFilter(markGirl);
  });
  btnGrandmother.addEventListener('click', () => {
    typeFilter();
  });
  btnGranddad.addEventListener('click', () => {
    typeFilter();
  });
  menu.addEventListener('click', e => {
    let target = e.target;

    if (target && target.tagName == "LI") {
      items.forEach(btn => btn.classList.remove('active'));
      target.classList.add('active');
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _checkNumInputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkNumInputs */ "./src/js/modules/checkNumInputs.js");
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");



const forms = () => {
  const formPost = selector => {
    const forms = document.querySelectorAll(selector),
          inputs = document.querySelectorAll('input'),
          upload = document.querySelectorAll('[name="upload"]'),
          message = {
      loading: 'Загрузка...',
      success: 'Спасибо! Скоро мы с вами свяжемся',
      failure: 'Что-то пошло не так',
      spinner: 'assets/img/spinner.gif',
      ok: 'assets/img/ok.png',
      fail: 'assets/img/fail.png'
    };
    const path = {
      designer: 'assets/server.php',
      question: 'assets/question.php'
    };
    (0,_checkNumInputs__WEBPACK_IMPORTED_MODULE_0__["default"])('input[name="phone"]');

    const clearInputs = () => {
      inputs.forEach(i => {
        i.value = '';
      });
      upload.forEach(i => {
        i.previousElementSibling.textContent = "";
      });
    };

    upload.forEach(item => {
      item.addEventListener('input', () => {
        let dots;
        const arr = item.files[0].name.split('.');
        arr[0].length > 6 ? dots = "..." : dots = ".";
        const name = arr[0].substring(0, 6) + dots + arr[1];
        item.previousElementSibling.textContent = name;
      });
    });
    (0,_services_requests__WEBPACK_IMPORTED_MODULE_1__.postData)();
    forms.forEach(item => {
      item.addEventListener('submit', e => {
        e.preventDefault();
        let statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        item.parentNode.appendChild(statusMessage);
        item.classList.add('animated', 'fadeOutUp');
        setTimeout(() => {
          item.style.display = 'none';
        }, 400);
        let statusImg = document.createElement('img');
        statusImg.setAttribute('src', message.spinner);
        statusImg.classList.add('animated', 'fadeInUp');
        statusMessage.appendChild(statusImg);
        let textMessage = document.createElement('div');
        textMessage.textContent = message.loading;
        statusMessage.appendChild(textMessage);
        const formData = new FormData(item);
        let api;
        item.closest('.popup-design') || item.classList.contains('form-calc') ? api = path.designer : api = path.question;
        (0,_services_requests__WEBPACK_IMPORTED_MODULE_1__.postData)(api, formData).then(res => {
          statusImg.setAttribute('src', message.ok);
          textMessage.textContent = message.success;
        }).catch(() => {
          statusImg.setAttribute('src', message.fail);
          textMessage.textContent = message.failure;
        }).finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
            item.style.display = 'block';
            item.classList.remove('fadeOutUp');
            item.classList.add('fadeInUp');
          }, 5000);
        });
      });
    });
  };

  formPost('.form');
  formPost('.popup-content>form');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./src/js/modules/mask.js":
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const mask = selector => {
  let setCursorPosition = (pos, elem) => {
    elem.focus();

    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      let range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };

  function createMask(event) {
    let matrix = '+7 (___) ___ __ __',
        i = 0,
        def = matrix.replace(/\D/g, ''),
        //все не цифры заменяем на пустое место
    val = this.value.replace(/\D/g, ''); //все не цифры заменяем в value объекта события на пустое место

    if (def.length >= val.length) {
      //для того, чтобы нельзя было удалить 7 в маске
      val = def;
    }

    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val[i++] : i >= val.length ? '' : a;
    });

    if (event.type === 'blur') {
      if (this.value.length == 2) {
        this.value = '';
      }
    } else {
      setCursorPosition(this.value.length, this);
    }
  }

  let inputs = document.querySelectorAll(selector);
  inputs.forEach(input => {
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mask);

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const modal = () => {
  let btnPressed = false;
  const gift = document.querySelector('.fixed-gift'),
        scroll = calcScroll();

  const showModal = function (btnSelector, modalSelector, closeSelector) {
    let destroy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    const btn = document.querySelectorAll(btnSelector),
          modal = document.querySelector(modalSelector),
          closeBtn = document.querySelector(closeSelector),
          windows = document.querySelectorAll('[data-modal]'),
          scroll = calcScroll();
    btn.forEach(item => {
      item.addEventListener('click', e => {
        if (e.target) {
          e.preventDefault();
        }

        btnPressed = true;
        windows.forEach(item => {
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
    modal.addEventListener('click', e => {
      if (e.target && (e.target === closeBtn || e.target.parentNode === closeBtn || e.target == modal)) {
        windows.forEach(item => {
          item.style.display = 'none';
        });
        modal.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
        gift.style.right = `2rem`;
      }
    });
  };

  function calcScroll() {
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }

  function timer(selector) {
    setTimeout(() => {
      let display;
      document.querySelectorAll('[data-modal]').forEach(item => {
        if (getComputedStyle(item).display !== 'none') {
          display = 'block';
        }
      });

      if (!display) {
        document.querySelector(selector).style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
        gift.style.right = `${parseInt(getComputedStyle(gift).right) + scroll}px`;
      }
    }, 60000);
  }

  ;

  function openBodyScroll(selector) {
    window.addEventListener('scroll', () => {
      if (!btnPressed && window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        document.querySelector(selector).click();
      }
    });
  }

  showModal('.button-design', '.popup-design', '.popup-design .popup-close');
  showModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
  showModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
  openBodyScroll('.fixed-gift');
  timer('.popup-consultation');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);

/***/ }),

/***/ "./src/js/modules/showMoreStyles.js":
/*!******************************************!*\
  !*** ./src/js/modules/showMoreStyles.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");


const showMoreStyles = (trigger, wrapper) => {
  const btn = document.querySelector(trigger);
  btn.addEventListener('click', function () {
    (0,_services_requests__WEBPACK_IMPORTED_MODULE_0__.getResource)('http://localhost:3000/styles').then(res => createCards(res)).catch(e => {
      throw new Error(`What the fuck`);
    });
    this.remove();
  });

  const createCards = response => {
    response.forEach(_ref => {
      let {
        src,
        title,
        link
      } = _ref;
      let card = document.createElement('div');
      card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'fadeInUp');
      card.innerHTML = `
                <div class="styles-block">
                    <img src=${src} alt="style">
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
            `;
      document.querySelector(wrapper).appendChild(card);
    });
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showMoreStyles);

/***/ }),

/***/ "./src/js/modules/sliders.js":
/*!***********************************!*\
  !*** ./src/js/modules/sliders.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const sliders = (slides, dir, prev, next) => {
  let slideIndex = 1,
      paused = false;
  const items = document.querySelectorAll(slides);

  function showSlides(n) {
    if (n > items.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = items.length;
    }

    items.forEach(item => {
      item.classList.add('animated');
      item.style.display = 'none';
    });
    items[slideIndex - 1].style.display = 'block';
  }

  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  try {
    const prevBtn = document.querySelector(prev),
          nextBtn = document.querySelector(next);
    prevBtn.addEventListener('click', () => {
      plusSlides(-1);
      items[slideIndex - 1].classList.remove('slideInLeft');
      items[slideIndex - 1].classList.add('slideInRight');
    });
    nextBtn.addEventListener('click', () => {
      plusSlides(1);
      items[slideIndex - 1].classList.remove('slideInRight');
      items[slideIndex - 1].classList.add('slideInLeft');
    });
  } catch (e) {}

  const activateAnimation = () => {
    if (dir == 'vertical') {
      paused = setInterval(() => {
        plusSlides(1);
        items[slideIndex - 1].classList.add('slideInDown');
      }, 3000);
    } else {
      paused = setInterval(() => {
        plusSlides(1);
        items[slideIndex - 1].classList.remove('slideInRight');
        items[slideIndex - 1].classList.add('slideInLeft');
      }, 3000);
    }
  };

  activateAnimation();
  items[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(paused);
  });
  items[0].parentNode.addEventListener('mouseleave', () => {
    activateAnimation();
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliders);

/***/ }),

/***/ "./src/js/services/requests.js":
/*!*************************************!*\
  !*** ./src/js/services/requests.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getResource": () => (/* binding */ getResource),
/* harmony export */   "postData": () => (/* binding */ postData)
/* harmony export */ });
const postData = async (url, data) => {
  let res = await fetch(url, {
    method: 'POST',
    body: data
  });
  return await res.text();
};

const getResource = async url => {
  let res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  return await res.json();
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/sliders */ "./src/js/modules/sliders.js");
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mask */ "./src/js/modules/mask.js");
/* harmony import */ var _modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/checkTextInputs */ "./src/js/modules/checkTextInputs.js");
/* harmony import */ var _modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/showMoreStyles */ "./src/js/modules/showMoreStyles.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js");
/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/filter */ "./src/js/modules/filter.js");








window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  (0,_modules_modals__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_sliders__WEBPACK_IMPORTED_MODULE_0__["default"])('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
  (0,_modules_sliders__WEBPACK_IMPORTED_MODULE_0__["default"])('.main-slider-item', 'vertical');
  (0,_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modules_mask__WEBPACK_IMPORTED_MODULE_3__["default"])('[name="phone"]');
  (0,_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="name"]');
  (0,_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="message"]');
  (0,_modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__["default"])('.button-styles', '#styles .row');
  (0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__["default"])('#size', '#material', '#options', '.promocode', '.calc-price');
  (0,_modules_filter__WEBPACK_IMPORTED_MODULE_7__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map