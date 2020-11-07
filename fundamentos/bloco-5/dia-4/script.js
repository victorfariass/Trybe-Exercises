window.onload = function() {
  // Background Color
  function mudaBackgroundColor(color) {
    let content = document.querySelector('.content');
    content.style.backgroundColor = color;
    localStorage.setItem('backgroundColor', color);
  }

  let backgroundColorButtons = document.querySelectorAll('#background-color>button');
  for (let i = 0; i < backgroundColorButtons.length; i += 1) {
    backgroundColorButtons[i].addEventListener('click', function(event) {
      mudaBackgroundColor(event.target.innerHTML);
    })
  }

  // Font Color
  function mudaFontColor(color) {
    let paragraphs = document.querySelectorAll('.paragraph');
    for (let i = 0; i < paragraphs.length; i += 1) {
      paragraphs[i].style.color = color;
    }
    localStorage.setItem('fontColor', color);
  }

  let fontColorButtons = document.querySelectorAll('#font-color>button');
  for (let i = 0; i < fontColorButtons.length; i += 1) {
    fontColorButtons[i].addEventListener('click', function(event){
      mudaFontColor(event.target.innerHTML);
    })
  }

  // Font Size
  function mudaFontSize(size) {
    let paragraphs = document.querySelectorAll('.paragraph')
    for (let i = 0; i < paragraphs.length; i += 1) {
      paragraphs[i].style.fontSize = size;
    }
    localStorage.setItem('fontSize', size);
  }

  let fontSizeButtons = document.querySelectorAll('#font-size>button');
  for (let i = 0; i < fontSizeButtons.length; i += 1) {
    fontSizeButtons[i].addEventListener('click', function(event) {
      mudaFontSize(event.target.innerHTML);
    })
  }

  // Line Hight
  function mudaLineHeight(height) {
    let paragraphs = document.querySelectorAll('.paragraph');
    for (let i = 0; i < paragraphs.length; i += 1) {
      paragraphs[i].style.lineHeight = height;
    }
    localStorage.setItem('lineHeight', height);
  }

  let lineHeightButtons = document.querySelectorAll('#line-height>button');
  for (let i = 0; i < lineHeightButtons.length; i += 1) {
    lineHeightButtons[i].addEventListener('click', function(event) {
      mudaLineHeight(event.target.innerHTML);
    })
  }

  // Font Family
  function mudaFontFamily(family) {
    let paragraphs = document.querySelectorAll('.paragraph');
    for (let i = 0; i < paragraphs.length; i += 1) {
      paragraphs[i].style.fontFamily = family;
    }
    localStorage.setItem('fontFamily', family);
  }

  let fontFamilyButtons = document.querySelectorAll('#font-family>button');
  for (let i = 0; i < fontFamilyButtons.length; i += 1) {
    fontFamilyButtons[i].addEventListener('click', function(event) {
      mudaFontFamily(event.target.innerHTML);
    })
  }

  // Local Storage
  function initialize() {
    let backgroundColor = localStorage.getItem("backgroundColor")
    if (backgroundColor) mudaBackgroundColor(backgroundColor)

    let fontColor = localStorage.getItem("fontColor")
    if (fontColor) mudaFontColor(fontColor)

    let fontSize = localStorage.getItem("fontSize")
    if (fontSize) mudaFontSize(fontSize)

    let lineHeight = localStorage.getItem("lineHeight")
    if (lineHeight) mudaLineHeight(lineHeight)

    let fontFamily = localStorage.getItem("fontFamily")
    if (fontFamily) mudaFontSize(fontFamily)
  }
  initialize()

}