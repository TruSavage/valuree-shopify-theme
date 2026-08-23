document.addEventListener('DOMContentLoaded', () => {
  const toast = (message) => {
    let toastEl = document.querySelector('.valuree-toast');

    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'valuree-toast';
      document.body.appendChild(toastEl);
    }

    toastEl.textContent = message;
    toastEl.classList.add('show');

    setTimeout(() => {
      toastEl.classList.remove('show');
    }, 1800);
  };

  // Single-choice behavior inside every question block
  document.querySelectorAll('.question-block').forEach((block) => {
    const buttons = block.querySelectorAll('.choice');

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        buttons.forEach((btn) => {
          btn.classList.remove('active', 'purple-active');
        });

        const isPartnerCard = button.closest('.partner-card');

        if (isPartnerCard) {
          button.classList.add('purple-active');
        } else {
          button.classList.add('active');
        }
      });
    });
  });

  // Step navigation
  const nextPartnerButton = document.querySelector('.pink-action');
  if (nextPartnerButton) {
    nextPartnerButton.addEventListener('click', () => {
      document.querySelector('.partner-card')?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });

      toast('Partner step ready ♡');
    });
  }

  const seeMatchButton = document.querySelector('.purple-action');
  if (seeMatchButton) {
    seeMatchButton.addEventListener('click', () => {
      document.querySelector('.match-card')?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });

      toast('Calculating your match ✦');
    });
  }

  // Date action buttons
  const dateButtons = document.querySelectorAll('.date-buttons button');

  dateButtons.forEach((button) => {
    const text = button.textContent.trim().toLowerCase();

    if (text.includes('try another')) {
      button.addEventListener('click', () => {
        toast('Finding another Valurée date ✦');
      });
    }

    if (text.includes('save date')) {
      button.addEventListener('click', () => {
        localStorage.setItem(
          'valuree_saved_date',
          JSON.stringify({
            title: 'The Midnight Sweet Escape',
            savedAt: new Date().toISOString()
          })
        );

        toast('♡ Date saved');
      });
    }

    if (text.includes('share')) {
      button.addEventListener('click', async () => {
        const shareData = {
          title: 'Our Valurée Date',
          text: 'We found our next date on Valurée: The Midnight Sweet Escape',
          url: window.location.href
        };

        try {
          if (navigator.share) {
            await navigator.share(shareData);
          } else if (navigator.clipboard) {
            await navigator.clipboard.writeText(window.location.href);
            toast('Share link copied');
          } else {
            toast('Ready to share');
          }
        } catch (error) {
          // Ignore cancelled shares
        }
      });
    }
  });

  // Collection cards scroll back to generator for now
  document.querySelectorAll('.collection-item').forEach((item) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();

      document.querySelector('#generator')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      const label = item.querySelector('span')?.textContent?.trim() || 'Collection';
      toast(`${label} selected`);
    });
  });

  // Prevent demo buttons from submitting anything accidentally
  document.querySelectorAll('.choice, .card-action, .date-buttons button').forEach((button) => {
    button.setAttribute('type', 'button');
  });
});