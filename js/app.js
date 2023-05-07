const note = document.getElementById("note")
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
   divContainer.innerHTML = `
        <li>${inputContent}</li>
        <button class="btn btn-danger">Borrar</button>
    `
    
    note.appendChild(divContainer)
    
    const btnDelete = document.querySelector(".btn-danger")

    btnDelete.addEventListener("click", (e) => {
        const element = e.target.parentElement
        note.removeChild(element)
    })

    noteAdd.push({
        note: inputContent
    })
})

   


    



