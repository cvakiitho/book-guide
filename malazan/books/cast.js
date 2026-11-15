// The saga cast — shared across all ten volumes and injected into every build.
// L(en, cs) keeps the bilingual data compact. intro = first appearance {vol, gi}.
// arc.beats are tagged with the volume (vol) and movement (gi) they belong to, so a character's
// "story so far" grows across the whole saga and never spoils anything the reader has not reached.
var L = function (en, cs) { return { en: en, cs: cs }; };

var CAST = [
  {
    id: 'paran', intro: { vol: 1, gi: 1 },
    name: L('Ganoes Paran', 'Ganoes Paran'), en: 'Ganoes Paran',
    race: 'malazan', rlab: L('Malazan captain', 'Malazský kapitán'), ic: 'sword',
    kid: L('A young noble who wanted to be a soldier more than anything. He is clever and stubborn, and the gods take an inconvenient interest in him.', 'Mladý šlechtic, který chtěl být vojákem víc než co jiného. Je chytrý a tvrdohlavý a bohové se o něj nepohodlně zajímají.'),
    dad: L('A captain of the Malazan Empire, son of a noble house and a reluctant pawn of Oponn. His death and return make him one of the saga’s strangest witnesses.', 'Kapitán Malazské říše, syn šlechtického rodu a neochotný pěšák Oponn. Jeho smrt a návrat z něj dělají jednoho z nejpodivnějších svědků ságy.'),
    arc: { ahead: L('Can a man stay loyal to an empire that no longer deserves him?', 'Může člověk zůstat věrný říši, která si ho už nezaslouží?'),
      beats: [
        { vol: 1, gi: 1, text: L('Is assigned to command the survivors of the Bridgeburners after the fall of Pale.', 'Po pádu Dřevnova dostane velení nad přeživšími Paliči mostů.') },
        { vol: 1, gi: 3, text: L('Is stabbed by Sorry and survives through Oponn’s intervention.', 'Bodne ho Líto a Paran přežije díky Oponnovu zásahu.') },
        { vol: 3, gi: 6, text: L('Becomes Master of the Deck of Dragons, a mortal voice among the gods.', 'Stane se Pánem Balíčku draků, smrtelným hlasem mezi bohy.') },
        { vol: 6, gi: 2, text: L('Takes command of Onearm’s Host after Dujek’s death.', 'Po Dujekově smrti převezme velení Jednorukého houfce.') },
        { vol: 10, gi: 3, text: L('Leads the Host to the North Citadel in Estobanse.', 'Vede houfec k Severnímu hradu v Estobanské provincii.') },
        { vol: 10, gi: 5, text: L('Reaches Tavore and the Bonehunters in the final battle.', 'V závěrečné bitvě se dostane k Tavore a Lovcům kostí.') }
      ] }
  },
  {
    id: 'whiskeyjack', intro: { vol: 1, gi: 1 },
    name: L('Whiskeyjack', 'Whiskeyjack'), en: 'Whiskeyjack',
    race: 'malazan', rlab: L('Bridgeburner sergeant', 'Seržant Paličů mostů'), ic: 'sword',
    kid: L('The calm, gruff leader of the Bridgeburners. His soldiers would follow him anywhere, and he carries old wounds from a war he no longer believes in.', 'Klidný, mrzutý vůdce Paličů mostů. Vojáci by ho následovali kamkoli a on si nese staré rány z války, které už nevěří.'),
    dad: L('A legendary sergeant of the old guard, demoted by Laseen and sent to die. His loyalty to his soldiers is the closest thing the saga has to a moral centre.', 'Legendární seržant staré gardy, degradovaný Laseen a poslaný na smrt. Jeho věrnost vojákům je sáze nejblíž morálnímu středu.'),
    arc: { ahead: L('What is a soldier owed by the empire he served?', 'Co dluží říše vojákovi, kterému sloužil?'),
      beats: [
        { vol: 1, gi: 1, text: L('Survives the slaughter at Pale with a handful of Bridgeburners.', 'Přežije masakr u Pale s hrstkou Paličů mostů.') },
        { vol: 1, gi: 6, text: L('Stays with Dujek’s army when it is declared outlawed.', 'Zůstane u Dujekova vojska, když je postaveno mimo zákon.') },
        { vol: 3, gi: 1, text: L('Negotiates the alliance with Caladan Brood and Anomander Rake.', 'Vyjedná spojenectví s Caladanem Chmurem a Anomanderem Dlouhým vlasem.') },
        { vol: 3, gi: 5, text: L('Is struck down by Kallor before the walls of Coral.', 'Před hradbami Korálu ho srazí Kallor.') },
        { vol: 3, gi: 6, text: L('Is laid to rest with his fallen soldiers inside Moon’s Spawn.', 'Je uložen k odpočinku se svými padlými vojáky uvnitř Měsíčního Kamene.') }
      ] }
  },
  {
    id: 'quickben', intro: { vol: 1, gi: 1 },
    name: L('Quick Ben', 'Rychlej Ben'), en: 'Quick Ben',
    race: 'malazan', rlab: L('Bridgeburner mage', 'Mág Paličů mostů'), ic: 'warren',
    kid: L('A wizard with more secrets than sleeves. He always has a plan, usually several, and he never tells anyone the whole truth.', 'Čaroděj, který má víc tajemství než rukávů. Vždycky má plán, obvykle několik, a nikdy nikomu neřekne celou pravdu.'),
    dad: L('A Bridgeburner mage who draws on several branches of sorcery and keeps the extent of his abilities to himself.', 'Mág Paličů mostů, který ovládá několik druhů magie a rozsah svých schopností si nechává pro sebe.'),
    arc: { ahead: L('How much of victory is preparation, and how much is nerve?', 'Kolik z vítězství je příprava a kolik kuráž?'),
      beats: [
        { vol: 1, gi: 1, text: L('Helps hold the Bridgeburners together at Pale.', 'Pomůže udržet Paliče mostů pohromadě u Pale.') },
        { vol: 1, gi: 5, text: L('Uses his warrens to fight Raest while Raest possesses Mammot.', 'Pomocí chodeb bojuje s Raestem, který se zmocnil Mammota.') },
        { vol: 3, gi: 5, text: L('Uses Hood’s own warren to trap the Pannion Seer.', 'Použije samotný warren Hooda, aby polapil Pannionského věštce.') },
        { vol: 6, gi: 3, text: L('Counters Edur sorcery at sea with help from Bottle and the Eres’al.', 'S pomocí Flašky a Eres’al čelí na moři magii Edur.') },
        { vol: 6, gi: 6, text: L('Helps Trull hold off Icarium at the First Throne.', 'Pomáhá Trullovi zadržet Icaria u Prvního trůnu.') },
        { vol: 9, gi: 6, text: L('Uses his sorcery against the Nah’ruk when they attack the Bonehunters.', 'Když Nah’ruk napadnou Lovce kostí, postaví se jim svou magií.') }
      ] }
  },
  {
    id: 'kalam', intro: { vol: 1, gi: 1 },
    name: L('Kalam Mekhar', 'Kalam Méchar'), en: 'Kalam Mekhar',
    race: 'malazan', rlab: L('Bridgeburner assassin', 'Vrah Paličů mostů'), ic: 'sword',
    kid: L('A huge, quiet assassin from Seven Cities. He is dangerous when he is angry, and he is angry most of the time.', 'Obrovský tichý vrah ze Sedmi měst. Když se rozzlobí, je nebezpečný — a rozzlobený je většinou.'),
    dad: L('An assassin trained by the imperial Claw who now serves with the Bridgeburners.', 'Asasín vycvičený říšským Spárem, který slouží u Paličů mostů.'),
    arc: { ahead: L('When does vengeance become just another chain?', 'Kdy se pomsta stane jen dalším řetězem?'),
      beats: [
        { vol: 1, gi: 1, text: L('Survives Pale and takes the fight into Darujhistan.', 'Přežije Pale a přenese boj do Darujhistanu.') },
        { vol: 2, gi: 3, text: L('Carries the Book of the Apocalypse to Sha’ik in Raraku.', 'Nese Knihu apokalypsy Ša’ik do Raraku.') },
        { vol: 6, gi: 5, text: L('Chooses to protect Tavore as the Claw close in.', 'Rozhodne se chránit Tavore před Spárem.') },
        { vol: 6, gi: 6, text: L('Is poisoned and taken into the Deadhouse.', 'Je otráven a odnesen do Domu mrtvých.') }
      ] }
  },
  {
    id: 'fiddler', intro: { vol: 1, gi: 1 },
    name: L('Fiddler', 'Šumař'), en: 'Fiddler',
    race: 'malazan', rlab: L('Bridgeburner sapper', 'Ženista Paličů mostů'), ic: 'flame',
    kid: L('A soldier who loves explosions and cards. He looks ordinary, which is exactly why people keep underestimating him.', 'Voják, který miluje výbuchy a karty. Vypadá obyčejně, a právě proto ho lidé pořád podceňují.'),
    dad: L('A Bridgeburner sapper who has a gift for reading the Deck of Dragons.', 'Sapér Paličů mostů s nadáním vykládat Balíček draků.'),
    arc: { ahead: L('What keeps a veteran marching after he has seen enough?', 'Co drží veterána na pochodu, když už viděl dost?'),
      beats: [
        { vol: 1, gi: 1, text: L('Fights at Pale and later in the streets of Darujhistan.', 'Bojuje u Pale a později v ulicích Darujhistanu.') },
        { vol: 2, gi: 1, text: L('Sets out across Seven Cities with Kalam, Crokus and Apsalar.', 'Vydá se přes Sedm měst s Kalamem, Crokusem a Apsalar.') },
        { vol: 4, gi: 2, text: L('Serves in Tavore’s Fourteenth Army under the name Sergeant Strings.', 'Slouží v Tavořině 14. armádě pod jménem seržant Struna.') },
        { vol: 6, gi: 1, text: L('Survives the fire of Y’Ghatan and becomes one of the Bonehunters.', 'Přežije požár Y’Ghatanu a stane se jedním z Lovců kostí.') },
        { vol: 9, gi: 1, text: L('Marches with Tavore into the Letherii wastelands.', 'Vyráží s Tavore do letherských pustin.') }
      ] }
  },
  {
    id: 'apsalar', intro: { vol: 1, gi: 1 },
    name: L('Apsalar', 'Apsalar'), en: 'Apsalar (Sorry)',
    race: 'human', rlab: L('Possessed assassin', 'Posadnutá vražedkyně'), ic: 'mask',
    kid: L('A quiet young woman from a fishing village. For a while something else looked out through her eyes — and she is still learning who she is.', 'Tichá mladá žena z rybářské vesnice. Nějakou dobu se jí dívala z očí něco jiného — a ona se pořád učí, kdo vlastně je.'),
    dad: L('Once the vessel of Cotillion, the Rope. Freed from possession, she inherits his skills and a great deal of his guilt. She takes her new name from a goddess associated with thieves.', 'Kdysi nádoba Cotilliona, Provazu. Po osvobození z posednutí zdědí jeho dovednosti i velkou část jeho viny. Nové jméno převezme od bohyně spojované se zloději.'),
    arc: { ahead: L('Can you ever be free of something that used your body?', 'Můžeš se někdy osvobodit od něčeho, co používalo tvé tělo?'),
      beats: [
        { vol: 1, gi: 1, text: L('Joins the Malazan army under the name Sorry while possessed by Cotillion.', 'Vstoupí do malazské armády pod jménem Líto, zatímco ji ovládá Kotilion.') },
        { vol: 1, gi: 5, text: L('Regains control of her body when Shadowthrone recalls Cotillion. She later takes the name Apsalar.', 'Získá zpět vládu nad vlastním tělem, když Stínupán odvolá Kotiliona. Později si zvolí jméno Apsalar.') },
        { vol: 2, gi: 3, text: L('Crosses Raraku and begins to understand what was done to her.', 'Přejde Raraku a začne chápat, co jí bylo uděláno.') },
        { vol: 4, gi: 3, text: L('Guards the Throne of Shadow on Drift Avalii.', 'Střeží Trůn stínu na Drift Avalii.') },
        { vol: 4, gi: 6, text: L('Accepts Cotillion’s service again — on her own terms.', 'Přijme Cotillionovu službu znovu — ale za svých podmínek.') }
      ] }
  },
  {
    id: 'tattersail', intro: { vol: 1, gi: 1 },
    name: L('Tattersail', 'Besana'), en: 'Tattersail',
    race: 'malazan', rlab: L('Cadre mage', 'Kouzelnice kádru'), ic: 'warren',
    kid: L('A powerful and kind-hearted army wizard. She is one of the few people at Pale who tries to save lives instead of spending them.', 'Mocná a laskavá armádní čarodějka. Je jednou z mála lidí u Pale, kdo se snaží životy zachraňovat, ne jimi platit.'),
    dad: L('A veteran cadre mage, large of body and heart, caught between the Empire’s orders and her own conscience. Her story does not end when her body does.', 'Zkušená cadre mágyně velkého těla i srdce, rozpolcená mezi rozkazy říše a vlastním svědomím. Její příběh nekončí, když skončí její tělo.'),
    arc: { ahead: L('What survives us — memory, love, or just power?', 'Co po nás zůstává — paměť, láska, nebo jen moc?'),
      beats: [
        { vol: 1, gi: 1, text: L('Brings the survivors of Pale together and protects the Bridgeburners.', 'Shromáždí přeživší z Pale a ochrání Paliče mostů.') },
        { vol: 1, gi: 4, text: L('Dies in a confrontation with Bellurdan.', 'Zemře při střetu s Bellurdanem.') },
        { vol: 3, gi: 1, text: L('Returns as one of the souls within Silverfox.', 'Vrací se jako jedna z duší ve Stříbrné lišce.') }
      ] }
  },
  {
    id: 'rake', intro: { vol: 1, gi: 1 },
    name: L('Anomander Rake', 'Anomander Dlouhý vlas'), en: 'Anomander Rake',
    race: 'tiste', rlab: L('Lord of Moon’s Spawn', 'Pán Měsíčního Kamene'), ic: 'moon',
    kid: L('A tall, silver-haired lord of the Tiste Andii who lives in a floating fortress. He carries a huge sword and is far older than the empire.', 'Vysoký stříbrovlasý pán Tiste Andii, který žije v létajícím hradu. Nese obrovský meč a je mnohem starší než říše.'),
    dad: L('The Son of Darkness, last great lord of the Tiste Andii, and master of the floating Moon’s Spawn. He is feared as a monster and chooses, again and again, to be something else.', 'Syn temnoty, poslední velký pán Tiste Andii a vládce létajícího Měsíčního Kamene. Bojí se ho jako netvora a on se znovu a znovu rozhoduje být něčím jiným.'),
    arc: { ahead: L('Is mercy strength, or the last disguise of despair?', 'Je milosrdenství síla, nebo poslední převlek zoufalství?'),
      beats: [
        { vol: 1, gi: 1, text: L('Withdraws from Pale after a duel with the Malazan mages.', 'Po duelu s malazskými mágy se stáhne z Pale.') },
        { vol: 1, gi: 5, text: L('Fights the Galayn demon released by Lorn in Darujhistan.', 'V Darúdžhistánu bojuje s démonem, kterého vypustila Lorn.') },
        { vol: 1, gi: 6, text: L('Offers an alliance to the outlawed Malazan army.', 'Nabídne spojenectví vyvržené malazské armádě.') },
        { vol: 3, gi: 5, text: L('Rises from the sea in Moon’s Spawn to break the Pannion siege.', 'Vynoří se z moře v Měsíčním Kameni a zlomí pannionské obléhání.') },
        { vol: 8, gi: 2, text: L('Leads the Tiste Andii of Black Coral.', 'Vede Tiste Andii v Černém Korálu.') },
        { vol: 8, gi: 5, text: L('Kills Hood and dies by Dragnipur in his duel with Traveller.', 'Zabije mistra Kápě a v souboji s Poutníkem zemře Dragnipúrem.') },
        { vol: 8, gi: 6, text: L('Sacrifices himself to return the Gate of Darkness to his people.', 'Obětuje se, aby svému lidu vrátil bránu do Kurald Galain.') }
      ] }
  },
  {
    id: 'kruppe', intro: { vol: 1, gi: 2 },
    name: L('Kruppe', 'Kruppe'), en: 'Kruppe',
    race: 'human', rlab: L('Darujhistan schemer', 'Darujhistanský intrikán'), ic: 'book',
    kid: L('A round, talkative little man who loves pastries and knows everybody’s business. He pretends to be a fool, but he notices everything.', 'Kulatý upovídaný mužík, který miluje koláče a zná všechny záležitosti. Dělá ze sebe blázna, ale všímá si všeho.'),
    dad: L('A Darujhistan broker of secrets, pastries and improbable schemes. Behind the comedy is one of the sharpest minds in the city — and perhaps in the saga.', 'Darujhistanský prostředník tajemství, koláčů a nepravděpodobných plánů. Za komedií se skrývá jedna z nejbystřejších myslí města — a možná celé ságy.'),
    arc: { ahead: L('Why do the powerful always underestimate the fool?', 'Proč mocní vždycky podceňují blázna?'),
      beats: [
        { vol: 1, gi: 2, text: L('Welcomes the reader to Darujhistan and immediately starts meddling.', 'Přivítá čtenáře v Darúdžhistánu a okamžitě začne do všeho mluvit.') },
        { vol: 1, gi: 5, text: L('Attends Simtal’s fête and keeps the other guests guessing about his intentions.', 'Zúčastní se Simtaliny slavnosti a ostatní hosté jen hádají, co má za lubem.') },
        { vol: 3, gi: 6, text: L('Brokers peace between Silverfox and the Mhybe.', 'Zprostředkuje smír mezi Silverfox a Mhybe.') },
        { vol: 8, gi: 1, text: L('Narrates much of the story of Darujhistan as the old Bridgeburners settle into civilian life.', 'Vypráví značnou část příběhu Darúdžhistánu, kde si staří Paliči mostů zvykají na život v civilu.') }
      ] }
  },
  {
    id: 'crokus', intro: { vol: 1, gi: 2 },
    name: L('Crokus', 'Kvítko'), en: 'Crokus (Cutter)',
    race: 'human', rlab: L('Darujhistan thief', 'Darúdžhistánský zloděj'), ic: 'sword',
    kid: L('A young thief with a good heart and bad luck. He would rather be brave than sensible, especially when someone he cares about is in danger.', 'Mladý zloděj s dobrým srdcem a špatným štěstím. Radši je statečný než rozumný, zvlášť když je v nebezpečí někdo, na kom mu záleží.'),
    dad: L('A young thief from Darujhistan whose life changes after a chance encounter with Oponn’s coin.', 'Mladý zloděj z Darúdžhistánu, jemuž změní život nález Oponnovy mince.'),
    arc: { ahead: L('What does love cost when it asks you to become someone else?', 'Co stojí láska, když po tobě chce, abys byl někým jiným?'),
      beats: [
        { vol: 1, gi: 2, text: L('Picks up Oponn’s spinning coin while escaping across the rooftops.', 'Při útěku po střechách sebere Oponnovu rotující minci.') },
        { vol: 1, gi: 5, text: L('Overhears Vorcan’s plans and goes to warn Baruk.', 'Vyslechne Vorcaniny plány a jde varovat Barúka.') },
        { vol: 2, gi: 1, text: L('Travels into Seven Cities with Fiddler, Kalam and Apsalar.', 'Cestuje do Sedmi měst s Fiddlerem, Kalamem a Apsalar.') },
        { vol: 4, gi: 3, text: L('Takes the name Cutter and helps defend the Throne of Shadow.', 'Přijme jméno Řezník a pomáhá bránit Trůn stínu.') },
        { vol: 8, gi: 1, text: L('Returns to Darujhistan with his travelling companions.', 'Se společníky se vrací do Darúdžhistánu.') },
        { vol: 8, gi: 4, text: L('Kills Gorlas Vidikas after Murillio’s death.', 'Po Murilliově smrti zabije Gorlase Vidikase.') }
      ] }
  },
  {
    id: 'lorn', intro: { vol: 1, gi: 2 },
    name: L('Adjunct Lorn', 'Pobočník Lorn'), en: 'Adjunct Lorn',
    race: 'malazan', rlab: L('Adjunct to the Empress', 'Pobočník císařovny'), ic: 'crown',
    kid: L('The Empress’s right hand in the field. She is calm, elegant and absolutely certain that the empire comes first.', 'Pravá ruka císařovny v poli. Je klidná, elegantní a naprosto přesvědčená, že říše je na prvním místě.'),
    dad: L('Laseen’s Adjunct, sent to Genabackis to solve the Darujhistan problem by any means. Her certainty is both her strength and her undoing.', 'Laseenin pobočník, vyslaný na Genabackis, aby vyřešil darujhistanský problém jakýmikoli prostředky. Její jistota je její silou i záhubou.'),
    arc: { ahead: L('What happens when duty asks you to become a monster?', 'Co se stane, když povinnost požaduje, abys byl netvor?'),
      beats: [
        { vol: 1, gi: 2, text: L('Arrives in Genabackis with Tool and a secret plan.', 'Přijde na Genabackis s Toolem a tajným plánem.') },
        { vol: 1, gi: 4, text: L('Releases the Jaghut Tyrant as a weapon against Darujhistan.', 'Vypustí Jaghutského Tyrana jako zbraň proti Darúdžhistánu.') },
        { vol: 1, gi: 5, text: L('Releases the Galayn demon and is killed by Meese and Irilta.', 'Vypustí démona a zahyne rukou Meese a Irilty.') }
      ] }
  },
  {
    id: 'tool', intro: { vol: 1, gi: 2 },
    name: L('Onos T’oolan', 'Tolar Vyděděnec'), en: 'Onos T’oolan (Tool)',
    race: 'imass', rlab: L('T’lan Imass warrior', 'T’lan Imasský bojovník'), ic: 'imass',
    kid: L('An undead warrior made of dust and old stone. He speaks little, keeps his promises, and is much kinder than he looks.', 'Nemrtvý bojovník z prachu a starého kamene. Moc nemluví, drží slovo a je mnohem laskavější, než vypadá.'),
    dad: L('A T’lan Imass Bonecaster’s kin, bound to Lorn’s service and then to his own long search for meaning. His journey from weapon to person is one of the saga’s great arcs.', 'Příbuzný t’lan imasské kostěné kouzelnice, připoutaný k Lornině službě a pak k vlastnímu dlouhému hledání smyslu. Jeho cesta od zbraně k osobě je jedním z velkých oblouků ságy.'),
    arc: { ahead: L('Can something that has forgotten how to live learn again?', 'Může se něco, co zapomnělo žít, znovu naučit?'),
      beats: [
        { vol: 1, gi: 2, text: L('Guides Adjunct Lorn to the Jaghut barrow.', 'Dovede pobočnici Lorn k jaghutské mohyle.') },
        { vol: 1, gi: 4, text: L('Fights the Tyrant he helped release.', 'Bojuje s Tyranem, kterého pomohl vypustit.') },
        { vol: 3, gi: 6, text: L('Is restored to mortal flesh at the end of the Pannion war.', 'Na konci pannionské války je navrácen do smrtelného těla.') },
        { vol: 7, gi: 2, text: L('Reaches the battlefield with the White Face Barghast and finds Toc dead.', 'Dorazí s Barghasty Bílé tváře na bojiště a najde Toce mrtvého.') },
        { vol: 9, gi: 3, text: L('Dies trying to stop a clash between Barghast clans and is raised again as an undead Imass.', 'Zemře ve snaze zastavit střet barghastských klanů a znovu povstane jako nemrtvý Imass.') }
      ] }
  },
  {
    id: 'cotillion', intro: { vol: 1, gi: 1 },
    name: L('Cotillion', 'Kotilion'), en: 'Cotillion (The Rope)',
    race: 'god', rlab: L('God of assassins', 'Bůh vrahů'), ic: 'mask',
    kid: L('The patron god of assassins, who moves through the world on secret errands. He is not as cruel as his reputation suggests — but he is not safe either.', 'Patron vrahů, který světem prochází na tajných úkolech. Není tak krutý, jak tvrdí jeho pověst — ale ani bezpečný.'),
    dad: L('Dancer, the Emperor’s friend, who escaped death by ascending to godhood. He shares the House of Shadow with Shadowthrone and plays a very long game with the Crippled God.', 'Dancer, císařův přítel, který unikl smrti vystoupením mezi bohy. S Shadowthronem sdílí Dům stínu a hraje velmi dlouhou hru s Chromým bohem.'),
    arc: { ahead: L('Can a god repay a debt to a mortal?', 'Může bůh splatit dluh smrtelníkovi?'),
      beats: [
        { vol: 1, gi: 1, text: L('Possesses the fisher girl who enlists as Sorry.', 'Posedne rybářovu dceru, která se nechá naverbovat pod jménem Líto.') },
        { vol: 1, gi: 5, text: L('Withdraws from Sorry as part of a bargain with Rake.', 'Stínupán ho stáhne z těla Líto poté, co Dlouhý vlas pohrozí stínu.') },
        { vol: 2, gi: 3, text: L('Reveals that he and Shadowthrone were Kellanved and Dancer.', 'Prozradí, že on a Shadowthrone byli Kellanved a Dancer.') },
        { vol: 4, gi: 3, text: L('Sends Cutter to Drift Avalii, and Apsalar joins him.', 'Pošle Řezníka na Drift Avalii a Apsalar se k němu přidá.') },
        { vol: 10, gi: 6, text: L('Releases Kaminsod from his mortal body at the barrow.', 'U mohyly osvobodí Kaminsoda ze smrtelného těla.') }
      ] }
  },
  {
    id: 'shadowthrone', intro: { vol: 1, gi: 2 },
    name: L('Shadowthrone', 'Stínupán'), en: 'Shadowthrone',
    race: 'god', rlab: L('God of shadow', 'Bůh stínu'), ic: 'tower',
    kid: L('The strange, giggling god of shadow. He appears where he is least wanted and always seems to know more than he says.', 'Podivný, chichotající se bůh stínu. Objevuje se tam, kde ho chtějí nejméně, a vždycky vypadá, že ví víc, než říká.'),
    dad: L('Kellanved, the first Emperor, who cheated death and made himself a god. His humour is impossible to read and his plans span centuries.', 'Kellanved, první císař, který obešel smrt a udělal ze sebe boha. Jeho humor se nedá číst a jeho plány sahají staletí dopředu.'),
    arc: { ahead: L('Is a joke ever just a joke with a god?', 'Je kdy u boha vtip jen vtipem?'),
      beats: [
        { vol: 1, gi: 2, text: L('Watches the Darujhistan game from the shadows.', 'Sleduje darujhistanskou hru ze stínů.') },
        { vol: 2, gi: 3, text: L('Works with Cotillion to steer the Whirlwind.', 'Spolupracuje s Cotillionem na usměrnění Vichru.') },
        { vol: 6, gi: 2, text: L('Helps Paran contain the plague of Poliel.', 'Pomůže Paranovi zadržet mor Poliel.') },
        { vol: 10, gi: 5, text: L('Brings his House into the final convergence.', 'Přivede svůj Dům do závěrečného střetu.') }
      ] }
  },
  {
    id: 'dujek', intro: { vol: 1, gi: 1 },
    name: L('Dujek Onearm', 'Dujek Jednoruký'), en: 'Dujek Onearm',
    race: 'malazan', rlab: L('High Fist', 'Vrchní pěst'), ic: 'crown',
    kid: L('A famous general with one arm. He is tough, fair and tired of wars that never end.', 'Slavný generál s jednou rukou. Je drsný, spravedlivý a unavený z válek, které nikdy nekončí.'),
    dad: L('High Fist of the Malazan 2nd Army in Genabackis. He loves his soldiers more than his career, which makes him dangerous to an Empress.', 'Vrchní pěst malazské 2. armády na Genabackis. Miluje své vojáky víc než kariéru, což ho dělá nebezpečným pro císařovnu.'),
    arc: { ahead: L('What is the difference between treason and conscience?', 'Jaký je rozdíl mezi velezradou a svědomím?'),
      beats: [
        { vol: 1, gi: 1, text: L('Takes Pale at a cost he will never forget.', 'Dobude Pale za cenu, kterou nikdy nezapomene.') },
        { vol: 1, gi: 6, text: L('Seeks an alliance with Rake after his army is declared outlawed.', 'Když jeho armádu postaví mimo zákon, hledá spojenectví s Dlouhým vlasem.') },
        { vol: 3, gi: 1, text: L('Leads Onearm’s Host against the Pannion Domin.', 'Vede Houfec Jednorukého proti Pannionskému dominiu.') },
        { vol: 6, gi: 2, text: L('Dies of the plague before the rebellion is finally broken.', 'Zemře na mor, než je rebelie konečně zlomena.') }
      ] }
  },
  {
    id: 'laseen', intro: { vol: 1, gi: 1 },
    name: L('Empress Laseen', 'Císařovna Laseen'), en: 'Empress Laseen',
    race: 'malazan', rlab: L('Empress of Malaz', 'Císařovna Malazu'), ic: 'crown',
    kid: L('The ruler of the Malazan Empire. She took the throne from the old Emperor and trusts almost no one.', 'Vládkyně Malazské říše. Vzala trůn starému císaři a skoro nikomu nevěří.'),
    dad: L('The Empress who ended the old guard and built an empire on fear and efficiency. She is not a simple villain — only a ruler who has run out of safe choices.', 'Císařovna, která skoncovala se starou gardou a postavila říši na strachu a výkonnosti. Není jednoduchá záporačka — jen vládkyně, které došly bezpečné volby.'),
    arc: { ahead: L('Can you rule by fear and still be just?', 'Můžeš vládnout strachem a přitom být spravedlivý?'),
      beats: [
        { vol: 1, gi: 1, text: L('Sends the old guard to die in Genabackis.', 'Pošle starou gardu zemřít na Genabackis.') },
        { vol: 1, gi: 6, text: L('Declares Dujek and the Bridgeburners outlaws.', 'Prohlásí Dujeka a Paliče mostů za vyvrhele.') },
        { vol: 6, gi: 5, text: L('Meets Tavore at Mock’s Hold and orders the arrest of Nil and Nether.', 'Setká se s Tavore na Posměvákově tvrzi a nařídí zatknout Nila a Nether.') }
      ] }
  },
  {
    id: 'tayschrenn', intro: { vol: 1, gi: 1 },
    name: L('Tayschrenn', 'Tayschrenn'), en: 'Tayschrenn',
    race: 'malazan', rlab: L('Imperial High Mage', 'Císařovnin velemág'), ic: 'warren',
    kid: L('Leads the imperial mages in the assault on Moon’s Spawn. Tattersail has questions about what happened during the battle.', 'Vede říšské mágy při útoku na Měsíční Kámen. Besana má otázky k tomu, co se během bitvy stalo.'),
    dad: L('Leads the imperial mages in the assault on Moon’s Spawn. Tattersail has questions about what happened during the battle.', 'Vede říšské mágy při útoku na Měsíční Kámen. Besana má otázky k tomu, co se během bitvy stalo.')
  },
  {
    id: 'hairlock', intro: { vol: 1, gi: 1 },
    name: L('Hairlock', 'Pačes'), en: 'Hairlock',
    race: 'malazan', rlab: L('Cadre mage', 'Mág kádru'), ic: 'warren',
    kid: L('Gravely wounded at Pale, he survives when Quick Ben transfers his soul into a wooden puppet.', 'U Dřevnova utrpí těžká zranění. Přežije díky tomu, že Rychlej Ben přenese jeho duši do dřevěné loutky.'),
    dad: L('Gravely wounded at Pale, he survives when Quick Ben transfers his soul into a wooden puppet.', 'U Dřevnova utrpí těžká zranění. Přežije díky tomu, že Rychlej Ben přenese jeho duši do dřevěné loutky.')
  },
  {
    id: 'rallick', intro: { vol: 1, gi: 2 },
    name: L('Rallick Nom', 'Rallik Nom'), en: 'Rallick Nom',
    race: 'human', rlab: L('Guild assassin', 'Cechovní asasín'), ic: 'sword',
    kid: L('An assassin in Darujhistan and a friend of Coll. He and Murillio set out to restore Coll’s position.', 'Darúdžhistánský asasín a Collův přítel. S Murilliem se snaží pomoci Collovi získat zpět jeho postavení.'),
    dad: L('An assassin in Darujhistan and a friend of Coll. He and Murillio set out to restore Coll’s position.', 'Darúdžhistánský asasín a Collův přítel. S Murilliem se snaží pomoci Collovi získat zpět jeho postavení.')
  },
  {
    id: 'coll', intro: { vol: 1, gi: 2 },
    name: L('Coll', 'Coll'), en: 'Coll',
    race: 'human', rlab: L('Darujhistan noble', 'Darúdžhistánský šlechtic'), ic: 'town',
    kid: L('A regular at the Phoenix Inn who once held a place among the city’s nobility.', 'Štamgast hostince U fénixe, který kdysi patřil k darúdžhistánské šlechtě.'),
    dad: L('A regular at the Phoenix Inn who once held a place among the city’s nobility.', 'Štamgast hostince U fénixe, který kdysi patřil k darúdžhistánské šlechtě.')
  },
  {
    id: 'vorcan', intro: { vol: 1, gi: 2 },
    name: L('Vorcan', 'Vorcan'), en: 'Vorcan',
    race: 'human', rlab: L('Master of the Assassins’ Guild', 'Mistra cechu asasínů'), ic: 'mask',
    kid: L('Leads the assassins’ guild in Darujhistan, whose help the Bridgeburners seek.', 'Vede darúdžhistánský cech asasínů, jehož pomoc hledají Paliči mostů.'),
    dad: L('Leads the assassins’ guild in Darujhistan, whose help the Bridgeburners seek.', 'Vede darúdžhistánský cech asasínů, jehož pomoc hledají Paliči mostů.')
  },
  {
    id: 'raest', intro: { vol: 1, gi: 4 },
    name: L('Raest', 'Raest'), en: 'Raest',
    race: 'jaghut', rlab: L('Jaghut Tyrant', 'Jaghutský tyran'), ic: 'imass',
    kid: L('An ancient Tyrant freed from a barrow near Darujhistan. He seeks the vessel containing his magic.', 'Dávný tyran propuštěný z mohyly nedaleko Darúdžhistánu. Hledá schránku se svou mocí.'),
    dad: L('An ancient Tyrant freed from a barrow near Darujhistan. He seeks the vessel containing his magic.', 'Dávný tyran propuštěný z mohyly nedaleko Darúdžhistánu. Hledá schránku se svou mocí.')
  },
  {
    id: 'felisin', intro: { vol: 2, gi: 1 },
    name: L('Felisin Paran', 'Felisín Paran'), en: 'Felisin Paran',
    race: 'human', rlab: L('Noble outcast', 'Vyvržená šlechtična'), ic: 'mask',
    kid: L('A young noble girl who loses everything and is sent to a terrible island prison. She is clever, angry and determined to survive.', 'Mladá šlechtična, která ztratí všechno a je poslána na hrozný ostrovní trestanecký tábor. Je chytrá, rozzlobená a rozhodnutá přežít.'),
    dad: L('The youngest Paran sister, sent to the otataral mines during the cull of the nobility.', 'Nejmladší ze sester Paranových, kterou během čistky mezi šlechtou pošlou do otataralových dolů.'),
    arc: { ahead: L('Does suffering make a person stronger, or merely more dangerous?', 'Dělá utrpení člověka silnějším, nebo jen nebezpečnějším?'),
      beats: [
        { vol: 2, gi: 1, text: L('Is sent to the otataral mines with the prisoners from Unta.', 'S vězni z Unty ji pošlou do otataralových dolů.') },
        { vol: 2, gi: 3, text: L('Escapes the island with Heboric and Baudin.', 'Uteče z ostrova s Heborikem a Baudínem.') },
        { vol: 2, gi: 5, text: L('Becomes the new Sha’ik, vessel of the Whirlwind.', 'Stane se novou Ša’ik, nádobou Smršti.') },
        { vol: 4, gi: 5, text: L('Is killed by her sister Tavore, who does not recognise her.', 'Zabije ji sestra Tavore, která ji nepozná.') }
      ] }
  },
  {
    id: 'heboric', intro: { vol: 2, gi: 1 },
    name: L('Heboric Light Touch', 'Heborik Lehkoruký'), en: 'Heboric',
    race: 'human', rlab: L('Excommunicated priest', 'Exkomunikovaný kněz'), ic: 'flask',
    kid: L('A former priest with no hands, exiled for telling the truth. He is bitter, brave and strangely gentle.', 'Bývalý kněz bez rukou, vyhnaný za to, že řekl pravdu. Je zatrpklý, statečný a podivně jemný.'),
    dad: L('A historian and High Priest of Fener whose hands were taken as punishment. The Empress sends him to the otataral mines.', 'Historik a velekněz Fenera, kterému byly jako trest odebrány ruce. Císařovna ho pošle do otataralových dolů.'),
    arc: { ahead: L('What is a priest without a god — and what is a god without a priest?', 'Co je kněz bez boha — a co je bůh bez kněze?'),
      beats: [
        { vol: 2, gi: 1, text: L('Is shipped to the otataral mines with Felisin.', 'Je poslán do otataralských dolů s Felisin.') },
        { vol: 2, gi: 3, text: L('Touches the jade finger during the escape from the mines. Fener is later drawn into the mortal world.', 'Při útěku z dolů se dotkne nefritového prstu. Později je Fener vtažen do světa smrtelníků.') },
        { vol: 4, gi: 4, text: L('Is known as Ghost Hands and serves among Sha’ik’s followers.', 'Je známý jako Heborik Neviditelné ruce a patří ke stoupencům ša’ik.') },
        { vol: 10, gi: 5, text: L('Takes the chains of Korabas.', 'Převezme okovy Korabas.') }
      ] }
  },
  {
    id: 'duiker', intro: { vol: 2, gi: 1 },
    name: L('Duiker', 'Kalous'), en: 'Duiker',
    race: 'malazan', rlab: L('Imperial historian', 'Císařský historik'), ic: 'book',
    kid: L('A historian who follows the army with a notebook. He wants to write down what really happened, even when the truth is unbearable.', 'Historik, který chodí s armádou a zápisníkem. Chce zaznamenat, co se skutečně stalo, i když je pravda nesnesitelná.'),
    dad: L('The Imperial Historian attached to Coltaine’s 7th Army. His account of the Chain of Dogs turns a defeat into a story that will outlive the empire.', 'Císařský historik přidělený ke 7. armádě Coltaina. Jeho záznam Psího řetězu promění porážku v příběh, který přežije říši.'),
    arc: { ahead: L('Who decides what history remembers?', 'Kdo rozhoduje, co si historie zapamatuje?'),
      beats: [
        { vol: 2, gi: 1, text: L('Is stationed with the Seventh Army when Coltaine takes command.', 'Je u 7. armády, když velení převezme Coltain.') },
        { vol: 2, gi: 4, text: L('Records the battles of the Chain of Dogs as they happen.', 'Zaznamenává bitvy Psího řetězu tak, jak se dějí.') },
        { vol: 2, gi: 6, text: L('Brings the refugees into Aren and is later crucified. Baruk’s servants recover his body.', 'Dovede uprchlíky do Arenu a později je ukřižován. Barúkovi služebníci odnesou jeho tělo.') },
        { vol: 3, gi: 6, text: L('Tells the story of the Chain of Dogs to the surviving Bridgeburners.', 'Vypráví příběh Psího řetězu přeživším Paličům mostů.') }
      ] }
  },
  {
    id: 'coltaine', intro: { vol: 2, gi: 1 },
    name: L('Coltaine', 'Coltaine'), en: 'Coltaine',
    race: 'human', rlab: L('Wickan warleader', 'Wickanský válečník'), ic: 'crown',
    kid: L('A fierce warleader with crow feathers in his hair. He has to lead thousands of ordinary people across a hostile land.', 'Divoký válečník s havraními pery ve vlasech. Musí vést tisíce obyčejných lidí přes nepřátelskou zemi.'),
    dad: L('The Wickan commander of the 7th Army, given an impossible evacuation. His Chain of Dogs becomes the defining legend of Malazan courage.', 'Wickanský velitel 7. armády, kterému bylo svěřeno nemožné evakuovat. Jeho Psí řetěz se stane určující legendou malazské odvahy.'),
    arc: { ahead: L('What is a leader willing to spend to save strangers?', 'Co je vůdce ochoten vydat, aby zachránil cizí lidi?'),
      beats: [
        { vol: 2, gi: 1, text: L('Takes command of the 7th and the refugee column.', 'Převezme velení 7. armády a uprchlického proudu.') },
        { vol: 2, gi: 4, text: L('Fights his way from Hissar toward Aren with the refugees.', 'S uprchlíky se probojuje z Hissaru směrem k Arenu.') },
        { vol: 2, gi: 6, text: L('Is captured outside Aren after the refugees reach the city. Squint ends his suffering with an arrow.', 'Padne do zajetí před Arenem, když už uprchlíci dosáhli města. Očko jeho utrpení ukončí šípem.') }
      ] }
  },
  {
    id: 'icarium', intro: { vol: 2, gi: 2 },
    name: L('Icarium', 'Icarium'), en: 'Icarium',
    race: 'jaghut', rlab: L('Half-Jaghut wanderer', 'Poloviční Jaghut'), ic: 'jaghut',
    kid: L('A gentle wanderer who builds clocks and cannot remember his past. When he gets angry, terrible things happen that he never remembers.', 'Jemný poutník, který staví hodiny a nepamatuje si svou minulost. Když se rozzlobí, dějí se hrozné věci, na které si nikdy nevzpomene.'),
    dad: L('An immortal half-Jaghut whose rage has emptied cities. His companion Mappo keeps him from remembering — and from becoming the destroyer again.', 'Nesmrtelný poloviční Jaghut, jehož vztek vyprázdnil města. Jeho společník Mappo mu brání vzpomínat — a znovu se stát ničitelem.'),
    arc: { ahead: L('Is forgetting a mercy, or the cruelest kind of prison?', 'Je zapomnění milost, nebo nejkrutější druh vězení?'),
      beats: [
        { vol: 2, gi: 2, text: L('Crosses Raraku with Mappo, seeking the Path of Hands.', 'Přejde Raraku s Mappem a hledá Stezku rukou.') },
        { vol: 6, gi: 4, text: L('Travels with Taralack Veed after being separated from Mappo.', 'Po odloučení od Mappa cestuje s Taralackem Výdem.') },
        { vol: 6, gi: 6, text: L('Overwhelms the defenders at the First Throne until the Eres’al stops him.', 'U Prvního trůnu přemáhá obránce, dokud ho nezastaví Eres’al.') },
        { vol: 7, gi: 1, text: L('Arrives in Letheras as a challenger to Rhulad.', 'Přijde do Letherasu jako vyzývatel Rhulada.') },
        { vol: 7, gi: 6, text: L('Tries to remake K’rul’s warrens and breaks something vast.', 'Pokusí se předělat K’rulovy warreny a rozbije něco obrovského.') }
      ] }
  },
  {
    id: 'mappo', intro: { vol: 2, gi: 2 },
    name: L('Mappo Runt', 'Mappo Runt'), en: 'Mappo Runt',
    race: 'human', rlab: L('Trell warrior', 'Trellský bojovník'), ic: 'sword',
    kid: L('A huge, kind traveler who looks after Icarium. He carries a secret that makes him sad even when he smiles.', 'Obrovský laskavý poutník, který se stará o Icaria. Nese tajemství, kvůli kterému je smutný, i když se usmívá.'),
    dad: L('A Trell warrior sworn to watch Icarium and, if necessary, stop him. His friendship is real; so is his betrayal.', 'Trellský bojovník zavázaný hlídat Icaria a v případě potřeby ho zastavit. Jeho přátelství je opravdové — a stejně opravdová je jeho zrada.'),
    arc: { ahead: L('Can you love someone you were sent to destroy?', 'Můžeš milovat někoho, koho tě poslali zničit?'),
      beats: [
        { vol: 2, gi: 2, text: L('Guides Icarium through the Holy Desert.', 'Provází Icaria Svatou pouští.') },
        { vol: 2, gi: 6, text: L('Chooses friendship over the Nameless Ones’ orders — for now.', 'Zvolí přátelství před rozkazy Bezjmenných — prozatím.') },
        { vol: 6, gi: 3, text: L('Is separated from Icarium by the Nameless Ones.', 'Je od Icaria oddělen Bezjmennými.') },
        { vol: 8, gi: 2, text: L('Searches for Icarium across the world.', 'Hledá Icaria po celém světě.') }
      ] }
  },
  {
    id: 'pust', intro: { vol: 2, gi: 2 },
    name: L('Iskaral Pust', 'Iskaral Pust'), en: 'Iskaral Pust',
    race: 'human', rlab: L('High Priest of Shadow', 'Velekněz stínu'), ic: 'mask',
    kid: L('A scruffy, giggling priest who talks to himself and lives in a dusty temple. Nobody can tell whether he is mad or the cleverest person in the room.', 'Otrhaný chichotající se kněz, který mluví sám se sebou a žije v zaprášeném chrámu. Nikdo nepozná, jestli je šílený, nebo nejchytřejší v místnosti.'),
    dad: L('Shadowthrone’s High Priest in Raraku, a master of misdirection and domestic chaos. His wife and his mule are nearly as dangerous as he is.', 'Shadowthronův velekněz v Raraku, mistr klamání a domácího chaosu. Jeho žena a jeho mula jsou skoro stejně nebezpečné jako on.'),
    arc: { ahead: L('Is madness a mask, a method, or both?', 'Je šílenství maska, metoda, nebo obojí?'),
      beats: [
        { vol: 2, gi: 2, text: L('Shelters Icarium and Mappo in his temple in Raraku.', 'Ukryje Icaria a Mappa ve svém chrámu v Raraku.') },
        { vol: 2, gi: 6, text: L('Helps the travellers find the road to Tremorlor.', 'Pomůže poutníkům najít cestu k Tremorloru.') },
        { vol: 4, gi: 6, text: L('Keeps meddling in the affairs of gods and mortals alike.', 'Plete se do záležitostí bohů i smrtelníků.') }
      ] }
  },
  {
    id: 'karsa', intro: { vol: 2, gi: 2 },
    name: L('Karsa Orlong', 'Karsa Orlong'), en: 'Karsa Orlong (Toblakai)',
    race: 'human', rlab: L('Teblor warrior', 'Teblorský bojovník'), ic: 'sword',
    kid: L('A gigantic warrior from the mountains who wants to see the world and conquer it. He is arrogant, brave and slowly learning that strength is not enough.', 'Obrovský bojovník z hor, který chce vidět svět a dobýt ho. Je arogantní, statečný a pomalu zjišťuje, že síla nestačí.'),
    dad: L('A Teblor of the Uryd, descendant of the Toblakai. His war on civilisation begins as conquest and becomes a long, brutal education in consequence.', 'Teblor z rodu Urydů, potomek Toblakaiů. Jeho válka s civilizací začíná jako dobývání a stává se dlouhým, brutálním vzděláváním v následcích.'),
    arc: { ahead: L('Can a man who trusts only his sword ever learn to trust anything else?', 'Může muž, který věří jen svému meči, někdy uvěřit něčemu jinému?'),
      beats: [
        { vol: 2, gi: 2, text: L('Appears as the Toblakai guarding Sha’ik in Raraku.', 'Objeví se jako Toblakai střežící Ša’ik v Raraku.') },
        { vol: 4, gi: 1, text: L('Leaves his mountain home with two companions and a promise of glory.', 'Opustí svůj horský domov se dvěma druhy a slibem slávy.') },
        { vol: 4, gi: 4, text: L('Challenges the Seven and makes a flint blade that carries Bairoth and Delum.', 'Postaví se Sedmi a vytvoří pazourkovou čepel, v níž ho provázejí Bairot a Delum.') },
        { vol: 7, gi: 1, text: L('Comes to Letheras to challenge Emperor Rhulad.', 'Přijde do Letherasu vyzvat císaře Rhulada.') },
        { vol: 7, gi: 5, text: L('Cuts down Rhulad and walks away from the sword.', 'Sekne Rhulada a odejde od meče.') }
      ] }
  },
  {
    id: 'leoman', intro: { vol: 2, gi: 2 },
    name: L('Leoman of the Flails', 'Leoman S cepy'), en: 'Leoman of the Flails',
    race: 'human', rlab: L('Whirlwind commander', 'Velitel Smršti'), ic: 'flame',
    kid: L('A rebel commander with a burning hatred of the empire. He is charming, ruthless and always thinking about the next battle.', 'Rebelský velitel s planoucí nenávistí k říši. Je okouzlující, nemilosrdný a pořád myslí na další bitvu.'),
    dad: L('Sha’ik’s most trusted captain, a master of desert war and betrayal. He believes in the Whirlwind long after its goddess stops believing in him.', 'Nejdůvěryhodnější kapitán Ša’ik, mistr pouštní války a zrady. Věří ve Vichr ještě dlouho poté, co v něj přestane věřit jeho bohyně.'),
    arc: { ahead: L('What remains of a holy war when the prophecy fails?', 'Co zůstane ze svaté války, když proroctví selže?'),
      beats: [
        { vol: 2, gi: 2, text: L('Guards Sha’ik when Kalam brings her the Book of the Apocalypse.', 'Střeží ša’ik, když jí Kalam přinese Knihu apokalypsy.') },
        { vol: 2, gi: 5, text: L('Waits with the Toblakai and recognises Felisin as the new Sha’ik.', 'Čeká s Toblakaiem a uzná Felisín za novou ša’ik.') },
        { vol: 4, gi: 6, text: L('Leaves Raraku with his surviving followers.', 'Opustí Raraku se svými přeživšími stoupenci.') },
        { vol: 6, gi: 1, text: L('Turns Y’Ghatan into a trap for the 14th Army.', 'Promění Y’Ghatan v past pro 14. armádu.') }
      ] }
  },
  {
    id: 'baudin', intro: { vol: 2, gi: 1 },
    name: L('Baudin', 'Baudín'), en: 'Baudin',
    race: 'malazan', rlab: L('Prisoner at Skullcup', 'Vězeň v Lebeni'), ic: 'mask',
    kid: L('One of the prisoners sent to the mines with Felisin and Heboric.', 'Jeden z vězňů, kteří putují do dolů s Felisín a Heborikem.'),
    dad: L('One of the prisoners sent to the mines with Felisin and Heboric.', 'Jeden z vězňů, kteří putují do dolů s Felisín a Heborikem.')
  },
  {
    id: 'bult', intro: { vol: 2, gi: 1 },
    name: L('Bult', 'Bult'), en: 'Bult',
    race: 'malazan', rlab: L('Wickan commander', 'Vísecký velitel'), ic: 'crown',
    kid: L('Coltaine’s uncle and a veteran commander in the Seventh Army.', 'Coltainův strýc a zkušený velitel v 7. armádě.'),
    dad: L('Coltaine’s uncle and a veteran commander in the Seventh Army.', 'Coltainův strýc a zkušený velitel v 7. armádě.')
  },
  {
    id: 'pormqual', intro: { vol: 2, gi: 1 },
    name: L('Pormqual', 'Pormqual'), en: 'Pormqual',
    race: 'malazan', rlab: L('High Fist of Seven Cities', 'Sedmiměstská vrchní pěst'), ic: 'crown',
    kid: L('Commands the Malazan stronghold of Aren. Mallick Rel is his principal adviser.', 'Velí malazské pevnosti Aren. Jeho hlavním rádcem je Mallik Rel.'),
    dad: L('Commands the Malazan stronghold of Aren. Mallick Rel is his principal adviser.', 'Velí malazské pevnosti Aren. Jeho hlavním rádcem je Mallik Rel.')
  },
  {
    id: 'kulp', intro: { vol: 2, gi: 3 },
    name: L('Kulp', 'Kulp'), en: 'Kulp',
    race: 'malazan', rlab: L('Cadre mage of the Seventh Army', 'Mág kádru 7. armády'), ic: 'warren',
    kid: L('Uses his magic to help the fugitives after their escape from the mines.', 'Po útěku z dolů pomáhá uprchlíkům svou magií.'),
    dad: L('Uses his magic to help the fugitives after their escape from the mines.', 'Po útěku z dolů pomáhá uprchlíkům svou magií.')
  },
  {
    id: 'itkovian', intro: { vol: 3, gi: 1 },
    name: L('Itkovian', 'Itkovian'), en: 'Itkovian',
    race: 'human', rlab: L('Shield Anvil of Fener', 'Fenerův nezdolný štít'), ic: 'sword',
    kid: L('A soldier who can take other people’s pain upon himself. He serves alongside the soldiers who defend Capustan.', 'Voják, který dokáže převzít bolest druhých. Slouží po boku obránců Capustanu.'),
    dad: L('The Grey Swords’ Shield Anvil serves Fener by taking on the suffering of others.', 'Jako nezdolný štít Šedých mečů slouží Fenerovi tím, že na sebe bere utrpení druhých.'),
    arc: { ahead: L('Can compassion be a weapon?', 'Může být soucit zbraní?'),
      beats: [
        { vol: 3, gi: 1, text: L('Serves with Brukhalian and Karnadas in the defense of Capustan.', 'Brání Capustan spolu s Bruchalianem a Karnadasem.') },
        { vol: 3, gi: 2, text: L('Faces the cannibal Anaster and refuses to look away.', 'Čelí kanibalovi Anasterovi a odmítá odvrátit zrak.') },
        { vol: 3, gi: 6, text: L('Takes the pain of the T’lan Imass into himself and dies giving peace.', 'Vezme do sebe bolest T’lan Imassů a zemře, aby dal mír.') },
        { vol: 8, gi: 2, text: L('Is honoured as the Redeemer at the Great Barrow.', 'U Velké mohyly ho uctívají jako Vykupitele.') },
        { vol: 8, gi: 6, text: L('Receives the Dying God and takes in his pain.', 'Přijme umírajícího boha a vezme na sebe jeho bolest.') }
      ] }
  },
  {
    id: 'gruntle', intro: { vol: 3, gi: 1 },
    name: L('Gruntle', 'Vrč'), en: 'Gruntle',
    race: 'human', rlab: L('Caravan guard', 'Karavanní strážce'), ic: 'sword',
    kid: L('A big, grumpy caravan guard with a soft spot for his friends. When something terrible happens, something tiger-like wakes up inside him.', 'Velký mrzutý strážce karavan, který má slabost pro přátele. Když se stane něco hrozného, probudí se v něm něco tygřího.'),
    dad: L('A caravan captain who takes a contract to escort travellers to Capustan.', 'Kapitán karavany, který přijme zakázku na doprovod cestujících do Capustanu.'),
    arc: { ahead: L('Is rage a gift, a curse, or simply a god looking for a hand?', 'Je vztek dar, prokletí, nebo jen bůh hledající ruku?'),
      beats: [
        { vol: 3, gi: 1, text: L('Escorts a caravan toward Capustan and meets the Grey Swords.', 'Doprovází karavanu k Capustanu a potká Šedé meče.') },
        { vol: 3, gi: 2, text: L('Becomes Treach’s Mortal Sword during the siege of Capustan.', 'Při obléhání Capustanu se stane Trhačovým smrtelným mečem.') },
        { vol: 8, gi: 2, text: L('Returns to Darujhistan, still followed by Trake’s priests.', 'Vrátí se do Darúdžhistánu a Trhačovi kněží ho stále následují.') }
      ] }
  },
  {
    id: 'toc', intro: { vol: 3, gi: 1 },
    name: L('Toc the Younger', 'Toc Mladší'), en: 'Toc the Younger',
    race: 'human', rlab: L('Malazan scout', 'Malazský zvěd'), ic: 'eye',
    kid: L('A one-eyed scout who has been through more than most soldiers. He keeps doing the right thing even when it costs him everything.', 'Jednooký zvěd, který si prošel víc než většina vojáků. Pořád dělá správnou věc, i když ho to stojí všechno.'),
    dad: L('Aral Fayle, a Malazan scout, reappears at the ruins of Morn after being lost in Chaos.', 'Aral Fayle, malazský zvěd, se po bloudění v chaosu objeví v rozvalinách Morn.'),
    arc: { ahead: L('What is left of a man when gods use him as a door?', 'Co zůstane z člověka, když ho bohové použijí jako dveře?'),
      beats: [
        { vol: 3, gi: 1, text: L('Emerges from the warren of chaos with Togg inside him.', 'Vynoří se z warrenu chaosu s Toggem uvnitř.') },
        { vol: 3, gi: 4, text: L('Is captured and tortured by the Pannion Seer.', 'Je zajat a mučen Pannionským věštcem.') },
        { vol: 3, gi: 6, text: L('Receives a new body and a second chance.', 'Dostane nové tělo a druhou šanci.') },
        { vol: 7, gi: 2, text: L('Dies giving the Awl children time to escape.', 'Zemře, když dětem Oulanů získává čas k útěku.') }
      ] }
  },
  {
    id: 'kallor', intro: { vol: 3, gi: 1 },
    name: L('Kallor', 'Kallor'), en: 'Kallor',
    race: 'human', rlab: L('The High King', 'Velekrál'), ic: 'crown',
    kid: L('An ancient king who destroyed his own empire rather than give it up. He is still alive, still bitter and still dangerous.', 'Dávný král, který radši zničil svou říši, než aby se jí vzdal. Je pořád naživu, pořád zatrpklý a pořád nebezpečný.'),
    dad: L('Kallor Eiderann Tes’thesula, the High King who destroyed his empire before the Elder Gods arrived. He now serves as Caladan Brood’s second.', 'Kallor Eiderann Tes’thesula, velekrál, který zničil svou říši před příchodem starších bohů. Nyní je zástupcem Caladana Chmura.'),
    arc: { ahead: L('Can someone who has betrayed everything ever be trusted?', 'Dá se věřit někomu, kdo zradil všechno?'),
      beats: [
        { vol: 3, gi: 1, text: L('Serves as Caladan Brood’s second in the allied camp.', 'Slouží jako druhý muž Caladana Chmura ve spojeneckém táboře.') },
        { vol: 3, gi: 5, text: L('Kills Whiskeyjack before the walls of Coral.', 'Zabije Whiskeyjacka před hradbami Korálu.') },
        { vol: 8, gi: 3, text: L('Travels for a time with Nimander’s group, then heads for Darujhistan.', 'Nějakou dobu cestuje s Nimanderovou skupinou a pak zamíří do Darúdžhistánu.') },
        { vol: 8, gi: 5, text: L('Is kept from reaching Darujhistan in time by Spinnock Durav.', 'Spinnok Durav ho zdrží na cestě do Darúdžhistánu.') }
      ] }
  },
  {
    id: 'korlat', intro: { vol: 3, gi: 1 },
    name: L('Korlat', 'Korlat'), en: 'Korlat',
    race: 'tiste', rlab: L('Tiste Andii commander', 'Velitelka Tiste Andii'), ic: 'moon',
    kid: L('A Tiste Andii warrior who commands Rake’s soldiers. She is calm in battle and much less calm around the man she loves.', 'Tiste Andii válečnice, která velí Rakovým vojákům. V bitvě je klidná a mnohem méně klidná kolem muže, kterého miluje.'),
    dad: L('Anomander Rake’s field commander and, briefly, Whiskeyjack’s hope for a life after war. Her grief is one of the quiet engines of the later books.', 'Polní velitelka Anomandera Dlouhého vlasu a na krátko Whiskeyjackova naděje na život po válce. Její žal je jedním z tichých motorů pozdějších knih.'),
    arc: { ahead: L('How does an immortal grieve?', 'Jak truchlí nesmrtelný?'),
      beats: [
        { vol: 3, gi: 1, text: L('Commands the Tiste Andii in the march against the Pannion.', 'Velí Tiste Andii na pochodu proti Pannionům.') },
        { vol: 3, gi: 5, text: L('Loses Whiskeyjack at Coral.', 'Ztratí Whiskeyjacka u Korálu.') },
        { vol: 3, gi: 6, text: L('Carries his memory into the long peace that follows.', 'Nese jeho památku do dlouhého míru, který následuje.') }
      ] }
  },
  {
    id: 'silverfox', intro: { vol: 3, gi: 1 },
    name: L('Silverfox', 'Stříbrná liška'), en: 'Silverfox',
    race: 'ascendant', rlab: L('Rhivi Bonecaster', 'Rhivská kostějka'), ic: 'star',
    kid: L('A strange child who grows too fast and remembers lives she never lived. She is loved and feared by the people who made her.', 'Podivné dítě, které roste příliš rychle a pamatuje si životy, které nežilo. Lidé, kteří ji stvořili, ji milují i se jí bojí.'),
    dad: L('A Rhivi child born to the Mhybe. She grows quickly and carries the souls of dead Malazan mages.', 'Rhivské dítě, které porodila Mhybe. Rychle roste a nese duše mrtvých malazských mágů.'),
    arc: { ahead: L('Whose memories does she carry?', 'Čí vzpomínky v sobě nese?'),
      beats: [
        { vol: 3, gi: 1, text: L('Carries Tattersail and Nightchill within her.', 'Nese v sobě Besanu a Tumavu.') },
        { vol: 3, gi: 5, text: L('Bellurdan’s presence becomes clear as she calls the T’lan Imass to the Second Gathering.', 'Při druhém shromáždění T’lan Imass vyjde najevo i Bellurdanova přítomnost.') },
        { vol: 3, gi: 6, text: L('Creates a world in which the Mhybe can have a new life.', 'Vytvoří svět, v němž může Mhybe začít nový život.') }
      ] }
  },
  {
    id: 'brukhalian', intro: { vol: 3, gi: 2 },
    name: L('Brukhalian', 'Bruchalian'), en: 'Brukhalian',
    race: 'human', rlab: L('Mortal Sword of Fener', 'Fenerův smrtelný meč'), ic: 'sword',
    kid: L('The commander of the Grey Swords. His soldiers are hired to defend Capustan.', 'Velitel Šedých mečů. Jeho vojáky najali na obranu Capustanu.'),
    dad: L('Brukhalian commands the Grey Swords at Capustan as Fener’s Mortal Sword, alongside Itkovian and Karnadas.', 'Bruchalian v Capustanu velí Šedým mečům jako Fenerův smrtelný meč po boku Itkoviana a Karnadase.'),
    arc: { beats: [
      { vol: 3, gi: 3, text: L('Refuses Hood’s offer and falls during the siege.', 'Odmítne nabídku Kápě a padne při obléhání.') }
    ] }
  },
  {
    id: 'karnadas', intro: { vol: 3, gi: 2 },
    name: L('Karnadas', 'Karnadas'), en: 'Karnadas',
    race: 'human', rlab: L('Destriant of Fener', 'Fenerův válečný jezdec'), ic: 'flame',
    kid: L('A priest who helps heal the Grey Swords as they defend Capustan.', 'Kněz, který léčí Šedé meče při obraně Capustanu.'),
    dad: L('Fener’s Destriant and the spiritual authority of the Grey Swords at Capustan.', 'Fenerův válečný jezdec a duchovní autorita Šedých mečů v Capustanu.'),
    arc: { beats: [
      { vol: 3, gi: 3, text: L('Spends his remaining strength healing the wounded Itkovian.', 'Vydá poslední síly při léčení raněného Itkoviana.') }
    ] }
  },
  {
    id: 'lady-envy', intro: { vol: 3, gi: 1 },
    name: L('Lady Envy', 'paní Závist'), en: 'Lady Envy',
    race: 'ascendant', rlab: L('Sorceress at Morn', 'Kouzelnice z Morn'), ic: 'star',
    kid: L('A powerful sorceress whose companions include three masked warriors and two unusual animals.', 'Mocná kouzelnice, se kterou cestují tři maskovaní bojovníci a dvě neobvyklá zvířata.'),
    dad: L('A daughter of Draconus who travels north from Morn with the Seguleh, Garath and Baaljagg.', 'Draconova dcera, která z Morn míří na sever se Segulehy, Garatem a Baaljagg.'),
    arc: { beats: [
      { vol: 3, gi: 1, text: L('Meets Toc and Tool at Morn.', 'Potká Toca a Tolara u Morn.') }
    ] }
  },
  {
    id: 'mhybe', intro: { vol: 3, gi: 1 },
    name: L('The Mhybe', 'Mhybe'), en: 'The Mhybe',
    race: 'human', rlab: L('Rhivi matron', 'Rhivská matrona'), ic: 'human',
    kid: L('Silverfox’s mother, who ages unusually quickly as her daughter grows.', 'Matka Stříbrné lišky, která stárne neobvykle rychle, zatímco její dcera roste.'),
    dad: L('The Rhivi woman who gives birth to Silverfox. Raising her daughter comes at a cost to her own body.', 'Rhivka, která porodí Stříbrnou lišku. Rychlý růst její dcery ubírá sílu jejímu vlastnímu tělu.'),
    arc: { beats: [
      { vol: 3, gi: 6, text: L('Finds a new life in the world Silverfox made for her.', 'Najde nový život ve světě, který pro ni vytvořila Stříbrná liška.') }
    ] }
  },
  {
    id: 'brood', intro: { vol: 3, gi: 1 },
    name: L('Caladan Brood', 'Caladan Chmur'), en: 'Caladan Brood',
    race: 'ascendant', rlab: L('Warlord of Genabackis', 'Velitel osvobozeneckého vojska'), ic: 'sword',
    kid: L('A warlord who carries a great hammer. When Capustan is threatened, he works with his former enemies.', 'Velitel s mohutným kladivem. Když je Capustan v ohrožení, spojí síly s někdejšími nepřáteli.'),
    dad: L('The commander of the forces resisting the Malazans in Genabackis. He agrees to fight beside Onearm’s Host against the Pannion Domin.', 'Velitel vojska, které v Genabakis vzdoruje Malazu. Souhlasí, že proti Pannionskému dominiu bude bojovat po boku Houfce Jednorukého.'),
    arc: { beats: [
      { vol: 3, gi: 1, text: L('Enters the alliance with Dujek and Whiskeyjack.', 'Uzavře spojenectví s Dujekem a Whiskeyjackem.') }
    ] }
  },
  {
    id: 'pannion-seer', intro: { vol: 3, gi: 1 },
    name: L('The Pannion Seer', 'Pannionský věštec'), en: 'The Pannion Seer',
    race: 'jaghut', rlab: L('Ruler of the Pannion Domin', 'Vládce Pannionského dominia'), ic: 'crown',
    kid: L('The ruler whose armies threaten Capustan and the lands around it.', 'Vládce, jehož vojska ohrožují Capustan a okolní kraje.'),
    dad: L('The priest and king of the Pannion Domin. His armies march north toward Capustan.', 'Kněz a král Pannionského dominia. Jeho vojska míří na sever ke Capustanu.'),
    arc: { beats: [
      { vol: 3, gi: 4, text: L('Takes Toc prisoner during the war.', 'Během války zajme Toca.') },
      { vol: 3, gi: 6, text: L('Uses Omtose Phellack to slow the poisoning of Burn after his sister is freed.', 'Po vysvobození své sestry zpomalí otravu Ohnice pomocí chodby Omtose Phellack.') }
    ] }
  },
  {
    id: 'anaster', intro: { vol: 3, gi: 2 },
    name: L('Anaster', 'Anaster'), en: 'Anaster',
    race: 'human', rlab: L('Leader among the Tenescowri', 'Jeden z vůdců Tenescowri'), ic: 'flame',
    kid: L('A leader among the hungry troops sent against Capustan.', 'Jeden z velitelů hladového vojska, které táhne proti Capustanu.'),
    dad: L('The First Child of the Dead Seed, a leader of the Tenescowri during the siege of Capustan.', 'První dítě z mrtvého semene a jeden z vůdců Tenescowri při obléhání Capustanu.'),
    arc: { beats: [
      { vol: 3, gi: 3, text: L('Refuses Itkovian’s offer to take his despair.', 'Odmítne Itkovianovu nabídku převzít jeho zoufalství.') },
      { vol: 3, gi: 6, text: L('His body becomes a new home for Toc’s soul.', 'Jeho tělo se stane novým domovem Tocovy duše.') }
    ] }
  },
  {
    id: 'tavore', intro: { vol: 2, gi: 1 },
    name: L('Tavore Paran', 'Tavore Paran'), en: 'Tavore Paran',
    race: 'human', rlab: L('Adjunct to the Empress', 'Pobočnice císařovny'), ic: 'crown',
    kid: L('A cold, controlled commander who never explains herself. She carries more guilt than anyone knows and keeps marching anyway.', 'Chladná, sebeovládaná velitelka, která se nikdy nevysvětluje. Nese víc viny, než kdokoli ví, a přesto jde dál.'),
    dad: L('Ganoes and Felisin’s sister, appointed Adjunct by Empress Laseen.', 'Sestra Ganoese a Felisín, kterou císařovna Laseen jmenuje pobočnicí.'),
    arc: { ahead: L('How much of yourself can you sacrifice before there is nothing left to command?', 'Kolik ze sebe můžeš obětovat, než nezbude nic, čemu velet?'),
      beats: [
        { vol: 2, gi: 1, text: L('Is serving as the Empress’s Adjunct during the cull of the nobility.', 'V době čistky mezi šlechtou slouží jako císařovnina pobočnice.') },
        { vol: 4, gi: 2, text: L('Takes command of the Fourteenth Army at Aren.', 'V Arenu převezme velení 14. armády.') },
        { vol: 4, gi: 5, text: L('Kills Sha’ik without knowing it is Felisin.', 'Zabije ša’ik, aniž pozná Felisín.') },
        { vol: 6, gi: 1, text: L('Commands the Fourteenth in the campaign against Leoman.', 'Velí Čtrnácté armádě v tažení proti Leomanovi.') },
        { vol: 6, gi: 5, text: L('Refuses to surrender the Wickans to Rel and Dom.', 'Odmítne vydat Záchlumčany Relovi a Domovi.') },
        { vol: 9, gi: 1, text: L('Marches into the Letherii wastelands on a mission no one understands.', 'Vyráží do letherských pustin na misi, které nikdo nerozumí.') }
      ] }
  },
  {
    id: 'trull', intro: { vol: 4, gi: 1 },
    name: L('Trull Sengar', 'Trull Sengar'), en: 'Trull Sengar',
    race: 'tiste', rlab: L('Tiste Edur exile', 'Tiste Edur ve vyhnanství'), ic: 'tiste',
    kid: L('A Tiste Edur warrior whose own kin cast him out.', 'Bojovník Tiste Edur, kterého zavrhli vlastní příbuzní.'),
    dad: L('A Tiste Edur warrior condemned and left chained in the Nascent.', 'Bojovník Tiste Edur, odsouzený a ponechaný v okovech v Rodící se.'),
    arc: { ahead: L('Can an exile ever go home?', 'Může se vyhnanec někdy vrátit domů?'),
      beats: [
        { vol: 4, gi: 4, text: L('Onrack finds him and breaks his chains.', 'Onrack ho najde a rozbije jeho okovy.') },
        { vol: 4, gi: 6, text: L('Reaches the First Throne with Onrack and begins his story.', 'Dostane se s Onrackem k Prvnímu trůnu a začne vyprávět svůj příběh.') },
        { vol: 5, gi: 1, text: L('His account goes back to his life among the Sengar brothers.', 'Jeho vyprávění se vrací k životu mezi bratry Sengarovými.') },
        { vol: 6, gi: 6, text: L('Defends the First Throne against an Edur war party and Icarium.', 'Brání První trůn proti válečné družině Edur a Icariovi.') },
        { vol: 7, gi: 4, text: L('Defends the Refugium and is reunited with Seren.', 'Brání Refugium a znovu se setká se Seren.') },
        { vol: 7, gi: 6, text: L('Is fatally stabbed while grieving over Rhulad.', 'Je smrtelně bodnut, když truchlí nad Rhuladem.') }
      ] }
  },
  {
    id: 'onrack', intro: { vol: 4, gi: 4 },
    name: L('Onrack the Broken', 'Onrack Zlomený'), en: 'Onrack the Broken',
    race: 'imass', rlab: L('T’lan Imass warrior', 'T’lan Imasský bojovník'), ic: 'imass',
    kid: L('An undead warrior who has been alone for a very long time. He is patient, curious and surprisingly good company.', 'Nemrtvý bojovník, který byl velmi dlouho sám. Je trpělivý, zvědavý a překvapivě dobrá společnost.'),
    dad: L('A T’lan Imass warrior who finds Trull in the Nascent and becomes his companion.', 'Bojovník T’lan Imass, který najde Trulla v Rodící se a stane se jeho druhem.'),
    arc: { ahead: L('What is a purpose worth after the war it served is over?', 'Co stojí účel po válce, které sloužil?'),
      beats: [
        { vol: 4, gi: 4, text: L('Frees Trull Sengar from his long imprisonment.', 'Osvobodí Trulla Sengara z dlouhého zajetí.') },
        { vol: 4, gi: 6, text: L('Escorts Trull to the First Throne.', 'Doprovodí Trulla k Prvnímu trůnu.') },
        { vol: 7, gi: 4, text: L('Regains his mortal body in the Refugium and finds his family.', 'V Refugiu znovu získá smrtelné tělo a najde svou rodinu.') }
      ] }
  },
  {
    id: 'bairoth', intro: { vol: 4, gi: 1 },
    name: L('Bairoth Gild', 'Bairot Gild'), en: 'Bairoth Gild',
    race: 'human', rlab: L('Uryd warrior', 'Urydský bojovník'), ic: 'sword',
    kid: L('One of the two warriors who leave Laederon with Karsa.', 'Jeden ze dvou bojovníků, kteří s Karsou opustí Laederon.'),
    dad: L('A young Uryd warrior who joins Karsa’s raid and is willing to question his decisions.', 'Mladý urydský bojovník, který se účastní Karsova nájezdu a umí se ozvat, když s ním nesouhlasí.')
  },
  {
    id: 'delum', intro: { vol: 4, gi: 1 },
    name: L('Delum Thord', 'Delum Thord'), en: 'Delum Thord',
    race: 'human', rlab: L('Uryd warrior', 'Urydský bojovník'), ic: 'sword',
    kid: L('A young Teblor who rides with Karsa and Bairoth.', 'Mladý Teblor, který vyrazí s Karsou a Bairotem.'),
    dad: L('Delum’s loyalty to his companions is tested on the raid to Silver Lake.', 'Nájezd ke Stříbrnému jezeru prověří Delumovu věrnost druhům.')
  },
  {
    id: 'torvald', intro: { vol: 4, gi: 1 },
    name: L('Torvald Nom', 'Torvald Nom'), en: 'Torvald Nom',
    race: 'human', rlab: L('Daru prisoner', 'Darúnský vězeň'), ic: 'chain',
    kid: L('A prisoner who befriends Karsa and helps him escape.', 'Vězeň, který se s Karsou spřátelí a pomůže mu uprchnout.'),
    dad: L('A Daru of House Nom. He meets Karsa in captivity and later helps free him and Leoman at Ehrlitan.', 'Darún z rodu Nomů. Pozná Karsu v zajetí a později v Ehrlitanu pomůže osvobodit jeho i Leomana.')
  },
  {
    id: 'gamet', intro: { vol: 4, gi: 2 },
    name: L('Gamet', 'Gamet'), en: 'Gamet',
    race: 'malazan', rlab: L('Fist of the Fourteenth', 'Pěst 14. armády'), ic: 'crown',
    kid: L('An old soldier who helps Tavore lead her new army.', 'Starý voják, který Tavore pomáhá vést nové vojsko.'),
    dad: L('A veteran of House Paran’s guard whom Tavore appoints as one of her Fists.', 'Veterán gardy rodu Paranů, kterého Tavore jmenuje jednou ze svých pěstí.')
  },
  {
    id: 'lostara', intro: { vol: 2, gi: 2 },
    name: L('Lostara Yil', 'Lostara Yil'), en: 'Lostara Yil',
    race: 'malazan', rlab: L('Red Blade officer', 'Důstojnice Rudých čepelí'), ic: 'sword',
    kid: L('A soldier in the Red Blades who can track people across the desert.', 'Vojákyně Rudých čepelí, která dokáže sledovat lidi přes poušť.'),
    dad: L('An officer of the Red Blades who serves in Seven Cities.', 'Důstojnice Rudých čepelí, která slouží v Sedmiměstí.'),
    arc: { beats: [
      { vol: 4, gi: 2, text: L('Investigates Felisin’s disappearance with Pearl.', 'Pátrá s Perelem po zmizelé Felisín.') }
    ] }
  },
  {
    id: 'pearl', intro: { vol: 4, gi: 2 },
    name: L('Pearl', 'Perel'), en: 'Pearl',
    race: 'malazan', rlab: L('Claw agent', 'Agent Spáru'), ic: 'mask',
    kid: L('An imperial agent sent to look for Tavore’s sister.', 'Říšský agent vyslaný pátrat po Tavořině sestře.'),
    dad: L('A Claw operative assigned to accompany Lostara Yil on Tavore’s investigation.', 'Člen Spáru, který na Tavořin rozkaz pátrá po Felisín spolu s Lostarou Yil.')
  },
  {
    id: 'andarist', intro: { vol: 4, gi: 3 },
    name: L('Andarist', 'Darist'), en: 'Andarist',
    race: 'tiste', rlab: L('Guardian of the Throne of Shadow', 'Strážce Trůnu stínu'), ic: 'moon',
    kid: L('An old Tiste Andii who protects the throne on Drift Avalii.', 'Starý Tiste Andii, který na Drift Avalii chrání trůn.'),
    dad: L('Anomander Rake’s brother, who guards the Throne of Shadow with a small company of Tiste Andii.', 'Bratr Anomandera Dlouhého vlasu, který střeží Trůn stínu s malou skupinou Tiste Andii.'),
    arc: { beats: [
      { vol: 4, gi: 3, text: L('Falls defending Drift Avalii from the Edur.', 'Padne při obraně Drift Avalii před Edur.') }
    ] }
  },
  {
    id: 'traveller', intro: { vol: 4, gi: 3 },
    name: L('Traveller', 'Poutník'), en: 'Traveller',
    race: 'human', rlab: L('Wandering swordsman', 'Potulný šermíř'), ic: 'sword',
    kid: L('A swordsman who helps the defenders of Drift Avalii.', 'Šermíř, který pomůže obráncům Drift Avalii.'),
    dad: L('A swordsman who joins the defense of the Throne of Shadow and stays on the island afterward.', 'Šermíř, který pomáhá bránit Trůn stínu a po boji na ostrově zůstane.')
  },
  {
    id: 'felisin-younger', intro: { vol: 4, gi: 4 },
    name: L('Felisin Younger', 'Felisín mladší'), en: 'Felisin Younger',
    race: 'human', rlab: L('Sha’ik’s adopted daughter', 'Adoptivní dcera ša’ik'), ic: 'human',
    kid: L('The young girl whom Sha’ik has taken into her care.', 'Dívka, kterou ša’ik přijala do své péče.'),
    dad: L('Sha’ik’s adopted daughter, who lives among the rebels at Pan’arak.', 'Adoptivní dcera ša’ik, která žije mezi povstalci v oáze Pan’arak.')
  },
  {
    id: 'loric', intro: { vol: 4, gi: 4 },
    name: L('L’oric', 'L’orik'), en: 'L’oric',
    race: 'tiste', rlab: L('High Mage in Sha’ik’s army', 'Velemág vojska ša’ik'), ic: 'warren',
    kid: L('A mage who watches the other leaders at Pan’arak closely.', 'Mág, který pozorně sleduje ostatní velitele v oáze Pan’arak.'),
    dad: L('A High Mage among Sha’ik’s followers who moves carefully through the rivalries in her camp.', 'Velemág mezi stoupenci ša’ik, který si v soupeřícím táboře musí dávat pozor na každý krok.')
  },
  {
    id: 'bidithal', intro: { vol: 4, gi: 4 },
    name: L('Bidithal', 'Bidithal'), en: 'Bidithal',
    race: 'human', rlab: L('High Mage in Sha’ik’s army', 'Velemág vojska ša’ik'), ic: 'warren',
    kid: L('A mage with his own plans for the rebel camp.', 'Mág, který má v táboře povstalců vlastní plány.'),
    dad: L('A High Mage in Sha’ik’s camp who seeks to restore his sect of Shadow worshippers.', 'Velemág v táboře ša’ik, který se snaží obnovit vlastní sektu uctívačů stínu.')
  },
  {
    id: 'tehol', intro: { vol: 5, gi: 1 },
    name: L('Tehol Beddict', 'Tehol Beddikt'), en: 'Tehol Beddict',
    race: 'human', rlab: L('Letherii financier', 'Lederský finančník'), ic: 'book',
    kid: L('A brilliant, ragged man who lives on a roof and seems to own nothing. He is secretly smarter than everyone in the city.', 'Geniální otrhaný muž, který žije na střeše a zdá se, že nic nevlastní. Tajně je chytřejší než celé město.'),
    dad: L('A financier who gave up his fortune and now works to undermine Lether’s economy.', 'Finančník, který se vzdal vlastního jmění a teď podkopává lederské hospodářství.'),
    arc: { ahead: L('Can one man bankrupt an empire — and survive it?', 'Může jeden muž zbankrotovat říši — a přežít to?'),
      beats: [
        { vol: 5, gi: 1, text: L('Plots against Lether’s rulers from a rooftop with his servant Bugg.', 'Kuje plány proti letherským vládcům na střeše se svým sluhou Buggem.') },
        { vol: 5, gi: 6, text: L('Is nearly killed — and saved by a god.', 'Je téměř zabit — a zachrání ho bůh.') },
        { vol: 7, gi: 1, text: L('Works with Bugg and the Rat Catchers’ Guild to undermine the economy.', 'S Buggem a cechem chytačů krys podkopává hospodářství.') },
        { vol: 7, gi: 6, text: L('Becomes emperor after Rhulad’s fall.', 'Po Rhuladově pádu se stane císařem.') }
      ] }
  },
  {
    id: 'bugg', intro: { vol: 5, gi: 1 },
    name: L('Bugg', 'Bugg'), en: 'Bugg',
    race: 'human', rlab: L('Tehol’s manservant', 'Teholův sluha'), ic: 'water',
    kid: L('Tehol’s quiet, polite servant. He helps his employer with household chores and a risky business plan.', 'Teholův tichý, zdvořilý sluha. Pomáhá svému pánovi v domácnosti i s riskantním obchodním plánem.'),
    dad: L('Tehol Beddict’s manservant and his partner in schemes in Letheras.', 'Sluha Tehola Beddikta a jeho společník při intrikách v Lederas.'),
    arc: { ahead: L('Why does Bugg stay with Tehol?', 'Proč Bugg zůstává s Teholem?'),
      beats: [
        { vol: 5, gi: 1, text: L('Serves Tehol and quietly keeps him alive.', 'Slouží Teholovi a potichu ho drží naživu.') },
        { vol: 5, gi: 6, text: L('Reveals himself as Mael and saves Tehol’s life.', 'Odhalí se jako Mael a zachrání Teholovi život.') },
        { vol: 7, gi: 6, text: L('Helps Seren bury Trull’s weapon at her doorstep.', 'Pomůže Seren pohřbít Trullovu zbraň pod prahem jejího domu.') }
      ] }
  },
  {
    id: 'brys', intro: { vol: 5, gi: 1 },
    name: L('Brys Beddict', 'Brys Beddikt'), en: 'Brys Beddict',
    race: 'human', rlab: L('King’s champion', 'Králův šampion'), ic: 'sword',
    kid: L('Tehol’s brother, a noble soldier who follows the rules and fights with a sword better than anyone. He is loyal to a kingdom that does not deserve him.', 'Teholův bratr, ušlechtilý voják, který dodržuje pravidla a umí šermovat lépe než kdokoli. Je věrný království, které si ho nezaslouží.'),
    dad: L('King Diskanar’s champion and the youngest of the three Beddict brothers.', 'Šampion krále Diskanara a nejmladší ze tří bratrů Beddiktových.'),
    arc: { ahead: L('What does honour mean in a state that has none?', 'Co znamená čest ve státě, který ji nemá?'),
      beats: [
        { vol: 5, gi: 1, text: L('Serves King Diskanar while trying to protect his brothers.', 'Slouží králi Diskanarovi a snaží se ochránit bratry.') },
        { vol: 5, gi: 5, text: L('Disables Rhulad in the duel, then drinks from a poisoned cup.', 'V souboji znehybní Rhulada a pak se napije z otráveného poháru.') },
        { vol: 7, gi: 6, text: L('Returns from death and seeks out his brother Tehol.', 'Vrátí se ze smrti a vyhledá svého bratra Tehola.') }
      ] }
  },
  {
    id: 'rhulad', intro: { vol: 5, gi: 1 },
    name: L('Rhulad Sengar', 'Rhulad Sengar'), en: 'Rhulad Sengar',
    race: 'tiste', rlab: L('Youngest Sengar brother', 'Nejmladší z bratrů Sengarových'), ic: 'crown',
    kid: L('The youngest Sengar brother, eager to prove himself to his family.', 'Nejmladší z bratrů Sengarových, který se chce před rodinou osvědčit.'),
    dad: L('The youngest son of Tomad Sengar and Uruth. He joins his brothers on Hannan Mosag’s expedition to the ice fields.', 'Nejmladší syn Tomada Sengara a Uruth. Připojí se k bratrům na výpravě Hannana Mosaga na ledová pole.'),
    arc: { ahead: L('How many times can a man die before he stops being himself?', 'Kolikrát může člověk zemřít, než přestane být sám sebou?'),
      beats: [
        { vol: 5, gi: 1, text: L('Takes the cursed sword and is killed by the Jheck.', 'Vezme prokletý meč a zabijí ho Jheckové.') },
        { vol: 5, gi: 3, text: L('Is resurrected and seizes the Edur throne.', 'Je vzkříšen a zmocní se edurského trůnu.') },
        { vol: 5, gi: 5, text: L('Is maimed by Brys and left screaming on the palace floor.', 'Brys ho zmrzačí a nechá ho křičet na podlaze paláce.') },
        { vol: 7, gi: 5, text: L('Is cut down by Karsa Orlong and finally released.', 'Karsa Orlong ho nakonec srazí a osvobodí.') }
      ] }
  },
  {
    id: 'udinaas', intro: { vol: 5, gi: 1 },
    name: L('Udinaas', 'Udinaas'), en: 'Udinaas',
    race: 'human', rlab: L('Indebted slave', 'Zadlužený otrok'), ic: 'eye',
    kid: L('A quiet slave who sees things others cannot. He is trying to survive a world that treats him as property.', 'Tichý otrok, který vidí věci, které jiní nevidí. Snaží se přežít ve světě, který s ním zachází jako s majetkem.'),
    dad: L('A Letherii slave in the Sengar household who experiences visions after a Wyval attacks.', 'Lederský otrok v domácnosti Sengarových, který má po útoku wyvala vidiny.'),
    arc: { ahead: L('What is freedom worth if it costs someone else theirs?', 'Co stojí svoboda, když stojí někoho jiného tu jeho?'),
      beats: [
        { vol: 5, gi: 3, text: L('Prepares Rhulad for burial and witnesses his return to life.', 'Připraví Rhulada k pohřbu a je svědkem jeho návratu k životu.') },
        { vol: 5, gi: 6, text: L('Escapes Letheras with the survivors of the Azath.', 'Uteče z Letherasu s přeživšími z Azathu.') },
        { vol: 7, gi: 4, text: L('Reaches the Refugium with Silchas Ruin’s company.', 'Dorazí do Refugia s družinou Silchase Zmara.') },
        { vol: 7, gi: 6, text: L('Chooses to remain in the Refugium with Rud.', 'Rozhodne se zůstat s Rudem v Refugiu.') }
      ] }
  },
  {
    id: 'seren', intro: { vol: 5, gi: 2 },
    name: L('Seren Pedac', 'Seren Pedak'), en: 'Seren Pedac',
    race: 'human', rlab: L('Acquitor for Buruk the Pale', 'Akvizitorka Buruka Bledého'), ic: 'scroll',
    kid: L('A clever diplomat who is used to being the only woman in the room. She wants to stop a war, but nobody wants to listen.', 'Chytrá diplomatka, která je zvyklá být v místnosti jediná žena. Chce zastavit válku, ale nikdo ji neposlouchá.'),
    dad: L('An acquitor employed by the merchant Buruk the Pale on the northern frontier.', 'Akvizitorka obchodníka Buruka Bledého na severním pohraničí.'),
    arc: { ahead: L('Can words stop a war that has already begun?', 'Mohou slova zastavit válku, která už začala?'),
      beats: [
        { vol: 5, gi: 2, text: L('Negotiates with the Edur and watches the treaty collapse.', 'Vyjednává s Edury a sleduje zhroucení smlouvy.') },
        { vol: 5, gi: 5, text: L('Survives the fall of Letheras and the Edur conquest.', 'Přežije pád Letherasu a edurské dobytí.') },
        { vol: 7, gi: 4, text: L('Destroys Wither and is reunited with Trull in the Refugium.', 'Zničí Chřada a v Refugiu se znovu setká s Trullem.') },
        { vol: 7, gi: 6, text: L('Mourns Trull at her home in Letheras.', 'Ve svém domě v Lederas truchlí za Trulla.') }
      ] }
  },
  {
    id: 'fear', intro: { vol: 5, gi: 1 },
    name: L('Fear Sengar', 'Strach Sengar'), en: 'Fear Sengar',
    race: 'tiste', rlab: L('Weapons master of the Edur', 'Mistr zbrojíř kmenů'), ic: 'sword',
    kid: L('The eldest Sengar brother and Mayen’s betrothed. He leads his brothers into the north.', 'Nejstarší z bratrů Sengarových a Majenin snoubenec. Vede bratry na sever.'),
    dad: L('The eldest Sengar brother and Mayen’s betrothed. He leads his brothers into the north.', 'Nejstarší z bratrů Sengarových a Majenin snoubenec. Vede bratry na sever.')
  },
  {
    id: 'binadas', intro: { vol: 5, gi: 1 },
    name: L('Binadas Sengar', 'Binadas Sengar'), en: 'Binadas Sengar',
    race: 'tiste', rlab: L('Sengar brother', 'Jeden z bratrů Sengarových'), ic: 'sword',
    kid: L('The third son of Tomad and Uruth. He joins the expedition to the ice fields.', 'Třetí syn Tomada a Uruth. Účastní se výpravy na ledová pole.'),
    dad: L('The third son of Tomad and Uruth. He joins the expedition to the ice fields.', 'Třetí syn Tomada a Uruth. Účastní se výpravy na ledová pole.')
  },
  {
    id: 'hannan', intro: { vol: 5, gi: 1 },
    name: L('Hannan Mosag', 'Hannan Mosag'), en: 'Hannan Mosag',
    race: 'tiste', rlab: L('Warlock King', 'Král-zaklínač'), ic: 'crown',
    kid: L('The ruler who united six Tiste Edur tribes and sends the Sengar brothers to retrieve a gift.', 'Vládce, který sjednotil šest kmenů Tiste Edur a vyšle bratry Sengarovy pro dar.'),
    dad: L('The ruler who united six Tiste Edur tribes and sends the Sengar brothers to retrieve a gift.', 'Vládce, který sjednotil šest kmenů Tiste Edur a vyšle bratry Sengarovy pro dar.')
  },
  {
    id: 'hull', intro: { vol: 5, gi: 2 },
    name: L('Hull Beddict', 'Hull Beddikt'), en: 'Hull Beddict',
    race: 'human', rlab: L('Northern frontier warden', 'Strážce na severu'), ic: 'sword',
    kid: L('The eldest Beddict brother. His work on the frontier has turned him against Lether’s expansion.', 'Nejstarší z bratrů Beddiktových. Práce na pohraničí ho přivedla k odporu proti rozpínání Lederu.'),
    dad: L('The eldest Beddict brother. His work on the frontier has turned him against Lether’s expansion.', 'Nejstarší z bratrů Beddiktových. Práce na pohraničí ho přivedla k odporu proti rozpínání Lederu.')
  },
  {
    id: 'kettle', intro: { vol: 5, gi: 4 },
    name: L('Kettle', 'Konývka'), en: 'Kettle',
    race: 'human', rlab: L('Child at the Azath', 'Dítě u Azathu'), ic: 'tower',
    kid: L('A girl who looks after the dying Azath Tower and speaks with a prisoner buried underneath it.', 'Dívka, která pečuje o umírající azatskou věž a mluví s vězněm pohřbeným pod ní.'),
    dad: L('A girl who looks after the dying Azath Tower and speaks with a prisoner buried underneath it.', 'Dívka, která pečuje o umírající azatskou věž a mluví s vězněm pohřbeným pod ní.')
  },
  {
    id: 'silchas', intro: { vol: 5, gi: 4 },
    name: L('Silchas Ruin', 'Silchas Zmar'), en: 'Silchas Ruin',
    race: 'tiste', rlab: L('Azath prisoner', 'Vězeň Azathu'), ic: 'dragon',
    kid: L('An ancient Tiste Andii imprisoned beneath the Azath in Letheras.', 'Dávný Tiste Andii vězněný pod Azathem v Lederas.'),
    dad: L('An ancient Tiste Andii imprisoned beneath the Azath in Letheras.', 'Dávný Tiste Andii vězněný pod Azathem v Lederas.')
  },
  {
    id: 'ceda', intro: { vol: 5, gi: 2 },
    name: L('Kuru Qan', 'Kuru Qan'), en: 'Kuru Qan',
    race: 'human', rlab: L('The king’s Ceda', 'Králův ceda'), ic: 'warren',
    kid: L('King Diskanar’s mage and a student of Lether’s old magic.', 'Mág krále Diskanara, který zkoumá dávnou magii Lederu.'),
    dad: L('King Diskanar’s mage and a student of Lether’s old magic.', 'Mág krále Diskanara, který zkoumá dávnou magii Lederu.')
  },
  {
    id: 'feather-witch', intro: { vol: 5, gi: 1 },
    name: L('Feather Witch', 'Péřová čarodějka'), en: 'Feather Witch',
    race: 'human', rlab: L('Letherii slave and diviner', 'Lederská otrokyně a věštkyně'), ic: 'eye',
    kid: L('A Letherii slave among the Edur who reads the Tiles.', 'Lederská otrokyně u Edur, která věští z destiček.'),
    dad: L('A Letherii slave among the Edur who reads the Tiles.', 'Lederská otrokyně u Edur, která věští z destiček.')
  },
  {
    id: 'mayen', intro: { vol: 5, gi: 1 },
    name: L('Mayen', 'Majen'), en: 'Mayen',
    race: 'tiste', rlab: L('Fear’s betrothed', 'Strachova snoubenka'), ic: 'tiste',
    kid: L('Fear Sengar’s betrothed, whose life is caught up in Rhulad’s rise.', 'Snoubenka Stracha Sengara, jejíž život ovlivní Rhuladův vzestup.'),
    dad: L('Fear Sengar’s betrothed, whose life is caught up in Rhulad’s rise.', 'Snoubenka Stracha Sengara, jejíž život ovlivní Rhuladův vzestup.')
  },
  {
    id: 'hellian', intro: { vol: 6, gi: 1 },
    name: L('Hellian', 'Hellian'), en: 'Hellian',
    race: 'malazan', rlab: L('Sergeant from Kartool', 'Seržantka z Kartoolu'), ic: 'flame',
    kid: L('A sergeant who is always looking for a drink and somehow always finds a way to win. Her soldiers would die for her, mostly because they have no choice.', 'Seržantka, která pořád hledá něco na pití a nějak vždycky najde cestu k vítězství. Její vojáci by pro ni zemřeli, hlavně protože nemají na výběr.'),
    dad: L('A sergeant of the Kartool city guard who transfers to the Fourteenth Army.', 'Seržantka městské stráže v Kartoolu, která přejde k Čtrnácté armádě.'),
    arc: { ahead: L('How much can you hide behind a bottle?', 'Kolik se dá schovat za láhev?'),
      beats: [
        { vol: 6, gi: 1, text: L('Escapes Y’Ghatan through the tunnels with Fiddler’s group.', 'Unikne z Y’Ghatanu podzemím se Šumařovou skupinou.') },
        { vol: 9, gi: 3, text: L('Marches into the Letherii wastelands with Tavore.', 'Vyráží s Tavore do letherských pustin.') }
      ] }
  },
  {
    id: 'bottle', intro: { vol: 6, gi: 1 },
    name: L('Bottle', 'Flaška'), en: 'Bottle',
    race: 'malazan', rlab: L('Squad mage', 'Oddílový mág'), ic: 'warren',
    kid: L('A young mage who can talk to rats and hates being noticed. He is braver than he thinks and cleverer than he lets on.', 'Mladý mág, který umí mluvit s krysami a nesnáší, když si ho někdo všimne. Je statečnější, než si myslí, a chytřejší, než dává najevo.'),
    dad: L('A mage in Fiddler’s squad who can use small animals as scouts.', 'Mág ze Šumařova oddílu, který umí využít malé živočichy k průzkumu.'),
    arc: { ahead: L('Can a person who fears everything still be brave?', 'Může být člověk, který se bojí všeho, pořád statečný?'),
      beats: [
        { vol: 6, gi: 1, text: L('Uses a rat to find a way through the ruins under Y’Ghatan.', 'Pomocí krysy najde cestu ruinami pod Y’Ghatanem.') },
        { vol: 6, gi: 3, text: L('Helps Quick Ben resist Edur magic at sea.', 'Pomáhá Rychlému Benovi čelit na moři magii Edur.') },
        { vol: 9, gi: 4, text: L('Faces the Nah’ruk in the Glass Desert.', 'Čelí Nah’rukům ve Skleněné poušti.') }
      ] }
  },
  {
    id: 'mallick', intro: { vol: 2, gi: 5 },
    name: L('Mallick Rel', 'Mallick Rel'), en: 'Mallick Rel',
    race: 'human', rlab: L('Jhistal priest', 'Jhistalský kněz'), ic: 'mask',
    kid: L('A smooth, smiling official who always seems to be on the winning side. He is very good at making other people take the blame.', 'Hladký usměvavý úředník, který jako by vždycky stál na vítězné straně. Velmi dobře umí ostatním podstrčit vinu.'),
    dad: L('A Jhistal priest and political survivor who serves whoever is useful and betrays whoever is not. His rise is one of the saga’s most unsettling arcs.', 'Jhistalský kněz a politický přeživší, který slouží, dokud je to užitečné, a zrazuje, když už ne. Jeho vzestup je jedním z nejznepokojivějších oblouků ságy.'),
    arc: { ahead: L('How far can a man rise without ever fighting?', 'Jak vysoko může člověk vystoupat, aniž kdy bojoval?'),
      beats: [
        { vol: 2, gi: 5, text: L('Advises High Fist Pormqual in Aren.', 'Radí vrchní pěsti Pormqualovi v Arenu.') },
        { vol: 6, gi: 5, text: L('Accuses the Wickans of causing the disaster at Aren and demands Tavore hand over her allies.', 'Obviní Záchlumčany z pohromy u Arenu a požaduje, aby Tavore vydala své spojence.') },
        { vol: 10, gi: 1, text: L('Holds power in the Malazan Empire far from the campaign in Kolanse.', 'Vládne Malazské říši, daleko od tažení v Kolanse.') }
      ] }
  },
  {
    id: 'keneb', intro: { vol: 2, gi: 3 },
    name: L('Keneb', 'Keneb'), en: 'Keneb',
    race: 'malazan', rlab: L('Malazan officer', 'Malazský důstojník'), ic: 'sword',
    kid: L('An officer who stands by Tavore and her soldiers.', 'Důstojník, který stojí při Tavore a jejích vojácích.'),
    dad: L('A soldier Kalam meets in Seven Cities. He later serves as one of Tavore’s Fists.', 'Voják, kterého Kalam potká v Sedmiměstí. Později slouží pod Tavore jako jedna z jejích pěstí.'),
    arc: { ahead: L('Whose orders will he obey?', 'Čí rozkazy poslechne?'), beats: [
      { vol: 6, gi: 5, text: L('Keeps the ships at Malaz City until Tavore can return.', 'Zadrží lodě ve městě Malaz, dokud se Tavore nebude moci vrátit.') },
      { vol: 9, gi: 6, text: L('Dies in the Nah’ruk attack on the Bonehunters.', 'Zemře při útoku Nah’ruk na Lovce kostí.') }
    ] }
  },
  {
    id: 'sinn', intro: { vol: 4, gi: 2 },
    name: L('Sinn', 'Sinn'), en: 'Sinn',
    race: 'malazan', rlab: L('Young mage', 'Mladá kouzelnice'), ic: 'flame',
    kid: L('A young girl with a gift for magic.', 'Mladá dívka s nadáním pro magii.'),
    dad: L('A young mage the Fourteenth meets in Seven Cities.', 'Mladá kouzelnice, se kterou se Čtrnáctá armáda setká v Sedmiměstí.'),
    arc: { ahead: L('What will fire mean to her after Y’Ghatan?', 'Co pro ni bude znamenat oheň po Y’Ghatanu?'), beats: [
      { vol: 6, gi: 1, text: L('Helps soldiers escape the fire and returns with Faradan Sort to find survivors.', 'Pomáhá vojákům uniknout požáru a s Faradan Sort se vrátí hledat přeživší.') }
    ] }
  },
  {
    id: 'sort', intro: { vol: 6, gi: 1 },
    name: L('Faradan Sort', 'Faradan Sort'), en: 'Faradan Sort',
    race: 'malazan', rlab: L('Malazan captain', 'Malazská kapitánka'), ic: 'sword',
    kid: L('A captain who helps Sinn look for missing soldiers.', 'Kapitánka, která pomáhá Sinn hledat pohřešované vojáky.'),
    dad: L('An officer of the Fourteenth and a veteran of the Stormwall.', 'Důstojnice Čtrnácté armády a veteránka z Bouřné hradby.'),
    arc: { ahead: L('What will she risk to find her soldiers?', 'Co riskuje, aby našla své vojáky?'), beats: [
      { vol: 6, gi: 1, text: L('Goes back to Y’Ghatan with Sinn and helps dig the survivors out.', 'Vrátí se se Sinn do Y’Ghatanu a pomůže vyprostit přeživší.') }
    ] }
  },
  {
    id: 'tamber', intro: { vol: 6, gi: 1 },
    name: L('T’amber', 'T’jantar'), en: 'T’amber',
    race: 'malazan', rlab: L('Tavore’s aide', 'Tavořina pobočnice'), ic: 'sword',
    kid: L('Tavore’s aide and trusted companion.', 'Tavořina pobočnice a důvěrná společnice.'),
    dad: L('Tavore’s aide, who accompanies her in Seven Cities and at Malaz City.', 'Tavořina pobočnice, která ji doprovází v Sedmiměstí i ve městě Malaz.'),
    arc: { ahead: L('How far will she go to protect Tavore?', 'Kam až zajde, aby ochránila Tavore?'), beats: [
      { vol: 6, gi: 5, text: L('Fights beside Kalam on the way to the harbour.', 'Na cestě k přístavu bojuje po Kalamově boku.') },
      { vol: 6, gi: 6, text: L('Dies of her wounds during the escape.', 'Při útěku podlehne zraněním.') }
    ] }
  },
  {
    id: 'veed', intro: { vol: 6, gi: 4 },
    name: L('Taralack Veed', 'Taralack Výd'), en: 'Taralack Veed',
    race: 'human', rlab: L('Agent of the Nameless Ones', 'Agent Bezejmenných'), ic: 'mask',
    kid: L('A travelling companion the Nameless Ones choose for Icarium.', 'Průvodce, kterého Bezejmenní vyberou Icariovi.'),
    dad: L('A Gral and an agent of the Nameless Ones sent to replace Mappo as Icarium’s companion.', 'Gral a agent Bezejmenných, vyslaný, aby po Icariově boku nahradil Mappa.')
  },
  {
    id: 'poliel', intro: { vol: 6, gi: 2 },
    name: L('Poliel', 'Poliel'), en: 'Poliel',
    race: 'god', rlab: L('Goddess of disease', 'Bohyně nemocí'), ic: 'mask',
    kid: L('A goddess whose magic is connected with the plague.', 'Bohyně, jejíž magie souvisí s morem.'),
    dad: L('The goddess of disease, whose temple stands at the centre of the plague in Seven Cities.', 'Bohyně nemocí, jejíž chrám je ohniskem moru v Sedmiměstí.')
  },
  {
    id: 'corabb', intro: { vol: 4, gi: 5 },
    name: L('Corabb Bhilan Thenu’alas', 'Corabb Bhilan Thenu’alas'), en: 'Corabb Bhilan Thenu’alas',
    race: 'human', rlab: L('Seven Cities warrior', 'Bojovník ze Sedmiměstí'), ic: 'sword',
    kid: L('One of Leoman’s fighters, who has remarkably good luck.', 'Jeden z Leomanových bojovníků, který má neobyčejné štěstí.'),
    dad: L('A warrior who follows Leoman to Y’Ghatan.', 'Bojovník, který následuje Leomana do Y’Ghatanu.'),
    arc: { ahead: L('Where will his luck take him?', 'Kam ho jeho štěstí zavede?'), beats: [
      { vol: 6, gi: 1, text: L('Escapes the ruins of Y’Ghatan with Fiddler’s group.', 'Unikne z ruin Y’Ghatanu se Šumařovou skupinou.') }
    ] }
  },
  {
    id: 'karos', intro: { vol: 7, gi: 1 },
    name: L('Karos Invictad', 'Karos Inviktad'), en: 'Karos Invictad',
    race: 'human', rlab: L('Patriotist leader', 'Dozorce patriotistů'), ic: 'mask',
    kid: L('The official who looks for people plotting against the empire.', 'Úředník, který hledá lidi kující plány proti říši.'),
    dad: L('The head of the Patriotists, who investigates threats to imperial power and is drawn into Tehol’s schemes.', 'Dozorce patriotistů, který vyšetřuje ohrožení moci říše a zaplete se do Teholových plánů.')
  },
  {
    id: 'janath', intro: { vol: 7, gi: 1 },
    name: L('Janath Anar', 'Žanat Anar'), en: 'Janath Anar',
    race: 'human', rlab: L('Political prisoner', 'Politická vězeňkyně'), ic: 'scroll',
    kid: L('A scholar imprisoned by the Patriotists.', 'Učenkyně, kterou vězní patriotisté.'),
    dad: L('A Letherii scholar targeted by the Patriotists.', 'Lederská učenkyně, na kterou se zaměří patriotisté.'),
    arc: { ahead: L('What will she do when she is free?', 'Co udělá, až bude volná?'), beats: [
      { vol: 7, gi: 6, text: L('Survives captivity and joins Tehol and Brys after Rhulad’s fall.', 'Přežije věznění a po Rhuladově pádu se připojí k Teholovi a Brysovi.') }
    ] }
  },
  {
    id: 'brohl', intro: { vol: 7, gi: 2 },
    name: L('Brohl Handar', 'Brohl Handar'), en: 'Brohl Handar',
    race: 'tiste', rlab: L('Overseer at Drene', 'Dohližitel v Drene'), ic: 'sword',
    kid: L('The Edur official sent to oversee the eastern frontier city of Drene.', 'Úředník z Tiste Edur vyslaný dohlížet na pohraniční město Drene.'),
    dad: L('The Edur overseer in Drene, where he has to work with Bivatt and Letur Anict over the war against the Awl.', 'Edurský dohližitel v Drene, kde při válce s Oulany musí spolupracovat s Bivatt a Leturem Aniktem.')
  },
  {
    id: 'bivatt', intro: { vol: 7, gi: 2 },
    name: L('Atri-Preda Bivatt', 'Atripreda Bivatt'), en: 'Atri-Preda Bivatt',
    race: 'human', rlab: L('Eastern Army commander', 'Velitelka Východní armády'), ic: 'sword',
    kid: L('The commander sent against Redmask and the Awl clans.', 'Velitelka, která vytáhne proti Rudomaskovi a oulským klanům.'),
    dad: L('The Letherii general who commands the Eastern Army from Drene.', 'Lederská vojevůdkyně, která z Drene velí Východní armádě.')
  },
  {
    id: 'torrent', intro: { vol: 7, gi: 2 },
    name: L('Torrent', 'Příval'), en: 'Torrent',
    race: 'human', rlab: L('Awl warrior', 'Oulský bojovník'), ic: 'sword',
    kid: L('A warrior who listens to Toc and helps the children escape.', 'Bojovník, který naslouchá Tocovi a pomáhá dětem uprchnout.'),
    dad: L('An Awl warrior who comes to know Toc while he is held among the clans.', 'Oulský bojovník, který pozná Toce, když ho klany drží v zajetí.')
  },
  {
    id: 'shurq', intro: { vol: 5, gi: 2 },
    name: L('Shurq Elalle', 'Šurk Elalle'), en: 'Shurq Elalle',
    race: 'human', rlab: L('Letherii thief and sailor', 'Lederská zlodějka a námořnice'), ic: 'water',
    kid: L('A thief from Letheras who can keep her head in a crisis.', 'Zlodějka z Lederas, která v nebezpečí neztrácí hlavu.'),
    dad: L('A thief in Letheras who later becomes a pirate captain.', 'Zlodějka z Lederas, která se později stane pirátskou kapitánkou.'),
    arc: { ahead: L('Where will she take her ship?', 'Kam zamíří se svou lodí?'), beats: [
      { vol: 7, gi: 3, text: L('Brings her ship to the Second Maiden Fort.', 'Připlouvá se svou lodí k Druhému Děvínu.') }
    ] }
  },
  {
    id: 'twilight', intro: { vol: 6, gi: 3 },
    name: L('Yan Tovis (Twilight)', 'Yan Tovis (Šero)'), en: 'Yan Tovis (Twilight)',
    race: 'human', rlab: L('Letherii commander', 'Lederská velitelka'), ic: 'crown',
    kid: L('A commander who has ties to the people of the western islands.', 'Velitelka, která má vazby na obyvatele západních ostrovů.'),
    dad: L('A Letherii atri-preda who travels with the Edur fleet.', 'Lederská atripreda, která cestuje s flotilou Tiste Edur.'),
    arc: { ahead: L('What will the people of the islands ask of her?', 'Co od ní budou žádat obyvatelé ostrovů?'), beats: [
      { vol: 7, gi: 3, text: L('As Queen of the Shake, gathers her people at Second Maiden Fort.', 'Jako královna Třasů shromažďuje svůj lid na Druhém Děvíně.') }
    ] }
  },
  {
    id: 'yedan', intro: { vol: 7, gi: 3 },
    name: L('Yedan Derryg (the Watch)', 'Yedan Derryg (Stráž)'), en: 'Yedan Derryg (the Watch)',
    race: 'human', rlab: L('Shake warrior', 'Třasský bojovník'), ic: 'sword',
    kid: L('Yan Tovis’s half-brother, a warrior of the western islands.', 'Nevlastní bratr Yan Tovis a bojovník ze západních ostrovů.'),
    dad: L('The Watch, Yan Tovis’s half-brother, who helps bring the Shake together at the Second Maiden Fort.', 'Stráž, nevlastní bratr Yan Tovis, který pomáhá shromáždit Třasy na Druhém Děvíně.')
  },
  {
    id: 'clip', intro: { vol: 7, gi: 4 },
    name: L('Clip', 'Stříž'), en: 'Clip',
    race: 'tiste', rlab: L('Tiste Andii guide', 'Tisteandijský průvodce'), ic: 'chain',
    kid: L('A Tiste Andii who guides the travellers through gates.', 'Tiste Andii, který provádí poutníky branami.'),
    dad: L('A Tiste Andii from Bluerose who joins Silchas Ruin’s band and guides them into Starvald Demelain.', 'Tiste Andii z Modré růže, který se přidá k družině Silchase Zmara a provede ji do Starvald Demelainu.')
  },
  {
    id: 'wither', intro: { vol: 5, gi: 2 },
    name: L('Wither', 'Chřad'), en: 'Wither',
    race: 'spirit', rlab: L('Shadow wraith', 'Stínový přízrak'), ic: 'mask',
    kid: L('A shadow spirit that follows Udinaas.', 'Stínový duch, který následuje Udinaase.'),
    dad: L('A shadow wraith bound to Udinaas who follows him when he leaves Letheras.', 'Stínový přízrak připoutaný k Udinaasovi, kterého doprovází, když opustí Lederas.')
  },
  {
    id: 'ulshun', intro: { vol: 7, gi: 4 },
    name: L('Ulshun Pral', 'Ulsun Pral'), en: 'Ulshun Pral',
    race: 'imass', rlab: L('Imass of the Refugium', 'Imass z Refugia'), ic: 'imass',
    kid: L('An Imass who lives in the hidden valley.', 'Imass, který žije ve skrytém údolí.'),
    dad: L('One of the living Imass of the Refugium. His people ask Trull and Onrack for help.', 'Jeden z živých Imassů v Refugiu. Jeho lid požádá Trulla a Onraka o pomoc.')
  },
  {
    id: 'rud', intro: { vol: 5, gi: 6 },
    name: L('Rud Elalle', 'Rud Elalle'), en: 'Rud Elalle',
    race: 'human', rlab: L('Foundling', 'Nalezenec'), ic: 'forest',
    kid: L('A foundling brought up away from Letheras.', 'Nalezenec, který vyrůstá daleko od Lederas.'),
    dad: L('A foundling whose story is tied to Udinaas’s journeys.', 'Nalezenec, jehož příběh je spojen s Udinaasovými cestami.'),
    arc: { ahead: L('Where will he make his home?', 'Kde najde svůj domov?'), beats: [
      { vol: 7, gi: 4, text: L('Lives among the Imass of the Refugium.', 'Žije mezi Imassy v Refugiu.') },
      { vol: 7, gi: 6, text: L('Decides to stay in the Refugium with Udinaas.', 'Rozhodne se zůstat v Refugiu s Udinaasem.') }
    ] }
  },
  {
    id: 'withal', intro: { vol: 5, gi: 3 },
    name: L('Withal', 'Withal'), en: 'Withal',
    race: 'human', rlab: L('Mekros smith', 'Mekroský mečíř'), ic: 'sword',
    kid: L('A blacksmith taken from a floating city.', 'Kovář odvlečený z plovoucího města.'),
    dad: L('A Mekros smith made to forge a sword for the Crippled God.', 'Mekroský mečíř donucený ukovat meč pro Chromého boha.'),
    arc: { ahead: L('What will he do if he sees the sword again?', 'Co udělá, pokud meč znovu uvidí?'), beats: [
      { vol: 7, gi: 5, text: L('Destroys the sword he once forged for the Crippled God.', 'Zničí meč, který kdysi ukoval pro Chromého boha.') }
    ] }
  },
  {
    id: 'redmask', intro: { vol: 7, gi: 2 },
    name: L('Redmask', 'Rudomask'), en: 'Redmask',
    race: 'human', rlab: L('Awl warleader', 'Oulský vojevůdce'), ic: 'mask',
    kid: L('A masked warrior who wants the clans to defend their land together.', 'Maskovaný válečník, který chce, aby klany společně bránily svou zemi.'),
    dad: L('An exile who returns to Awl’dan with two K’Chain Che’Malle companions and rallies the clans against the Eastern Army.', 'Vyhnanec, který se vrátí do Oul’danu se dvěma druhy z K’Chain Che’Malle a postaví klany proti Východní armádě.'),
    arc: { ahead: L('Is a leader’s cause more important than the truth?', 'Je vůdcova věc důležitější než pravda?'),
      beats: [
        { vol: 7, gi: 2, text: L('Is killed by his own companions in the final battle.', 'V závěrečné bitvě ho zabijí jeho vlastní společníci.') }
      ] }
  },
  {
    id: 'samar', intro: { vol: 6, gi: 1 },
    name: L('Samar Dev', 'Samar Dev'), en: 'Samar Dev',
    race: 'human', rlab: L('Witch of Ugarat', 'Čarodějka z Ugaratu'), ic: 'scroll',
    kid: L('A sharp-tongued traveller who knows old magic and how to fix things. She finds Karsa infuriating and cannot quite leave him.', 'Ostrá poutnice, která zná starou magii a umí opravit skoro všechno. Karsa ji nesmírně štve a přesto ho nedokáže úplně opustit.'),
    dad: L('A witch and inventor from Ugarat. She travels across Seven Cities with Karsa Orlong.', 'Čarodějka a vynálezkyně z Ugaratu. Prochází Sedmiměstím s Karsou Orlongem.'),
    arc: { ahead: L('Can you change a man who refuses to change?', 'Můžeš změnit muže, který se odmítá změnit?'),
      beats: [
        { vol: 6, gi: 3, text: L('Travels with Karsa across Seven Cities to the western coast.', 'Cestuje s Karsou přes Sedmiměstí k západnímu pobřeží.') },
        { vol: 7, gi: 1, text: L('Travels to Letheras with Karsa.', 'Cestuje s Karsou do Lederas.') },
        { vol: 7, gi: 5, text: L('Witnesses Karsa’s fight with Rhulad and the Crippled God’s offer.', 'Je svědkem Karsova boje s Rhuladem a nabídky Chromého boha.') },
        { vol: 8, gi: 3, text: L('Meets Traveller on the Plain of Lamatath while travelling with Karsa.', 'Na cestě s Karsou potká na Lamatathské pláni Poutníka.') }
      ] }
  },
  {
    id: 'beak', intro: { vol: 7, gi: 3 },
    name: L('Beak', 'Zobák'), en: 'Beak',
    race: 'malazan', rlab: L('Bonehunter mage', 'Mág Lovců kostí'), ic: 'flame',
    kid: L('A friendly young mage who thinks of each kind of magic as a candle.', 'Přátelský mladý mág, který si každý druh magie představuje jako svíčku.'),
    dad: L('A mage assigned to Faradan Sort. He understands the different forms of sorcery as candles of different colours.', 'Mág přidělený ke kapitánce Faradan Sort. Různé druhy magie vnímá jako svíčky různých barev.'),
    arc: { ahead: L('What will he do to protect his friends?', 'Co udělá, aby ochránil své přátele?'),
      beats: [
        { vol: 7, gi: 3, text: L('Uses all of his magic to shield the Malazans and the Edur, and dies.', 'Použije všechnu svou magii, aby ochránil Malažany i Edur, a zemře.') }
      ] }
  },
  {
    id: 'picker', intro: { vol: 1, gi: 5 },
    name: L('Picker', 'Pazderka'), en: 'Picker',
    race: 'malazan', rlab: L('Bridgeburner corporal', 'Kaprálka Paličů mostů'), ic: 'sword',
    kid: L('A soldier who keeps an eye on her squadmates.', 'Vojákyně, která dává pozor na své spolubojovníky.'),
    dad: L('A corporal in the Bridgeburners and a close friend of Blend.', 'Kaprálka Paličů mostů a blízká přítelkyně Mizely.'),
    arc: { ahead: L('What will she do when the fighting is over?', 'Co bude dělat, až boje skončí?'), beats: [
      { vol: 8, gi: 1, text: L('Shares ownership of K’rul’s Bar in Darujhistan.', 'Je spolumajitelkou K’rulova baru v Darúdžhistánu.') }
    ] }
  },
  {
    id: 'blend', intro: { vol: 1, gi: 5 },
    name: L('Blend', 'Mizela'), en: 'Blend',
    race: 'malazan', rlab: L('Bridgeburner soldier', 'Vojákyně Paličů mostů'), ic: 'mask',
    kid: L('A soldier who is good at going unnoticed.', 'Vojákyně, která umí uniknout pozornosti.'),
    dad: L('A Bridgeburner from the 7th Squad who can fade into a crowd.', 'Příslušnice 7. oddílu Paličů mostů, která umí splynout s davem.'),
    arc: { ahead: L('Who notices when she disappears?', 'Kdo si všimne, když zmizí?'), beats: [
      { vol: 8, gi: 1, text: L('Runs K’rul’s Bar with Picker and Antsy.', 'Vede K’rulův bar s Pazderkou a Jiskrou.') }
    ] }
  },
  {
    id: 'antsy', intro: { vol: 1, gi: 5 },
    name: L('Antsy', 'Jiskra'), en: 'Antsy',
    race: 'malazan', rlab: L('Bridgeburner sergeant', 'Seržant Paličů mostů'), ic: 'sword',
    kid: L('A sergeant who knows the soldiers in his squad well.', 'Seržant, který dobře zná vojáky svého oddílu.'),
    dad: L('Sergeant of the Bridgeburners’ 7th Squad.', 'Seržant 7. oddílu Paličů mostů.'),
    arc: { ahead: L('What will he build outside the army?', 'Co vybuduje mimo armádu?'), beats: [
      { vol: 8, gi: 1, text: L('Co-owns K’rul’s Bar with Picker and Blend.', 'Je spolumajitelem K’rulova baru s Pazderkou a Mizelou.') }
    ] }
  },
  {
    id: 'baruk', intro: { vol: 1, gi: 2 },
    name: L('Baruk', 'Barúk'), en: 'Baruk',
    race: 'human', rlab: L('Alchemist of Darujhistan', 'Darúdžhistánský alchymista'), ic: 'scroll',
    kid: L('An alchemist whose home is an important meeting place.', 'Alchymista, v jehož domě se konají důležitá setkání.'),
    dad: L('An alchemist and member of Darujhistan’s T’orrud Cabal.', 'Alchymista a člen darúdžhistánské T’orrudské kabaly.'),
    arc: { ahead: L('What secrets can his city bear?', 'Jaká tajemství jeho město unese?'), beats: [
      { vol: 8, gi: 6, text: L('Witnesses Brood break Dragnipur at his estate.', 'Ve svém paláci přihlíží, jak Chmur rozbije Dragnipúr.') }
    ] }
  },
  {
    id: 'murillio', intro: { vol: 1, gi: 2 },
    name: L('Murillio', 'Murillio'), en: 'Murillio',
    race: 'human', rlab: L('Darujhistan swordsman', 'Darúdžhistánský šermíř'), ic: 'sword',
    kid: L('A swordsman and one of Cutter’s old friends.', 'Šermíř a jeden z Řezníkových starých přátel.'),
    dad: L('A duellist of Darujhistan who knows Coll, Rallick Nom and Crokus well.', 'Darúdžhistánský šermíř, který se dobře zná s Collem, Rallikem Nomem a Kvítkem.'),
    arc: { ahead: L('What will he risk to help a friend?', 'Co riskuje, aby pomohl příteli?'), beats: [
      { vol: 8, gi: 4, text: L('Goes to the mine to recover Harllo and dies in a duel with Gorlas.', 'Vydá se do dolu pro Harlla a zemře v souboji s Gorlasem.') }
    ] }
  },
  {
    id: 'stonny', intro: { vol: 3, gi: 1 },
    name: L('Stonny Menackis', 'Stonny Menakis'), en: 'Stonny Menackis',
    race: 'human', rlab: L('Fencing instructor', 'Učitelka šermu'), ic: 'sword',
    kid: L('A skilled fencer who has known Gruntle for years.', 'Zkušená šermířka, která se s Vrčem zná léta.'),
    dad: L('A veteran of the journey to Capustan with Gruntle.', 'Účastnice cesty do Capustanu s Vrčem.'),
    arc: { ahead: L('How will she make a home after the war?', 'Jak si po válce vybuduje domov?'), beats: [
      { vol: 8, gi: 1, text: L('Runs a fencing school in Darujhistan.', 'Vede šermířskou školu v Darúdžhistánu.') },
      { vol: 8, gi: 6, text: L('Meets Harllo again and accepts him as her son.', 'Znovu se setká s Harllem a přijme ho za syna.') }
    ] }
  },
  {
    id: 'harllo', intro: { vol: 8, gi: 1 },
    name: L('Harllo', 'Harllo'), en: 'Harllo',
    race: 'human', rlab: L('Child in Darujhistan', 'Dítě v Darúdžhistánu'), ic: 'eye',
    kid: L('A young boy living with his aunt and uncle.', 'Malý chlapec, který žije u tety a strýce.'),
    dad: L('A boy named after a friend Gruntle and Stonny lost in the Pannion War.', 'Chlapec pojmenovaný po příteli, kterého Vrč a Stonny ztratili v pannionské válce.'),
    arc: { ahead: L('Where will he find a family?', 'Kde najde rodinu?'), beats: [
      { vol: 8, gi: 4, text: L('Befriends Bainisk after being sold to a mine and gets back to Darujhistan.', 'Po prodeji do dolu se spřátelí s Bainiskem a dostane se zpět do Darúdžhistánu.') },
      { vol: 8, gi: 6, text: L('Finds his mother Stonny and asks her to look at him.', 'Najde svou matku Stonny a požádá ji, aby se na něj podívala.') }
    ] }
  },
  {
    id: 'barathol', intro: { vol: 6, gi: 2 },
    name: L('Barathol Mekhar', 'Barathol Méchar'), en: 'Barathol Mekhar',
    race: 'human', rlab: L('Blacksmith', 'Kovář'), ic: 'flame',
    kid: L('A blacksmith who travels with his friend Chaur.', 'Kovář, který cestuje s přítelem Chaurem.'),
    dad: L('A blacksmith from Seven Cities who travels with Chaur and Cutter.', 'Kovář ze Sedmiměstí, který cestuje s Chaurem a Řezníkem.'),
    arc: { ahead: L('Where can he find another home?', 'Kde najde nový domov?'), beats: [
      { vol: 8, gi: 1, text: L('Arrives in Darujhistan with Cutter’s party.', 'Dorazí do Darúdžhistánu s Řezníkovou skupinou.') }
    ] }
  },
  {
    id: 'spinnock', intro: { vol: 8, gi: 2 },
    name: L('Spinnock Durav', 'Spinnok Durav'), en: 'Spinnock Durav',
    race: 'tiste', rlab: L('Tiste Andii swordsman', 'Tisteandijský šermíř'), ic: 'sword',
    kid: L('A swordsman from Black Coral and a friend of Seerdomin.', 'Šermíř z Černého Korálu a Věštdominův přítel.'),
    dad: L('A veteran Tiste Andii warrior who befriends Seerdomin and cares for Salind.', 'Zkušený bojovník Tiste Andii, který se spřátelí s Věštdominem a stará se o Salind.'),
    arc: { ahead: L('What will Rake ask him to do?', 'Co od něj bude Anomander žádat?'), beats: [
      { vol: 8, gi: 5, text: L('Holds off Kallor while events unfold in Darujhistan.', 'Zadrží Kallora na cestě do Darúdžhistánu.') }
    ] }
  },
  {
    id: 'salind', intro: { vol: 8, gi: 2 },
    name: L('Salind', 'Salind'), en: 'Salind',
    race: 'human', rlab: L('Priestess of the Redeemer', 'Kněžka Vykupitele'), ic: 'moon',
    kid: L('A priestess who helps the people who visit the Great Barrow.', 'Kněžka, která pomáhá lidem přicházejícím k Velké mohyle.'),
    dad: L('A priestess of the Redeemer who tends the pilgrims outside Black Coral.', 'Kněžka Vykupitele, která pečuje o poutníky za Černým Korálem.')
  },
  {
    id: 'nimander', intro: { vol: 4, gi: 3 },
    name: L('Nimander Golit', 'Nimander Golit'), en: 'Nimander Golit',
    race: 'tiste', rlab: L('Tiste Andii traveller', 'Poutník z Tiste Andii'), ic: 'moon',
    kid: L('One of the Tiste Andii on Drift Avalii.', 'Jeden z Tiste Andii na Drift Avalii.'),
    dad: L('A descendant of Anomander Rake who travels with a small group of Tiste Andii.', 'Potomek Anomandera Dlouhý vlas, který cestuje s malou skupinou Tiste Andii.'),
    arc: { ahead: L('Who will lead the group when they reach the city?', 'Kdo skupinu povede, až dorazí do města?'), beats: [
      { vol: 8, gi: 3, text: L('Travels to Black Coral with Clip.', 'Putuje se Střížem k Černému Korálu.') }
    ] }
  },
  {
    id: 'hood', intro: { vol: 1, gi: 3 },
    name: L('Hood', 'Mistr Kápě'), en: 'Hood',
    race: 'god', rlab: L('God of death', 'Bůh smrti'), ic: 'skull',
    kid: L('The god who rules the realm of the dead.', 'Bůh, který vládne říši mrtvých.'),
    dad: L('The god of death and lord of High House Death.', 'Bůh smrti a pán Vysokého domu smrti.'),
    arc: { ahead: L('What brings the god of death into the world of the living?', 'Co přivede boha smrti do světa živých?'), beats: [
      { vol: 8, gi: 5, text: L('Enters Dragnipur when Rake strikes him down.', 'Vstoupí do Dragnipúru, když ho Anomander zabije.') },
      { vol: 8, gi: 6, text: L('Brings an army of the dead to face Chaos.', 'Přivede vojsko mrtvých, aby se postavilo Chaosu.') }
    ] }
  },
  {
    id: 'endest', intro: { vol: 8, gi: 2 },
    name: L('Endest Silann', 'Endest Silann'), en: 'Endest Silann',
    race: 'tiste', rlab: L('Tiste Andii mage', 'Tisteandijský čaroděj'), ic: 'moon',
    kid: L('An old Tiste Andii mage who has served Rake for a very long time.', 'Starý tisteandijský čaroděj, který slouží Anomanderovi už velmi dlouho.'),
    dad: L('A Tiste Andii mage in Black Coral who remembers the court of Mother Dark.', 'Tisteandijský čaroděj v Černém Korálu, který pamatuje dvůr Matky Noci.'),
    arc: { ahead: L('What do you do when your purpose finally asks everything of you?', 'Co uděláš, když tvůj účel konečně chce všechno?'),
      beats: [
        { vol: 8, gi: 2, text: L('Receives instructions from Rake in Black Coral.', 'V Černém Korálu dostane pokyny od Anomandera.') },
        { vol: 8, gi: 6, text: L('Holds back the light in Black Coral until the Gate finds its home.', 'Zadržuje světlo v Černém Korálu, dokud Brána nenajde svůj domov.') }
      ] }
  },
  {
    id: 'seerd', intro: { vol: 8, gi: 2 },
    name: L('Seerdomin', 'Věštdomin'), en: 'Seerdomin',
    race: 'human', rlab: L('Former Pannion officer', 'Bývalý pannionský důstojník'), ic: 'sword',
    kid: L('A former enemy soldier who now guards a shrine. He is trying to be better than the man he was.', 'Bývalý nepřátelský voják, který teď střeží svatyni. Snaží se být lepším člověkem, než byl.'),
    dad: L('A former Pannion officer who keeps watch at the Redeemer’s barrow outside Black Coral.', 'Bývalý pannionský důstojník, který drží stráž u Vykupitelovy mohyly za Černým Korálem.'),
    arc: { ahead: L('Can a former monster become a guardian?', 'Může se z bývalého netvora stát strážce?'),
      beats: [
        { vol: 8, gi: 2, text: L('Visits the Great Barrow and befriends Spinnock Durav.', 'Navštěvuje Velkou mohylu a spřátelí se se Spinnokem Duravem.') },
        { vol: 8, gi: 6, text: L('Dies defending the Redeemer from the Dying God.', 'Zemře při obraně Vykupitele před umírajícím bohem.') }
      ] }
  },
  {
    id: 'krughava', intro: { vol: 9, gi: 1 },
    name: L('Krughava', 'Krughava'), en: 'Krughava',
    race: 'human', rlab: L('Mortal Sword of the Grey Helms', 'Smrtelný meč Zánických šedých příleb'), ic: 'sword',
    kid: L('The commander of the Grey Helms, who march ahead of Tavore’s army.', 'Velitelka Zánických šedých příleb, které jdou před Tavořiným vojskem.'),
    dad: L('The Mortal Sword of the Perish Grey Helms, sworn to Togg and Fanderay.', 'Smrtelný meč Zánických šedých příleb, zasvěcených Toggovi a Fanderay.')
  },
  {
    id: 'tanakalian', intro: { vol: 9, gi: 1 },
    name: L('Tanakalian', 'Tanakalian'), en: 'Tanakalian',
    race: 'human', rlab: L('Shield Anvil of the Grey Helms', 'Nezdolný štít Zánických šedých příleb'), ic: 'sword',
    kid: L('A priest and warrior of the Grey Helms.', 'Kněz a válečník Zánických šedých příleb.'),
    dad: L('The Shield Anvil who marches with Krughava and Run’Thurvian.', 'Nezdolný štít, který táhne s Krughavou a Run’Thurvianem.')
  },
  {
    id: 'gall', intro: { vol: 4, gi: 2 },
    name: L('Gall', 'Drz'), en: 'Gall',
    race: 'human', rlab: L('Khundryl warleader', 'Chundrylský vojevůdce'), ic: 'sword',
    kid: L('A warleader whose riders fight alongside Tavore’s soldiers.', 'Vojevůdce, jehož jezdci bojují po boku Tavořiných vojáků.'),
    dad: L('The warleader of the Khundryl Burned Tears, allies of the Fourteenth.', 'Vojevůdce Chundrylů, spojenců Čtrnácté armády.')
  },
  {
    id: 'aranict', intro: { vol: 9, gi: 1 },
    name: L('Aranict', 'Aranikt'), en: 'Aranict',
    race: 'human', rlab: L('Letherii Atri-Ceda', 'Lederská atriceda'), ic: 'warren',
    kid: L('A Letherii mage who travels east with Brys.', 'Lederská čarodějka, která cestuje na východ s Brysem.'),
    dad: L('The Atri-Ceda of the Letherii troops who accompany Brys and Tavore.', 'Atriceda lederských vojáků doprovázejících Bryse a Tavore.')
  },
  {
    id: 'abrastal', intro: { vol: 9, gi: 1 },
    name: L('Queen Abrastal', 'Královna Abrastal'), en: 'Queen Abrastal',
    race: 'human', rlab: L('Queen of Bolkando', 'Královna Bolkanda'), ic: 'crown',
    kid: L('The queen of a country in the path of the armies.', 'Královna země, kterou chtějí vojska projít.'),
    dad: L('The Bolkando queen who deals with the armies seeking a route through her kingdom.', 'Bolkandská královna, která jedná s vojsky hledajícími cestu jejím královstvím.')
  },
  {
    id: 'maral', intro: { vol: 9, gi: 3 },
    name: L('Maral Eb', 'Maral Eb'), en: 'Maral Eb',
    race: 'human', rlab: L('Barghast clan chief', 'Barghastský válečný náčelník'), ic: 'sword',
    kid: L('A clan chief who challenges Tool’s leadership.', 'Náčelník klanu, který se postaví proti Onosovu velení.'),
    dad: L('A Barghast clan chief whose ambition brings his followers into conflict with Tool.', 'Barghastský válečný náčelník, jehož ctižádost přivede jeho lidi do střetu s Onosem.')
  },
  {
    id: 'gurull', intro: { vol: 9, gi: 2 },
    name: L('Gu’Rull', 'Gu’Rull'), en: 'Gu’Rull',
    race: 'kchain', rlab: L('Shi’gal assassin', 'Asasín Shi’gal'), ic: 'kchain',
    kid: L('A winged Che’Malle scout who helps Kalyth.', 'Okřídlený zvěd Che’Malle, který pomáhá Kalyth.'),
    dad: L('A Shi’gal assassin who helps Kalyth and later scouts from the air for Gesler.', 'Asasín Shi’gal, který pomáhá Kalyth a později pro Geslera provádí průzkum ze vzduchu.')
  },
  {
    id: 'gunthmach', intro: { vol: 7, gi: 2 },
    name: L('Gunth Mach', 'Gunth Mach'), en: 'Gunth Mach',
    race: 'kchain', rlab: L('K’Chain Che’Malle', 'K’Chain Che’Malle'), ic: 'kchain',
    kid: L('One of the two strange warriors seen beside Redmask.', 'Jedna ze dvou podivných postav, které doprovázejí Rudomaska.'),
    dad: L('A Che’Malle who travels with Sag’Churok.', 'Příslušnice Che’Malle, která putuje se Sag’Churokem.'),
    arc: { ahead: L('What future can she offer her kind?', 'Jakou budoucnost může nabídnout svému lidu?'), beats: [
      { vol: 9, gi: 6, text: L('Succeeds Gunth’an Acyl and pledges to help the humans travel east.', 'Stane se nástupkyní Gunth’an Acyl a přislíbí lidem ochranu při cestě na východ.') }
    ] }
  },
  {
    id: 'rutt', intro: { vol: 9, gi: 5 },
    name: L('Rutt', 'Rutt'), en: 'Rutt',
    race: 'human', rlab: L('Child of the Snake', 'Dítě Hada'), ic: 'eye',
    kid: L('The boy who carries the smallest child as the group travels.', 'Chlapec, který cestou nese nejmenší dítě.'),
    dad: L('One of the children leading the Snake. He carries the infant Held.', 'Jeden z dětí v čele Hada. Nese nemluvně Držánu.')
  },
  {
    id: 'badalle', intro: { vol: 9, gi: 5 },
    name: L('Badalle', 'Badalle'), en: 'Badalle',
    race: 'human', rlab: L('Voice of the Snake', 'Hlas Hada'), ic: 'scroll',
    kid: L('A child who puts the group’s journey into words.', 'Dívka, která slovy zachycuje putování dětí.'),
    dad: L('A child among the refugees from Kolanse whose words record the journey and answer their pursuers.', 'Dívka mezi uprchlíky z Kolanse, která slovy zachycuje cestu a odpovídá pronásledovatelům.')
  },
  {
    id: 'saddic', intro: { vol: 9, gi: 5 },
    name: L('Saddic', 'Saddik'), en: 'Saddic',
    race: 'human', rlab: L('Child of the Snake', 'Dítě Hada'), ic: 'eye',
    kid: L('A boy who gathers small things as the children walk.', 'Chlapec, který cestou sbírá drobnosti.'),
    dad: L('One of the children fleeing Kolanse. He collects objects that remind him of the world they left behind.', 'Jeden z dětí prchajících z Kolanse. Sbírá věci, které mu připomínají svět, jejž opustili.')
  },
  {
    id: 'grub', intro: { vol: 6, gi: 1 },
    name: L('Grub', 'Žrout'), en: 'Grub',
    race: 'human', rlab: L('Foundling with the Fourteenth', 'Nalezenec u Čtrnácté armády'), ic: 'eye',
    kid: L('A boy in the care of Keneb who notices things the soldiers miss.', 'Chlapec v Kenebově péči, který si všímá věcí, jež vojákům unikají.'),
    dad: L('A foundling taken in by Keneb who shows a gift for magic.', 'Nalezenec, kterého se ujal Keneb a který projevuje nadání pro magii.'),
    arc: { ahead: L('How will he use his gifts?', 'Jak využije své nadání?'), beats: [
      { vol: 9, gi: 6, text: L('Helps Sinn burn the Nah’ruk sky keeps near the closing gate.', 'Pomůže Sinn spálit pevnosti Nah’ruk u zavírající se brány.') }
    ] }
  },
  {
    id: 'hedge', intro: { vol: 1, gi: 1 },
    name: L('Hedge', 'Křovák'), en: 'Hedge',
    race: 'malazan', rlab: L('Bridgeburner sapper', 'Sapér Paličů mostů'), ic: 'flame',
    kid: L('A sapper and old friend of Fiddler.', 'Sapér a Šumařův starý přítel.'),
    dad: L('A Bridgeburner sapper who worked closely with Fiddler.', 'Sapér Paličů mostů, který úzce spolupracoval se Šumařem.'),
    arc: { ahead: L('How long can a soldier’s friendship last?', 'Jak dlouho může vydržet přátelství vojáků?'), beats: [
      { vol: 3, gi: 6, text: L('Dies fighting at Coral.', 'Padne v boji u Korálu.') },
      { vol: 7, gi: 4, text: L('Returns to mortal life in the Refugium.', 'V Refugiu se vrátí ke smrtelnému životu.') },
      { vol: 9, gi: 1, text: L('Begins training sappers for Tavore’s army.', 'Začne cvičit sapéry pro Tavořino vojsko.') }
    ] }
  },
  {
    id: 'kalyth', intro: { vol: 9, gi: 2 },
    name: L('Kalyth', 'Kalyth'), en: 'Kalyth',
    race: 'human', rlab: L('Destriant of the K’Chain', 'Válečný jezdec K’Chain'), ic: 'kchain',
    kid: L('A woman chosen by the K’Chain Che’Malle to speak for them. She is terrified, stubborn and the only hope of a dying people.', 'Žena vyvolená K’Chain Che’Malle, aby za ně mluvila. Je vyděšená, tvrdohlavá a jediná naděje umírajícího lidu.'),
    dad: L('An Elan woman whom Gunth’an Acyl makes her Destriant and sends to find human allies.', 'Elanka, kterou Gunth’an Acyl jmenuje svým válečným jezdcem a vyšle hledat lidské spojence.'),
    arc: { ahead: L('What do you owe a people that chose you without asking?', 'Co dlužíš lidu, který si tě vybral, aniž by se ptal?'),
      beats: [
        { vol: 9, gi: 2, text: L('Sets out with Gu’Rull to find the Che’Malle a Mortal Sword and Shield Anvil.', 'Vyrazí s Gu’Rullem hledat Che’Malle smrtelný meč a nezdolný štít.') },
        { vol: 9, gi: 6, text: L('Brings Gesler and Stormy to the Che’Malle and stands with them against the Nah’ruk.', 'Přivede ke Che’Malle Geslera a Bouřňáka a postaví se s nimi proti Nah’ruk.') },
        { vol: 10, gi: 4, text: L('Accompanies the Che’Malle to the Spire.', 'Doprovází Che’Malle k Jehle.') }
      ] }
  },
  {
    id: 'hetan', intro: { vol: 3, gi: 3 },
    name: L('Hetan', 'Hetan'), en: 'Hetan',
    race: 'human', rlab: L('White Face Barghast warrior', 'Válečnice klanu Bílé tváře'), ic: 'sword',
    kid: L('A Barghast warrior and the daughter of Humbrall Taur.', 'Barghastská válečnice a dcera Humbralla Taura.'),
    dad: L('A warrior of the White Face Barghast who fights in the Pannion War.', 'Válečnice Barghastů Bílé tváře, která bojuje v pannionské válce.'),
    arc: { ahead: L('What happens to a people when its leaders stop listening?', 'Co se stane s lidem, když jeho vůdci přestanou naslouchat?'),
      beats: [
        { vol: 9, gi: 3, text: L('Dies after the clans turn against Tool’s family and attack her.', 'Zemře poté, co se klany obrátí proti Onosově rodině a napadnou ji.') }
      ] }
  },
  {
    id: 'stormy', intro: { vol: 2, gi: 3 },
    name: L('Stormy', 'Bouřňák'), en: 'Stormy',
    race: 'malazan', rlab: L('Malazan marine', 'Malazský mariňák'), ic: 'flame',
    kid: L('A tough soldier with a loud voice and a soft heart. He has survived so many battles that he has stopped expecting to survive the next one.', 'Drsný voják s hlasitým hlasem a měkkým srdcem. Přežil tolik bitev, že už ani nečeká, že přežije další.'),
    dad: L('A veteran marine and Gesler’s long-time comrade.', 'Zkušený mariňák a Geslerův dlouholetý spolubojovník.'),
    arc: { ahead: L('What keeps a soldier going when he has already outlived his luck?', 'Co drží vojáka na nohou, když už dávno přežil své štěstí?'),
      beats: [
        { vol: 2, gi: 3, text: L('Helps Kulp and the fugitives and boards the Silanda with Gesler.', 'Pomáhá Kulpovi a uprchlíkům a s Geslerem nastoupí na Silandu.') },
        { vol: 6, gi: 5, text: L('Names fallen comrades with Gesler and Fiddler in Malaz City.', 'Ve městě Malaz s Geslerem a Šumařem vzpomíná na padlé spolubojovníky.') },
        { vol: 9, gi: 6, text: L('Fights as Shield Anvil of the Che’Malle beside Gesler.', 'Bojuje po Geslerově boku jako nezdolný štít Che’Malle.') },
        { vol: 10, gi: 4, text: L('Dies at the Spire fighting alongside Gesler.', 'Padne u Jehly v boji po Geslerově boku.') }
      ] }
  },
  {
    id: 'gesler', intro: { vol: 2, gi: 3 },
    name: L('Gesler', 'Gesler'), en: 'Gesler',
    race: 'malazan', rlab: L('Malazan marine', 'Malazský mariňák'), ic: 'sword',
    kid: L('A calm, sarcastic soldier who has seen it all. He pretends not to care, but he cares more than almost anyone.', 'Klidný, sarkastický voják, který už viděl všechno. Předstírá, že ho to nezajímá, ale zajímá ho to víc než skoro kohokoli.'),
    dad: L('A veteran marine who serves alongside Stormy.', 'Zkušený mariňák, který slouží po boku Bouřňáka.'),
    arc: { ahead: L('Is there such a thing as a good soldier in a bad war?', 'Existuje něco jako dobrý voják ve špatné válce?'),
      beats: [
        { vol: 2, gi: 3, text: L('Helps Kulp and the fugitives and boards the Silanda with Stormy.', 'Pomáhá Kulpovi a uprchlíkům a s Bouřňákem nastoupí na Silandu.') },
        { vol: 6, gi: 1, text: L('Survives the underground escape from Y’Ghatan.', 'Přežije útěk z Y’Ghatanu podzemím.') },
        { vol: 9, gi: 6, text: L('Leads the Che’Malle against the Nah’ruk as their Mortal Sword.', 'Vede Che’Malle proti Nah’ruk jako jejich smrtelný meč.') },
        { vol: 10, gi: 4, text: L('Dies at the Spire while trying to stop Sinn.', 'Padne u Jehly, když se snaží zastavit Sinn.') }
      ] }
  },
  {
    id: 'ruthan', intro: { vol: 9, gi: 1 },
    name: L('Ruthan Gudd', 'Ruthan Gudd'), en: 'Ruthan Gudd',
    race: 'malazan', rlab: L('Malazan captain', 'Malazský kapitán'), ic: 'sword',
    kid: L('A captain who accompanies Tavore and keeps his past to himself.', 'Kapitán, který doprovází Tavore a o své minulosti nemluví.'),
    dad: L('A captain in the Bonehunters who has powers associated with the Stormriders.', 'Kapitán Lovců kostí se schopnostmi spojenými s Bouřnými jezdci.')
  },
  {
    id: 'blistig', intro: { vol: 2, gi: 5 },
    name: L('Blistig', 'Blistig'), en: 'Blistig',
    race: 'malazan', rlab: L('Malazan Fist', 'Malazská pěst'), ic: 'sword',
    kid: L('An officer from Aren who later serves with Tavore.', 'Důstojník z Arenu, který později slouží pod Tavore.'),
    dad: L('A former officer of the Aren garrison. He serves as a Fist in the Fourteenth Army.', 'Bývalý důstojník arenské posádky. Slouží jako pěst ve Čtrnácté armádě.')
  },
  {
    id: 'kadagar', intro: { vol: 10, gi: 2 },
    name: L('Kadagar Fant', 'Kadagar Fant'), en: 'Kadagar Fant',
    race: 'tiste', rlab: L('Tiste Liosan warleader', 'Vojevůdce Tiste Liosan'), ic: 'sword',
    kid: L('A commander trying to take the First Shore.', 'Velitel, který se snaží dobýt První pobřeží.'),
    dad: L('The Tiste Liosan leader whose warriors attack the Shake at the First Shore.', 'Velitel Tiste Liosan, jehož bojovníci napadnou Třasy na Prvním pobřeží.')
  },
  {
    id: 'reverence', intro: { vol: 10, gi: 3 },
    name: L('Reverence', 'Velebnost'), en: 'Reverence',
    race: 'forkrul', rlab: L('Forkrul Assail Pure', 'Zákonná inkvizitorka Forkrul Assail'), ic: 'eye',
    kid: L('One of the rulers who guard the altar on the Spire.', 'Jedna z vládkyň, které střeží oltář na Jehle.'),
    dad: L('One of the Forkrul Assail Pure who rules Kolanse and guards the heart at the Spire.', 'Jedna ze zákonných inkvizitorů Forkrul Assail, která vládne v Kolanse a střeží srdce na Jehle.')
  },
  {
    id: 'diligence', intro: { vol: 10, gi: 3 },
    name: L('Diligence', 'Pilnost'), en: 'Diligence',
    race: 'forkrul', rlab: L('Forkrul Assail Pure', 'Zákonný inkvizitor Forkrul Assail'), ic: 'eye',
    kid: L('A ruler who directs the soldiers opposing Brys in Kolanse.', 'Vládce, který v Kolanse vede vojáky proti Brysovi.'),
    dad: L('A Forkrul Assail commander in Kolanse who uses the Voice against his enemies.', 'Velitel Forkrul Assail v Kolanse, který proti protivníkům používá Hlas.')
  },
  {
    id: 'korabas', intro: { vol: 10, gi: 5 },
    name: L('Korabas', 'Korabas'), en: 'Korabas',
    race: 'dragon', rlab: L('Otataral dragon', 'Otataralová dračice'), ic: 'dragon',
    kid: L('A dragon who makes magic fail when she comes near.', 'Dračice, v jejíž blízkosti přestává fungovat magie.'),
    dad: L('The otataral dragon, hunted because her presence suppresses sorcery.', 'Otataralová dračice, kterou pronásledují, protože její přítomnost tlumí magii.')
  },
  {
    id: 'noto', intro: { vol: 6, gi: 2 },
    name: L('Noto Boil', 'Noto Nežit'), en: 'Noto Boil',
    race: 'malazan', rlab: L('Medic in the Host', 'Ranhojič Jednorukého houfce'), ic: 'flask',
    kid: L('A healer who helps Paran care for his soldiers.', 'Ranhojič, který Paranovi pomáhá pečovat o vojáky.'),
    dad: L('A healer and mage of the Host, serving under Paran after the plague.', 'Ranhojič a mág houfce, který po moru slouží pod Paranem.')
  },
  {
    id: 'crippled', intro: { vol: 3, gi: 5 },
    name: L('The Crippled God', 'Chromý bůh'), en: 'The Crippled God',
    race: 'god', rlab: L('The chained god', 'Spoutaný bůh'), ic: 'chain',
    kid: L('A broken god from another world, chained and used by powerful people. He is terrifying, but he is also in terrible pain.', 'Zlomený bůh z jiného světa, spoutaný a využívaný mocnými. Je děsivý, ale také strašně trpí.'),
    dad: L('A god from another world whose body was shattered in his fall. The other gods chained him to this world.', 'Bůh z jiného světa, jehož tělo se při pádu roztříštilo. Ostatní bohové ho připoutali k tomuto světu.'),
    arc: { ahead: L('Does a god deserve mercy?', 'Zaslouží si bůh milosrdenství?'),
      beats: [
        { vol: 3, gi: 5, text: L('Kallor serves his interests during the Pannion war.', 'Kallor během pannionské války slouží jeho zájmům.') },
        { vol: 5, gi: 3, text: L('Resurrects Rhulad and makes him Emperor of the Edur.', 'Vzkřísí Rhulada a učiní ho císařem Edurů.') },
        { vol: 7, gi: 5, text: L('Offers Karsa the sword and is refused.', 'Nabídne Karsovi meč a je odmítnut.') },
        { vol: 10, gi: 6, text: L('Leaves the world after Cotillion frees him from his mortal body.', 'Opustí svět poté, co ho Kotilion osvobodí ze smrtelného těla.') }
      ] }
  }
];

// Two internal books of three movements each, for every volume.
// gi (the global movement index inside a volume) is computed by the engine from book + n.
var VOLBOOKS = {
  '1': [
    { count: 3, label: 'I', title: L('The Fall of Pale', 'Pád Pale') },
    { count: 3, label: 'II', title: L('The City of Blue Fire', 'Město modrého ohně') }
  ],
  '2': [
    { count: 3, label: 'I', title: L('The Road of Slaves', 'Cesta otroků') },
    { count: 3, label: 'II', title: L('The Chain of Dogs', 'Psí řetěz') }
  ],
  '3': [
    { count: 3, label: 'I', title: L('The Alliance', 'Spojenectví') },
    { count: 3, label: 'II', title: L('The Pannion War', 'Pannionská válka') }
  ],
  '4': [
    { count: 3, label: 'I', title: L('The Teblor', 'Teblor') },
    { count: 3, label: 'II', title: L('The Whirlwind’s End', 'Konec Vichru') }
  ],
  '5': [
    { count: 3, label: 'I', title: L('The Sengar Brothers', 'Bratři Sengarové') },
    { count: 3, label: 'II', title: L('The Fall of Letheras', 'Pád Letherasu') }
  ],
  '6': [
    { count: 3, label: 'I', title: L('Seven Cities', 'Sedmiměstí') },
    { count: 3, label: 'II', title: L('Malaz and the First Throne', 'Malaz a První trůn') }
  ],
  '7': [
    { count: 3, label: 'I', title: L('The Empire at War', 'Říše ve válce') },
    { count: 3, label: 'II', title: L('Gates and the Capital', 'Brány a hlavní město') }
  ],
  '8': [
    { count: 3, label: 'I', title: L('Two Cities', 'Dvě města') },
    { count: 3, label: 'II', title: L('The Night of the Hounds', 'Noc ohařů') }
  ],
  '9': [
    { count: 3, label: 'I', title: L('The March East', 'Pochod na východ') },
    { count: 3, label: 'II', title: L('Roads through the Wastes', 'Cesty pustinou') }
  ],
  '10': [
    { count: 3, label: 'I', title: L('The Last March', 'Poslední pochod') },
    { count: 3, label: 'II', title: L('The Book of the Fallen', 'Kniha padlých') }
  ]
};
