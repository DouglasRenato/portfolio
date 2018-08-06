/**
 * Generate the card list of projects with data of the projects.js file.
 */
const projectsListCards = [];
projectsList.forEach((item) => {

  let technologies = [];
  item.technologies.forEach((technology) => {
    let technologyItem =
      `
        <span class="badge badge-secondary badge-pill" style="font-size: 0.7em; padding-bottom: .5px;">${technology}</span>
      `
    technologies.push(technologyItem);
  });

  let linkCode =
    item.linkCode ?
    `
        <a href="${item.linkCode}" target="_blank"
          class="btn btn-sm btn-info"
          data-toggle="tooltip" data-placement="top" title="Ver o código">
          &#160; <i class="fas fa-code"></i> &#160;
        </a>
      ` :
    '';

  let linkLive =
    item.linkLive ?
    ` 
      <a href="${item.linkLive}" target="_blank"
        class="btn btn-sm btn-info"
        data-toggle="tooltip" data-placement="top" title="Ver ao vivo">
        &#160; <i class="fas fa-eye"></i> &#160;
      </a>  
      ` :
    '';

  let card =
    `
    <div class="col-md-4">
      <div class="card bg-light mb-3 mt-3">
      <div class="card-header"><h6 class="m-0"><strong>${item.name}</strong></h6></div>
        <img class="card-img-top" src="${item.img}" alt="Card image cap">
        <div class="card-body p-2 text-center">
          <p class="card-text">
            ${technologies.join(' ')}
          </p>
        </div>
        <div class="card-footer text-muted">
          <div class="btn-group" role="group" aria-label="Basic example">
            ${linkCode}
            ${linkLive}
          </div>
        </div>
      </div>
    </div>
  `;

  projectsListCards.push(card);
});
document.querySelector('#cardsList').innerHTML = projectsListCards.reverse().join(' ');

/**
 * Smooth scroll of anchor links.
 */
const navBarLinks = document.querySelectorAll('ul.navbar-nav a');
navBarLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    if (event.target.classList.contains('portfolio-link')) {
      window.scroll({
        behavior: 'smooth',
        left: 0,
        top: document.querySelector('#portfolio').offsetTop - 70,
      });
    }
    if (event.target.classList.contains('talk-to-me-link')) {
      window.scroll({
        behavior: 'smooth',
        left: 0,
        top: document.querySelector('#talk-to-me').offsetTop,
      });
    }
  });
});
/**
 * Scroll to top.
 */
window.addEventListener('scroll', (event) => {
  if (document.querySelector('#main').getBoundingClientRect().top < -17) {
    document.querySelector('.back-to-top').style.display = 'block';
  } else {
    document.querySelector('.back-to-top').style.display = 'none';
  }
});
document.querySelector('.back-to-top-icon').addEventListener('click', () => {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: document.querySelector('header').offsetTop,
  });
});

/**
 * Initialize Bootstrap Tooltip.
 */
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})