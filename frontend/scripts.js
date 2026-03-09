fetch("http://localhost:3000/stores")
.then(response => response.json())
.then(data => {

    const list = document.getElementById("storeList");

    data.forEach(store => {

        const li = document.createElement("li");

        li.textContent = store.name + " - " + store.district;

        list.appendChild(li);

    });

});