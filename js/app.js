const notesContainer = document.getElementById("noteContainer")
const input = document.getElementById("input")
const btnAdd = document.getElementById("add")

const noteAdd = []

btnAdd.addEventListener("click", () => {
   let inputContent = input.value
   inputContent = inputContent.trim()

   if (inputContent === "") {
    Swal.fire('Deja una nota para agregar a la lista')
    return
   }

   const divContainer = document.createElement("div")

   const note = document.createElement("li")
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

   btnDelete.addEventListener("click", deleteNote)

    noteAdd.push({
        note: note
    })
})

function deleteNote(e) {
    const item = e.target.parentElement
    notesContainer.removeChild(item)
}

   


    



