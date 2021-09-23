let inputText = document.getElementById('ourform');
let inputfield = document.getElementById('ourfield');
let inputlist = document.getElementById('ourlist');

inputText.addEventListener("submit", (e)=>{
 e.preventDefault();
 createItems(inputfield.value);
    
});
function createItems(x){
    let ourHtml= `<li>${x} <button onclick="editItems(this)">Edit</button> <button onclick="deleteItems(this)">Delete</button>  </li>`;
    inputlist.insertAdjacentHTML("beforeend",ourHtml);
    inputfield.value="";
    inputfield.focus();
}
function deleteItems(deleteitem){
    deleteitem.parentElement.remove();
}x  

function editItems(edititem){
  edititem.x
}
// https://data-flair.training/blogs/javascript-project-to-do-list/