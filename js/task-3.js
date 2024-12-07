function getElementWidth(content, padding, border){
    const parsePx = (value) => parseFloat(value);
    const contentWidth = parsePx(content);
    const paddingWidth = parsePx(padding) * 2; 
    const borderWidth = parsePx(border) * 2;
return contentWidth + paddingWidth + borderWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); 
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px")); 
