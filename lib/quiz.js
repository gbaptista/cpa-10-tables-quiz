const FINANCIAL_MONTH_DAYS = 30;
const FINANCIAL_YEAR_DAYS = FINANCIAL_MONTH_DAYS * 12;

const baseUnits = [
  {
    id: 'days', singular: 'dia', plural: 'dias', divisor: 1,
  },
  {
    id: 'months', singular: 'mês', plural: 'meses', divisor: FINANCIAL_MONTH_DAYS,
  },
  {
    id: 'years', singular: 'ano', plural: 'anos', divisor: FINANCIAL_YEAR_DAYS,
  },
];

const tablesPrevidencia = [
  {
    context: 'Previdência Complementar Aberta',
    title: 'Tabela Regressiva',
    max_days: 20 * FINANCIAL_YEAR_DAYS,
    units: [...baseUnits, ...baseUnits, ...baseUnits, ...baseUnits, ...baseUnits],
    ranges: [
      { above: 0, tax: 0.35, label: 'Até 2 Anos' },
      { above: 2 * FINANCIAL_YEAR_DAYS, tax: 0.30, label: 'Entre 2 e 4 Anos' },
      { above: 4 * FINANCIAL_YEAR_DAYS, tax: 0.25, label: 'Entre 4 e 6 Anos' },
      { above: 6 * FINANCIAL_YEAR_DAYS, tax: 0.20, label: 'Entre 6 e 8 Anos' },
      { above: 8 * FINANCIAL_YEAR_DAYS, tax: 0.15, label: 'Entre 8 e 10 Anos' },
      { above: 10 * FINANCIAL_YEAR_DAYS, tax: 0.10, label: 'Acima de 10 Anos' },
    ],
  },
  {
    context: 'Previdência Complementar Aberta',
    title: 'Tabela Regressiva (Falecimento)',
    max_days: 20 * FINANCIAL_YEAR_DAYS,
    units: [...baseUnits, ...baseUnits, ...baseUnits, ...baseUnits, ...baseUnits],
    ranges: [
      { above: 0, tax: 0.25, label: 'Até 2 Anos' },
      { above: 2 * FINANCIAL_YEAR_DAYS, tax: 0.25, label: 'Entre 2 e 4 Anos' },
      { above: 4 * FINANCIAL_YEAR_DAYS, tax: 0.25, label: 'Entre 4 e 6 Anos' },
      { above: 6 * FINANCIAL_YEAR_DAYS, tax: 0.20, label: 'Entre 6 e 8 Anos' },
      { above: 8 * FINANCIAL_YEAR_DAYS, tax: 0.15, label: 'Entre 8 e 10 Anos' },
      { above: 10 * FINANCIAL_YEAR_DAYS, tax: 0.10, label: 'Acima de 10 Anos' },
    ],
  },
  {
    context: 'Previdência Complementar Aberta',
    title: 'Tabela Progressiva',
    max_days: 20 * FINANCIAL_YEAR_DAYS,
    units: [...baseUnits, ...baseUnits, ...baseUnits, ...baseUnits, ...baseUnits],
    ranges: [
      { above: 0, tax: 0.15, label: 'Até 2 Anos' },
      { above: 2 * FINANCIAL_YEAR_DAYS, tax: 0.15, label: 'Entre 2 e 4 Anos' },
      { above: 4 * FINANCIAL_YEAR_DAYS, tax: 0.15, label: 'Entre 4 e 6 Anos' },
      { above: 6 * FINANCIAL_YEAR_DAYS, tax: 0.15, label: 'Entre 6 e 8 Anos' },
      { above: 8 * FINANCIAL_YEAR_DAYS, tax: 0.15, label: 'Entre 8 e 10 Anos' },
      { above: 10 * FINANCIAL_YEAR_DAYS, tax: 0.15, label: 'Acima de 10 Anos' },
    ],
  },
];

const tablesRendaFixa = [
  {
    context: 'Renda Fixa',
    title: 'Tabela Regressiva',
    max_days: 3 * FINANCIAL_YEAR_DAYS,
    units: [...baseUnits, ...baseUnits, ...baseUnits, ...baseUnits, ...baseUnits],
    ranges: [
      { above: 0, tax: 0.225, label: 'Até 180 Dias' },
      { above: 180, tax: 0.20, label: 'De 181 a 360 Dias' },
      { above: 360, tax: 0.175, label: 'De 361 a 720 Dias' },
      { above: 720, tax: 0.15, label: 'Acima de 720 Dias' },
    ],
  },
  {
    context: 'Renda Fixa',
    title: 'IOF',
    max_days: 90,
    units: [{
      id: 'days', singular: 'dia', plural: 'dias', divisor: 1,
    }],
    ranges: [
      { above: 29, tax: 0.00, label: 'Dia 30' },
      { above: 28, tax: 0.03, label: 'Dia 29' },
      { above: 27, tax: 0.06, label: 'Dia 28' },
      { above: 26, tax: 0.10, label: 'Dia 27' },
      { above: 25, tax: 0.13, label: 'Dia 26' },
      { above: 24, tax: 0.16, label: 'Dia 25' },
      { above: 23, tax: 0.20, label: 'Dia 24' },
      { above: 22, tax: 0.23, label: 'Dia 23' },
      { above: 21, tax: 0.26, label: 'Dia 22' },
      { above: 20, tax: 0.30, label: 'Dia 21' },
      { above: 19, tax: 0.33, label: 'Dia 20' },
      { above: 18, tax: 0.36, label: 'Dia 19' },
      { above: 17, tax: 0.40, label: 'Dia 18' },
      { above: 16, tax: 0.43, label: 'Dia 17' },
      { above: 15, tax: 0.46, label: 'Dia 16' },
      { above: 14, tax: 0.50, label: 'Dia 15' },
      { above: 13, tax: 0.53, label: 'Dia 14' },
      { above: 12, tax: 0.56, label: 'Dia 13' },
      { above: 11, tax: 0.60, label: 'Dia 12' },
      { above: 10, tax: 0.63, label: 'Dia 11' },
      { above: 9, tax: 0.66, label: 'Dia 10' },
      { above: 8, tax: 0.70, label: 'Dia 9' },
      { above: 7, tax: 0.73, label: 'Dia 8' },
      { above: 6, tax: 0.76, label: 'Dia 7' },
      { above: 5, tax: 0.80, label: 'Dia 6' },
      { above: 4, tax: 0.83, label: 'Dia 5' },
      { above: 3, tax: 0.86, label: 'Dia 4' },
      { above: 2, tax: 0.90, label: 'Dia 3' },
      { above: 1, tax: 0.93, label: 'Dia 2' },
      { above: 0, tax: 0.96, label: 'Dia 1' },
    ],
  },
];

// Improve Randomness

let tables = [...tablesPrevidencia, ...tablesRendaFixa, ...tablesRendaFixa, ...tablesRendaFixa];

tables = [...tables, ...tables, ...tables, ...tables, ...tables, ...tables];

const setState = (state) => {
  document.getElementById('state').innerHTML = state;
  document.getElementsByTagName('body')[0].className = `state-${state}`;
};

const valueFor = (days, table) => {
  const ranges = table.ranges.sort((a, b) => ((a.above > b.above) ? 1 : -1)).reverse();

  let result;

  ranges.forEach((range) => {
    if (result === undefined) {
      if (days > range.above) result = range;
    }
  });

  return result.tax;
};

const fillTable = (table) => {
  const tableElement = document.getElementById('table');
  tableElement.innerHTML = '';

  table.ranges.forEach((range) => {
    const value = (range.tax * 100.0).toLocaleString('pt-br', { minimumFractionDigits: 0, maximumFractionDigits: 2 });

    tableElement.innerHTML += `<tr><th scope="col">${range.label}</th><td>${value}%</td></tr>`;
  });
};

let expectedAnswer;

const checkAnswer = () => {
  let answer = document.getElementById('user-answer').value;

  answer = answer.replace(/%/g, '').replace(/\s/g, '').replace(/,/g, '.');
  answer = parseFloat(answer) / 100.0;

  if (Number.isNaN(answer)) {
    document.getElementById('user-inputed-answer').innerHTML = '-';
  } else {
    const answerFormatted = (answer * 100.0).toLocaleString('pt-br', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
    document.getElementById('user-inputed-answer').innerHTML = `${answerFormatted}%`;
  }

  if (answer === expectedAnswer) {
    setState('answered-correct');
  } else {
    setState('answered-wrong');
  }

  document.getElementById('next').focus();
};

const ask = () => {
  setState('answering');

  document.getElementById('user-answer').value = '';

  document.getElementById('user-answer').focus();

  const table = tables[Math.floor(Math.random() * tables.length)];

  fillTable(table);

  document.getElementById('title').innerHTML = table.title;
  document.getElementById('context').innerHTML = table.context;

  const unit = table.units[Math.floor(Math.random() * table.units.length)];
  const days = Math.round(Math.random() * table.max_days);

  const value = (days / unit.divisor);

  const valueFormatted = value.toLocaleString('pt-br', { minimumFractionDigits: 0, maximumFractionDigits: 2 });

  document.getElementById(
    'question',
  ).innerHTML = `Qual o valor para <span>${valueFormatted} ${value === 1 ? unit.singular : unit.plural}</span>?`;

  expectedAnswer = valueFor(days, table);

  const expectedAnswerFormatted = (expectedAnswer * 100.0).toLocaleString('pt-br', { minimumFractionDigits: 0, maximumFractionDigits: 2 });

  document.getElementById('answer').innerHTML = `${expectedAnswerFormatted}%`;

  baseUnits.forEach((baseUnit) => {
    const valueForUnit = days / baseUnit.divisor;
    document.getElementById(baseUnit.id).innerHTML = valueForUnit.toLocaleString('pt-br', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
  });
};

document.getElementById('check-answer').addEventListener('click', () => {
  checkAnswer();
});

document.getElementById('next').addEventListener('click', () => {
  ask();
});

document.getElementById('user-answer').addEventListener('keypress', (event) => {
  if (event.key === 'Enter' || event.keyCode === 13) checkAnswer();
});

ask();
