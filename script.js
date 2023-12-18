//your JS code here. If required.
const button = document.getElementById("enterbtn");

const f1 = ()=> {
	console.log("Entered Metaverse");
}

button.addEventListener("click",f1);

function x() {
	button.removeEventListener("click",f1);
}