document.addEventListener('DOMContentLoaded', () =>{
    addFormListeners();
    addOpinionListeners();
    addButtonListeners();
    addGameListener();
});

const addFormListeners = function(){
    const form = document.querySelector('#animal-form');
    form.addEventListener('input', handleTextInput);
    form.addEventListener('input', revealSubmitButton);
    form.addEventListener('submit', handleFormSubmit);
    const deleteForm = document.querySelector('#delete-form');
    deleteForm.addEventListener('submit', handleDeleteButton);
}

const addOpinionListeners = function(){
    const animalOpinions = document.querySelector('#animal-opinions');
    animalOpinions.addEventListener('submit', handleAnimalOpinionSubmit);
    animalOpinions.addEventListener('change', handleAnimalOpinionChange);
}

const addButtonListeners = function(){
    const formRevealButton = document.querySelector('#reveal-animal-form');
    formRevealButton.addEventListener('click', handleRevealFormClick);
    const quizRevealButton = document.querySelector('#reveal-quiz');
    quizRevealButton.addEventListener('click', handleRevealQuizClick);
    const gameRevealButton = document.querySelector('#reveal-game');
    gameRevealButton.addEventListener('click', handleRevealGameClick);
}

const addGameListener = function(){
    const gameInput = document.querySelector('#game-input');
    gameInput.addEventListener('input', handleGameInput);
}

const handleGameInput = function(event){
    const funGame = document.querySelector('#fun-game');
    if(event.target.value === 'Digory is cool'){
        const gameCompleted = document.createElement('h1');
        gameCompleted.textContent = "Well done!";
        funGame.appendChild(gameCompleted);
    }
}

const getAnimalList = function(){
    const animalList = document.querySelector('#animal-list');
    return animalList;
}

const handleTextInput = function(){
    const form = document.querySelector('#animal-form');
    const wellDoneText = document.querySelector('#well-done');
    wellDoneText.textContent = `Look at all these letters you've typed: ${form.name.value+form.species.value}. Well done!`;
}

const revealSubmitButton = function(){
    const form = document.querySelector('#animal-form');
    if(form.name.value && form.species.value && form.continent.value){
        form.formSubmit.style.display = 'block';
    }
    else{
        form.formSubmit.style.display = 'none';
    }
}

const handleFormSubmit = function(event){
    event.preventDefault();
    const newItem = document.createElement('li');
    newItem.textContent = `The animal: ${event.target.name.value} is a member of the ${event.target.species.value} species and lives in ${event.target.continent.value} (or used to)`;
    getAnimalList().appendChild(newItem);
    const formDeleteButton = document.querySelector('#delete-button');
    formDeleteButton.style.display = 'block';
};

const handleDeleteButton = function(event){
    event.preventDefault();
    while(getAnimalList().firstChild){
        getAnimalList().removeChild(getAnimalList().firstChild);
    }
}

const handleAnimalOpinionSubmit = function(event){
    event.preventDefault();
    const displayResult = document.querySelector('#display-answer');
    const opinion = new FormData(this);
    if(opinion.get('animal-opinion') !== "love-them"){
        displayResult.textContent = "Sorry wrong answer, try again.";
    } else{
        displayResult.textContent = "Correct!";
    }
}

const handleAnimalOpinionChange = function(){
    const helpfulBox = document.querySelector('#helpbox');
    const opinion = new FormData(this);
    switch(opinion.get('animal-opinion')){
        case 'dont-like':
        helpfulBox.textContent = "come on, that can't be true";
        break;
        case 'theyre-ok':
        helpfulBox.textContent = "a bit better";
        break;
        case 'love-them':
        helpfulBox.textContent = "sounds about right";
        break;
    }
}

const handleRevealFormClick = function(){
    const formToReveal = document.querySelector('#first-form');
    if(formToReveal.style.display === 'block'){
        formToReveal.style.display = 'none';
    } else{
        formToReveal.style.display = 'block';
    }   
}

const handleRevealQuizClick = function(){
    const quizToReveal = document.querySelector('#second-form');
    if(quizToReveal.style.display === 'block'){
        quizToReveal.style.display = 'none';
    } else{
        quizToReveal.style.display = 'block';
    }
}

const handleRevealGameClick = function(){
    const gameToReveal = document.querySelector('#fun-game');
    if(gameToReveal.style.display === 'block'){
        gameToReveal.style.display = 'none';
    } else{
        gameToReveal.style.display = 'block';
    }
}