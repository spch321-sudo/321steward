# 321管家

依「神、己、人、事」的關係次序，全方位管理人生每個範疇的 321 PWA。

網址：https://spch321-sudo.github.io/321steward/

## 修改與發佈
1. 只改 `src/` 裡的檔案：`app.js`（主程式）、`ext.js`（朗讀、美圖、團契、自動更新）、`plus.js`（目標、禱告、備份、九果等）、`gcal_lib.js`（日曆解析，取自每日得勝）、`style.css`、`sw.tpl.js`、`verses.json`（和合本／和合本简体／WEB 經文）。
2. 執行 `pip install opencc-python-reimplemented` 一次，之後每次 `python3 src/build.py`。
3. 建置會產生根目錄的 `index.html`、`app.js`、`sw.js`、`version.json`（三處版本號一致），整批上傳即可；已安裝的 App 會自動更新。

主程式一律 ES5（給 WPS／舊 WebView），`index.html` 維持在 183KB 以下。

## 321 共用帳號（k321acct.js）
`k321acct.js` 是所有 321 App 共用的帳號模組，放在這個 repo 根目錄，其他 App 用 `../321steward/k321acct.js` 載入。
- 一組帳號碼（`321A-…`）推算出每個 App 自己的雲端位置；內容在手機上用 AES-GCM 加密後才存到 ical-proxy Worker。
- 目前使用的位置：`steward`（管家）、`planner`／`planner-pub`（每日得勝全部資料／公開給管家的時程）、`fellowship`（空中團契個人資料）、`life`／`life-pub`（生命操練全部紀錄／公開給管家的操練摘要）、`profile`（共用設定：空中團契開通 `k321_auth`）。
- 新 App 接入：載入 `k321acct.js`，登入用 `K321ACCT.open({lang,onChange})`，存取用 `K321ACCT.put/fetch(位置名稱, …)`，啟動時呼叫 `K321ACCT.syncProfile()`。
