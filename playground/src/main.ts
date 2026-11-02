import uuid from '@smakss/uuid';
import './styles.css';

const root = document.querySelector<HTMLDivElement>('#app');

if (!root) throw new Error('App root was not found.');

root.innerHTML = [
  '<div class="page">',
  '<header class="topbar"><span class="brand">@smakss/uuid</span><span class="tag">Local playground</span></header>',
  '<section class="intro"><p class="eyebrow">Version 4 identifiers</p><h1>Create secure UUIDs</h1><p class="subtitle">Generate UUIDs with the package default, which uses the Web Crypto API. The playground does not opt into pseudo-random generation.</p></section>',
  '<main class="panel"><div class="panel-heading"><div><h2>UUID generator</h2><p>Each generation creates a fresh identifier.</p></div></div>',
  '<div class="result-box" aria-live="polite"><span class="result-label">Your UUID</span><output class="result-value" id="result">Press generate to begin</output></div>',
  '<div class="actions"><button id="generate" type="button">Generate UUID</button><button class="secondary" id="copy" type="button" disabled>Copy</button></div>',
  '<p class="status" id="status" role="status"></p><h2>Recent UUIDs</h2><ul class="list" id="history"></ul>',
  '</main><footer>Generated in your browser; values are not sent to a server.</footer></div>'
].join('');

const result = root.querySelector<HTMLOutputElement>('#result')!;
const copyButton = root.querySelector<HTMLButtonElement>('#copy')!;
const status = root.querySelector<HTMLParagraphElement>('#status')!;
const historyList = root.querySelector<HTMLUListElement>('#history')!;
const history: string[] = [];
let current = '';

function renderHistory(): void {
  historyList.replaceChildren(
    ...history.map((value) => {
      const row = document.createElement('li');
      row.textContent = value;
      return row;
    })
  );
}

root
  .querySelector<HTMLButtonElement>('#generate')!
  .addEventListener('click', () => {
    current = uuid();
    history.unshift(current);
    history.splice(8);
    result.textContent = current;
    status.textContent = 'Generated with secure randomness.';
    copyButton.disabled = false;
    renderHistory();
  });

copyButton.addEventListener('click', async () => {
  if (!current) return;

  try {
    await navigator.clipboard.writeText(current);
    status.textContent = 'Copied to clipboard.';
  } catch {
    status.textContent =
      'Clipboard access is unavailable. Select the UUID to copy it.';
  }
});
