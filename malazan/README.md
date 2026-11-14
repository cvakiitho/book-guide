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
- `assets/<slug>.svg` — regionální mapa svazku používaná, pokud jeho data obsahují položku `map`. Tlačítko s glóbem otevře společný atlas.
- `assets/scenes/<slug>/<n>.jpg` — nepovinné ilustrace částí, kde `n` je pořadové číslo 1–6.

České názvy v atlasu vycházejí z map a textu vydání Talpress. Například Genabakis, Dřevnov a Korál jsou na mapě v *Měsíčních zahradách* (str. 6), Sedmiměstí a Drydžhanský oceán v *Domě mrtvých* (str. 9), Rožský a Šáhův oceán v *Lovcích kostí* (str. 6) a Skleněná poušť a Bílé věže mořské v *Chromém bohu* (str. 6). Rivanské moře je překlad pro tento atlas.

- *Měsíční zahrady* mají schéma středního Genabakis a výřez Darúdžhistánu podle map na stranách 6–8. Měsíční Kámen je u Darúdžhistánu podle děje závěrečné části. Dům Azath sdílí zastávku se Simtaliným palácem, na jehož pozemku vyroste. [Ukázka Talpress v překladu Dany Krejčové](https://static.artforum.sk/media/products-files/55/59/124681-DB68540.pdf#page=7)

Chybějící ilustrace sestavení nezastaví; aplikace místo nich zobrazí ikonový náhradní prvek a skript vypíše seznam chybějících scén. Zájemci mohou vytvořit ilustrace a přidat je do příslušných složek `assets/scenes/`.

## Přidání nebo úprava obsahu

1. Uprav příslušná data v `books/<slug>.js` (formát překladu je `L('English', 'Česky')`).
2. Spusť `node malazan/build.mjs` z kořene repozitáře a zkontroluj výsledný HTML soubor.
3. Nový díl přidej také do `VOLUMES` v `build.mjs` a do `VOLBOOKS` v `books/cast.js`. Barvu jeho trasy přidej do `books/routes.js`.
4. U každého vztahového bloku a souboru postav nastav `min` na první část (1–6), po jejímž přečtení celý přehled neprozrazuje další děj.

Jde o fanouškovský projekt, který není spojen se Stevenem Eriksonem ani jeho vydavateli.
