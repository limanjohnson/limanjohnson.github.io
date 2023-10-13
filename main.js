// Get the current page's filename (e.g., "about.html")
const currentPage = window.location.pathname.split("/").pop();

// Get all navigation links
const navLinks = document.querySelectorAll(".topnav a");

// Loop through the links and add the "active" class to the current page's link
navLinks.forEach((link) => {
	if (link.getAttribute("href") === currentPage) {
		link.classList.add("active");
	}
});
