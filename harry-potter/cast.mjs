// First chapter in each volume where this card makes sense. Zero omits the card.
export const cast = [
  {
    id: 'harry', name: ['Harry Potter', 'Harry Potter'], first: [2, 1, 1, 2, 1, 3, 2],
    bio: ['Harry notices the things adults hurry past. He has plenty of questions of his own.', 'Harry si všímá věcí, kolem kterých dospělí spěchají. Sám má spoustu otázek.'],
    ask: ['When does Harry ask for help, and when does he try to work things out alone?', 'Kdy Harry žádá o pomoc a kdy se snaží všechno zvládnout sám?'],
    alt: ['Harry in his round spectacles.', 'Harry v kulatých brýlích.'],
  },
  {
    id: 'hermione', name: ['Hermione Granger', 'Hermiona Grangerová'], first: [6, 4, 4, 5, 4, 5, 4],
    bio: ['Hermione keeps careful track of details. If a puzzle has a missing piece, she knows her way around a shelf of books.', 'Hermiona si všímá podrobností. Když v hádance chybí kousek, ví, kam v knihovně sáhnout.'],
    ask: ['Find a time when Hermione changes her mind after learning something new.', 'Najděte chvíli, kdy se Hermiona dozví něco nového a změní názor.'],
    alt: ['Hermione with her bushy brown hair.', 'Hermiona s hustými hnědými vlasy.'],
  },
  {
    id: 'ron', name: ['Ron Weasley', 'Ron Weasley'], first: [6, 3, 4, 4, 4, 5, 4],
    bio: ['Ron grew up sharing space with a lot of brothers and a sister. He knows his way around a chessboard.', 'Ron vyrostl mezi spoustou bratrů a jednou sestrou. Na šachovnici se výborně vyzná.'],
    ask: ['Which things that surprise Harry seem perfectly ordinary to Ron?', 'Které věci Harryho překvapují, ale Ronovi připadají docela běžné?'],
    alt: ['Ron studies a game of wizard chess.', 'Ron přemýšlí nad kouzelnickými šachy.'],
  },
  {
    id: 'hagrid', name: ['Rubeus Hagrid', 'Rubeus Hagrid'], first: [4, 4, 5, 12, 20, 6, 4],
    bio: ['Hagrid can make room at his table even for a very unexpected visitor. He has a soft spot for unusual creatures.', 'Hagrid u svého stolu najde místo i pro opravdu nečekanou návštěvu. Má slabost pro neobvyklé tvory.'],
    ask: ['Which animal would Hagrid describe differently from everyone else?', 'Které zvíře by Hagrid popsal jinak než všichni ostatní?'],
    alt: ['Hagrid’s keys, heavy coat and lantern.', 'Hagridovy klíče, těžký kabát a lucerna.'],
  },
  {
    id: 'hedwig', name: ['Hedwig', 'Hedvika'], first: [5, 1, 1, 2, 1, 3, 2],
    bio: ['Harry’s snowy owl has a very expressive stare. A delivery can mean a great deal when home feels lonely.', 'Harryho sovice sněžní má mimořádně výmluvný pohled. Když je člověku doma smutno, zásilka může znamenat hodně.'],
    ask: ['How can an owl show a feeling without speaking?', 'Jak může sova projevit city, když nemluví?'],
    alt: ['A snowy owl on a perch by the window.', 'Sovice sněžní na bidýlku u okna.'],
  },
  {
    id: 'dumbledore', name: ['Albus Dumbledore', 'Albus Brumbál'], first: [1, 5, 5, 12, 8, 3, 2],
    bio: ['The headmaster has a way of making people listen, even when he speaks very quietly.', 'Ředitel umí přimět ostatní k naslouchání, i když hovoří velmi tiše.'],
    ask: ['Listen for a question the headmaster lets someone answer for themselves.', 'Zachyťte otázku, na kterou ředitel nechá někoho přijít samotného.'],
    alt: ['Dumbledore’s silver Deluminator and half-moon spectacles.', 'Brumbálovo stříbrné zhasínadlo a půlměsícové brýle.'],
  },
  {
    id: 'mcgonagall', name: ['Minerva McGonagall', 'Minerva McGonagallová'], first: [1, 5, 5, 12, 11, 8, 30],
    bio: ['This observant professor expects people to do their best. Very little escapes her notice.', 'Tahle pozorná profesorka očekává, že se každý bude snažit. Jen máloco jí unikne.'],
    ask: ['Which small gestures show what she cares about?', 'Ze kterých drobných gest poznáte, na čem jí záleží?'],
    alt: ['An emerald hat, tartan scarf and silver cat brooch.', 'Smaragdový klobouk, kostkovaná šála a stříbrná kočičí brož.'],
  },
  {
    id: 'snape', name: ['Severus Snape', 'Severus Snape'], first: [8, 5, 5, 12, 4, 2, 1],
    bio: ['Snape chooses his words carefully. His silences can make a room feel very small.', 'Snape pečlivě volí slova. Když se odmlčí, jako by se místnost najednou zmenšila.'],
    ask: ['What can you tell from his words, and what are the students guessing?', 'Co poznáte z jeho slov a co si žáci jen domýšlejí?'],
    alt: ['Potion bottles and brass scales on Snape’s workbench.', 'Lahvičky s lektvary a mosazné váhy na Snapeově stole.'],
  },
  {
    id: 'fluffy', name: ['Fluffy', 'Chloupek'], first: [9, 0, 0, 0, 0, 0, 0],
    bio: ['One enormous dog, three enormous heads. That is a lot of teeth for anyone who opens the wrong door.', 'Jeden obrovský pes, tři obrovské hlavy. Na člověka, který omylem otevřel dveře, je to spousta zubů.'],
    ask: ['Try telling the encounter from the point of view of one of the three heads.', 'Zkuste o setkání vyprávět z pohledu jedné ze tří hlav.'],
    alt: ['Three dog heads guarding a single trapdoor.', 'Tři psí hlavy střeží jedny padací dveře.'],
  },
  {
    id: 'dobby', name: ['Dobby', 'Dobby'], first: [0, 2, 0, 21, 18, 19, 23],
    bio: ['Dobby is a house-elf with strong ideas about helping. His courage can be bigger than the person he is trying to protect.', 'Dobby je domácí skřítek se svéráznou představou o pomoci. Jeho odvaha může být větší než člověk, kterého chce ochránit.'],
    ask: ['How does Dobby decide when to speak up?', 'Jak se Dobby rozhoduje, kdy promluvit?'],
    alt: ['Dobby raises a little lantern.', 'Dobby zvedá malou lucernu.'],
  },
  {
    id: 'crookshanks', name: ['Crookshanks', 'Křivonožka'], first: [0, 0, 4, 5, 4, 5, 0],
    bio: ['Hermione’s ginger cat has a squashed face and a very determined way of following a scent.', 'Hermionin zrzavý kocour má placatý čumák a po stopě jde velice odhodlaně.'],
    ask: ['What does the cat notice that the people overlook?', 'Čeho si kocour všimne, zatímco lidem to unikne?'],
    alt: ['A shaggy orange cat curled up on a cushion.', 'Huňatý zrzavý kocour na polštáři.'],
  },
  {
    id: 'buckbeak', name: ['Buckbeak', 'Klofan'], first: [0, 0, 6, 27, 6, 3, 0],
    bio: ['This hippogriff has feathers, hooves and a strong sense of how visitors should introduce themselves.', 'Tenhle hipogryf má peří, kopyta a vlastní představu o tom, jak se má návštěva představit.'],
    ask: ['What can you learn from the way Buckbeak holds his head?', 'Co se dá poznat podle toho, jak Klofan drží hlavu?'],
    alt: ['A grey hippogriff lowering its eagle head.', 'Šedý hipogryf sklání orlí hlavu.'],
  },
  {
    id: 'cedric', name: ['Cedric Diggory', 'Cedrik Diggory'], first: [0, 0, 9, 6, 0, 0, 0],
    bio: ['Cedric plays Seeker for Hufflepuff. He pays attention to the other players as well as the score.', 'Cedrik je chytač Mrzimoru. Všímá si skóre i ostatních hráčů.'],
    ask: ['When does Cedric have a chance to show what he thinks is fair?', 'Kdy může Cedrik ukázat, co považuje za fér?'],
    alt: ['Cedric in Hufflepuff yellow.', 'Cedrik ve žlutých barvách Mrzimoru.'],
  },
  {
    id: 'luna', name: ['Luna Lovegood', 'Lenka Láskorádová'], first: [0, 0, 0, 0, 10, 7, 8],
    bio: ['Luna is quite comfortable looking at things from an unusual angle, including the page she is reading.', 'Lenka se ráda dívá na věci z nezvyklého úhlu. Platí to i pro stránku, kterou zrovna čte.'],
    ask: ['When does Luna notice that someone could use a little company?', 'Kdy si Lenka všimne, že by někomu prospěla trocha společnosti?'],
    alt: ['Luna with a magazine in her lap.', 'Lenka s časopisem na klíně.'],
  },
  {
    id: 'kreacher', name: ['Kreacher', 'Krátura'], first: [0, 0, 0, 0, 6, 3, 10],
    bio: ['An old house-elf at Grimmauld Place remembers the people who once lived there.', 'Starý domácí skřítek z Grimmauldova náměstí si pamatuje někdejší obyvatele domu.'],
    ask: ['Which things in a house could matter most to someone who remembers its past?', 'Na kterých věcech v domě může nejvíc záležet tomu, kdo si pamatuje jeho minulost?'],
    alt: ['Kreacher, an elderly house-elf with large ears.', 'Krátura, starý domácí skřítek s velkýma ušima.'],
  },

  {
    id: 'sirius', name: ['Sirius Black', 'Sirius Black'], first: [0, 0, 18, 2, 4, 0, 0],
    bio: ['Harry knows Sirius in two shapes. In the shape of a big black dog, he can move about much less conspicuously.', 'Harry zná Siriuse ve dvou podobách. Jako velký černý pes se může pohybovat mnohem nenápadněji.'],
    ask: ['What do Harry and Sirius want to be able to offer one another?', 'Co by si Harry a Sirius přáli jeden druhému nabídnout?'],
    alt: ['Sirius in the shape of a large black dog.', 'Sirius v podobě velkého černého psa.'],
  },
  {
    id: 'fawkes', name: ['Fawkes', 'Fawkes'], first: [0, 12, 0, 36, 27, 29, 0],
    bio: ['Dumbledore’s phoenix has brilliant plumage and an extraordinary song.', 'Brumbálův fénix má zářivé peří a neobyčejný hlas.'],
    ask: ['If you could hear the song while reading, how would you describe its sound?', 'Kdybyste fénixův zpěv při čtení slyšeli, jak byste ho popsali?'],
    alt: ['A bright phoenix spreads its wings above the castle.', 'Zářivý fénix rozpíná křídla nad hradem.'],
  },
];
