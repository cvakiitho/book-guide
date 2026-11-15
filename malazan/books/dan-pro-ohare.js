// Toll the Hounds — volume 8.
var BOOK = {
  meta: {
    slug: 'dan-pro-ohare', vol: 8, key: 'malazan_v8',
    mapFrame: { x0: 0.63, x1: 0.77, y0: 0.22, y1: 0.43 }
  },
  ui: {
    en: { brand_sub: 'A reader’s guide to Toll the Hounds', info_names: 'Czech names in this volume follow Dana Krejčová’s Talpress translation.' },
    cs: { brand_sub: 'Průvodce Daní pro ohaře', info_names: 'Česká jména v tomto svazku vycházejí z překladu Dany Krejčové pro Talpress.' }
  },
  castNames: { crokus: L('Cutter', 'Řezník') },
  relations: {
    blocks: [
      { min: 1, title: L('K’rul’s Bar', 'K’rulův bar'), sub: L('Retired Bridgeburners keep a bar in the former temple.', 'Vysloužilí Paliči mostů vedou bar v bývalém chrámu.'),
        chain: [{id:'picker'}, {arrow:L('runs the bar with', 'vede bar s')}, {id:'blend'}, {arrow:L('runs the bar with', 'vede bar s')}, {id:'antsy'}] },
      { min: 2, title: L('The Great Barrow', 'Velká mohyla'), sub: L('Salind serves the Redeemer and Spinnock befriends the man who keeps watch at the barrow.', 'Salind slouží Vykupiteli a Spinnok se spřátelí s mužem, který drží stráž u mohyly.'),
        chain: [{id:'spinnock'}, {arrow:L('befriends', 'spřátelí se s')}, {id:'seerd'}, {arrow:L('defends', 'brání')}, {id:'itkovian'}, {arrow:L('served by', 'slouží mu')}, {id:'salind'}] },
      { min: 4, title: L('Harllo’s family', 'Harllova rodina'), sub: L('Murillio searches for the missing boy, who is working in the mine.', 'Murillio pátrá po pohřešovaném chlapci, který pracuje v dole.'),
        chain: [{id:'murillio'}, {arrow:L('looks for', 'hledá')}, {id:'harllo'}, {arrow:L('son of', 'syn')}, {id:'stonny'}] },
      { min: 5, title: L('Two swordsmen in Darujhistan', 'Dva šermíři v Darúdžhistánu'), sub: L('Traveller comes for Hood and finds Rake standing in his way.', 'Poutník přichází pro mistra Kápě, ale do cesty se mu postaví Anomander Dlouhý vlas.'),
        chain: [{id:'traveller'}, {arrow:L('fights', 'bojuje s')}, {id:'rake'}, {arrow:L('sends into Dragnipur', 'pošle do Dragnipúru')}, {id:'hood'}] }
    ],
    ensemble: { min: 1, title: L('Darujhistan after the war', 'Darúdžhistán po válce'), sub: L('Several lives brought together in the city.', 'Několik osudů, které se ve městě protnou.'),
      ids: ['kruppe','crokus','barathol','picker','stonny','harllo'], cap: L('Six people in Darujhistan', 'Šest lidí v Darúdžhistánu') }
  },
  loreExtra: [
    { ic: 'chain', min: 1, title: L('Dragnipur', 'Dragnipúr'), text: L('Draconus forged Rake’s sword. Those slain by it find themselves chained to a wagon within the sword.', 'Draconus ukoval Anomanderův meč. Ti, které meč zabije, se v něm ocitnou připoutaní k vozu.') },
    { ic: 'ascendant', min: 2, title: L('The Redeemer', 'Vykupitel'), text: L('Pilgrims gather at Itkovian’s barrow outside Black Coral. They remember how he took on the grief of the T’lan Imass in the Pannion War.', 'U Itkovianovy mohyly za Černým Korálem se scházejí poutníci. Připomínají si, jak za pannionské války na sebe vzal žal T’lan Imassů.') },
    { ic: 'moon', min: 6, title: L('The Gate of Darkness', 'Brána do Kurald Galain'), text: L('The wagon in Dragnipur carries the Gate of Darkness. Rake’s sacrifice returns the Gate to Black Coral before Brood breaks the sword.', 'Vůz v Dragnipúru veze bránu do Kurald Galain. Anomanderova oběť ji vrátí do Černého Korálu, než Chmur meč rozbije.') }
  ],
  timeline: [
    [L('After the Pannion War', 'Po pannionské válce'), L('Black Coral', 'Černý Korál'), L('The Tiste Andii settle in Coral and pilgrims visit Itkovian’s barrow.', 'Tiste Andii se usadí v Korálu a k Itkovianově mohyle přicházejí poutníci.'), 1],
    [L('Several years later', 'O několik let později'), L('Return to Darujhistan', 'Návrat do Darúdžhistánu'), L('Cutter returns to the city where the retired Bridgeburners run a bar.', 'Řezník se vrátí do města, kde vysloužilí Paliči mostů vedou bar.'), 1],
    [L('Across Genabackis', 'Na Genabakis'), L('Travellers approach the cities', 'Poutníci se blíží k městům'), L('Nimander’s group heads for Black Coral, while Karsa, Samar Dev and Traveller travel toward Darujhistan.', 'Nimanderova skupina míří k Černému Korálu, zatímco Karsa, Samar Dev a Poutník putují k Darúdžhistánu.'), 3]
  ],
  ILLUS: {
    1:{ cap:L('The retired Bridgeburners keep a bar in a former temple.', 'Vysloužilí Paliči mostů vedou bar v bývalém chrámu.') },
    2:{ cap:L('Seerdomin walks from Black Coral to the Great Barrow.', 'Věštdomin jde z Černého Korálu k Velké mohyle.') },
    3:{ cap:L('Karsa and Samar Dev meet Traveller on the Plain of Lamatath.', 'Karsa a Samar Dev potkají na Lamatathské pláni Poutníka.') },
    4:{ cap:L('Murillio searches for Harllo at the mine.', 'Murillio hledá Harlla v dole.') },
    5:{ cap:L('Traveller and Rake face each other in Darujhistan.', 'Poutník a Anomander Dlouhý vlas stanou proti sobě v Darúdžhistánu.') },
    6:{ cap:L('The wagon carries its burden through Dragnipur.', 'Vůz veze svůj náklad Dragnipúrem.') }
  },
  SCENES: { 1:'__SCENE_1__', 2:'__SCENE_2__', 3:'__SCENE_3__', 4:'__SCENE_4__', 5:'__SCENE_5__', 6:'__SCENE_6__' },
  map: {
    title: L('Darujhistan and Black Coral', 'Darúdžhistán a Černý Korál'),
    worldStops: [], route: []
  },
  PLACES: [
    { id:'kruls-bar', name:L('K’rul’s Bar', 'K’rulův bar'), en:'K’rul’s Bar', x:69.7, y:27.75, region:[50.29,42.95], ic:'town', gi:1,
      dad:L('The retired Bridgeburners run a bar in K’rul’s former temple on the hill shown in the city plan.', 'Vysloužilí Paliči mostů vedou bar v bývalém K’rulově chrámu na pahorku vyznačeném v plánu města.'),
      kid:L('A bar run by retired soldiers in an old temple.', 'Bar ve starém chrámu, který vedou vysloužilí vojáci.') },
    { id:'phoenix', name:L('The Phoenix Inn', 'Hostinec U Fénixe'), en:'The Phoenix Inn', x:69.7, y:27.75, region:[34.9,58.33], ic:'town', gi:1,
      dad:L('The inn run by Meese, numbered 4 on the printed map. Cutter and his old friends know it well.', 'Hostinec, který vede Meese. Na knižní mapě má číslo 4. Řezník a jeho staří přátelé ho dobře znají.'),
      kid:L('Meese’s inn and a meeting place for Cutter and his friends.', 'Hostinec Meese, kde se schází Řezník s přáteli.') },
    { id:'blackcoral8', name:L('Black Coral', 'Černý Korál'), en:'Black Coral', x:71.5, y:33.58, region:[88.27,61.86], ic:'tower', gi:2,
      dad:L('The Tiste Andii’s city on Coral Bay. The Great Barrow lies outside its northern wall.', 'Město Tiste Andii u Korálového zálivu. Za jeho severní hradbou leží Velká mohyla.'),
      kid:L('The city where the Tiste Andii live after the war.', 'Město, kde Tiste Andii žijí po válce.') },
    { id:'barrow', name:L('The Great Barrow', 'Velká mohyla'), en:'The Great Barrow', x:null, y:null, region:[91.73,33.65], ic:'mountain', gi:2,
      dad:L('Itkovian’s burial mound at the end of the pilgrims’ track north of Black Coral.', 'Itkovianova mohyla na konci poutnické cesty severně od Černého Korálu.'),
      kid:L('Pilgrims walk from the city to this mound to remember Itkovian.', 'Poutníci sem chodí z města, aby si připomněli Itkoviana.') },
    { id:'lamatath', name:L('The Plain of Lamatath', 'Lamatathská pláň'), en:'The Plain of Lamatath', x:69.7, y:37.83, region:null, ic:'forest', gi:3,
      dad:L('A plain in southern Genabackis where Karsa and Samar Dev meet Traveller. The atlas marker represents the plain.', 'Pláň na jihu Genabakis, kde Karsa a Samar Dev potkají Poutníka. Značka v atlasu označuje oblast pláně.'),
      kid:L('Open country where Karsa and Samar Dev meet a swordsman.', 'Otevřená krajina, kde Karsa a Samar Dev potkají šermíře.') },
    { id:'dragnipur', name:L('Inside Dragnipur', 'Uvnitř Dragnipúru'), en:'Inside Dragnipur', x:null, y:null, region:null, ic:'chain', gi:5,
      dad:L('A realm inside Rake’s sword. The souls of those killed by it drag a wagon away from Chaos.', 'Říše uvnitř Anomanderova meče. Duše těch, které meč zabil, v ní táhnou vůz před Chaosem.'),
      kid:L('A world inside a sword, where its prisoners have to pull a heavy wagon.', 'Svět uvnitř meče, kde vězni musejí táhnout těžký vůz.') },
    { id:'gate', name:L('The Gate of Darkness', 'Brána do Kurald Galain'), en:'The Gate of Darkness', x:null, y:null, region:null, ic:'moon', gi:6,
      dad:L('The ancient gate the wagon carries. It returns to Black Coral before Dragnipur breaks.', 'Prastará brána, kterou veze vůz. Vrátí se do Černého Korálu, než se Dragnipúr rozbije.'),
      kid:L('The gate the prisoners are pulling to safety.', 'Brána, kterou se vězni snaží odtáhnout do bezpečí.') },
    { id:'baruk', name:L('Baruk’s Estate', 'Barúkův palác'), en:'Baruk’s Estate', x:69.7, y:27.75, region:[45.96,52.24], ic:'tower', gi:6,
      dad:L('The city plan marks Baruk’s house as number 11. The witnesses gather here when Brood breaks Dragnipur.', 'Plán města označuje Barúkův palác číslem 11. Svědci se tu sejdou, když Chmur rozbije Dragnipúr.'),
      kid:L('Baruk’s home, where people gather after the fighting.', 'Barúkovo sídlo, kde se po bojích sejdou svědci.') }
  ],
  CH: [
    { book:1, n:1, title:L('Return to Darujhistan', 'Návrat do Darúdžhistánu'), en:'Return to Darujhistan', fear:3,
      sum:L('Cutter returns to Darujhistan with Scillara, Barathol and Chaur. Kruppe tells much of the city’s story. The retired Bridgeburners run K’rul’s Bar, while Meese keeps the Phoenix Inn. Assassins target the Bridgeburners, and rival councillors manoeuvre for power.', 'Řezník se vrací do Darúdžhistánu se Scillarou, Baratholem a Chaurem. Značnou část příběhu města vypráví Kruppe. Vysloužilí Paliči mostů vedou K’rulův bar a Meese hostinec U Fénixe. Po Paličích jdou asasíni a soupeřící radní usilují o moc.'),
      focus:{en:['Cutter’s return to his old city','Kruppe as a narrator'],cs:['Řezníkův návrat do rodného města','Kruppe jako vypravěč']},
      q:{en:['How has the city changed since Cutter left it as Crokus?'],cs:['Jak se město změnilo od doby, kdy je Řezník opustil ještě jako Kvítko?']},
      words:{en:[['K’rul’s Bar','the tavern run by surviving Bridgeburners']],cs:[['K’rulův bar','podnik vysloužilých Paličů mostů']]},
      fearnote:L('Assassins, a violent ambush and political threats.', 'Asasíni, násilné přepadení a politické výhrůžky.'),
      teaser:L('Cutter returns to the city where he grew up.', 'Řezník se vrací do města, kde vyrostl.'),
      quiz:{en:[['What name does Crokus use now?',['Cutter','Toc','Traveller'],0],['Where do the retired Bridgeburners work?',['K’rul’s Bar','Mock’s Hold','The Azath'],0]],cs:[['Jaké jméno teď používá Kvítko?',['Řezník','Toc','Poutník'],0],['Kde pracují vysloužilí Paliči mostů?',['V K’rulově baru','Na Posměvákově tvrzi','V Azathu'],0]]} },
    { book:1, n:2, title:L('The Great Barrow', 'Velká mohyla'), en:'The Great Barrow', fear:3,
      sum:L('Pilgrims come to Itkovian’s Great Barrow near Black Coral. Seerdomin keeps vigil there and befriends Spinnock Durav. Gradithan and his followers spread a devotion to the Dying God. Salind, a priestess of the Redeemer, is caught between the two cults.', 'K Itkovianově Velké mohyle u Černého Korálu přicházejí poutníci. Věštdomin tam drží stráž a spřátelí se se Spinnokem Duravem. Gradithan a jeho stoupenci šíří uctívání umírajícího boha. Salind, kněžka Vykupitele, se ocitne mezi oběma kulty.'),
      focus:{en:['Itkovian’s memory among the pilgrims','The friendship of Spinnock and Seerdomin'],cs:['Itkovianova památka mezi poutníky','Přátelství Spinnoka a Věštdomina']},
      q:{en:['What brings people to the Redeemer’s barrow?'],cs:['Co přivádí lidi k mohyle Vykupitele?']},
      words:{en:[['barrow','a mound raised over a burial']],cs:[['mohyla','násep navršený nad hrobem']]},
      fearnote:L('Coercion among worshippers and a growing supernatural threat.', 'Nátlak mezi věřícími a sílící nadpřirozená hrozba.'),
      teaser:L('The pilgrims follow a road out of Black Coral and toward the barrow.', 'Poutníci vycházejí z Černého Korálu a míří k mohyle.'),
      quiz:{en:[['Who is buried in the Great Barrow?',['Itkovian','Rake','Trull'],0],['Who keeps watch at the barrow?',['Seerdomin','Cutter','Kallor'],0]],cs:[['Kdo je pohřbený ve Velké mohyle?',['Itkovian','Anomander Dlouhý vlas','Trull'],0],['Kdo hlídá u mohyly?',['Věštdomin','Řezník','Kallor'],0]]} },
    { book:1, n:3, title:L('The travellers', 'Poutníci'), en:'The travellers', fear:3,
      sum:L('Karsa Orlong and Samar Dev travel across the Plain of Lamatath and meet Traveller. Elsewhere, Nimander’s Tiste Andii follow Clip toward Black Coral. At Bastion they encounter the worship of the Dying God, and Clip falls under the god’s influence.', 'Karsa Orlong a Samar Dev přecházejí Lamatathskou pláň a potkají Poutníka. Jinde vede Stříž Nimanderovy Tiste Andii k Černému Korálu. V Bastionu narazí na uctívání umírajícího boha a Stříž se dostane pod jeho vliv.'),
      focus:{en:['Why Traveller is going to Darujhistan','The dangers facing Nimander’s group'],cs:['Proč Poutník míří do Darúdžhistánu','Nebezpečí, kterým čelí Nimanderova skupina']},
      q:{en:['What makes Nimander stay with the group when the journey gets harder?'],cs:['Co Nimandera drží u skupiny, když cesta začne být těžší?']},
      words:{en:[['Genabackis','the continent of Darujhistan and Black Coral']],cs:[['Genabakis','světadíl, na kterém leží Darúdžhistán a Černý Korál']]},
      fearnote:L('Tense encounters and the effects of a coercive cult.', 'Napjatá setkání a následky nátlaku v kultu.'),
      teaser:L('Two groups travel through Genabackis toward different cities.', 'Dvě skupiny putují Genabakis ke dvěma různým městům.'),
      quiz:{en:[['Whom do Karsa and Samar Dev meet?',['Traveller','Hood','Gorlas'],0],['Where does Clip lead Nimander?',['Black Coral','Letheras','Malaz City'],0]],cs:[['Koho potkají Karsa a Samar Dev?',['Poutníka','mistra Kápě','Gorlase'],0],['Kam vede Stříž Nimandera?',['Do Černého Korálu','Do Lederas','Do města Malaz'],0]]} },
    { book:2, n:1, title:L('The missing boy', 'Pohřešovaný chlapec'), en:'The missing boy', fear:5,
      sum:L('Harllo is sold to work in a mine, where Bainisk befriends him. Murillio tries to bring Harllo home, but Gorlas Vidikas kills him in a duel. Cutter learns what happened, goes to the mine and kills Gorlas. Harllo makes his way back to Darujhistan.', 'Harlla prodají na práci v dole, kde se s ním spřátelí Bainisk. Murillio se pokusí přivést Harlla domů, ale Gorlas Vidikas ho zabije v souboji. Řezník se dozví, co se stalo, vydá se k dolu a Gorlase zabije. Harllo se dostane zpět do Darúdžhistánu.'),
      focus:{en:['What Murillio risks for Harllo','How Harllo and Bainisk help one another'],cs:['Co Murillio riskuje kvůli Harllovi','Jak si Harllo a Bainisk pomáhají']},
      q:{en:['How do Harllo’s actions change what the adults around him think they know?'],cs:['Jak Harllovy činy mění představy dospělých, kteří ho obklopují?']},
      words:{en:[['foreman','the person directing work at the mine']],cs:[['předák','člověk, který řídí práci v dole']]},
      fearnote:L('Child abuse and exploitation, deaths in a mine and a fatal duel.', 'Týrání a vykořisťování dítěte, úmrtí v dole a smrtelný souboj.'),
      teaser:L('Murillio looks for a missing child beyond the city walls.', 'Murillio hledá pohřešované dítě za městskými hradbami.'),
      quiz:{en:[['Who helps Harllo at the mine?',['Bainisk','Gorlas','Endest'],0],['Who kills Murillio?',['Gorlas Vidikas','Cutter','Traveller'],0]],cs:[['Kdo pomáhá Harllovi v dole?',['Bainisk','Gorlas','Endest'],0],['Kdo zabije Murillia?',['Gorlas Vidikas','Řezník','Poutník'],0]]} },
    { book:2, n:2, title:L('The night of the Hounds', 'Noc ohařů'), en:'The night of the Hounds', fear:5,
      sum:L('The Hounds of Shadow break into Darujhistan. Hood manifests, and Rake kills him with Dragnipur so he can reach the realm inside the sword. Traveller, revealed as Dassem Ultor, comes looking for Hood. Rake faces him and dies by his own blade. The Hounds of Light arrive to claim it.', 'Ohaři stínu vtrhnou do Darúdžhistánu. Zjeví se mistr Kápě a Anomander ho zabije Dragnipúrem, aby se mistr Kápě dostal do říše uvnitř meče. Poutník, jímž je Dassem Ultor, hledá mistra Kápě. Anomander se mu postaví a zemře vlastní čepelí. Ohaři světla přicházejí, aby se meče zmocnili.'),
      focus:{en:['Hood’s agreement with Rake','What Traveller knows when he fights Rake'],cs:['Dohoda mistra Kápě a Anomandera','Co Poutník ví, když s Anomanderem bojuje']},
      q:{en:['Why does Rake need to enter his own sword?'],cs:['Proč Anomander potřebuje vstoupit do vlastního meče?']},
      words:{en:[['Hounds of Shadow','the great hounds associated with Shadow']],cs:[['ohaři stínu','obrovští ohaři spojení se Stínem']]},
      fearnote:L('Attacks on the city, violent deaths and grief.', 'Útoky na město, násilná úmrtí a žal.'),
      teaser:L('Traveller and Rake reach Darujhistan on the same night.', 'Poutník a Anomander dorazí do Darúdžhistánu téže noci.'),
      quiz:{en:[['Who is Traveller?',['Dassem Ultor','Kellanved','Draconus'],0],['What blade kills Rake?',['Dragnipur','Traveller’s own sword','Karsa’s sword'],0]],cs:[['Kdo je Poutník?',['Dassem Ultor','Kellanved','Draconus'],0],['Která čepel zabije Anomandera?',['Dragnipúr','Poutníkův meč','Karsův meč'],0]]} },
    { book:2, n:3, title:L('The gate and the sword', 'Brána a meč'), en:'The gate and the sword', fear:4,
      sum:L('Inside Dragnipur, Hood brings the dead to hold back Chaos. Rake’s sacrifice frees the Gate of Darkness, and Mother Dark returns to her people in Black Coral. At the Great Barrow, the Redeemer takes in the pain of the Dying God. Caladan Brood breaks Dragnipur at Baruk’s estate. Harllo finds Stonny, and she accepts him as her son.', 'Uvnitř Dragnipúru přivede mistr Kápě mrtvé, aby zadrželi Chaos. Anomanderova oběť osvobodí bránu do Kurald Galain a Matka Noc se vrátí ke svému lidu v Černém Korálu. U Velké mohyly přijme Vykupitel bolest umírajícího boha. Caladan Chmur rozbije Dragnipúr v Barúkově paláci. Harllo najde Stonny a ta ho přijme za syna.'),
      focus:{en:['Mother Dark’s return to the Tiste Andii','What happens to the sword and its prisoners','Harllo and Stonny’s reunion'],cs:['Návrat Matky Noci k Tiste Andii','Co se stane s mečem a jeho vězni','Setkání Harlla a Stonny']},
      q:{en:['How do Itkovian and Rake respond to two different kinds of suffering?'],cs:['Jak Itkovian a Anomander odpovídají na dva druhy utrpení?']},
      words:{en:[['Gate of Darkness','the gate carried on the wagon in Dragnipur']],cs:[['brána do Kurald Galain','brána, kterou veze vůz v Dragnipúru']]},
      fearnote:L('The aftermath of several deaths and a child confronting a painful family history.', 'Následky několika úmrtí a setkání dítěte s bolestivou minulostí rodiny.'),
      teaser:L('The fighting reaches the wagon inside the sword.', 'Boj se přiblíží k vozu uvnitř meče.'),
      quiz:{en:[['Who breaks Dragnipur?',['Caladan Brood','Traveller','Karsa'],0],['Who returns to the Tiste Andii?',['Mother Dark','Lady Envy','Salind'],0]],cs:[['Kdo rozbije Dragnipúr?',['Caladan Chmur','Poutník','Karsa'],0],['Kdo se vrátí k Tiste Andii?',['Matka Noc','paní Závist','Salind'],0]]} }
  ],
  KIDSUM: {
    1:{en:['Cutter comes home. Some old soldiers now run a bar in a temple. Someone wants them gone, and Kruppe tells us what happens.'],cs:['Řezník se vrací domů. Vysloužilí vojáci mají bar v bývalém chrámu. Někdo se jich chce zbavit a Kruppe vypráví, co se stane.']},
    2:{en:['People visit Itkovian’s burial mound. Seerdomin keeps watch, and Salind is drawn toward another god.'],cs:['Lidé chodí k Itkovianově mohyle. Věštdomin drží stráž a Salind se dostane pod vliv jiného boha.']},
    3:{en:['Karsa and Samar Dev meet a swordsman called Traveller. Nimander and the other Tiste Andii take a dangerous road to Black Coral.'],cs:['Karsa a Samar Dev potkají šermíře, kterému říkají Poutník. Nimander a ostatní Tiste Andii jdou nebezpečnou cestou k Černému Korálu.']},
    4:{en:['Harllo is forced to work in a mine. Murillio tries to rescue him and dies, but Harllo finds a way home.'],cs:['Harllo musí pracovat v dole. Murillio se ho pokusí zachránit a zemře, ale Harllo najde cestu domů.']},
    5:{en:['The Hounds enter the city. Traveller and Rake fight, and Rake dies by his own sword.'],cs:['Ohaři vtrhnou do města. Poutník a Anomander spolu bojují a Anomander zemře vlastním mečem.']},
    6:{en:['Rake’s choice saves the gate inside the sword. Mother Dark returns. Later Brood breaks the sword, and Harllo finds his mother.'],cs:['Anomander svým rozhodnutím zachrání bránu uvnitř meče. Matka Noc se vrátí. Chmur později meč rozbije a Harllo najde maminku.']}
  },
  KIDINTRO: {
    1:{en:['The story returns to the city with blue lights. Listen to the way Kruppe tells its story.'],cs:['Příběh se vrací do města s modrými světly. Všímej si, jak o něm Kruppe vypráví.']},
    2:{en:['Outside another city, pilgrims walk to a great burial mound.'],cs:['Za jiným městem chodí poutníci k velké mohyle.']},
    3:{en:['Several people are travelling through Genabackis. Watch where their paths cross.'],cs:['Po Genabakis putuje několik skupin. Všímej si, kde se jejich cesty kříží.']},
    4:{en:['A child is missing. Look for the people trying to help him.'],cs:['Ztratil se chlapec. Sleduj, kdo se mu pokouší pomoci.']},
    5:{en:['Several travellers arrive at Darujhistan on the same night. The Hounds are close.'],cs:['Několik poutníků dorazí k Darúdžhistánu téže noci. Ohaři jsou blízko.']},
    6:{en:['The story follows the wagon inside the sword and the people left in the city.'],cs:['Příběh sleduje vůz uvnitř meče i lidi, kteří zůstali ve městě.']}
  }
};
