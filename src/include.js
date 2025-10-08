
async function loadComponent(selector, file) {
    const element = document.querySelector(selector);
    if (element) {
        try {
            const response = await fetch(file);
            const content = await response.text();
            element.innerHTML = content
        } catch (err) {
            console.error(`Error loading ${file}:`, err)
        }
    }
}

//Load both components
loadComponent("header", "/src/components/header.html");
loadComponent("footer", "/src/components/footer.html");