(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const a=document.querySelector("#app");a.innerHTML=`
  <main class="page">
    <section class="hero">
      <p class="eyebrow">UI Preview Hub</p>
      <h1>Kaelem's UI Previews</h1>
      <p class="lead">
        A living gallery of UI exploration prototypes. Each preview links to a
        product-specific design system and a deployable static page.
      </p>
      <div class="actions">
        <a class="btn" href="https://github.com/kaelem1/ui-previews" target="_blank" rel="noreferrer">
          Repo
        </a>
        <a class="btn ghost" href="mailto:hello@kaelem.dev">Request a new preview</a>
      </div>
    </section>

    <section class="grid">
      <article class="card">
        <div class="meta">Example</div>
        <h2>Starter Preview</h2>
        <p>Replace this card with your first generated preview.</p>
        <a class="card-link" href="#">Coming soon</a>
      </article>
    </section>
  </main>
`;
