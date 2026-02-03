(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const l=document.querySelector("#app");l.innerHTML=`
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

      <article class="card">
        <div class="meta">Whitebox</div>
        <h2>Assistant Notes</h2>
        <p>Non-sensitive tasks and updates.</p>
        <a class="card-link" href="/ui-previews/previews/assistant-notes/index.html">Open</a>
      </article>
    </section>

    <section class="grid">
      <article class="card">
        <div class="meta">Preview</div>
        <h2>Clawdbot Memory System</h2>
        <p>NotebookLM-style summary UI for memory breakdown.</p>
        <a class="card-link" href="/ui-previews/previews/clawdbot-memory/index.html">Open</a>
      </article>

      <article class="card">
        <div class="meta">Preview</div>
        <h2>Assistant Task Schedule</h2>
        <p>Apple-inspired daily planner UI.</p>
        <a class="card-link" href="/ui-previews/previews/assistant-task-schedule/index.html">Open</a>
      </article>

      <article class="card">
        <div class="meta">Whitebox</div>
        <h2>Assistant Notes</h2>
        <p>Non-sensitive tasks and updates.</p>
        <a class="card-link" href="/ui-previews/previews/assistant-notes/index.html">Open</a>
      </article>
    </section>
  </main>
`;
