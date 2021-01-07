const previous = document.getElementsByClassName("previous")[0];
const next = document.getElementsByClassName("next")[0];
const image_div = document.querySelector(".images");
var left = parseFloat(window.getComputedStyle(image_div).getPropertyValue("left"));
var images = image_div.querySelectorAll("img");


function image_copy_add(){
	for (var i = 0 ; i<= 20 ; i++){
		images.forEach(function(item){
			var img = document.createElement("img");
			img.src = item.src;
			image_div.appendChild(img);
		});
	}
}
image_copy_add();
function previous_function(){
	if (left != 0) {
		left = left + 320;
		image_div.style.left = left + "px";
	}
}
function next_function(){
	images = image_div.querySelectorAll("img");
	left = (left-320);
	image_div.style.left = parseFloat(left) + "px";
}
previous.addEventListener("click",() => {
	previous_function();
});
next.addEventListener("click",() => {
	next_function();
});