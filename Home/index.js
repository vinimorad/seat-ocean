function showFirstCardShadow() {
    const firstCard = document.getElementById('card-1');
    const firstParagraphsOfCards = document.getElementById('firstofparagraphs');

    firstCard.classList.add('shadow');
    firstParagraphsOfCards.style.display = "block";

    firstCard.addEventListener('mouseleave', () =>{
        firstCard.classList.remove('shadow');
        firstParagraphsOfCards.style.display = "none"
    })
}

function showSecondCardShadow() {
    const secondCard = document.getElementById('card-2');
    const secondParagraphsOfCards = document.getElementById('secondofparagraph');

    secondCard.classList.add('shadow');
    secondParagraphsOfCards.style.display = "block";

    secondCard.addEventListener('mouseleave', () =>{
        secondCard.classList.remove('shadow');
        secondParagraphsOfCards.style.display = "none";
    })
}

function showThirdCardShadow() {
  const thirdCard = document.getElementById('card-3');
  const thirdParagraphsOfCards = document.getElementById('thirdofparagraph');

  thirdCard.classList.add('shadow');
  thirdParagraphsOfCards.style.display = "block";
  
  thirdCard.addEventListener('mouseleave', () =>{
      thirdCard.classList.remove('shadow');
      thirdParagraphsOfCards.style.display = "none";
  })
}

function showMobileMenu() {
    const icon = document.getElementById('icon-menu');
    const mobilemenu = document.getElementById('mobilemenu');
    icon.style.display = "none";
    mobilemenu.style.display = "block";
}

function hideMobileMenu() {
    const mobilemenu = document.getElementById('mobilemenu');
    const icon = document.getElementById('icon-menu');
    mobilemenu.style.display = "none";
    icon.style.display = "block";

}