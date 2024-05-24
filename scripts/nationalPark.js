const stateSelect = document.getElementById('stateSelect');
    const resultsDiv = document.getElementById('results');

    // Will populate the dropdown
    const states = nationalParksArray.reduce((acc, park) => {
        if (!acc.includes(park.State)) {
            acc.push(park.State);
        }
        return acc;
    }, []);

    states.sort().forEach(state => {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        stateSelect.appendChild(option);
    });

    function searchParks() {
        const selectedState = stateSelect.value;
        const filteredParks = nationalParksArray.filter(park => park.State === selectedState);
        
        if (filteredParks.length === 0) {
            resultsDiv.textContent = 'No parks found for the selected state/territory.';
        } else {
            resultsDiv.innerHTML = '<h3>Results:</h3>';
            filteredParks.forEach(park => {
                const parkInfo = `
                    <p><strong>${park.LocationName}</strong></p>
                    <p>Location: ${park.City}, ${park.State}</p>
                    <p>Address: ${park.Address}</p>
                    <p>Phone: ${park.Phone}</p>
                    <p>Latitude: ${park.Latitude}, Longitude: ${park.Longitude}</p>
                    <hr>
                `;
                resultsDiv.innerHTML += parkInfo;
            });
        }
    }
