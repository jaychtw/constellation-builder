const plateNames = [
  ['獵戶座','獵人'], ['大熊座','巨熊'], ['仙后座','王后'], ['獅子座','雄獅'],
  ['金牛座','公牛'], ['天蠍座','蠍子'], ['天鵝座','天鵝'], ['飛馬座','飛馬'],
  ['雙子座','雙胞胎'], ['天琴座','里拉琴'], ['仙女座','公主'], ['英仙座','英雄'],
  ['鯨魚座','海怪'], ['仙王座','國王']
];
const myths = {
  Cassiopeia: ['Cassiopeia boasted of her beauty. In Greek myth, her pride brought a sea monster to her kingdom’s shores.', '在希臘神話裡，王后卡西歐佩亞誇耀自己的美貌，為王國引來了海怪。'],
  Andromeda: ['Andromeda, daughter of Cassiopeia and Cepheus, was bound to a rock by the sea as an offering to Cetus.', '仙后與仙王的女兒安朵美達被綁在海邊的岩石上，成為獻給海怪的祭品。'],
  Perseus: ['Returning from his encounter with Medusa, Perseus found Andromeda on the shore and rescued her from Cetus.', '珀耳修斯斬殺梅杜莎後，在歸途中遇見岸邊的安朵美達，將她從海怪口中救出。'],
  Cetus: ['In the story of Andromeda, this sea monster threatened the coast of her parents’ kingdom.', '在安朵美達的故事裡，這頭海怪威脅著她父母治下的海岸。'],
  Cepheus: ['King Cepheus followed an oracle’s counsel and gave up his daughter Andromeda in the hope of saving his people.', '為了保住人民，國王刻甫斯聽從神諭，將女兒安朵美達獻給海怪。']
};
let chinese = false;
try { chinese = localStorage.getItem('constellation-language') === 'zh-TW'; } catch {}
function tr(en, zh) { return chinese ? zh : en; }
function localizeControls() {
  document.documentElement.lang = tr('en','zh-Hant-TW');
  document.title = tr('Constellation Builder','星座連線圖鑑');
  $('#title').textContent = document.title;
  $('#language').textContent = tr('繁體中文','English');
  $('#language').lang = tr('zh-Hant-TW','en');
  $('#prev').setAttribute('aria-label',tr('Previous constellation','上一個星座'));
  $('#next').setAttribute('aria-label',tr('Next constellation','下一個星座'));
  $('#choose').setAttribute('aria-label',tr('Choose constellation','選擇星座'));
  svg.setAttribute('aria-label',tr('Selectable stars','可點選的星星'));
  $('#choose').replaceChildren(...charts.map((c,i)=>new Option(tr(c.name,plateNames[i][0]),i)));
  updateGuide();
}
function updateGuide() {
  $('#guide').textContent = guiding ? tr('Hide guide','隱藏連線提示') : tr('Trace guide','顯示連線提示');
  $('#guide').setAttribute('aria-pressed',String(guiding));
}
