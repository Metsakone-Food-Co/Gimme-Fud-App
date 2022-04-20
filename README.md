# gimme-fud-app
Niko Naumanen: Niibix
Jaakko Malmi: JaakkoMal
Trinh Le: Trinkku
Joonas Metsäniemi: jmetsaniemi

Johdanto 

Projektin aiheena oli web-pohjainen ruokatilaussovellus. Tavoitteena oli luoda täysin toimivat selain- ja palvelinsovellukset. Selainosion toteutimme JavaScriptin React-kirjaston avulla ja palvelinosion Javan Spring Boot-palvelimella. 

Yleiskuvaus 

Sovelluksella on kaksi käyttäjätyyppiä, jossa asiakas voi tilata ruokaa ja omistaja voi luoda ravintolan ja annokset. Asiakas voi luoda sovellukseen itselleen tilin, jolla hän voi kirjautua sovellukseen. Kirjauduttuaan Asiakas voi etsiä ravintolalistasta itselleen mieluisan ravintolan, josta haluaa tilata itselleen ruokaa. Kun sopiva ravintola on valittu, voi asiakas valita ravintolan ruokalistalta haluamiaan annoksia ja lisätä ne ostoskoriin. Kun asiakas on valinnut sopivan määrän tuotteita, voi hän tehdä tilauksen painamalla ostoskorissa olevaa tilauspainiketta. Asiakkaalle esitellään tilauksen sisältö ja tilauksen kokonaishinta. Jos kaikki on oikein, voi asiakas vahvistaa tilauksensa. Asiakas voi myös tarkastella omaa tilaushistoriaansa sivuillaan (kuva 1).  


Asiakas voi myös tarkastella omaa tilaushistoriaansa sivuillaan (kuva 1).  

KUVA 1 

Ravintolan omistaja voi sovelluksessa luoda itselleen ravintolan ja ravintolaan ruokalistan. Ravintoloitsija pääsee myös ravintolakohtaisesti tarkastelemaan omien ravintoloidensa tilaushistoriaa. Ravintoloitsija voi lisätä sovellukseen kuvauksen omasta ravintolastaan ja kuvan ravintolasta sekä annoksista, joita ravintolassa tarjoillaan.  

Ryhmä ja vastuualueet 

 

Trinh Le: 

Vastuualueina olivat käyttöliittymän pohjan luominen Figmaan sekä sovelluksen näkymien lopullinen tyylittely. Toiminnallisuudet, jotta asiakas pystyy selailemaan ravintoloita ja tekemään tilauksen menusta.  

 

Jaakko Malmi:  

Vastuualueina olivat ravintolan omistajan profiilin sekä ravintolan profiilin luomiseen tarkoitettujen komponenttien ohjelmointi, ravintoloiden selaus ja haku asiakkaana kirjautuneena, ravintolan profiilisivun luominen, asiakkaan ja ravintolan tilaushistorian selaamiseen tarkoitetun sivun luominen, asiakkaan ostoskorin ja sen toiminnallisuuksien luominen sekä osittain eri näkymien tyylittely. 

  

Niko Naumanen: 

Vastuualueina olivat tietokannan luonti ja sen päivitys, asiakkaan ja ravintoloitsijan kirjautuminen sovellukseen ja tietojen oikeellisuuden varmistaminen, asiakkaan ostoskorin luominen ja sen toiminnallisuuksien toteuttaminen, sovelluksen ajaminen Heroku-palveluun ja sen toiminnan varmistaminen, yleisesti Java-palvelimen toiminnan varmistaminen ja rajapintatestausten kirjoittaminen ja ajaminen.  

 

Joonas Metsäniemi: 

 

Vastuualueina olivat REST-rajapinnan suunnittelu Stoplight-työkalulla, ravintoloiden ruokalistojen luontiin ja selaukseen tarkoitettujen komponenttien luonti ja ohjelmointi, ruokalistan selaus asiakkaana ja hakutoiminnallisuuksien integraatio (tämä päällekkäisyyttä ravintoloiden selauksen ja profiilisivujen kanssa, joten ei käytössä lopullisessa versiossa). Kuvien lähettäminen sovelluksesta, vastaanotto rajapinnassa ja lähettäminen (Cloudinary-integraatio) sekä ruokalajien että ravintoloiden osalta. Erilaisten näkymien tyylittely.  






Linkit sovellukseen ja suunnitelmiin 

 

Sovellus on ajossa Heroku palvelussa: 

Alla olevilla tunnuksilla pääset kokeilemaan sovellusta tai voit halutessasi luoda uuden tunnuksen itsellesi

LOGIN:

username: Ooke
password: Ooke

username: Sipulimies
password: Sipuli

username: PuukkoAllu
password: Blade666

Owner Login :

usernme: Aake
password: Aake666

username : Juustopää
password: Juusto69

username: Osmo
password: Osmo

https://gimme-fud-app.herokuapp.com 

Projektin Github organisaatio: 

https://github.com/Metsakone-Food-Co 

Sovelluksen UI suunnitelma: 

https://www.figma.com/file/uSP1wFvXJqkl3OCFKlNBeC/Gimmefudddd?node-id=0%3A1 

Rajapintasuunnitelma: 

https://metsakonekonefoodco.stoplight.io/docs/gimme-fud-app/YXBpOjQ2Njg3NjA3-gimme-fud-app 

