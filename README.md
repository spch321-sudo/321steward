# 321管家

依「神、己、人、事」的關係次序，全方位管理人生每個範疇的 321 PWA。

網址：https://spch321-sudo.github.io/321steward/

## 修改與發佈
1. 只改 `src/` 裡的檔案：`app.js`（主程式）、`ext.js`（朗讀、美圖、團契、自動更新）、`plus.js`（目標、禱告、備份、九果等）、`gcal_lib.js`（日曆解析，取自每日得勝）、`style.css`、`sw.tpl.js`、`verses.json`（和合本／和合本简体／WEB 經文）。
2. 執行 `pip install opencc-python-reimplemented` 一次，之後每次 `python3 src/build.py`。
3. 建置會產生根目錄的 `index.html`、`app.js`、`sw.js`、`version.json`（三處版本號一致），整批上傳即可；已安裝的 App 會自動更新。

主程式一律 ES5（給 WPS／舊 WebView），`index.html` 維持在 183KB 以下。
