const select = document.getElementById('mountainSelect');
const infoDiv = document.getElementById('mountainInfo');

//loops through the array and creates elements for each mountain
mountainsArray.forEach(mountain => {
    const option = document.createElement('option');
    option.value = mountain.name; 
    option.textContent = mountain.name;
    select.appendChild(option);
});

//populates the card with the mountain information
select.addEventListener('change', () => {
    const selectedMountain = mountainsArray.find(mountain => mountain.name === select.value);
    if (selectedMountain) {
        let mountainHTML = `
            <h3>${selectedMountain.name}</h3>
            <p>Elevation: ${selectedMountain.elevation} feet</p>
            <p>Effort: ${selectedMountain.effort}</p>
            <p>Description: ${selectedMountain.desc}</p>
            <img src="../images/${selectedMountain.img}" alt="${selectedMountain.name}" width="200">
        `;
        infoDiv.innerHTML = mountainHTML;
    } else {
        infoDiv.innerHTML = '';
    }
});

// console.log(mountainsArray);