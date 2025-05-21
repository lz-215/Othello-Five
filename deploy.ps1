Set-Location -Path "C:\Users\Administrator\Desktop\游戏类\游戏类\游戏类网站编写模板4"
git init
git add .
git commit -m "Initial commit for Othello Five"
git remote add origin https://github.com/lz-215/Othello-Five.git
git push -u origin master
Write-Host "Press any key to continue..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
