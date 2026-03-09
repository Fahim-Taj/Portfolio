function loadComponent(id, url) {
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error("Failed to load component");
            return response.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error("Error loading component:", error));
}

window.onload = () => {
    const prefix = window.location.pathname.includes("/pages/") ? "../" : "./";
    
    loadComponent("header-placeholder", `${prefix}components/header.html`);
    loadComponent("footer-placeholder", `${prefix}components/header.html`);
};