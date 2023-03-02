const allData = async() =>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);
    const data = await res.json();
    displayData(data.data.tools);
    console.log(data)
}

const displayData = (data)=>{
    console.log(data)
    const cardContainer = document.getElementById('card-container');
    data.forEach(singleData => {
        const createDiv = document.createElement('div');
    createDiv.classList.add('col');
    createDiv.innerHTML = `
    <div class="card h-100 p-3">
        <img src="${singleData.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Features</h5>
            <ol>
                <li>${singleData.features[0]}</li>
                <li>${singleData.features[1]}</li>
                <li>${singleData.features[2]}</li>
            </ol>
            </div>
        <div class="card-footer bg-white">
            <h5 class="card-title">${singleData.name}</h5>
        <div class="d-flex gap-2">
        <div><i class="fa-sharp fa-regular fa-calendar-days"></i></div>
            <p>${singleData.published_in
            }</p>
        </div>
        </div>
    </div>
    `
    cardContainer.appendChild(createDiv);
    });
}

allData()