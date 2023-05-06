const input = document.getElementById("input")
const btnAdd = document.getElementById("add")
const note = document.getElementById("note")

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
    <button class="btn btn-danger">Borrar</button>
   `
   note.appendChild(ul)



   
})