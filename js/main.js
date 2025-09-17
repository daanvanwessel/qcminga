// Navigatie
function openDay(dayId) {
  const current = document.querySelector('.page.active');
  if (current) {
    current.classList.add('fade-out');
    setTimeout(() => {
      current.classList.remove('active', 'fade-out');
      const newPage = document.getElementById(dayId);
      newPage.classList.add('active');
      showTimelineItems(newPage);
      if (dayId === 'verblijf') showVerblijfPhoto();
    }, 500);
  }
}

function goBack() {
  const current = document.querySelector('.page.active');
  if (current) {
    current.classList.add('fade-out');
    setTimeout(() => {
      current.classList.remove('active', 'fade-out');
      document.getElementById('startpage').classList.add('active');
    }, 500);
  }
}

// Tijdlijn items
function createTimeline(dayId, activities) {
  const page = document.getElementById(dayId);

  // voorkom dubbele rendering
  if (page.querySelector('.timeline')) return;

  const timeline = document.createElement('div');
  timeline.className = 'timeline';

  activities.forEach((act, i) => {
    const item = document.createElement('div');
    item.className = 'timeline-item';

    // kwal toevoegen
    const jelly = document.createElement('div');
    jelly.className = 'kwal';
    item.appendChild(jelly);

    // inhoud van de kaart
    item.innerHTML += `
      <h3>${act.time}</h3>
      <div class="card">
        <div style="font-size:1.5em;">${act.icon}</div>
        <p>${act.desc}</p>
      </div>
    `;

    timeline.appendChild(item);
  });

  page.appendChild(timeline);

  const backBtn = document.createElement('button');
  backBtn.className = 'back-button';
  backBtn.textContent = 'Heimwärts';
  backBtn.onclick = goBack;
  page.appendChild(backBtn);
}

// Fade-in animatie tijdlijn
function showTimelineItems(container) {
  const items = container.querySelectorAll('.timeline-item');
  items.forEach((item, i) => {
    setTimeout(() => {
      item.classList.add('visible');
    }, i * 200);
  });
}

// Fade-in voor eigenarenfoto
function showVerblijfPhoto() {
  const photoContainer = document.querySelector('#verblijf .owners-photo');
  if (photoContainer) {
    setTimeout(() => {
      photoContainer.classList.add('visible');
    }, 500);
  }
}

// Tijdlijnen vullen
createTimeline('donderdag', [
  { time: '16:00', desc: 'Pre-Maß @ President Steyn'},
  { time: '18:15', desc: 'Diner @ Oudegoedstraat 10'},
  { time: '19:10', desc: 'Vertrek naar station Deventer'},
  { time: '19:40', desc: 'Vertrek QC Fuckyou Nightjet'}
]);

createTimeline('vrijdag', [
  { time: '6:24', desc: 'Aankomst Augsburg'},
  { time: '6:38', desc: 'Vertrek naar München Hbf' },
  { time: '7:20', desc: 'Aankomst München Hbf'},
  { time: '7:30-08:00', desc: 'Spullen droppen hotel en ontbijt'},
  { time: '9:00', desc: 'Sightseeing by 4xL'},
  { time: '12:00', desc: 'Tour Allianz Arena' },
  { time: '14:00', desc: 'Eerste pilskes (Hirschgarten, Seehaus, Augustiner, Paulaner)' },
  { time: '18:00', desc: 'Inchecken Hotel'},
  { time: '19:00', desc: 'Schnitzel @ Andy’s Krablergarten' },
  { time: 'Abend', desc: 'Hofbräuhaus oder Glockenbachviertel; Burg Pappenheim, Loretta, Pimpernel Club, Trisoux' }
]);

createTimeline('zaterdag', [
  { time: 'TBA', desc: 'Ontbijt hotel'},
  { time: 'TBA', desc: 'Vertrek Wiesn' },
  { time: '09.00', desc: 'Tenten open' },
  { time: '12:00', desc: 'O'Zapft is! Erste Maß! QC Oktoberfest is a go!' },
]);

createTimeline('zondag', [
  { time: 'TBA', desc: 'Ontbijt hotel' },
  { time: '09:50', desc: 'München Hbf' },
  { time: '17:15', desc: 'Aankomst Deventer'},
  { time: '17:20', desc: 'Verjaardag Janne' }
]);
