// The Crippled God — volume 10.
var BOOK = {
  meta: {
    slug: 'chromy-buh', vol: 10, key: 'malazan_v10',
    mapFrame: { x0: 0.27, x1: 0.43, y0: 0.64, y1: 0.79 }, timelineMin: 4
  },
  ui: {
    en: { brand_sub: 'A reader’s guide to The Crippled God', info_names: 'Czech names in this volume follow Dana Krejčová’s Talpress translation.' },
    cs: { brand_sub: 'Průvodce Chromým bohem', info_names: 'Česká jména v tomto svazku vycházejí z překladu Dany Krejčové pro Talpress.' }
  },
  castNames: { tool: L('Onos T’oolan', 'Onos Toolan'), onrack: L('Onrack the Broken', 'Onrak') },
  relations: {
    blocks: [
      { min: 2, title: L('The First Shore', 'První pobřeží'), sub: L('The Shake defend the border between Darkness and Light.', 'Třasové brání hranici mezi Nocí a Světlem.'),
        chain: [{id:'twilight'}, {arrow:L('defends the Shore with', 'brání pobřeží s')}, {id:'yedan'}, {arrow:L('fights', 'bojuje proti')}, {id:'kadagar'}] },
      { min: 4, title: L('The attack on the Spire', 'Útok na Jehlu'), sub: L('The Che’Malle and their allies go after the heart of the Crippled God.', 'Che’Malle a jejich spojenci se vydávají pro srdce Chromého boha.'),
        chain: [{id:'gesler'}, {arrow:L('fights beside', 'bojuje po boku')}, {id:'stormy'}, {arrow:L('fights alongside', 'bojuje spolu s')}, {id:'hood'}, {arrow:L('defeats', 'porazí')}, {id:'reverence'}] },
      { min: 6, title: L('Kaminsod’s release', 'Kaminsodovo osvobození'), sub: L('The gods and the soldiers play different parts in Kaminsod’s return.', 'Bohové a vojáci mají při Kaminsodově návratu různé úlohy.'),
        chain: [{id:'shadowthrone'}, {arrow:L('works with', 'spolupracuje s')}, {id:'cotillion'}, {arrow:L('releases', 'osvobodí')}, {id:'crippled'}] }
    ],
    ensemble: { min: 1, title: L('The Bonehunters', 'Lovci kostí'), sub: L('Survivors of the Nah’ruk attack gather for the last march.', 'Přeživší útoku Nah’ruk se shromažďují před posledním pochodem.'),
      ids: ['tavore','fiddler','bottle','ruthan','sort','blistig'], cap: L('Six soldiers on the last march', 'Šest vojáků na posledním pochodu') }
  },
  loreExtra: [
    { ic: 'eye', min: 1, title: L('The Forkrul Assail in Kolanse', 'Forkrul Assail v Kolanse'), text: L('The Pure use their Voice to compel others. In Kolanse, they rule through local armies and claim the right to judge those they conquer.', 'Zákonní dokážou Hlasem přinutit druhé k poslušnosti. V Kolanse vládnou prostřednictvím místních vojsk a osobují si právo soudit podrobené.') },
    { ic: 'water', min: 2, title: L('The First Shore', 'První pobřeží'), text: L('The border between the realms of Darkness and Light. The Shake defend it from the Tiste Liosan.', 'Hranice mezi říšemi Noci a Světla. Třasové ji brání před Tiste Liosan.') },
    { ic: 'dragon', min: 5, title: L('Korabas', 'Korabas'), text: L('The otataral dragon suppresses sorcery wherever she passes. Heboric accepts the task of taking her chains.', 'Otataralová dračice tlumí magii všude, kudy projde. Heborik přijme úkol převzít její okovy.') }
  ],
  timeline: [
    [L('Glass Desert', 'Skleněná poušť'), L('The Snake', 'Had'), L('The Bonehunters take in the children as they cross the desert.', 'Lovci kostí se při přechodu pouště ujmou dětí.')],
    [L('Estobanse Province', 'Estobanská provincie'), L('The northern front', 'Severní fronta'), L('Ganoes Paran holds the North Citadel. The Letherii and Bolkando forces engage Kolanse’s defenders.', 'Ganoes Paran drží Severní hrad. Lederská a bolkandská vojska se utkají s obránci Kolanse.')],
    [L('Kolanse Bay', 'Kolanský záliv'), L('The Spire', 'Jehla'), L('The attack on the Spire makes it possible to recover the heart.', 'Útok na Jehlu umožní získat srdce.')]
  ],
  ILLUS: {
    1:{ cap:L('The Bonehunters meet the children in the Glass Desert.', 'Lovci kostí potkají děti ve Skleněné poušti.') },
    2:{ cap:L('The Watch faces the Liosan at the First Shore.', 'Stráž se postaví Liosanům na Prvním pobřeží.') },
    3:{ cap:L('Paran’s Host comes to the North Citadel.', 'Paranův houfec dorazí k Severnímu hradu.') },
    4:{ cap:L('The Che’Malle and the T’lan Imass attack the Spire.', 'Che’Malle a T’lan Imass zaútočí na Jehlu.') },
    5:{ cap:L('The marines form a line around the barrow.', 'Mariňáci se postaví kolem mohyly.') },
    6:{ cap:L('The survivors remember the fallen.', 'Přeživší vzpomínají na padlé.') }
  },
  SCENES: { 1:'__SCENE_1__', 2:'__SCENE_2__', 3:'__SCENE_3__', 4:'__SCENE_4__', 5:'__SCENE_5__', 6:'__SCENE_6__' },
  map: { title: L('Kolanse', 'Kolanse'), worldStops: [], route: [] },
  PLACES: [
    { id:'glass', name:L('Toward the Glass Desert', 'Směr Skleněná poušť'), en:'Toward the Glass Desert', x:30.95, y:70.92, region:[9.04,62.98], ic:'sun', gi:1,
      dad:L('Tavore’s army crosses the desert to the west. The printed map gives its direction from Kolanse with an arrow.', 'Tavořino vojsko přechází poušť na západě. Knižní mapa ukazuje směr z Kolanse šipkou.'),
      kid:L('The soldiers and the children meet in the desert west of this map.', 'Vojáci a děti se potkají v poušti západně od této mapy.') },
    { id:'shore', name:L('The First Shore', 'První pobřeží'), en:'The First Shore', x:null, y:null, region:null, ic:'water', gi:2,
      dad:L('A border between two magical realms, reached from Kharkanas. The Shake hold it against the Tiste Liosan.', 'Hranice dvou magických říší, k níž vede cesta z Charkanas. Třasové ji brání proti Tiste Liosan.'),
      kid:L('A shore of light where the Shake defend their home.', 'Pobřeží světla, kde Třasové brání svůj domov.') },
    { id:'north-citadel', name:L('North Citadel', 'Severní hrad'), en:'North Citadel', x:null, y:null, region:[46.35,34.94], ic:'tower', gi:3,
      dad:L('The fortress in Estobanse Province where Paran’s Host confronts the Forkrul Assail.', 'Pevnost v Estobanské provincii, kde se Paranův houfec postaví Forkrul Assailům.'),
      kid:L('A northern fortress held by Paran’s soldiers.', 'Severní pevnost, kterou drží Paranovi vojáci.') },
    { id:'kolanse', name:L('Kolanse City', 'Město Kolanse'), en:'Kolanse City', x:37.45, y:71.42, region:[61.44,55.45], ic:'town', gi:3,
      dad:L('The city at the inland side of Kolanse Bay, just northwest of the Spire.', 'Město na vnitřní straně Kolanského zálivu, severozápadně od Jehly.'),
      kid:L('The city beside the bay and the Spire.', 'Město u zálivu poblíž Jehly.') },
    { id:'spire', name:L('The Spire', 'Jehla'), en:'The Spire', x:37.45, y:71.42, region:[67.12,56.57], ic:'tower', gi:4,
      dad:L('The rock formation on the headland by Kolanse City. The Forkrul Assail hold the heart at an altar above the sea.', 'Skalní útvar na výběžku u města Kolanse. Forkrul Assailové drží srdce na oltáři nad mořem.'),
      kid:L('A tall rock by the sea where the Forkrul Assail guard an altar.', 'Vysoká skála u moře, kde Forkrul Assailové hlídají oltář.') },
    { id:'barrow', name:L('The barrow', 'Mohyla'), en:'The barrow', x:null, y:null, region:null, ic:'chain', gi:5,
      dad:L('A separate position held by Fiddler’s marines. Gu’Rull brings the heart there after the fight at the Spire.', 'Samostatné postavení, které drží Šumařovi mariňáci. Gu’Rull tam po boji na Jehle přinese srdce.'),
      kid:L('The hill the soldiers defend while they wait for help.', 'Návrší, které vojáci brání, než dorazí pomoc.') }
  ],
  CH: [
    { book:1, n:1, title:L('The Glass Desert', 'Skleněná poušť'), en:'The Glass Desert', fear:4,
      sum:L('The Bonehunters regroup after the Nah’ruk attack. Tavore sends the Letherii and Bolkando forces by another route as she takes her soldiers through the Glass Desert. They meet the Snake and take the children in. When the water runs out, Tavore uses Mael’s gift to draw water from the ground.', 'Lovci kostí se po útoku Nah’ruk znovu shromáždí. Tavore vyšle lederská a bolkandská vojska jinudy a své vojáky vede přes Skleněnou poušť. Potkají Hada a ujmou se dětí. Když dojde voda, Tavore pomocí Maelova daru vyvolá pramen.'),
      focus:{en:['Why Tavore divides the armies','The soldiers’ response to the children'],cs:['Proč Tavore rozdělí vojska','Jak vojáci přijmou děti']},
      q:{en:['What does taking in the Snake ask of the soldiers?'],cs:['Co od vojáků vyžaduje, když se ujmou Hada?']},
      words:{en:[['the Snake','a column of child refugees from Kolanse']],cs:[['Had','zástup dětských uprchlíků z Kolanse']]},
      fearnote:L('Thirst, starvation and children in danger.', 'Žízeň, hladovění a děti v nebezpečí.'),
      teaser:L('The army will cross a desert where water is scarce.', 'Vojsko překročí poušť, kde je málo vody.'),
      quiz:{en:[['Whom do the soldiers find in the desert?',['The Snake','The Tiste Liosan','The Perish'],0],['Whose gift brings water?',['Mael’s','Hood’s','Krughava’s'],0]],cs:[['Koho vojáci najdou v poušti?',['Hada','Tiste Liosan','Zánické přílby'],0],['Čí dar přinese vodu?',['Maelův','Mistra Kápě','Krughavin'],0]]} },
    { book:1, n:2, title:L('The First Shore', 'První pobřeží'), en:'The First Shore', fear:5,
      sum:L('Yan Tovis and Yedan Derryg defend the First Shore against the Tiste Liosan. Yedan uses a Hust sword against Kadagar Fant and his warriors. Tiste Andii led by Nimander come to the defence. The Shore holds, but Yedan dies of his wounds.', 'Yan Tovis a Yedan Derryg brání První pobřeží před Tiste Liosan. Yedan se mečem Hust postaví Kadagaru Fantovi a jeho bojovníkům. Na pomoc přijdou Tiste Andii pod Nimanderovým vedením. Pobřeží odolá, ale Yedan podlehne zraněním.'),
      focus:{en:['The duty carried by the Watch','Why the Tiste Andii come to the Shore'],cs:['Povinnost, kterou má Stráž','Proč Tiste Andii přijdou na pobřeží']},
      q:{en:['What does home mean to Yan Tovis and Yedan by the end of the battle?'],cs:['Co na konci bitvy znamená domov pro Yan Tovis a Yedana?']},
      words:{en:[['the Watch','Yedan Derryg’s title']],cs:[['Stráž','titul Yedana Derryga']]},
      fearnote:L('A prolonged battle with heavy losses.', 'Dlouhá bitva s těžkými ztrátami.'),
      teaser:L('The Liosan try to break through at the First Shore.', 'Liosané se snaží prolomit obranu Prvního pobřeží.'),
      quiz:{en:[['Who attacks the First Shore?',['Tiste Liosan','Tiste Edur','The Nah’ruk'],0],['Who is the Watch?',['Yedan Derryg','Nimander','Kadagar Fant'],0]],cs:[['Kdo útočí na První pobřeží?',['Tiste Liosan','Tiste Edur','Nah’ruk'],0],['Kdo je Stráž?',['Yedan Derryg','Nimander','Kadagar Fant'],0]]} },
    { book:1, n:3, title:L('The North Citadel', 'Severní hrad'), en:'The North Citadel', fear:4,
      sum:L('Ganoes Paran and the Host occupy the North Citadel in Estobanse. The Forkrul Assail lay siege to it while Brys and Queen Abrastal draw the Kolansii to battle. Tanakalian leads the Perish away from Tavore, and Krughava joins the allied forces after losing command.', 'Ganoes Paran a jeho houfec obsadí Severní hrad v Estobanské provincii. Forkrul Assailové ho oblehnou a Brys s královnou Abrastal mezitím vylákají kolanské vojsko do bitvy. Tanakalian odvede Zánické přílby od Tavore a Krughava se po ztrátě velení připojí ke spojencům.'),
      focus:{en:['Paran and the Host on the northern front','The separate aims of the allies'],cs:['Paran a jeho houfec na severní frontě','Různé cíle spojenců']},
      q:{en:['Why do the allies try to draw defenders away from the Spire?'],cs:['Proč se spojenci snaží odlákat obránce od Jehly?']},
      words:{en:[['the Host','Paran’s Malazan army']],cs:[['houfec','Paranovo malazské vojsko']]},
      fearnote:L('Siege warfare, desertion and coercion by the Forkrul Assail.', 'Obléhání, odchod spojenců a nátlak Forkrul Assailů.'),
      teaser:L('The defenders of Kolanse face a threat in the north.', 'Obránci Kolanse čelí hrozbě na severu.'),
      quiz:{en:[['Who holds the North Citadel?',['Paran and the Host','Tavore and the Bonehunters','The Shake'],0],['Who leads the Bolkando force?',['Abrastal','Yan Tovis','Aranict'],0]],cs:[['Kdo drží Severní hrad?',['Paran a jeho houfec','Tavore a Lovci kostí','Třasové'],0],['Kdo vede bolkandské vojsko?',['Abrastal','Yan Tovis','Aranikt'],0]]} },
    { book:2, n:1, title:L('The Spire', 'Jehla'), en:'The Spire', fear:5,
      sum:L('The Che’Malle and T’lan Imass attack the Spire. Gesler and Stormy try to stop Sinn from reaching the heart and die in the fighting. Hood confronts Reverence at the altar, and Gu’Rull takes the freed heart to the Bonehunters’ position.', 'Che’Malle a T’lan Imass zaútočí na Jehlu. Gesler a Bouřňák se snaží zabránit Sinn v přístupu k srdci a v boji padnou. Mistr Kápě se u oltáře postaví Velebnosti a Gu’Rull odnese osvobozené srdce k Lovcům kostí.'),
      focus:{en:['The price of taking the Spire','How the heart gets from the Spire to the marines'],cs:['Cena za dobytí Jehly','Jak se srdce dostane z Jehly k mariňákům']},
      q:{en:['Why do Gesler and Stormy go after Sinn?'],cs:['Proč se Gesler a Bouřňák vydají za Sinn?']},
      words:{en:[['Reverence','one of the Forkrul Assail Pure']],cs:[['Velebnost','jedna ze zákonných inkvizitorů Forkrul Assail']]},
      fearnote:L('Fatal fighting, fire and the deaths of long-running characters.', 'Smrtelný boj, oheň a úmrtí dlouhodobých postav.'),
      teaser:L('The attack reaches the rock that holds the altar.', 'Útok dospěje ke skále, na které stojí oltář.'),
      quiz:{en:[['Who carries the heart from the Spire?',['Gu’Rull','Hood','Brys'],0],['Which marines pursue Sinn?',['Gesler and Stormy','Fiddler and Hedge','Keneb and Blistig'],0]],cs:[['Kdo odnese srdce z Jehly?',['Gu’Rull','Mistr Kápě','Brys'],0],['Kteří mariňáci se vydají za Sinn?',['Gesler a Bouřňák','Šumař a Křovák','Keneb a Blistig'],0]]} },
    { book:2, n:2, title:L('The barrow', 'Mohyla'), en:'The barrow', fear:5,
      sum:L('Fiddler’s marines defend the barrow while the heart is reunited with Kaminsod’s new body. Paran reaches Tavore as the fighting closes in. Above them the dragons fight Korabas, whose otataral nature suppresses magic. Heboric accepts her chains.', 'Šumařovi mariňáci brání mohylu, zatímco se srdce spojí s novým Kaminsodovým tělem. Když se boje blíží, Paran se dostane k Tavore. Nad nimi draci bojují s Korabas, jejíž otataralová podstata tlumí magii. Heborik přijme její okovy.'),
      focus:{en:['The marines holding the barrow','Heboric’s response to Korabas'],cs:['Mariňáci bránící mohylu','Jak se Heborik zachová ke Korabas']},
      q:{en:['What do the soldiers protect once Gu’Rull arrives?'],cs:['Co vojáci chrání, když Gu’Rull přiletí?']},
      words:{en:[['otataral','a substance that suppresses most sorcery']],cs:[['otataral','látka, která tlumí většinu magie']]},
      fearnote:L('Heavy losses among the defenders and an aerial battle.', 'Těžké ztráty obránců a boj ve vzduchu.'),
      teaser:L('The survivors gather on a hill, with fighting all around them.', 'Přeživší se shromáždí na návrší a kolem nich zuří boj.'),
      quiz:{en:[['Who takes Korabas’s chains?',['Heboric','Tavore','Aranict'],0],['Who leads the marines at the barrow?',['Fiddler','Yedan','Brys'],0]],cs:[['Kdo převezme okovy Korabas?',['Heborik','Tavore','Aranikt'],0],['Kdo vede mariňáky u mohyly?',['Šumař','Yedan','Brys'],0]]} },
    { book:2, n:3, title:L('Kaminsod', 'Kaminsod'), en:'Kaminsod', fear:4,
      sum:L('Cotillion strikes Kaminsod at the barrow. The blow releases the god from his mortal body so his spirit can leave with the jade strangers. The survivors honour their dead. In the epilogue, Fiddler meets a boy who wants to become a soldier.', 'Kotilion u mohyly zasadí Kaminsodovi ránu, která ho uvolní ze smrtelného těla, aby jeho duch mohl odejít s nefritovými cizinci. Přeživší uctí své padlé. V epilogu Šumař potká chlapce, který se chce stát vojákem.'),
      focus:{en:['What Cotillion’s act accomplishes','How the epilogue recalls the start of the series'],cs:['Co způsobí Kotilionův čin','Jak epilog připomíná začátek ságy']},
      q:{en:['Why does the book return to a boy who wants to be a soldier?'],cs:['Proč se kniha vrací k chlapci, který se chce stát vojákem?']},
      words:{en:[['Kaminsod','the name of the Crippled God']],cs:[['Kaminsod','jméno Chromého boha']]},
      fearnote:L('A fatal-looking blow and mourning for the fallen.', 'Rána, která působí smrtelně, a truchlení za padlé.'),
      teaser:L('The fighting ends, and the survivors have to decide what to remember.', 'Boj končí a přeživší se musejí rozhodnout, co si budou pamatovat.'),
      quiz:{en:[['Who frees Kaminsod from his body?',['Cotillion','Fiddler','Tavore'],0],['Who meets a boy who wants to be a soldier?',['Fiddler','Brys','Icarium'],0]],cs:[['Kdo osvobodí Kaminsoda z jeho těla?',['Kotilion','Šumař','Tavore'],0],['Kdo potká chlapce, který se chce stát vojákem?',['Šumař','Brys','Icarium'],0]]} }
  ],
  KIDSUM: {
    1:{en:['The soldiers find the Snake in the desert and help the children. When they run out of water, Tavore uses a gift from Mael.'],cs:['Vojáci v poušti najdou Hada a pomohou dětem. Když jim dojde voda, Tavore použije Maelův dar.']},
    2:{en:['The Shake hold the First Shore against the Liosan with help from the Tiste Andii. Yedan dies after the battle.'],cs:['Třasové s pomocí Tiste Andii ubrání První pobřeží před Liosany. Yedan po bitvě umírá.']},
    3:{en:['Paran holds a fortress in the north while other armies draw the defenders away from the Spire.'],cs:['Paran drží pevnost na severu a jiná vojska odlákají obránce od Jehly.']},
    4:{en:['Several allies attack the Spire. Gu’Rull carries the heart away from the altar.'],cs:['Několik spojenců zaútočí na Jehlu. Gu’Rull odnese srdce od oltáře.']},
    5:{en:['The soldiers defend the barrow. The dragon Korabas is in pain, and Heboric takes on her chains.'],cs:['Vojáci brání mohylu. Dračice Korabas trpí a Heborik převezme její okovy.']},
    6:{en:['Cotillion helps Kaminsod leave the world. Those who survive remember the friends they lost.'],cs:['Kotilion pomůže Kaminsodovi odejít ze světa. Přeživší vzpomínají na přátele, které ztratili.']}
  },
  KIDINTRO: {
    1:{en:['The Bonehunters still have a desert to cross. Look for who helps them and whom they help.'],cs:['Lovci kostí ještě musejí překročit poušť. Všímej si, kdo jim pomůže a komu pomohou oni.']},
    2:{en:['The Shake reach a shore where their enemies are waiting.'],cs:['Třasové dorazí k pobřeží, kde čekají jejich nepřátelé.']},
    3:{en:['Two related armies are fighting on different roads. Follow where Paran’s soldiers go.'],cs:['Dvě spřízněná vojska bojují na různých cestách. Sleduj, kam jdou Paranovi vojáci.']},
    4:{en:['The warriors approach a tall rock above the sea.'],cs:['Bojovníci se blíží k vysoké skále nad mořem.']},
    5:{en:['The focus shifts from the Spire to a hill held by the marines.'],cs:['Příběh se přesune od Jehly k návrší, které drží mariňáci.']},
    6:{en:['One task remains after the fighting. Watch what happens to Kaminsod.'],cs:['Po boji zbývá jeden úkol. Všímej si, co se stane s Kaminsodem.']}
  }
};
