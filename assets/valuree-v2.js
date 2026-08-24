document.documentElement.classList.remove('no-js');

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-mobile-menu]');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      menu.hidden = open;
      document.body.classList.toggle('menu-open', !open);
    });
  }
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', () => {
      if (toggle && menu) {
        toggle.setAttribute('aria-expanded', 'false');
        menu.hidden = true;
        document.body.classList.remove('menu-open');
      }
    });
  });
  document.querySelectorAll('[data-valuree-generator]').forEach((root) => {
    const form=root.querySelector('form'),status=root.querySelector('[data-generator-status]'),result=root.querySelector('[data-generator-result]'),submit=form?.querySelector('button[type="submit"]');
    if(!form||!status||!result||!submit)return;
    form.addEventListener('submit',async(event)=>{event.preventDefault();if(!form.reportValidity())return;const endpoint=root.dataset.endpoint,payload=Object.fromEntries(new FormData(form));submit.disabled=true;status.textContent='Finding your shared vibe…';result.hidden=true;
      try{if(!endpoint)throw new Error('not-connected');const response=await fetch(`${endpoint}/recommendations`,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},credentials:'same-origin',body:JSON.stringify(payload)});if(!response.ok)throw new Error('request-failed');const data=await response.json();result.querySelector('[data-result-title]').textContent=data.title;result.querySelector('[data-result-copy]').textContent=data.summary;result.querySelector('[data-result-meta]').textContent=`${data.cost} · ${data.duration} · ${data.place}`;result.hidden=false;status.textContent='Your match is ready.'}
      catch(error){status.textContent=error.message==='not-connected'?'The secure matching service is being connected. Your answers were not stored.':'We could not create your match. Please try again.'}finally{submit.disabled=false;}
    });
  });
});
