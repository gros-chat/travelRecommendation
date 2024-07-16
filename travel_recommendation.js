let nameElement;
let resultDiv;

window.onload = function(){
  nameElement = document.getElementById("nameC");
  resultDiv = document.getElementById('result1');
  resultDiv2 = document.getElementById('result2');
}

function searchCondition() {
  const input = document.getElementById('search-input').value.toLowerCase();
  resultDiv.innerHTML = '';
const resulContainer = document.createElement('div');


  fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
      const country = data.countries.find(item => item.name.toLowerCase() === input);

      if (input=="temple" || input =="temples"){
        
        const temple = input;
        const nameT1 = data.temples[0].name;
        const imageT1 = data.temples[0].imageUrl;
        const descriptionT1 = data.temples[0].description;
        const nameT2 = data.temples[1].name;
        const imageT2 = data.temples[1].imageUrl;
        const descriptionT2 = data.temples[1].description;

        resultDiv.innerHTML += `<h2>${nameT2}</h2>`;
        resultDiv.innerHTML += `<img src="${imageT2}" alt="hjh">`;
        resultDiv.innerHTML += `<p><strong>Description:</strong> ${descriptionT2}</p>`;

        resultDiv.innerHTML += `<h2>${nameT1}</h2>`;
        resultDiv.innerHTML += `<img src="${imageT1}" alt="hjh">`;
        resultDiv.innerHTML += `<p><strong>Description:</strong> ${descriptionT1}</p>`;

      }
      else if (input=="beach" || input =="beaches"){
        const beach = input;

        const temple = input;
        const nameT1 = data.beaches[0].name;
        const imageT1 = data.beaches[0].imageUrl;
        const descriptionT1 = data.beaches[0].description;
        const nameT2 = data.beaches[1].name;
        const imageT2 = data.beaches[1].imageUrl;
        const descriptionT2 = data.beaches[1].description;

        resultDiv.innerHTML += `<h2>${nameT2}</h2>`;
        resultDiv.innerHTML += `<img src="${imageT2}" alt="hjh">`;
        resultDiv.innerHTML += `<p><strong>Description:</strong> ${descriptionT2}</p>`;

        resultDiv2.innerHTML += `<h2>${nameT1}</h2>`;
        resultDiv2.innerHTML += `<img src="${imageT1}" alt="hjh">`;
        resultDiv2.innerHTML += `<p><strong>Description:</strong> ${descriptionT1}</p>`;
        // resultDiv2.style.backgroundColor='white';


      }
      else if (country) {
        const name = country.name;
        const imageUrl = country.cities[0].imageUrl;
        const description = country.cities[0].description;

        // nameElement.innerHTML = description;
        // resultDiv.appendChild(nameElement);
        // resultDiv.innerHTML += `<h2>${name}</h2>`;

        resultDiv.innerHTML += `<img src="${imageUrl}" alt="hjh">`;
        resultDiv.innerHTML +=`<br>`
        resultDiv.innerHTML += `<p><strong>Description:</strong> ${description}</p>`;

        const imageUrl2 = country.cities[1].imageUrl;
        const description2 = country.cities[1].description;

        // nameElement.innerHTML = description2;
        // resultDiv2.appendChild(nameElement);
        // resultDiv.innerHTML += `<h2>${name}</h2>`;
        resultDiv2.innerHTML += `<img src="${imageUrl2}" alt="hjh">`;
        resultDiv2.innerHTML +=`<br>`
        resultDiv2.innerHTML += `<p><strong>Description:</strong> ${description2}</p>`;
        

        // const nameT1 = data.countries[country].name;
        // const imageT1 = data.countries[country].imageUrl;
        // const descriptionT1 = data.countries[country].description;
        // const nameT2 = data.countries[country].name;
        // const imageT2 = data.countries[country].imageUrl;
        // const descriptionT2 = data.countries[country].description;

        // resultDiv.innerHTML += `<h2>${nameT2}</h2>`;
        // resultDiv.innerHTML += `<img src="${imageT2}" alt="hjh">`;
        // resultDiv.innerHTML += `<p><strong>Description:</strong> ${descriptionT2}</p>`;

        // resultDiv.innerHTML += `<h2>${nameT1}</h2>`;
        // resultDiv.innerHTML += `<img src="${imageT1}" alt="hjh">`;
        // resultDiv.innerHTML += `<p><strong>Description:</strong> ${descriptionT1}</p>`;



      }
      
      else {
        resultDiv.innerHTML = 'Country not found.';
      }
    })
    .catch(error => {
      console.error('Error:', error);
    //   resultDiv.innerHTML = 'An error occurred while fetching data.';
    });
}

function setElement(oneElement, load) {
  oneElement.innerHTML = load;
}

function reset(){
  // resultDiv.innerHTML = '';
  // resultDiv.innerHTML = `<h2>${""}</h2>`;
  // resultDiv.innerHTML += `<img src="${""}" alt="hjh">`;
  // resultDiv.innerHTML += `<p><strong>Symptoms:</strong> ${""}</p>`;
  const leres = document.getElementById("result");
  leres.innerHTML="";
};