

function submitForm() {
    const blogObject = {
        username: document.getElementById("username").value,
        title: document.getElementById("title").value,
        content: document.getElementById("content").value
    }

    blogArray.push(blogObject);
    saveToLocalStorage("blog-array", blogArray);
    window.location.href = "./blog.html";
}


document.getElementById("submit").addEventListener("click", function(e) {
    e.preventDefault;
    submitForm();
});

document.getElementById("theme-btn").addEventListener("click", function(e) {
    e.preventDefault;
    switchTheme();
});