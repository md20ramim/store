const selectFontSize = document.getElementById("selectFontSize");
const selectBgColor = document.getElementById("selectBgColor");
const resetButton = document.getElementById("resetButton");
const mainElement = document.querySelector("main");

// Set values
const setValues=(fontSize,bgColor)=>
{
    selectFontSize.value=fontSize;
    selectBgColor.value=bgColor;
    mainElement.style.fontSize=fontSize;
    mainElement.style.backgroundColor = bgColor;
}
// LocalStorage value
const initial = ()=>
{
    const bgColor = localStorage.getItem("bgColor");
    const fontSize =localStorage.getItem("fontSize");
    if(bgColor && fontSize)
    {
        setValues(fontSize,bgColor);
    }
    if(!bgColor && fontSize)
    {
        setValues(fontSize,"aqua");
    }
    if (bgColor && !fontSize) 
    {
        setValues("16px",bgColor);
    }
    if(!bgColor && !fontSize)
    {
        setValues("16px","aqua");
    }
}
// change font size
const changeFontSize=(event)=>
{
    let selectedFontSize = event.target.value;
    mainElement.style.fontSize= selectedFontSize;
    localStorage.setItem("fontSize",selectedFontSize);
};
// change background color
const changeBgColor=(event)=>
{
    let selectedBgColor = event.target.value;
    mainElement.style.backgroundColor=selectedBgColor;
    localStorage.setItem("bgColor",selectedBgColor);
};
// Clear local storage
const clearLocalStorage=()=>
{
    localStorage.removeItem("bgColor");
    localStorage.removeItem("fontSize");
}

// add event listner
selectFontSize.addEventListener("change",changeFontSize);
selectBgColor.addEventListener("change",changeBgColor);
resetButton.addEventListener("click",clearLocalStorage);

initial();