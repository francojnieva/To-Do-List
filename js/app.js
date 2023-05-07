const input = document.getElementById("input")
const btnAdd = document.getElementById("add")
const note = document.getElementById("note")

const noteAdd = []

btnAdd.addEventListener("click", () => {
   let inputContent = input.value
   inputContent = inputContent.trim()

   if (inputContent === "") {
    Swal.fire('Deja una nota para agregar a la lista')
    return
   }

   const ul = document.createElement("ul")

   ul.innerHTML = `
    <li>${inputContent}</li>
    <button class="btn btn-danger" id="btnDelete">Borrar</button>
   `
   note.appendChild(ul)

   noteAdd.push({
    note: inputContent
   })
   
})

