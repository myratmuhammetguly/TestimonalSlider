const reviews = [
    {
        id: 1,
        name: 'john smith',
        job: 'web developer',
        img: 'images/profile_1.PNG',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        id: 2,
        name: 'Silvia Kentson',
        job: 'UX designer',
        img: 'images/profile_2.PNG',
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        id: 3,
        name: 'Kevin Kebellerio',
        job: 'Front End developer',
        img: 'images/profile_3.PNG',
        text: 't enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
        id: 4,
        name: 'Jason Stevenson',
        job: 'Back End developer',
        img: 'images/profile_4.PNG',
        text: 'First up on this list, we have the Lorem Ipsum generator from lipsum.com. If you’ve never used a dummy text generator before, this is a great place to start, as it not only allows you to easily create dummy text at will, but also helps to explain what Lorem Ipsum is.'
    },
];

//select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

//initial item
var currentItem = 0;

window.addEventListener("DOMContentLoaded", function() {
    showPerson(currentItem);
});

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// change person
nextBtn.addEventListener("click", function(){
    currentItem++;
    if (currentItem>reviews.length-1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener("click", function(){
    currentItem--;
    if (currentItem<0) {
        currentItem = reviews.length -1;
    }
    showPerson(currentItem);
});