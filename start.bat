@echo off

echo Starting All Services...
cd GeneratorService
start .\start_generator.bat
cd ..
cd ValidatorService
start .\start_validator.bat
cd ..
start "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" "http://localhost:8080" 
cd FrontEnd
yarn start
