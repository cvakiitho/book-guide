// Deadhouse Gates — volume 2.
var BOOK = {
  meta: {
    slug: 'dum-mrtvych', vol: 2, key: 'malazan_v2',
    mapFrame: { x0: 0.44, x1: 0.65, y0: 0.1, y1: 0.37 }
  },
  ui: {
    en: { brand_sub: 'A reader’s guide to Deadhouse Gates' },
    cs: { brand_sub: 'Průvodce Domem mrtvých' }
  },
  castNames: {
    baudin:L('Baudin', 'Baudín'),
    crokus:L('Crokus', 'Kvítko'),
    duiker:L('Duiker', 'Kalous'),
    karsa:L('Toblakai', 'Toblakai'),
    leoman:L('Leoman', 'Leoman'),
    kalam:L('Kalam', 'Kalam')
  },
  relations: {
    blocks: [
      { min: 4, title: L('The Chain of Dogs', 'Psí řetěz'),
        sub: L('A commander, a historian and a column of civilians with nowhere left to run.', 'Velitel, historik a proud civilistů, kterým už nezbývá kam utéct.'),
        chain: [ {id:'bult'}, {arrow:L('serves under', 'slouží pod velením')}, {id:'coltaine'}, {arrow:L('marches with', 'pochoduje s')}, {id:'duiker'} ] },
      { min: 5, title: L('The Whirlwind’s court', 'Dvůr Smršti'),
        sub: L('A holy war gathers around a prophetess, a book and two very different guardians.', 'Svatá válka se shromažďuje kolem prorokyně, knihy a dvou velmi rozdílných strážců.'),
        chain: [ {id:'kalam'}, {arrow:L('brings the Book into the camp', 'přináší Knihu do tábora')}, {id:'leoman'}, {arrow:L('stands beside', 'stojí po boku')}, {id:'karsa'}, {arrow:L('guards', 'střeží')}, {id:'felisin'} ] },
      { min: 2, title: L('The Path of Hands', 'Cesta rukou'),
        sub: L('Shadow’s priest, an immortal wanderer and the friend who keeps his worst memories asleep.', 'Kněz stínu, nesmrtelný poutník a přítel, který drží jeho nejhorší vzpomínky v spánku.'),
        chain: [ {id:'shadowthrone'}, {arrow:L('commands', 'rozkazuje')}, {id:'pust'}, {arrow:L('shelters', 'ukrývá')}, {id:'icarium'}, {arrow:L('travels with', 'cestuje s')}, {id:'mappo'} ] }
    ],
    ensemble: { min: 1, title: L('The road of slaves', 'Cesta otroků'),
      sub: L('A deposed noble, a handless priest, a historian, a warleader and two soldiers — six ways of being caught in the same war.', 'Svržená šlechtična, kněz bez rukou, historik, válečník a dva vojáci — šest způsobů, jak uvíznout ve stejné válce.'),
      ids: ['felisin','heboric','duiker','coltaine','kalam','fiddler'], cap: L('6 lives on the road of slaves', '6 životů na cestě otroků') }
  },
  loreExtra: [
    { ic: 'lock', min: 1, title: L('Otataral', 'Otataral'), text: L('A rust-red ore that smothers magic wherever it is found. The Empire mines it on Otataral Island with prisoner labour, and its dust is used to suppress some forms of sorcery.', 'Rezavě červená ruda, která všude, kde se nachází, dusí magii. Říše ji těží na Otataralovém ostrově vězeňskou prací a její prach pomáhá tlumit některé druhy magie.') },
    { ic: 'chain', min: 4, title: L('The Chain of Dogs', 'Psí řetěz'), text: L('The name given to Coltaine’s march across Seven Cities to Aren: a moving column of soldiers, refugees and animals, pursued by rebel armies. The refugees set out from Hissar under the protection of the Seventh Army.', 'Jméno dané Coltainovu pochodu přes Sedmiměstí do Arenu: putující proud vojáků, uprchlíků a zvířat, pronásledovaný povstaleckými vojsky. Uprchlíci vycházejí z Hissaru pod ochranou 7. armády.') }
  ],
  timeline: [
    [L('Unta', 'Unta'), L('The cull', 'Čistka'), L('Felisin is among the prisoners sent to the otataral mines.', 'Felisín je mezi vězni poslanými do otataralových dolů.'), 1],
    [L('Hissar', 'Hissar'), L('The Chain of Dogs sets out', 'Psí řetěz vyráží'), L('The Seventh Army escorts refugees out of the port.', 'Sedmá armáda vyvede uprchlíky z přístavu.'), 4],
    [L('Aren', 'Aren'), L('Arrival', 'Příchod'), L('Duiker and the remaining refugees enter Aren. Coltaine and his rearguard are cut off.', 'Kalous s přeživšími uprchlíky vstoupí do Arenu. Coltain a jeho zadní voj zůstanou odříznuti.'), 6],
  ],
  ILLUS: {
    1: { cap: L('Felisin arrives at the otataral mines.', 'Felisín dorazí do otataralových dolů.') },
    2: { cap: L('Kalam carries the Book of the Apocalypse into Sha’ik’s camp.', 'Kalam přinese Knihu apokalypsy do tábora ša’ik.') },
    3: { cap: L('Heboric touches the jade finger in the desert.', 'Heborik se v poušti dotkne nefritového prstu.') },
    4: { cap: L('Coltaine leads soldiers and refugees across Seven Cities.', 'Coltain vede vojáky a uprchlíky přes Sedmiměstí.') },
    5: { cap: L('Felisin takes the place of the fallen prophetess.', 'Felisín zaujme místo padlé prorokyně.') },
    6: { cap: L('Fiddler’s companions reach Tremorlor.', 'Šumařovi společníci dorazí k Tremorloru.') }
  },
  SCENES: { 1:'__SCENE_1__', 2:'__SCENE_2__', 3:'__SCENE_3__', 4:'__SCENE_4__', 5:'__SCENE_5__', 6:'__SCENE_6__' },
  map: {
    title: L('Seven Cities', 'Sedmiměstí'),
    worldStops: ['hissar', 'aren'],
    routeName: L('Chain of Dogs', 'Psí řetěz'),
    route: [
      [79.33,46.15,4], [77.3,49.5,4], [75.6,50.9,4], // Hissar to Bat’rol
      [74.0,54.9,4], [71.2,56.2,4], [70.4,54.8,4], // Sekala Crossing
      [68.8,55.8,4], [66.8,55.5,4], [65.2,56.7,4], // Gelor Ridge
      [63.5,57.6,4], [62.5,59.4,4], [60.5,60.5,5], // Ubaryd to Vathar Crossing
      [59.5,62.1,5], [57.2,63.8,5], [55.6,65.6,5], [55.0,67.2,5], // Dry March to Sanimon
      [55.1,69.5,5], [55.8,71.7,5], [57.7,73.3,5], [58.3,74.8,5], // Tathimon to Dojal
      [57.83,75.8,5], [56.73,76.6,5] // Balahn and the approach to Aren
    ]
  },
  PLACES: [
    { id:'otataral', name:L('Skullcup (Otataral mines)', 'Lebeň (otataralové doly)'), en:'Skullcup (Otataral mines)', x:61.65, y:14, region:[89.9,42.0], ic:'water', gi:1,
      dad:L('A mining settlement on Otataral Island. The Empire sends prisoners here to mine the rust-coloured ore that suppresses magic. The marker is approximate.', 'Havířské město na otataralovém ostrově. Říše sem posílá vězně těžit rezavou rudu, která potlačuje magii. Značka ukazuje přibližnou polohu.'),
      kid:L('An island with dark mines and a prison. People are sent here when the empire wants them to disappear.', 'Ostrov s temnými doly a vězením. Lidé sem jsou posíláni, když je chce říše nechat zmizet.') },
    { id:'ehrlitan', name:L('Ehrlitan', 'Ehrlitan'), en:'Ehrlitan', x:55.15, y:22.5, region:[68.75,36.06], ic:'town', gi:2,
      dad:L('A great caravan city of Seven Cities, with high walls, crowded markets and far too many spies. Fiddler’s company comes here looking for a way into the Holy Desert.', 'Velké karavanní město Sedmiměstí s vysokými hradbami, přeplněnými trhy a až příliš mnoha špehy. Šumařova družina sem přijíždí hledat cestu do Svaté pouště.'),
      kid:L('A busy desert city with high walls and a big market. Travellers can buy supplies here — or lose their secrets.', 'Rušné pouštní město s vysokými hradbami a velkým trhem. Cestovatelé tu nakoupí zásoby — nebo přijdou o tajemství.') },
    { id:'raraku', name:L('Raraku', 'Raraku'), en:'Raraku', x:53.05, y:27.33, region:[61.54,40.54], ic:'sun', gi:3,
      dad:L('The Holy Desert, a waste of salt and dust that was once an inland sea. Sha’ik’s rebellion gathers here, and the Path of Hands calls shapeshifters to the Azath house at its heart.', 'Svatá poušť, pustina soli a prachu, která bývala vnitrozemským mořem. ša’ik tu shromažďuje povstalce a Cesta rukou láká převtělence do nitra pouště.'),
      kid:L('A huge, hot desert that used to be a sea. Strange people and stranger creatures are gathering here.', 'Obrovská horká poušť, která bývala mořem. Shromažďují se tu podivní lidé a ještě podivnější tvorové.') },
    { id:'hissar', name:L('Hissar', 'Hissar'), en:'Hissar', x:56.85, y:24.83, region:[79.33,46.15], ic:'town', gi:4,
      dad:L('A port on the Sahul Sea and the starting point of Coltaine’s march to Aren. The first printed map follows the column through Bat’rol, the Sekala Crossing and Gelor Ridge.', 'Přístav u Sahulského moře a výchozí bod Coltainova pochodu do Arenu. První knižní mapa sleduje kolonu přes Bat’rol, přechod přes Sekalu a Gelorský hřeben.'),
      kid:L('A port where Coltaine begins leading the refugees toward Aren.', 'Přístav, odkud Coltain vede uprchlíky do Arenu.') },
    { id:'aren', name:L('Aren', 'Aren'), en:'Aren', x:50.2, y:29.33, region:[56.73,76.6], ic:'town', gi:5,
      dad:L('High Fist Pormqual commands this coastal stronghold. The second printed map follows Coltaine’s march from the Vathar Crossing through the Dry March, Sanimon, Tathimon, Dojal and Balahn to the approach to Aren.', 'Této pobřežní pevnosti velí vrchní pěst Pormqual. Druhá knižní mapa sleduje Coltainův pochod od přechodu přes Vathar přes Suchý pochod, Sanimon, Tathimon, Dodžal a Balán až k Arenu.'),
      kid:L('A big coastal city with walls and ships. It is supposed to be a safe place, but the people in charge are afraid to help.', 'Velké pobřežní město s hradbami a loděmi. Má to být bezpečné místo, ale lidé ve vedení se bojí pomoci.') },
    { id:'tremorlor', name:L('Tremorlor', 'Tremorlor'), en:'Tremorlor', x:53.05, y:27.33, region:[61.54,40.54], ic:'tower', gi:6,
      dad:L('The Azath house in the Holy Desert. The Path of Hands leads to its gates. Its marker indicates the Raraku region.', 'Dům Azath ve Svaté poušti. K jeho branám vede Cesta rukou. Značka označuje oblast Raraku.'),
      kid:L('A strange living house in the desert with doors that lead to other places. Many dangerous creatures want to get inside.', 'Podivný živý dům v poušti s dveřmi, které vedou jinam. Mnoho nebezpečných tvorů se chce dostat dovnitř.') }
  ],
  CH: [
    { book:1, n:1, title:L('The Otataral Mines', 'Otataralové doly'), en:'The Otataral Mines', fear:4,
      sum:L('During the cull of the nobility in Unta, Felisin Paran is sent to the otataral mines. The former priest Heboric and the prisoner Baudin travel with her. Coltaine takes command of the Seventh Army at Hissar, while Fiddler, Kalam, Crokus and Apsalar arrive in Ehrlitan.', 'Při čistce mezi šlechtou v Untě pošlou Felisín Paran do otataralových dolů. Putují s ní bývalý kněz Heborik a vězeň Baudín. V Hissaru se Coltain ujme 7. armády a do Ehrlitanu mezitím dorazí Šumař, Kalam, Kvítko a Apsalar.'),
      detail:L('Felisin is still a girl when she sees her elder sister Tavore overseeing the purge. On the slave ship and in the camp she learns to count safety in very small things, a ration, a place to sleep, protection for Heboric. Her companions see some of the bargains she makes. They have little idea what each one costs her.', 'Felisín je ještě děvče, když spatří svou starší sestru Tavore, jak dohlíží na čistku. Na otrokářské lodi a později v táboře pro ni bezpečí znamená příděl jídla, místo na spaní nebo ochranu pro Heborika. O některých dohodách, na něž kvůli tomu přistoupí, její druhové vědí. Sotva si však dovedou představit, co ji která stála.'),
      focus:{en:['The cull of the nobility','Felisin’s survival in the mines','Coltaine’s impossible command'],cs:['Čistka mezi šlechtou','Přežití Felisín v dolech','Coltainovo nemožné velení']},
      q:{en:['What does loyalty cost when it is demanded from family?','Can a person stay herself in a place designed to erase her?'],cs:['Co stojí věrnost, když ji někdo požaduje po vlastní rodině?','Může člověk zůstat sám sebou na místě, které ho má vymazat?']},
      words:{en:[['otataral','a rust-coloured ore that deadens magic'],['Adjunct','the Empress’s personal representative and weapon']],cs:[['otataral','rezavě zbarvená ruda, která tlumí magii'],['pobočnice','osobní zástupkyně císařovny']]},
      fearnote:L('Frank about humiliation, brutality and the exploitation of prisoners; the mines are a grim setting.', 'Otevřeně o ponižování, brutalitě a vykořisťování vězňů; doly jsou ponuré prostředí.'),
      teaser:L('The prisoners in Unta are being sent to the otataral mines.', 'Vězně z Unty odvážejí do otataralových dolů.'),
      quiz:{en:[['Who becomes the new Adjunct?',['Tavore Paran','Felisin Paran','Lorn'],0],['Where is Felisin sent?',['The otataral mines','Moon’s Spawn','Darujhistan'],0]],cs:[['Kdo se stane novou pobočnicí?',['Tavore Paran','Felisín Paran','Lorn'],0],['Kam je Felisín poslána?',['Do otataralových dolů','Na Měsíční Kámen','Do Darúdžhistánu'],0]]} },
    { book:1, n:2, title:L('The Holy Desert', 'Svatá poušť'), en:'The Holy Desert', fear:3,
      sum:L('Kalam obtains the Book of the Apocalypse in Ehrlitan and delivers it to Sha’ik in Raraku. Leoman and the Toblakai guard her, but the Red Blades reach the camp and kill her. Icarium and Mappo meet Iskaral Pust as the Path of Hands draws shapeshifters into the desert.', 'Kalam získá v Ehrlitanu Knihu apokalypsy a donese ji ša’ik na Raraku. Střeží ji Leoman a Toblakai, ale do tábora se dostanou Rudé čepele a zabijí ji. Icarium s Mappem se setkají s Iskaralem Pustem a Cesta rukou přitahuje do pouště převtělence i d’ivers.'),
      detail:L('Mappo remembers the places he and Icarium have visited together. Icarium must ask about them again, sometimes standing in front of something he made with his own hands. Each answer costs Mappo a decision about how much to tell the friend who trusts him to remember for them both.', 'Mappo si pamatuje místa, kterými s Icariem prošel. Icarium se na ně musí ptát znovu, někdy i ve chvíli, kdy stojí před něčím, co kdysi vlastníma rukama vyrobil. Pokaždé musí Mappo zvážit, kolik toho může říct příteli, který spoléhá na jeho paměť za oba.'),
      focus:{en:['Sha’ik’s camp as a court of knives','Icarium’s forgotten violence','Pust’s holy foolishness'],cs:['Prorokynin tábor jako dvůr nožů','Icariovo zapomenuté násilí','Pustova svatá bláznivost']},
      q:{en:['Who is really in charge of the Whirlwind?','What is Pust hiding behind his madness?'],cs:['Kdo vlastně vede Smršť?','Co Pust skrývá za svým šílenstvím?']},
      words:{en:[['Soletaken','a shapeshifter with a single animal form'],['D’ivers','a shapeshifter who splits into many bodies']],cs:[['převtělenec','měňavec s jedinou zvířecí podobou'],['D’ivers','měňavec, který se rozdělí do mnoha těl']]},
      fearnote:L('Threat, madness and shapeshifting horror rather than open violence; an eerie, unsettling chapter.', 'Hrozba, šílenství a hrůza z měňavců spíš než otevřené násilí; podivná, znepokojivá kapitola.'),
      teaser:L('A book of the end of the world arrives in a camp full of people who want to start one.', 'Kniha konce světa dorazí do tábora lidí, kteří chtějí jeden začít.'),
      quiz:{en:[['Who guards Sha’ik?',['Leoman and the Toblakai','Fiddler and Crokus','Coltaine and Duiker'],0],['Who shelters Icarium and Mappo?',['Iskaral Pust','Kamist Reloe','Pormqual'],0]],cs:[['Kdo střeží ša’ik?',['Leoman a Toblakai','Šumař a Kvítko','Coltain a Kalous'],0],['Kdo ukryje Icaria a Mappa?',['Iskaral Pust','Kamist Reloe','Pormqual'],0]]} },
    { book:1, n:3, title:L('The Path of Hands', 'Cesta rukou'), en:'The Path of Hands', fear:5,
      sum:L('Felisin, Heboric and Baudin escape the mines. In the desert, Heboric touches a giant finger made of jade. Kulp finds the fugitives and they board the Silanda with Gesler, Stormy and Truth. The ship carries them through magical realms, and events on the voyage have lasting consequences for those aboard.', 'Felisín, Heborik a Baudín uniknou z dolů. Heborik se v poušti dotkne obrovského nefritového prstu. Kulp najde uprchlíky a spolu s Geslerem, Bouřlivákem a Pravdou se nalodí na Silandu. Loď je veze kouzelnými říšemi a plavba má pro její cestující trvalé následky.'),
      detail:L('Their own boat is sinking when the Silanda comes within reach. Once aboard, the fugitives discover headless oarsmen who can still row. Escape now depends on keeping this uncanny vessel moving and on Kulp finding a way out of a warren whose waters obey different rules from the sea they know.', 'Když zahlédnou Silandu, jejich vlastní loď se už potápí. Na palubě najdou veslaře, kteří přišli o hlavu, a přesto dokážou veslovat. Uprchlíci potřebují udržet tu podivnou loď v pohybu a spoléhat na to, že Kulp najde cestu z chodby, v níž se ani voda nechová tak jako na moři.'),
      focus:{en:['Heboric and the jade finger','The Silanda as a passage between warrens','The others aboard the ship'],cs:['Heborik a nefritový prst','Silanda a plavba chodbami','Další cestující na lodi']},
      q:{en:['Is escape the same thing as freedom?','What happens when a god is forced into the mortal world?'],cs:['Je útěk totéž co svoboda?','Co se stane, když je bůh násilím vtažen do smrtelného světa?']},
      words:{en:[['jade','the green stone of the giant finger in the desert'],['warren','a hidden realm of magic used for travel and battle']],cs:[['nefrit','zelený kámen, z něhož je prst v poušti'],['chodba','skrytá říše magie sloužící k cestování i boji']]},
      fearnote:L('A prison mutiny, a violent escape and a god forced into flesh. Several disturbing images and deaths.', 'Vzpoura ve vězení, násilný útěk a bůh vtlačený do těla. Několik znepokojivých obrazů a úmrtí.'),
      teaser:L('The fugitives find something strange in the desert.', 'Uprchlíci v poušti narazí na něco podivného.'),
      quiz:{en:[['What does Heboric touch?',['A giant jade finger','A Tiste Edur sword','A stone throne'],0],['Which ship do the fugitives board?',['The Silanda','The Long Night','The Ragstopper'],0]],cs:[['Čeho se Heborik dotkne?',['Obrovského nefritového prstu','Tiste Edurského meče','Kamenného trůnu'],0],['Na kterou loď nastoupí uprchlíci?',['Silanda','Dlouhá noc','Ragstopper'],0]]} },
    { book:2, n:1, title:L('The Chain of Dogs', 'Psí řetěz'), en:'The Chain of Dogs', fear:5,
      sum:L('Coltaine leads the Seventh and its refugees out of Hissar. The army keeps the column moving through a series of battles, including at the Sekala Crossing and Gelor Ridge. More refugees join from Ubaryd, and the column heads for Aren. The imperial historian Duiker witnesses the march.', 'Coltain vyvede z Hissaru 7. armádu a její uprchlíky. Vojsko udržuje kolonu v pohybu přes řadu bitev, mimo jiné u přechodu přes Sekalu a na Gelorském hřebeni. Přidávají se další uprchlíci z Ubarydu a kolona míří k Arenu. Pochod sleduje říšský historik Kalous.'),
      detail:L('Duiker rides up and down a column that looks very different depending on where he stands. At the front there is a crossing to secure. Farther back, a family has to get its cart and children to that crossing before the soldiers give way. The historian comes to know what an order costs by travelling the distance between the two.', 'Kalous projíždí kolonou a z každého místa vidí trochu jiný pochod. Vpředu je třeba zajistit přechod přes řeku. Vzadu se k němu musí rodina dostat s vozem a dětmi dřív, než vojáci ustoupí. Co pro lidi znamená jediný rozkaz, poznává historik cestou od jedněch k druhým.'),
      focus:{en:['Leadership as a burden, not a glory','The historian as witness','Victory measured in survivors'],cs:['Vedení jako břemeno, ne sláva','Historik jako svědek','Vítězství měřené počtem přeživších']},
      q:{en:['How many can one leader spend to save the rest?','What is history for when it cannot save anyone?'],cs:['Kolik může jeden vůdce vydat, aby zachránil ostatní?','K čemu je historie, když nikoho nemůže zachránit?']},
      words:{en:[['Chain of Dogs','the name given to Coltaine’s march and its line of refugees'],['Fist','a senior Malazan field commander']],cs:[['Psí řetěz','jméno pro Coltainův pochod a jeho proud uprchlíků'],['pěst','vysoký malazský polní velitel']]},
      fearnote:L('Large-scale battle, civilian suffering and many deaths, including children. The emotional weight is heavy.', 'Velká bitva, utrpení civilistů a mnoho úmrtí včetně dětí. Emočně velmi těžké.'),
      teaser:L('An army with no home marches to save people with no army.', 'Armáda bez domova pochoduje zachránit lidi bez armády.'),
      quiz:{en:[['Who commands the 7th Army?',['Coltaine','Pormqual','Kamist Reloe'],0],['Where does Coltaine’s march start?',['Hissar','Aren','Ehrlitan'],0]],cs:[['Kdo velí 7. armádě?',['Coltain','Pormqual','Kamist Reloe'],0],['Kde začíná Coltainův pochod?',['Hissar','Aren','Ehrlitan'],0]]} },
    { book:2, n:2, title:L('The Whirlwind', 'Smršť'), en:'The Whirlwind', fear:4,
      sum:L('After losing Baudin, Felisin encounters Leoman and the Toblakai and takes the dead prophetess’s place. On the road to Aren, Coltaine fights at the Vathar Crossing and keeps the column moving across the Dry March. Pormqual keeps the Aren garrison in the city while the army approaches.', 'Po ztrátě Baudína se Felisín setká s Leomanem a Toblakaiem a zaujme místo mrtvé prorokyně. Na cestě do Arenu bojuje Coltain u přechodu přes Vathar a vede kolonu dál přes Suchý pochod. Pormqual drží arenskou posádku ve městě, zatímco se armáda blíží.'),
      detail:L('Yellow butterflies gather at the Vathar in such numbers that they cover the ground. When the wounded warlock Sormo sinks into the river, Duiker sees butterflies settle where his hand broke the surface. For a moment even the people fighting at the ford stop to watch. The historian believes the insects have come for Sormo’s soul.', 'U Vatharu se slétnou žlutí motýli v takových hejnech, že pod nimi mizí zem. Když se zraněný zaklínač Sormo ponoří do řeky, Kalous vidí, jak motýli usedají tam, kde z vody vyčnívala jeho ruka. Na chvíli se zastaví i lidé bojující u brodu. Historik věří, že si motýli přišli pro Sormovu duši.'),
      focus:{en:['Felisin’s coronation as a kind of death','The Whirlwind’s need for a living symbol','The garrison remains behind the walls'],cs:['Felisínina korunovace jako druh smrti','Potřeba nového symbolu pro Smršť','Posádka zůstává za hradbami']},
      q:{en:['Is the new Sha’ik a leader, a prisoner, or a mask?','Who is to blame when help is refused?'],cs:['Je nová ša’ik vůdkyně, vězeň, nebo maska?','Kdo nese vinu, když je pomoc odmítnuta?']},
      words:{en:[['Sha’ik','the title of the Whirlwind’s prophetess'],['Whirlwind','the holy war of the Seven Cities against the Empire']],cs:[['ša’ik','titul prorokyně Smršti'],['Smršť','svatá válka Sedmiměstí proti říši']]},
      fearnote:L('Assassination, religious fervour and the deaths of named characters; the betrayal is cruel rather than gory.', 'Atentát, náboženské běsnění a smrt konkrétních postav; zrada je krutá spíš než krvavá.'),
      teaser:L('The rebellion looks for a new prophetess.', 'Povstání hledá novou prorokyni.'),
      quiz:{en:[['Who killed the first Sha’ik after Kalam delivered the book?',['The Red Blades','Felisin','Kalam'],0],['Who becomes the new Sha’ik?',['Felisin','Heboric','Apsalar'],0]],cs:[['Kdo zabije první ša’ik po doručení knihy?',['Rudé čepele','Felisín','Kalam'],0],['Kdo se stane novou ša’ik?',['Felisín','Heborik','Apsalar'],0]]} },
    { book:2, n:3, title:L('The Deadhouse Gates', 'Brány Domu mrtvých'), en:'The Deadhouse Gates', fear:5,
      sum:L('Duiker brings the surviving refugees into Aren with help from Blistig’s soldiers. Coltaine’s rearguard falls outside the city. The rebels crucify Coltaine and the archer Squint ends his suffering. Pormqual then surrenders a separate army, and the rebels crucify its soldiers and Duiker. In the epilogue, Baruk’s servants recover the historian’s body. Fiddler’s companions reach Tremorlor, where the paths of the travellers diverge.', 'Kalous dovede přeživší uprchlíky s pomocí Blistigových vojáků do Arenu. Coltainův zadní voj padne před městem. Povstalci Coltainovi přichystají kříž a lučištník Očko ukončí jeho utrpení. Pormqual pak vydá povstalcům další vojsko. Ti ukřižují jeho vojáky i Kalouse a v epilogu historikovo tělo odnesou Barúkovi služebníci. Šumařova družina dorazí k Tremorloru, kde se cesty poutníků rozejdou.'),
      detail:L('The small bottle Duiker carries was meant for Coltaine. Before they part, the commander gives it to the historian and sends him ahead with the refugees. When Baruk’s servants bend over a body at the end, that exchange explains why these two have come looking for one particular man among so many dead.', 'Lahvička, kterou má Kalous u sebe, byla určena Coltainovi. Než se rozdělí, velitel ji dá historikovi a pošle ho napřed s uprchlíky. Když se na konci Barúkovi služebníci skloní k jednomu tělu, právě tahle výměna vysvětluje, proč mezi tolika mrtvými hledají konkrétního muže.'),
      focus:{en:['Coltaine’s death as the Empire’s indictment','Duiker as the last witness','The Azath gates as escape and loss'],cs:['Coltainova smrt jako obžaloba říše','Kalous jako poslední svědek','Brány Azathu jako útěk i ztráta']},
      q:{en:['What remains when a victory is only survival?','Who carries the story after the witnesses are gone?'],cs:['Co zůstane, když je vítězství jen přežití?','Kdo nese příběh, když svědkové zmizí?']},
      words:{en:[['Deadhouse','the Azath house in Malaz City'],['Tremorlor','the Azath house of the Holy Desert']],cs:[['Dům mrtvých','Dům Azath ve městě Malaz'],['Tremorlor','Dům Azath ve Svaté poušti']]},
      fearnote:L('The massacre at Aren and Coltaine’s death are among the grimmest scenes in the series; grief and brutality dominate the chapter.', 'Masakr u Arenu a Coltainova smrt patří k nejdrsnějším scénám série; kapitole dominuje žal a brutalita.'),
      teaser:L('The gates open, the dogs are done running, and the desert keeps its dead.', 'Brány se otevřou, psi přestanou běžet a poušť si podrží své mrtvé.'),
      quiz:{en:[['Who reaches safety inside Aren?',['The surviving refugees','Coltaine and the rearguard','The rebel army'],0],['Which house does Fiddler’s group reach?',['Tremorlor','The Azath in Darujhistan','Moon’s Spawn'],0]],cs:[['Kdo najde bezpečí v Arenu?',['Přeživší uprchlíci','Coltain se zadním vojem','Vojsko povstalců'],0],['Ke kterému domu dorazí Šumařova skupina?',['Tremorlor','Azath v Darúdžhistánu','Měsíční Kámen'],0]]} }
  ],
  KIDSUM: {
    1:{en:['Felisin is sent to an island prison, where she meets Heboric and Baudin. Across the sea, Coltaine takes command of an army in Hissar.'],cs:['Felisín pošlou do vězení na ostrově, kde se seznámí s Heborikem a Baudínem. Na druhé straně moře dostane Coltain v Hissaru velení nad armádou.']},
    2:{en:['Kalam brings a book to the prophetess. The Red Blades attack her camp. Meanwhile, two travellers meet a priest in the desert, where creatures that can change shape are gathering.'],cs:['Kalam přinese knihu prorokyni. Na její tábor zaútočí Rudé čepele. Mezitím dva poutníci potkají v poušti kněze a scházejí se tam tvorové, kteří umějí měnit podobu.']},
    3:{en:['Felisin and her companions escape. In the desert, Heboric touches a giant green stone finger. The fugitives later board a strange ship with a group of soldiers.'],cs:['Felisín a její společníci uprchnou. V poušti se Heborik dotkne obrovského zeleného kamenného prstu. Uprchlíci později nastoupí na podivnou loď se skupinou vojáků.']},
    4:{en:['Coltaine leads soldiers and refugees out of Hissar. They have to fight their way across a river. The historian Duiker follows them and records what happens.'],cs:['Coltain vyvede vojáky a uprchlíky z Hissaru. Musejí se probojovat přes řeku. Historik Kalous je doprovází a zaznamenává, co se děje.']},
    5:{en:['Felisin becomes the new prophetess. The refugees are getting closer to Aren, where the man in charge keeps his soldiers inside the city.'],cs:['Felisín se stane novou prorokyní. Uprchlíci se blíží k Arenu, jehož velitel drží své vojáky uvnitř města.']},
    6:{en:['Many refugees reach safety inside Aren. Coltaine and his soldiers die outside the city, and Duiker is killed after a second army surrenders. Elsewhere, Fiddler’s group reaches a living house whose doors lead to different places.'],cs:['Mnoho uprchlíků najde bezpečí za hradbami Arenu. Coltain a jeho vojáci před městem zahynou a Kalous je zabit po kapitulaci druhého vojska. Šumařova skupina mezitím dorazí k živému domu, jehož dveře vedou na různá místa.']}
  },
  KIDINTRO: {
    1:{en:['Last time, the Malazan Empire won a city but lost some of its best soldiers, and a new war began in Seven Cities.','Now the story moves to that war. You will meet a girl sent to a prison island, a general leading refugees, and four travellers carrying a dangerous book.'],
       cs:['Minule Malazská říše dobyla město, ale ztratila část svých nejlepších vojáků, a v Sedmiměstí začala nová válka.','Teď se příběh přesune právě tam. Potkáš dívku poslanou na ostrovní vězení, generála, který vede uprchlíky, a čtyři cestovatele s nebezpečnou knihou.']},
    2:{en:['Last time, Felisin was sent to the otataral mines, Coltaine took command of the refugees, and four friends reached Ehrlitan.','Now Kalam enters the Holy Desert with a book that could start a holy war. Keep an eye on the quiet giant and his friend — and on a priest who seems to be laughing at everyone.'],
       cs:['Minule byla Felisín poslána do otataralových dolů, Coltain převzal velení nad uprchlíky a čtyři přátelé dorazili do Ehrlitanu.','Teď Kalam vstoupí do Svaté pouště s knihou, která může rozpoutat svatou válku. Sleduj tichého obra a jeho přítele — a kněze, který se zdá, že se všem směje.']},
    3:{en:['Last time, Kalam reached the prophetess, and Icarium and Mappo found shelter with the strange priest Pust.','Now the prison island rises in revolt. The escape will cost blood, and a strange piece of stone awaits the fugitives in the desert. This is the chapter where the magic gets very big.'],
       cs:['Minule se Kalam dostal k prorokyni a Icarium s Mappem našli útočiště u podivného kněze Pusta.','Teď se vězeňský ostrov bouří. Útěk bude stát krev a v poušti čeká uprchlíky podivný kus kamene. V téhle kapitole se magie pořádně rozjede.']},
    4:{en:['Last time, Felisin’s group escaped the mines and Heboric touched something that should not have been touched.','Now the story follows Coltaine’s march. It is a long, hard journey with battles and little rest. Watch how a leader takes care of ordinary people — and what it costs him.'],
       cs:['Minule Felisínina skupina unikla z dolů a Heboric se dotkl něčeho, čeho se dotknout neměl.','Teď budeme sledovat Coltainův pochod. Je to dlouhá těžká cesta s bitvami a málo odpočinku. Sleduj, jak se vůdce stará o obyčejné lidi — a co ho to stojí.']},
    5:{en:['The refugees have left Hissar and are heading for Aren under Coltaine’s protection.','Now the holy war chooses a new leader, and a city that could help decides not to. This chapter is about power changing hands — and about a betrayal that cannot be undone.'],
       cs:['Uprchlíci opustili Hissar a pod Coltainovou ochranou míří k Arenu.','Teď si svatá válka vybere novou vůdkyni a město, které by mohlo pomoci, se rozhodne nepomoci. Tahle kapitola je o tom, jak se mění moc — a o zradě, kterou už nejde vzít zpět.']},
    6:{en:['Felisin has become the new prophetess, and the refugee column is approaching Aren.','Now comes the end of the march. It is the saddest part of the book, so read it slowly and talk about it afterwards. The last pages also open a door to the next volume.'],
       cs:['Felisín se stala novou prorokyní a kolona uprchlíků se blíží k Arenu.','Teď přichází konec pochodu. Je to nejsmutnější část knihy, tak si ji čtěte pomalu a potom si o ní popovídejte. Poslední stránky také otevírají dveře do dalšího dílu.']}
  }
};
