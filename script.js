const emailInput = document.querySelector('.emailInput');
const emailContainer = document.querySelector(".emailContainer");
const emailInputContainer = document.querySelector(".emailInputContainer");

emailInput.addEventListener('blur', function() {
	const email = emailInput.value;
	const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  		if (!emailRegEx.test(email) && emailInputContainer.children.length < 2) {
		    const newDiv = document.createElement("div");
			const newParagraph = document.createElement("p");
			newParagraph.innerHTML = "Please provide a valid email address."
			newParagraph.style.color = "red";
			newParagraph.style.fontStyle = "italic";
			newParagraph.style.fontSize = "13px"
			emailInputContainer.appendChild(newParagraph);
			emailInput.style.borderColor = "red";
				if (window.innerWidth < 1000){
					newParagraph.style.textAlign = "center";
				} else {
					newParagraph.style.textAlign = "left";
					newParagraph.style.marginLeft = "3rem";
				}
  }
});
