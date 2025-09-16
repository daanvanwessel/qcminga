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
  { time: '16:00', desc: 'Meeten bij Ties voor degene die kunnen', icon: '🤝' },
  { time: '17:30', desc: 'Diner bij ouders Bram (Oudegoedstraat 10)', icon: '🏠' },
  { time: '19:10', desc: 'Vertrek naar station Deventer', icon: '🚆' },
  { time: '19:40', desc: 'Vertrek QC Nightjet', icon: '🚆' }
]);

createTimeline('vrijdag', [
  { time: '6:24', desc: 'Aankomst Augsburg', icon: '🚆' },
  { time: '6:38', desc: 'Vertrek naar München Hbf', icon: '🚆' },
  { time: '7:20', desc: 'Aankomst München Hbf', icon: '🚆' },
  { time: '7:30-08:00', desc: 'Spullen droppen hotel en ontbijt', icon: '☕' },
  { time: '9:00', desc: 'Sightseeing by 4xL', icon: '🌳' },
  { time: '12:00', desc: 'Tour Allianz Arena', icon: '🏟️' },
  { time: '14:00', desc: 'Eerste pilskes (Seehaus, Hofbräuhaus, Hirschgarten, Augustiner, Paulaner)', icon: '🍺' },
  { time: '18:00', desc: 'Inchecken Hotel', icon: '🏨' },
  { time: '19:00', desc: 'Andy’s Krablergarten', icon: '🍽️' },
  { time: 'Abend', desc: 'Glockenbachviertel; Burg Pappenheim, Loretta, Pimpernel Club, Trisoux', icon: '🍸' }
]);

createTimeline('zaterdag', [
  { time: '07:00', desc: 'Ontbijt hotel', icon: '☕' },
  { time: '07:45', desc: "Vertrek Wies'n", icon: '🚗' }
]);

createTimeline('zondag', [
  { time: 'Ontbijt', desc: 'Ontbijt hotel', icon: '☕' },
  { time: '09:50', desc: 'München Hbf', icon: '🚆' },
  { time: '17:15', desc: 'Aankomst Deventer', icon: '🏠' },
  { time: '17:20', desc: 'Verjaardag Janne', icon: '🎉' }
]);
