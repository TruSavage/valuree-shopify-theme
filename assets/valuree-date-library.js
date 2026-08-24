(() => {
  const BASE_DATES = [
    {
      title: 'Sunset Escape',
      moods: ['Romantic', 'Relaxed'],
      budget: 25,
      place: 'Go Out',
      hours: 2.5,
      cost: '$0 – $25',
      duration: '2–3 HOURS',
      location: 'OUTDOORS',
      steps: [
        ['6:30 PM', 'Find the View', 'Choose a park, overlook, waterfront, or scenic neighborhood.'],
        ['7:15 PM', 'Walk Together', 'Take a slow walk and leave the phones away for a while.'],
        ['8:00 PM', 'Sweet Finish', 'Grab dessert, coffee, or bring something inexpensive with you.']
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
        ['7:00 PM', 'Make Dinner', 'Cook something simple together or order comfort food.'],
        ['8:00 PM', 'Pick the Entertainment', 'Choose a movie, show, game, or playlist.'],
        ['9:15 PM', 'Phone-Free Time', 'Put the phones away and spend the last part of the night talking.']
      ]
    },

    {
      title: 'Arcade Showdown',
      moods: ['Fun', 'Spontaneous'],
      budget: 50,
      place: 'Go Out',
      hours: 2.5,
      cost: '$25 – $50',
      duration: '2–3 HOURS',
      location: 'ARCADE',
      steps: [
        ['7:00 PM', 'Game On', 'Pick five games and keep score.'],
        ['8:00 PM', 'Prize Challenge', 'Try to win something ridiculous for each other.'],
        ['8:45 PM', 'Winner Picks', 'The winner chooses dessert or the final stop.']
      ]
    },

    {
      title: 'Kitchen Passport',
      moods: ['Adventurous', 'Fun'],
      budget: 50,
      place: 'Stay In',
      hours: 3,
      cost: '$20 – $50',
      duration: '3 HOURS',
      location: 'AT HOME',
      steps: [
        ['6:30 PM', 'Pick a Country', 'Choose somewhere neither of you knows much about.'],
        ['7:00 PM', 'Cook the Meal', 'Make a dish inspired by that country.'],
        ['8:30 PM', 'Finish the Theme', 'Add music, dessert, or a movie connected to the destination.']
      ]
    },

    {
      title: 'Coffee Shop Crawl',
      moods: ['Relaxed', 'Fun', 'Adventurous'],
      budget: 25,
      place: 'Go Out',
      hours: 2,
      cost: '$15 – $25',
      duration: '2 HOURS',
      location: 'AROUND TOWN',
      steps: [
        ['4:00 PM', 'Stop One', 'Each order something you normally would not choose.'],
        ['4:45 PM', 'Stop Two', 'Share a pastry or another drink.'],
        ['5:30 PM', 'Rate the Stops', 'Pick your favorite place and favorite order.']
      ]
    },

    {
      title: 'Photo Scavenger Hunt',
      moods: ['Fun', 'Adventurous', 'Spontaneous'],
      budget: 10,
      place: 'Go Out',
      hours: 2.5,
      cost: '$0 – $10',
      duration: '2–3 HOURS',
      location: 'OUTDOORS',
      steps: [
        ['5:30 PM', 'Make the List', 'Create ten funny or romantic photo challenges.'],
        ['6:00 PM', 'Start Hunting', 'Walk around town completing the challenges.'],
        ['7:30 PM', 'Pick the Winner', 'Choose the best photo of the night.']
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
        ['7:00 PM', 'Choose the Games', 'Pick three quick games or challenges.'],
        ['7:30 PM', 'Championship Time', 'Keep score throughout the night.'],
        ['9:00 PM', 'Winner Reward', 'Winner chooses the snack, movie, or next date idea.']
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
        ['5:30 PM', 'Grab Food', 'Pick up simple picnic food and drinks.'],
        ['6:00 PM', 'Find Your Spot', 'Head somewhere scenic.'],
        ['7:00 PM', 'Conversation Time', 'Ask each other a few questions you normally do not ask.']
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
        ['6:00 PM', 'Set the Limit', 'Give each person a small spending limit.'],
        ['6:15 PM', 'Shop Separately', 'Find something funny for your partner.'],
        ['7:00 PM', 'The Reveal', 'Exchange your finds and explain why you chose them.']
      ]
    },

    {
      title: 'Bookstore Date',
      moods: ['Relaxed', 'Romantic', 'Fun'],
      budget: 25,
      place: 'Go Out',
      hours: 2,
      cost: '$0 – $25',
      duration: '2 HOURS',
      location: 'BOOKSTORE',
      steps: [
        ['6:00 PM', 'Browse Apart', 'Find one book you think your partner would like.'],
        ['6:45 PM', 'Reveal Your Picks', 'Explain your choices to each other.'],
        ['7:15 PM', 'Coffee Finish', 'End with coffee, tea, or dessert nearby.']
      ]
    },

    {
      title: 'Mini Golf Showdown',
      moods: ['Fun', 'Adventurous'],
      budget: 50,
      place: 'Go Out',
      hours: 2.5,
      cost: '$25 – $50',
      duration: '2–3 HOURS',
      location: 'MINI GOLF',
      steps: [
        ['6:30 PM', 'Tee Off', 'Play a full round and keep score.'],
        ['8:00 PM', 'Loser Challenge', 'The loser has to complete a harmless funny challenge.'],
        ['8:30 PM', 'Victory Dessert', 'Finish with dessert or a quick snack.']
      ]
    },

    {
      title: 'Dessert First',
      moods: ['Romantic', 'Fun', 'Spontaneous'],
      budget: 50,
      place: 'Go Out',
      hours: 2,
      cost: '$20 – $50',
      duration: '2 HOURS',
      location: 'AROUND TOWN',
      steps: [
        ['7:00 PM', 'Dessert First', 'Break the rules and start with dessert.'],
        ['7:45 PM', 'Walk It Off', 'Take a casual walk together.'],
        ['8:15 PM', 'Late Dinner', 'Choose dinner based entirely on what sounds good.']
      ]
    },

    {
      title: 'Blanket Fort Night',
      moods: ['Romantic', 'Fun', 'Relaxed'],
      budget: 20,
      place: 'Stay In',
      hours: 3,
      cost: '$0 – $20',
      duration: '2–3 HOURS',
      location: 'AT HOME',
      steps: [
        ['7:00 PM', 'Build the Fort', 'Use blankets, pillows, and lights.'],
        ['7:30 PM', 'Get Snacks', 'Grab popcorn and favorite snacks.'],
        ['8:00 PM', 'Settle In', 'Watch something, play cards, or just talk.']
      ]
    },

    {
      title: 'Mystery Drive',
      moods: ['Adventurous', 'Spontaneous', 'Relaxed'],
      budget: 25,
      place: 'Go Out',
      hours: 3,
      cost: '$10 – $25',
      duration: '3 HOURS',
      location: 'ROAD TRIP',
      steps: [
        ['6:00 PM', 'Pick a Direction', 'Choose a direction but not a destination.'],
        ['6:45 PM', 'Random Stop', 'Stop somewhere interesting along the way.'],
        ['8:00 PM', 'Find a Snack', 'Choose a local place for a drink or snack before heading back.']
      ]
    },

    {
      title: 'No-Spend Connection Night',
      moods: ['Romantic', 'Relaxed'],
      budget: 0,
      place: 'Either',
      hours: 2,
      cost: '$0',
      duration: '2 HOURS',
      location: 'FLEXIBLE',
      steps: [
        ['7:00 PM', 'Memory Swap', 'Share a favorite memory from your relationship.'],
        ['7:30 PM', 'Playlist Pick', 'Choose songs that remind you of each other.'],
        ['8:00 PM', 'Future List', 'Write down three things you want to experience together.']
      ]
    },

    {
      title: 'Museum Wander',
      moods: ['Relaxed', 'Adventurous', 'Romantic'],
      budget: 50,
      place: 'Go Out',
      hours: 3,
      cost: '$0 – $50',
      duration: '2–3 HOURS',
      location: 'MUSEUM',
      steps: [
        ['1:00 PM', 'Explore', 'Walk through without rushing.'],
        ['2:00 PM', 'Pick Favorites', 'Each choose one thing you would take home if you could.'],
        ['3:00 PM', 'Coffee Debrief', 'Talk about your favorite parts afterward.']
      ]
    },

    {
      title: 'DIY Spa Night',
      moods: ['Relaxed', 'Romantic'],
      budget: 25,
      place: 'Stay In',
      hours: 2.5,
      cost: '$0 – $25',
      duration: '2–3 HOURS',
      location: 'AT HOME',
      steps: [
        ['7:00 PM', 'Set the Mood', 'Lower the lights and put on relaxing music.'],
        ['7:30 PM', 'Spa Time', 'Use face masks, warm towels, or whatever you already have.'],
        ['8:30 PM', 'Dessert & Talk', 'Finish with something sweet and no phones.']
      ]
    },

    {
      title: 'Random Restaurant Roulette',
      moods: ['Adventurous', 'Spontaneous', 'Fun'],
      budget: 100,
      place: 'Go Out',
      hours: 3,
      cost: '$40 – $100',
      duration: '3 HOURS',
      location: 'AROUND TOWN',
      steps: [
        ['6:30 PM', 'Pick Randomly', 'Choose a restaurant using a map, number, or random method.'],
        ['7:00 PM', 'Order Something New', 'Each try something you have never ordered.'],
        ['8:30 PM', 'Dessert Roulette', 'Choose a second random place for dessert.']
      ]
    },

    {
      title: 'Creative Studio Night',
      moods: ['Fun', 'Relaxed', 'Romantic'],
      budget: 50,
      place: 'Either',
      hours: 3,
      cost: '$10 – $50',
      duration: '3 HOURS',
      location: 'FLEXIBLE',
      steps: [
        ['7:00 PM', 'Choose a Project', 'Paint, draw, build, decorate, or make something together.'],
        ['8:00 PM', 'No Judging', 'Make the goal fun instead of perfect.'],
        ['9:00 PM', 'The Reveal', 'Show off what each of you made.']
      ]
    },

    {
      title: 'All-Day Adventure',
      moods: ['Adventurous', 'Spontaneous', 'Fun'],
      budget: 125,
      place: 'Go Out',
      hours: 8,
      cost: '$50 – $125+',
      duration: 'ALL DAY',
      location: 'ADVENTURE',
      steps: [
        ['9:00 AM', 'Breakfast Start', 'Begin somewhere new for breakfast.'],
        ['11:00 AM', 'Main Adventure', 'Choose an attraction, hike, nearby town, or activity.'],
        ['2:00 PM', 'Lunch Stop', 'Find somewhere local while you are out.'],
        ['6:00 PM', 'Dinner Finale', 'Finish the day somewhere you both enjoy.']
      ]
    }
  ];

  const VARIATIONS = [
    {
      suffix: 'Classic',
      budgetAdjust: 0,
      hourAdjust: 0,
      tag: 'classic'
    },
    {
      suffix: 'Last Minute',
      budgetAdjust: -10,
      hourAdjust: -0.5,
      tag: 'last-minute'
    },
    {
      suffix: 'Budget Edition',
      budgetAdjust: -15,
      hourAdjust: 0,
      tag: 'budget'
    },
    {
      suffix: 'Slow & Cozy',
      budgetAdjust: -5,
      hourAdjust: 0.5,
      tag: 'relaxed'
    },
    {
      suffix: 'Little Adventure',
      budgetAdjust: 5,
      hourAdjust: 0.5,
      tag: 'adventure'
    },
    {
      suffix: 'Date Night Upgrade',
      budgetAdjust: 20,
      hourAdjust: 1,
      tag: 'upgrade'
    }
  ];

  const formatDuration = (hours) => {
    if (hours <= 1) return '1 HOUR';
    if (hours <= 3) return '2–3 HOURS';
    if (hours <= 5) return 'HALF DAY';
    return 'ALL DAY';
  };

  const makeCost = (budget) => {
    if (budget <= 0) return '$0';
    if (budget <= 15) return '$0 – $15';
    if (budget <= 25) return '$0 – $25';
    if (budget <= 50) return '$20 – $50';
    if (budget <= 75) return '$30 – $75';
    if (budget <= 100) return '$50 – $100';
    return '$75 – $125+';
  };
const getCategory = (base) => {
  const title = base.title.toLowerCase();
  const location = base.location.toLowerCase();

  if (
    title.includes('coffee') ||
    title.includes('dessert') ||
    title.includes('restaurant') ||
    title.includes('kitchen') ||
    title.includes('picnic')
  ) {
    return 'food';
  }

  if (
    title.includes('arcade') ||
    title.includes('mini golf') ||
    title.includes('game night')
  ) {
    return 'games';
  }

  if (
    title.includes('photo') ||
    title.includes('thrift') ||
    title.includes('mystery drive') ||
    title.includes('all-day')
  ) {
    return 'adventure';
  }

  if (
    title.includes('bookstore') ||
    title.includes('museum')
  ) {
    return 'explore';
  }

  if (
    title.includes('creative') ||
    title.includes('blanket fort')
  ) {
    return 'creative';
  }

  if (
    title.includes('spa') ||
    title.includes('cozy') ||
    title.includes('connection')
  ) {
    return 'relax';
  }

  if (
    title.includes('sunset') ||
    location.includes('outdoor')
  ) {
    return 'outdoors';
  }

  return 'experience';
};
  const library = [];

  BASE_DATES.forEach((base, baseIndex) => {
    VARIATIONS.forEach((variation, variationIndex) => {
      const adjustedBudget = Math.max(
        0,
        base.budget + variation.budgetAdjust
      );

      const adjustedHours = Math.max(
        1,
        base.hours + variation.hourAdjust
      );

      library.push({
        id: `valuree-${baseIndex + 1}-${variationIndex + 1}`,

        title:
          variationIndex === 0
            ? base.title
            : `${base.title} — ${variation.suffix}`,

        moods: [...base.moods],

        budget: adjustedBudget,

        place: base.place,

        hours: adjustedHours,

        cost: makeCost(adjustedBudget),

        duration: formatDuration(adjustedHours),

        location: base.location,
category: getCategory(base),
        tags: [
          variation.tag,
          base.place === 'Stay In' ? 'at-home' : 'go-out',
          adjustedBudget <= 25 ? 'under-25' : 'paid',
          ...base.moods.map((mood) => mood.toLowerCase())
        ],

        steps: base.steps.map((step) => [...step])
      });
    });
  });

  window.VALUREE_DATE_LIBRARY = library;

  console.info(
    `Valurée date library loaded: ${library.length} experiences`
  );
})();