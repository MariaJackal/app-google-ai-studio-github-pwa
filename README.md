# 旅のしおり｜東京・富士山 2026

手機優先的靜態 PWA，內容依 `C:/Users/Regulus/Desktop/TOKYO_2026/日本行程.txt` 整理，並補上 10/2 去程 FD234 與 10/7 回程 FD235。

## 功能

- 六日行程時間軸：景點、餐廳、交通、住宿分色卡片
- Open-Meteo 天氣：線上時更新，旅程資料與記帳離線保留在本機
- Google Maps 導航／地鐵轉乘按鈕
- 導遊筆記：景點故事、動線、Tabelog 區域查詢、必點與伴手禮
- 航班、住宿、緊急電話、預約代號與 JPY/TWD 記帳
- Manifest + Service Worker，可加入手機主畫面

## GitHub Pages

1. 將本資料夾內容推到 GitHub repository。
2. GitHub → Settings → Pages → Source 選擇 `Deploy from a branch`。
3. Branch 選 `main`、資料夾選 `/ (root)`，儲存後等待 Pages 建置。
4. 以手機開啟 GitHub Pages 網址，即可加入主畫面。

這個版本不需要伺服器或 API key；天氣使用 Open-Meteo 的公開 forecast API。若沒有網路，行程、導遊筆記與本機記帳仍可開啟。
