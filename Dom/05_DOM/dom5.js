// ⚡72. DOM 12 Events
const $button = document.getElementById("button1")
$button.addEventListener("click", (e)=>{
console.log(e)
console.log(e.type)
console.log(e.target)
})

const $input = document.getElementById("input1")
$input.addEventListener("keyup", (e)=>{
console.log(e)
console.log(e.type)
console.log(e.target)
console.log(e.target.value)
})