@echo off
echo NPM PUBLISH
echo Before continuing, ensure that:
echo - you are logged in (npm whoami)
echo - you have successfully rebuilt all the libraries (npm run build-all)
pause
cd .\dist\myrmidon\cadmus-pura-part-pg
call npm publish --access=public
cd ..\..\..
pause
cd .\dist\myrmidon\cadmus-pura-part-ui
call npm publish --access=public
cd ..\..\..
echo ALL DONE
