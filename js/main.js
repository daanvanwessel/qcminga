// ===== Debug: check of script laadt =====
console.log("main.js geladen ✅");

// ===== Navigatie =====
function openDay(dayId) {
  const current = document.querySelector('.page.active');
  if (current) current.classList.remove('active');

  const newPage = document.getElementById(dayId);
  if (newPage) {
    newPage.classList.add('active');

    if (dayId === 'verblijf') {
      showVerblijfPhoto();
    } else {
      // timeline alleen maken als die nog niet bestaat
      if (!newPage.querySelector('.timeline')) {
        if (dayId === 'donderdag') {
          createTimeline('donderdag', [
            { time: '16:00', desc: 'Pre-Maß @ President Steyn'},
            { time: '18:15', desc: 'Diner @ Oudegoedstraat 10'},
            { time: '19:10', desc: 'Vertrek naar station Deventer'},
            { time: '19:40', desc: 'Vertrek QC Fuckyou Nightjet'},
            { time: '20:30', desc: 'QC Minga VGT'},
            { time: '20:45', desc: 'Uitreiking QC Maßmeister award'}
          ]);
        }
        if (dayId === 'vrijdag') {
          createTimeline('vrijdag', [
            { time: '6:24', desc: 'Aankomst Augsburg Hbf'},
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
        }
        if (dayId === 'zaterdag') {
          createTimeline('zaterdag', [
            { time: 'TBA', desc: 'Ontbijt hotel'},
            { time: 'TBA', desc: 'Vertrek Wiesn' },
            { time: '09:00', desc: 'Tenten open' },
            { time: '12:00', desc: "O'Zapft is! Erste Maß! QC Oktoberfest is a go!" },
          ]);
        }
        if (dayId === 'zondag') {
          createTimeline('zondag', [
            { time: 'TBA', desc: 'Ontbijt hotel' },
            { time: '09:50', desc: 'München Hbf' },
            { time: '17:15', desc: 'Aankomst Deventer'},
            { time: '17:20', desc: 'Verjaardag Janne' }
          ]);
        }
      }
    }
  }

  console.log("Pagina geopend:", dayId);
}

function goBack() {
  const current = document.querySelector('.page.active');
  if (current) current.classList.remove('active');
  document.getElementById('startpage').classList.add('active');
  console.log("Terug naar startpagina");
}

// ===== Timeline opbouwen =====
function createTimeline(dayId, activities) {
  const page = document.getElementById(dayId);

  const timeline = document.createElement('div');
  timeline.className = 'timeline';

  activities.forEach((act) => {
    const item = document.createElement('div');
    item.className = 'timeline-item';

    const jelly = document.createElement('div');
    jelly.className = 'kwal';

    const title = document.createElement('h3');
    title.textContent = act.time;

    const card = document.createElement('div');
    card.className = 'card';
    const text = document.createElement('p');
    text.textContent = act.desc;
    card.appendChild(text);

    item.appendChild(jelly);
    item.appendChild(title);
    item.appendChild(card);
    timeline.appendChild(item);
  });

  page.appendChild(timeline);

  // Heimwärts knop netjes centreren
  const backBtn = document.createElement('button');
  backBtn.className = 'back-button';
  backBtn.textContent = 'Heimwärts';
  backBtn.onclick = goBack;
  backBtn.style.margin = "30px auto";
  backBtn.style.display = "block";
  page.appendChild(backBtn);

  console.log("Timeline aangemaakt voor:", dayId);
}

// ===== Fade-in voor eigenarenfoto =====
function showVerblijfPhoto() {
  const photoContainer = document.querySelector('#verblijf .owners-photo');
  if (photoContainer) {
    setTimeout(() => {
      photoContainer.classList.add('visible');
      console.log("Foto zichtbaar gemaakt op verblijfspagina");
    }, 500);
  }
}
