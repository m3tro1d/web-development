@echo off
forfiles /m *.exe /c "cmd /c move @file @fname.cgi"
del *.o
