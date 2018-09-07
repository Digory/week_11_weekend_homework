document.addEventListener('DOMContentLoaded', () =>{
    const form = document.querySelector('#animal-form');
    form.addEventListener('submit', handleFormSubmit);
});

const handleFormSubmit = function(event){
    event.preventDefault();
    const animalList = document.querySelector('#animal-list');
    const newItem = document.createElement('li');
    newItem.textContent = `The animal: ${event.target.name.value} is a member of the ${event.target.species.value} species and lives in ${event.target.continent.value} (or used to)`;
    animalList.appendChild(newItem);
};