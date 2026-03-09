const container = document.getElementById("storeContainer");

fetch("http://localhost:3000/stores")
.then(response => response.json())
.then(stores => {

    stores.forEach(store => {

        const card = document.createElement("div");
        card.className = "storeCard";

        const name = document.createElement("h3");
        name.textContent = store.name;

        const district = document.createElement("p");
        district.textContent = "District: " + (store.district || "Unknown");
        
        const link = document.createElement("a");
        link.href = store.url;
        link.textContent = "Visit website";
        link.target = "_blank";

        card.appendChild(name);
        card.appendChild(district);
        card.appendChild(link);

        container.appendChild(card);

    });

});