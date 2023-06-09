// loadHeader.js
window.onload = function() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;

            const menuItems = [
                {name: "Home", link: "index.html"},
                {name: "Yoga Apps", link: "yoga_apps.html"},
                {name: "Backstage", link: "backstage.html"},
                {name: "Next YOGAFUNC Release", link: "next_yogafunc_release.html"},
                // Add more items as needed
            ];

            let menuHTML = "";

            menuItems.forEach(item => {
                menuHTML += `<a href="${item.link}">${item.name}</a>`;
            });

            document.getElementById('menu').innerHTML = menuHTML;
        });
};
