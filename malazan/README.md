# Malazská Kniha padlých — čtenářský průvodce

Neoficiální dvojjazyčný průvodce světem série Stevena Eriksona *Malazská Kniha padlých*. Zachovává původní koncept projektu: každá kniha je samostatný HTML soubor, funguje offline a v přepínači lze přecházet mezi svazky.

## Svazky

| Soubor | Český název | Originální název |
| --- | --- | --- |
| `mesicni-zahrady.html` | *Měsíční zahrady* | *Gardens of the Moon* |
| `dum-mrtvych.html` | *Dům mrtvých* | *Deadhouse Gates* |
| `vzpominky-ledu.html` | *Vzpomínky ledu* | *Memories of Ice* |
| `dom-retezu.html` | *Dóm řetězů* | *House of Chains* |
| `pulnocni-vlny.html` | *Půlnoční vlny* | *Midnight Tides* |
| `lovci-kosti.html` | *Lovci kostí* | *The Bonehunters* |
| `vichr-smrti.html` | *Vichr smrti* | *Reaper’s Gale* |
| `dan-pro-ohare.html` | *Daň pro ohaře* | *Toll the Hounds* |
| `prach-snu.html` | *Prach snů* | *Dust of Dreams* |
| `chromy-buh.html` | *Chromý bůh* | *The Crippled God* |

Každý díl má šest částí rozdělených do dvou vnitřních knih (3 + 3), šest zastávek mapy, postavy, vztahy, světové poznámky, citlivostní upozornění a dvojjazyčné kvízy. Shrnutí a popisy jsou původní průvodcovský text, nikoli přepisy knih.

## Funkce aplikace

- **Mapa ságy** — stylizovaný čtenářský atlas s očíslovanými zastávkami, zvýrazněnou trasou svazku a přepínáním mezi celým světem a oblastí děje.
- **Průvodce / Čtenář** — průvodcovský režim ukazuje úplné poznámky; čtenářský režim odkrývá děj, postavy a místa postupně podle označených částí.
- **Postavy a vztahy** — společný soubor postav napříč deseti knihami, jejich příběhové oblouky a vztahové přehledy.
- **Svět** — přehled národů, časová osa a stručná encyklopedie.
- **Angličtina / čeština** včetně popisků mapy, světlý a tmavý motiv.
- **Samostatný HTML soubor pro každý díl** — sdílený engine, mapa a data se při sestavení vloží dovnitř souboru; není potřeba server ani externí knihovny.

Režim, jazyk a motiv se sdílejí mezi svazky; přečtené části se ukládají pro každý svazek zvlášť v místním úložišti prohlížeče. Vztahové přehledy se v čtenářském režimu odemykají podle postupu.

## Sestavení

Je potřeba Node.js 18 nebo novější; projekt nemá žádné externí závislosti.

Z kořene repozitáře sestaví `node build.mjs` oba průvodce. Pro sestavení pouze Malazu spusť:

```bash
node malazan/build.mjs
```

Sestavení obnoví všech deset svazků v adresáři `malazan/` a zapíše první svazek také jako `malazan/index.html`. Pro lokální otevření bez omezení prohlížeče lze spustit statický server z kořene repozitáře:

```bash
python -m http.server 8000
```

Pak otevři `http://localhost:8000/malazan/`.

Kontrolu hranic čtenářského postupu a trasy lze spustit z kořene příkazem `node --test malazan/tests/progress.test.mjs`.

## Struktura

- `engine.template.html` — společné rozhraní, styly, vykreslování, překlady a základní encyklopedická data.
- `books/cast.js` — společné postavy a struktura vnitřních knih.
- `books/routes.js` — barvy tras. Trasy při sestavení vznikají ze souřadnic zastávek v datech svazků.
- `books/<slug>.js` — šest částí, zastávky, vztahy, shrnutí, kvízy a dvojjazyčné texty konkrétního svazku.
- `build.mjs` — vloží data a obrázky do samostatných HTML výstupů.
- `assets/map.svg` — stylizovaná mapa Malazského světa s anglickými popisky a českými překlady v atributech `data-cs`.
- `assets/<slug>.svg` — regionální mapa svazku používaná, pokud jeho data obsahují položku `map`. Pole `map.asset` umožňuje sdílet stejný podklad mezi svazky. Tlačítko s glóbem otevře společný atlas.
- `assets/scenes/<slug>/<n>.jpg` — nepovinné ilustrace částí, kde `n` je pořadové číslo 1–6.

České názvy v atlasu vycházejí z map a textu vydání Talpress. Například Genabakis, Dřevnov a Korál jsou na mapě v *Měsíčních zahradách* (str. 6), Sedmiměstí a Drydžhnanský oceán v *Domě mrtvých* (str. 12–13 souboru PDF), Rožský a Šáhův oceán v *Lovcích kostí* (str. 6) a Skleněná poušť a Bílé věže mořské v *Chromém bohu* (str. 6). Rivanské moře je překlad pro tento atlas.

- *Měsíční zahrady* mají schéma středního Genabakis a výřez Darúdžhistánu podle map na stranách 6–8. Měsíční Kámen je u Darúdžhistánu podle děje závěrečné části. Dům Azath sdílí zastávku se Simtaliným palácem, na jehož pozemku vyroste. [Ukázka Talpress v překladu Dany Krejčové](https://static.artforum.sk/media/products-files/55/59/124681-DB68540.pdf#page=7)
- *Dům mrtvých* má schéma Sedmiměstí a trasu Psího řetězu z Hissaru do Arenu podle obou map Coltainova pochodu (strany 8–11 souboru PDF) a mapy Sedmiměstí (strany 12–13). Lebeň je umístěna přibližně podle děje a Tremorlor sdílí značku s oblastí Raraku. [Ukázka Talpress v překladu Dany Krejčové](https://static.artforum.sk/media/products-files/5f/18/124717-DB68547.pdf#page=8)
- *Vzpomínky ledu* mají schéma jižní části mapy pannionské války a výřez Capustanu. Knižní mapa ukazuje směr k Morn na jižním okraji. Poloha Měsíčního Kamene u Korálu je přibližná. České popisky a jména včetně Vrče, Stříbrné lišky a Bruchaliana vycházejí z úvodních map a soupisu osob v edici Talpress. [Ukázka Talpress v překladu Dany Krejčové](https://www.kosmas.cz/knihy/195394/ukazka/20246/vzpominky-ledu_Ukazka.epub) · [Anglické mapy, strany 11–12](https://cdn.penguin.co.uk/dam-assets/books/9781804995532/9781804995532-sample.pdf#page=12)
- *Dóm řetězů* vychází z map hlavní části Malazské říše, severozápadního Genabakis a oázy Pan’arak. Regionální mapa ukazuje směr k Drift Avalii od Quon Tali. První trůn je dostupný v seznamu zastávek, protože knižní mapy jeho polohu neurčují. Názvy postav a míst vycházejí z map, soupisu osob a prologu vydání Talpress. [Ukázka Talpress v překladu Dany Krejčové](https://www.kosmas.cz/knihy/207081/ukazka/33924/dom-retezu_Ukazka.pdf) · [Anglická ukázka](https://cdn.penguin.co.uk/dam-assets/books/9781804995549/9781804995549-sample.pdf#page=14)
- *Půlnoční vlny* mají schéma území Tiste Edur a severního pohraničí Lederu s výřezem středu Lederas. Zastávka na ledových polích ukazuje oblast výpravy, ostatní městské zastávky vycházejí z míst na knižním plánu. Soupis osob ve vydání Talpress uvádí například Stracha Sengara, Konývku, Seren Pedak a bratry Beddiktovy. [Ukázka Talpress v překladu Dany Krejčové](https://www.kosmas.cz/knihy/207084/ukazka/33926/pulnocni-vlny_Ukazka.pdf) · [Anglické mapy](https://cdn.penguin.co.uk/dam-assets/books/9781804995525/9781804995525-sample.pdf#page=13)
- *Lovci kostí* vycházejí z map Sedmiměstí a střední Malazské říše a z dvoustránkového plánu města Malaz. První trůn je pouze v seznamu zastávek, protože knižní mapy jeho polohu neuvádějí. České popisky a jména vycházejí z úvodních map a soupisu postav ve vydání Talpress. [Ukázka Talpress v překladu Dany Krejčové](https://www.kosmas.cz/knihy/207082/ukazka/33925/lovci-kosti_Ukazka.pdf#page=8) · [Anglické mapy](https://cdn.penguin.co.uk/dam-assets/books/9781804995228/9781804995228-sample.pdf#page=13) · [Průvodce dějem po kapitolách](https://reactormag.com/columns/malazan-reread-of-the-fallen/malazan-reread-the-bonehunters-by-steven-erikson/)
- *Vichr smrti* má schéma dvoustránkové mapy Lederské říše. Tři Děvíny mají společnou značku podle knihy a palác sdílí značku s Lederas. Refugium má samostatnou kartu v seznamu zastávek. Soupis postav v tomto svazku uvádí například Rudomaska, Zobáka, Stříže a podoby jmen Onrak a Taralak Výd. [Ukázka Talpress v překladu Dany Krejčové](https://static.artforum.sk/media/products-files/56/fd/124695-DB68657.pdf#page=8) · [Anglická mapa](https://cdn.penguin.co.uk/dam-assets/books/9781804995181/9781804995181-sample.pdf#page=13)
- *Daň pro ohaře* má dva výřezy podle knižních map Darúdžhistánu a Černého Korálu. K’rulův bar je u bývalého chrámu na Krulově pahorku, hostinec U Fénixe a Barúkův palác jsou v legendě pod čísly 4 a 11. Lamatathská pláň má značku jen ve světovém atlasu a Dragnipúr kartu v seznamu zastávek. [Ukázka Talpress v překladu Dany Krejčové](https://www.kosmas.cz/knihy/208519/ukazka/35203/dan-pro-ohare_Ukazka.pdf#page=8) · [Anglický plán Darúdžhistánu](https://www.malazanmaps.com/map/darujhistan/) · [Anglická mapa Černého Korálu](https://www.malazanmaps.com/map/black-coral-and-environs/)
- *Prach snů* sdílí knižní mapu Lederské říše s *Vichrem smrti*. Na mapě jsou Lederas a oblasti Bolkando a Ak’ryn. Skleněná poušť je ve světovém atlasu podle mapy v *Chromém bohu*. Gallanova cesta, Ampelas a oba střety s Nah’ruk jsou v seznamu zastávek. [Ukázka Talpress v překladu Dany Krejčové](https://www.kosmas.cz/knihy/208520/ukazka/38615/prach-snu_Ukazka.pdf#page=10) · [Anglická mapa](https://www.malazanmaps.com/map/the-empire-of-lether/) · [Průvodce dějem po kapitolách](https://reactormag.com/malazan-reread-of-the-fallen-dust-of-dreams-chapter-twenty-four-part-two-and-whole-book-wrap-up/)

Chybějící ilustrace sestavení nezastaví; aplikace místo nich zobrazí ikonový náhradní prvek a skript vypíše seznam chybějících scén. Zájemci mohou vytvořit ilustrace a přidat je do příslušných složek `assets/scenes/`.

## Přidání nebo úprava obsahu

1. Uprav příslušná data v `books/<slug>.js` (formát překladu je `L('English', 'Česky')`).
2. Spusť `node malazan/build.mjs` z kořene repozitáře a zkontroluj výsledný HTML soubor.
3. Nový díl přidej také do `VOLUMES` v `build.mjs` a do `VOLBOOKS` v `books/cast.js`. Barvu jeho trasy přidej do `books/routes.js`.
4. U každého vztahového bloku a souboru postav nastav `min` na první část (1–6), po jejímž přečtení celý přehled neprozrazuje další děj.

Jde o fanouškovský projekt, který není spojen se Stevenem Eriksonem ani jeho vydavateli.
