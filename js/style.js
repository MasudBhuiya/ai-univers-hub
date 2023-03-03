const allData = async(idloading) =>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);
    const data = await res.json();
    displayData(data.data.tools, idloading);
    
}

const displayData = (data)=>{
    // data = data.slice()
    
    // const seeMore = document.getElementById('see-more');
    // if(data.length > 6){
    //     data = data.slice(0, 6);
    //     seeMore.classList.remove('d-none')
    // }
    // else{
    //     seeMore.classList.add('d-none');
    // }
    
    console.log(data)
    const cardContainer = document.getElementById('card-container');
    // cardContainer.innerHTML ='';
    data.forEach(singleData => {
        
        const createDiv = document.createElement('div');
    createDiv.classList.add('col');
    createDiv.innerHTML = `
    <div class="card h-100 p-3">
        <img src="${singleData.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5  class="card-title">Features</h5>
            <ol>
                <li>${singleData.features[0]}</li>
                <li>${singleData.features[1]}</li>
                <li>${singleData.features[2]}</li>
            </ol>
            </div>
        <div class="card-footer bg-white d-flex justify-content-between">
            <div>
                    <h5 class="card-title">${singleData.name}</h5>
                <div class="d-flex gap-2">
                <div><i class="fa-sharp fa-regular fa-calendar-days"></i></div>
                    <p>${singleData.published_in
                    }</p>
                </div>
            </div>
            <div  class=" d-flex align-items-center text-danger" ><i onclick="" class="fa-sharp fa-solid fa-arrow-right" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></div>
        </div>
    </div>
    `
    cardContainer.appendChild(createDiv);
    });
    toggleSpinner(false)
}

document.getElementById('btn-see-more').addEventListener('click', function(){
    toggleSpinner(true);
    allData(true);
})

const toggleSpinner = isloading =>{
    const loaderSection = document.getElementById('loader');
    if(isloading === true){
        loaderSection.classList.remove('d-none')
    }
    else{
        loaderSection.classList.add('d-none');
    }
}

const detail = () =>{
    const url = `
    https://openapi.programming-hero.com/api/ai/tool/${1}`
    console.log(url);
}



allData()