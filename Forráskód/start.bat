@echo off
echo ================================
echo   Webalkalmazasok inditasa...
echo ================================

start "Minigame App" cmd /k "cd minigame-app && npm run dev"
echo Minigame-app inditasa: http://localhost:5173

start "Quiz App" cmd /k "cd quiz-app && npm run dev"
echo Quiz-app inditasa: http://localhost:5174

echo Varakozas a szerverek indulasara...
timeout /t 5 /nobreak > nul

start "" "Web\index.html"
echo [✓] Web/index.html megnyitva

echo.
echo ================================
echo     Minden elindult!
echo ================================
echo.
echo - Minigame App: http://localhost:5173
echo - Quiz App:     http://localhost:5174
echo - Statikus oldal: Web/index.html
echo.
pause
