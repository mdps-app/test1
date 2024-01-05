function formatDate(dateString) {
  let date = new Date(dateString);
  let year = date.getUTCFullYear();
  let month = date.getUTCMonth() + 1;
  let day = date.getUTCDate();
  if (month < 10) month = '0' + month;
  if (day < 10) day = '0' + day;
  return `${year}/${month}/${day}`;
}

function fetchList(callback) {
  var api_url = 'https://script.google.com/macros/s/AKfycbwTZBnYvgH3UceUr4W7u7jTnj8klS6IKWbFSvff7SbC3Cl6jiGxEBU5BvCdshzNSZaq/exec'; //生成したAPIのURLを指定
  const promise = fetch(api_url);

  promise
    .then(response => {
      if (!response.ok) {
        throw new Error(`response.status = ${response.status}, response.statusText = ${response.statusText}`);
      }
      return response.json();
    })
    .then(json => {
      Object.keys(json).forEach(key => {
        if (json[key] === "") delete json[key];
        if (json[key].group === "") delete json[key];
        else if (json[key].term || json[key].termH) {
          json[key].term = formatDate(json[key].term);
          json[key].termH = formatDate(json[key].termH);
        }
      });
      json = json.filter(Boolean);
      callback(json);
    }).catch(err => {
      console.log("err: " + err);
    });
}

function listS(data, state) {
  element = document.querySelector("#looksList");

  tag = [
    "state",
    "item",
    "group",
    "nom",
    "term",
    "termH",
    "zone"
  ]

  loop = ""
  for (let i = 0; i < data.length; i++) {
    loop += `<tr><td class="state ` + data[i].state + `"><span></span></td>`
    for (let ii = 1; ii < 6; ii++) {
      loop += `<td class="` + tag[ii] + `">` + data[i][tag[ii]] + `</td>`
    }
    loop += `</tr>`
  }

  content = `<input type="text" id="searchInput" placeholder="キーワードで検索">
            <table id="table">
            <tr>
              <th class="state" onclick="sort('` + state[0] + `')">状態</th>
              <th class="item" onclick="sort('` + state[1] + `')">品目</th>
              <th class="group" onclick="sort('` + state[2] + `')">分類</th>
              <th class="nom" onclick="sort('` + state[3] + `')">個数</th>
              <th class="term" onclick="sort('` + state[4] + `')">期限</th>
              <th class="termH" onclick="sort('` + state[5] + `')">保管期限</th>
              <th class="zone" onclick="sort('` + state[6] + `')">保管区域</th>
            </tr>` + loop + `</table>`

  element.innerHTML = content;
}

function sort(valueS) {
  var sortList = function (data) {
    element = document.querySelectorAll("th");
    elementName = Object.values(element).map(value => { return value.className });

    if (valueS == "F") {
      elementName = ["state", "item", "group", "nom", "term", "termH", "zone"];
      listS(data, elementName);
    } else {
      elementName = elementName.map(value => { if (value == valueS) { return "F" } else { return value } })
      dataS = data;
      if (valueS == "term") {
        dataS = dataS.sort(function (a, b) {
          return (a.term < b.term) ? -1 : 1;
        });
      }
      if (valueS == "termH") {
        dataS = dataS.sort(function (a, b) {
          return (a.termH < b.termH) ? -1 : 1;
        });
      }
      listS(dataS, elementName);
    }
  }

  fetchList(sortList);
}