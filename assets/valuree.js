document.addEventListener('DOMContentLoaded', () => {
  const state = {
    you: {
      mood: 'Romantic',
      budget: '$25',
      place: 'Go Out',
      time: '2–3 Hours'
    },
    partner: {
      mood: 'Adventurous',
      budget: '$50',
      place: 'Go Out',
      time: '2–3 Hours'
    }
  };

  const dateIdeas = [
    {
      title: 'The Midnight Sweet Escape',
      moods: ['Romantic', 'Adventurous'],
      budgets: ['$25', '$50'],
      places: ['Go Out'],
      times: ['2–3 Hours'],
      cost: '$20 – $30',
      duration: '2.5 HOURS',
      location: 'OUTDOORS',
      steps: [
        ['7:00 PM', 'Sunset Walk', 'Take a scenic walk and enjoy the view together.'],
        ['8:00 PM', 'Grab a Sweet Treat', 'Pick up dessert from a local spot you love.'],
        ['8:30 PM', 'Question Game', 'Play a few questions and learn something new about each other.'],
        ['9:00 PM', 'Our Song Moment', 'Each pick a song that reminds you of each other.']
      ]
    },
    {
      title: 'Cozy Night In',
      moods: ['Romantic', 'Relaxed'],
      budgets: ['$0', '$25'],
      places: ['Stay In'],
      times: ['2–3 Hours', 'Half Day'],
      cost: '$0 – $25',
      duration: '2–3 HOURS',
      location: 'AT HOME',
      steps: [
        ['7:00 PM', 'Cook Together', 'Make a simple dinner or order your favorite comfort food.'],
        ['8:00 PM', 'Pick a Movie', 'Choose something neither of you has seen before.'],
        ['9:30 PM', 'Dessert Break', 'Make or share a late-night dessert.'],
        ['10:00 PM', 'Phone-Free Talk', 'Put the phones away and just catch up.']
      ]
    },
    {
      title: 'Adventure After Dark',
      moods: ['Adventurous', 'Spontaneous'],
      budgets: ['$25', '$50', '$100+'],
      places: ['Go Out'],
      times: ['2–3 Hours', 'Half Day'],
      cost: '$30 – $75',
      duration: '3 HOURS',
      location: 'OUT',
      steps: [
        ['6:30 PM', 'Mystery Destination', 'Pick a nearby place neither of you has been.'],
        ['7:30 PM', 'Try Something New', 'Choose an activity you would not normally do.'],
        ['9:00 PM', 'Late Bite', 'Find a casual spot and recap your favorite part.']
      ]
    },
    {
      title: 'Zero-Dollar Love Night',
      moods: ['Romantic', 'Fun', 'Relaxed'],
      budgets: ['$0'],
      places: ['Stay In', 'Either'],
      times: ['1 Hour', '2–3 Hours'],
      cost: '$0',
      duration: '1–2 HOURS',
      location: 'ANYWHERE',
      steps: [
        ['7:00 PM', 'Memory Challenge', 'Each share your favorite memory together.'],
        ['7:30 PM', 'Playlist Swap', 'Pick three songs for each other.'],
        ['8:00 PM', 'Mini Photo Shoot', 'Take fun photos together using your phones.']
      ]
    },
    {
      title: 'The Fun Night Challenge',
      moods: ['Fun', 'Spontaneous'],
      budgets: ['$25', '$50'],
      places: ['Go Out', 'Either'],
      times: ['2–3 Hours'],
      cost: '$20 – $50',
      duration: '2–3 HOURS',
      location: 'FLEXIBLE',
      steps: [
        ['7:00 PM', 'Pick a Challenge', 'Choose bowling, arcade games, mini golf, or something competitive.'],
        ['8:15 PM', 'Winner Picks Dessert', 'The winner chooses where to get dessert.'],
        ['9:00 PM', 'Photo Finish', 'Take one ridiculous photo to remember the night.']
      ]
    }
  ];

  let currentMatches = [];
  let currentDateIndex = 0;

  const toast = (message) => {
    let el = document.querySelector('.valuree-toast');

    if (!el) {
      el = document.createElement('div');
      el.className = 'valuree-toast';
      document.body.appendChild(el);
    }

    el.textContent = message;
    el.classList.add('show');

    clearTimeout(el._timer);

    el._timer = setTimeout(() => {
      el.classList.remove('show');
    }, 1800);
  };

  const cleanText = (value = '') =>
    value.replace(/[♥♡☺△☁✦⌂▣?]/g, '').trim();

  const getQuestionType = (block) => {
    const heading = block.querySelector('h3')?.textContent?.toLowerCase() || '';

    if (heading.includes('mood')) return 'mood';
    if (heading.includes('budget')) return 'budget';
    if (heading.includes('stay in')) return 'place';
    if (heading.includes('time')) return 'time';

    return null;
  };

  const syncInitialStateFromUI = () => {
    document.querySelectorAll('.your-card .question-block').forEach((block) => {
      const type = getQuestionType(block);
      const selected = block.querySelector('.choice.active');

      if (type && selected) {
        state.you[type] = cleanText(selected.textContent);
      }
    });

    document.querySelectorAll('.partner-card .question-block').forEach((block) => {
      const type = getQuestionType(block);
      const selected = block.querySelector('.choice.purple-active');

      if (type && selected) {
        state.partner[type] = cleanText(selected.textContent);
      }
    });
  };

  const attachChoiceHandlers = () => {
    document.querySelectorAll('.your-card .question-block').forEach((block) => {
      const type = getQuestionType(block);

      block.querySelectorAll('.choice').forEach((button) => {
        button.addEventListener('click', () => {
          block.querySelectorAll('.choice').forEach((btn) => {
            btn.classList.remove('active');
          });

          button.classList.add('active');

          if (type) {
            state.you[type] = cleanText(button.textContent);
          }
        });
      });
    });

    document.querySelectorAll('.partner-card .question-block').forEach((block) => {
      const type = getQuestionType(block);

      block.querySelectorAll('.choice').forEach((button) => {
        button.addEventListener('click', () => {
          block.querySelectorAll('.choice').forEach((btn) => {
            btn.classList.remove('purple-active');
          });

          button.classList.add('purple-active');

          if (type) {
            state.partner[type] = cleanText(button.textContent);
          }
        });
      });
    });
  };

  const calculateCompatibility = () => {
    const categories = ['mood', 'budget', 'place', 'time'];
    let points = 0;

    categories.forEach((category) => {
      if (state.you[category] === state.partner[category]) {
        points += 25;
      } else {
        if (category === 'budget') {
          const order = ['$0', '$25', '$50', '$100+'];
          const a = order.indexOf(state.you.budget);
          const b = order.indexOf(state.partner.budget);

          if (Math.abs(a - b) === 1) {
            points += 15;
          } else {
            points += 5;
          }
        }

        if (category === 'place') {
          if (
            state.you.place === 'Either' ||
            state.partner.place === 'Either'
          ) {
            points += 20;
          } else {
            points += 5;
          }
        }

        if (category === 'time') {
          points += 10;
        }

        if (category === 'mood') {
          points += 10;
        }
      }
    });

    return Math.min(100, Math.max(40, points));
  };

  const scoreDateIdea = (idea) => {
    let score = 0;

    const bothMoods = [state.you.mood, state.partner.mood];
    const bothBudgets = [state.you.budget, state.partner.budget];
    const bothPlaces = [state.you.place, state.partner.place];
    const bothTimes = [state.you.time, state.partner.time];

    bothMoods.forEach((value) => {
      if (idea.moods.includes(value)) score += 3;
    });

    bothBudgets.forEach((value) => {
      if (idea.budgets.includes(value)) score += 2;
    });

    bothPlaces.forEach((value) => {
      if (
        idea.places.includes(value) ||
        value === 'Either'
      ) {
        score += 2;
      }
    });

    bothTimes.forEach((value) => {
      if (idea.times.includes(value)) score += 2;
    });

    return score;
  };

  const buildMatchList = () => {
    currentMatches = dateIdeas
      .map((idea) => ({
        ...idea,
        score: scoreDateIdea(idea)
      }))
      .sort((a, b) => b.score - a.score);

    currentDateIndex = 0;
  };

  const renderMatch = () => {
    const score = calculateCompatibility();

    const scoreEl = document.querySelector('.match-score');
    if (scoreEl) {
      scoreEl.textContent = `${score}%`;
    }

    const rows = document.querySelectorAll('.match-row');

    const values = [
      {
        you: state.you.mood === 'Romantic' ? 90 : 65,
        partner: state.partner.mood === 'Romantic' ? 90 : 65
      },
      {
        you: state.you.mood === 'Adventurous' ? 90 : 60,
        partner: state.partner.mood === 'Adventurous' ? 90 : 60
      },
      {
        you: state.you.mood === 'Fun' ? 90 : 70,
        partner: state.partner.mood === 'Fun' ? 90 : 70
      },
      {
        you: state.you.mood === 'Relaxed' ? 90 : 70,
        partner: state.partner.mood === 'Relaxed' ? 90 : 70
      },
      {
        you: state.you.mood === 'Spontaneous' ? 90 : 55,
        partner: state.partner.mood === 'Spontaneous' ? 90 : 55
      }
    ];

    rows.forEach((row, index) => {
      const strong = row.querySelector('strong');
      const small = row.querySelector('small');
      const barFill = row.querySelector('.bar span');

      if (!values[index]) return;

      if (strong) {
        strong.textContent = `${values[index].you}%`;
      }

      if (small) {
        small.textContent = `${values[index].partner}%`;
      }

      if (barFill) {
        const average =
          (values[index].you + values[index].partner) / 2;

        barFill.style.width = `${average}%`;
      }
    });

    const vibeStrong = document.querySelector('.shared-vibe strong');

    if (vibeStrong) {
      const moodA = state.you.mood.toUpperCase();
      const moodB = state.partner.mood.toUpperCase();

      vibeStrong.textContent =
        moodA === moodB ? moodA : `${moodA} + ${moodB}`;
    }
  };

  const renderDate = () => {
    if (!currentMatches.length) {
      buildMatchList();
    }

    const idea = currentMatches[currentDateIndex];

    if (!idea) return;

    const titleEl = document.querySelector('.date-image-overlay h3');

    if (titleEl) {
      titleEl.innerHTML = idea.title
        .toUpperCase()
        .replace(/\s+/g, ' ')
        .replace(' ', '<br>');
    }

    const subtitleEl = document.querySelector('.date-image-overlay p');

    if (subtitleEl) {
      subtitleEl.textContent =
        `${state.you.mood} · ${state.partner.mood} · ${idea.location}`;
    }

    const detailBlocks = document.querySelectorAll('.date-details > div');

    if (detailBlocks[0]) {
      detailBlocks[0].querySelector('strong').textContent = idea.cost;
    }

    if (detailBlocks[1]) {
      detailBlocks[1].querySelector('strong').textContent = idea.duration;
    }

    if (detailBlocks[2]) {
      detailBlocks[2].querySelector('strong').textContent = idea.location;
    }

    const timeline = document.querySelector('.date-timeline');

    if (timeline) {
      timeline.innerHTML = idea.steps
        .map(
          ([time, title, description]) => `
            <div class="timeline-item">
              <span>${time}</span>
              <div>
                <strong>${title}</strong>
                <p>${description}</p>
              </div>
            </div>
          `
        )
        .join('');
    }
  };

  const calculateAndRender = () => {
    buildMatchList();
    renderMatch();
    renderDate();
  };

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
      calculateAndRender();

      document.querySelector('.match-card')?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });

      toast('Your Valurée match is ready ✦');
    });
  }

  const dateButtons = document.querySelectorAll('.date-buttons button');

  dateButtons.forEach((button) => {
    const text = button.textContent.trim().toLowerCase();

    if (text.includes('try another')) {
      button.addEventListener('click', () => {
        if (!currentMatches.length) {
          calculateAndRender();
        }

        currentDateIndex =
          (currentDateIndex + 1) % currentMatches.length;

        renderDate();
        toast('✨ Another date idea');
      });
    }

    if (text.includes('save date')) {
      button.addEventListener('click', () => {
        if (!currentMatches.length) {
          calculateAndRender();
        }

        const idea = currentMatches[currentDateIndex];

        const saved = JSON.parse(
          localStorage.getItem('valuree_saved_dates') || '[]'
        );

        saved.push({
          title: idea.title,
          cost: idea.cost,
          duration: idea.duration,
          location: idea.location,
          savedAt: new Date().toISOString()
        });

        localStorage.setItem(
          'valuree_saved_dates',
          JSON.stringify(saved)
        );

        toast('♡ Date saved');
      });
    }

    if (text.includes('share')) {
      button.addEventListener('click', async () => {
        if (!currentMatches.length) {
          calculateAndRender();
        }

        const idea = currentMatches[currentDateIndex];

        const shareData = {
          title: `Our Valurée Date — ${idea.title}`,
          text: `Valurée picked "${idea.title}" for our next date.`,
          url: window.location.href
        };

        try {
          if (navigator.share) {
            await navigator.share(shareData);
          } else if (navigator.clipboard) {
            await navigator.clipboard.writeText(
              `${shareData.text} ${shareData.url}`
            );

            toast('Share text copied');
          }
        } catch (error) {
          // User cancelled share dialog
        }
      });
    }
  });

  document
    .querySelectorAll('.choice, .card-action, .date-buttons button')
    .forEach((button) => {
      button.setAttribute('type', 'button');
    });

  syncInitialStateFromUI();
  attachChoiceHandlers();
  calculateAndRender();
});