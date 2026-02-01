(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const t of s.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&i(t)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const l=document.querySelector("#app");l.innerHTML=`
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

      <article class="card">
        <div class="meta">Preview</div>
        <h2>Assistant Task Schedule</h2>
        <p>Apple-inspired daily planner UI.</p>
        <a class="card-link" href="/ui-previews/previews/assistant-task-schedule/index.html">Open</a>
      </article>
    </section>

    <section class="grid">
      <article class="card">
        <div class="meta">Example</div>
        <h2>Starter Preview</h2>
        <p>Replace this card with your first generated preview.</p>
        <a class="card-link" href="#">Coming soon</a>
      </article>

      <article class="card">
        <div class="meta">Preview</div>
        <h2>Assistant Task Schedule</h2>
        <p>Apple-inspired daily planner UI.</p>
        <a class="card-link" href="/ui-previews/previews/assistant-task-schedule/index.html">Open</a>
      </article>
    </section>
  </main>
`;
