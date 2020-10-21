let flexContainer = document.querySelector(".training-flex-container"),
    df_btn = document.querySelector(".df-btn"),
    dif_btn = document.querySelector(".dif-btn"),

    fdr_btn = document.querySelector(".fdr-btn"),
    fdc_btn = document.querySelector(".fdc-btn"),
    fdrr_btn = document.querySelector(".fdrr-btn"),
    fdcr_btn = document.querySelector(".fdcr-btn"),

    fwn_btn = document.querySelector(".fwn-btn"),
    fww_btn = document.querySelector(".fww-btn"),
    fwwr_btn = document.querySelector(".fwwr-btn"),

    jcfs_btn = document.querySelector(".jcfs-btn"),
    jcc_btn = document.querySelector(".jcc-btn"),
    jcfe_btn = document.querySelector(".jcfe-btn"),
    jcsb_btn = document.querySelector(".jcsb-btn"),
    jcsa_btn = document.querySelector(".jcsa-btn"),

    ais_btn = document.querySelector(".ais-btn"),
    aife_btn = document.querySelector(".aife-btn"),
    aifs_btn = document.querySelector(".aifs-btn"),
    aib_btn = document.querySelector(".aib-btn"),
    aic_btn = document.querySelector(".aic-btn"),

    acs_btn = document.querySelector(".acs-btn"),
    acfe_btn = document.querySelector(".acfe-btn"),
    acfs_btn = document.querySelector(".acfs-btn"),
    acsb_btn = document.querySelector(".acsb-btn"),
    acsa_btn = document.querySelector(".acsa-btn"),
    acc_btn = document.querySelector(".acc-btn")




df_btn.addEventListener("click", function() {
    flexContainer.classList.toggle("display-f")
    df_btn.classList.toggle("selected-propertie")
})

dif_btn.addEventListener("click", function() {
    flexContainer.classList.toggle("display-i-f")
    dif_btn.classList.toggle("selected-propertie")
}) 

// 2

fdr_btn.addEventListener("click", function() {
    flexContainer.classList.toggle("flex-direction-r")
    fdr_btn.classList.toggle("selected-propertie")
}) 

fdc_btn.addEventListener("click", function() {
    flexContainer.classList.toggle("flex-direction-c")
    fdc_btn.classList.toggle("selected-propertie")
}) 

fdrr_btn.addEventListener("click", function() {
    flexContainer.classList.toggle("flex-direction-r-r")
    fdrr_btn.classList.toggle("selected-propertie")
}) 

fdcr_btn.addEventListener("click", function() {
    flexContainer.classList.toggle("flex-direction-c-r")
    fdcr_btn.classList.toggle("selected-propertie")
}) 

// 3

fwn_btn.addEventListener("click", function() {
    flexContainer.classList.toggle("flex-wrap-n")
    fwn_btn.classList.toggle("selected-propertie")
}) 

fww_btn.addEventListener("click", function() {
    flexContainer.classList.toggle("flex-wrap-w")
    fww_btn.classList.toggle("selected-propertie")
}) 

fwwr_btn.addEventListener("click", function() {
    flexContainer.classList.toggle("flex-wrap-w-r")
    fwwr_btn.classList.toggle("selected-propertie")
}) 

// 5

jcfs_btn.addEventListener("click", function() {
    flexContainer.classList.toggle("justify-content-f-s")
    jcfs_btn.classList.toggle("selected-propertie")
})

jcfe_btn.addEventListener("click", function() {
    flexContainer.classList.toggle("justify-content-f-e")
    jcfe_btn.classList.toggle("selected-propertie")
})

jcc_btn.addEventListener("click", function() {
    flexContainer.classList.toggle("justify-content-c")
    jcc_btn.classList.toggle("selected-propertie")
})

jcsa_btn.addEventListener("click", function() {
    flexContainer.classList.toggle("justify-content-s-a")
    jcsa_btn.classList.toggle("selected-propertie")
})

jcsb_btn.addEventListener("click", function() {
    flexContainer.classList.toggle("justify-content-s-b")
    jcsb_btn.classList.toggle("selected-propertie")
})

// 6
 
ais_btn.addEventListener("click", function() {
    flexContainer.classList.toggle("align-items-s")
    ais_btn.classList.toggle("selected-propertie")
})

aifs_btn.addEventListener("click", function() {
    flexContainer.classList.toggle("align-items-f-s")
    aifs_btn.classList.toggle("selected-propertie")
})

aife_btn.addEventListener("click", function() {
    flexContainer.classList.toggle("align-items-f-e")
    aife_btn.classList.toggle("selected-propertie")
})

aib_btn.addEventListener("click", function() {
    flexContainer.classList.toggle("align-items-b")
    aib_btn.classList.toggle("selected-propertie")
})

aic_btn.addEventListener("click", function() {
    flexContainer.classList.toggle("align-items-c")
    aic_btn.classList.toggle("selected-propertie")
})

// 7

acs_btn.addEventListener("click", function() {
    flexContainer.classList.toggle("align-content-s")
    acs_btn.classList.toggle("selected-propertie")
})

acfs_btn.addEventListener("click", function() {
    flexContainer.classList.toggle("align-content-f-s")
    acfs_btn.classList.toggle("selected-propertie")
})

acfe_btn.addEventListener("click", function() {
    flexContainer.classList.toggle("align-content-f-e")
    acfe_btn.classList.toggle("selected-propertie")
})

acsa_btn.addEventListener("click", function() {
    flexContainer.classList.toggle("align-content-s-a")
    acsa_btn.classList.toggle("selected-propertie")
})

acsb_btn.addEventListener("click", function() {
    flexContainer.classList.toggle("align-content-s-b")
    acsb_btn.classList.toggle("selected-propertie")
})

acc_btn.addEventListener("click", function() {
    flexContainer.classList.toggle("align-content-c")
    acc_btn.classList.toggle("selected-propertie")
})


































// let numberOfBlock = document.querySelectorAll(".number")
// for (let i = 0; i < numberOfBlock.length; i++) {
//     numberOfBlock[i].onclick = setProperties()
// }

// function setProperties(num) {
//     if (num == "flex;") {
//         this.classList.toggle("red-text")
//         console.log("display flex")
    
//     } else if (num == "2") {
//         console.log("2")
    
//     } else if (numberOfBlock == "3") {
//         console.log("3")
    
//     } else if (numberOfBlock == "4") {
//         console.log("4")
    
//     } else if (numberOfBlock == "5") {
//         console.log("5")
    
//     } else if (numberOfBlock == "6") {
//         console.log("6")
    
//     } else if (numberOfBlock == "7") {
//         console.log("7")
    
//     } else {
//         console.log
//     }
// }

// let num = addEventListener("click", (event) => {
//     num = event.target
//     console.log(num + " num")
//     console.log(event.target)
// })

