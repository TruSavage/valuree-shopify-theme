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

  const budgetValues = {
    '$0': 0,
    '$25': 25,
    '$50': 50,
    '$100+': 125
  };

  const timeValues = {
    '1 Hour': 1,
    '2–3 Hours': 3,
    'Half Day': 5,
    'All Day': 9
  };

  const dateIdeas = [
    {
      title: 'Sunset & Sweet Treats',
      moods: ['Romantic', 'Relaxed'],
      budget: 30,
      place: 'Go Out',
      hours: 2.5,
      cost: '$15 – $30',
      duration: '2–3 HOURS',
      location: 'OUTDOORS',
      steps: [
        ['7:00 PM', 'Sunset Walk', 'Find a scenic place and take a slow walk together.'],
        ['8:00 PM', 'Sweet Treat', 'Split dessert or grab something inexpensive nearby.'],
        ['8:30 PM', 'Question Game', 'Ask each other five fun or meaningful questions.']
      ]
    },

    {
      title: 'Cozy Night In',
      moods: ['Romantic', 'Relaxed'],
      budget: 25,
      place: 'Stay In',
      hours: 3,
      cost: '$0 – $25',
      duration: '2–3 HOURS',
      location: 'AT HOME',
      steps: [
        ['7:00 PM', 'Dinner Together', 'Cook something simple or order your favorite comfort food.'],
        ['8:00 PM', 'Movie Pick', 'Choose something neither of you has seen.'],
        ['9:30 PM', 'Phone-Free Time', 'Put the phones away and catch up.']
      ]
    },

    {
      title: 'Adventure After Dark',
      moods: ['Adventurous', 'Spontaneous'],
      budget: 65,
      place: 'Go Out',
      hours: 3,
      cost: '$30 – $65',
      duration: '3 HOURS',
      location: 'AROUND TOWN',
      steps: [
        ['6:30 PM', 'Mystery Destination', 'Choose somewhere nearby that neither of you has visited.'],
        ['7:30 PM', 'Try Something New', 'Pick an activity outside your normal routine.'],
        ['9:00 PM', 'Late Bite', 'Finish somewhere casual for food or dessert.']
      ]
    },

    {
      title: 'Zero-Dollar Love Night',
      moods: ['Romantic', 'Relaxed', 'Fun'],
      budget: 0,
      place: 'Either',
      hours: 2,
      cost: '$0',
      duration: '2 HOURS',
      location: 'FLEXIBLE',
      steps: [
        ['7:00 PM', 'Memory Challenge', 'Each share one favorite memory together.'],
        ['7:30 PM', 'Playlist Swap', 'Pick three songs for one another.'],
        ['8:00 PM', 'Photo Challenge', 'Take a few funny or romantic photos together.']
      ]
    },

    {
      title: 'Arcade Rivalry',
      moods: ['Fun', 'Spontaneous'],
      budget: 45,
      place: 'Go Out',
      hours: 2.5,
      cost: '$25 – $45',
      duration: '2–3 HOURS',
      location: 'ARCADE',
      steps: [
        ['7:00 PM', 'Game On', 'Compete in a few arcade games.'],
        ['8:15 PM', 'Prize Challenge', 'See who can win the funniest prize.'],
        ['8:45 PM', 'Winner Picks Dessert', 'The winner chooses the final stop.']
      ]
    },

    {
      title: 'Blanket Fort Date',
      moods: ['Romantic', 'Fun', 'Relaxed'],
      budget: 20,
      place: 'Stay In',
      hours: 3,
      cost: '$0 – $20',
      duration: '2–3 HOURS',
      location: 'AT HOME',
      steps: [
        ['7:00 PM', 'Build the Fort', 'Use blankets, pillows and lights to build your setup.'],
        ['7:30 PM', 'Snack Run', 'Grab popcorn and your favorite snacks.'],
        ['8:00 PM', 'Movie or Game', 'Choose a movie, cards or a board game.']
      ]
    },

    {
      title: 'Coffee Shop Crawl',
      moods: ['Fun', 'Adventurous', 'Relaxed'],
      budget: 25,
      place: 'Go Out',
      hours: 2,
      cost: '$15 – $25',
      duration: '2 HOURS',
      location: 'AROUND TOWN',
      steps: [
        ['4:00 PM', 'First Café', 'Each order something you have never tried.'],
        ['4:45 PM', 'Second Stop', 'Split a pastry or another drink.'],
        ['5:30 PM', 'Pick the Winner', 'Rate both places together.']
      ]
    },

    {
      title: 'Mini Golf Showdown',
      moods: ['Fun', 'Adventurous'],
      budget: 45,
      place: 'Go Out',
      hours: 2.5,
      cost: '$25 – $45',
      duration: '2–3 HOURS',
      location: 'OUT',
      steps: [
        ['6:30 PM', 'Mini Golf', 'Play a full round and keep score.'],
        ['8:00 PM', 'Loser Buys Dessert', 'Winner chooses where to go next.'],
        ['8:30 PM', 'Victory Photo', 'Take one ridiculous winner photo.']
      ]
    },

    {
      title: 'Kitchen Passport',
      moods: ['Adventurous', 'Fun'],
      budget: 40,
      place: 'Stay In',
      hours: 3,
      cost: '$20 – $40',
      duration: '3 HOURS',
      location: 'AT HOME',
      steps: [
        ['6:30 PM', 'Pick a Country', 'Choose somewhere neither of you knows much about.'],
        ['7:00 PM', 'Cook Together', 'Make a dish inspired by that country.'],
        ['8:30 PM', 'Music & Dessert', 'Finish with music and dessert from the same theme.']
      ]
    },

    {
      title: 'Bookstore & Coffee',
      moods: ['Relaxed', 'Romantic', 'Fun'],
      budget: 25,
      place: 'Go Out',
      hours: 2,
      cost: '$0 – $25',
      duration: '2 HOURS',
      location: 'BOOKSTORE',
      steps: [
        ['6:00 PM', 'Browse Separately', 'Find one book you think your partner would enjoy.'],
        ['6:45 PM', 'Reveal Your Picks', 'Explain why you picked each one.'],
        ['7:15 PM', 'Coffee Break', 'Finish with coffee or dessert nearby.']
      ]
    },

    {
      title: 'Photo Scavenger Hunt',
      moods: ['Adventurous', 'Fun', 'Spontaneous'],
      budget: 10,
      place: 'Go Out',
      hours: 2.5,
      cost: '$0 – $10',
      duration: '2–3 HOURS',
      location: 'OUTDOORS',
      steps: [
        ['5:30 PM', 'Make the List', 'Create ten funny photo challenges.'],
        ['6:00 PM', 'Start Hunting', 'Walk around completing your list.'],
        ['7:30 PM', 'Pick a Winner', 'Choose the funniest photo together.']
      ]
    },

    {
      title: 'Dessert First',
      moods: ['Romantic', 'Spontaneous', 'Fun'],
      budget: 40,
      place: 'Go Out',
      hours: 2,
      cost: '$20 – $40',
      duration: '2 HOURS',
      location: 'AROUND TOWN',
      steps: [
        ['7:00 PM', 'Dessert First', 'Start with dessert before dinner.'],
        ['7:45 PM', 'Walk It Off', 'Take a short walk together.'],
        ['8:15 PM', 'Late Dinner', 'Choose dinner based entirely on what sounds good.']
      ]
    },

    {
      title: 'Game Night Championship',
      moods: ['Fun', 'Relaxed'],
      budget: 15,
      place: 'Stay In',
      hours: 3,
      cost: '$0 – $15',
      duration: '2–3 HOURS',
      location: 'AT HOME',
      steps: [
        ['7:00 PM', 'Choose Three Games', 'Pick three quick games or challenges.'],
        ['7:30 PM', 'Championship Begins', 'Keep score throughout the night.'],
        ['9:00 PM', 'Winner Reward', 'Winner chooses the final snack.']
      ]
    },

    {
      title: 'Picnic With a View',
      moods: ['Romantic', 'Relaxed', 'Adventurous'],
      budget: 35,
      place: 'Go Out',
      hours: 3,
      cost: '$15 – $35',
      duration: '3 HOURS',
      location: 'OUTDOORS',
      steps: [
        ['5:30 PM', 'Pick Up Food', 'Grab simple picnic food and drinks.'],
        ['6:00 PM', 'Find the View', 'Head to a park, overlook or waterfront.'],
        ['7:00 PM', 'Conversation Cards', 'Ask each other a few meaningful questions.']
      ]
    },

    {
      title: 'Thrift Store Challenge',
      moods: ['Fun', 'Adventurous', 'Spontaneous'],
      budget: 25,
      place: 'Go Out',
      hours: 2.5,
      cost: '$10 – $25',
      duration: '2–3 HOURS',
      location: 'AROUND TOWN',
      steps: [
        ['6:00 PM', 'Set the Budget', 'Give each other a small spending limit.'],
        ['6:15 PM', 'Shop Separately', 'Find the funniest item for your partner.'],
        ['7:00 PM', 'Reveal', 'Exchange your finds and explain your choices.']
      ]
    },

    {
      title: 'One-Hour Reset',
      moods: ['Relaxed', 'Romantic'],
      budget: 10,
      place: 'Either',
      hours: 1,
      cost: '$0 – $10',
      duration: '1 HOUR',
      location: 'FLEXIBLE',
      steps: [
        ['7:00 PM', 'Phones Away', 'Put both phones on silent.'],
        ['7:05 PM', 'Favorite Drink', 'Make or grab something you both like.'],
        ['7:15 PM', 'Catch Up', 'Talk about the best and hardest part of your week.']
      ]
    },

    {
      title: 'All-Day Mystery Date',
      moods: ['Adventurous', 'Spontaneous', 'Fun'],
      budget: 100,
      place: 'Go Out',
      hours: 8,
      cost: '$60 – $100',
      duration: 'ALL DAY',
      location: 'ADVENTURE',
      steps: [
        ['9:00 AM', 'Breakfast Start', 'Begin somewhere new for breakfast.'],
        ['11:00 AM', 'Mystery Activity', 'Choose an attraction, trail, museum or nearby town.'],
        ['2:00 PM', 'Lunch Somewhere New', 'Pick the restaurant while you are out.'],
        ['6:00 PM', 'Dinner Finale', 'Finish somewhere you both love.']
      ]
    }
  ];

  let rankedDates = [];
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

    clearTimeout(el.timer);

    el.timer = setTimeout(() => {
      el.classList.remove('show');
    }, 1800);
  };

  const cleanText = (value = '') =>
    value.replace(/[♥♡☺△☁✦⌂▣?]/g, '').trim();

  const getQuestionType = (block) => {
    const heading =
      block.querySelector('h3')?.textContent?.toLowerCase() || '';

    if (heading.includes('mood')) return 'mood';
    if (heading.includes('budget')) return 'budget';
    if (heading.includes('stay in')) return 'place';
    if (heading.includes('time')) return 'time';

    return null;
  };

  const coupleBudget = () =>
    Math.min(
      budgetValues[state.you.budget],
      budgetValues[state.partner.budget]
    );

  const coupleTime = () =>
    Math.min(
      timeValues[state.you.time],
      timeValues[state.partner.time]
    );

  const hasLocationConflict = () =>
    state.you.place !== state.partner.place &&
    state.you.place !== 'Either' &&
    state.partner.place !== 'Either';

  const hasMajorBudgetConflict = () =>
    Math.abs(
      budgetValues[state.you.budget] -
      budgetValues[state.partner.budget]
    ) >= 75;

  const needsCompromiseDate = () =>
    hasLocationConflict() || hasMajorBudgetConflict();

  const buildCompromiseDate = () => {
    const budget = coupleBudget();
    const hours = coupleTime();

    const flexibleCost =
      budget === 0 ? '$0' :
      budget <= 25 ? '$0 – $25' :
      budget <= 50 ? '$10 – $50' :
      '$25 – $75';

    return {
      title: 'The Best of Both Worlds',
      moods: [state.you.mood, state.partner.mood],
      budget,
      place: 'Either',
      hours,
      cost: flexibleCost,
      duration:
        hours <= 1 ? '1 HOUR' :
        hours <= 3 ? '2–3 HOURS' :
        hours <= 5 ? 'HALF DAY' :
        'ALL DAY',
      location: 'START IN → GO OUT',
      isCompromise: true,
      steps: [
        [
          '7:00 PM',
          'Start Their Way',
          state.you.place === 'Stay In' || state.partner.place === 'Stay In'
            ? 'Begin at home with a drink, dessert, music or a quick meal.'
            : 'Start somewhere casual that feels comfortable for both of you.'
        ],
        [
          '8:00 PM',
          'Switch It Up',
          'Move into something different: a walk, free local spot, photo challenge or spontaneous destination.'
        ],
        [
          '9:00 PM',
          'Choose Together',
          'Finish with something you both agree on — dessert, music, a scenic stop or time talking together.'
        ]
      ]
    };
  };

  const readStartingSelections = () => {
    document
      .querySelectorAll('.your-card .question-block')
      .forEach((block) => {
        const type = getQuestionType(block);
        const selected = block.querySelector('.choice.active');

        if (type && selected) {
          state.you[type] = cleanText(selected.textContent);
        }
      });

    document
      .querySelectorAll('.partner-card .question-block')
      .forEach((block) => {
        const type = getQuestionType(block);
        const selected = block.querySelector('.choice.purple-active');

        if (type && selected) {
          state.partner[type] = cleanText(selected.textContent);
        }
      });
  };

  const attachChoices = () => {
    document
      .querySelectorAll('.your-card .question-block')
      .forEach((block) => {
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

    document
      .querySelectorAll('.partner-card .question-block')
      .forEach((block) => {
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

  const compatibilityScore = () => {
    let score = 0;

    // Mood — 25
    score += state.you.mood === state.partner.mood ? 25 : 13;

    // Budget — 25
    const budgetGap = Math.abs(
      budgetValues[state.you.budget] -
      budgetValues[state.partner.budget]
    );

    if (budgetGap === 0) score += 25;
    else if (budgetGap <= 25) score += 20;
    else if (budgetGap <= 50) score += 13;
    else score += 5;

    // Place — 25
    if (state.you.place === state.partner.place) {
      score += 25;
    } else if (
      state.you.place === 'Either' ||
      state.partner.place === 'Either'
    ) {
      score += 20;
    } else {
      score += 6;
    }

    // Time — 25
    const timeGap = Math.abs(
      timeValues[state.you.time] -
      timeValues[state.partner.time]
    );

    if (timeGap === 0) score += 25;
    else if (timeGap <= 2) score += 18;
    else score += 10;

    return Math.round(score);
  };

  const scoreDate = (idea) => {
    let score = 0;

    // Mood is intentionally flexible.
    if (idea.moods.includes(state.you.mood)) score += 24;
    if (idea.moods.includes(state.partner.mood)) score += 24;

    if (
      state.you.mood === state.partner.mood &&
      idea.moods.includes(state.you.mood)
    ) {
      score += 15;
    }

    // Never heavily favor something outside the conservative budget.
    const allowedBudget = coupleBudget();

    if (idea.budget <= allowedBudget) {
      score += 24;
    } else if (idea.budget <= allowedBudget + 10) {
      score += 5;
    } else {
      score -= 40;
    }

    // Location.
    const placeFits = (preference) =>
      preference === 'Either' ||
      idea.place === 'Either' ||
      idea.place === preference;

    if (placeFits(state.you.place)) score += 16;
    else score -= 15;

    if (placeFits(state.partner.place)) score += 16;
    else score -= 15;

    // Available time acts like a real constraint.
    const availableHours = coupleTime();

    if (idea.hours <= availableHours) {
      score += 22;
    } else if (idea.hours <= availableHours + 0.5) {
      score += 4;
    } else {
      score -= 35;
    }

    return score;
  };

  const rankDates = () => {
    const scored = dateIdeas
      .map((idea) => ({
        ...idea,
        matchScore: scoreDate(idea)
      }))
      .sort((a, b) => b.matchScore - a.matchScore);

    // Only prioritize genuinely reasonable recommendations.
    rankedDates = scored.filter((idea) => idea.matchScore > 0);

    if (!rankedDates.length) {
      rankedDates = scored;
    }

    if (needsCompromiseDate()) {
      rankedDates.unshift({
        ...buildCompromiseDate(),
        matchScore: 999
      });
    }

    currentDateIndex = 0;
  };

  const renderMatch = () => {
    const compatibility = compatibilityScore();

    const scoreEl = document.querySelector('.match-score');

    if (scoreEl) {
      scoreEl.textContent = `${compatibility}%`;
    }

    const moods = [
      'Romantic',
      'Adventurous',
      'Fun',
      'Relaxed',
      'Spontaneous'
    ];

    document.querySelectorAll('.match-row').forEach((row, index) => {
      const mood = moods[index];

      const youValue =
        state.you.mood === mood ? 92 : 58;

      const partnerValue =
        state.partner.mood === mood ? 92 : 58;

      const strong = row.querySelector('strong');
      const small = row.querySelector('small');
      const fill = row.querySelector('.bar span');

      if (strong) strong.textContent = `${youValue}%`;
      if (small) small.textContent = `${partnerValue}%`;

      if (fill) {
        fill.style.width =
          `${Math.round((youValue + partnerValue) / 2)}%`;
      }
    });

    const vibe = document.querySelector('.shared-vibe strong');

    if (vibe) {
      vibe.textContent =
        state.you.mood === state.partner.mood
          ? state.you.mood.toUpperCase()
          : `${state.you.mood.toUpperCase()} + ${state.partner.mood.toUpperCase()}`;
    }
  };

  const renderDate = () => {
    const idea = rankedDates[currentDateIndex];

    if (!idea) return;

    const title = document.querySelector('.date-image-overlay h3');

    if (title) {
      title.textContent = idea.title.toUpperCase();
    }

    const subtitle = document.querySelector('.date-image-overlay p');

    if (subtitle) {
      subtitle.textContent =
        idea.isCompromise
          ? `${state.you.mood} + ${state.partner.mood} · COMPROMISE MATCH`
          : `${state.you.mood} · ${state.partner.mood} · ${idea.location}`;
    }

    const details =
      document.querySelectorAll('.date-details > div');

    if (details[0]) {
      details[0].querySelector('strong').textContent = idea.cost;
    }

    if (details[1]) {
      details[1].querySelector('strong').textContent = idea.duration;
    }

    if (details[2]) {
      details[2].querySelector('strong').textContent = idea.location;
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

  const generateResults = () => {
    rankDates();
    renderMatch();
    renderDate();
  };

  document.querySelector('.pink-action')?.addEventListener('click', () => {
    document.querySelector('.partner-card')?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });

    toast('Your partner is up next ♡');
  });

  document.querySelector('.purple-action')?.addEventListener('click', () => {
    generateResults();

    document.querySelector('.match-card')?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });

    toast(
      needsCompromiseDate()
        ? 'Valurée found your middle ground ♡'
        : 'Your Valurée match is ready ✦'
    );
  });

  document.querySelectorAll('.date-buttons button').forEach((button) => {
    const label = button.textContent.toLowerCase();

    if (label.includes('try another')) {
      button.addEventListener('click', () => {
        if (!rankedDates.length) generateResults();

        currentDateIndex =
          (currentDateIndex + 1) % rankedDates.length;

        renderDate();
        toast('Another matching date ✦');
      });
    }

    if (label.includes('save date')) {
      button.addEventListener('click', () => {
        if (!rankedDates.length) generateResults();

        const idea = rankedDates[currentDateIndex];

        const saved = JSON.parse(
          localStorage.getItem('valuree_saved_dates') || '[]'
        );

        saved.push({
          id: Date.now(),
          title: idea.title,
          cost: idea.cost,
          duration: idea.duration,
          location: idea.location,
          you: { ...state.you },
          partner: { ...state.partner },
          savedAt: new Date().toISOString()
        });

        localStorage.setItem(
          'valuree_saved_dates',
          JSON.stringify(saved)
        );

        toast('♡ Date saved');
      });
    }

    if (label.includes('share')) {
      button.addEventListener('click', async () => {
        if (!rankedDates.length) generateResults();

        const idea = rankedDates[currentDateIndex];

        const message =
          `Valurée picked "${idea.title}" for our next date ♡`;

        try {
          if (navigator.share) {
            await navigator.share({
              title: 'Our Valurée Date',
              text: message,
              url: window.location.href
            });
          } else if (navigator.clipboard) {
            await navigator.clipboard.writeText(
              `${message} ${window.location.href}`
            );

            toast('Share link copied');
          }
        } catch (error) {
          // User cancelled.
        }
      });
    }
  });

  document
    .querySelectorAll('.choice, .card-action, .date-buttons button')
    .forEach((button) => {
      button.setAttribute('type', 'button');
    });

  readStartingSelections();
  attachChoices();
  generateResults();
});