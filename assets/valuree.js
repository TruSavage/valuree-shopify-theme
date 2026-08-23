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

  const dateIdeas = window.VALUREE_DATE_LIBRARY || [];

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

  const yourMood = state.you.mood;
  const partnerMood = state.partner.mood;
  const yourPlace = state.you.place;
  const partnerPlace = state.partner.place;

  const locationConflict = yourPlace !== partnerPlace;
  const moodConflict = yourMood !== partnerMood;
  const budgetConflict = hasMajorBudgetConflict();

  const flexibleCost =
    budget === 0 ? '$0' :
    budget <= 25 ? '$0 – $25' :
    budget <= 50 ? '$10 – $50' :
    '$25 – $75';

  const duration =
    hours <= 1 ? '1 HOUR' :
    hours <= 3 ? '2–3 HOURS' :
    hours <= 5 ? 'HALF DAY' :
    'ALL DAY';

  // Decide what kind of compromise this couple needs most.
  let title = 'The Best of Both Worlds';
  let location = 'FLEXIBLE';
  let compromiseType = 'COMPROMISE MATCH';
  let steps = [];

  // STAY IN vs GO OUT
  if (locationConflict) {
    title = 'Start Cozy, End Out';
    location = 'START IN → GO OUT';
    compromiseType = 'HYBRID NIGHT';

    steps = [
      [
        '7:00 PM',
        'Start Cozy',
        'Begin at home with a drink, snack, music, game, or something relaxing.'
      ],
      [
        '8:00 PM',
        'Switch It Up',
        'Head out for a walk, dessert, coffee, a free local spot, or a spontaneous mini adventure.'
      ],
      [
        '9:00 PM',
        'Choose Together',
        'Finish with something you both agree on and make the last part of the date yours.'
      ]
    ];
  }

  // BIG BUDGET DIFFERENCE
  if (budgetConflict && !locationConflict) {
    title = 'The Budget Bridge';
    location = yourPlace || partnerPlace || 'FLEXIBLE';
    compromiseType = 'BUDGET COMPROMISE';

    steps = [
      [
        '7:00 PM',
        'Start Free',
        'Begin with something completely free so neither person has to compromise on cost immediately.'
      ],
      [
        '8:00 PM',
        'Optional Upgrade',
        'Add one paid activity, snack, dessert, or experience only if you both want to.'
      ],
      [
        '9:00 PM',
        'Finish Your Way',
        'End with a free or inexpensive activity you can enjoy together.'
      ]
    ];
  }

  // DIFFERENT MOODS
  if (moodConflict && !locationConflict && !budgetConflict) {
    title = `${yourMood} Meets ${partnerMood}`;
    location = yourPlace === partnerPlace ? yourPlace : 'FLEXIBLE';
    compromiseType = 'VIBE COMPROMISE';

    steps = [
      [
        '7:00 PM',
        `${yourMood} Pick`,
        `Start with something inspired by the ${yourMood.toLowerCase()} mood.`
      ],
      [
        '8:00 PM',
        `${partnerMood} Pick`,
        `Switch gears with something inspired by the ${partnerMood.toLowerCase()} mood.`
      ],
      [
        '9:00 PM',
        'Your Shared Finale',
        'Finish with something you both choose together.'
      ]
    ];
  }

  // MULTIPLE MAJOR CONFLICTS
  if (
    (locationConflict && budgetConflict) ||
    (locationConflict && moodConflict && budgetConflict)
  ) {
    title = 'The Best of Both Worlds';
    location = 'START IN → GO OUT';
    compromiseType = 'ULTIMATE COMPROMISE';

    steps = [
      [
        '7:00 PM',
        'Start Their Way',
        'Begin with the easiest low-cost option that matches one person’s preferred vibe.'
      ],
      [
        '8:00 PM',
        'Switch Sides',
        'Change the setting or activity so the other person gets something they wanted too.'
      ],
      [
        '9:00 PM',
        'Meet in the Middle',
        'Finish with something you both agree on — dessert, music, a scenic stop, a game, or quality time.'
      ]
    ];
  }

  // Fallback
  if (!steps.length) {
    steps = [
      [
        '7:00 PM',
        'Start Together',
        'Pick an easy activity that feels comfortable for both of you.'
      ],
      [
        '8:00 PM',
        'Try Something Different',
        'Add one activity that gives the date a little variety.'
      ],
      [
        '9:00 PM',
        'Finish Together',
        'End with something you both enjoy.'
      ]
    ];
  }

  return {
    title,
    moods: [yourMood, partnerMood],
    budget,
    place: location,
    hours,
    cost: flexibleCost,
    duration,
    location,
    isCompromise: true,
    compromiseType,
    steps
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

    const currentIdea = rankedDates[currentDateIndex];

    const getBaseId = (idea) => {
      if (!idea?.id) return idea?.title || '';

      const parts = idea.id.split('-');

      return parts.length >= 3
        ? `${parts[0]}-${parts[1]}`
        : idea.id;
    };

    const currentBaseId = getBaseId(currentIdea);

    let nextIndex = currentDateIndex;

    for (let i = 1; i <= rankedDates.length; i++) {
      const candidateIndex =
        (currentDateIndex + i) % rankedDates.length;

      const candidate = rankedDates[candidateIndex];

      if (getBaseId(candidate) !== currentBaseId) {
        nextIndex = candidateIndex;
        break;
      }
    }

    currentDateIndex = nextIndex;

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