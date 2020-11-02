let display_btns         = document.querySelectorAll(".display_btns .value-list .img-text");
let flex_direction_btns  = document.querySelectorAll(".flex_direction_btns .value-list .img-text");
let flex_wrap_btns       = document.querySelectorAll(".flex_wrap_btns .value-list .img-text");
let justify_content_btns = document.querySelectorAll(".justify_content_btns .value-list .img-text");
let align_items_btns     = document.querySelectorAll(".align_items_btns .value-list .img-text");
let align_content_btns   = document.querySelectorAll(".align_content_btns .value-list .img-text");

let flexContainer = document.querySelector(".training-flex-container");

function addSel(target) {
    target.classList.add("selected-propertie");
}

document.addEventListener("click", (e) => {
    let target = e.target;
    let a = target.innerHTML;
    // console.log(a)
    let name = target.parentNode.id;

    if (name == "display") {
        for (let i = 0; i < display_btns.length; i++) {
            display_btns[i].classList.remove("selected-propertie");
        }
        flexContainer.style.display = a;
        addSel(target);
    } else if (name == "flex-direction") {
        for (let i = 0; i < flex_direction_btns.length; i++) {
            flex_direction_btns[i].classList.remove("selected-propertie");
        }
        flexContainer.style.flexDirection = a;
        addSel(target);
    } else if (name == "flex-wrap") {
        for (let i = 0; i < flex_wrap_btns.length; i++) {
            flex_wrap_btns[i].classList.remove("selected-propertie");
        }
        flexContainer.style.flexWrap = a;
        addSel(target);
    } else if (name == "justify-content") {
        for (let i = 0; i < justify_content_btns.length; i++) {
            justify_content_btns[i].classList.remove("selected-propertie");
        }
        flexContainer.style.justifyContent = a;
        addSel(target);
    } else if (name == "align-items") {
        for (let i = 0; i < align_items_btns.length; i++) {
            align_items_btns[i].classList.remove("selected-propertie");
        }
        flexContainer.style.alignItems = a;
        addSel(target);
    } else if (name == "align-content") {
        for (let i = 0; i < align_content_btns.length; i++) {
            align_content_btns[i].classList.remove("selected-propertie");
        }
        flexContainer.style.alignContent = a;
        addSel(target);
    } else {
        console.log("false");
    }
});
