let backGroundColorAccess=document.getElementById("bgColorInput");
let fontColorAccess=document.getElementById("fontColorInput");
let fontSizeAccess=document.getElementById("fontSizeInput");
let fontWeightAccess=document.getElementById("fontWeightInput");
let paddingAccess=document.getElementById("paddingInput");
let borderRaidusAccess=document.getElementById("borderRadiusInput");
let customButtonAccess=document.getElementById("customButton");
let borderColorAccess=document.getElementById("borderColor");
let fontFamilyAccess=document.getElementById("fontFamilyInput");
let textInButtonAccess=document.getElementById("textInButton");
let textArea = document.getElementById("textareacontent");

let default_white = "white"
function applyButton(){
    if(backGroundColorAccess.value===""){
    customButtonAccess.style.backgroundColor="white";
}
    else{
        customButtonAccess.style.backgroundColor=backGroundColorAccess.value;
        default_white = backGroundColorAccess.value;
    }
    let fontColorValue=fontColorAccess.value;
    let fontSizeValue=fontSizeAccess.value;
    let fontWeightValue=fontWeightAccess.value;
    let paddingValue=paddingAccess.value;
    let borderRaidusValue=borderRaidusAccess.value;
    let borderColorValue=borderColorAccess.value;
    let fontFamilyValue=fontFamilyAccess.value;
    let textInButtonValue=textInButtonAccess.value;
    customButtonAccess.style.color=fontColorValue;
    customButtonAccess.style.fontSize=fontSizeValue;
    customButtonAccess.style.fontWeight=fontWeightValue;
    customButtonAccess.style.padding=paddingValue;
    customButtonAccess.style.borderRadius=borderRaidusValue;
    customButtonAccess.style.borderColor=borderColorValue;
    customButtonAccess.style.fontFamily=fontFamilyValue;
    customButtonAccess.textContent=textInButtonValue;

    let ButnData = 
    `<button style="background-color:${default_white}; color: ${fontColorValue}; font-size: ${fontSizeValue}; 
    font-weight: ${fontWeightValue}; padding: ${paddingValue}; border-radius: ${borderRaidusValue}; border-color: ${borderColorValue}; font-family: ${fontFamilyValue};">
    ${textInButtonValue}
    </button>`

    textArea.value = ButnData;
}