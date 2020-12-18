Linkki projektiin:
https://reseptiprojekti.herokuapp.com/ 

Huom! API-serverillä kestää hetki käynnistyä ennen kuin näkyy esimerkkireseptejä.



----   REST   ----

Heroku ei antanut tehdä api-kutsuja samassa osoitteessa, joten tein sille oman serverin.

https://reseptiprojekti-api.herokuapp.com/ (vain api)

'/api/recipes' on route, johon lähetetään:

Kaikki reseptit GET,

Yhden reseptin lisäys POST.

'/api/recipes/:id' on route johon lähetetään:

Yhden muokkaus PATCH, (en ehtinyt lisätä ominaisuutta joka käyttää tätä)

Yhden poisto DELETE