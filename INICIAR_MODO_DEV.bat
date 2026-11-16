@echo off
chcp 65001 > nul
echo ========================================================
echo   Iniciando Servidor de Desenvolvimento (Vite + React)
echo ========================================================
echo.
echo Iniciando o Vite com abertura automatica do navegador...
echo.
npm run dev -- --open
pause
