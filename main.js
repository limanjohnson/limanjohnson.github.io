document.addEventListener("DOMContentLoaded", function () {
	// JavaScript to mark the active link
	const currentPage = window.location.pathname.split("/").pop();
	const navLinks = document.querySelectorAll(".topnav a");

	navLinks.forEach((link) => {
		if (link.getAttribute("href") === currentPage) {
			link.classList.add("active");
		}
	});

	// Add a click event listener to the navigation links
	navLinks.forEach((link) => {
		link.addEventListener("click", function () {
			// Remove the "active" class from all links
			navLinks.forEach((link) => {
				link.classList.remove("active");
			});

			// Add the "active" class to the clicked link
			this.classList.add("active");
		});
	});
});
