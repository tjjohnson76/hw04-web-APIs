let themeSelection = readFromLocalStorage("theme") || "Light";
document.getElementById("theme-btn").innerText = themeSelection;

let blogArray = readFromLocalStorage("blog-array") || [];


function saveToLocalStorage(name, data) {
    localStorage.setItem(name, JSON.stringify(data));
}

function readFromLocalStorage(name) {
    return JSON.parse(localStorage.getItem(name));
}


function switchTheme(){
    if (themeSelection === "Light"){
        themeSelection = "Dark";
        document.getElementById("theme-btn").innerText = "Dark";
    }else{
        themeSelection = "Light";
        document.getElementById("theme-btn").innerText = "Light";
    }
    saveToLocalStorage("theme", themeSelection)

    console.log(themeSelection);

}