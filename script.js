document.addEventListener("DOMContentLoaded", () => {
    const reviewCards = document.querySelectorAll('.review-card');
    const checkVisibility = () => {
      const windowHeight = window.innerHeight;
      reviewCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        
        if (cardTop < windowHeight - 100) {
          card.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); 
});
