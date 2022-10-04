
function gridSize()
{
let x = document.getElementById("gridvalue").value;
console.log(x)
let container = document.getElementById('container');
container.style.setProperty('--grid-rows', x);
container.style.setProperty('--grid-cols', x);
for(let i=0;i<(x*x);i++)
{
let box = document.createElement('div')
container.appendChild(box).className = "box";
}

document.querySelectorAll(".box").forEach(item => {
item.addEventListener('mouseover', event => {
item.style.backgroundColor = "red";
})
})
}

function reset()
{
   location.reload()
}