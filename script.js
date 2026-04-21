/**
 * @param {string} triggerSelector - The CSS selector for the element being clicked (e.g., '#myButton')
 * @param {string} targetClass - The class of the elements you want to find (e.g., '.old-class')
 * @param {string} newClass - The class you want to add to those elements (e.g., 'active')
 */

function addClassOnTrigger(triggerSelector, targetClass, newClass) {
  const trigger = document.querySelector(triggerSelector);

  // Ensure the trigger exists before adding the listener
  if (trigger) {
    trigger.addEventListener("click", () => {
      const elements = document.querySelectorAll(targetClass);
      const existing = document.querySelectorAll("." + newClass);
      var guard = 0;

      if (!trigger.classList.contains(newClass)) {
        guard++;
      }

      existing.forEach((element) => {
        element.classList.remove(newClass);
      });
      if (guard === 1) {
        elements.forEach((element) => {
          
          element.classList.toggle(newClass);
          console.log("asd");
        });
      }
    });
  }
}

// Usage:
addClassOnTrigger("#cost", ".cost", "highlighted");
addClassOnTrigger("#physical", ".physical", "highlighted");
addClassOnTrigger("#current", ".current", "highlighted");
addClassOnTrigger("#energy", ".energy", "highlighted");
addClassOnTrigger("#data", ".data", "highlighted");
addClassOnTrigger("#attention", ".attention", "highlighted");
addClassOnTrigger("#personal", ".personal", "highlighted");
addClassOnTrigger("#literal", ".literal", "highlighted");
addClassOnTrigger("#interaction", ".interaction", "highlighted");
addClassOnTrigger("#data-arena", ".data-arena", "highlighted");
addClassOnTrigger("#reimagine", ".reimagine", "highlighted");
addClassOnTrigger("#aesthetics", ".aesthetics", "highlighted");
addClassOnTrigger("#understand", ".understand", "highlighted");
addClassOnTrigger("#ai", ".ai", "highlighted");


// css swap
var currentState = 1
  const stateOne = 'state.one';
  const cssState = document.getElementById('currentStyle');
  const oneButton = document.getElementById('noCSS');
  const twoButton = document.getElementById('legibleCSS');
  const threeButton = document.getElementById('fullCSS')

//code to check localstorage and load appropriate css

function loadScript() {
    if (localStorage.getItem('style') === '1') {
        cssState.setAttribute("href", "style.css");
    } else if (localStorage.getItem('style') === '2') {
        cssState.setAttribute("href", "style2.css");
    } else if (localStorage.getItem('style') === '3') {
        cssState.setAttribute("href", "style3.css");
    }
};
//run loadScript function
loadScript();


//change stylesheets on button click
oneButton.onclick = () => {
    if (localStorage.getItem('style') !== '1') {
        currentState = 1;
        // console.log(currentState);
        localStorage.setItem('style', '1');
        cssState.setAttribute("href", "style.css");
        // console.log(localStorage.getItem('style'));
    }
};

twoButton.onclick = () => {
    if (localStorage.getItem('style') !== '2') {
        currentState = 2;
        localStorage.setItem('style', '2');
        cssState.setAttribute("href", "style2.css");
    }
};

threeButton.onclick = () => {
    if (localStorage.getItem('style') !== '3') {
        currentState = 3;
        localStorage.setItem('style', '3');
        cssState.setAttribute("href", "style3.css");
    }
};