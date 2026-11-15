// Dust of Dreams — volume 9.
var BOOK = {
  meta: {
    slug: 'prach-snu', vol: 9, key: 'malazan_v9',
    mapFrame: { x0: 0.12, x1: 0.41, y0: 0.62, y1: 0.87 }, timelineMin: 6
  },
  ui: {
    en: { brand_sub: 'A reader’s guide to Dust of Dreams', info_names: 'Czech names in this volume follow Dana Krejčová’s Talpress translation.' },
    cs: { brand_sub: 'Průvodce Prachem snů', info_names: 'Česká jména v tomto svazku vycházejí z překladu Dany Krejčové pro Talpress.' }
  },
  castNames: { tool: L('Onos T’oolan', 'Onos Toolan'), onrack: L('Onrack the Broken', 'Onrak'), veed: L('Taralack Veed', 'Výd'), hedge: L('Hedge', 'Mrtvej Křovák') },
  relations: {
    blocks: [
      { min: 1, title: L('The eastern march', 'Pochod na východ'), sub: L('Tehol commits Letherii support to the Bonehunters’ campaign.', 'Tehol poskytne Lovcům kostí lederskou podporu pro tažení.'),
        chain: [{id:'tehol'}, {arrow:L('sends', 'vyšle')}, {id:'brys'}, {arrow:L('marches with', 'táhne s')}, {id:'tavore'}] },
      { min: 3, title: L('The Barghast clans', 'Barghastské klany'), sub: L('Tool and Hetan face dissent among the White Face Barghast.', 'Onos a Hetan čelí odporu v klanech Bílé tváře.'),
        chain: [{id:'hetan'}, {arrow:L('is married to', 'je provdána za')}, {id:'tool'}, {arrow:L('is opposed by', 'vzdoruje mu')}, {id:'maral'}] },
      { min: 4, title: L('The Shake', 'Třasové'), sub: L('The queen and the Watch seek the First Shore.', 'Královna a Stráž hledají První pobřeží.'),
        chain: [{id:'twilight'}, {arrow:L('travels with', 'putuje s')}, {id:'yedan'}] },
      { min: 6, title: L('The Matron’s champions', 'Matronini šampioni'), sub: L('Kalyth brings two Malazan marines to the Che’Malle.', 'Kalyth přivede ke K’Chain Che’Malle dva malazské mariňáky.'),
        chain: [{id:'kalyth'}, {arrow:L('recruits', 'získá')}, {id:'gesler'}, {arrow:L('fights beside', 'bojuje po boku')}, {id:'stormy'}] }
    ],
    ensemble: { min: 1, title: L('Tavore’s army and its allies', 'Tavořino vojsko a jeho spojenci'), sub: L('Three forces set out from Lether.', 'Z Lederu vyrážejí tři vojska.'),
      ids: ['tavore','keneb','fiddler','brys','krughava','gall'], cap: L('Six figures in the eastern campaign', 'Šest postav tažení na východ') }
  },
  loreExtra: [
    { ic: 'sword', min: 1, title: L('The Perish Grey Helms', 'Zánické šedé přílby'), text: L('Warriors devoted to Togg and Fanderay. Krughava is their Mortal Sword and Tanakalian their Shield Anvil.', 'Válečníci zasvěcení Toggovi a Fanderay. Krughava je jejich smrtelný meč a Tanakalian nezdolný štít.') },
    { ic: 'kchain', min: 2, title: L('Ampelas Rooted', 'Ampelas'), text: L('Gunth’an Acyl’s K’Chain Che’Malle keep. Kalyth serves the Matron while Gu’Rull scouts beyond it.', 'Pevnost matrony Gunth’an Acyl a jejích K’Chain Che’Malle. Kalyth slouží matroně, zatímco Gu’Rull vyráží na průzkum.') },
    { ic: 'water', min: 4, title: L('Gallan’s Road', 'Gallanova cesta'), text: L('The Shake use this magical road to reach Kharkanas and continue to the First Shore, where Darkness meets Light.', 'Třasové se touto magickou cestou dostanou do Charkanas a pokračují k Prvnímu pobřeží, kde se Noc stýká se Světlem.') },
    { ic: 'chain', min: 5, title: L('The Snake', 'Had'), text: L('A column of children fleeing Kolanse. Rutt carries a baby and Badalle gives voice to what happens to them.', 'Zástup dětí prchajících z Kolanse. Rutt nese nemluvně a Badalle vypráví o tom, co se jim děje.') }
  ],
  timeline: [
    [L('Letheras', 'Lederas'), L('Departure', 'Odchod'), L('Tavore sets out and Brys accompanies the expedition with Letherii troops.', 'Tavore vyrazí a Brys ji doprovází s lederskými oddíly.')],
    [L('Bolkando', 'Bolkando'), L('A difficult passage', 'Obtížný průchod'), L('The Perish and Khundryl negotiate passage and face resistance.', 'Zánické přílby a Chundrylové vyjednávají o průchodu a čelí odporu.')],
    [L('The eastern wastes', 'Východní pustiny'), L('The Nah’ruk strike', 'Útok Nah’ruk'), L('The Nah’ruk hit the Bonehunters before fighting the Che’Malle separately.', 'Nah’ruk napadnou Lovce kostí a později se v samostatném střetu utkají s Che’Malle.')]
  ],
  ILLUS: {
    1:{ cap:L('The Bonehunters prepare to march east from Letheras.', 'Lovci kostí se chystají vyrazit z Lederas na východ.') },
    2:{ cap:L('The Matron sends Kalyth to find help beyond the keep.', 'Matrona vyšle Kalyth hledat pomoc za hranicemi pevnosti.') },
    3:{ cap:L('The Barghast clans dispute Tool’s leadership.', 'Barghastské klany zpochybňují Onosovo velení.') },
    4:{ cap:L('The Shake come to the First Shore.', 'Třasové dorazí k Prvnímu pobřeží.') },
    5:{ cap:L('The children walk into the Glass Desert.', 'Děti vstupují do Skleněné pouště.') },
    6:{ cap:L('The Nah’ruk meet two armies in the eastern wastes.', 'Nah’ruk se ve východních pustinách střetnou se dvěma vojsky.') }
  },
  SCENES: { 1:'__SCENE_1__', 2:'__SCENE_2__', 3:'__SCENE_3__', 4:'__SCENE_4__', 5:'__SCENE_5__', 6:'__SCENE_6__' },
  map: {
    asset: 'lederska-rise',
    title: L('The Empire of Lether and its Neighbours', 'Lederská říše a její sousedé'),
    worldStops: [], route: []
  },
  PLACES: [
    { id:'letheras9', name:L('Letheras', 'Lederas'), en:'Letheras', x:15, y:71, region:[34.13,34.13], ic:'town', gi:1,
      dad:L('The capital where King Tehol and Brys help arrange the eastern march.', 'Hlavní město, kde král Tehol a Brys pomáhají připravit výpravu na východ.'),
      kid:L('The capital where the soldiers get ready for their journey.', 'Hlavní město, kde se vojáci připravují na cestu.') },
    { id:'bolkando', name:L('Kingdom of Bolkando', 'Království Bolkando'), en:'Kingdom of Bolkando', x:null, y:null, region:[86.83,68.27], ic:'crown', gi:1,
      dad:L('A kingdom southeast of Awl’dan. The regional pin marks the kingdom through which the allied forces seek passage.', 'Království jihovýchodně od Oul’danu. Značka označuje území, kterým chtějí spojenci projít.'),
      kid:L('A kingdom the soldiers have to pass through on their way east.', 'Království, kterým vojáci potřebují projít cestou na východ.') },
    { id:'skykeep', name:L('Ampelas Rooted', 'Pevnost Ampelas'), en:'Ampelas Rooted', x:null, y:null, region:null, ic:'tower', gi:2,
      dad:L('The Che’Malle keep where Kalyth serves Gunth’an Acyl. The book map gives no location for the keep.', 'Pevnost K’Chain Che’Malle, kde Kalyth slouží Gunth’an Acyl. Knižní mapa její polohu neuvádí.'),
      kid:L('The fortress where the Matron asks Kalyth for help.', 'Pevnost, kde matrona požádá Kalyth o pomoc.') },
    { id:'akryn', name:L('Ak’ryn', 'Ak’ryn'), en:'Ak’ryn', x:null, y:null, region:[77.6,58.81], ic:'forest', gi:3,
      dad:L('The Akrynnai country shown on the printed chart. Its people come into conflict with the Barghast.', 'Území Akryňanů na knižní mapě. Jeho obyvatelé se dostanou do střetu s Barghasty.'),
      kid:L('A region east of Lether where fighting breaks out.', 'Území východně od Lederu, kde propuknou boje.') },
    { id:'gallans-road', name:L('Gallan’s Road', 'Gallanova cesta'), en:'Gallan’s Road', x:null, y:null, region:null, ic:'moon', gi:4,
      dad:L('A magical route that brings the Shake to Kharkanas. Their journey continues to the First Shore.', 'Magická cesta, která dovede Třasy do Charkanas. Odtud pokračují k Prvnímu pobřeží.'),
      kid:L('A hidden route the Shake take to an old city.', 'Skrytá cesta, po které Třasové putují ke starému městu.') },
    { id:'glass', name:L('The Glass Desert', 'Skleněná poušť'), en:'The Glass Desert', x:32.95, y:75.92, region:null, ic:'sun', gi:5,
      dad:L('The desert the Snake enters after fleeing Kolanse. The next volume’s map shows the region farther east than the map of Lether’s empire.', 'Poušť, do níž vstoupí Had na útěku z Kolanse. Její oblast ukazuje dál na východ až mapa v dalším svazku.'),
      kid:L('A desert the children cross in search of safety.', 'Poušť, kterou děti přecházejí, když hledají bezpečí.') },
    { id:'nahruk', name:L('The Nah’ruk battles', 'Bitvy s Nah’ruk'), en:'The Nah’ruk battles', x:null, y:null, region:null, ic:'sword', gi:6,
      dad:L('In the eastern wastes, the Nah’ruk fight the Bonehunters and the Che’Malle in separate battles. The printed map gives no coordinates for the clashes.', 'Ve východních pustinách se Nah’ruk utkají s Lovci kostí a Che’Malle ve dvou samostatných bitvách. Knižní mapa místa střetů neudává.'),
      kid:L('The Nah’ruk meet the two armies at different places in the wastes.', 'Nah’ruk se v pustinách střetnou s každým z vojsk na jiném místě.') }
  ],
  CH: [
    { book:1, n:1, title:L('The march east', 'Pochod na východ'), en:'The march east', fear:3,
      sum:L('From Letheras, Tavore prepares to lead the Bonehunters east. King Tehol sends Brys with a Letherii force. The Perish and Khundryl go ahead to negotiate passage through Bolkando. They meet resistance before the armies can move into the wastes.', 'Tavore se chystá vést Lovce kostí z Lederas na východ. Král Tehol vyšle Bryse s lederským vojskem. Zánické šedé přílby a Chundrylové jdou napřed vyjednat průchod přes Bolkando. Než se vojska dostanou do pustin, narazí na odpor.'),
      focus:{en:['The allies who march with the Bonehunters','What Tavore tells her officers'],cs:['Kdo táhne po boku Lovců kostí','Co Tavore říká svým důstojníkům']},
      q:{en:['Why does Brys want to accompany Tavore?'],cs:['Proč chce Brys Tavore doprovodit?']},
      words:{en:[['Bolkando','an eastern kingdom between Lether and the wastes']],cs:[['Bolkando','východní království mezi Lederem a pustinami']]},
      fearnote:L('Political threats and clashes over passage.', 'Politické výhrůžky a střety kvůli průchodu.'),
      teaser:L('Tavore gathers allies for the journey east.', 'Tavore shromažďuje spojence k pochodu na východ.'),
      quiz:{en:[['Who leads the Letherii troops accompanying Tavore?',['Brys','Tehol','Kalyth'],0],['Which kingdom lies on the way east?',['Bolkando','Perish','Malaz'],0]],cs:[['Kdo vede lederské oddíly, které doprovázejí Tavore?',['Brys','Tehol','Kalyth'],0],['Které království leží cestou na východ?',['Bolkando','Zánik','Malaz'],0]]} },
    { book:1, n:2, title:L('The Matron’s emissary', 'Matronina vyslankyně'), en:'The Matron’s emissary', fear:3,
      sum:L('Kalyth, an Elan woman taken in by the Che’Malle, serves as Gunth’an Acyl’s Destriant. The Matron sends her to find two humans to fight for the Che’Malle against the Nah’ruk. The Shi’gal assassin Gu’Rull aids her search.', 'Kalyth, Elanka, které se ujali K’Chain Che’Malle, slouží Gunth’an Acyl jako válečný jezdec. Matrona ji vyšle hledat dva lidi, kteří by za Che’Malle bojovali proti Nah’ruk. Při hledání jí pomáhá asasín Shi’gal Gu’Rull.'),
      focus:{en:['Kalyth’s place among the Che’Malle','Why the Matron looks for outsiders'],cs:['Kalythino místo mezi Che’Malle','Proč matrona hledá pomoc zvenčí']},
      q:{en:['What does Kalyth owe to the people who gave her shelter?'],cs:['Co Kalyth dluží těm, kdo jí poskytli útočiště?']},
      words:{en:[['Destriant','a mortal who serves as an emissary and priest']],cs:[['válečný jezdec','smrtelník, který slouží jako vyslanec a kněz']]},
      fearnote:L('Memories of loss and a threatened community.', 'Vzpomínky na ztrátu a ohrožený lid.'),
      teaser:L('The Matron needs help from outside her fortress.', 'Matrona potřebuje pomoc zvenčí.'),
      quiz:{en:[['Who sends Kalyth to seek help?',['Gunth’an Acyl','Tavore','Yan Tovis'],0],['Who helps Kalyth search?',['Gu’Rull','Brys','Rutt'],0]],cs:[['Kdo vyšle Kalyth hledat pomoc?',['Gunth’an Acyl','Tavore','Yan Tovis'],0],['Kdo Kalyth pomáhá při hledání?',['Gu’Rull','Brys','Rutt'],0]]} },
    { book:1, n:3, title:L('The White Face Barghast', 'Barghastové Bílé tváře'), en:'The White Face Barghast', fear:5,
      sum:L('Tool leads the White Face Barghast and resists calls for war with the Akrynnai. He gives his life trying to keep fighting from spreading. The clans turn against his family. Hetan is mutilated and dies. Torrent helps protect Tool and Hetan’s children.', 'Onos vede Barghasty Bílé tváře a odmítá výzvy k válce s Akryňany. Položí život ve snaze zabránit šíření bojů. Klany se obrátí proti jeho rodině. Hetan zmrzačí a ona zemře. Příval pomáhá chránit její a Onosovy děti.'),
      focus:{en:['Why Tool resists the war','The violence turned against his family'],cs:['Proč Onos odmítá válku','Násilí páchané na jeho rodině']},
      q:{en:['What happens when the clans demand a war their leader considers disastrous?'],cs:['Co se stane, když klany chtějí válku, kterou jejich vůdce pokládá za pohromu?']},
      words:{en:[['White Face','the Barghast grouping led by Tool']],cs:[['Bílá tvář','Barghastové pod Onosovým velením']]},
      fearnote:L('Severe physical and sexual violence against Hetan, and threats to children.', 'Těžké fyzické a sexuální násilí na Hetan a výhrůžky dětem.'),
      teaser:L('The Barghast warleader and his clans disagree over a war.', 'Válečný vůdce Barghastů a jeho klany se přou o válku.'),
      quiz:{en:[['Who leads the White Face Barghast?',['Tool','Hetan','Tavore'],0],['Who helps protect Tool’s children?',['Torrent','Brys','Tehol'],0]],cs:[['Kdo vede Barghasty Bílé tváře?',['Onos Toolan','Hetan','Tavore'],0],['Kdo pomáhá chránit Onosovy děti?',['Příval','Brys','Tehol'],0]]} },
    { book:2, n:1, title:L('Gallan’s Road', 'Gallanova cesta'), en:'Gallan’s Road', fear:4,
      sum:L('With the sea threatening their island, Yan Tovis opens Gallan’s Road and the Shake leave the Second Maiden Fort. Yedan Derryg helps lead them to Kharkanas. The queen and the Watch continue to the First Shore and see the boundary between Darkness and Light.', 'Moře ohrožuje ostrov, a tak Yan Tovis otevře Gallanovu cestu a Třasové opustí Druhý Děvín. Yedan Derryg je pomáhá dovést do Charkanas. Královna a Stráž pokračují k Prvnímu pobřeží a uvidí hranici mezi Nocí a Světlem.'),
      focus:{en:['What the Shake leave behind','Why the First Shore matters to the Watch'],cs:['Co Třasové opouštějí','Proč na Prvním pobřeží Stráži záleží']},
      q:{en:['What do Yan Tovis and Yedan learn by going past Kharkanas?'],cs:['Co se Yan Tovis a Yedan dozvědí, když půjdou dál za Charkanas?']},
      words:{en:[['the Watch','Yedan Derryg’s title among the Shake']],cs:[['Stráž','titul Yedana Derryga mezi Třasy']]},
      fearnote:L('A dangerous evacuation and a violent act on the road.', 'Nebezpečný odchod a násilí na cestě.'),
      teaser:L('The queen looks for a road out of the island.', 'Královna hledá cestu z ostrova.'),
      quiz:{en:[['Who leads the Shake?',['Yan Tovis','Tavore','Kalyth'],0],['Which old city do they reach?',['Kharkanas','Letheras','Black Coral'],0]],cs:[['Kdo vede Třasy?',['Yan Tovis','Tavore','Kalyth'],0],['Do kterého starého města dorazí?',['Charkanas','Lederas','Černý Korál'],0]]} },
    { book:2, n:2, title:L('The children in the desert', 'Děti v poušti'), en:'The children in the desert', fear:5,
      sum:L('Rutt, Badalle and Saddic are among the children fleeing Kolanse in a column called the Snake. Hunger, thirst and their pursuers take a toll as they enter the Glass Desert. Elsewhere, the travellers who seem to share Icarium’s journey are revealed as voices bound to him after the disaster in Letheras.', 'Rutt, Badalle a Saddik patří k dětem prchajícím z Kolanse v zástupu zvaném Had. Při vstupu do Skleněné pouště je sužují hlad, žízeň a pronásledovatelé. Jinde se ukáže, že poutníci zdánlivě provázející Icaria jsou hlasy, které k němu připoutala katastrofa v Lederas.'),
      focus:{en:['The names and poems that hold the Snake together','The voices in Icarium’s company'],cs:['Jména a básně, které drží Hada pohromadě','Hlasy v Icariově družině']},
      q:{en:['What does Badalle preserve by telling the children’s story?'],cs:['Co Badalle uchovává vyprávěním příběhu dětí?']},
      words:{en:[['the Snake','children fleeing Kolanse together']],cs:[['Had','děti společně prchající z Kolanse']]},
      fearnote:L('Starvation, pursuit and children in mortal danger.', 'Hladovění, pronásledování a děti ve smrtelném nebezpečí.'),
      teaser:L('A line of children goes on walking as the land dries out.', 'Zástup dětí pokračuje dál krajinou, která vysychá.'),
      quiz:{en:[['What is the Snake?',['A column of children','A Malazan ship','A Che’Malle fortress'],0],['Who carries the baby Held?',['Rutt','Saddic','Brys'],0]],cs:[['Co je Had?',['Zástup dětí','Malazská loď','Pevnost Che’Malle'],0],['Kdo nese nemluvně Držánu?',['Rutt','Saddik','Brys'],0]]} },
    { book:2, n:3, title:L('Two battles in the wastes', 'Dvě bitvy v pustinách'), en:'Two battles in the wastes', fear:5,
      sum:L('The Nah’ruk attack the Bonehunters, whose losses are severe. In a separate battle, Gesler and Stormy lead the Che’Malle after Kalyth recruits them. Icarium arrives in a sky keep, and an Azath seals the gate through which more Nah’ruk keeps were coming. The Che’Malle survive, while the fate of many Bonehunters is left unresolved.', 'Nah’ruk napadnou Lovce kostí a způsobí jim těžké ztráty. V jiné bitvě vedou Gesler a Bouřňák Che’Malle poté, co je získá Kalyth. Icarium dorazí v nebeské pevnosti a Azath uzavře bránu, kterou procházely další pevnosti Nah’ruk. Che’Malle přežijí, zatímco osud mnoha Lovců kostí zůstane otevřený.'),
      focus:{en:['The Bonehunters’ losses','The alliance that gives the Che’Malle a future'],cs:['Ztráty Lovců kostí','Spojenectví, které dá Che’Malle budoucnost']},
      q:{en:['Why do the Che’Malle keep helping the humans after their battle?'],cs:['Proč Che’Malle pomáhají lidem i po své bitvě?']},
      words:{en:[['sky keep','a flying fortress built by the K’Chain']],cs:[['nebeská pevnost','létající pevnost postavená K’Chain']]},
      fearnote:L('Two large battles with severe casualties and unresolved losses.', 'Dvě velké bitvy s těžkými ztrátami a nejistý osud přeživších.'),
      teaser:L('The Nah’ruk advance toward the armies in the wastes.', 'Nah’ruk se blíží k vojskům v pustinách.'),
      quiz:{en:[['Who leads the Che’Malle in their battle?',['Gesler and Stormy','Tavore and Brys','Rutt and Badalle'],0],['What seals the gate?',['An Azath','A Malazan ship','A wall of ice'],0]],cs:[['Kdo vede Che’Malle do bitvy?',['Gesler a Bouřňák','Tavore a Brys','Rutt a Badalle'],0],['Co uzavře bránu?',['Azath','Malazská loď','Ledová stěna'],0]]} }
  ],
  KIDSUM: {
    1:{en:['Tavore’s soldiers leave Letheras. Brys brings soldiers from Lether, and other allies lead the way through Bolkando.'],cs:['Tavořini vojáci vyrazí z Lederas. Brys přivede další vojáky z Lederu a jiní spojenci hledají cestu přes Bolkando.']},
    2:{en:['Kalyth serves the leader of the Che’Malle. She goes looking for two people who can help protect them.'],cs:['Kalyth slouží vládkyni Che’Malle. Vydá se hledat dva lidi, kteří jim pomohou se bránit.']},
    3:{en:['The clans turn against their leader and his family. Torrent helps keep the children safe.'],cs:['Klany se obrátí proti svému vůdci a jeho rodině. Příval pomáhá ochránit děti.']},
    4:{en:['The Shake escape their island by a hidden road. Their queen and her brother find an empty city and go on to an old shore.'],cs:['Třasové uniknou z ostrova tajnou cestou. Jejich královna a její bratr najdou prázdné město a pokračují k dávnému pobřeží.']},
    5:{en:['A group of children flees into the Glass Desert. The children keep walking together.'],cs:['Zástup dětí prchá do Skleněné pouště. Děti pokračují v cestě společně.']},
    6:{en:['The Nah’ruk fight the Bonehunters and then the Che’Malle. The Che’Malle get help from Icarium. We still have to find out which Bonehunters survived.'],cs:['Nah’ruk bojují s Lovci kostí a potom s Che’Malle. Che’Malle pomůže Icarium. Osud mnoha Lovců kostí se dozvíme později.']}
  },
  KIDINTRO: {
    1:{en:['Tavore has allies for her journey across Lether. Watch how she and Brys divide the work.'],cs:['Tavore má pro cestu přes Leder spojence. Všímej si, jak si s Brysem dělí práci.']},
    2:{en:['Far from Letheras, a woman called Kalyth serves the Matron in an old fortress.'],cs:['Daleko od Lederas slouží ve staré pevnosti žena jménem Kalyth jedné matroně.']},
    3:{en:['The Barghast clans disagree with their leader, and his children are in danger.'],cs:['Barghastské klany se neshodnou se svým vůdcem a jeho děti jsou v nebezpečí.']},
    4:{en:['The people of an island need a way to reach another home.'],cs:['Obyvatelé ostrova potřebují najít cestu do nového domova.']},
    5:{en:['Keep track of the children’s names as they walk into the desert.'],cs:['Všímej si, jak se jmenují děti, které vstupují do pouště.']},
    6:{en:['Two armies are about to fight the Nah’ruk. Follow which people are in each battle.'],cs:['Dvě vojska se chystají bojovat s Nah’ruk. Všímej si, kdo je ve které bitvě.']}
  }
};
