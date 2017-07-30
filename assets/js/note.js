const item = document.querySelectorAll(".items > li")

item.forEach(e => {
    e.addEventListener("click", k => {
        document.querySelector(".title").innerHTML = e.innerText;
        console.log(e.dataset.todoId)
    })
})
