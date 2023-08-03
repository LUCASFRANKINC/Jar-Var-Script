"use strict";

const buttonsFlags = {
  d: "Indicates whether a match should have the start and end indices of each capture group.",
  g: "It indicates that the regular expression should be tested against all possible matches in a string",
  i: "Indicates that case should be ignored while attempting a match in a string",
  m: "Indicates that for '^' and '$' change from matching only the start or end of the entire string to the start or end of any line in the string.",
  s: 'Indicates that the dot special character (".") should additionally match the following line terminator characters in a string.e.g. \\n,\\f.',
  u: "It enables various Unicode-related features.",
  y: "Indicates that it matches only from the index indicated by the lastIndex property of this regular expression in the target string",
};

buttonsFlags[Symbol.iterator] = function () {
  let iterator = Object.keys(this);
  const SELF = this;
  let next = 0;
  return {
    [Symbol.iterator]() {
      return SELF;
    },
    next() {
      return next < iterator.length
        ? { value: iterator[next++] }
        : { done: true };
    },
  };
};

// Create buttons from the keys
function createButton(text, onClickHandler) {
  const button = document.createElement("button");
  const span = document.createElement('span');
  span.textContent = text;
  button.appendChild(span);
  button.classList.add('btn-flags', 'custom-btn');
  button.addEventListener("click", onClickHandler);
  return button;
}

const handleBtnClick = (e) => {
  const btn = e.target;
  console.log(btn.textContent);
};

const btnContainer = document.getElementById("flags-container");
for (let i of buttonsFlags) {
  const button = createButton(i, handleBtnClick);
  btnContainer.appendChild(button);
}
