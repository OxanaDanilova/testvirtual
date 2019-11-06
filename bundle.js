/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n\nlet color = 'orange';\nlet mode;\nif (localStorage.getItem('mode')){\n  mode = localStorage.getItem('mode');\n} else {\n  mode = 'eng';\n}\n\n\n\nlet evCodeArr = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus','Equal','Backspace','Tab','KeyQ','KeyW','KeyE','KeyR','KeyT','KeyY','KeyU','KeyI','KeyO','KeyP','BracketLeft','BracketRight','Backslash','Delete','CapsLock','KeyA','KeyS','KeyD','KeyF','KeyG','KeyH','KeyJ','KeyK','KeyL','Semicolon','Quote','Enter','ShiftLeft','KeyZ','KeyX','KeyC','KeyV','KeyB','KeyN','KeyM','Comma','Period','Slash','ShiftRight','ControlLeft','MetaLeft','AltLeft','Space','AltRight','ControlRight'];\n\nconst changeKeyboard = (arr)=> {\n    for (let i=0; i<document.getElementsByClassName('button').length; i++) {\n    let element = document.getElementsByClassName('button')[i];\n    element.textContent = arr[i];\n    }\n}\n\nconst changeCapsLock = ()=> {\n  const eng = ['`',1,2,3,4,5,6,7,8,9,0,'-','=','Backspace', 'Tab','q','w','e','r','t','y','u','i','o','p','[',']','\\\\','Del','CapsLock','a','s','d','f','g','h','j','k','l',';','\\'','Enter','Shift','z','x','c','v','b','n','m','.',',','/','Shift','Ctrl','Win','Alt',' ','Alt','Ctrl'];\n  const engCaps = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace','Tab','Q','W','E', 'R','T','Y','U','I','O','P','{','}','|','Del','CapsLock','A','S','D','F','G','H','J','K','L',':','\"','Enter','Shift','Z','X','C','V','B','N','M','<','>','?','Shift', 'Ctrl','Win','Alt',' ','Alt','Ctrl'];\n  const ru = ['ё','1','2','3','4','5','6','7','8','9','0','-','=','Backspace','Tab', 'й','ц','у','к','е','н','г','ш','щ','з','х','ъ','\\\\','Del','CapsLock','ф','ы','в','а','п','р','о','л','д','ж','э','Enter','Shift', 'я','ч','с','м','и','т','ь','б','ю', '.', 'Shift','Ctrl','Win','Alt',' ','Alt','Ctrl'];\n  const ruCaps = ['Ё','!','\"','№',';','%',':','?','*','(',')','_','+','Backspace','Tab', 'Й','Ц','У','К','Е','Н','Г','Ш','Щ','З','Х','Ъ','\\\\','Del','CapsLock','Ф','Ы','В','А','П','Р','О','Л','Д','Ж','Э','Enter','Shift', 'Я','Ч','С','М','И','Т','Ь','Б','Ю', ',', 'Shift','Ctrl','Win','Alt',' ','Alt','Ctrl']\n  switch (mode) {\n     case 'eng':\n      mode='engCaps';\n      localStorage.setItem('mode', 'engCaps');\n      changeKeyboard(engCaps);\n      break;\n     case 'engCaps':\n      mode='eng';\n      localStorage.setItem('mode', 'eng');\n     changeKeyboard(eng);\n      break;\n    case 'ruCaps':\n      mode='ru';\n      localStorage.setItem('mode', 'ru');\n      changeKeyboard(ru);\n      break;\n    case 'ru':\n      mode='ruCaps';\n      localStorage.setItem('mode', 'ruCaps');\n      changeKeyboard(ruCaps);\n      break;\n  }\n}\n\nconst changeLang = ()=> {\n  const eng = ['`',1,2,3,4,5,6,7,8,9,0,'-','=','Backspace', 'Tab','q','w','e','r','t','y','u','i','o','p','[',']','\\\\','Del','CapsLock','a','s','d','f','g','h','j','k','l',';','\\'','Enter','Shift','z','x','c','v','b','n','m','.',',','/','Shift','Ctrl','Win','Alt',' ','Alt','Ctrl'];\n  const engCaps = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace','Tab','Q','W','E', 'R','T','Y','U','I','O','P','{','}','|','Del','CapsLock','A','S','D','F','G','H','J','K','L',':','\"','Enter','Shift','Z','X','C','V','B','N','M','<','>','?','Shift', 'Ctrl','Win','Alt',' ','Alt','Ctrl'];\n  const ru = ['ё','1','2','3','4','5','6','7','8','9','0','-','=','Backspace','Tab', 'й','ц','у','к','е','н','г','ш','щ','з','х','ъ','\\\\','Del','CapsLock','ф','ы','в','а','п','р','о','л','д','ж','э','Enter','Shift', 'я','ч','с','м','и','т','ь','б','ю', '.', 'Shift','Ctrl','Win','Alt',' ','Alt','Ctrl'];\n  const ruCaps = ['Ё','!','\"','№',';','%',':','?','*','(',')','_','+','Backspace','Tab', 'Й','Ц','У','К','Е','Н','Г','Ш','Щ','З','Х','Ъ','\\\\','Del','CapsLock','Ф','Ы','В','А','П','Р','О','Л','Д','Ж','Э','Enter','Shift', 'Я','Ч','С','М','И','Т','Ь','Б','Ю', ',', 'Shift','Ctrl','Win','Alt',' ','Alt','Ctrl']\n  switch (mode) {\n     case 'eng':\n      mode='ru';\n      localStorage.setItem('mode', 'ru');\n      changeKeyboard(ru);\n      break;\n     case 'engCaps':\n      mode='ruCaps';\n      localStorage.setItem('mode', 'ruCaps');\n     changeKeyboard(ruCaps);\n      break;\n    case 'ruCaps':\n      mode='engCaps';\n      localStorage.setItem('mode', 'engCaps');\n      changeKeyboard(engCaps);\n      break;\n    case 'ru':\n      mode='eng';\n      localStorage.setItem('mode', 'eng');\n      changeKeyboard(eng);\n      break;\n  }\n}\n\nconst handleFuncButton = (code)=> {\n  let textarea = document.getElementsByTagName('textarea')[0];\n  switch (code) {\n    case 'Backspace':\n      textarea.value = textarea.value.slice(0, textarea.value.length-1);\n     break;\n     case 'CapsLock':\n        document.getElementsByClassName('button')[29].classList.toggle('clicked');\n        changeCapsLock();\n        break;\n    case 'Tab':\n      textarea.value+='\\t';\n        break;\n   case 'Delete':\n      textarea.value = textarea.value.slice(0,textarea.selectionStart).concat(textarea.value.slice(textarea.selectionEnd, textarea.value.length));\n     break;\n     case 'Del':\n      textarea.value = textarea.value.slice(0,textarea.selectionStart).concat(textarea.value.slice(textarea.selectionEnd, textarea.value.length));\n      break;\n     case 'Enter':\n      textarea.value+='\\n';\n        break;\n   case 'ShiftLeft'||false||false||false||false||false||false:\n        break;\n  }\n\n}\n\nconst newEvent = (element)=> {\n  let ev = new Event(\"mousedown\");\n  element.dispatchEvent(ev);\n  ev.stopPropagation();\n\n\n}\n\nconst keydown = (event)=> {\n  let index=evCodeArr.indexOf(event.code);\n      if (event.shiftKey && event.altKey) {\n    changeLang();\n  } else {\n       if (event.code === 'CapsLock' || event.code === 'Backspace' || event.code ==='Tab' || event.code ==='Delete'|| event.code ==='Enter'|| event.code ==='ShiftLeft'|| event.code ==='ShiftRight'|| event.code ==='ControlLeft'|| event.code ==='MetaLeft'|| event.code ==='AltLeft'|| event.code ==='AltRight'|| event.code ==='ControlRight') {\n        let element = document.getElementsByClassName('button')[index];\n        newEvent(element);\n        handleFuncButton(event.code);\n      } else {\n          if (index>=0) {\n          let element = document.getElementsByClassName('button')[index];\n          document.getElementsByTagName('textarea')[0].value+=element.textContent;\n          newEvent(element);\n\n        }\n\n    }\n  }\n}\n\n  const keyup = (event)=> {\n     for (let i=0; i<document.getElementsByClassName('button').length; i++) {\n      let element = document.getElementsByClassName('button')[i];\n      if (element.textContent === event.key) {\n        let ev = new Event(\"mouseup\");\n        element.dispatchEvent(ev);\n      }\n    }\n }\n\ndocument.addEventListener('keydown', keydown);\ndocument.addEventListener('keyup', keyup);\n\nconst clickBtn = (event ) => {\n  document.getElementsByTagName('textarea')[0].focus = true;\n  const clickedBtn = event.target.closest('.button');\n  let sign = clickedBtn.textContent;\n  if (sign === 'CapsLock' || sign === 'Backspace' || sign ==='Tab' || sign ==='Del'|| sign ==='Enter'|| sign ==='Shift'|| sign ==='Ctrl'|| sign ==='Win'|| sign ==='Alt') {\n    handleFuncButton(sign);\n  } else {\n  document.getElementsByTagName('textarea')[0].value+=sign;\n  }\n}\n\nconst mouseDown = (event)=> {\n  const clickedBtn = event.target.closest('.button');\n  color = window.getComputedStyle(clickedBtn).getPropertyValue(\"background-color\");\n  if (clickedBtn.textContent === 'CapsLock') {\n    return; } else {\n  clickedBtn.style.backgroundColor= '#ff6500';\n    }\n  }\n\nconst mouseUp = (event)=> {\n  const clickedBtn = event.target.closest('.button');\n  if (clickedBtn.textContent === 'CapsLock') {\n    return; } else {\n      clickedBtn.style.backgroundColor= color;\n    }\n\n }\n\n\n\nconst drawfirstr = () => {\n  const firstarrbut = ['`',1,2,3,4,5,6,7,8,9,0,'-','=','Backspace'];\n  const firstrow = document.getElementsByClassName('first row')[0];\n  for (let i=0; i<firstarrbut.length; i++) {\n    const btn = document.createElement('button');\n    if (i===firstarrbut.length-1){ btn.className='button func';} else {\n      btn.className = 'button';\n    }\n    btn.textContent = firstarrbut[i];\n    btn.addEventListener('mousedown', mouseDown);\n    btn.addEventListener('mouseup', mouseUp);\n    btn.addEventListener('click', clickBtn);\n     firstrow.appendChild(btn);\n  }\n  }\n\n  const drawsecondr = () => {\n    const secondarrbut = ['Tab','q','w','e','r','t','y','u','i','o','p','[',']','\\\\','Del'];\n    const secondrow = document.getElementsByClassName('second row')[0];\n    for (let i=0; i<secondarrbut.length; i++) {\n      const btn = document.createElement('button');\n      if (i===0 || i===secondarrbut.length-1) {btn.className = 'button func';} else {\n        btn.className = 'button';\n      }\n      btn.textContent = secondarrbut[i];\n      btn.addEventListener('mousedown', mouseDown);\n      btn.addEventListener('mouseup', mouseUp);\n      btn.addEventListener('click', clickBtn);\n      secondrow.appendChild(btn);\n    }\n  }\n\n  const drawthirdr = () => {\n    const thirdarrbut = ['CapsLock','a','s','d','f','g','h','j','k','l',';','\\'','Enter'];\n      const thirdrow = document.getElementsByClassName('third row')[0];\n      for (let i=0; i<thirdarrbut.length; i++) {\n        const btn = document.createElement('button');\n         if (i===0 || i===thirdarrbut.length-1) {btn.className = 'button func';} else {\n          btn.className = 'button';\n        }\n        btn.textContent = thirdarrbut[i];\n        btn.addEventListener('mousedown', mouseDown);\n        btn.addEventListener('mouseup', mouseUp);\n        btn.addEventListener('click', clickBtn);\n        thirdrow.appendChild(btn);\n      }\n  }\n\n  const drawforthr = () => {\n    const fortharrbut = ['Shift','z','x','c','v','b','n','m','.',',','/','Shift'];\n    const forthrow = document.getElementsByClassName('forth row')[0];\n    for (let i=0; i<fortharrbut.length; i++) {\n      const btn = document.createElement('button');\n       if (i===0 || i===fortharrbut.length-1) {btn.className = 'button func';} else {\n        btn.className = 'button';\n      }\n      btn.textContent = fortharrbut[i];\n      btn.addEventListener('mousedown', mouseDown);\n      btn.addEventListener('mouseup', mouseUp);\n      btn.addEventListener('click', clickBtn);\n      forthrow.appendChild(btn);\n    }\n\n  }\n\n  const drawfifthr = () => {\n    const fiftharrbut = ['Ctrl','Win','Alt',' ','Alt','Ctrl'];\n    const fifthrow = document.getElementsByClassName('fifth row')[0];\n    for (let i=0; i<fiftharrbut.length; i++) {\n      const btn = document.createElement('button');\n      if (i===3) {btn.className = 'button space';} else {\n        btn.className = 'button func';\n      }\n      btn.textContent = fiftharrbut[i];\n      btn.addEventListener('mousedown', mouseDown);\n      btn.addEventListener('mouseup', mouseUp);\n      btn.addEventListener('click', clickBtn);\n      fifthrow.appendChild(btn);\n    }\n\n  }\n\n  const setKeyboard = ()=> {\n      const eng = ['`',1,2,3,4,5,6,7,8,9,0,'-','=','Backspace', 'Tab','q','w','e','r','t','y','u','i','o','p','[',']','\\\\','Del','CapsLock','a','s','d','f','g','h','j','k','l',';','\\'','Enter','Shift','z','x','c','v','b','n','m','.',',','/','Shift','Ctrl','Win','Alt',' ','Alt','Ctrl'];\n      const engCaps = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace','Tab','Q','W','E', 'R','T','Y','U','I','O','P','{','}','|','Del','CapsLock','A','S','D','F','G','H','J','K','L',':','\"','Enter','Shift','Z','X','C','V','B','N','M','<','>','?','Shift', 'Ctrl','Win','Alt',' ','Alt','Ctrl'];\n      const ru = ['ё','1','2','3','4','5','6','7','8','9','0','-','=','Backspace','Tab', 'й','ц','у','к','е','н','г','ш','щ','з','х','ъ','\\\\','Del','CapsLock','ф','ы','в','а','п','р','о','л','д','ж','э','Enter','Shift', 'я','ч','с','м','и','т','ь','б','ю', '.', 'Shift','Ctrl','Win','Alt',' ','Alt','Ctrl'];\n      const ruCaps = ['Ё','!','\"','№',';','%',':','?','*','(',')','_','+','Backspace','Tab', 'Й','Ц','У','К','Е','Н','Г','Ш','Щ','З','Х','Ъ','\\\\','Del','CapsLock','Ф','Ы','В','А','П','Р','О','Л','Д','Ж','Э','Enter','Shift', 'Я','Ч','С','М','И','Т','Ь','Б','Ю', ',', 'Shift','Ctrl','Win','Alt',' ','Alt','Ctrl']\n      switch (mode) {\n         case 'eng':\n         changeKeyboard(eng);\n          break;\n         case 'engCaps':\n          changeKeyboard(engCaps);\n          break;\n        case 'ruCaps':\n          changeKeyboard(ruCaps);\n          break;\n        case 'ru':\n          changeKeyboard(ru);\n          break;\n      }\n    }\n\nfunction startDraw() {\n  const textpanel = document.createElement('section');\n  textpanel.className = 'text-panel';\n  document.body.appendChild(textpanel);\n\n  const textarea = document.createElement('textarea');\n  textarea.setAttribute('name', 'text');\n  textarea.setAttribute('cols', '110');\n  textarea.setAttribute('rows', '15');\n  textarea.setAttribute('readonly', '');\n  textarea.setAttribute('autofocus', '');\n  textpanel.appendChild(textarea);\n\n\n  const keyboard = document.createElement('section');\n  keyboard.className = 'keyboard';\n  document.body.appendChild(keyboard);\n\n  //////////////////draw rows/////////////\n  const firstrowarr = ['first', 'second', 'third', 'forth', 'fifth'];\n  for (let i=1; i<=5; i++) {\n    const row = document.createElement('div');\n    row.classList = 'row '+firstrowarr[i-1];\n    keyboard.appendChild(row);\n  }\n  drawfirstr();\n  drawsecondr();\n  drawthirdr();\n  drawforthr();\n  drawfifthr();\n  setKeyboard();\n\nif (localStorage.getItem('mode') && (localStorage.getItem('mode')==='ruCaps' || localStorage.getItem('mode')==='engCaps')){\n  document.getElementsByClassName('button')[29].className = 'button func clicked';\n  }\n  }\n\nstartDraw();\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/style.scss?");

/***/ })

/******/ });