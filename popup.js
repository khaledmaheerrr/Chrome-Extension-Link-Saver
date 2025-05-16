let myLinks = []
const inputEl = document.getElementById("input-el")
const saveBtn = document.getElementById("save-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("links-list")

saveBtn.addEventListener("click", function () {
    myLinks.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLinks", JSON.stringify(myLinks))
    render(myLinks)
})

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLinks = []
    render(myLinks)
})


function render(links) {
    let listItems = ""
    for (let i = 0; i < links.length; i++) {
        listItems += "<li><a href='" + links[i] + "' target='_blank'>" + links[i] + "</a></li>"
    }
    ulEl.innerHTML = listItems
}

let linksFromLocalStorage = JSON.parse(localStorage.getItem("myLinks"))
if (linksFromLocalStorage) {
    myLinks = linksFromLocalStorage
    render(myLinks)
}
