// These introductions and diary entries belong to The Hobbit alone. The trilogy
// meets some of the same people many years later and has its own unlock order.
var VOLBOOKS = { 0: [{ label: '', title: { en: 'There and Back Again', cs: 'Cesta tam a zase zpátky' }, count: 19 }] };

var CAST = (function () {
  function tr(en, cs) { return { en, cs }; }
  function beat(gi, en, cs) { return { vol: 0, gi, text: tr(en, cs) }; }
  const people = {
    hobit: tr('Hobbit', 'Hobit'), trpaslik: tr('Dwarf', 'Trpaslík'),
    elf: tr('Elf', 'Elf'), carodej: tr('Wizard', 'Čaroděj'),
    clovek: tr('Man', 'Člověk'), ring: tr('Lake-dweller', 'Obyvatel jezera'),
    flame: tr('Dragon', 'Drak')
  };
  const cast = [
    {
      id: 'bilbo', portrait: '__IMG_bilbo__', name: tr('Bilbo Baggins', 'Bilbo Pytlík'), race: 'hobit', say: 'BIL-bo',
      kid: tr('Bilbo knows where every cup in his kitchen goes. A song can make him forget the cups and wish for mountains.', 'Bilbo přesně ví, kam v kuchyni patří který hrnek. Stačí však píseň a zapomene na hrnky a zatouží po horách.'),
      dad: tr('Watch the host who worries about dishes grow into the friend willing to risk a welcome by speaking his mind.', 'Sledujte, jak z hostitele, který se bojí o nádobí, vyroste přítel ochotný riskovat, že ho ostatní za jeho názor vyženou.'),
      beats: [beat(1, 'Sets supper before a roomful of unexpected guests.', 'Vystrojí večeři plné místnosti nečekaných hostů.'), beat(5, 'Spares Gollum on the way out of the tunnels.', 'Cestou z chodeb ušetří Gluma.'), beat(8, 'Gives his blade a name and rescues his companions.', 'Pojmenuje svůj mečík a zachrání přátele.'), beat(16, 'Takes the Arkenstone to the camp in hope of peace.', 'V naději na mír odnese Arcikam do tábora.'), beat(19, 'Returns to his round door with stories of his own.', 'Vrátí se ke kulatým dveřím s vlastními příběhy.')]
    },
    {
      id: 'gandalf', portrait: '__IMG_gandalf__', name: tr('Gandalf', 'Gandalf'), race: 'carodej', say: 'GAN-dalf',
      kid: tr('This visitor with a staff thinks Bilbo would be good company on a difficult road.', 'Tenhle návštěvník s holí si myslí, že na těžkou cestu by se Bilbo náramně hodil.'),
      dad: tr('Listen for the moments when Gandalf gives the company a little push and when he leaves them to find their own way.', 'Všímejte si, kdy Gandalf družině pomůže a kdy ji nechá hledat vlastní cestu.'),
      beats: [beat(1, 'Brings the dwarves to a hobbit’s door.', 'Přivede trpaslíky ke dveřím jednoho hobita.'), beat(2, 'Keeps the trolls arguing until dawn.', 'Udržuje hádku zlobrů až do úsvitu.'), beat(7, 'Says goodbye at the forest path.', 'U lesní pěšiny se rozloučí.'), beat(16, 'Meets Bilbo again in the camp.', 'V táboře se opět setká s Bilbem.')]
    },
    {
      id: 'thorin', portrait: '__IMG_thorin__', name: tr('Thorin Oakenshield', 'Thorin Pavéza'), race: 'trpaslik', say: 'TO-rin',
      kid: tr('Thorin leads the dwarves. When he plays his harp, even Bilbo begins to miss a home he has never seen.', 'Thorin vede trpaslíky. Když hraje na harfu, stýská se po jeho domově i Bilbovi, který ho nikdy neviděl.'),
      dad: tr('The longing for a home is easy to share. Follow what happens when Thorin has to decide who else may share in its riches.', 'Stesk po domově se dá snadno pochopit. Sledujte, co se stane, když má Thorin rozhodnout, komu ještě patří díl jeho bohatství.'),
      beats: [beat(1, 'Unrolls his family history at Bag End.', 'Ve Dně pytle vypráví osudy svého rodu.'), beat(10, 'Claims his title before the Master of Lake-town.', 'Před starostou Jezerního města se přihlásí o svůj titul.'), beat(15, 'Holds the gate against Bard’s request.', 'Zůstane za branou a odmítne Bardovu žádost.'), beat(18, 'Makes peace with his friend Bilbo.', 'Usmíří se s přítelem Bilbem.')]
    },
    {
      id: 'balin', portrait: '__IMG_balin__', name: tr('Balin', 'Balin'), race: 'trpaslik', say: 'BA-lin',
      kid: tr('Look for a white beard and a scarlet hood among the dwarves at Bilbo’s door.', 'Mezi trpaslíky u Bilbových dveří hledej bílý plnovous a šarlatovou kápi.'),
      dad: tr('Balin’s watchfulness and his affection for Bilbo make him a good companion to follow quietly through the book.', 'Balin je pozorný a má Bilba rád. Zkuste v příběhu vedle hlavních událostí sledovat i jejich přátelství.'),
      beats: [beat(1, 'Is one of the first guests to arrive.', 'Přijde mezi prvními hosty.'), beat(6, 'Is impressed when Bilbo slips past his lookout.', 'Zapůsobí na něj, když Bilbo proklouzne kolem jeho hlídky.'), beat(19, 'Visits Bilbo years later and brings news.', 'Po letech navštíví Bilba a přinese novinky.')]
    },
    {
      id: 'smaug', portrait: '__IMG_smaug__', name: tr('Smaug', 'Šmak'), race: 'flame', say: 'ŠMAK',
      kid: tr('In Thorin’s tale, this dragon drove the dwarves from their halls and lay down on their treasure.', 'Podle Thorinova vyprávění tenhle drak vyhnal trpaslíky ze síní a uvelebil se na jejich pokladu.'),
      dad: tr('Smaug can wound with a suggestion as well as a flame. Listen for the doubts about the dwarves he puts into Bilbo’s head.', 'Šmak dovede ranit plamenem i pouhou poznámkou. Poslouchejte, jak Bilbovi podsouvá pochybnosti o trpaslících.'),
      beats: [beat(1, 'Thorin tells how Smaug took the Mountain.', 'Thorin vypráví, jak se Šmak zmocnil Hory.'), beat(12, 'Tries to puzzle out an invisible visitor’s identity.', 'Snaží se zjistit, kdo je neviditelný návštěvník.'), beat(14, 'Falls into the lake during his attack.', 'Při útoku se zřítí do jezera.')]
    },
    {
      id: 'elrond', portrait: '__IMG_elrond__', name: tr('Elrond', 'Elrond'), race: 'elf', say: 'EL-rond',
      kid: tr('Elrond welcomes tired travellers in Rivendell. Old writing is one of the things he understands best.', 'Elrond vítá v Roklince unavené poutníky. Výborně se vyzná ve starém písmu.'),
      dad: tr('Elrond makes the stop in a safe house matter to the whole quest simply by knowing how to read a map.', 'Díky Elrondovi získá zastávka v bezpečném domě význam pro celou výpravu. Stačí, že umí přečíst plán.'),
      beats: [beat(3, 'Reads moon-letters that the company had missed.', 'Přečte měsíční písmo, které družina přehlédla.'), beat(19, 'Welcomes the returning travellers.', 'Přivítá poutníky na zpáteční cestě.')]
    },
    {
      id: 'glum', portrait: '__IMG_glum__', name: tr('Gollum', 'Glum'), race: 'ring', say: 'GLUM',
      kid: tr('Beside a cold underground lake lives someone who still remembers riddles from long ago.', 'U studeného podzemního jezera bydlí tvor, který si ještě pamatuje dávné hádanky.'),
      dad: tr('The riddle game lets a listener hear Gollum’s loneliness as well as the danger he poses to Bilbo.', 'Při hádankách je slyšet, jak moc je Glum osamělý, i jak nebezpečný pro Bilba je.'),
      beats: [beat(5, 'Trades riddles for a promise of a way out.', 'Hraje o to, zda bude muset Bilbovi ukázat cestu ven.')]
    },
    {
      id: 'medded', portrait: '__IMG_medded__', name: tr('Beorn', 'Medděd'), race: 'clovek', say: 'MED-děd',
      kid: tr('Beorn shares his wooden house with animals. He takes the form of a man or a great bear.', 'Medděd sdílí svůj dřevěný dům se zvířaty. Má podobu člověka nebo velikého medvěda.'),
      dad: tr('This wary host checks the visitors’ account for himself before trusting them with his animals.', 'Tenhle opatrný hostitel se sám přesvědčí o pravdivosti vyprávění, než hostům svěří svá zvířata.'),
      beats: [beat(7, 'Supplies the company for the forest road.', 'Vybaví družinu na cestu k lesu.'), beat(18, 'Bilbo learns how Beorn came to the rescue in the battle.', 'Bilbo se dozví, jak Medděd přispěchal v bitvě na pomoc.')]
    },
    {
      id: 'elvenking', portrait: '__IMG_elvenking__', name: tr('The Elvenking', 'Král elfů'), race: 'elf', say: '',
      kid: tr('The woodland king wants to know why strangers keep appearing among his trees.', 'Lesní král chce vědět, proč se mezi jeho stromy pořád objevují cizinci.'),
      dad: tr('Compare the stern questioner beneath the forest with the king who sends supplies to people left homeless.', 'Porovnejte přísného vládce, který pod lesem vyslýchá hosty, s králem posílajícím pomoc lidem bez domova.'),
      beats: [beat(8, 'Questions Thorin and keeps him prisoner.', 'Vyslýchá Thorina a nechá si ho jako vězně.'), beat(14, 'Sends aid to the lake-folk.', 'Pošle pomoc lidem od jezera.'), beat(16, 'Hears Bilbo’s proposal alongside Bard.', 'Společně s Bardem vyslechne Bilbův návrh.')]
    },
    {
      id: 'bard', portrait: '__IMG_bard__', name: tr('Bard', 'Bard'), race: 'clovek', say: 'BARD',
      kid: tr('A bowman of Lake-town, Bard pays attention even to a small bird in the middle of a great noise.', 'Bard je lučištník z Jezerního města. I uprostřed velkého rámusu dovede naslouchat malému ptáčkovi.'),
      dad: tr('Bard has to speak both for his ancestors from Dale and for people who need roofs before winter.', 'Bard musí hájit dědictví svých předků z Dolu i zájmy lidí, kteří před zimou potřebují střechu nad hlavou.'),
      beats: [beat(14, 'Understands the thrush and brings Smaug down.', 'Porozumí drozdovi a skolí Šmaka.'), beat(15, 'Speaks for the homeless at the gate.', 'U brány promluví za lidi bez domova.'), beat(19, 'Balin brings word of Bard’s rebuilt Dale.', 'Balin přinese zprávu o Bardově obnoveném Dolu.')]
    }
  ];
  return cast.map(({ beats, ...c }) => ({
    ...c, en: c.name.en, intro: { vol: 0, gi: beats[0].gi }, rlab: people[c.race],
    ic: c.race, say: { cs: c.say }, arc: { beats }
  }));
})();
