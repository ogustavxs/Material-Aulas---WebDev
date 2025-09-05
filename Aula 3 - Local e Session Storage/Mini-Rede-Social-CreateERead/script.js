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
    loadPosts()
    showPosts()
    document.querySelector("#postForm").addEventListener("submit", addPost)
    document.querySelector('#postList').addEventListener("click", handleClick)
}
let editing = false
function handleClick(e) {

    const action = e.target.dataset.action
    const index = e.target.dataset.index

    if (action === "edit") {
        if (!editing) {editPost(index, e)}
        
    } else if (action === "delete") {
        deletePost(index)
    }
}

//CREATE
function addPost(e){
    e.preventDefault()
    const postText = document.querySelector("#postText")
    const postCategory = document.querySelector("#postCategory")
    const postImage = document.querySelector("#postImage")

    const post = {
        text: postText.value,
        category: postCategory.value,
        image: postImage.value,
        date: new Date().toLocaleString()
    }
    
    if (postText.value == "" && postImage.value == "") {
        if (postCategory.value == "") {
            alert("A categoria não pode estar vazia")
            return
        }
        alert("Seu post esta vazio")
        return
    }

    posts.unshift(post)
    savePosts()
    postText.value = ""
    postCategory.value = ""
    postImage.value = ""
    showPosts()
}

//READ
function showPosts(){
    const postList = document.querySelector("#postList")
    postList.innerHTML = ""

    posts.forEach((item, index) => {
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
        <button data-action="edit" data-index="${index}"><i class="fa-solid fa-edit" style="margin-right: 10px;"></i>Editar</button>
        <button data-action="delete" data-index="${index}"><i class="fa-solid fa-remove" style="margin-right: 10px;"></i>Apagar</button>`
        postList.appendChild(post)
    })
}

//UPDATE
function editPost(i, ev){
    editing = !editing
    const card = ev.target.parentNode
    const a = document.createElement("div")
    a.innerHTML = `<input type='text' id='input' value='${posts[i].text}'><br><button id="send">Editar</button>`
    card.appendChild(a)
    const inputel = document.querySelector("#input")
    const sendbutton = document.querySelector("#send")
    sendbutton.addEventListener('click', ()=>{posts[i].text = inputel.value
        showPosts()
        editing = !editing
        savePosts()
    })
    
    
    //const novoTexto = prompt("Edite o conteudo do post", posts[i].text)
    
    //posts[i].text = novoTexto
    
    
}

//DELETE
function deletePost(i){
    const confirmar = prompt("Deseja realmente deletar o post? (Y/N)")
    if (confirmar){
        posts = posts.filter((post, index)=>index!=i)
        savePosts()
    }
    
    showPosts()
}

// LOAD
function loadPosts() {

}

// SAVE
function savePosts() {

}