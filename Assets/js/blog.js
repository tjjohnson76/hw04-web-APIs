



function buildPage() {
    for (let i = 0; i < blogArray.length; i++){
        buildPost(blogArray[i]);
    }
}


// Still need to fix
function buildPost(post) {
    const userName = post.username;
    const title = post.title;
    const content = post.content;

    let newPost = document.createElement("div");
    let newTitle = document.createElement("h3");
    let newUserName = document.createElement("h4");
    let newContent = document.createElement("p");

    newTitle.textContent = title;
    newContent.textContent = content;
    newUserName.textContent = `Posted by: ${userName}`;

    newPost.appendChild(newTitle);
    newPost.appendChild(newContent);
    newPost.appendChild(newUserName);

    newPost.append(document.getElementById("blog-posts"));
}



document.getElementById("return-btn").addEventListener("click", function(e) {
    e.preventDefault;
    window.location.href = "./index.html";
});

document.getElementById("theme-btn").addEventListener("click", function(e) {
    e.preventDefault;
    switchTheme();
});

buildPage();