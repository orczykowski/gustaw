#!/bin/bash
rm -rf /dist;
ng build;
scp -r dist/gustaw-angular-app/* root@server001363.nazwa.pl:/var/www/gustaw.boringstuff.pl
