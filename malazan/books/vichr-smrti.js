// Reaper's Gale — volume 7. The guide follows six story threads in reading order.
var BOOK = {
  meta: {
    slug: 'vichr-smrti', vol: 7, key: 'malazan_v7',
    mapFrame: { x0: 0.06, x1: 0.31, y0: 0.59, y1: 0.77 }
  },
  ui: {
    en: { brand_sub: 'A reader’s guide to Reaper’s Gale', info_names: 'Czech names in this volume follow Dana Krejčová’s Talpress translation.' },
    cs: { brand_sub: 'Průvodce Vichrem smrti', info_names: 'Česká jména v tomto svazku vycházejí z překladu Dany Krejčové pro Talpress.' }
  },
  castNames: {
    onrack: L('Onrack the Broken', 'Onrak'),
    veed: L('Taralack Veed', 'Taralak Výd')
  },
  relations: {
    blocks: [
      { min: 1, title: L('A crisis in Letheras', 'Krize v Lederas'), sub: L('Tehol and Bugg undermine the economy while the Patriotists move against dissent.', 'Tehol a Bugg podkopávají hospodářství, zatímco patriotisté zasahují proti odpůrcům říše.'),
        chain: [{id:'bugg'}, {arrow:L('works with', 'spolupracuje s')}, {id:'tehol'}, {arrow:L('is investigated by', 'je vyšetřován')}, {id:'karos'}] },
      { min: 2, title: L('The war in Awl’dan', 'Válka v Oul’danu'), sub: L('The Eastern Army fights Redmask’s clans beyond Drene.', 'Východní armáda bojuje za Drene proti Rudomaskovým klanům.'),
        chain: [{id:'brohl'}, {arrow:L('works with', 'spolupracuje s')}, {id:'bivatt'}, {arrow:L('fights', 'bojuje proti')}, {id:'redmask'}] },
      { min: 4, title: L('The Refugium', 'Refugium'), sub: L('Trull and Onrack defend the Imass while Silchas Ruin approaches the gate.', 'Trull a Onrak chrání Imassy, zatímco Silchas Zmar se blíží k bráně.'),
        chain: [{id:'trull'}, {arrow:L('fights beside', 'bojuje po boku')}, {id:'onrack'}, {arrow:L('guards', 'chrání')}, {id:'ulshun'}] },
      { min: 5, title: L('The emperor’s challengers', 'Císařovi vyzývatelé'), sub: L('Karsa and Withal each play a part in ending the sword’s hold over Rhulad.', 'Karsa i Withal přispějí k tomu, aby meč ztratil moc nad Rhuladem.'),
        chain: [{id:'karsa'}, {arrow:L('defeats', 'porazí')}, {id:'rhulad'}, {arrow:L('carries a sword made by', 'nosí meč od')}, {id:'withal'}] }
    ],
    ensemble: { min: 3, title: L('The Bonehunters in Lether', 'Lovci kostí v Lederu'), sub: L('The fleet and the marine detachments approach Letheras.', 'Flotila i oddíly mariňáků se blíží k Lederas.'),
      ids: ['tavore','keneb','fiddler','hellian','sort','beak'], cap: L('Six Malazans in the campaign', 'Šest Malažanů v tažení') }
  },
  loreExtra: [
    { ic: 'human', min: 1, title: L('The Patriotists', 'Patriotisté'), text: L('A political police force led by Karos Invictad. Its agents search for dissent while Letherii financiers retain much of their influence under the new emperor.', 'Politická policie vedená Karosem Inviktadem. Její agenti pátrají po odpůrcích, zatímco lederští finančníci si za nového císaře zachovávají značný vliv.') },
    { ic: 'human', min: 2, title: L('The Awl', 'Oulané'), text: L('Clans on the eastern plains whose livelihoods depend on their herds. Letherii settlement and demands for land and livestock help drive the war.', 'Klany na východních pláních, jejichž obživa závisí na stádech. Válku vyhrotí lederské osidlování a požadavky na půdu a dobytek.') },
    { ic: 'water', min: 3, title: L('The Shake', 'Třasové'), text: L('A coastal people whose witches and royal line survived Letherii rule. Yan Tovis and her half-brother Yedan Derryg gather them at the Second Maiden Fort.', 'Pobřežní lid, jehož čarodějky a královský rod přečkaly lederskou nadvládu. Šero a její nevlastní bratr Yedan Derryg je shromažďují na Druhém Děvíně.') },
    { ic: 'forest', min: 4, title: L('The Refugium', 'Refugium'), text: L('A realm reached through magical gates where a community of Imass lives. A new Azath takes root there when Silchas uses the Finnest and Kettle.', 'Říše přístupná magickými branami, v níž žije skupina Imassů. Když Silchas použije Konývku a Finnest, zakoření tam nový Azath.') }
  ],
  timeline: [
    [L('Letheras', 'Lederas'), L('The Edur return', 'Návrat Edur'), L('The fleet brings challengers for Rhulad’s arena.', 'Flotila přiváží vyzývatele do Rhuladovy arény.'), 1],
    [L('Eastern frontier', 'Východní pohraničí'), L('Redmask returns to Awl’dan', 'Rudomask se vrací do Oul’danu'), L('The Awl resist the army assembled at Drene.', 'Oulané se postaví armádě shromážděné v Drene.'), 2],
    [L('The western coast', 'Západní pobřeží'), L('The Bonehunters come ashore', 'Lovci kostí se vyloďují'), L('Marine detachments advance inland before the main army converges on the capital.', 'Oddíly mariňáků postupují do vnitrozemí, než hlavní vojsko dorazí k hlavnímu městu.'), 3]
  ],
  ILLUS: {
    1:{ cap:L('The Edur fleet brings challengers to Rhulad’s capital.', 'Flotila Edur přiváží vyzývatele do Rhuladova hlavního města.') },
    2:{ cap:L('Redmask returns to Awl’dan with two K’Chain Che’Malle companions.', 'Rudomask se vrací do Oul’danu se dvěma společníky z K’Chain Che’Malle.') },
    3:{ cap:L('The marines leave the west coast and fight their way inland.', 'Mariňáci opouštějí západní pobřeží a probojovávají se do vnitrozemí.') },
    4:{ cap:L('The travellers reach the gates of the Refugium.', 'Poutníci dorazí k branám Refugia.') },
    5:{ cap:L('Karsa faces Rhulad in Letheras.', 'Karsa čelí Rhuladovi v Lederas.') },
    6:{ cap:L('Seren returns to her own doorstep.', 'Seren se vrací k prahu vlastního domu.') }
  },
  SCENES: { 1:'__SCENE_1__', 2:'__SCENE_2__', 3:'__SCENE_3__', 4:'__SCENE_4__', 5:'__SCENE_5__', 6:'__SCENE_6__' },
  map: {
    asset: 'lederska-rise',
    title: L('The Empire of Lether and its Neighbours', 'Lederská říše a její sousedé'),
    worldStops: [], route: []
  },
  PLACES: [
    { id:'letheras', name:L('Letheras', 'Lederas'), en:'Letheras', x:16.2, y:66.83, region:[34.13,34.13], ic:'town', gi:1,
      dad:L('Rhulad’s capital on the Lether River. The challengers come here while Tehol and Bugg work against the empire’s economy.', 'Rhuladovo hlavní město na řece Leder. Přijíždějí sem vyzývatelé, zatímco Tehol a Bugg oslabují hospodářství říše.'),
      kid:L('The capital where the emperor receives his challengers.', 'Hlavní město, kde císař přijímá vyzývatele.') },
    { id:'drene', name:L('Drene', 'Drene'), en:'Drene', x:23.45, y:65.83, region:[80.77,32.21], ic:'town', gi:2,
      dad:L('The frontier city on the Bluerose Sea. Brohl Handar is its Edur overseer and Bivatt commands the Eastern Army.', 'Pohraniční město u Modrorůžského moře. Edurským dohližitelem je Brohl Handar a východnímu vojsku velí Bivatt.'),
      kid:L('The frontier city where the empire gathers soldiers to fight the Awl.', 'Pohraniční město, kde říše shromažďuje vojáky k boji proti Oulanům.') },
    { id:'awl', name:L('Awl’dan', 'Oul’dan'), en:'Awl’dan', x:25.6, y:69.58, region:[88.65,43.91], ic:'forest', gi:2,
      dad:L('The plains east and southeast of Drene. The pin marks the area where Redmask’s clans fight the Eastern Army.', 'Pláně na východ a jihovýchod od Drene. Značka ukazuje oblast, kde Rudomaskovy klany bojují s Východní armádou.'),
      kid:L('The eastern grasslands where the Awl clans live with their herds.', 'Východní pláně, kde oulské klany žijí se svými stády.') },
    { id:'maidens', name:L('Three Maiden Forts', 'Tři Děvíny'), en:'Three Maiden Forts', x:8.8, y:64.83, region:[11.44,23.24], ic:'tower', gi:3,
      dad:L('The three forts off the northwest coast. The Second Maiden Fort is where the Malazans take control and where the Shake assemble.', 'Tři pevnosti u severozápadního pobřeží. Malažané ovládnou Druhý Děvín, kde se také shromáždí Třasové.'),
      kid:L('Three island forts. The Malazans hold the second one.', 'Tři ostrovní pevnosti. Tu druhou drží Malažané.') },
    { id:'refugium', name:L('The Refugium', 'Refugium'), en:'The Refugium', x:null, y:null, region:null, ic:'forest', gi:4,
      dad:L('A separate realm reached through gates, where Trull and Onrack meet a living community of Imass.', 'Samostatná říše přístupná branami, kde Trull a Onrak potkají skupinu živých Imassů.'),
      kid:L('A hidden valley that travellers reach through magical gates.', 'Skryté údolí, do kterého poutníci vstupují magickými branami.') },
    { id:'palace', name:L('The Eternal Domicile', 'Císařský palác v Lederas'), en:'The Eternal Domicile', x:16.2, y:66.83, region:[34.13,34.13], ic:'crown', gi:5,
      dad:L('The imperial palace in Letheras where Rhulad and Karsa fight. It shares the city’s marker at this scale.', 'Císařský palác v Lederas, kde se utkají Rhulad a Karsa. V tomto měřítku sdílí značku s městem.'),
      kid:L('The palace where Rhulad faces Karsa.', 'Palác, kde se Rhulad utká s Karsou.') }
  ],
  CH: [
    { book:1, n:1, title:L('The new empire', 'Nová říše'), en:'The new empire', fear:3,
      sum:L('Rhulad rules Letheras, but officials such as Triban Gnol and Karos Invictad direct much of the empire. Tehol and Bugg undermine its finances while the Patriotists pursue suspected dissenters. The Edur fleet brings Karsa, Icarium and other champions to face Rhulad.', 'Lederas vládne Rhulad, ale velkou část říše řídí úředníci jako Triban Gnol a Karos Inviktad. Tehol s Buggem podkopávají její finance, zatímco patriotisté pronásledují domnělé odpůrce. Flotila Edur přiveze Karsu, Icaria a další vyzývatele, aby se utkali s Rhuladem.'),
      focus:{en:['Who wields power under Rhulad','The Patriotists and Tehol’s financial campaign'],cs:['Kdo má za Rhulada skutečnou moc','Patriotisté a Teholův boj o hospodářství']},
      q:{en:['How much has the Edur conquest changed the way Lether is governed?'],cs:['Jak dobytí Lederské říše změnilo způsob, jakým se v ní vládne?']},
      words:{en:[['Patriotists','the empire’s political police']],cs:[['patriotisté','politická policie říše']]},
      fearnote:L('Political repression, imprisonment and arena violence.', 'Politické pronásledování, věznění a násilí v aréně.'),
      teaser:L('Rhulad has an empire and a court. Who gets to make the decisions?', 'Rhulad má říši i dvůr. Kdo v nich rozhoduje?'),
      quiz:{en:[['Who leads the Patriotists?',['Karos Invictad','Tehol Beddict','Karsa Orlong'],0],['Who works with Tehol?',['Bugg','Rhulad','Brohl Handar'],0]],cs:[['Kdo vede patriotisty?',['Karos Inviktad','Tehol Beddikt','Karsa Orlong'],0],['Kdo spolupracuje s Teholem?',['Bugg','Rhulad','Brohl Handar'],0]]} },
    { book:1, n:2, title:L('The war in Awl’dan', 'Válka v Oul’danu'), en:'The war in Awl’dan', fear:5,
      sum:L('Redmask gathers the Awl clans against Bivatt’s Eastern Army. Toc, a captive of the Awl, fights alongside them. In the last battle the K’Chain Che’Malle kill Redmask, and Toc dies protecting children as they flee. Tool and the White Face Barghast reach the battlefield too late to save him.', 'Rudomask shromáždí oulské klany proti Bivattině Východní armádě. Toc, zajatec Oulanů, bojuje po jejich boku. V poslední bitvě K’Chain Che’Malle zabijí Rudomaska a Toc padne při obraně prchajících dětí. Tolar a Barghastové Bílé tváře dorazí na bojiště příliš pozdě, aby ho zachránili.'),
      focus:{en:['The dispute over land and herds','The choices Redmask and Toc make in the last battle'],cs:['Spor o půdu a stáda','Rozhodnutí Rudomaska a Toce v poslední bitvě']},
      q:{en:['What does Toc owe to the children of the people who captured him?'],cs:['Co Toc dluží dětem lidí, kteří ho zajali?']},
      words:{en:[['Awl’dan','the plains where the Awl clans live']],cs:[['Oul’dan','pláně, kde žijí oulské klany']]},
      fearnote:L('Mass death in battle and violence that endangers children.', 'Hromadná úmrtí v bitvě a násilí ohrožující děti.'),
      teaser:L('The eastern frontier has become a battlefield.', 'Východní pohraničí se mění v bojiště.'),
      quiz:{en:[['Who leads the Eastern Army?',['Bivatt','Redmask','Tavore'],0],['Who protects the fleeing children?',['Toc the Younger','Brohl Handar','Karsa'],0]],cs:[['Kdo vede Východní armádu?',['Bivatt','Rudomask','Tavore'],0],['Kdo brání prchající děti?',['Toc Mladší','Brohl Handar','Karsa'],0]]} },
    { book:1, n:3, title:L('The marines advance', 'Mariňáci postupují'), en:'The marines advance', fear:4,
      sum:L('The Bonehunters take the Second Maiden Fort on the west coast. Yan Tovis and her half-brother Yedan Derryg bring the Shake together there. The Malazan marines advance inland in detachments. When Letherii magic threatens Malazans and Edur alike, Beak shields both groups and dies.', 'Lovci kostí obsadí Druhý Děvín u západního pobřeží. Šero a její nevlastní bratr Yedan Derryg tam shromáždí Třasy. Malazští mariňáci postupují po oddílech do vnitrozemí. Když lederská magie ohrozí Malažany i Edur, Zobák obě skupiny ochrání a zemře.'),
      focus:{en:['The Shake and the Second Maiden Fort','The way Beak and Fiddler treat the Edur in battle'],cs:['Třasové a Druhý Děvín','Jak se Zobák a Šumař v bitvě zachovají k Edur']},
      q:{en:['Why does Fiddler ask the Edur to come under Beak’s protection?'],cs:['Proč Šumař pozve Edur pod Zobákovu ochranu?']},
      words:{en:[['marine','a soldier trained to fight ashore']],cs:[['mariňák','voják vycvičený k boji na souši po vylodění']]},
      fearnote:L('Running battles, mass death and a soldier’s sacrifice.', 'Boje za postupu, hromadná úmrtí a oběť jednoho z vojáků.'),
      teaser:L('Small Malazan detachments move inland ahead of the army.', 'Malé malazské oddíly postupují do vnitrozemí před hlavním vojskem.'),
      quiz:{en:[['Which fort do the Malazans take?',['Second Maiden Fort','Mock’s Hold','Capustan'],0],['Who shields soldiers of both armies?',['Beak','Karos Invictad','Redmask'],0]],cs:[['Kterou pevnost Malažané obsadí?',['Druhý Děvín','Posměvákovu tvrz','Capustan'],0],['Kdo ochrání vojáky obou armád?',['Zobák','Karos Inviktad','Rudomask'],0]]} },
    { book:2, n:1, title:L('The Refugium', 'Refugium'), en:'The Refugium', fear:5,
      sum:L('Silchas Ruin’s party reaches the gates of the Refugium. Clip kills Fear, and Seren destroys Wither as he attacks Udinaas. Silchas uses the Finnest holding Scabandari’s soul to kill Kettle, an Azath seed. A new Azath takes root and secures the realm. Onrack is reunited with Kilava and recognizes their son.', 'Družina Silchase Zmara dorazí k branám Refugia. Stříž zabije Stracha a Seren zničí Chřada, když napadne Udinaase. Silchas zabije Konývku, zárodek Azathu, Finnestem, jenž drží Scabandariho duši. Nový Azath zakoření a upevní říši. Onrak se znovu setká s Kilavou a pozná jejich syna.'),
      focus:{en:['How the new Azath preserves the Refugium','Onrack and the Imass who live there'],cs:['Jak nový Azath zachová Refugium','Onrak a Imassové, kteří tam žijí']},
      q:{en:['Who pays for the Refugium’s survival?'],cs:['Kdo zaplatí za přežití Refugia?']},
      words:{en:[['Finnest','a vessel for power']],cs:[['Finnest','schránka moci']]},
      fearnote:L('A child is killed and several companions turn on one another.', 'Zabití dítěte a násilí mezi několika členy družiny.'),
      teaser:L('Two groups approach the same gates with different plans.', 'Dvě skupiny míří k týmž branám s různými plány.'),
      quiz:{en:[['Who kills Fear Sengar?',['Clip','Trull','Seren'],0],['What takes root in the Refugium?',['An Azath','An Edur fortress','A new city'],0]],cs:[['Kdo zabije Stracha Sengara?',['Stříž','Trull','Seren'],0],['Co v Refugiu zakoření?',['Azath','Edurská pevnost','Nové město'],0]]} },
    { book:2, n:2, title:L('Rhulad and Karsa', 'Rhulad a Karsa'), en:'Rhulad and Karsa', fear:5,
      sum:L('Karsa defeats Rhulad and follows him to the Crippled God’s shore, where he refuses the offered sword. Withal, the smith who forged it, destroys it. As fighting reaches Letheras, Icarium activates an old machine with his blood. The machine’s eruption changes the fate of those around him.', 'Karsa porazí Rhulada a následuje ho na pobřeží Chromého boha, kde odmítne nabízený meč. Mečíř Withal, který ho ukoval, ho zničí. Když boje dospějí k Lederas, Icarium vlastní krví spustí starý stroj. Jeho výbuch změní osud těch, kdo jsou poblíž.'),
      focus:{en:['What allows Rhulad to die','Icarium’s experiment and its cost'],cs:['Co umožní Rhuladovi zemřít','Icariův pokus a jeho cena']},
      q:{en:['Why does it matter that Withal destroys the sword he made?'],cs:['Proč záleží na tom, že meč zničí právě jeho tvůrce Withal?']},
      words:{en:[['Mekros','the seafaring people to whom Withal belongs']],cs:[['Mekrosové','mořeplavecký lid, k němuž patří Withal']]},
      fearnote:L('A fatal duel and a magical disaster in the capital.', 'Smrtelný souboj a magická katastrofa v hlavním městě.'),
      teaser:L('Karsa enters the arena while Icarium searches for a machine from his past.', 'Karsa vstupuje do arény a Icarium hledá stroj ze své minulosti.'),
      quiz:{en:[['Who defeats Rhulad?',['Karsa Orlong','Icarium','Trull'],0],['Who destroys the sword?',['Withal','Brys','Bugg'],0]],cs:[['Kdo porazí Rhulada?',['Karsa Orlong','Icarium','Trull'],0],['Kdo zničí meč?',['Withal','Brys','Bugg'],0]]} },
    { book:2, n:3, title:L('After the fighting', 'Po bojích'), en:'After the fighting', fear:4,
      sum:L('Tavore’s army enters the capital and finds Tehol Beddict has been proclaimed emperor. Brys has returned from the dead and joins Tehol and Janath. Trull goes to his brother Rhulad’s body, where Sirryn Kana stabs him. Seren returns home to mourn Trull, and Udinaas stays in the Refugium with Rud Elalle.', 'Tavořino vojsko vstoupí do hlavního města a dozví se, že císařem byl prohlášen Tehol Beddikt. Brys se vrátí ze smrti a připojí se k Teholovi a Žanat. Trull jde za tělem bratra Rhulada a Sirryn Kanar ho tam bodne. Seren se vrací domů truchlit za Trulla a Udinaas zůstává v Refugiu s Rudem Elalle.'),
      focus:{en:['Tehol’s rise and the future of Lether','The losses that survive the change of ruler'],cs:['Teholův vzestup a budoucnost Lederu','Ztráty, které změna vládce nenapraví']},
      q:{en:['What is left for the new emperor to repair?'],cs:['Co všechno zbývá novému císaři napravit?']},
      words:{en:[['epilogue','the closing section after the main action']],cs:[['epilog','závěrečný oddíl po hlavním ději']]},
      fearnote:L('A fatal attack and grief for the dead.', 'Smrtelné přepadení a žal nad mrtvými.'),
      teaser:L('The capital is changing hands as Trull goes to find his brother.', 'Hlavní město mění vládce a Trull jde hledat svého bratra.'),
      quiz:{en:[['Who becomes emperor?',['Tehol Beddict','Brys Beddict','Tavore'],0],['Who remains with Rud Elalle?',['Udinaas','Sirryn Kana','Rhulad'],0]],cs:[['Kdo se stane císařem?',['Tehol Beddikt','Brys Beddikt','Tavore'],0],['Kdo zůstane s Rudem Elalle?',['Udinaas','Sirryn Kanar','Rhulad'],0]]} }
  ],
  KIDSUM: {
    1:{en:['An emperor rules Letheras while powerful officials make decisions for him. Tehol and Bugg make plans of their own, and the emperor’s challengers arrive.'],cs:['V Lederas vládne císař a mocní úředníci rozhodují za něj. Tehol a Bugg mají vlastní plány a do města přijíždějí císařovi vyzývatelé.']},
    2:{en:['Redmask and the Awl try to defend their land. Toc gives the children time to flee when the battle turns against them.'],cs:['Rudomask a Oulané brání svou zemi. Když se bitva obrátí proti nim, Toc dá dětem čas uprchnout.']},
    3:{en:['The marines cross from the coast into Lether. A young mage called Beak uses his strength to save both his friends and soldiers they were fighting.'],cs:['Mariňáci postupují od pobřeží do Lederu. Mladý mág Zobák použije svou moc, aby zachránil přátele i vojáky, proti kterým bojovali.']},
    4:{en:['The travellers reach a place behind magical gates. Silchas kills Kettle, and a new living house grows there. Onrack finds his family.'],cs:['Poutníci dorazí na místo za magickými branami. Silchas zabije Konývku a vyroste tu nový živý dům. Onrak najde svou rodinu.']},
    5:{en:['Karsa defeats Rhulad and refuses his sword. Withal, who made the sword, destroys it. In the city, Icarium sets an old machine in motion.'],cs:['Karsa porazí Rhulada a odmítne jeho meč. Withal, který meč vyrobil, ho zničí. Icarium ve městě uvede do chodu starý stroj.']},
    6:{en:['Tehol becomes emperor and his brother Brys returns. Seren loses Trull and goes home to grieve for him.'],cs:['Tehol se stane císařem a jeho bratr Brys se vrátí. Seren přijde o Trulla a jde domů truchlit.']}
  },
  KIDINTRO: {
    1:{en:['After the conquest in Midnight Tides, Rhulad sits on the throne of Lether. Watch who has his ear.'],cs:['Po dobytí Lederu v Půlnočních vlnách sedí na trůnu Rhulad. Všímej si, komu naslouchá.']},
    2:{en:['The story moves to the grasslands. Redmask comes home to a people under pressure from the empire.'],cs:['Příběh se přesune na pláně. Rudomask se vrací k lidu, na který tlačí říše.']},
    3:{en:['The Malazans come ashore on the west coast. Look for the different things the soldiers do to help one another.'],cs:['Malažané se vyloďují na západním pobřeží. Všímej si, jak si vojáci navzájem pomáhají.']},
    4:{en:['Two groups enter the same hidden realm. Each has a different reason to be there.'],cs:['Dvě skupiny vstoupí do téže skryté říše. Každou tam přivede jiný důvod.']},
    5:{en:['Karsa is ready to face the emperor and his sword. Watch what he does when the fight ends.'],cs:['Karsa se chystá čelit císaři a jeho meči. Všímej si, co udělá po souboji.']},
    6:{en:['The fighting is ending. Some people return home, and others have to make a new home.'],cs:['Boje končí. Někteří se vracejí domů, jiní si musí najít nový domov.']}
  }
};
