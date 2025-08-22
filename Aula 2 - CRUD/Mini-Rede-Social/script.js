// Dados de exemplo dos posts
let posts = [
    {
        text: "Este é o primeiro post",
        category: "Notícias",
        image: "https://placedog.net/150?random=1",
        date: "12/10/2021 12:00:00"
    },
    {
        text: "Este é o segundo post",
        category: "Dicas",
        image: "https://placedog.net/150?random=2",
        date: "12/10/2022 12:00:00"
    },
    {
        text: "Este é o terceiro post teste",
        category: "Eventos",
        date: "12/10/2023 12:00:00"
    }
];

window.onload = function() {
    showPosts()
    document.querySelector("#postForm").addEventListener("submit", addPost)
}

//CREATE
function addPost(e){
    e.preventDefault()
    const postText = document.querySelector("#postText")
    const postCategory = document.querySelector("#postCategory")
    const postImage = document.querySelector("#postImage")

    post = {
        text: postText.value,
        category: postCategory.value,
        image: postImage.value,
        date: new Date().toLocaleString()
    }
    
    if (postText == "" && postImage == "") {
        alert("Seu post esta vazio")
        return
    }

    posts.unshift(post)
    postText.value = ""
    postCategory.value = ""
    postImage.value = ""
    showPosts()
}

//READ
function showPosts(){
    const postList = document.querySelector("#postList")
    postList.innerHTML = ""

    posts.forEach((item) => {
        const text = item.text ? item.text : "Nada"
        const category = item.category ? item.category : "Padrão"
        const image = item.image ? item.image : ""
        const date = item.date ? item.date : ""
        let post = document.createElement('section')
        post.classList.add("Card")
        post.innerHTML = `<h2>${text}</h2>
        <img src="${image}"/>
        <h5>Categoria: ${category}</h5>
        <h6>Data e Hora: ${date}</h6>
        <button><i class="fa-solid fa-edit" style="margin-right: 10px;"></i>Editar</button>
        <button><i class="fa-solid fa-remove" style="margin-right: 10px;"></i>Apagar</button>`
        postList.appendChild(post)
    })
}

//UPDATE
function editPost(){}

//DELETE
function deletePost(){}