

function submitForm() {

    let usernameInput = document.getElementById("username").value;
    let titleInput = document.getElementById("title").value;
    let contentInput = document.getElementById("content").value;


    if (!usernameInput || !titleInput || !contentInput){
        alert("Please make sure to fill out each field!");

    } else {
        const blogObject = {
            username: usernameInput,
            title: titleInput,
            content: contentInput
        }
        blogArray.push(blogObject);
        saveToLocalStorage("blog-array", blogArray);
        window.location.href = "./blog.html";
    }
}


document.getElementById("submit").addEventListener("click", function(e) {
    e.preventDefault;
    submitForm();
});

document.getElementById("theme-btn").addEventListener("click", function(e) {
    e.preventDefault;
    switchTheme();
});