const notesContainer = document.getElementById("noteContainer")
const input = document.getElementById("input")
const btnAdd = document.getElementById("add")

btnAdd.addEventListener("click", () => {
   let inputContent = input.value
   inputContent = inputContent.trim()

   if (inputContent === "") {
    Swal.fire('Deja una nota para agregar a la lista')
    return
   }

   const divContainer = document.createElement("div")

   const note = document.createElement("textarea")
   note.textContent = inputContent

   const btnDelete = document.createElement("button")
   btnDelete.classList.add("btn")
   btnDelete.classList.add("btn-danger")
   btnDelete.textContent = "Borrar"

   const btnDone = document.createElement("button")
   btnDone.classList.add("btn")
   btnDone.classList.add("btn-success")
   btnDone.textContent = "Hecho"
   
   
   divContainer.appendChild(note)
   divContainer.appendChild(btnDelete)
   divContainer.appendChild(btnDone)
   
   
    notesContainer.appendChild(divContainer)
   
    input.value = ""

    btnDelete.addEventListener("click", deleteNote)

    btnDone.addEventListener("click", () => {
        note.classList.add("done")
    })
})

function deleteNote(e) {
    const item = e.target.parentElement
    notesContainer.removeChild(item)
}
   


    



