const inputCharTitleRef = document.querySelector("#charTitle");
const inputImgUrlRef = document.querySelector("#imgUrl");
const inputCharDescriptionRef = document.querySelector("#charDescription");
const registerBtnRef = document.querySelector("#registerBtn");
let contentRef = document.querySelector("#content");
const charFormRef = document.querySelector("#charForm");

var formErrors = {
    imgUrl: true,
    charTitle: true,
    charDescription: true
};

function checkFormValidity() {
    const formErrorsArray = Object.values(formErrors);
    const formValidity = formErrorsArray.every(item => item === false);

    registerBtnRef.disabled = !formValidity;
}

function validateInput(inputRef) { 
    const inputValid = inputRef.checkValidity();
    const elementFatherRef = inputRef.parentElement;

    if (inputValid) {
        elementFatherRef.classList.remove('error');
    } else {
        elementFatherRef.classList.add('error');
    }

    formErrors[inputRef.id] = !inputValid;

    checkFormValidity();
}

function register(event) {
    
    event.preventDefault();
    
    let characters = [];

    let character = {
        imgUrl: "",
        charName: "",
        description: "" 
    }
    
        character.imgUrl = document.querySelector("#imgUrl").value;
        character.charName = document.querySelector("#charTitle").value;
        character.description = document.querySelector("#charDescription").value;
    
        characters.push(character);

        console.log(characters);

    for (const char of characters) {
        contentRef.innerHTML += `
            <div class="card">
                <div class="card-image">
                    <img src="${char.imgURL}" alt="">
                </div>
                <div class="card-content">
                    <h3>${char.charName}</h3>
                    <p>${char.description}</p>
                </div>        
            </div>`
    }

    registerBtnRef.disabled = true;
    charFormRef.reset();

    formErrors.imgUrl = true;
    formErrors.charTitle = true;
    formErrors.charDescription = true;

}

inputCharTitleRef.addEventListener('keyup', () => validateInput(inputCharTitleRef));
inputImgUrlRef.addEventListener('keyup', () => validateInput(inputImgUrlRef));
inputCharDescriptionRef.addEventListener('keyup', () => validateInput(inputCharDescriptionRef));
registerBtnRef.addEventListener('click', (event) => register(event));
