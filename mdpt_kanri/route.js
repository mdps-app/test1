function initialize() {
  const body = document.querySelector('body > main');
  const table = document.querySelector('table');

  const input = document.createElement('input');
  input.addEventListener('keypress', () => {
    if (event.key === 'Enter') filterRows();
  });
  body.insertBefore(input, table);

  const button = document.createElement('button');
  button.textContent = '正規表現で検索';
  button.onclick = filterRows;
  body.insertBefore(button, table);

  document.querySelectorAll('th').forEach(th => th.onclick = sortRows);
  document.querySelector('th').classList.add('sort-asc');
}

function filterRows() {
  const keyword = document.querySelector('input').value;
  const regex = new RegExp(keyword, 'i');
  const table = document.querySelector('table');
  for (let i = 1; i < table.rows.length; i++) {
    const row = table.rows[i];
    row.style.display = 'none';
    for (let j = 0; j < row.cells.length; j++) {
      if (row.cells[j].textContent.match(regex)) {
        row.style.display = 'table-row';
        break;
      }
    }
  }
}

function sortRows() {
  const table = document.querySelector("table");
  const records = [];
  for (let i = 1; i < table.rows.length; i++) {
    const record = {};
    record.row = table.rows[i];
    record.key = table.rows[i].cells[this.cellIndex].textContent;
    records.push(record);
  }
  if (this.classList.contains('sort-asc')) {
    records.sort(compareKeysReverse);
    purgeSortMarker();
    this.classList.add('sort-desc');
  } else {
    records.sort(compareKeys);
    purgeSortMarker();
    this.classList.add('sort-asc');
  }
  for (let i = 0; i < records.length; i++) {
    table.appendChild(records[i].row);
  }
}

function purgeSortMarker() {
  document.querySelectorAll('th').forEach(th => {
    th.classList.remove('sort-asc');
    th.classList.remove('sort-desc');
  });
}

function compareKeys(a, b) {
  if (a.key < b.key) return -1;
  if (a.key > b.key) return 1;
  return 0;
}

function compareKeysReverse(a, b) {
  if (a.key < b.key) return 1;
  if (a.key > b.key) return -1;
  return 0;
}