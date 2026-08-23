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
    '$100+': 150
  };

  const timeValues = {
    '1 Hour': 1,
    '2–3 Hours': 3,
    'Half Day': 5,
    'All Day': 10
  };

  const dateIdeas = [
    {
      title: 'Sunset & Sweet Treats',
      moods: ['Romantic', 'Relaxed'],
      maxBudget: 30,
      place: 'Go Out',
      hours: 2.5,
      cost: '$20 – $30',
      duration: '2.5 HOURS',
      location: 'OUTDOORS',
      steps: [
        ['7:00 PM', 'Sunset Walk', 'Find a scenic place and take a slow walk together.'],
        ['8:00 PM', 'Sweet Treat', 'Choose a dessert spot neither of you visits often.'],
        ['8:30 PM', 'Question Game', 'Ask each other five fun or meaningful questions.'],
        ['9:00 PM', 'Our Song Moment', 'Each choose a song that reminds you of the other.']
      ]
    },

    {
      title: 'Cozy Night In',
      moods: ['Romantic', 'Relaxed'],
      maxBudget: 25,
      place: 'Stay In',
      hours: 3,
      cost: '$0 – $25',
      duration: '2–3 HOURS',
      location: 'AT HOME',
      steps: [
        ['7:00 PM', 'Cook Together', 'Make dinner together or order your favorite comfort food.'],
        ['8:00 PM', 'Pick a Movie', 'Choose something neither of you has watched before.'],
        ['9:30 PM', 'Dessert Break', 'Share a dessert or make something simple together.'],
        ['10:00 PM', 'Phone-Free Talk', 'Put your phones away and catch up.']
      ]
    },

    {
      title: 'Adventure After Dark',
      moods: ['Adventurous', 'Spontaneous'],
      maxBudget: 75,
      place: 'Go Out',
      hours: 3,
      cost: '$30 – $75',
      duration: '3 HOURS',
      location: 'AROUND TOWN',
      steps: [
        ['6:30 PM', 'Mystery Destination', 'Choose somewhere nearby that neither of you has visited.'],
        ['7:30 PM', 'Try Something New', 'Pick an activity outside your normal routine.'],
        ['9:00 PM', 'Late Bite', 'Find a casual place to eat and recap the night.']
      ]
    },

    {
      title: 'Zero-Dollar Love Night',
      moods: ['Romantic', 'Fun', 'Relaxed'],
      maxBudget: 0,
      place: 'Either',
      hours: 2,
      cost: '$0',
      duration: '1–2 HOURS',
      location: 'ANYWHERE',
      steps: [
        ['7:00 PM', 'Favorite Memory', 'Each share one favorite memory from your relationship.'],
        ['7:30 PM', 'Playlist Swap', 'Choose three songs for each other.'],
        ['8:00 PM', 'Photo Challenge', 'Take funny or romantic photos together.']
      ]
    },

    {
      title: 'Arcade Rivalry',
      moods: ['Fun', 'Spontaneous'],
      maxBudget: 50,
      place: 'Go Out',
      hours: 2.5,
      cost: '$25 – $50',
      duration: '2–3 HOURS',
      location: 'ARCADE',
      steps: [
        ['7:00 PM', 'Game On', 'Grab game cards and compete in your favorite arcade games.'],
        ['8:15 PM', 'Prize Challenge', 'See who can win the funniest prize.'],
        ['8:45 PM', 'Winner Picks Dessert', 'The winner chooses dessert.']
      ]
    },

    {
      title: 'Blanket Fort Date',
      moods: ['Romantic', 'Fun', 'Relaxed'],
      maxBudget: 25,
      place: 'Stay In',
      hours: 3,
      cost: '$0 – $25',
      duration: '2–3 HOURS',
      location: 'AT HOME',
      steps: [
        ['7:00 PM', 'Build the Fort', 'Use blankets, pillows and lights to make your setup.'],
        ['7:30 PM', 'Snack Run', 'Make popcorn and grab your favorite snacks.'],
        ['8:00 PM', 'Movie or Game', 'Choose a movie, board game or card game.'],
        ['9:30 PM', 'Late-Night Talk', 'Stay in the fort and talk without distractions.']
      ]
    },

    {
      title: 'Coffee Shop Crawl',
      moods: ['Fun', 'Adventurous', 'Relaxed'],
      maxBudget: 25,
      place: 'Go Out',
      hours: 2,
      cost: '$15 – $25',
      duration: '2 HOURS',
      location: 'AROUND TOWN',
      steps: [
        ['4:00 PM', 'First Stop', 'Each order something you have never tried.'],
        ['4:45 PM', 'Second Café', 'Split a pastry or dessert.'],
        ['5:30 PM', 'Rate the Stops', 'Choose the winner together.']
      ]
    },

    {
      title: 'Mini Golf Showdown',
      moods: ['Fun', 'Adventurous'],
      maxBudget: 50,
      place: 'Go Out',
      hours: 2.5,
      cost: '$25 – $50',
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
      maxBudget: 50,
      place: 'Stay In',
      hours: 3,
      cost: '$20 – $50',
      duration: '3 HOURS',
      location: 'AT HOME',
      steps: [
        ['6:30 PM', 'Pick a Country', 'Choose a country neither of you knows much about.'],
        ['7:00 PM', 'Cook the Meal', 'Make a dish inspired by that country.'],
        ['8:30 PM', 'Music & Dessert', 'Play music from that country while eating dessert.']
      ]
    },

    {
      title: 'Bookstore Date',
      moods: ['Relaxed', 'Romantic', 'Fun'],
      maxBudget: 25,
      place: 'Go Out',
      hours: 2,
      cost: '$0 – $25',
      duration: '2 HOURS',
      location: 'BOOKSTORE',
      steps: [
        ['6:00 PM', 'Browse Separately', 'Find one book you think your partner would like.'],
        ['6:45 PM', 'Reveal Your Picks', 'Explain why you chose each book.'],
        ['7:15 PM', 'Coffee Break', 'Finish with coffee or dessert nearby.']
      ]
    },

    {
      title: 'Photo Scavenger Hunt',
      moods: ['Adventurous', 'Fun', 'Spontaneous'],
      maxBudget: 25,
      place: 'Go Out',
      hours: 3,
      cost: '$0 – $25',
      duration: '2–3 HOURS',
      location: 'OUTDOORS',
      steps: [
        ['5:30 PM', 'Make the List', 'Create ten funny photo challenges.'],
        ['6:00 PM', 'Start Hunting', 'Walk around town completing the list.'],
        ['7:30 PM', 'Pick a Winner', 'Choose the funniest photo from the night.']
      ]
    },

    {
      title: 'Dessert First',
      moods: ['Romantic', 'Spontaneous', 'Fun'],
      maxBudget: 50,
      place: 'Go Out',
      hours: 2,
      cost: '$20 – $50',
      duration: '2 HOURS',
      location: 'AROUND TOWN',
      steps: [
        ['7:00 PM', 'Dessert First', 'Start the night by ordering dessert before dinner.'],
        ['7:45 PM', 'Walk It Off', 'Take a short walk together.'],
        ['8:15 PM', 'Late Dinner', 'Choose dinner based entirely on what sounds good.']
      ]
    },

    {
      title: 'Game Night Championship',
      moods: ['Fun', 'Relaxed'],
      maxBudget: 25,
      place: 'Stay In',
      hours: 3,
      cost: '$0 – $25',
      duration: '2–3 HOURS',
      location: 'AT HOME',
      steps: [
        ['7:00 PM', 'Choose Three Games', 'Pick three quick games or challenges.'],
        ['7:30 PM', 'Championship Begins', 'Keep score throughout the night.'],
        ['9:00 PM', 'Winner Reward', 'Winner chooses the next date-night snack.']
      ]
    },

    {
      title: 'Picnic With a View',
      moods: ['Romantic', 'Relaxed', 'Adventurous'],
      maxBudget: 50,
      place: 'Go Out',
      hours: 3,
      cost: '$20 – $50',
      duration: '3 HOURS',
      location: 'OUTDOORS',
      steps: [
        ['5:30 PM', 'Pick Up Food', 'Grab simple picnic food and drinks.'],
        ['6:00 PM', 'Find the View', 'Head to a park, overlook or waterfront.'],
        ['7:00 PM', 'Conversation Cards', 'Ask each other a few Valurée-style questions.'],
        ['8:00 PM', 'Sunset Moment', 'Stay until the sun begins to set.']
      ]
    },

    {
      title: 'Thrift Store Challenge',
      moods: ['Fun', 'Adventurous', 'Spontaneous'],
      maxBudget: 25,
      place: 'Go Out',
      hours: 2.5,
      cost: '$10 – $25',
      duration: '2–3 HOURS',
      location: 'AROUND TOWN',
      steps: [
        ['6:00 PM', 'Set the Budget', 'Give each other a small spending limit.'],
        ['6:15 PM', 'Shop Separately', 'Find the funniest item for your partner.'],
        ['7:00 PM', 'Reveal', 'Exchange your finds.'],
        ['7:30 PM', 'Snack Stop', 'Finish somewhere casual for food or dessert.']
      ]
    },

    {
      title: 'Morning Market Date',
      moods: ['Relaxed', 'Romantic', 'Adventurous'],
      maxBudget: 50,
      place: 'Go Out',
      hours: 3,
      cost: '$20 – $50',
      duration: '3 HOURS',
      location: 'MARKET',
      steps: [
        ['9:00 AM', 'Coffee First', 'Start with coffee or tea.'],
        ['9:30 AM', 'Explore the Market', 'Walk every aisle and sample something new.'],
        ['10:30 AM', 'Pick Something Together', 'Buy one small thing to take home.'],
        ['11:00 AM', 'Brunch', 'Finish with a relaxed brunch.']
      ]
    },

    {
      title: 'One-Hour Reset',
      moods: ['Relaxed', 'Romantic'],
      maxBudget: 25,
      place: 'Either',
      hours: 1,
      cost: '$0 – $25',
      duration: '1 HOUR',
      location: 'FLEXIBLE',
      steps: [
        ['7:00 PM', 'Phones Away', 'Put both phones on silent.'],
        ['7:05 PM', 'Favorite Drink', 'Make or grab your favorite drink.'],
        ['7:15 PM', 'Catch Up', 'Ask each other about the best and hardest part of the week.'],
        ['7:45 PM', 'Plan Something', 'Choose one thing you want to do together soon.']
      ]
    },

    {
      title: 'All-Day Mystery Date',
      moods: ['Adventurous', 'Spontaneous', 'Fun'],
      maxBudget: 150,
      place: 'Go Out',
      hours: 8,
      cost: '$75 – $150+',
      duration: 'ALL DAY',
      location: 'ADVENTURE',
      steps: [
        ['9:00 AM', 'Breakfast Start', 'Begin somewhere new for breakfast.'],
        ['11:00 AM', 'Mystery Activity', 'Choose an attraction, trail, museum or nearby town.'],
        ['2:00 PM', 'Lunch Somewhere New', 'Pick the restaurant while you are out.'],
        ['5:00 PM', 'Golden Hour Stop', 'Find somewhere scenic before heading home.'],
        ['7:00 PM', 'Dinner Finale', 'End the day with your favorite kind of dinner.']
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

  const calculateCompatibility = () => {
    let score = 0;

    // Mood — 25 points
    if (state.you.mood === state.partner.mood) {
      score += 25;
    } else {
      score += 13;
    }

    // Budget — 25 points
    const budgetDifference = Math.abs(
      budgetValues[state.you.budget] -
      budgetValues[state.partner.budget]
    );

    if (budgetDifference === 0) {
      score += 25;
    } else if (budgetDifference <= 25) {
      score += 20;
    } else if (budgetDifference <= 50) {
      score += 13;
    } else {
      score += 7;
    }

    // Location — 25 points
    if (state.you.place === state.partner.place) {
      score += 25;
    } else if (
      state.you.place === 'Either' ||
      state.partner.place === 'Either'
    ) {
      score += 20;
    } else {
      score += 7;
    }

    // Time — 25 points
    const timeDifference = Math.abs(
      timeValues[state.you.time] -
      timeValues[state.partner.time]
    );

    if (timeDifference === 0) {
      score += 25;
    } else if (timeDifference <= 2) {
      score += 18;
    } else {
      score += 10;
    }

    return Math.round(score);
  };

  const dateScore = (idea) => {
    let score = 0;

    const sharedMood = state.you.mood === state.partner.mood;
    const sharedPlace = state.you.place === state.partner.place;
    const sharedBudget = state.you.budget === state.partner.budget;
    const sharedTime = state.you.time === state.partner.time;

    // MOOD
    if (idea.moods.includes(state.you.mood)) score += 18;
    if (idea.moods.includes(state.partner.mood)) score += 18;

    if (
      sharedMood &&
      idea.moods.includes(state.you.mood)
    ) {
      score += 18;
    }

    // BUDGET
    const youBudget = budgetValues[state.you.budget];
    const partnerBudget = budgetValues[state.partner.budget];

    // Use the more conservative budget
    const coupleBudget = Math.min(youBudget, partnerBudget);

    if (idea.maxBudget <= coupleBudget) {
      score += 18;

      if (sharedBudget) score += 5;
    } else {
      const difference = idea.maxBudget - coupleBudget;

      if (difference <= 15) {
        score += 7;
      } else {
        score -= 15;
      }
    }

    // PLACE
    const placeMatches = (preference) =>
      preference === 'Either' ||
      idea.place === 'Either' ||
      idea.place === preference;

    if (placeMatches(state.you.place)) score += 13;
    else score -= 10;

    if (placeMatches(state.partner.place)) score += 13;
    else score -= 10;

    if (
      sharedPlace &&
      placeMatches(state.you.place)
    ) {
      score += 8;
    }

    // TIME
    const youTime = timeValues[state.you.time];
    const partnerTime = timeValues[state.partner.time];
    const availableTime = Math.min(youTime, partnerTime);

    if (idea.hours <= availableTime) {
      score += 16;

      if (sharedTime) score += 5;
    } else if (idea.hours <= availableTime + 1) {
      score += 5;
    } else {
      score -= 15;
    }

    return score;
  };

  const rankDates = () => {
    rankedDates = dateIdeas
      .map((idea) => ({
        ...idea,
        matchScore: dateScore(idea)
      }))
      .sort((a, b) => b.matchScore - a.matchScore);

    currentDateIndex = 0;
  };

  const renderMatch = () => {
    const compatibility = calculateCompatibility();

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

    const rows = document.querySelectorAll('.match-row');

    rows.forEach((row, index) => {
      const mood = moods[index];

      const youValue =
        state.you.mood === mood ? 92 : 58;

      const partnerValue =
        state.partner.mood === mood ? 92 : 58;

      const strong = row.querySelector('strong');
      const small = row.querySelector('small');
      const fill = row.querySelector('.bar span');

      if (strong) {
        strong.textContent = `${youValue}%`;
      }

      if (small) {
        small.textContent = `${partnerValue}%`;
      }

      if (fill) {
        fill.style.width =
          `${Math.round((youValue + partnerValue) / 2)}%`;
      }
    });

    const sharedVibe = document.querySelector('.shared-vibe strong');

    if (sharedVibe) {
      if (state.you.mood === state.partner.mood) {
        sharedVibe.textContent =
          state.you.mood.toUpperCase();
      } else {
        sharedVibe.textContent =
          `${state.you.mood.toUpperCase()} + ${state.partner.mood.toUpperCase()}`;
      }
    }
  };

  const renderDate = () => {
    if (!rankedDates.length) {
      rankDates();
    }

    const idea = rankedDates[currentDateIndex];

    if (!idea) return;

    const title = document.querySelector(
      '.date-image-overlay h3'
    );

    if (title) {
      title.textContent = idea.title.toUpperCase();
    }

    const subtitle = document.querySelector(
      '.date-image-overlay p'
    );

    if (subtitle) {
      subtitle.textContent =
        `${state.you.mood} · ${state.partner.mood} · ${idea.location}`;
    }

    const details =
      document.querySelectorAll('.date-details > div');

    if (details[0]) {
      details[0].querySelector('strong').textContent =
        idea.cost;
    }

    if (details[1]) {
      details[1].querySelector('strong').textContent =
        idea.duration;
    }

    if (details[2]) {
      details[2].querySelector('strong').textContent =
        idea.location;
    }

    const timeline =
      document.querySelector('.date-timeline');

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

  const nextPartner =
    document.querySelector('.pink-action');

  if (nextPartner) {
    nextPartner.addEventListener('click', () => {
      document
        .querySelector('.partner-card')
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });

      toast('Your partner is up next ♡');
    });
  }

  const seeMatch =
    document.querySelector('.purple-action');

  if (seeMatch) {
    seeMatch.addEventListener('click', () => {
      generateResults();

      document
        .querySelector('.match-card')
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });

      toast('Your Valurée match is ready ✦');
    });
  }

  document
    .querySelectorAll('.date-buttons button')
    .forEach((button) => {
      const label =
        button.textContent.toLowerCase();

      if (label.includes('try another')) {
        button.addEventListener('click', () => {
          if (!rankedDates.length) {
            generateResults();
          }

          currentDateIndex =
            (currentDateIndex + 1) %
            rankedDates.length;

          renderDate();

          toast('Another matching date ✦');
        });
      }

      if (label.includes('save date')) {
        button.addEventListener('click', () => {
          if (!rankedDates.length) {
            generateResults();
          }

          const idea =
            rankedDates[currentDateIndex];

          const existing = JSON.parse(
            localStorage.getItem(
              'valuree_saved_dates'
            ) || '[]'
          );

          const savedDate = {
            id: Date.now(),
            title: idea.title,
            cost: idea.cost,
            duration: idea.duration,
            location: idea.location,
            moods: [
              state.you.mood,
              state.partner.mood
            ],
            savedAt:
              new Date().toISOString()
          };

          existing.push(savedDate);

          localStorage.setItem(
            'valuree_saved_dates',
            JSON.stringify(existing)
          );

          toast('♡ Date saved');
        });
      }

      if (label.includes('share')) {
        button.addEventListener(
          'click',
          async () => {
            if (!rankedDates.length) {
              generateResults();
            }

            const idea =
              rankedDates[currentDateIndex];

            const message =
              `Valurée picked "${idea.title}" for our next date ♡`;

            try {
              if (navigator.share) {
                await navigator.share({
                  title: 'Our Valurée Date',
                  text: message,
                  url: window.location.href
                });
              } else {
                await navigator.clipboard.writeText(
                  `${message} ${window.location.href}`
                );

                toast('Share link copied');
              }
            } catch (error) {
              // Share cancelled
            }
          }
        );
      }
    });

  document
    .querySelectorAll(
      '.choice, .card-action, .date-buttons button'
    )
    .forEach((button) => {
      button.setAttribute('type', 'button');
    });

  readStartingSelections();
  attachChoices();
  generateResults();
});