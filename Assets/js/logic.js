let themeSelection = readFromLocalStorage("theme") || "Light";
document.getElementById("theme-btn").innerText = themeSelection;

if (themeSelection === "Dark") {
    changeClass("light");
}


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
        changeClass("light");
    }else{
        themeSelection = "Light";
        document.getElementById("theme-btn").innerText = "Light";
        changeClass("dark")
    }
    saveToLocalStorage("theme", themeSelection)

    console.log(themeSelection);

}

function changeClass(theme) {
    let elements;
    let oldTheme;
    let newTheme;

    if (theme === "light"){
        elements = document.querySelectorAll('.light');
        oldTheme = "light";
        newTheme = "dark";

    } else {
        elements = document.querySelectorAll(".dark");      
        oldTheme = "dark"  
        newTheme = "light";

    }

    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add(newTheme);
        elements[i].classList.remove(oldTheme);
    }
}