document.addEventListener('DOMContentLoaded', () =>{
    const form = document.querySelector('#animal-form');
    form.addEventListener('submit', handleFormSubmit);
    const deleteForm = document.querySelector('#delete-form');
    deleteForm.addEventListener('submit', handleDeleteButton);
    const animalOpinions = document.querySelector('#animal-opinions');
    animalOpinions.addEventListener('submit', handleAnimalOpinionSubmit);
    animalOpinions.addEventListener('change', handleAnimalOpinionChange);
});

const getAnimalList = function(){
    const animalList = document.querySelector('#animal-list');
    return animalList;
}

const handleFormSubmit = function(event){
    event.preventDefault();
    const newItem = document.createElement('li');
    newItem.textContent = `The animal: ${event.target.name.value} is a member of the ${event.target.species.value} species and lives in ${event.target.continent.value} (or used to)`;
    getAnimalList().appendChild(newItem);
};

const handleDeleteButton = function(event){
    event.preventDefault();
    while(getAnimalList().firstChild){
        getAnimalList().removeChild(getAnimalList().firstChild);
    }
}

const handleAnimalOpinionSubmit = function(event){
    event.preventDefault();
//    const displayResult = document.createElement('p');
    const displayResult = document.querySelector('#display-answer');
    const opinion = new FormData(this);
    if(opinion.get('animal-opinion') !== "love-them"){
        displayResult.textContent = "Sorry wrong answer, try again.";
    } else{
        displayResult.textContent = "Correct!";
    }
    // if(this.lastChild){
    //     this.removeChild(this.lastChild);
    // }
    // this.appendChild(displayResult);
}

const handleAnimalOpinionChange = function(event){
    const helpfulBox = document.querySelector('#helpbox');
    const opinion = new FormData(this);
    switch(opinion.get('animal-opinion')){
        case 'dont-like':
        helpfulBox.textContent = "come on, seriously?";
        break;
        case 'theyre-ok':
        helpfulBox.textContent = "a bit better";
        break;
        case 'love-them':
        helpfulBox.textContent = "sounds about right";
        break;
    }
}