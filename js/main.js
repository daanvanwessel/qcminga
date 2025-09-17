// Tijdlijn opbouwen
function createTimeline(dayId, activities) {
  const page = document.getElementById(dayId);
  if (page.querySelector('.timeline')) return;

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
}

// Scroll reveal
function enableScrollReveal(container) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  container.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
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

// Router: activeer juiste pagina op basis van hash
function showPageFromHash() {
  const pages = document.querySelectorAll('.page');
  pages.forEach(p => p.classList.remove('active'));

  let hash = location.hash.replace('#', '');
  if (!hash) hash = 'startpage';

  const page = document.getElementById(hash);
  if (page) {
    page.classList.add('active');
    enableScrollReveal(page);
    if (hash === 'verblijf') showVerblijfPhoto();
  }
}

window.addEventListener('hashchange', showPageFromHash);
window.addEventListener('DOMContentLoaded', showPageFromHash);

// Tijdlijnen vullen
createTimeline('donderdag', [
  { time: '16:00', desc: 'Pre-Maß @ President Steyn'},
  { time: '18:15', desc: 'Diner @ Oudegoedstraat 10'},
  { time: '19:10', desc: 'Vertrek naar station Deventer'},
  { time: '19:40', desc: 'Vertrek QC Fuckyou Nightjet'},
  { time: '20:30', desc: 'QC Minga VGT'},
  { time: '20:45', desc: 'Uitreiking QC Maßmeister award'}
]);

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
  { time: '21:00 en later', desc: 'Hofbräuhaus oder Glockenbachviertel; Burg Pappenheim, Loretta, Pimpernel Club, Trisoux' }
  
]);

createTimeline('zaterdag', [
  { time: 'TBA', desc: 'Ontbijt hotel'},
  { time: 'TBA', desc: 'Vertrek Wiesn' },
  { time: '09:00', desc: 'Tenten open' },
  { time: '12:00', desc: "O'Zapft is! Erste Maß! QC Oktoberfest is a go!" },
]);

createTimeline('zondag', [
  { time: 'TBA', desc: 'Ontbijt hotel' },
  { time: '09:50', desc: 'München Hbf' },
  { time: '17:15', desc: 'Aankomst Deventer'},
  { time: '17:20', desc: 'Verjaardag Janne' }
]);
