list = {
    "#dashboard": "D",
    "#looks": "L",
    "#map": "M",
    "#setting": "S",
    "#information": "I",
    404: "404"
}
listO = [
    "dashboard",
    "looks",
    "map",
    "setting",
    "information"
]

function change(target) {
    for (let i = 0; i < 5; i++) {
        document.getElementById(listO[i]).innerHTML = "";
    }
    document.getElementById("triangle").style.top = document.getElementById(target).getBoundingClientRect().top + ((document.getElementById(target).offsetHeight - 40) / 2) + 'px';
    document.getElementById('checkbox').checked = false;
    fetch('./pages/' + target.slice(0, -1) + '.html')
        .then(response => response.text()).then(data => {
            document.getElementById(target.slice(0, -1)).innerHTML = data;
        });
}

function changeToD() {
    change('dashboardM')
}

function changeToL() {
    change('looksM');
    lookData = fetchList();
    console.log(lookData);
}

function changeToM() {
    change('mapM')
}

function changeToS() {
    change('settingM')
}

function changeToI() {
    change('informationM')
}
function changeTo404() {
    change('404M')
}

function hash(tag, _callback) {
    eval("change('" + tag.slice(1) + "M')");
    if (tag == "#looks") {
        var setLook = function (data) {
            console.log(data);
            elementName = ["state","item","group","nom","term","termH","zone"];
            listS(data , elementName);
        }
        fetchList(setLook);
    }
}
