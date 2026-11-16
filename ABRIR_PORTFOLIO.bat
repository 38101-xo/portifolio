@echo off
chcp 65001 > nul
echo ========================================================
echo   Portfólio de Raiany Oliveira - Tecnologia da Informação
echo ========================================================
echo.
echo Abrindo o portfólio no seu navegador padrão...
echo.
start "" "%~dp0abrir-site-direto.html"
echo Pronto! O site foi aberto no seu navegador.
echo Caso queira rodar o servidor completo de desenvolvimento:
echo Execute o arquivo INICIAR_MODO_DEV.bat
echo.
pause
