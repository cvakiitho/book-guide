// Bilbo's journey uses the same reader as the trilogy. Chapter numbering starts at one.
var BOOK = (function () {
  function tr(en, cs) { return { en, cs }; }
  function quiz(en, cs, correct) {
    return tr([[en[0], en.slice(1), correct]], [[cs[0], cs.slice(1), correct]]);
  }
  const chapters = [
    {
      title: tr('An Unexpected Party', 'Neočekávaný dýchánek'), fear: 1,
      sum: tr('One knock at Bag End turns into a supper for thirteen dwarves and a wizard. Thorin’s song lets Bilbo imagine the mountain home that Smaug took. For a moment he wants to see it, even as the others debate whether he could possibly be their burglar.', 'Po jednom zaklepání má Bilbo ve Dně pytle k večeři třináct trpaslíků a čaroděje. Při Thorinově písni si dokáže představit horský domov, o který trpaslíky připravil Šmak. Na chvíli ho zatouží spatřit, zatímco hosté přemítají, jestli se hobit vůbec hodí za lupiče.'),
      focus: tr('Slow down when the lamps go out. Listen for the moment washing-up noises give way to music.', 'Zpomalte, když zhasnou světla. Všimněte si, kdy cinkání nádobí vystřídá hudba.'),
      q: tr('What does Bilbo hear in the song that he could never find in his pantry?', 'Co Bilbo slyší v písni a ve spíži by to nikdy nenašel?'),
      word: tr(['pantry', 'a little room where food is kept'], ['spíž', 'komůrka, kde se uchovává jídlo']),
      hook: tr('There’s a knock at a round green door. How many places would you set at the table?', 'Na kulaté zelené dveře někdo klepe. Pro kolik hostů bys prostřel stůl?'),
      recap: tr('Bilbo kept fetching more plates! When the dwarves finally made music, he forgot about his dishes. He could almost see the faraway mountain that Thorin wanted to call home again.', 'Bilbo pořád běhal pro další talíře! Když konečně trpaslíci zahráli, na nádobí zapomněl. Skoro jako by tu dalekou horu viděl. Tam by chtěl Thorin zase bydlet.'),
      quiz: quiz(['Why does Thorin want to go to the mountain?', 'To visit Elrond', 'To reclaim his people’s home', 'To buy ponies'], ['Proč chce Thorin k hoře?', 'Navštívit Elronda', 'Získat zpátky domov svého lidu', 'Nakoupit poníky'], 1),
      cap: tr('Thorin plays his harp at Bilbo’s supper table.', 'Thorin hraje u Bilbova stolu na harfu.')
    },
    {
      title: tr('Roast Mutton', 'Skopová pečeně'), fear: 3,
      fearnote: tr('The trolls discuss eating their prisoners. Their bickering gives the scene a comic rhythm if you want to play it lightly.', 'Zlobři se baví o tom, že vězně snědí. Jejich hašteření můžete přečíst legračně a scénu tím odlehčit.'),
      sum: tr('Bilbo rushes out to join the company. On a wet night, he tries his hand at picking a troll’s pocket. The purse gives him away. Gandalf copies the trolls’ voices and keeps them quarrelling until daybreak turns all three to stone.', 'Bilbo vyběhne za družinou. Za deštivé noci zkusí jednomu ze zlobrů sáhnout do kapsy, jenže měšec ho prozradí. Gandalf napodobí hlasy zlobrů a udržuje hádku tak dlouho, až z nich denní světlo udělá kámen.'),
      focus: tr('Give the trolls three different voices, then let Gandalf borrow them. See if your listener catches the trick.', 'Dejte každému zlobrovi jiný hlas a pak je půjčte Gandalfovi. Pozná posluchač jeho lest?'),
      q: tr('What makes time a better friend to Gandalf than strength would be?', 'Proč Gandalfovi pomůže spíš čas než síla?'),
      word: tr(['mutton', 'meat from a sheep'], ['skopové', 'maso z ovce']),
      hook: tr('A little fire glows through the wet trees. Would you go close enough to look?', 'Mezi mokrými stromy prosvítá oheň. Došel bys až k němu?'),
      recap: tr('That purse could talk! Bilbo was caught, and the dwarves ended up in sacks. While the trolls argued about supper, the sun came up. Three stone trolls were all that stood beside the fire.', 'Ten měšec uměl mluvit! Zlobři chytili Bilba a trpaslíky nacpali do pytlů. Hádali se o večeři tak dlouho, až vyšlo slunce. U ohniště zůstali tři kamenní zlobři.'),
      quiz: quiz(['What ends the trolls’ argument?', 'Sunrise', 'Rain', 'A bell'], ['Co ukončí hádku zlobrů?', 'Východ slunce', 'Déšť', 'Zvonek'], 0),
      cap: tr('Daybreak catches the three trolls by their fire.', 'Za úsvitu zastihne zlobry u ohně denní světlo.')
    },
    {
      title: tr('A Short Rest', 'Krátký odpočinek'), fear: 0,
      sum: tr('In Rivendell the travellers wash, rest and listen to elves singing. Elrond identifies the old swords from the trolls’ hoard. Holding Thrór’s map to the light, he discovers moon-letters that tell the travellers when to look for a hidden keyhole.', 'V Roklince si poutníci odpočinou a poslouchají zpěv elfů. Elrond pozná původ starých mečů z pokladu zlobrů. Když nastaví Thrórův plán měsíčnímu světlu, přečte pokyn, kdy hledat skrytou klíčovou dírku.'),
      focus: tr('Trace an imaginary message on a page, then hold it up to the light as Elrond does.', 'Prstem napište na papír tajný vzkaz a podržte ho proti světlu jako Elrond.'),
      q: tr('How could a map still have a secret after someone has studied it for years?', 'Jak může plán skrývat tajemství, i když ho někdo zkoumá už celé roky?'),
      word: tr(['rune', 'a letter in an old writing system'], ['runa', 'znak starého písma']),
      hook: tr('Bilbo has time to put his feet up. What might a wise host make of the things the travellers brought?', 'Bilbo si může natáhnout nohy. Co asi moudrý hostitel vyčte z věcí, které s sebou poutníci nesou?'),
      recap: tr('Elrond knew the names of the swords. The map had another surprise. In just the right moonlight, letters shone through the paper and gave Thorin a clue.', 'Elrond znal jména mečů. A další překvapení skrýval plán. V tom správném měsíčním světle se na něm objevila písmena a dala Thorinovi vodítko.'),
      quiz: quiz(['What reveals the hidden letters?', 'Candle smoke', 'River water', 'Moonlight'], ['Co odhalí ukrytá písmena?', 'Kouř ze svíčky', 'Říční voda', 'Měsíční světlo'], 2),
      cap: tr('A crescent moon lights Elrond’s reading of the map.', 'Elrond čte plán ve světle měsíčního srpku.')
    },
    {
      title: tr('Over Hill and Under Hill', 'Přes hory a pod horami'), fear: 4,
      fearnote: tr('Expect a sudden capture, the death of the Great Goblin and a lonely ending for Bilbo.', 'Čeká vás náhlé zajetí, smrt Velkého skřeta a závěr, v němž Bilbo zůstává sám.'),
      sum: tr('A mountain storm drives the company into a cave. A crack opens while they sleep, and goblins drag them underground. Gandalf breaks them out of the Great Goblin’s hall. In the rush down the tunnels Bilbo falls, hits his head and is left behind.', 'Před horskou bouří se družina schová do jeskyně. Ve spánku se za nimi otevře puklina a skřeti je odvlečou pod zem. Gandalf je vysvobodí ze síně Velkého skřeta. Při útěku chodbami Bilbo spadne, uhodí se do hlavy a zůstane sám.'),
      focus: tr('The capture is loud and sudden. Pause at the quiet ending and agree whether to read on tonight.', 'Přepadení přichází naráz a s rámusem. U tichého závěru se domluvte, jestli dnes budete číst dál.'),
      q: tr('Why did the cave look like such a good place to sleep?', 'Proč vypadala jeskyně jako tak dobré místo k přespání?'),
      word: tr(['pass', 'a way between mountain peaks'], ['průsmyk', 'cesta mezi horskými vrcholy']),
      hook: tr('Listen to the thunder up on the pass. Where would you look for shelter?', 'Poslouchej, jak v průsmyku hřmí. Kde by ses schoval?'),
      recap: tr('A dry cave seemed perfect until a door opened in the rock. The goblins took everyone below. Gandalf helped the dwarves escape, but in the dark nobody saw Bilbo fall behind.', 'Suchá jeskyně vypadala skvěle, dokud se ve skále neotevřely dveře. Skřeti všechny odtáhli do hlubin. Gandalf pomohl trpaslíkům ven, ale ve tmě nikdo neviděl, že Bilbo zůstal vzadu.'),
      quiz: quiz(['Why do the travellers enter the cave?', 'They hear a harp', 'They need shelter from a storm', 'They want to mine silver'], ['Proč vejdou poutníci do jeskyně?', 'Slyší harfu', 'Chtějí se schovat před bouří', 'Chtějí těžit stříbro'], 1),
      cap: tr('Lightning follows the travellers over the high pass.', 'Nad poutníky v horském průsmyku šlehají blesky.')
    },
    {
      title: tr('Riddles in the Dark', 'Hádanky ve tmě'), fear: 4,
      fearnote: tr('Gollum threatens to eat Bilbo. If the suspense builds too high, pause together to guess a riddle.', 'Glum hrozí, že Bilba sní. Když bude napětí příliš velké, zastavte se a zkuste spolu vyluštit hádanku.'),
      sum: tr('Alone underground, Bilbo pockets a ring before he meets Gollum. Their riddle game becomes dangerous when Gollum discovers his precious ring is missing. Invisible now, Bilbo has the chance to hurt him. He jumps past him instead and finds his way out.', 'Bilbo najde ve tmě prsten a schová si ho. U jezera si s Glumem dávají hádanky. Když Glum zjistí, že se mu ztratil jeho milášek, jde do tuhého. Bilbo je díky prstenu neviditelný a může Glumovi ublížit. Nakonec ho přeskočí a dostane se ven.'),
      focus: tr('Leave a little silence after each riddle. At the narrow exit, give Bilbo’s moment of pity the same time.', 'Po každé hádance dopřejte dětem chvíli ticha. Stejnou chvíli věnujte tomu, co Bilbo cítí k Glumovi u východu.'),
      q: tr('What does Bilbo imagine about Gollum’s life just before he jumps?', 'Co si Bilbo představí o Glumově životě, než ho přeskočí?'),
      word: tr(['riddle', 'a puzzle you solve by listening for clues'], ['hádanka', 'slovní úkol, ve kterém hledáš odpověď podle nápověd']),
      hook: tr('What can you use to find your way when your eyes are no help at all?', 'Co ti pomůže najít cestu, když očima vůbec nic nevidíš?'),
      recap: tr('Bilbo and Gollum traded riddles beside a lake under the mountain. The ring in Bilbo’s pocket made him disappear when he wore it. Even when he was frightened, he let Gollum live.', 'U jezera pod horou si Bilbo s Glumem dávali hádanky. Prsten z kapsy dokázal Bilba zneviditelnit, když si ho nasadil. Bilbo se hrozně bál, a přesto nechal Gluma žít.'),
      quiz: quiz(['How does Bilbo get past Gollum at the end?', 'He jumps over him', 'He rows away in a boat', 'He wakes Gandalf'], ['Jak se Bilbo nakonec dostane kolem Gluma?', 'Přeskočí ho', 'Odpluje v loďce', 'Vzbudí Gandalfa'], 0),
      cap: tr('Two unlikely riddle partners meet beside a lightless lake.', 'U jezera v temnotě se setkají dva neobvyklí hádankáři.')
    },
    {
      title: tr('Out of the Frying-Pan into the Fire', 'Z deště pod okap'), fear: 4,
      fearnote: tr('Wolves below and flames in the branches leave the travellers feeling trapped. The chapter ends with them out of danger.', 'Poutníky svírají vlci pod stromy a plameny ve větvích. Na konci kapitoly už jsou v bezpečí.'),
      sum: tr('Bilbo finds his friends on the eastern side of the mountains. Wargs force them up into pine trees and goblins set the trees alight. The Lord of the Eagles sees the commotion. His eagles carry the company to safety high above the forest.', 'Na východní straně hor najde Bilbo své přátele. Před vrrky musejí všichni vylézt na stromy a skřeti pod nimi založí požár. Pán orlů spatří ten zmatek. Orli vynesou celou družinu do bezpečí vysoko nad lesem.'),
      focus: tr('Follow the change in height aloud, from feet on the path to branches to open sky.', 'Sledujte, jak se mění výška. Nejdřív mají nohy na pěšině, pak na větvi a nakonec pod nimi není nic.'),
      q: tr('Why is coming down from a tree just as worrying as staying up there?', 'Proč je stejně děsivé ze stromu slézt jako na něm zůstat?'),
      word: tr(['eyrie', 'an eagle’s nest high on a cliff'], ['hnízdiště', 'místo, kde si ptáci stavějí hnízda']),
      hook: tr('Bilbo can see daylight again. How will he find the others out in the wild?', 'Bilbo je zase na denním světle. Jak v té divočině najde ostatní?'),
      recap: tr('Bilbo slipped past the lookout and surprised his friends. Soon they were all stuck up trees with wolves below. Imagine looking down from a branch and then looking down again from an eagle’s claws!', 'Bilbo proklouzl kolem hlídky a překvapil přátele. Za chvíli už všichni seděli na stromech a dole číhali vlci. Zkus si představit pohled z větve a pak z orlích spárů!'),
      quiz: quiz(['Who carries the company out of danger?', 'Ravens', 'Bears', 'Eagles'], ['Kdo odnese družinu do bezpečí?', 'Havrani', 'Medvědi', 'Orli'], 2),
      cap: tr('The eagles lift the travellers above the burning trees.', 'Orli nesou poutníky nad hořícími stromy.')
    },
    {
      title: tr('Queer Lodgings', 'Podivný příbytek'), fear: 2,
      sum: tr('Gandalf introduces the dwarves a few at a time to Beorn, who can take the shape of a bear. Beorn checks their story, then lends supplies and ponies for the road to Mirkwood. At the forest edge Gandalf leaves them with a warning to keep to the path.', 'Gandalf přivádí trpaslíky po skupinkách k Meddědovi, který se umí proměnit v medvěda. Medděd si ověří jejich příběh a půjčí jim poníky i zásoby na cestu k Temnému hvozdu. U lesa se Gandalf rozloučí a připomene jim, aby nescházeli z pěšiny.'),
      focus: tr('Count the guests as Gandalf tells his story. Try interrupting at exactly the point when Beorn wants to hear more.', 'Počítejte hosty při Gandalfově vyprávění. Zkuste ho přerušit přesně ve chvíli, kdy chce Medděd slyšet víc.'),
      q: tr('What would it feel like to open the door to all those strangers at once?', 'Jak by ti bylo, kdyby za dveřmi stáli všichni ti cizinci najednou?'),
      word: tr(['skin-changer', 'someone who can take the form of an animal'], ['kožoměnec', 'někdo, kdo se dovede proměnit ve zvíře']),
      hook: tr('How would you ask a stranger to find beds for fourteen guests and a wizard?', 'Jak bys cizího člověka požádal o nocleh pro čtrnáct hostů a čaroděje?'),
      recap: tr('Beorn listened to Gandalf’s tale while more and more dwarves turned up. This great friend of animals fed the hungry visitors. They took his food and good advice with them to the dark edge of the wood.', 'Medděd poslouchal Gandalfa a trpaslíků pořád přibývalo. Tenhle veliký přítel zvířat dal hladovým návštěvníkům najíst. K temnému kraji lesa si odnesli jeho jídlo i dobrou radu.'),
      quiz: quiz(['Which animal can Beorn become?', 'A wolf', 'A bear', 'A pony'], ['Ve které zvíře se Medděd umí proměnit?', 'Ve vlka', 'V medvěda', 'V poníka'], 1),
      cap: tr('Beorn receives strangers at the edge of his garden.', 'U své zahrady vítá Medděd cizí návštěvníky.')
    },
    {
      title: tr('Flies and Spiders', 'Mouchy a pavouci'), fear: 4,
      fearnote: tr('The spiders talk about eating the bundled dwarves. For a child who fears spiders, linger on how Bilbo counts and frees his friends.', 'Pavouci mluví o tom, jak si na zamotaných trpaslících pochutnají. Pokud se dítě pavouků bojí, věnujte víc času tomu, jak Bilbo kamarády počítá a osvobozuje.'),
      sum: tr('In Mirkwood an enchanted stream sends Bombur to sleep. Hungry and exhausted, the dwarves leave the path to follow lights, then fall into giant spiders’ webs. Bilbo names his little blade Sting and uses his voice and his ring to draw the spiders away. Thorin, meanwhile, is a prisoner of the Elvenking.', 'V Temném hvozdu spadne Bombur do začarovaného potoka a usne. Vyčerpaní trpaslíci sejdou za světly z cesty a uvíznou v sítích obřích pavouků. Bilbo pojmenuje svůj mečík Žihadlo. S pomocí prstenu a vlastního hlasu odláká pavouky stranou. Thorin se mezitím dostal do zajetí krále elfů.'),
      focus: tr('The treetop scene gives everyone a breath of air before the webs. Ask what Bilbo can see from above and what the dip in the land hides.', 'Ve scéně v korunách stromů se před setkáním s pavouky nadechněte. Co Bilbo shora vidí a co mu zakrývá prohlubeň v krajině?'),
      q: tr('When does Bilbo start giving instructions that the dwarves actually follow?', 'Kdy začne Bilbo dávat pokyny, kterými se trpaslíci opravdu řídí?'),
      word: tr(['canopy', 'the roof of leaves formed by the treetops'], ['koruny stromů', 'horní části stromů, kde se rozkládají větve s listím']),
      hook: tr('Under so many branches, how would you tell how much forest was left to cross?', 'Jak bys pod tolika větvemi poznal, kolik lesa ještě zbývá přejít?'),
      recap: tr('Bilbo climbed up into a cloud of butterflies. Down below, his friends ran into real trouble. He made the spiders chase his voice so he could circle back to the webs and cut the dwarves free. But where was Thorin?', 'Bilbo vyšplhal až mezi motýly. Dole zatím jeho přátelé upadli do potíží. Vylákal pavouky za svým hlasem, oklikou se vrátil k sítím a vyřezal trpaslíky ven. Jenže kde byl Thorin?'),
      quiz: quiz(['What name does Bilbo give his blade?', 'Sting', 'Orcrist', 'Glamdring'], ['Jak Bilbo pojmenuje svůj mečík?', 'Žihadlo', 'Orkrist', 'Glamdring'], 0),
      cap: tr('Above the leaves of Mirkwood, Bilbo finds sunlight and butterflies.', 'Nad listím Temného hvozdu najde Bilbo slunce a motýly.')
    },
    {
      title: tr('Barrels Out of Bond', 'Osvobozené sudy'), fear: 2,
      sum: tr('The wood-elves lock the other dwarves up too. Bilbo follows unseen and learns the routines of the king’s cellars. He frees his friends with the guard’s keys and packs them into empty barrels bound for the lake. Only when the barrels drop does he realise he has left himself outside.', 'Lesní elfové uvězní i ostatní trpaslíky. Bilbo je neviděn následuje a poznává chod královských sklepů. Klíči strážného osvobodí přátele a schová je do prázdných sudů, které mají putovat k jezeru. Až když sudy padají dolů, uvědomí si, že sám zůstal venku.'),
      focus: tr('Tap out the sequence together on the table. Keys, cells, lids, trapdoor. Where is the gap in Bilbo’s plan?', 'Vyťukejte na stole jednotlivé kroky. Klíče, cely, víka, padací dveře. Kde má Bilbův plán skulinu?'),
      q: tr('How does Bilbo’s time spent quietly watching help him here?', 'Jak Bilbovi pomohlo, že tak dlouho všechno tiše pozoroval?'),
      word: tr(['cellar', 'a cool room below a building'], ['sklep', 'chladná místnost pod domem']),
      hook: tr('Bilbo has to think for a whole company now. What would you listen for in an unfamiliar hall?', 'Bilbo teď musí přemýšlet za celou družinu. Čemu bys naslouchal v cizí síni?'),
      recap: tr('Elves sent their empty barrels out through a trapdoor into the river. This time there was a secret passenger in each one! Bilbo had to hang on to the outside and got very wet.', 'Elfové posílali prázdné sudy padacími dveřmi do řeky. Tentokrát se v sudech krčili tajní cestující! Bilbovi nezbylo než se chytit sudu zvenku. Byl celý promáčený.'),
      quiz: quiz(['Where is Bilbo when the barrels float away?', 'In the first barrel', 'On a bridge', 'Hanging on outside'], ['Kde je Bilbo, když sudy odplouvají?', 'V prvním sudu', 'Na mostě', 'Drží se zvenčí'], 2),
      cap: tr('Bilbo clings to a barrel as the river carries his friends out of the forest.', 'Bilbo pluje po řece se sudy, v nichž se schovávají jeho přátelé.')
    },
    {
      title: tr('A Warm Welcome', 'Vřelé uvítání'), fear: 1,
      sum: tr('Thorin enters Lake-town and announces himself as the heir of the King under the Mountain. The townspeople sing of gold and a prosperous future. Their welcome buys food, ponies and boats. The Master finds it convenient to help the visitors on their way.', 'Thorin přijde do Jezerního města a ohlásí se jako dědic Krále pod Horou. Lidé zpívají o zlatě a o tom, jak se jim zase bude dobře dařit. Hosté dostanou jídlo, poníky i čluny. Starostovi se hodí vypravit je brzy na cestu.'),
      focus: tr('Let one voice be the cheering crowd and another the Master. The same welcome can mean different things.', 'Jedním hlasem přečtěte jásot davu a jiným slova starosty. Každý může vítat hosty z jiného důvodu.'),
      q: tr('If you lived in the town, what would you hope Thorin’s return might change?', 'Kdybys bydlel v tom městě, co by se podle tebe mohlo Thorinovým návratem změnit?'),
      word: tr(['heir', 'someone in line to inherit a title or possessions'], ['dědic', 'ten, komu má připadnout majetek nebo titul']),
      hook: tr('Imagine meeting strangers just as they crawl out of a river. What would they need first?', 'Představ si, že potkáš cizí poutníky zrovna při výlezu z řeky. Co by potřebovali nejdřív?'),
      recap: tr('Bilbo undid the barrels and helped a lot of stiff, sore dwarves out. Suddenly Thorin was being cheered like a king. The people on the lake gave the company a much comfier stay than the barrels had!', 'Bilbo otevřel sudy a pomohl rozlámaným trpaslíkům na nohy. Najednou Thorina vítali jako krále. V Jezerním městě se družině spalo daleko pohodlněji než v sudech!'),
      quiz: quiz(['What holds Lake-town above the water?', 'Stone islands', 'Wooden piles', 'Floating barrels'], ['Na čem stojí Jezerní město nad vodou?', 'Na kamenných ostrůvcích', 'Na dřevěných kůlech', 'Na plovoucích sudech'], 1),
      cap: tr('Wooden houses rise out of the lake, with the Mountain beyond.', 'Z jezera vyrůstají dřevěné domy a v dálce se tyčí Hora.')
    },
    {
      title: tr('On the Doorstep', 'Na prahu'), fear: 2,
      sum: tr('The company searches the western side of the Lonely Mountain. A smooth wall seems to defeat them. Hearing a thrush crack a snail, Bilbo remembers the moon-letters. The last light of Durin’s Day reveals the keyhole just in time for Thorin to use his key.', 'Družina prohledává západní úbočí Osamělé hory. Zdá se, že před hladkou stěnou jejich cesta končí. Když Bilbo uslyší drozda rozbíjet ulitu, vzpomene si na měsíční písmo. Poslední světlo Durinova dne ukáže dírku a Thorin stačí zasunout klíč.'),
      focus: tr('Recall the clue from Rivendell before the light fades. The smallest sound on the ledge is the one that counts.', 'Než světlo pohasne, vybavte si nápovědu z Roklinky. Rozhodne ten nejtišší zvuk na celé římse.'),
      q: tr('What does sitting quietly let Bilbo notice that the dwarves have missed?', 'Čeho si Bilbo v tichu všimne a co trpaslíci přehlédli?'),
      word: tr(['ledge', 'a narrow shelf of rock on a steep face'], ['římsa', 'úzký skalní výstupek na strmé stěně']),
      hook: tr('A key is very small beside a whole mountain. Where would you begin looking for its lock?', 'Vedle celé hory je klíč maličký. Kde bys začal hledat zámek?'),
      recap: tr('Hammers could do nothing to that wall. A bird, a snail shell and one last ray of sunshine gave Bilbo the answer. Thorin turned the key and part of the rock swung inwards.', 'Kladiva se stěnou nic nesvedla. Ptáček, ulita a poslední paprsek slunce pomohly Bilbovi rozluštit hádanku. Thorin otočil klíčem a kus skály se otevřel dovnitř.'),
      quiz: quiz(['What is the thrush tapping?', 'A snail shell', 'An iron key', 'A gold coin'], ['Do čeho drozd klepe?', 'Do šnečí ulity', 'Do železného klíče', 'Do zlaté mince'], 0),
      cap: tr('On Durin’s Day a thread of light finds the hidden keyhole.', 'O Durinově dni padne úzký paprsek na ukrytou klíčovou dírku.')
    },
    {
      title: tr('Inside Information', 'Vnitřní informace'), fear: 4,
      fearnote: tr('A burst of dragon fire follows Bilbo up the tunnel. He reaches his friends, shaken and singed.', 'Bilba pronásleduje chodbou dračí oheň. Doběhne k přátelům vyděšený a trochu ožehnutý.'),
      sum: tr('Bilbo ventures down the passage and steals a cup from Smaug’s bed of gold. On a second visit he speaks in riddles and flatters the dragon into showing his armoured belly. Bilbo spots a bare patch and tells the dwarves. He also realises that his talk of barrels has put Lake-town in danger.', 'Bilbo se odváží chodbou dolů a odnese pohár ze Šmakova zlatého lože. Při druhé návštěvě mluví v hádankách a polichotí drakovi tak, že mu ukáže opancéřované břicho. Bilbo si všimne holého místa a poví o něm trpaslíkům. Dojde mu také, že řečmi o sudech ohrozil Jezerní město.'),
      focus: tr('Give Smaug a soft, interested voice. Notice how carefully he listens to words that Bilbo thinks are harmless.', 'Zkuste Šmakovi dát tichý, zvědavý hlas. Všimněte si, jak pozorně poslouchá i slova, která Bilbovi připadají nevinná.'),
      q: tr('Which of Bilbo’s clues would mean something special to a dragon who knows the river?', 'Která Bilbova nápověda může něco prozradit drakovi, který zná zdejší řeku?'),
      word: tr(['hoard', 'a collection of treasured things kept in one place'], ['poklad', 'sbírka cenností uložená na jednom místě']),
      hook: tr('The door is open. What might listening at a tunnel entrance tell you before you take a step?', 'Dveře jsou otevřené. Co můžeš v ústí tunelu zjistit sluchem, ještě než uděláš první krok?'),
      recap: tr('Smaug knew his enormous pile of gold well enough to miss a single cup. Bilbo got him talking and saw a gap in his glittering armour. A thrush was nearby when Bilbo told his friends about it.', 'Šmak znal svou hromadu zlata tak dobře, že postrádal jediný pohár. Bilbo ho přiměl k hovoru a spatřil mezeru v třpytivém pancíři. Když o ní vyprávěl přátelům, poslouchal nedaleko drozd.'),
      quiz: quiz(['What does Bilbo bring back from his first visit to Smaug?', 'A shield', 'A pearl', 'A cup'], ['Co si Bilbo přinese z první návštěvy u Šmaka?', 'Štít', 'Perlu', 'Pohár'], 2),
      cap: tr('Smaug keeps watch over a mountain of gold.', 'Šmak hlídá celou horu zlata.')
    },
    {
      title: tr('Not at Home', 'Nikdo doma'), fear: 2,
      sum: tr('With their small exit blocked, the travellers venture into the silent treasury. Bilbo finds the Arkenstone and quietly pockets it, unsure whether it can count as his share. Thorin gives him a coat of mail. The company leaves through the Front Gate to take shelter on Ravenhill.', 'Malý východ je zavalený a poutníci se odváží do tiché pokladnice. Bilbo najde Arcikam a tajně si ho strčí do kapsy. Sám neví, jestli má na kámen v rámci svého podílu nárok. Thorin mu dá kroužkovou košili. Družina vyjde hlavní branou a zamíří do úkrytu na Havraním vrchu.'),
      focus: tr('Bilbo finds words to excuse taking the stone. Read that thought aloud and let everyone decide how convincing it sounds.', 'Bilbo hledá důvody, proč si smí kámen vzít. Přečtěte tu úvahu nahlas a posuďte, jestli vás přesvědčila.'),
      q: tr('If you were allowed to choose a reward, would there still be things you would ask about first?', 'Kdyby sis směl vybrat odměnu, byly by tam věci, na které by ses nejdřív zeptal?'),
      word: tr(['mail', 'armour made of small linked metal rings'], ['kroužková košile', 'brnění z drobných propojených kovových kroužků']),
      hook: tr('The tunnel has gone quiet. How can you tell whether a silent room is empty?', 'V chodbě je ticho. Jak můžeš zjistit, jestli je tichá místnost prázdná?'),
      recap: tr('This time no dragon answered. Bilbo’s torch lit up a jewel that seemed to hold its own light. He slipped it away without telling the dwarves. Soon they could all breathe outdoor air again.', 'Tentokrát se žádný drak neozval. Bilbova pochodeň ozářila drahokam, který jako by svítil sám. Bilbo si ho schoval a trpaslíkům nic neřekl. Zanedlouho už všichni zase dýchali čerstvý vzduch.'),
      quiz: quiz(['What does Bilbo keep secret?', 'A second map', 'Finding the Arkenstone', 'A letter from home'], ['Co si Bilbo nechá pro sebe?', 'Druhý plán', 'Nález Arcikamu', 'Dopis z domova'], 1),
      cap: tr('Bilbo finds the Arkenstone among the riches of the hall.', 'Mezi poklady v síni najde Bilbo Arcikam.')
    },
    {
      title: tr('Fire and Water', 'Oheň a voda'), fear: 5,
      fearnote: tr('Homes burn and people die in the attack. Leave time for the part about neighbours finding one another on the shore.', 'Při útoku hoří domy a umírají lidé. Nechte si čas i na to, jak se sousedé na břehu zase shledávají.'),
      sum: tr('The story moves to Lake-town as Smaug attacks. Bard understands the thrush that brings news of the gap in the dragon’s armour. His last arrow hits its mark. Smaug falls on the town, and the survivors face a cold night on shore. The Elvenking sends help.', 'Děj se přesune do Jezerního města, na které útočí Šmak. Bard rozumí drozdovi, který přináší zprávu o mezeře v dračím pancíři. Jeho poslední šíp zasáhne cíl. Šmak se zřítí na město a přeživší čeká studená noc na břehu. Král elfů pošle pomoc.'),
      focus: tr('Stay with the families on the shore for a moment after the dragon falls. What will they need before morning?', 'Až drak spadne, zůstaňte chvíli v myšlenkách s rodinami na břehu. Co budou do rána potřebovat?'),
      q: tr('Whose help travelled all the way from the mountain to reach Bard?', 'Čí pomoc doputovala od hory až k Bardovi?'),
      word: tr(['refuge', 'a place where someone can shelter from danger'], ['útočiště', 'bezpečné místo, kde se dá ukrýt']),
      hook: tr('Down on the lake, people see a light in the distance. What might it look like from their windows?', 'Lidé u jezera vidí v dálce světlo. Jak asi vypadá z jejich oken?'),
      recap: tr('When the dragon came, Bard could hear a little bird even in all that noise. Its message helped him bring Smaug down. The people who escaped needed blankets, food and somewhere to sleep.', 'Když přiletěl drak, Bard uprostřed všeho hluku zaslechl ptáčka. Jeho zpráva mu pomohla Šmaka porazit. Zachránění lidé potřebovali přikrývky, jídlo a místo, kde by se vyspali.'),
      quiz: quiz(['Who brings Bilbo’s discovery to Bard?', 'An eagle', 'A raven', 'A thrush'], ['Kdo přinese Bardovi zprávu o Bilbově objevu?', 'Orel', 'Havran', 'Drozd'], 2),
      cap: tr('After the long night, the thrush perches by the lake and families find shelter on the shore.', 'Po dlouhé noci sedí drozd u jezera a rodiny nacházejí útočiště na břehu.')
    },
    {
      title: tr('The Gathering of the Clouds', 'Stahují se mračna'), fear: 2,
      sum: tr('Roäc the raven tells the dwarves of Smaug’s death and the people coming to the Mountain. Thorin walls up the gate and summons Dáin from the Iron Hills. Bard asks for help for the lake-folk and a share of Dale’s wealth. Thorin refuses to bargain while an armed host stands at his door.', 'Havran Roak přinese zprávu o Šmakově smrti a o lidech na cestě k Hoře. Thorin nechá zazdít bránu a požádá o pomoc Dáina ze Železných hor. Bard žádá pomoc pro obyvatele Jezerního města i podíl z bohatství Dolu. Dokud před bránou stojí vojsko, Thorin nechce vyjednávat.'),
      focus: tr('Try telling the story of the gold from either side of the new wall. Each side remembers a different loss.', 'Zkuste vyprávět příběh zlata z obou stran nové zdi. Na každé straně si pamatují jinou ztrátu.'),
      q: tr('If you could ask Thorin and Bard one question each, what would you want to understand?', 'Kdybys mohl Thorinovi i Bardovi položit po jedné otázce, na co by ses zeptal?'),
      word: tr(['claim', 'a reason someone gives for having a right to something'], ['nárok', 'právo něco žádat']),
      hook: tr('News can travel faster than feet. Who might carry it to a high mountain ledge?', 'Zprávy se mohou šířit rychleji než pěší poutník. Kdo je asi donese na vysokou horskou římsu?'),
      recap: tr('An old raven had news for Thorin. The dragon was gone, but people who had lost their homes were coming. By the time Bard arrived to talk, a wall stood between him and the dwarves.', 'Starý havran přinesl Thorinovi zprávy. Drak byl pryč, ale blížili se lidé, kteří přišli o domov. Než si Bard přišel promluvit, oddělovala ho od trpaslíků zeď.'),
      quiz: quiz(['Whom does Thorin call from the Iron Hills?', 'Dáin', 'Elrond', 'Beorn'], ['Koho povolá Thorin ze Železných hor?', 'Dáina', 'Elronda', 'Medděda'], 0),
      cap: tr('Roäc brings news to the dwarves at the Mountain.', 'Roak přilétá se zprávami za trpaslíky k Hoře.')
    },
    {
      title: tr('A Thief in the Night', 'Noční zloděj'), fear: 3,
      sum: tr('Bilbo offers to take Bombur’s watch. He climbs out with the Arkenstone and offers it to Bard and the Elvenking as a bargaining piece. Gandalf is in the camp and approves. Given a chance to stay safe there, Bilbo goes back to face his friends.', 'Bilbo nabídne Bomburovi, že za něj bude hlídat. Vezme Arcikam a sleze ze zdi. Bardovi a králi elfů nabídne kámen jako prostředek k vyjednávání. V táboře potká Gandalfa, který jeho čin schvaluje. I když by v táboře byl v bezpečí, Bilbo se vrátí k přátelům.'),
      focus: tr('At the offer of a safe bed, pause before Bilbo answers. Going back is a second decision all of its own.', 'U nabídky bezpečného noclehu se zastavte dřív, než Bilbo odpoví. Vrátit se vyžaduje další rozhodnutí.'),
      q: tr('Can you stand by a friend and still think they are making a mistake?', 'Můžeš stát při kamarádovi, i když si myslíš, že dělá chybu?'),
      word: tr(['bargain', 'an agreement reached by talking about what each side will give'], ['dohoda', 'to, na čem se po jednání shodnou obě strany']),
      hook: tr('Bilbo has something hidden away. What would it take for him to trust somebody with his secret?', 'Bilbo si něco schovává. Co by ho asi přimělo svěřit někomu své tajemství?'),
      recap: tr('Bilbo carried the shining stone down to the camp. Thorin wanted it so much that perhaps he would talk about making peace to get it back. Then Bilbo climbed back up to the dwarves, who were still his friends.', 'Bilbo donesl třpytivý kámen do tábora. Thorin po něm toužil tak silně, že by snad začal jednat o míru, aby ho dostal zpět. Pak Bilbo vyšplhal zpátky k trpaslíkům. Pořád to byli jeho přátelé.'),
      quiz: quiz(['Why does Bilbo give the stone to Bard and the Elvenking?', 'To buy a house', 'To help them negotiate', 'To pay for a boat'], ['Proč dá Bilbo kámen Bardovi a králi elfů?', 'Aby si koupil dům', 'Aby jim pomohl vyjednávat', 'Aby zaplatil za člun'], 1),
      cap: tr('At night Bilbo puts the Arkenstone into other hands.', 'Bilbo v noci svěřuje Arcikam do cizích rukou.')
    },
    {
      title: tr('The Clouds Burst', 'Mračna se trhají'), fear: 5,
      fearnote: tr('Thorin threatens Bilbo and the battle ends for the hobbit in a sudden blackout. The next chapter opens with him waking up.', 'Thorin Bilbovi vyhrožuje a v bitvě hobit náhle ztratí vědomí. Další kapitola začíná jeho probuzením.'),
      sum: tr('Thorin learns what Bilbo did and sends him away. Dáin arrives, but before the rivals clash, goblins and wild wolves descend on the valley. Dwarves, elves and men must stand together. Bilbo sees eagles in the sky just before a falling stone knocks him unconscious.', 'Thorin zjistí, co Bilbo udělal, a vyžene ho. Dorazí Dáin, ale než se soupeři střetnou, do údolí se přiženou skřeti a divocí vlci. Trpaslíci, elfové a lidé se jim musejí postavit společně. Bilbo ještě spatří na nebi orly, než ho padající kámen připraví o vědomí.'),
      focus: tr('Keep the account close to Bilbo. When he can no longer see what happens, let the uncertainty stand until the next chapter.', 'Držte se Bilbova pohledu. Když už nevidí, co se kolem děje, nechte rozuzlení až na další kapitolu.'),
      q: tr('Who was facing whom in the morning, and who stands side by side by evening?', 'Kdo stál ráno proti sobě a kdo stojí k večeru bok po boku?'),
      word: tr(['allies', 'groups who agree to help each other'], ['spojenci', 'ti, kteří se domluví na vzájemné pomoci']),
      hook: tr('Bilbo is back at the gate. How will it feel to tell his friends what he has done?', 'Bilbo je zpátky u brány. Jaké asi bude říct přátelům, co udělal?'),
      recap: tr('Bilbo owned up about the stone. Then something bigger than their quarrel came down the valley. Elves, people and dwarves helped one another. Bilbo glimpsed wings overhead, and that was the last thing he remembered.', 'Bilbo se přiznal, co provedl s kamenem. Pak do údolí vtrhlo větší nebezpečí, než byla jejich hádka. Elfové, lidé a trpaslíci si pomáhali. Bilbo zahlédl nad hlavou křídla a dál už si nic nepamatoval.'),
      quiz: quiz(['What does Bilbo see just before he is knocked out?', 'A dragon', 'His own front door', 'The eagles arriving'], ['Co Bilbo uvidí těsně předtím, než ztratí vědomí?', 'Draka', 'Své dveře', 'Přilétající orly'], 2),
      cap: tr('From the mountain spur Bilbo spots familiar wings.', 'Z horského výběžku zahlédne Bilbo známá křídla.')
    },
    {
      title: tr('The Return Journey', 'Zpáteční cesta'), fear: 4,
      fearnote: tr('Fíli, Kíli and Thorin die. A listener may want to sit with Bilbo’s grief before starting home with him.', 'Fíli, Kíli a Thorin zemřou. Než se s Bilbem vydáte domů, možná s ním bude chtít dítě chvíli truchlit.'),
      sum: tr('Bilbo wakes after the battle. The eagles and Beorn helped turn it, but Fíli and Kíli died and Thorin is dying. Thorin asks Bilbo’s forgiveness. After the burial, with the treasure shared and Dáin now king, Bilbo chooses two small chests and starts home. He winters with Beorn.', 'Bilbo se probudí po bitvě. Orli a Medděd pomohli zvrátit její průběh, ale Fíli a Kíli padli a Thorin umírá. Prosí Bilba za odpuštění. Po pohřbu je poklad rozdělen a novým králem se stane Dáin. Bilbo si vybere dvě malé truhličky a vydá se domů. Zimu stráví u Medděda.'),
      focus: tr('Allow a quiet pause after Thorin’s farewell. The sadness may matter more tonight than who won the battle.', 'Po Thorinově rozloučení ponechte chvíli ticha. Dnes večer může být smutek důležitější než to, kdo bitvu vyhrál.'),
      q: tr('Which part of Bilbo’s goodbye do you think he will carry home with him?', 'Co si podle tebe Bilbo z rozloučení odnese až domů?'),
      word: tr(['farewell', 'a goodbye, especially when parting for a long time'], ['rozloučení', 'chvíle, kdy si lidé před odchodem dají sbohem']),
      hook: tr('Bilbo last saw eagles above the valley. Whose voice would he most like to hear when he opens his eyes?', 'Naposledy viděl Bilbo orly nad údolím. Čí hlas by chtěl uslyšet, až otevře oči?'),
      recap: tr('Bilbo reached Thorin in time to say goodbye as a friend. He cried when Thorin died. Later there was a road to walk again. Bilbo could have taken much more gold, but two little chests were enough for his pony.', 'Bilbo stihl přijít k Thorinovi a rozloučit se s ním jako přítel. Když Thorin zemřel, plakal. Pak zase přišel čas na cestu. Zlata si mohl vzít mnohem víc, ale jeho poníkovi stačily dvě malé truhličky.'),
      quiz: quiz(['Where does Bilbo spend the winter on the way home?', 'At Beorn’s home', 'In Lake-town', 'Inside the Mountain'], ['Kde stráví Bilbo zimu na zpáteční cestě?', 'U Medděda', 'V Jezerním městě', 'Uvnitř Hory'], 0),
      cap: tr('Bilbo and Thorin have a last quiet moment together.', 'Bilbo a Thorin spolu stráví poslední tichou chvíli.')
    },
    {
      title: tr('The Last Stage', 'Poslední etapa'), fear: 0,
      sum: tr('After another stay in Rivendell, Bilbo reaches Bag End in the middle of an auction of his belongings. His neighbours had presumed him dead. He gets his home back, writes and makes music, and years later welcomes Gandalf and Balin for news of the people he left behind.', 'Po další zastávce v Roklince dorazí Bilbo ke Dnu pytle právě ve chvíli, kdy se draží jeho věci. Sousedé ho už pokládali za mrtvého. Získá domov zpět, píše a hraje. Po letech ho navštíví Gandalf s Balinem a přinesou novinky o vzdálených přátelích.'),
      focus: tr('Set the last visit beside the knock on the door in chapter one. Listen for how it feels to welcome guests now.', 'Porovnejte poslední návštěvu se zaklepáním v první kapitole. Jaké to teď pro Bilba je přivítat hosty?'),
      q: tr('If Bilbo let you keep one memory from the whole journey, which would you choose?', 'Kdyby ti Bilbo dovolil nechat si jednu vzpomínku z celé cesty, kterou by sis vybral?'),
      word: tr(['auction', 'a sale where people offer prices and the highest offer wins'], ['dražba', 'prodej, při kterém věc získá ten, kdo nabídne nejvíc']),
      hook: tr('What do you think Bilbo will look for first when he comes over the hill?', 'Co bude podle tebe Bilbo vyhlížet nejdřív, až přejde přes kopec?'),
      recap: tr('Imagine coming home and finding someone carrying off your furniture! Bilbo had quite a job proving he was alive. Soon his kettle was back on, his stories were his own to tell and there was room for old friends at the door.', 'Představ si, že se vrátíš domů a někdo ti právě odnáší nábytek! Dalo práci všechny přesvědčit, že je Bilbo naživu. Brzy mu doma zase hřála konvice, měl o čem vyprávět a ve dveřích mohl přivítat staré přátele.'),
      quiz: quiz(['Who visits Bilbo years later?', 'Bard and Elrond', 'Gandalf and Balin', 'Beorn and Dáin'], ['Kdo po letech navštíví Bilba?', 'Bard a Elrond', 'Gandalf a Balin', 'Medděd a Dáin'], 1),
      cap: tr('Bilbo comes home in time for the sale of his own things.', 'Bilbo dorazí domů právě na dražbu vlastních věcí.')
    }
  ];

  // Stops are in story order. Miles are approximate cumulative travel distances.
  function stop(id, gi, x, y, mile, ic, name, kid, dad) {
    return { id, gi, x, y, mile, ic, name, en: name.en, kid, dad };
  }
  const places = [
    stop('bag-end', 1, 31.6, 28, 0, 'town', tr('Bag End', 'Dno pytle'),
      tr('Our road begins behind Bilbo’s round green door.', 'Naše cesta začíná za Bilbovými kulatými zelenými dveřmi.'),
      tr('Start with the comforts Bilbo can name and count, right down to the cups.', 'Začněte tím, co Bilbo doma zná a umí spočítat do posledního šálku.')),
    stop('trollshaws', 2, 46.7, 26.2, 380, 'forest', tr('Trollshaws', 'Obroviště'),
      tr('A fire in the wet woods turns out to belong to three trolls.', 'U ohně v mokrém lese sedí tři zlobři.'),
      tr('Far from his pantry, Bilbo has his first chance to try being a burglar.', 'Daleko od spíže má Bilbo poprvé příležitost zkusit si práci lupiče.')),
    stop('rivendell', 3, 48.8, 26.9, 455, 'town', tr('Rivendell', 'Roklinka'),
      tr('Warm beds, singing elves and a map to read by moonlight.', 'Teplé postele, zpívající elfové a plán ke čtení při měsíčku.'),
      tr('Look back here when the company tries to find the hidden door.', 'Vzpomeňte si na tuhle zastávku, až bude družina hledat skryté dveře.')),
    stop('high-pass', 4, 50.5, 25.7, 510, 'mountain', tr('High Pass', 'Vysoký průsmyk'),
      tr('The road climbs into cold wind and thunder.', 'Cesta stoupá do studeného větru a hřmění.'),
      tr('The chapter changes direction here, from an uphill climb to a plunge into darkness.', 'Tady se cesta obrátí. Výstup vzhůru se změní v sestup do tmy.')),
    stop('underground-lake', 5, 51.1, 25.3, 530, 'water', tr('The underground lake', 'Podzemní jezero'),
      tr('The water’s edge is where Bilbo meets his riddle partner.', 'U vodní hladiny potká Bilbo svého soupeře v hádankách.'),
      tr('The lake lies below the mountains mapped above it.', 'Jezero leží pod horami, které na mapě vidíte z ptačí perspektivy.')),
    stop('eyrie', 6, 52.7, 23.2, 560, 'mountain', tr('The eagles’ eyrie', 'Orlí hnízdo'),
      tr('For one night the company sleeps high above the trees.', 'Jednu noc družina spí vysoko nad stromy.'),
      tr('Trace the company’s change in height after the long chapter underground.', 'Sledujte, do jaké výšky se po dlouhé kapitole v podzemí družina dostala.')),
    stop('beorn', 7, 54.4, 22.2, 600, 'town', tr('Beorn’s hall', 'Meddědův dům'),
      tr('Past the beehives lives a host who is very kind to his animals.', 'Za úly bydlí hostitel, který má svá zvířata velmi rád.'),
      tr('A sheltered garden gives the travellers time to prepare for Mirkwood.', 'V bezpečí zahrady mají poutníci čas připravit se na Temný hvozd.')),
    stop('mirkwood', 8, 57.8, 18.8, 710, 'forest', tr('Mirkwood', 'Temný hvozd'),
      tr('You would have to climb a tree to see the sun from this path.', 'Z téhle pěšiny bys musel vyšplhat na strom, abys spatřil slunce.'),
      tr('The canopy makes it hard to judge distance. Remember Bilbo’s climb to see why.', 'Pod korunami se těžko odhaduje vzdálenost. Připomeňte si, co viděl Bilbo shora.')),
    stop('forest-river', 9, 61.1, 18.9, 795, 'water', tr('Forest River', 'Lesní řeka'),
      tr('The barrels bob along a winding road made of water.', 'Sudy se pohupují na klikaté vodní silnici.'),
      tr('The river is a trade route. The travellers make an unusual sort of cargo.', 'Řeka je obchodní cestou. Poutníci na ní tvoří velmi nezvyklý náklad.')),
    stop('esgaroth', 10, 62.5, 20.1, 845, 'town', tr('Lake-town', 'Jezerní město'),
      tr('Boats can pass beneath some of these wooden houses.', 'Pod některými z těch dřevěných domů mohou proplouvat čluny.'),
      tr('A town built for trade also lives on stories about the Mountain.', 'Město postavené pro obchod žije i příběhy o Hoře.')),
    stop('erebor', 11, 62.35, 17.1, 900, 'mountain', tr('The western doorstep', 'Západní práh Hory'),
      tr('A tiny keyhole opens the way into a huge mountain.', 'Maličká klíčová dírka otevře cestu do obrovské hory.'),
      tr('The company has approached from the west to find the door shown on the map.', 'Družina přišla od západu hledat dveře vyznačené na plánu.')),
    stop('treasury', 12, 62.49, 17.15, 902, 'mountain', tr('Smaug’s hall', 'Šmakova síň'),
      tr('Gold glints in the hall at the bottom of Bilbo’s tunnel.', 'Na konci Bilbovy chodby se v síni leskne zlato.'),
      tr('A lone walk down a short tunnel is one of Bilbo’s longest-feeling journeys.', 'Krátká cesta o samotě tunelem připadá Bilbovi nesmírně dlouhá.')),
    stop('ravenhill', 13, 62.38, 17.65, 909, 'mountain', tr('Ravenhill', 'Havraní vrch'),
      tr('From this old lookout the travellers can watch the land below.', 'Z téhle staré pozorovatelny vidí poutníci na krajinu pod sebou.'),
      tr('The company chooses the old lookout rather than spending the night in the open.', 'Družina si pro nocleh vybere starou pozorovatelnu.')),
    stop('front-gate', 15, 62.54, 17.45, 914, 'mountain', tr('The Front Gate', 'Hlavní brána'),
      tr('Thorin and Bard speak from opposite sides of a wall.', 'Thorin s Bardem spolu mluví přes zeď.'),
      tr('A doorway can be a place of welcome or a barrier. Who gets to decide here?', 'Dveřmi lze někoho přivítat a lze mu je i zavřít. Kdo o tom tady rozhoduje?')),
    stop('camp', 16, 62.57, 17.8, 917, 'town', tr('The camp below the Mountain', 'Tábor pod Horou'),
      tr('Bilbo slips down to the tents to try out an idea of his own.', 'Bilbo se vykrade dolů ke stanům, aby zkusil vlastní nápad.'),
      tr('Bilbo crosses the lines to speak with the people his friends have shut out.', 'Bilbo překročí hranici a promluví s lidmi, před kterými jeho přátelé zavřeli bránu.')),
    stop('spur', 17, 62.37, 17.64, 920, 'mountain', tr('The southern spur', 'Jižní výběžek'),
      tr('Bilbo looks out over the valley and watches the sky.', 'Bilbo se dívá do údolí a pozoruje nebe.'),
      tr('Stay at Bilbo’s lookout to keep the battle on a scale a child can picture.', 'Sledujte bitvu z Bilbovy vyhlídky, aby si ji dítě mohlo představit jeho očima.')),
    stop('westward', 18, 48.8, 26.9, 1400, 'town', tr('Back to Rivendell', 'Zpět do Roklinky'),
      tr('After wintering with Beorn, the travellers cross the mountains again.', 'Po zimě u Medděda se poutníci znovu vydají přes hory.'),
      tr('The return skirts the forest to the north. Compare the homeward road with the outward journey.', 'Zpáteční cesta obchází les ze severu. Porovnejte ji s cestou k Hoře.')),
    stop('home', 19, 31.6, 28, 1855, 'town', tr('Home at Bag End', 'Doma ve Dně pytle'),
      tr('The same green door looks quite different after an adventure.', 'Po takovém dobrodružství se na stejné zelené dveře díváš jinýma očima.'),
      tr('Return to the first stop and compare the things Bilbo values at either end of the road.', 'Vraťte se k první zastávce a porovnejte, na čem Bilbovi na obou koncích cesty záleží.'))
  ];
  const outward = places.filter(p => p.gi <= 17).map(p => [p.x, p.y, p.gi]);
  const returnRoad = [outward[outward.length - 1], [61.8, 15.7, 18], [58.5, 14.6, 18],
    [55.6, 14.6, 18], [54, 17.1, 18], [54.4, 22.2, 18], [50.5, 25.7, 18],
    [48.8, 26.9, 18], [46.7, 26.2, 19], [37.2, 28.9, 19], [31.6, 28, 19]];

  const intro = tr('Bilbo likes a well-stocked larder and a quiet afternoon. Settle in beside him as our story opens.',
    'Bilbo má rád plnou spíž a klidné odpoledne. Pohodlně se usaď vedle něj, příběh právě začíná.');
  const CH = [], KIDSUM = {}, KIDINTRO = {}, ILLUS = {};
  chapters.forEach((c, i) => {
    const n = i + 1;
    const previous = i ? chapters[i - 1].recap : intro;
    CH.push({
      book: 1, n, title: c.title, en: c.title.en, fear: c.fear, fearnote: c.fearnote, sum: c.sum,
      focus: tr([c.focus.en], [c.focus.cs]), q: tr([c.q.en], [c.q.cs]),
      words: tr([c.word.en], [c.word.cs]), quiz: c.quiz
    });
    KIDSUM[n] = tr([c.recap.en], [c.recap.cs]);
    KIDINTRO[n] = tr([previous.en, c.hook.en], [previous.cs, c.hook.cs]);
    ILLUS[n] = { cap: c.cap };
  });
  return {
    meta: { slug: 'hobit', vol: 0, key: 'stredozem_hobit_v1',
      mapFrame: { x0: 0.28, x1: 0.67, y0: 0.105, y1: 0.35 }, timelineMin: 1 },
    ui: {
      en: { brand_title: 'The Hobbit', brand_sub: 'There and Back Again · A read-aloud guide',
        miles_unit: 'miles (approx.)', world_history: 'Before the unexpected party',
        info_names: '<b>Names.</b> The map uses English place names. Look for Erebor at the Lonely Mountain and Esgaroth on the Long Lake.' },
      cs: { brand_title: 'Hobit', brand_sub: 'Cesta tam a zase zpátky · Průvodce pro předčítání',
        miles_unit: 'mil (přibližně)', world_history: 'Před neočekávaným dýchánkem',
        info_names: '<b>Jména.</b> Česká jména vycházejí z překladu Františka Vrby. Na anglické mapě hledej Osamělou horu jako Erebor a Jezerní město jako Esgaroth.' }
    },
    CH, KIDSUM, KIDINTRO, ILLUS, PLACES: places,
    SCENES: {
      1:'__SCENE_1__', 2:'__SCENE_2__', 3:'__SCENE_3__', 4:'__SCENE_4__', 5:'__SCENE_5__',
      6:'__SCENE_6__', 7:'__SCENE_7__', 8:'__SCENE_8__', 9:'__SCENE_9__', 10:'__SCENE_10__',
      11:'__SCENE_11__', 12:'__SCENE_12__', 13:'__SCENE_13__', 14:'__SCENE_14__', 15:'__SCENE_15__',
      16:'__SCENE_16__', 17:'__SCENE_17__', 18:'__SCENE_18__', 19:'__SCENE_19__'
    },
    routes: [{ vol: 0, color: '#2e7954', pts: outward }, { vol: 0, color: '#914a32', pts: returnRoad }],
    races: [
      ['hobit', tr('Hobbits', 'Hobiti'), tr('Small folk with tough, hairy feet. Bilbo likes his tea on time.', 'Malí lidičkové s odolnými chlupatými chodidly. Bilbo má rád čaj přesně na čas.'), 0],
      ['trpaslik', tr('Dwarves', 'Trpaslíci'), tr('Skilled smiths and stoneworkers. Thorin’s company keeps the memory of home alive in song.', 'Zruční kováři a kameníci. Thorinova družina si v písních připomíná domov.'), 1],
      ['carodej', tr('Wizards', 'Čarodějové'), tr('Gandalf carries a staff and knows the roads. Even hobbits who stay home have heard of his fireworks.', 'Gandalf nosí hůl a vyzná se na cestách. Jeho ohňostroje znají i hobiti, kteří nikdy nevytáhli paty z domu.'), 1],
      ['elf', tr('Elves', 'Elfové'), tr('The elves of Rivendell greet guests with songs and laughter in a hidden valley.', 'Elfové v Roklince vítají hosty zpěvem a smíchem ve skrytém údolí.'), 3],
      ['orc', tr('Goblins', 'Skřeti'), tr('Beneath the Misty Mountains they have cut a maze of tunnels through solid rock.', 'Pod Mlžnými horami vytesali do tvrdé skály bludiště chodeb.'), 4],
      ['clovek', tr('The lake-folk', 'Jezerní lidé'), tr('Families on the Long Lake travel by boat and build their houses on timber piles.', 'Rodiny na Dlouhém jezeře cestují na člunech a stavějí si domy na dřevěných kůlech.'), 10]
    ],
    lore: [
      { min: 0, ic: 'hobit', title: tr('A hobbit-hole', 'Hobití nora'), text: tr('Picture a front hall under a hill, with hooks for coats and a pantry close at hand. A hobbit-hole can be a very comfortable home.', 'Představ si předsíň pod kopcem, s věšáky na kabáty a spíží hned vedle. Hobití nora může být náramně pohodlný domov.') },
      { min: 3, ic: 'moon', title: tr('Moon-letters', 'Měsíční písmo'), text: tr('These runes on the map can be read when the moon matches the shape and season in which they were written.', 'Tyhle runy na plánu lze číst, když má měsíc stejný tvar a je stejné roční období jako při jejich psaní.') },
      { min: 5, ic: 'ring', title: tr('Bilbo’s ring', 'Bilbův prsten'), text: tr('A small ring from a dark tunnel slips over a finger and makes its wearer disappear from sight.', 'Drobný prsten z temné chodby stačí navléknout na prst a jeho nositel zmizí z očí.') },
      { min: 11, ic: 'sun', title: tr('Durin’s Day', 'Durinův den'), text: tr('The dwarves name a special new year’s day when the last moon of autumn and the sun can be seen together in the sky.', 'Trpaslíci tak říkají zvláštnímu novoročnímu dni, kdy lze na nebi spatřit poslední podzimní měsíc i slunce zároveň.') },
      { min: 13, ic: 'star', title: tr('The Arkenstone', 'Arcikam'), text: tr('The Heart of the Mountain is a jewel that seems to catch every colour. It matters to Thorin as part of his family’s history.', 'Srdce Hory je drahokam, který jako by v sobě zachycoval všechny barvy. Pro Thorina je částí historie jeho rodiny.') }
    ],
    timeline: [
      [tr('Long ago', 'Kdysi'), tr('A home under the Mountain', 'Domov pod Horou'), tr('The dwarves of Erebor made beautiful things and traded with Dale.', 'Trpaslíci z Ereboru vyráběli krásné věci a obchodovali s Dolem.')],
      [tr('Then', 'Potom'), tr('Smaug arrives', 'Přilétá Šmak'), tr('The dragon took the halls. The surviving dwarves had to make their living far from home.', 'Drak zabral síně. Přeživší trpaslíci si museli vydělávat na živobytí daleko od domova.')],
      [tr('Now', 'Teď'), tr('A supper at Bag End', 'Večeře ve Dně pytle'), tr('Thorin spreads out the map and invites a hobbit into the story.', 'Thorin rozvine plán a přizve do příběhu jednoho hobita.')]
    ],
    relations: { blocks: [
      { min: 1, title: tr('The invitation', 'Pozvání'), sub: tr('Gandalf thinks he has found the right companion for Thorin.', 'Gandalf si myslí, že pro Thorina našel toho správného společníka.'),
        chain: [{id:'gandalf'}, {arrow:tr('recommends', 'doporučuje')}, {id:'bilbo'}, {arrow:tr('to', 'pro družinu')}, {id:'thorin'}] },
      { min: 5, title: tr('Beside the lake', 'U jezera'), sub: tr('Two strangers test one another with riddles.', 'Dva cizinci si dávají hádanky.'),
        chain: [{id:'bilbo'}, {arrow:tr('trades riddles with', 'dává hádanky')}, {id:'glum'}] },
      { min: 16, title: tr('A meeting in the camp', 'Schůzka v táboře'), sub: tr('Bilbo asks the other side to try his plan for peace.', 'Bilbo požádá druhou stranu, aby zkusila jeho plán na usmíření.'),
        chain: [{id:'bard'}, {arrow:tr('listens to', 'naslouchá')}, {id:'bilbo'}, {arrow:tr('also speaks to', 'osloví také')}, {id:'elvenking'}] }
    ] }
  };
})();
