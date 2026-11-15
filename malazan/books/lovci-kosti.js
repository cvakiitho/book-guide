// The Bonehunters — volume 6.
var BOOK = {
  meta: {
    slug: 'lovci-kosti', vol: 6, key: 'malazan_v6',
    mapFrame: { x0: 0.4, x1: 0.63, y0: 0.12, y1: 0.57 }, timelineMin: 5
  },
  ui: {
    en: { brand_sub: 'A reader’s guide to The Bonehunters', info_names: 'Czech names in this volume follow Dana Krejčová’s Talpress translation.' },
    cs: { brand_sub: 'Průvodce Lovci kostí', info_names: 'Česká jména v tomto svazku vycházejí z překladu Dany Krejčové pro Talpress.' }
  },
  relations: {
    blocks: [
      { min: 1, title: L('The Fourteenth Army', 'Čtrnáctá armáda'), sub: L('From field command to the soldiers crawling under Y’Ghatan.', 'Od velení armády až po vojáky, kteří se plazí pod Y’Ghatanem.'),
        chain: [{id:'tavore'}, {arrow:L('commands with', 'velí spolu s')}, {id:'keneb'}, {arrow:L('commands', 'velí')}, {id:'fiddler'}, {arrow:L('leads', 'vede')}, {id:'bottle'}] },
      { min: 2, title: L('Onearm’s Host', 'Jednorukého houfec'), sub: L('A separate Malazan army hit hard by the plague.', 'Další malazské vojsko, těžce zasažené morem.'),
        chain: [{id:'dujek'}, {arrow:L('succeeded by', 've velení ho střídá')}, {id:'paran'}] },
      { min: 4, title: L('The Nameless Ones', 'Bezejmenní'), sub: L('The order wants a new companion to steer Icarium.', 'Řád chce Icariovi dosadit nového průvodce.'),
        chain: [{id:'mappo'}, {arrow:L('replaced by', 'nahrazen')}, {id:'veed'}, {arrow:L('accompanies', 'doprovází')}, {id:'icarium'}] },
      { min: 5, title: L('The meeting at Mock’s Hold', 'Jednání na Posměvákově tvrzi'), sub: L('Rel and Dom demand that Tavore hand over the Wickans and Khundryl.', 'Rel a Dom žádají, aby jim Tavore vydala Záchlumčany a Khundryly.'),
        chain: [{id:'mallick'}, {arrow:L('advises', 'radí')}, {id:'laseen'}, {arrow:L('summons', 'povolává')}, {id:'tavore'}, {arrow:L('escapes with', 'uniká s')}, {id:'tamber'}] }
    ],
    ensemble: { min: 1, title: L('The Fourteenth on campaign', 'Čtrnáctá armáda v poli'), sub: L('Veterans and new recruits in Tavore’s army.', 'Veteráni a nováčci v Tavořině vojsku.'),
      ids: ['tavore','fiddler','bottle','hellian','gesler','stormy'], cap: L('Tavore and five of her soldiers', 'Tavore a pět jejích vojáků') }
  },
  loreExtra: [
    { ic: 'flame', min: 1, title: L('Y’Ghatan and the Bonehunters', 'Y’Ghatan a Lovci kostí'), text: L('Y’Ghatan already has a place in imperial history as the site of Dassem Ultor’s fall. The Fourteenth’s survival there gives the new army a story of its own.', 'Y’Ghatan se do dějin říše zapsal už pádem Dassema Ultora. Čtrnáctá armáda si tu bojem o přežití vydobude vlastní pověst.') },
    { ic: 'mask', min: 2, title: L('Poliel and Soliel', 'Poliel a Soliel'), text: L('Poliel’s temple in G’dan(isban) is the centre of the plague. Soliel offers healing once Paran breaks Poliel’s hold on the city.', 'Chrám Poliel v G’dan(isbanu) je ohniskem moru. Jakmile Paran zlomí moc Poliel nad městem, Soliel nabídne uzdravení.') },
    { ic: 'crown', min: 6, title: L('Two thrones', 'Dva trůny'), text: L('The Throne of Shadow is on Drift Avalii. The First Throne, defended by Trull and the T’lan Imass, commands the T’lan Imass bound to it.', 'Trůn stínu stojí na Drift Avalii. První trůn, který brání Trull a T’lan Imass, dává moc nad těmi T’lan Imass, kteří jsou k němu vázáni.') }
  ],
  timeline: [
    [L('Seven Cities', 'Sedmiměstí'), L('Leoman retreats to Y’Ghatan', 'Leoman ustupuje do Y’Ghatanu'), L('The Fourteenth pursues what remains of Sha’ik’s rebellion.', 'Čtrnáctá armáda pronásleduje zbytky Ša’ičina povstání.')],
    [L('G’dan(isban)', 'G’dan(isban)'), L('Poliel’s plague', 'Mor bohyně Poliel'), L('Paran confronts Poliel and takes command of Onearm’s Host.', 'Paran se postaví Poliel a převezme velení Jednorukého houfce.')],
    [L('West from Aren', 'Z Arenu na západ'), L('The Edur fleet and Sepik', 'Flotila Edur a Sepik'), L('The Fourteenth meets Edur sorcery at sea and goes on to Sepik.', 'Čtrnáctá armáda se na moři střetne s magií Edur a pokračuje k Sepiku.')],
    [L('Malaz Isle', 'Ostrov Malaz'), L('The summons to Malaz City', 'Povolání do města Malaz'), L('Tavore faces Laseen, Rel and Dom at Mock’s Hold.', 'Tavore čelí Laseen, Relovi a Domovi na Posměvákově tvrzi.')]
  ],
  ILLUS: {
    1:{ cap:L('The Fourteenth searches for a way out of burning Y’Ghatan.', 'Čtrnáctá armáda hledá cestu z hořícího Y’Ghatanu.') },
    2:{ cap:L('Paran rides into the plague-stricken city.', 'Paran vjíždí do města stiženého morem.') },
    3:{ cap:L('The Fourteenth sees what happened at Sepik.', 'Čtrnáctá armáda zjišťuje, co se stalo na Sepiku.') },
    4:{ cap:L('The fleet returns to the island where the Empire began.', 'Flotila se vrací na ostrov, kde vznikla říše.') },
    5:{ cap:L('A crowd closes in on the harbour while Tavore climbs to Mock’s Hold.', 'Dav se tlačí k přístavu, zatímco Tavore vystupuje k Posměvákově tvrzi.') },
    6:{ cap:L('Trull sets his spear to hold the way to the First Throne.', 'Trull nastaví kopí, aby bránil cestu k Prvnímu trůnu.') }
  },
  SCENES: { 1:'__SCENE_1__', 2:'__SCENE_2__', 3:'__SCENE_3__', 4:'__SCENE_4__', 5:'__SCENE_5__', 6:'__SCENE_6__' },
  map: {
    title: L('Seven Cities, Quon Tali and Malaz City', 'Sedmiměstí, Quon Tali a město Malaz'),
    worldStops: [], route: []
  },
  PLACES: [
    { id:'yghatan', name:L('Y’Ghatan', 'Y’Ghatan'), en:'Y’Ghatan', x:47.35, y:26.33, region:[26.25,25.96], ic:'town', gi:1,
      dad:L('A fortress city west of G’dan(isban), where Leoman makes his last stand against the Fourteenth.', 'Pevnostní město západně od G’dan(isbanu), kde se Leoman naposledy postaví Čtrnácté armádě.'),
      kid:L('An old fortress where Leoman takes refuge.', 'Stará pevnost, do které se uchýlí Leoman.') },
    { id:'gdanisban', name:L('G’dan(isban)', 'G’dan(isban)'), en:'G’dan(isban)', x:52.9, y:25.42, region:[45.29,27.88], ic:'town', gi:2,
      dad:L('The city where Paran confronts Poliel. Both editions abbreviate the city name on the printed chart.', 'Město, kde se Paran postaví Poliel. Obě vydání na knižní mapě uvádějí zkrácený název města.'),
      kid:L('Paran comes here to find the source of the plague.', 'Paran sem přichází vypátrat příčinu moru.') },
    { id:'sepik', name:L('Sepik', 'Sepik'), en:'Sepik', x:45.15, y:16.75, region:[8.27,18.75], ic:'town', gi:3,
      dad:L('An island principality off the northwest coast of Seven Cities. The Edur strike here before the Fourteenth arrives.', 'Ostrovní knížectví u severozápadního pobřeží Sedmiměstí. Tiste Edur tu udeří před příchodem Čtrnácté armády.'),
      kid:L('An island west of the main coast. The fleet stops here after a battle at sea.', 'Ostrov západně od pevniny. Flotila se tu zastaví po bitvě na moři.') },
    { id:'malazcity', name:L('Malaz City', 'Město Malaz'), en:'Malaz City', x:57.85, y:50.58, region:[46.54,90.54], ic:'town', gi:4,
      dad:L('The port on Malaz Isle where the Empire began. Unta on the mainland is the imperial capital.', 'Přístav na ostrově Malaz, kde vznikla říše. Hlavním městem říše je Unta na pevnině.'),
      kid:L('The fleet is ordered to return to this island port.', 'Flotila dostane rozkaz vrátit se do tohoto ostrovního přístavu.') },
    { id:'mocks-hold', name:L('Mock’s Hold', 'Posměvákova tvrz'), en:'Mock’s Hold', x:null, y:null, region:[85.48,18.59], ic:'tower', gi:5,
      dad:L('The stronghold at the north end of the bay where Tavore meets Laseen. The harbour and Deadhouse lie to the south.', 'Tvrz na severním konci zálivu, kde se Tavore setká s Laseen. Přístav a Dům mrtvých leží jižně odtud.'),
      kid:L('The fortress above the harbour where the Empress waits for Tavore.', 'Pevnost nad přístavem, kde císařovna čeká na Tavore.') },
    { id:'deadhouse', name:L('The Deadhouse', 'Dům mrtvých'), en:'The Deadhouse', x:null, y:null, region:[76.73,68.91], ic:'tower', gi:6,
      dad:L('The Azath house in the Mouse Quarter. Kalam is brought here after being poisoned during the escape.', 'Azatský dům v Myší díře. Přinesou sem Kalama, když ho při útěku otráví.'),
      kid:L('A strange house near the harbour, where the wounded Kalam is taken.', 'Podivný dům poblíž přístavu, kam odnesou zraněného Kalama.') },
    { id:'firstthrone', name:L('The First Throne', 'První trůn'), en:'The First Throne', x:null, y:null, region:null, ic:'tower', gi:6,
      dad:L('Trull and the T’lan Imass defend this throne against the Edur war party. The printed maps give no fixed location for it.', 'Trull a T’lan Imass tento trůn brání proti válečné družině Edur. Knižní mapy jeho polohu neuvádějí.'),
      kid:L('Trull and his friends guard this ancient throne.', 'Tento prastarý trůn hlídají Trull a jeho přátelé.') }
  ],
  CH: [
    { book:1, n:1, title:L('Y’Ghatan', 'Y’Ghatan'), en:'Y’Ghatan', fear:5,
      sum:L('Tavore’s Fourteenth Army pursues Leoman and the remnants of the rebellion into Y’Ghatan. Leoman sets the city alight. Sinn leads many soldiers out above ground while Fiddler’s group, guided by Bottle through buried ruins, digs a way to the surface.', 'Tavořina Čtrnáctá armáda pronásleduje Leomana a zbytky povstalců do Y’Ghatanu. Leoman město zapálí. Sinn vyvede mnoho vojáků po povrchu, zatímco Šumařova skupina se pod Flaškovým vedením prokope zasypanými ruinami na povrch.'),
      focus:{en:['Leoman’s choice to burn the city','Sinn and Bottle find different routes out'],cs:['Leomanovo rozhodnutí zapálit město','Sinn a Flaška najdou různé cesty ven']},
      q:{en:['What skills matter when the soldiers are trapped underground?'],cs:['Jaké schopnosti rozhodují, když vojáci uvíznou pod zemí?']},
      words:{en:[['sapper','a soldier who uses explosives and works on fortifications']],cs:[['ženista','voják, který pracuje s výbušninami a opevněním']]},
      fearnote:L('Fire, confinement and the deaths of soldiers and civilians.', 'Požár, uvěznění v podzemí a smrt vojáků i civilistů.'),
      teaser:L('Leoman has chosen a city the Empire remembers well.', 'Leoman si vybral město, na které říše dobře pamatuje.'),
      quiz:{en:[['Who sets Y’Ghatan alight?',['Leoman','Dujek','Tavore'],0],['Which mage helps the soldiers under the city?',['Bottle','Poliel','Samar Dev'],0]],cs:[['Kdo dá zapálit Y’Ghatan?',['Leoman','Dujek','Tavore'],0],['Který mág pomáhá vojákům pod městem?',['Flaška','Poliel','Samar Dev'],0]]} },
    { book:1, n:2, title:L('The Plague', 'Mor'), en:'The Plague', fear:4,
      sum:L('Paran finds Onearm’s Host near G’dan(isban), with Dujek gravely ill after an attack on Poliel’s temple. Paran pins Poliel with an otataral shard and the Deragoth kill her. Soliel heals the sick brought to her, but Dujek dies before Paran can get him there. Paran takes command of the Host.', 'Paran najde Jednorukého houfec u G’dan(isbanu). Dujek po útoku na chrám Poliel těžce onemocněl. Paran přibodne Poliel úlomkem otataralu a Deragoth ji zabijí. Soliel uzdravuje nemocné, které k ní přivedou, ale Dujek zemře dřív, než ho k ní Paran dopraví. Paran přebírá velení houfce.'),
      focus:{en:['Poliel’s plague and Soliel’s healing','Paran takes responsibility for Dujek’s soldiers'],cs:['Mor bohyně Poliel a uzdravení od Soliel','Paran přebírá odpovědnost za Dujekovy vojáky']},
      q:{en:['What risks does Paran accept when he sets the Deragoth loose?'],cs:['Co Paran riskuje, když vypustí Deragoth?']},
      words:{en:[['otataral','a substance that suppresses most sorcery'],['Onearm’s Host','the army Dujek commands']],cs:[['otataral','látka, která tlumí většinu magie'],['Jednorukého houfec','vojsko, kterému velí Dujek']]},
      fearnote:L('Severe illness, mass death and the loss of a recurring character.', 'Těžká nemoc, hromadná úmrtí a smrt známé postavy.'),
      teaser:L('Dujek’s soldiers are camped outside a city in the grip of a plague.', 'Dujekovi vojáci táboří před městem zasaženým morem.'),
      quiz:{en:[['Which goddess spreads the plague?',['Poliel','Soliel','D’rek'],0],['Who takes command of the Host?',['Paran','Kalam','Keneb'],0]],cs:[['Která bohyně šíří mor?',['Poliel','Soliel','D’rek'],0],['Kdo převezme velení houfce?',['Paran','Kalam','Keneb'],0]]} },
    { book:1, n:3, title:L('The Edur fleet', 'Flotila Tiste Edur'), en:'The Edur fleet', fear:4,
      sum:L('The Fourteenth sails from Aren and meets the Edur fleet. Quick Ben and Bottle resist the Edur sorcery with help from the Eres’al. At Sepik, the Malazans learn that the Edur discovered enslaved kin and took vengeance on the island’s inhabitants. The Fourteenth continues west, where the Perish Grey Helms pledge support. On the mainland, Karsa and Samar Dev help the Anibar repel an Edur raid, and Karsa agrees to face the Edur emperor.', 'Čtrnáctá armáda vypluje z Arenu a střetne se s flotilou Tiste Edur. Rychlej Ben a Flaška s pomocí Eres’al odrazí edurskou magii. Na Sepiku Malažané zjistí, že Edur našli své zotročené příbuzné a pomstili se na obyvatelích ostrova. Čtrnáctá armáda pokračuje na západ, kde jí Zánické šedé přílby přislíbí pomoc. Na pevnině Karsa a Samar Dev pomohou Anibarům odrazit útok Edur a Karsa souhlasí, že se utká s edurským císařem.'),
      focus:{en:['The first clash between Tavore’s army and the Edur','What happened at Sepik'],cs:['První střet Tavořiny armády s Edur','Události na Sepiku']},
      q:{en:['What does the fleet learn on Sepik that it could never learn from the battle?'],cs:['Co se flotila na Sepiku dozví navíc oproti tomu, co poznala v bitvě?']},
      words:{en:[['Sepik','a Malazan island principality'],['Grey Helms','warriors sworn to the twin Wolves of Winter']],cs:[['Sepik','malazské ostrovní knížectví'],['Šedé přílby','válečníci zasvěcení dvěma vlkům zimy']]},
      fearnote:L('A naval battle and the aftermath of a massacre.', 'Námořní bitva a následky masakru.'),
      teaser:L('The fleet finds an opponent whose sorcery feels unfamiliar.', 'Flotila narazí na protivníka s neznámou magií.'),
      quiz:{en:[['Which fleet battles the Fourteenth?',['The Tiste Edur fleet','The Perish fleet','The Darujhistan fleet'],0],['Where does Tavore’s fleet see the aftermath of the Edur attack?',['Sepik','Kartool','Y’Ghatan'],0]],cs:[['Která flotila bojuje s Čtrnáctou armádou?',['Flotila Tiste Edur','Flotila ze Zániku','Flotila z Darúdžhistánu'],0],['Kde Tavořina flotila uvidí následky útoku Edur?',['Na Sepiku','Na Kartoolu','V Y’Ghatanu'],0]]} },
    { book:2, n:1, title:L('A summons to Malaz', 'Povolání do Malazu'), en:'A summons to Malaz', fear:3,
      sum:L('The Perish help the fleet travel through a warren. An imperial captain intercepts Tavore with orders to divert to Malaz City. In a separate thread, the Nameless Ones replace Mappo with Taralack Veed. Veed steers Icarium toward an Edur expedition seeking the two thrones.', 'Lidé ze Zániku pomohou flotile proplout chodbou. Říšský kapitán zastaví Tavore s rozkazem zamířit do města Malaz. V jiné dějové linii nahradí Bezejmenní Mappa Taralackem Výdem. Výd přivede Icaria k výpravě Tiste Edur, která hledá oba trůny.'),
      focus:{en:['The Perish alliance','The orders that divert the fleet','Mappo and Veed’s different motives'],cs:['Spojenectví se Zánikem','Rozkaz, který mění směr plavby','Rozdílné důvody Mappa a Výda']},
      q:{en:['What does Veed want from Icarium that Mappo never wanted?'],cs:['Co chce Výd od Icaria a proč se tím liší od Mappa?']},
      words:{en:[['Nameless Ones','an order that arranges who travels with Icarium']],cs:[['Bezejmenní','řád, který určuje, kdo má Icaria doprovázet']]},
      fearnote:L('Threats and manipulation as the plot moves toward Malaz City.', 'Výhrůžky a manipulace cestou k událostem ve městě Malaz.'),
      teaser:L('An imperial captain brings orders to change course.', 'Říšský kapitán přiváží rozkaz změnit kurz.'),
      quiz:{en:[['Where is Tavore ordered to go?',['Malaz City','Kartool','Sepik'],0],['Who replaces Mappo as Icarium’s companion?',['Taralack Veed','Trull Sengar','Onrack'],0]],cs:[['Kam má Tavore podle rozkazu zamířit?',['Do města Malaz','Na Kartool','Na Sepik'],0],['Kdo nahradí Mappa po Icariově boku?',['Taralack Výd','Trull Sengar','Onrack'],0]]} },
    { book:2, n:2, title:L('Mock’s Hold', 'Posměvákova tvrz'), en:'Mock’s Hold', fear:5,
      sum:L('At Mock’s Hold, Mallick Rel and Korbolo Dom blame the Wickans for the disaster at Aren and demand that Tavore hand over her allies. Tavore refuses. Kalam turns down Laseen’s offer to lead the Claw and fights alongside Tavore and T’amber as they try to reach the harbour.', 'Na Posměvákově tvrzi Mallick Rel a Korbolo Dom svalují vinu za pohromu u Arenu na Záchlumčany a žádají, aby Tavore své spojence vydala. Tavore odmítne. Kalam odmítá nabídku Laseen, aby převzal velení Spáru, a bojuje po boku Tavore a T’jantar na cestě k přístavu.'),
      focus:{en:['The scapegoating of the Wickans','Kalam’s decision at Mock’s Hold','Keneb holds the harbour'],cs:['Svalování viny na Záchlumčany','Kalamovo rozhodnutí na Posměvákově tvrzi','Keneb drží přístav']},
      q:{en:['How does the Empire’s version of the Chain of Dogs help Rel and Dom?'],cs:['Jak říšský výklad Psího řetězu pomáhá Relovi a Domovi?']},
      words:{en:[['Claw','the imperial corps of assassins']],cs:[['Spár','říšský sbor asasínů']]},
      fearnote:L('Mob violence, assassins and threats against the Wickans.', 'Násilí davu, přepadení asasínů a výhrůžky Záchlumčanům.'),
      teaser:L('Tavore goes to the fortress to hear what the Empress wants.', 'Tavore jde do tvrze vyslechnout, co od ní císařovna žádá.'),
      quiz:{en:[['Whom does Rel blame for the disaster at Aren?',['The Wickans','The Tiste Edur','The Perish'],0],['Whom does Kalam protect on the way to the harbour?',['Tavore','Laseen','Rel'],0]],cs:[['Na koho Rel svaluje vinu za pohromu u Arenu?',['Na Záchlumčany','Na Tiste Edur','Na lidi ze Zániku'],0],['Koho Kalam chrání na cestě do přístavu?',['Tavore','Laseen','Rela'],0]]} },
    { book:2, n:3, title:L('The First Throne', 'První trůn'), en:'The First Throne', fear:5,
      sum:L('As the fleet escapes Malaz City, T’amber dies and a poisoned Kalam is taken into the Deadhouse. At the First Throne, Trull and the T’lan Imass resist the Edur attack. Quick Ben helps hold off Icarium, and the Eres’al ends his rampage by putting him to sleep.', 'Flotila unikne z města Malaz, T’jantar umírá a otráveného Kalama odnesou do Domu mrtvých. U Prvního trůnu Trull a T’lan Imass vzdorují útoku Tiste Edur. Rychlej Ben pomáhá zadržet Icaria a Eres’al zastaví jeho řádění, když ho uspí.'),
      focus:{en:['The cost of the escape from Malaz','Trull confronts the Edur war party'],cs:['Cena za útěk z Malazu','Trull se postaví válečné družině Edur']},
      q:{en:['What do Tavore and Trull risk for the people who rely on them?'],cs:['Co Tavore a Trull riskují kvůli lidem, kteří na ně spoléhají?']},
      words:{en:[['Deadhouse','the Azath house in Malaz City'],['First Throne','the seat of command over the T’lan Imass bound to it']],cs:[['Dům mrtvých','azatský dům ve městě Malaz'],['První trůn','sídlo moci nad T’lan Imass, kteří jsou k němu vázáni']]},
      fearnote:L('Deaths at the harbour and the First Throne, including violence against children.', 'Úmrtí v přístavu i u Prvního trůnu, včetně násilí na dětech.'),
      teaser:L('The soldiers await Tavore at the docks while Trull holds his position at the throne.', 'Vojáci čekají na Tavore v přístavu a Trull drží svou pozici u trůnu.'),
      quiz:{en:[['Where is Kalam taken after the escape?',['The Deadhouse','Mock’s Hold','Unta'],0],['Who puts Icarium to sleep?',['The Eres’al','Onrack','Taralack Veed'],0]],cs:[['Kam po útěku odnesou Kalama?',['Do Domu mrtvých','Na Posměvákovu tvrz','Do Unty'],0],['Kdo Icaria uspí?',['Eres’al','Onrack','Taralack Výd'],0]]} }
  ],
  KIDSUM: {
    1:{en:['Leoman sets an old fortress city on fire. Sinn helps a group escape above ground, and Bottle helps the soldiers below the city find a way out.'],cs:['Leoman zapálí staré pevnostní město. Sinn pomůže jedné skupině uniknout po povrchu a Flaška pomáhá vojákům pod městem najít cestu ven.']},
    2:{en:['Paran stops the goddess who is spreading the plague. He takes charge of Dujek’s soldiers after the old general dies.'],cs:['Paran zastaví bohyni, která šíří mor. Když starý generál Dujek zemře, převezme velení nad jeho vojáky.']},
    3:{en:['The fleet battles the Tiste Edur at sea. On Sepik it finds out what the Edur did on the island. Farther west the fleet gains new allies.'],cs:['Flotila na moři bojuje s Tiste Edur. Na Sepiku zjistí, co Edur na ostrově provedli. Dál na západě flotila získá nové spojence.']},
    4:{en:['The fleet is told to sail to Malaz City. Meanwhile a man named Veed takes Mappo’s place beside Icarium and leads him to the Tiste Edur.'],cs:['Flotila dostane rozkaz plout do města Malaz. Mezitím po Icariově boku vystřídá Mappa muž jménem Výd a dovede Icaria k Tiste Edur.']},
    5:{en:['People close to the Empress blame Tavore’s allies for an old disaster. Tavore refuses to hand them over, and Kalam helps her fight her way toward the ships.'],cs:['Lidé kolem císařovny svalí vinu za starou pohromu na Tavořiny spojence. Tavore je odmítne vydat a Kalam jí pomůže probojovat se k lodím.']},
    6:{en:['Tavore’s army escapes. Kalam is badly hurt and taken to a strange house. Far away, Trull and his friends guard the First Throne until the Eres’al puts Icarium to sleep.'],cs:['Tavořina armáda unikne. Těžce zraněného Kalama odnesou do podivného domu. Daleko odtud Trull a jeho přátelé brání První trůn, dokud Eres’al Icaria neuspí.']}
  },
  KIDINTRO: {
    1:{en:['The last rebels in Seven Cities retreat into an old fortress. Look for the different ways the soldiers help one another.'],cs:['Poslední povstalci v Sedmiměstí se stáhnou do staré pevnosti. Všímej si, jak si vojáci navzájem pomáhají.']},
    2:{en:['The story turns to another army. Paran arrives in a city where many people have fallen ill.'],cs:['Příběh se přesouvá k jiné armádě. Paran přijíždí k městu, kde onemocnělo mnoho lidí.']},
    3:{en:['Tavore’s soldiers go to sea and meet a new enemy fleet.'],cs:['Tavořini vojáci vyplují a střetnou se s novou nepřátelskou flotilou.']},
    4:{en:['The ships are approaching imperial waters. Keep an eye on who gives the fleet its next orders.'],cs:['Lodě se blíží k vodám říše. Všímej si, kdo flotile vydá další rozkazy.']},
    5:{en:['Tavore has been called to meet the Empress. Listen for the different accounts of what happened outside Aren.'],cs:['Tavore má předstoupit před císařovnu. Všímej si, kdo jak vypráví o událostech před Arenem.']},
    6:{en:['The book follows two groups in danger, one at the harbour and one guarding a throne.'],cs:['Kniha sleduje dvě skupiny v nebezpečí. Jednu v přístavu, druhou u trůnu.']}
  }
};
