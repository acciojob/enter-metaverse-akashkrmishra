//your JS code here. If required.
const btn = document.getElementById("enterbtn");

const f1 = ()=> {
	console.log("Entered Metaverse");
}

btn.addEventListener("click",f1);

function x() {
	btn.removeEventListener("click",f1);
}