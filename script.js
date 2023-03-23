

// const Carray=[
//     {
//         name: 'fries',
//         img: 'images/fries.png'
//       },
//       {
//         name: 'cheeseburger',
//         img: 'images/cheeseburger.png'
//       },
//       {
//         name: 'ice-cream',
//         img: 'images/ice-cream.png'
//       },
//       {
//         name: 'pizza',
//         img: 'images/pizza.png'
//       },
//       {
//         name: 'milkshake',
//         img: 'images/milkshake.png'
//       },
//       {
//         name: 'hotdog',
//         img: 'images/hotdog.png'
//       },
//       {
//         name: 'fries',
//         img: 'images/fries.png'
//       },
//       {
//         name: 'cheeseburger',
//         img: 'images/cheeseburger.png'
//       },
//       {
//         name: 'ice-cream',
//         img: 'images/ice-cream.png'
//       },
//       {
//         name: 'pizza',
//         img: 'images/pizza.png'
//       },
//       {
//         name: 'milkshake',
//         img: 'images/milkshake.png'
//       },
//       {
//         name: 'hotdog',
//         img: 'images/hotdog.png'
//       }
// ]

// let arr=[];
// Carray.sort(() => 0.5 - Math.random());
// console.log(Carray);
// const gridd=document.querySelector('.grid');
// for (let index = 0; index < Carray.length; index++) {
//   const card = document.createElement('img');
//   card.setAttribute('src','images/blank.png');
//   card.setAttribute('data-id',index);
//   card.classList.add('hello');
//   console.log(card);
 
//   card.addEventListener('click', flip);
 
//   gridd.appendChild(card);

  
    
// }

// function flip(){
//     const id=this.getAttribute('data-id');
//     this.setAttribute('src',Carray[id].img);
//     arr.push(Carray[id].name);
//     if(arr.length===2){

//         if(arr[0]==arr[1]){
//             prompt('double clicked');
//             const v=arr[0];
//             arr=[];
//             arr[0]=v;
//         }

//     else if(arr[0]===arr[1]){
//  console.log('you win');
//  arr=[];
//      }
//      else{
        
//         arr=[];
//         console.log('hello');
//         console.log(arr);
//     }
    
//     }
    
   
 
//    }


document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      },
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      }
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })