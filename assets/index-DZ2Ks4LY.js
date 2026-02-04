(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const l=document.querySelector("#app");l.innerHTML=`
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
        <h2>AI Design Whiteboard</h2>
        <p>Workshop-style sticky notes for the 4 principles.</p>
        <a class="card-link" href="/ui-previews/previews/ai-design-whiteboard/index.html">Open</a>
      </article>
      <article class="card">
        <div class="meta">Preview</div>
        <h2>AI Design Flow</h2>
        <p>Clean flowchart version of the 4-step logic.</p>
        <a class="card-link" href="/ui-previews/previews/ai-design-flow/index.html">Open</a>
      </article>
      <article class="card">
        <div class="meta">Preview</div>
        <h2>AI Design Poster</h2>
        <p>Poster-style layout with bold typographic blocks.</p>
        <a class="card-link" href="/ui-previews/previews/ai-design-poster/index.html">Open</a>
      </article>
      <article class="card">
        <div class="meta">Preview</div>
        <h2>AI Design Principles</h2>
        <p>4 key principles in an AI-assisted design workflow.</p>
        <a class="card-link" href="/ui-previews/previews/ai-design-principles/index.html">Open</a>
      </article>
      <article class="card">
        <div class="meta">Preview</div>
        <h2>Agent Browser</h2>
        <p>Token-efficient browser automation UI summary.</p>
        <a class="card-link" href="/ui-previews/previews/agent-browser/index.html">Open</a>
      </article>
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
