@echo off
start git add . && git commit -m "." && git push heroku master
exit