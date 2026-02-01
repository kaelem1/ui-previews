import "./style.css";

const app = document.querySelector("#app");

app.innerHTML = `
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
