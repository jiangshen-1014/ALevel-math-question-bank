@echo off
chcp 65001 >nul
cd /d "E:\workbuddy\题库软件"
echo ============================================
echo   题库软件 · 本地服务器（资料库/预览依赖此服务）
echo   启动后请勿关闭此窗口
echo   浏览器打开： http://localhost:8787
echo ============================================
node server/server.js
echo.
echo 服务器已停止。按任意键关闭窗口。
pause >nul
