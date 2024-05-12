// Get DOM elements
const nmErrBox = document.getElementById('nmErrBox');
const nmInfo = document.getElementById('nmInfo');
const contactName = document.getElementById('contactName');
const nmErr = document.getElementById('nmErr');

// Event listener for input on the contactName field
contactName.addEventListener('input', function(){
    const nmValue = contactName.value;

    if(nmValue.length != 0 ){

        // Validation for length
    if (nmValue.length > 20) {
        // Show error message when mouse is over nmInfo
        nmInfo.addEventListener('mouseover', () => nmErr.innerHTML = 'No more than 20 characters');
        // Clear error message when mouse leaves nmInfo
        nmInfo.addEventListener('mouseout', () => nmErr.innerHTML = '');
        nmErrBox.style.display = 'flex';
        // Trim input to 15 characters
        contactName.value = nmValue.slice(0, 20);
    } else {
        nmErrBox.style.display = 'none';
        nmErr.innerHTML = ''; // Clear error message if input is valid
    }

    // Validation for letters only
    if (!/^[a-zA-Z\s]+$/.test(nmValue)){
        // Show error message when mouse is over nmInfo
        nmInfo.addEventListener('mouseover', () => nmErr.innerHTML = 'Letters Only Allowed');
        // Clear error message when mouse leaves nmInfo
        nmInfo.addEventListener('mouseout', () => nmErr.innerHTML = '');

        nmErrBox.style.display = 'flex';
        // Remove last character if not a letter
        contactName.value = contactName.value.slice(0, -1);
    }
        
    }
    else{
        nmErrBox.style.display = 'none';

    }
    
});

// ====== Phone Input Validation ======
// Get DOM elements
const phErrBox = document.getElementById('phErrBox');
const contactPhNo = document.getElementById('contactPhNo');
const phErr = document.getElementById('phErr');
const phInfo = document.getElementById('phInfo');

// Event listener for input on the contactPhNo field
contactPhNo.addEventListener('input', function() {
    const contactPhNoValue = contactPhNo.value;

    // Validate phone number format
    if (contactPhNoValue.length != 0) {
        if (!/^(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(contactPhNoValue)) {
            phErrBox.style.display = 'flex';
            phInfo.addEventListener('mouseover', () => phErr.innerHTML = 'Follow the Number Format');
            phInfo.addEventListener('mouseout', () => phErr.innerHTML = '');
            phErr.style.color = 'blue'; // Changes text color to blue
            phInfo.style.color = 'blue';
        } else {
            phErrBox.style.display = 'none';
            phErr.style.color = '';
            phInfo.style.color = '';
        }

        if(/[a-zA-Z]/.test(contactPhNoValue)){
            phInfo.addEventListener('mouseover', () => phErr.innerHTML = 'Letters Not allowed');
            phInfo.addEventListener('mouseout', () => phErr.innerHTML = '');
            phErr.style.color = 'red'; // Changes text color to blue
            phInfo.style.color = 'red';


        }

        
    } else {
        phErr.innerHTML = ''; // Clear error message if input is empty
        // phErrBox.style.display = 'none';

    }
    
});



// Form Submission
const fileUploadInput = document.getElementById('file-upload');

// Listen for the "change" event on the file input
fileUploadInput.addEventListener('change', function(event) {
    
    // Get the selected file
    const selectedImg = event.target.files[0];
   
    // Create a URL for the selected file and assign it to the image element
    const formImg = document.getElementById('formImg');
    if (formImg) {
        formImg.src = URL.createObjectURL(selectedImg);
    }
});



const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');

// only submit the form after checking the error box is empty
submitBtn.addEventListener('click', function(event){
       if(phErrBox.style.display === 'none'){
        contactForm.addEventListener('submit', handleSubmission);
    }
    else{
        event.preventDefault();
    }

})


function handleSubmission(event) {
    event.preventDefault();
    // Get form inputs
    const contactImg = document.getElementById('file-upload').files[0];
    // const contactName = contactForm['contactName'].value;
    const contactName = contactForm['contactName'].value.length == 0 ? contactForm['contactPhNo'].value : contactForm['contactName'].value;
    const contactPhNo = contactForm['contactPhNo'].value;

    // Create contact element
    const li = document.createElement('li');
    li.innerHTML = `
        <div class="contact">
            <img src="${contactImg ? URL.createObjectURL(contactImg) : 'imgs/noProfile.png'}" alt="Profile Image">
            <div>
                <h2>${contactName}</h2>
                <p>${contactPhNo}</p>
            </div>
        </div>
    `;

    // Append contact element to contacts list
    const contactsList = document.getElementById('contactsList');
    contactsList.appendChild(li);

    // Remove the image from the form page and set the default image 
    formImg.src ="imgs/addImage.png"
    // Finally ermove the given value will be cleared
    contactForm.reset();

    home.style.display = 'block';
    main.style.display = 'block';
    addContactSection.style.display = 'none'
    footer.style.display = 'none';

}

const home = document.getElementById('home');
const main = document.getElementById('main');

const addBtn = document.getElementById('addBtn');
const backBtn = document.getElementById('backBtn');

const addContactSection = document.getElementById('addContact')
const footer = document.getElementById('footer');

const CancelBtn = document.getElementById('CancelBtn');

addBtn.addEventListener('click', function(){
   
    home.style.display = 'none';
    main.style.display = 'none';
    addContactSection.style.display = 'block'
    footer.style.display = 'flex';
    
})

backBtn.addEventListener('click', function(){
    
    home.style.display = 'block';
    main.style.display = 'block';
    addContactSection.style.display = 'none'
    footer.style.display = 'none';

});

CancelBtn.addEventListener('click', function(){
    home.style.display = 'block';
    main.style.display = 'block';
    addContactSection.style.display = 'none';
    footer.style.display = 'none';
    formImg.src ="imgs/addImage.png"
    contactForm.reset();

})
