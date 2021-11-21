rm -rf docs;
ng build --output-path docs --base-href /gustaw/
git add . ;
git commit -am "release";
git push;
