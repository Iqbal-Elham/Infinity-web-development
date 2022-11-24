const hum = document.querySelector('.humbarger');
const navMenu = document.querySelector('.menu');

hum.addEventListener('click', () => {
  hum.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.menu-item').forEach((n) => n.addEventListener('click', () => {
  hum.classList.remove('active');
  navMenu.classList.remove('active');
}));

const team = [
  {
    name: 'Iqbal Elham',
    field: 'Full stack Developer',
    descriptions: `Curiosity and passion for science, technology, and computer helped me to develop very well in these areas.
    I am interested both in back-end and front-end technologies and knowledgeable in HTML, CSS, JS, and Python.`,
    image: './assets/images/me.jpeg',
  },
  {
    name: 'Andres Raul',
    field: 'Graphic Designer',
    descriptions: `15+ years of experience in software industry providing- Account Management and Strong experience with Internet 
    Marketing Services selling like SEO, CMS, SEM, ORM(Web applications, on-page-optimization, off-page-optimization, keyword-research).`,
    image: './assets/images/pic-2.png',
  },
  {
    name: 'Luis Raul Zubia Maciel',
    field: 'Full stack Developer',
    descriptions: `15+ years of experience in software industry providing- Account Management and Strong experience with Internet 
    Marketing Services selling like SEO, CMS, SEM, ORM(Web applications, on-page-optimization, off-page-optimization, keyword-research).`,
    image: './assets/images/luis.png',
  },
  {
    name: 'Paul Sáenz Sucre',
    field: 'Full stack Developer',
    descriptions: `15+ years of experience in software industry providing- Account Management and Strong experience with Internet 
    Marketing Services selling like SEO, CMS, SEM, ORM(Web applications, on-page-optimization, off-page-optimization, keyword-research).`,
    image: './assets/images/paul.png',
  },
  {
    name: 'Muska ferdows',
    field: 'Project Manager',
    descriptions: `15+ years of experience in software industry providing- Account Management and Strong experience with Internet 
    Marketing Services selling like SEO, CMS, SEM, ORM(Web applications, on-page-optimization, off-page-optimization, keyword-research).`,
    image: './assets/images/pic-4.png',
  },
  {
    name: 'Arsalan Shahyar',
    field: 'Content Writer',
    descriptions: `15+ years of experience in software industry providing- Account Management and Strong experience with Internet 
    Marketing Services selling like SEO, CMS, SEM, ORM(Web applications, on-page-optimization, off-page-optimization, keyword-research).`,
    image: './assets/images/pic-3.png',
  },
];

const teamDiv = document.querySelector('.team');

for (let i = 0; i < team.length; i += 1) {
  const eachTeam = `<div class="employee">
  <div class="team-bg"><img class="team-image" src="${team[i].image}" alt=""></div>
  <div class="co-workers-detail">
    <h3>${team[i].name}</h3>
    <h4>${team[i].field} </h4>
    <hr>
    <p>${team[i].descriptions}</p>
  </div>
</div>`;

  teamDiv.innerHTML += eachTeam;
}