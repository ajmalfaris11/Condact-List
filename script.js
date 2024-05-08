// Form Submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', handleSubmission);

function handleSubmission(event) {
    event.preventDefault();
    // Get form inputs
    const contactImg = document.getElementById('file-upload').files[0];
    const contactName = contactForm['contactName'].value;
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

    contactForm['contactName'].value = "";
    contactForm['contactPhNo'].value = "";

}

const home = document.getElementById('home');
const main = document.getElementById('main');

const addBtn = document.getElementById('addBtn');
const backBtn = document.getElementById('backBtn');

const addContactSection = document.getElementById('addContact')
const footer = document.getElementById('footer');
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