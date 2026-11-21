(() => {
  'use strict';
  const { book, catalogue, chapters, cast, images } = JSON.parse(document.querySelector('#guide').textContent);
  const $ = id => document.getElementById(id);
  const storage = {
    get(key) { try { return localStorage.getItem('hp-guide:' + key); } catch { return null; } },
    set(key, value) { try { localStorage.setItem('hp-guide:' + key, value); } catch { /* Reading also works without storage. */ } },
  };
  // A volume link can carry preferences when storage is blocked or isolated per local file.
  const linkPrefs = new URLSearchParams(location.hash.slice(1));
  let lang = (linkPrefs.get('lang') ?? storage.get('language')) === 'cs' ? 'cs' : 'en';
  let kids = (linkPrefs.get('mode') ?? storage.get('mode')) === 'kids';
  function preferenceHash() {
    const mode = kids ? 'kids' : 'parent';
    const savedMode = storage.get('mode') || 'parent';
    const savedLanguage = storage.get('language') || 'en';
    if (location.protocol !== 'file:' && savedMode === mode && savedLanguage === lang) return '';
    return '#' + new URLSearchParams({ mode, lang });
  }
  function savePreferences() {
    storage.set('mode', kids ? 'kids' : 'parent');
    storage.set('language', lang);
    const hash = preferenceHash();
    if (hash !== location.hash) {
      try { history.replaceState(null, '', location.href.split('#')[0] + hash); } catch { /* Volume links still carry the preferences. */ }
    }
  }
  const progressKey = 'read:' + book.slug;
  function readCount() {
    const value = Number(storage.get(progressKey));
    return Number.isInteger(value) && value >= 0 && value <= chapters.length ? value : 0;
  }
  let done = readCount();
  let selected = Math.min(done + 1, chapters.length);
  let section = 'chapters';
  let revealed = false;
  const tr = ([en, cs]) => lang === 'cs' ? cs : en;
  const say = (en, cs) => tr([en, cs]);
  const chapterName = n => book.epilogue && n === chapters.length ? say('Epilogue', 'Epilog') : say('Chapter ', 'Kapitola ') + n;
  const recap = c => tr(c.recap).replace(/\[([^\]]+)\]/, '$1');
  const limit = () => kids ? Math.min(done + 1, chapters.length) : chapters.length;
  const choose = n => {
    selected = Math.max(1, Math.min(n, limit()));
    revealed = false;
    render();
  };
  function pressed(id, value) { $(id).setAttribute('aria-pressed', value ? 'true' : 'false'); }
  function setProgress(value) {
    done = value;
    storage.set(progressKey, String(done));
    choose(selected);
  }
  function renderChapters() {
    const ch = chapters[selected - 1];
    const locked = kids && selected > done;
    const options = [], buttons = [];
    for (let i = 1; i <= limit(); i++) {
      const showTitle = !kids || i <= done;
      const label = showTitle ? chapterName(i) + ' · ' + tr(chapters[i-1].title) : chapterName(i);
      options.push(new Option(label, String(i), false, i === selected));
      const item = document.createElement('li');
      const button = document.createElement('button');
      button.textContent = showTitle ? (book.epilogue && i === chapters.length ? chapterName(i) : i) + ' · ' + tr(chapters[i-1].title) : label;
      if (i === selected) button.setAttribute('aria-current', 'true');
      button.onclick = () => { choose(i); $('list').children[i-1].firstChild.focus({preventScroll:true}); };
      item.append(button);
      buttons.push(item);
    }
    $('chapter').replaceChildren(...options);
    $('list').replaceChildren(...buttons);
    $('locator').textContent = chapterName(selected);
    $('heading').textContent = locked ? say('Before you read', 'Než začnete číst') : tr(ch.title);
    $('scene').hidden = locked;
    if (locked) {
      $('scene').removeAttribute('src');
      $('scene').alt = '';
    } else {
      $('scene').src = images[ch.art];
      $('scene').alt = tr(ch.alt);
    }
    $('copy').textContent = locked
      ? (selected === 1 ? tr(book.opening) : recap(chapters[selected - 2]))
      : kids && !revealed ? tr(ch.recap).replace(/\[[^\]]+\]/, '_____') : recap(ch);
    const moods = { quiet: ['Quiet', 'Klidná'], tense: ['Tense', 'Napínavá'], intense: ['Intense', 'Silná'] };
    $('mood').hidden = kids;
    $('mood').textContent = kids ? '' : say('Reading mood · ', 'Nálada kapitoly · ') + tr(moods[ch.mood]);
    $('noteTitle').textContent = locked ? say('Read together', 'Společné čtení')
      : kids ? say('Memory game', 'Hra na paměť') : say('Talk it over', 'Povídejte si');
    $('prompt').textContent = locked ? say('Finish this chapter in your book, then mark it as read to open the picture and memory game.', 'Přečtěte si kapitolu v knize a označte ji jako přečtenou. Otevře se obrázek a hra na paměť.')
      : !kids ? tr(ch.discuss)
      : revealed ? say('What else do you remember about this moment?', 'Co dalšího si z téhle chvíle pamatuješ?')
      : say('Can you fill in the missing words? Tell someone your guess.', 'Doplníš chybějící slova? Řekni někomu svůj tip.');
    $('reveal').hidden = !kids || locked || revealed;
    $('reveal').textContent = say('Show answer', 'Ukázat odpověď');
    $('mark').hidden = kids && !locked;
    $('mark').textContent = selected <= done ? say('Mark unread from here', 'Odtud označit za nepřečtené')
      : selected === done + 1 ? say('Mark as read', 'Označit za přečtené') : say('Mark read through here', 'Označit vše až sem za přečtené');
    $('next').hidden = selected >= limit();
    $('next').textContent = say('Next chapter →', 'Další kapitola →');
  }
  function renderCast() {
    const people = kids ? cast.filter(c => c.first <= done) : cast;
    $('castIntro').textContent = kids
      ? (people.length ? say('People and creatures you have met in this book.', 'Postavy a tvorové, které už v této knize znáš.') : say('Mark a chapter as read to meet its characters here.', 'Označ kapitolu za přečtenou a objevíš tu její postavy.'))
      : say('Meet the people and creatures in this volume. Open a reading prompt to explore them together.', 'Seznamte se s postavami a tvory tohoto dílu. Otevřete otázku ke společnému čtení.');
    $('cards').replaceChildren(...people.map(c => {
      const card = document.createElement('article');
      card.className = 'cast-card';
      const portrait = new Image();
      portrait.src = images[c.art]; portrait.loading = 'lazy'; portrait.alt = tr(c.alt);
      const name = document.createElement('h3'); name.textContent = tr(c.name);
      const bio = document.createElement('p'); bio.textContent = tr(c.bio);
      const details = document.createElement('details');
      const summary = document.createElement('summary'); summary.textContent = say('Read together', 'Společné čtení');
      const question = document.createElement('p'); question.textContent = tr(c.ask);
      details.append(summary, question); card.append(portrait, name, bio, details);
      return card;
    }));
  }
  function render() {
    document.documentElement.lang = lang;
    document.title = tr(book.title) + ' · Harry Potter · Book Guide';
    $('language').value = lang;
    $('parent').textContent = say('Parent', 'Rodiče'); $('kids').textContent = say('Kids', 'Děti');
    pressed('parent', !kids); pressed('kids', kids);
    $('title').textContent = tr(book.title); $('lead').textContent = tr(book.lead);
    $('volumeLabel').textContent = say('Book', 'Kniha');
    $('volume').replaceChildren(...catalogue.map((v,i) => new Option((i+1) + ' · ' + tr(v.title), v.file, false, v.slug === book.slug)));
    $('chapters').textContent = say('Chapters', 'Kapitoly');
    $('characters').textContent = $('castTitle').textContent = say('Characters', 'Postavy');
    pressed('chapters', section === 'chapters'); pressed('characters', section === 'characters');
    $('chapterLabel').textContent = say('Choose a chapter', 'Vyberte kapitolu');
    $('progressText').textContent = done + ' / ' + chapters.length + say(' read', ' přečteno');
    $('meter').max = chapters.length; $('meter').value = done; $('meter').ariaLabel = $('progressText').textContent;
    $('reader').hidden = section !== 'chapters'; $('cast').hidden = section !== 'characters';
    renderChapters(); renderCast();
  }
  for (const id of ['parent', 'kids']) $(id).onclick = () => {
    kids = id === 'kids'; savePreferences(); choose(selected);
  };
  for (const id of ['chapters', 'characters']) $(id).onclick = () => { section = id; render(); };
  $('language').onchange = e => { lang = e.target.value; savePreferences(); render(); };
  $('volume').onchange = e => { location.href = e.target.value + preferenceHash(); };
  $('chapter').onchange = e => choose(Number(e.target.value));
  $('next').onclick = () => choose(selected + 1);
  $('mark').onclick = () => setProgress(selected <= done ? selected - 1 : selected);
  $('reveal').onclick = () => { revealed = true; render(); $('copy').focus({preventScroll:true}); };
  window.addEventListener('storage', e => {
    if (e.key === null || e.key === 'hp-guide:' + progressKey) { done = readCount(); choose(selected); }
  });
  render();
})();
