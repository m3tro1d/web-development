@echo off

rem Compile files
forfiles /m *.pas /c "cmd /c fpc @file"

rem Clean up the mess
forfiles /m *.exe /c "cmd /c move @file @fname.cgi"
del *.o
