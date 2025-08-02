function showSection(sectionId, event) {
  if (event) event.preventDefault();

 
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    if (section.classList.contains('active')) {
      section.style.animation = 'fadeOut 0.3s ease-out forwards';
      setTimeout(() => {
        section.classList.remove('active');
        section.style.display = 'none';
        section.style.animation = '';
      }, 300);
    }
  });

  
  setTimeout(() => {
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
      activeSection.style.display = 'block';
      setTimeout(() => {
        activeSection.classList.add('active');
      }, 10);
    }
  }, 300);
}


const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioCards = document.querySelectorAll('.portfolio-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
   
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

   
    portfolioCards.forEach(card => {
      const category = card.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        card.style.display = 'block';
        card.style.animation = 'fadeInUp 0.5s ease-out';
      } else {
        card.style.animation = 'fadeOut 0.5s ease-out forwards';
        setTimeout(() => {
          card.style.display = 'none';
          card.style.animation = '';
        }, 300);
      }
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  showSection('about');

  
  setTimeout(() => {
    const fillElements = document.querySelectorAll('.fill');
    fillElements.forEach(fill => {
      const width = fill.style.width;
      fill.style.width = '0';
      setTimeout(() => {
        fill.style.width = width;
      }, 100);
    });
  }, 500);
});


const style = document.createElement('style');
style.textContent = `
  @keyframes fadeOut {
    from { opacity: 1; transform: translateY(0); }
    to { opacity: 0; transform: translateY(20px); }
  }
`;
document.head.appendChild(style);




// ===== МОБИЛЬНЫЙ JS =====
document.addEventListener('DOMContentLoaded', function() {
  
  if (window.innerWidth <= 768) {
   
    const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
    const backButton = document.querySelector('.back-button');

    mobileNavItems.forEach(item => {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        const section = this.getAttribute('data-section');

        
        document.body.classList.add('show-block2');

       
        backButton.style.display = 'block';

       
        showSection(section);

       
        mobileNavItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
      });
    });

    
    backButton.addEventListener('click', function() {
     
      document.body.classList.remove('show-block2');
      this.style.display = 'none';
    });
  }
});






if (window.innerWidth <= 768) {
  let lastScroll = 0;
  const scrollThreshold = 200; 
  const mobileNav = document.querySelector('.mobile-nav');
  const backButton = document.querySelector('.back-button');

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
     
      mobileNav.classList.add('hide');
      if (backButton.style.display === 'block') {
        backButton.classList.add('hide');
      }
    } else if (currentScroll < lastScroll || currentScroll <= 50) {
     
      mobileNav.classList.remove('hide');
      if (backButton.style.display === 'block') {
        backButton.classList.remove('hide');
      }
    }

    lastScroll = currentScroll;
  });
}



  function customAlert(message) {
  const alertBox = document.getElementById('custom-alert');
  const alertMessage = document.getElementById('custom-alert-message');
  const alertOk = document.getElementById('custom-alert-ok');

  alertMessage.textContent = message;
  alertBox.style.display = 'flex';

  alertOk.onclick = () => {
    alertBox.style.display = 'none';
  };
}


