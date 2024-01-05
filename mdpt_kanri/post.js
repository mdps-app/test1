
//GAS WebアプリのURL
const END_POINT = 'https://script.google.com/macros/s/AKfycbzmAVh2UcW-NuKXoIlZXGlrnHRwVRLy8xFyDI0pNksR-4zw64VuPmZ2jH09mOz_GsG3/exec';

//読み書きするスプレッドシート（タブ）の番号
const SHEET_NO = 1;

const sourceList = {
    sheetNo: SHEET_NO,
    data: [   // GAS側で data プロパティにアクセスしているため、
        // クライアントから送るデータにも data プロパティが必要。
        {
            "状態": "red",
            "品名": 13,
            "分類": 6,
            "個数": 9,
            "期限": "2022/01/01",
            "保管期限": "2022/02/01",
            "保管区域": ""
        }
    ]
};

const submit2 = document.getElementById("submit2");
    submit2.addEventListener('click', postToGAS, false);

function postToGAS() {
    const postparam = {
        method: 'POST',
        body: JSON.stringify(sourceList),
    };

    fetch(END_POINT, postparam , {mode: 'cors'}).then(response => {
        console.log(response.status);
        return response.json()
    }).then((data) => {
        console.log(data.result);
    }).catch(err => {
        console.log("Error!");
    });
}

obj = {
    "action": "replace",
    "sheetName": "Sheet1",
    "rows": [
        {
            "状態": "red",
            "品名": 13,
            "分類": 6,
            "個数": 9,
            "期限": "2022/01/01",
            "保管期限": "2022/02/01",
            "保管区域": ""
        }
    ]
}
