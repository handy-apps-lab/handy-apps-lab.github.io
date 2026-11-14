// Texte în 6 limbi. Limba: din ?lang=, apoi alegerea salvată, apoi limba browserului, altfel engleză.
const LANGS = { en: 'English', ro: 'Română', it: 'Italiano', fr: 'Français', es: 'Español', ru: 'Русский' };

// Unde se descarcă (se schimbă aici, la fiecare versiune nouă)
const REPO = 'https://github.com/handy-apps-lab/handy-apps-lab.github.io';
const LINKS = {
  fixallAndroid: REPO + '/releases/download/fixall-android-v0.0.2/FixAll-0.0.2.apk',
  fixallWindows: REPO + '/releases/download/fixall-windows-v1.1.0/FixAll-Setup-1.1.0.exe',
  issues: REPO + '/issues',
  // discuții pe aplicație (GitHub Discussions, câte o categorie pe program)
  talkAll: REPO + '/discussions',
  talkFixAll: REPO + '/discussions/categories/fix-all',
  talkPlayer: REPO + '/discussions/categories/player',
};

const T = {
  en: {
    discuss: "Discussions & ideas", discussNote: "Discussions are on GitHub: you can read them freely; to write, you need a free GitHub account. Constructive ideas are very welcome!",
    navApps: 'Apps', navInstall: 'How to install', navTest: 'Become a tester', navPrivacy: 'Privacy',
    heroTitle: 'Small apps that <span>make life easier</span>',
    heroSub: 'Free, simple tools for your phone and PC. Try them here first — before they reach Google Play.',
    pFree: 'Free', pNoAds: 'No ads', pPrivate: 'Your data stays on your device', pLangs: '6 languages',
    appsTitle: 'Apps', appsLead: 'Download, try, and tell us what to improve.',
    tagAndroid: 'Android', tagWindows: 'Windows', tagBeta: 'Beta', tagSoon: 'Coming soon',
    fixMobDesc: 'Cleans and checks your phone, gently and safely.',
    fixMob1: 'Finds big files, old downloads, duplicate and blurry photos',
    fixMob2: 'Moves photos and videos to a USB stick — deletes only after checking',
    fixMob3: 'Security check, battery, unused apps, privacy check',
    fixMob4: 'Recovery center: deleted photos come back for 30 days',
    fixWinDesc: 'Cleans and speeds up your Windows PC.',
    fixWin1: 'Temp files, browser cache, Windows Update leftovers',
    fixWin2: 'Duplicate photos and videos, old downloads',
    fixWin3: 'What slows your PC, startup apps, disk health',
    fixWin4: 'Weekly automatic cleaning, PIN and themes',
    playerDesc: 'Radio, YouTube, podcasts, audiobooks and TV in one app — with voice control for the car.',
    player1: 'Thousands of radio stations from every country',
    player2: '"Hey Player" voice commands, Android Auto',
    player3: '"What song is this?" — recognizes music on the radio',
    download: 'Download', soon: 'Coming soon', version: 'Version',
    installTitle: 'How to install', installLead: 'Our apps are not in the stores yet, so your device will ask for confirmation once.',
    instAndroid: 'On Android', instWindows: 'On Windows',
    a1: 'Tap Download and open the .apk file.',
    a2: 'If asked, allow "Install unknown apps" for your browser or file manager.',
    a3: 'Tap Install. Updates install over the old version, nothing is lost.',
    w1: 'Download and open the setup file.',
    w2: 'If Windows shows "Windows protected your PC", click "More info" → "Run anyway". It appears because we don\'t have a paid signing certificate yet.',
    w3: 'Follow the setup. You can uninstall it any time from Settings → Apps.',
    testTitle: 'Become a tester', testLead: 'Every report helps an app get better before Google Play.',
    t1: 'Install an app and use it normally for a few days.',
    t2: 'Something wrong? In Fix All: Settings → Help → Report a problem. It sends a short text — no photos, no file names.',
    t3: 'Ideas or bugs can also be posted on our GitHub page.',
    reportBtn: 'Report on GitHub',
    footer: 'Handy Apps Lab — free apps, made with care.',
  },
  ro: {
    discuss: "Discuții și idei", discussNote: "Discuțiile sunt pe GitHub: le poți citi liber; ca să scrii, îți trebuie un cont GitHub gratuit. Ideile constructive sunt foarte binevenite!",
    navApps: 'Aplicații', navInstall: 'Cum instalezi', navTest: 'Devino tester', navPrivacy: 'Confidențialitate',
    heroTitle: 'Aplicații mici care <span>îți ușurează viața</span>',
    heroSub: 'Unelte gratuite și simple pentru telefon și PC. Le încerci aici înainte să ajungă pe Google Play.',
    pFree: 'Gratuit', pNoAds: 'Fără reclame', pPrivate: 'Datele rămân pe dispozitivul tău', pLangs: '6 limbi',
    appsTitle: 'Aplicații', appsLead: 'Descarcă, încearcă și spune-ne ce să îmbunătățim.',
    tagAndroid: 'Android', tagWindows: 'Windows', tagBeta: 'Beta', tagSoon: 'În curând',
    fixMobDesc: 'Curăță și verifică telefonul, cu grijă și în siguranță.',
    fixMob1: 'Găsește fișiere mari, descărcări vechi, poze duplicate și neclare',
    fixMob2: 'Mută pozele și filmele pe stick — șterge doar după verificare',
    fixMob3: 'Verificare de securitate, baterie, aplicații nefolosite, confidențialitate',
    fixMob4: 'Centru de recuperare: pozele șterse se pot recupera 30 de zile',
    fixWinDesc: 'Curăță și grăbește PC-ul cu Windows.',
    fixWin1: 'Fișiere temporare, cache browser, resturi Windows Update',
    fixWin2: 'Poze și filme duplicate, descărcări vechi',
    fixWin3: 'Ce încetinește PC-ul, programe la pornire, sănătatea discului',
    fixWin4: 'Curățare automată săptămânală, PIN și teme',
    playerDesc: 'Radio, YouTube, podcasturi, cărți audio și TV într-o singură aplicație — cu comenzi vocale pentru mașină.',
    player1: 'Mii de posturi de radio din toate țările',
    player2: 'Comenzi vocale „Hey Player”, Android Auto',
    player3: '„Ce melodie e?” — recunoaște muzica de la radio',
    download: 'Descarcă', soon: 'În curând', version: 'Versiunea',
    installTitle: 'Cum instalezi', installLead: 'Aplicațiile nu sunt încă în magazine, așa că dispozitivul cere o confirmare o singură dată.',
    instAndroid: 'Pe Android', instWindows: 'Pe Windows',
    a1: 'Apasă Descarcă și deschide fișierul .apk.',
    a2: 'Dacă te întreabă, permite „Instalare aplicații necunoscute” pentru browser sau managerul de fișiere.',
    a3: 'Apasă Instalează. Actualizările se pun peste versiunea veche, nu se pierde nimic.',
    w1: 'Descarcă și deschide fișierul de instalare.',
    w2: 'Dacă Windows spune „Windows a protejat PC-ul”, apasă „Mai multe informații” → „Rulează oricum”. Apare pentru că încă nu avem un certificat de semnare plătit.',
    w3: 'Urmează pașii. Îl poți dezinstala oricând din Setări → Aplicații.',
    testTitle: 'Devino tester', testLead: 'Fiecare raport ajută o aplicație să fie mai bună înainte de Google Play.',
    t1: 'Instalează o aplicație și folosește-o normal câteva zile.',
    t2: 'Ceva nu merge? În Fix All: Setări → Ajutor → Trimite o problemă. Trimite un text scurt — fără poze, fără nume de fișiere.',
    t3: 'Idei sau probleme poți scrie și pe pagina noastră de GitHub.',
    reportBtn: 'Raportează pe GitHub',
    footer: 'Handy Apps Lab — aplicații gratuite, făcute cu grijă.',
  },
  it: {
    discuss: "Discussioni e idee", discussNote: "Le discussioni sono su GitHub: puoi leggerle liberamente; per scrivere serve un account GitHub gratuito. Le idee costruttive sono benvenute!",
    navApps: 'App', navInstall: 'Come installare', navTest: 'Diventa tester', navPrivacy: 'Privacy',
    heroTitle: 'Piccole app che <span>semplificano la vita</span>',
    heroSub: 'Strumenti gratuiti e semplici per telefono e PC. Provali qui prima che arrivino su Google Play.',
    pFree: 'Gratis', pNoAds: 'Senza pubblicità', pPrivate: 'I tuoi dati restano sul dispositivo', pLangs: '6 lingue',
    appsTitle: 'App', appsLead: 'Scarica, prova e dicci cosa migliorare.',
    tagAndroid: 'Android', tagWindows: 'Windows', tagBeta: 'Beta', tagSoon: 'In arrivo',
    fixMobDesc: 'Pulisce e controlla il telefono, con cura e in sicurezza.',
    fixMob1: 'Trova file grandi, vecchi download, foto doppie e sfocate',
    fixMob2: 'Sposta foto e video su chiavetta USB — elimina solo dopo il controllo',
    fixMob3: 'Controllo sicurezza, batteria, app inutilizzate, privacy',
    fixMob4: 'Centro di recupero: le foto eliminate tornano per 30 giorni',
    fixWinDesc: 'Pulisce e velocizza il PC Windows.',
    fixWin1: 'File temporanei, cache del browser, residui di Windows Update',
    fixWin2: 'Foto e video doppi, vecchi download',
    fixWin3: 'Cosa rallenta il PC, app all\'avvio, salute del disco',
    fixWin4: 'Pulizia automatica settimanale, PIN e temi',
    playerDesc: 'Radio, YouTube, podcast, audiolibri e TV in un\'unica app — con comandi vocali per l\'auto.',
    player1: 'Migliaia di stazioni radio da ogni paese',
    player2: 'Comandi vocali "Hey Player", Android Auto',
    player3: '"Che canzone è?" — riconosce la musica alla radio',
    download: 'Scarica', soon: 'In arrivo', version: 'Versione',
    installTitle: 'Come installare', installLead: 'Le app non sono ancora negli store, quindi il dispositivo chiede una conferma una volta sola.',
    instAndroid: 'Su Android', instWindows: 'Su Windows',
    a1: 'Tocca Scarica e apri il file .apk.',
    a2: 'Se richiesto, consenti "Installa app sconosciute" per il browser o il file manager.',
    a3: 'Tocca Installa. Gli aggiornamenti si installano sopra la vecchia versione, non si perde nulla.',
    w1: 'Scarica e apri il file di installazione.',
    w2: 'Se Windows mostra "Windows ha protetto il PC", clicca "Ulteriori informazioni" → "Esegui comunque". Appare perché non abbiamo ancora un certificato di firma a pagamento.',
    w3: 'Segui i passaggi. Puoi disinstallarlo quando vuoi da Impostazioni → App.',
    testTitle: 'Diventa tester', testLead: 'Ogni segnalazione aiuta un\'app a migliorare prima di Google Play.',
    t1: 'Installa un\'app e usala normalmente per qualche giorno.',
    t2: 'Qualcosa non va? In Fix All: Impostazioni → Aiuto → Segnala un problema. Invia un breve testo — niente foto, niente nomi di file.',
    t3: 'Idee o problemi si possono scrivere anche sulla nostra pagina GitHub.',
    reportBtn: 'Segnala su GitHub',
    footer: 'Handy Apps Lab — app gratuite, fatte con cura.',
  },
  fr: {
    discuss: "Discussions et idées", discussNote: "Les discussions sont sur GitHub : lecture libre ; pour écrire, il faut un compte GitHub gratuit. Les idées constructives sont les bienvenues !",
    navApps: 'Apps', navInstall: 'Installer', navTest: 'Devenir testeur', navPrivacy: 'Confidentialité',
    heroTitle: 'De petites apps qui <span>simplifient la vie</span>',
    heroSub: 'Des outils gratuits et simples pour téléphone et PC. Essayez-les ici avant Google Play.',
    pFree: 'Gratuit', pNoAds: 'Sans pub', pPrivate: 'Vos données restent sur votre appareil', pLangs: '6 langues',
    appsTitle: 'Apps', appsLead: 'Téléchargez, essayez et dites-nous quoi améliorer.',
    tagAndroid: 'Android', tagWindows: 'Windows', tagBeta: 'Bêta', tagSoon: 'Bientôt',
    fixMobDesc: 'Nettoie et vérifie votre téléphone, en douceur et en sécurité.',
    fixMob1: 'Trouve gros fichiers, anciens téléchargements, photos en double et floues',
    fixMob2: 'Déplace photos et vidéos sur clé USB — supprime seulement après vérification',
    fixMob3: 'Contrôle de sécurité, batterie, apps inutilisées, confidentialité',
    fixMob4: 'Centre de récupération : les photos supprimées reviennent pendant 30 jours',
    fixWinDesc: 'Nettoie et accélère votre PC Windows.',
    fixWin1: 'Fichiers temporaires, cache du navigateur, restes de Windows Update',
    fixWin2: 'Photos et vidéos en double, anciens téléchargements',
    fixWin3: 'Ce qui ralentit le PC, apps au démarrage, santé du disque',
    fixWin4: 'Nettoyage automatique hebdomadaire, PIN et thèmes',
    playerDesc: 'Radio, YouTube, podcasts, livres audio et TV dans une seule app — avec commandes vocales pour la voiture.',
    player1: 'Des milliers de radios de tous les pays',
    player2: 'Commandes vocales « Hey Player », Android Auto',
    player3: '« Quelle est cette chanson ? » — reconnaît la musique à la radio',
    download: 'Télécharger', soon: 'Bientôt', version: 'Version',
    installTitle: 'Installer', installLead: 'Nos apps ne sont pas encore dans les stores : l\'appareil demande une confirmation une seule fois.',
    instAndroid: 'Sur Android', instWindows: 'Sur Windows',
    a1: 'Touchez Télécharger et ouvrez le fichier .apk.',
    a2: 'Si demandé, autorisez « Installer des apps inconnues » pour le navigateur ou le gestionnaire de fichiers.',
    a3: 'Touchez Installer. Les mises à jour s\'installent par-dessus, rien n\'est perdu.',
    w1: 'Téléchargez et ouvrez le fichier d\'installation.',
    w2: 'Si Windows affiche « Windows a protégé votre ordinateur », cliquez « Informations complémentaires » → « Exécuter quand même ». Cela apparaît car nous n\'avons pas encore de certificat de signature payant.',
    w3: 'Suivez les étapes. Désinstallable à tout moment dans Paramètres → Applications.',
    testTitle: 'Devenir testeur', testLead: 'Chaque rapport aide une app à s\'améliorer avant Google Play.',
    t1: 'Installez une app et utilisez-la normalement quelques jours.',
    t2: 'Un souci ? Dans Fix All : Paramètres → Aide → Signaler un problème. Un court texte est envoyé — sans photos ni noms de fichiers.',
    t3: 'Idées ou bugs peuvent aussi être publiés sur notre page GitHub.',
    reportBtn: 'Signaler sur GitHub',
    footer: 'Handy Apps Lab — des apps gratuites, faites avec soin.',
  },
  es: {
    discuss: "Debates e ideas", discussNote: "Los debates están en GitHub: puedes leerlos libremente; para escribir necesitas una cuenta gratuita de GitHub. ¡Las ideas constructivas son bienvenidas!",
    navApps: 'Apps', navInstall: 'Cómo instalar', navTest: 'Hazte tester', navPrivacy: 'Privacidad',
    heroTitle: 'Pequeñas apps que <span>te facilitan la vida</span>',
    heroSub: 'Herramientas gratis y sencillas para móvil y PC. Pruébalas aquí antes de que lleguen a Google Play.',
    pFree: 'Gratis', pNoAds: 'Sin anuncios', pPrivate: 'Tus datos se quedan en tu dispositivo', pLangs: '6 idiomas',
    appsTitle: 'Apps', appsLead: 'Descarga, prueba y dinos qué mejorar.',
    tagAndroid: 'Android', tagWindows: 'Windows', tagBeta: 'Beta', tagSoon: 'Próximamente',
    fixMobDesc: 'Limpia y revisa tu móvil, con cuidado y de forma segura.',
    fixMob1: 'Encuentra archivos grandes, descargas antiguas, fotos duplicadas y borrosas',
    fixMob2: 'Mueve fotos y vídeos a un USB — borra solo tras comprobar',
    fixMob3: 'Revisión de seguridad, batería, apps sin usar, privacidad',
    fixMob4: 'Centro de recuperación: las fotos borradas vuelven durante 30 días',
    fixWinDesc: 'Limpia y acelera tu PC con Windows.',
    fixWin1: 'Archivos temporales, caché del navegador, restos de Windows Update',
    fixWin2: 'Fotos y vídeos duplicados, descargas antiguas',
    fixWin3: 'Qué ralentiza el PC, apps de inicio, salud del disco',
    fixWin4: 'Limpieza automática semanal, PIN y temas',
    playerDesc: 'Radio, YouTube, pódcasts, audiolibros y TV en una sola app — con control por voz para el coche.',
    player1: 'Miles de emisoras de radio de todos los países',
    player2: 'Comandos de voz "Hey Player", Android Auto',
    player3: '"¿Qué canción es?" — reconoce la música de la radio',
    download: 'Descargar', soon: 'Próximamente', version: 'Versión',
    installTitle: 'Cómo instalar', installLead: 'Nuestras apps aún no están en las tiendas, así que el dispositivo pedirá confirmación una vez.',
    instAndroid: 'En Android', instWindows: 'En Windows',
    a1: 'Toca Descargar y abre el archivo .apk.',
    a2: 'Si te lo pide, permite "Instalar apps desconocidas" para el navegador o el gestor de archivos.',
    a3: 'Toca Instalar. Las actualizaciones se instalan encima, no se pierde nada.',
    w1: 'Descarga y abre el archivo de instalación.',
    w2: 'Si Windows muestra "Windows protegió su PC", haz clic en "Más información" → "Ejecutar de todas formas". Aparece porque aún no tenemos un certificado de firma de pago.',
    w3: 'Sigue los pasos. Puedes desinstalarlo cuando quieras en Configuración → Aplicaciones.',
    testTitle: 'Hazte tester', testLead: 'Cada informe ayuda a mejorar una app antes de Google Play.',
    t1: 'Instala una app y úsala con normalidad unos días.',
    t2: '¿Algo falla? En Fix All: Ajustes → Ayuda → Informar de un problema. Envía un texto breve — sin fotos ni nombres de archivos.',
    t3: 'También puedes publicar ideas o fallos en nuestra página de GitHub.',
    reportBtn: 'Informar en GitHub',
    footer: 'Handy Apps Lab — apps gratis, hechas con cariño.',
  },
  ru: {
    discuss: "Обсуждения и идеи", discussNote: "Обсуждения на GitHub: читать можно свободно, чтобы писать, нужен бесплатный аккаунт GitHub. Конструктивные идеи очень приветствуются!",
    navApps: 'Приложения', navInstall: 'Установка', navTest: 'Стать тестером', navPrivacy: 'Конфиденциальность',
    heroTitle: 'Небольшие приложения, которые <span>упрощают жизнь</span>',
    heroSub: 'Бесплатные и простые инструменты для телефона и ПК. Попробуйте их здесь до появления в Google Play.',
    pFree: 'Бесплатно', pNoAds: 'Без рекламы', pPrivate: 'Ваши данные остаются на устройстве', pLangs: '6 языков',
    appsTitle: 'Приложения', appsLead: 'Скачайте, попробуйте и расскажите, что улучшить.',
    tagAndroid: 'Android', tagWindows: 'Windows', tagBeta: 'Бета', tagSoon: 'Скоро',
    fixMobDesc: 'Бережно и безопасно очищает и проверяет телефон.',
    fixMob1: 'Находит большие файлы, старые загрузки, дубликаты и размытые фото',
    fixMob2: 'Переносит фото и видео на флешку — удаляет только после проверки',
    fixMob3: 'Проверка безопасности, батарея, неиспользуемые приложения, приватность',
    fixMob4: 'Центр восстановления: удалённые фото можно вернуть в течение 30 дней',
    fixWinDesc: 'Очищает и ускоряет ПК с Windows.',
    fixWin1: 'Временные файлы, кэш браузера, остатки Windows Update',
    fixWin2: 'Дубликаты фото и видео, старые загрузки',
    fixWin3: 'Что тормозит ПК, автозагрузка, здоровье диска',
    fixWin4: 'Еженедельная автоочистка, PIN и темы',
    playerDesc: 'Радио, YouTube, подкасты, аудиокниги и ТВ в одном приложении — с голосовым управлением для машины.',
    player1: 'Тысячи радиостанций со всего мира',
    player2: 'Голосовые команды «Hey Player», Android Auto',
    player3: '«Что это за песня?» — узнаёт музыку по радио',
    download: 'Скачать', soon: 'Скоро', version: 'Версия',
    installTitle: 'Установка', installLead: 'Наших приложений пока нет в магазинах, поэтому устройство один раз попросит подтверждение.',
    instAndroid: 'На Android', instWindows: 'На Windows',
    a1: 'Нажмите «Скачать» и откройте файл .apk.',
    a2: 'Если спросит, разрешите «Установку неизвестных приложений» для браузера или файлового менеджера.',
    a3: 'Нажмите «Установить». Обновления ставятся поверх, ничего не теряется.',
    w1: 'Скачайте и откройте установщик.',
    w2: 'Если Windows покажет «Система Windows защитила ваш компьютер», нажмите «Подробнее» → «Выполнить в любом случае». Это потому, что у нас пока нет платного сертификата подписи.',
    w3: 'Следуйте шагам. Удалить можно в любое время: Параметры → Приложения.',
    testTitle: 'Стать тестером', testLead: 'Каждый отчёт помогает улучшить приложение до Google Play.',
    t1: 'Установите приложение и пользуйтесь им несколько дней.',
    t2: 'Что-то не так? В Fix All: Настройки → Помощь → Сообщить о проблеме. Отправляется короткий текст — без фото и имён файлов.',
    t3: 'Идеи и ошибки можно также оставить на нашей странице GitHub.',
    reportBtn: 'Сообщить на GitHub',
    footer: 'Handy Apps Lab — бесплатные приложения, сделанные с заботой.',
  },
};

function pickLang() {
  const q = new URLSearchParams(location.search).get('lang');
  if (q && T[q]) return q;
  try {
    const s = localStorage.getItem('hal-lang');
    if (s && T[s]) return s;
  } catch (e) {}
  const n = (navigator.language || 'en').slice(0, 2);
  return T[n] ? n : 'en';
}

function applyLang(lang, extra) {
  const t = { ...T.en, ...T[lang], ...((extra && (extra[lang] || extra.en)) || {}) };
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-t]').forEach((el) => {
    const v = t[el.dataset.t];
    if (v !== undefined) el.innerHTML = v;
  });
  document.querySelectorAll('[data-link]').forEach((el) => (el.href = LINKS[el.dataset.link]));
  document.querySelectorAll('a[data-keeplang]').forEach((a) => {
    const u = new URL(a.getAttribute('href'), location.href);
    u.searchParams.set('lang', lang);
    a.href = u.pathname.split('/').pop() + u.search + u.hash;
  });
  try {
    localStorage.setItem('hal-lang', lang);
  } catch (e) {}
}

function initLang(extra) {
  const sel = document.getElementById('lang');
  const cur = pickLang();
  Object.entries(LANGS).forEach(([k, v]) => {
    const o = document.createElement('option');
    o.value = k;
    o.textContent = v;
    if (k === cur) o.selected = true;
    sel.appendChild(o);
  });
  sel.addEventListener('change', () => applyLang(sel.value, extra));
  applyLang(cur, extra);
}
