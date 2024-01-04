//Muistiinpanoja
// tämä on kommentti, joka on yhdellä rivillä

/* tämä on kommentti, 
    joka
    on
    neljällä rivillä */

Sijoitus
var a = 2;
var b = 2;

// vertailu; onko a yhtäsuuri kuin b
if (a == b)

Vertailuoperaattorit ovat:

== Löysä yhtäläisyysoperaattori. Tarvittaessa yritetään tyyppimuunnosta.
!= Löysä erilaisuusoperaattori. Tarvittaessa yritetään tyyppimuunnosta.
=== Tiukka yhtäläisyysoperaattori. Ei tyyppimuunnosta.
!== Tiukka erilaisuusoperaattori. Ei tyyppimuunnosta. 
> Suurempi kuin -operaattori. Tarvittaessa yritetään tyyppimuunnosta. 
< Pienempi kuin -operaattori. Tarvittaessa yritetään tyyppimuunnosta. 
<= Pienempi ja yhtäsuuri kuin -operaattori.  Tarvittaessa yritetään tyyppimuunnosta. 
>= Suurempi tai yhtäsuuri kuin -operaattori. Tarvittaessa yritetään tyyppimuunnosta

++ 	lisää yksi
--	vähennä yksi
-	negaatio
+=	lisää luku
-=	vähennä luku
*= 	kerro luku
/=	jaa luku

 esim
var b = 5;
b++;	// 6

var a += b	// tämä on sama kuin a = a + b */

//onko ikä vähintään 18 ja palautetaan arvo 'Yes', jos näin on. Muuten palautetaan 'No'. Esimerkin tapauksessa ikä on 20 > 18 eli tosi ja toiminta on:
var henkilo= {
  nimi: 'jussi',
  ika: 20,
  driver: null
};henkilo.driver = henkilo.ika >= 18 ? 'Yes' : 'No';



// Määritelmän mukaan data on kaikkea sitä, mikä on merkityksellistä tietokoneelle. JavaScriptissä on seitsemän (7) tietotyyppiä erilaiselle datalle. Nämä tietotyypit ovat: undefined, null, boolean, string, symbol, number ja object.

'tämä on merkkijono'
"tämäkin on merkkijono"
´tässäkin on vielä merkkijono´

"Uuden rivin merkki voidaan tulostaa seuraavasti: \"\\n\"
,jolloin näytölle tulostuu:

Uuden rivin merkki voidaan tulostaa seuraavasti: "\n".

"epä"+"järjestelmällis"+"tyttämättö"+"myydellän"+"säkään" voidaan oheisesti yhdistää + -operaattorilla sanaksi:

epäjärjestelmällistyttämättömyydellänsäkään

var first_name = "Matti";
var last_name = "Meikäläinen";
console.log("Hei" + first_name + " " + last_name);

JavaScript sisältää myös valmiita metodeja merkkijonojen käsittelyyn. Seuraavissa taulukoissa muutamia käyttökelpoisia metodeja, jotka helpottavat ohjelmointia.

Metodi	Kuvaus
length	merkkijonon pituus (ominaisuus)
charAt(paikka)	palauttaa merkin paikasta (ensimmäinen merkki on 0:s)
charCodeAt(paikka)	palauttaa merkin Unikoodin kohdasta paikka
substring(aloitusnro,lopetusnro)	hakee merkkijonon väliltä aloitusnro-lopetusnro (lopetusnro ei mukana)
toLowerCase()	muuttaa merkkijonon pieniksi kirjaimiksi
toUpperCase()	muuttaa merkkijonon isoiksi kirjaimiksi
split(jakajamerkki)	muuttaa merkkijonon taulukon alkioiksi annetun jakajamerkin kohdalta
indexOf(merkkijono)	palauttaa merkkijonon paikan (palauttaa -1, jos ei löydy)
lastIndexOf(merkkijono)	kuten yllä, mutta merkkijono käydään oikealta vasemmalle
substr(aloitusnro,pituus)	hakee halutun määrän merkkejä alkaen aloitusnro:sta
replace(mjono1,mjono2)	korvaa merkit mjono1 merkeillä mjono2 (vain ensimmäisen minkä löytää)
fontcolor()	palauttaa fontin värin
fontsize()	palauttaa fontin koon
search(merkkijono)	palauttaa annetun merkkijonon sijainnin toisesta merkkijonosta. Palauttaa -1:n, jos merkkijonoa ei löytynyt.

Sijoitus
var a = 2;
var b = 2;

// vertailu; onko a yhtäsuuri kuin b
if (a == b)

Vertailuoperaattorit ovat:

== Löysä yhtäläisyysoperaattori. Tarvittaessa yritetään tyyppimuunnosta.
!= Löysä erilaisuusoperaattori. Tarvittaessa yritetään tyyppimuunnosta.
=== Tiukka yhtäläisyysoperaattori. Ei tyyppimuunnosta.
!== Tiukka erilaisuusoperaattori. Ei tyyppimuunnosta. 
> Suurempi kuin -operaattori. Tarvittaessa yritetään tyyppimuunnosta. 
< Pienempi kuin -operaattori. Tarvittaessa yritetään tyyppimuunnosta. 
<= Pienempi ja yhtäsuuri kuin -operaattori.  Tarvittaessa yritetään tyyppimuunnosta. 
>= Suurempi tai yhtäsuuri kuin -operaattori. Tarvittaessa yritetään tyyppimuunnosta.

!   EI-operaatio. Palauttaa käänteisen totuusarvon.
&&  JA-operaatio. Palauttaa true-arvon, mikäli kaikki 
    operandit evaluoituvat tosiksi, muuten palauttaa false-arvon.
||  TAI-operaatio. Palauttaa true-arvon, mikäli vähintään 
    yksi operandi evaluoituu todeksi, muuten palauttaa false-arvon.

//alemmassa koodi selvittää onko henkilö ajokelpoinen

    var henkilo= {
  nimi: 'jussi',
  ika: 20,
  driver: null
};henkilo.driver = henkilo.ika >= 18 ? 'Yes' : 'No';

seuraava palauttaa arvon true: 1*2==2 && 3*4 != 13 > 11

Kun tietotyypit ovat epäselviä, JavaScript pyrkii monimutkaisten sääntöjen avulla saamaan tyypit yhteismitallisiksi. Katsotaan seuraavia esimerkkejä:

console.log("5" + 5) // (1)
console.log("5" - 1) // (2)
console.log(10 * null) // (3)
console.log("eight" * 8) // (4)
console.log(true == 0) // (5)

//Kohdassa (1) järjestelmä saa arvoksi 55. Kohdassa (2) puolestaa arvoksi 4. Kohdassa (3) tulos on 0. Kohdassa (4) puolestaan NaN. Viimeisen eli kohdan (5) tulostus on true. Huomaa: console.log(NULL = undefined) tulokseksi tulee true, mutta console.log(null == 0) tulos on false.

Operaattorit && ja || käsittelevät eri tyyppisiä arvoja eri tavalla, hieman omituisesti. Esimerkiksi console.log(null || "Pekka") palauttaa arvon Pekka.
Sääntö: || -operaattori palauttaa vasemmanpuolimmaisen arvon, jos se pystyy tekemään tyyppimuunnoksen. Muussa tapauksessa oikeanpuolimmaisen arvon. Tässä tapauksessa tyyppimuunnosta ei voi tehdä, koska null-tyyppiin ei voi muuntaa merkkijonoa. Siksi palautetaan siis arvo Pekka.

&& toimii samantyylisesti kuin ||, mutta täsmälleen päinvastoin. Eli console.log(null && "Pekka") palauttaisi arvon null.

Math-olion avulla ratkaistaan "kehittyneitä" matemaattisia ongelmia. Sen sijaan normaalit laskutoimitukset, kuten yhteen- ja vähennyslasku voidaan suorittaa joko perusoperaattoreilla tai eval()-funktion avulla.

eval-funktio muuttaa parametrina saamansa merkkijonotyyppisen lausekkeen matemaattiseen, suoritettavaan muotoon. Seuraava esimerkki havainnollistaa eval-funktion toimintaa.

<script type="text/javascript">
// Sijoitetaan muuttujaan laskutoimitus merkkijonona:
var laskutoimitus = "2 + 4 - 7 / 16";

// Ilman eval()-funktiota tulostus on "2 + 4 - 7 / 16":
console.log(laskutoimitus);

/* eval-funktio muuntaa merkkijonotyyppisen
laskulausekkeen matemaattiseen muotoon ja suorittaa
laskutoimitukset. Selaimeen tulostuu "5.5625": */

console.log(eval(laskutoimitus));
</script>

JavaScript käsittelee matemaattisia operaatioita Math-olion kautta. Math-olio sisältää muutaman vakion yleisistä matematiikassa käytettävistä arvoista:

VAKIO	KUVAUS
Math.E	Neperin luku e eli noin 2,72
Math.LN10	luvun 10 luonnollinen logaritmi
Math.LN2	luvun 2 luonnollinen logaritmi
Math.PI	piin arvo, noin 3,14
Math.SQRT1_2	neliöjuuri luvusta 1/2
Math.SQRT2	neliöjuuri luvusta 2

Muita olion metodeja ovat:

METODI	KUVAUS
Math.abs(param)	palauttaa parametrina annetun luvun itseisarvon
Math.acos(param)	palauttaa parametrina annetun luvun arkuskosinin
Math.asin(param)	palauttaa parametrina annetun luvun arkussinin
Math.atan(param)	palauttaa parametrina annetun luvun arkustangentin
Math.cos(param)	palauttaa parametrina annetun luvun kosinin
Math.exp(param)	palauttaa e potenssiin parametrina annettu luku
Math.log(param)	palauttaa parametrina annetun luvun luonnollisen logaritmin
Math.pow(param1, param2)	
palauttaa luvun param1 korotettuna potenssiin param2 (vaihtoehtoisesti operaattori **,
esim. param1 ** param2)

Math.sin(param)	palauttaa parametrina annetun luvun sinin
Math.sqrt(param)	palauttaa parametrina annetun luvun neliöjuuren
Math.tan(param)	palauttaa parametrina annetun luvun tangentin