
const swLoader = (visible) => {
	const loader = document.querySelector(".loader");
	if(visible === false || localStorage.length > 0) {
		loader.style.display = "none";
	} else {
		loader.style.display = "inline-block";
	}
 };

 swLoader();