const users=[
     {  
        user: 1,
        names: 'Susan Smith',
        position: "WEB DEVELOPER",
        img: "./img/user1.jpeg",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
    },
    {
        user: 2,
        names: "Anna Johnson",
        position: 'WEB DESIGNER',
        img: "./img/user2.jpeg",
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
    },
    {
        user: 3,
        names: "Indekwe Fabrice",
        position: 'INTERN',
        img: "./img/user3.jpeg",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
    },
    {
        user: 4,
        names: 'Gashagaza Jordy',
        position: 'INTERN',
        img: "./img/user4.jpg",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
    }
]
    const userNames=document.getElementById('named');
    const userPosition=document.getElementById('positioned');
    const image=document.getElementById('imaged')
    const text=document.getElementById('texted')
    let curr=0;
const prevButton = document.querySelector('.prev-button');
const nextButton=document.querySelector('.next-button');
const surprise=document.querySelector('.surprise-button')
window.addEventListener('DOMContentLoaded' ,userContentChanger(curr));
prevButton.addEventListener('click', function(){
    
 if (curr<0){
        curr=users.length-1;
        userContentChanger(curr);
    }
    else {
        curr--;
        userContentChanger(curr)
    }
});
function userContentChanger(curr){
        
    userNames.textContent=`${users[curr].names}`;
   userPosition.textContent=`${users[curr].position}`;
    text.textContent=`${users[curr].text}`;
    image.setAttribute('src', `${users[curr].img}`)
};
nextButton.addEventListener('click', function(){
    
    if (curr>users.length-1){
           curr=0
           userContentChanger(curr);
       }
       else {
           curr++;
           userContentChanger(curr)
       }
   });
   surprise.addEventListener('click', function(){
            curr=Math.floor(Math.random()*users.length);
            userContentChanger(curr);
       
   });
   