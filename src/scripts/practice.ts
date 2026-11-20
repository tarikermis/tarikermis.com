type PlannerData = {
  matrix: Record<string, { weeks: string[]; approve: string; caseId: string }>;
  cases: Record<string, { client: string; title: string }>;
  labels: {
    subject: string;
    intro: string;
    trade: string;
    task: string;
    tools: string;
    none: string;
    outro: string;
    weeks: string[];
    approve: string;
  };
  email: string;
};

const header = document.querySelector<HTMLElement>('[data-header]');
const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 12);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

document.querySelectorAll<HTMLElement>('[data-year]').forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});

const form = document.querySelector<HTMLFormElement>('[data-planner-form]');
const dataNode = document.querySelector<HTMLScriptElement>('[data-planner-data]');

if (form && dataNode?.textContent) {
  const data = JSON.parse(dataNode.textContent) as PlannerData;
  const title = document.querySelector<HTMLElement>('[data-plan-title]');
  const weeks = Array.from(document.querySelectorAll<HTMLElement>('[data-plan-week]'));
  const approve = document.querySelector<HTMLElement>('[data-plan-approve]');
  const caseLink = document.querySelector<HTMLAnchorElement>('[data-plan-case]');
  const caseClient = document.querySelector<HTMLElement>('[data-plan-case-client]');
  const caseTitle = document.querySelector<HTMLElement>('[data-plan-case-title]');
  const send = document.querySelector<HTMLAnchorElement>('[data-plan-send]');
  const plan = document.querySelector<HTMLElement>('.pp-plan');

  const checkedLabel = (name: string) =>
    form.querySelector<HTMLInputElement>(`input[name="${name}"]:checked`)?.dataset.label ?? '';

  const render = () => {
    const taskId = form.querySelector<HTMLInputElement>('input[name="task"]:checked')?.value ?? 'calls';
    const entry = data.matrix[taskId];
    const tradeLabel = checkedLabel('trade');
    const taskLabel = checkedLabel('task');
    const tools = Array.from(form.querySelectorAll<HTMLInputElement>('input[name="tools"]:checked')).map(
      (input) => input.dataset.label ?? input.value,
    );
    const related = data.cases[entry.caseId];

    if (title) title.textContent = `${tradeLabel} · ${taskLabel}`;
    weeks.forEach((node, index) => {
      node.textContent = entry.weeks[index] ?? '';
    });
    if (approve) approve.textContent = entry.approve;
    if (caseLink) caseLink.href = `#case-${entry.caseId}`;
    if (caseClient) caseClient.textContent = related.client;
    if (caseTitle) caseTitle.textContent = related.title;

    const body = [
      data.labels.intro,
      '',
      `${data.labels.trade}: ${tradeLabel}`,
      `${data.labels.task}: ${taskLabel}`,
      `${data.labels.tools}: ${tools.length ? tools.join(', ') : data.labels.none}`,
      '',
      ...entry.weeks.map((text, index) => `${data.labels.weeks[index]}: ${text}`),
      `${data.labels.approve}: ${entry.approve}`,
      '',
      data.labels.outro,
    ].join('\n');
    if (send) {
      send.href = `mailto:${data.email}?subject=${encodeURIComponent(`${data.labels.subject}: ${tradeLabel}`)}&body=${encodeURIComponent(body)}`;
    }
  };

  form.addEventListener('change', (event) => {
    render();
    const target = event.target as HTMLInputElement | null;
    if (target?.name === 'task' && plan && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      plan.classList.remove('is-updated');
      void plan.offsetWidth;
      plan.classList.add('is-updated');
    }
  });
  form.addEventListener('submit', (event) => event.preventDefault());
  render();
}

document.querySelectorAll<HTMLButtonElement>('[data-copy-email]').forEach((button) => {
  const original = button.textContent ?? '';
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copyEmail ?? '');
      button.textContent = button.dataset.copiedLabel ?? original;
      window.setTimeout(() => {
        button.textContent = original;
      }, 1800);
    } catch {
      window.location.href = `mailto:${button.dataset.copyEmail}`;
    }
  });
});
