// Tema, palestrante e capa de cada lab (lidos dos cursos no Núcleo em 27/11/2026).
// O preço e a disponibilidade vêm do n8n (coleção black-friday-2026); aqui é só apresentação.
// Lançamento: a faixa do topo e a página só anunciam quando os labs estiverem liberados no Núcleo
// (selos atribuídos e cursos em Restrito) e os produtos ativos na planilha.
export const BF_NO_AR = true;

// Preço de cada lab com o cupom BLACKFRIDAY (aba `cupons`: tipo preco_item, valor 15).
export const PRECO_CUPOM_CENTS = 1500;
// Kits completão: preço próprio no cupom (aba `cupons`, coluna `precos`: 35 por kit).
export const PRECO_CUPOM_KIT_CENTS = 3500;
export const precoCupomDe = (slug) => (KITS_BF[slug] ? PRECO_CUPOM_KIT_CENTS : PRECO_CUPOM_CENTS);

const CDN = 'https://cdn.cativalab.digital/gruponunca/files/';

// Kits completão (materiais profissionais) — criados na Cativa em 27/11/2026.
export const KITS_BF = {
  'kit-completo-ayurveda': { tema: 'Nutrição Ayurveda', capa: CDN + '5bd920e0-8b07-4252-b472-3c830d69494d.jpg' },
  'kit-completo-celiaca': { tema: 'Doença Celíaca', capa: CDN + '9f1fdca2-ed72-40b4-8165-2fa0ffaa96f2.jpg' },
  'kit-completo-performance': { tema: 'Performance', capa: CDN + '046719ef-4f97-4e88-a773-650a3aa17106.jpg' },
  'kit-completo-personal-chef': { tema: 'Personal Chef', capa: CDN + '21684980-a096-462d-835d-9ae7e2da380b.jpg' },
  'kit-completo-intestino-nutrigenetica': { tema: 'Intestino e Nutrigenética', capa: CDN + '578bff76-2b81-445e-9037-a972d117ae5f.jpg' },
  'kit-completo-fertilidade': { tema: 'Fertilidade', capa: CDN + '7c6461b6-acd3-451b-be34-8fadcf9195cd.jpg' },
  'kit-completo-lipedema': { tema: 'Lipedema', capa: CDN + '2fffb3fb-1eb8-44ca-afc9-c1fe602961c3.jpg' },
  'kit-completo-bariatrica': { tema: 'Bariátrica', capa: CDN + 'd3f2d8e2-cf32-46d3-9f80-0ba639d627a8.jpg' },
  'kit-completo-cardiopatias': { tema: 'Cardiopatias', capa: CDN + 'b44a47c7-593d-44ca-b00c-673496a00108.jpg' },
  'kit-completo-tea-tdah': { tema: 'TEA e TDAH na Infância', capa: CDN + '97fd96e9-a24b-4c60-b03d-127a5e59f18d.jpg' },
};

export const LABS_BF = {
  'lab-presencial-fevereiro': { tema: 'Nutrição Bariátrica', palestrante: 'Ana Paula Mendonça', capa: CDN + 'f95bb38d-6049-4a22-9353-09094d5ffbf9.png' },
  'lab-presencial-marco': { tema: 'Nutrição nas Cardiopatias', palestrante: 'Lorena Meneguetti', capa: CDN + '43ad2f58-79ee-44a5-990b-29771e58ddf9.png' },
  'lab-online-marco': { tema: 'Estudo, Organização e Carreira', palestrante: 'Carol Liviera', capa: CDN + '6a211d40-ad70-4d55-b945-a15a98e31036.png' },
  'lab-presencial-abril': { tema: 'Nutrição na Infância Neurodivergente (TEA e TDAH)', palestrante: 'Bruna Montemor', capa: CDN + '3231480a-cc13-4f18-966f-da1a3751b262.png' },
  'lab-online-abril': { tema: 'Nutrição Ayurveda', palestrante: 'Thaylise Gorla', capa: CDN + 'e5c0af3c-549d-4caa-8e65-522ebc034122.png' },
  'lab-presencial-maio': { tema: 'Alergias e Intolerâncias Alimentares', palestrante: 'Magali Conti', capa: CDN + 'bd3c60f5-37f8-4776-853a-3522d476553e.png' },
  'lab-online-maio': { tema: 'Doença Celíaca e Sensibilidade ao Glúten', palestrante: 'Ana Paula Mendonça e Pri Fratti', capa: CDN + 'ea1d0211-affd-451b-bd97-a2d3f3122829.png' },
  'lab-presencial-junho': { tema: 'Nutrição Esportiva no Futebol', palestrante: '', capa: CDN + 'ac898fde-1816-4fcb-8891-0a6e88bbf422.png' },
  'lab-online-junho': { tema: 'Periodização, Composição Corporal e Performance', palestrante: 'Bruno Pagan', capa: CDN + 'ee19e23e-ee3a-43c5-8c22-ba4ce64188fd.png' },
  'lab-presencial-julho': { tema: 'Análogos de GLP1 na Nutrição', palestrante: 'Dani Capelato', capa: CDN + '00cba9e6-92f7-418a-a635-427ed55c2392.jpg' },
  'lab-online-julho': { tema: 'Personal Chef na Nutrição', palestrante: 'Giovana Gubolin', capa: CDN + '640121b0-8496-48db-855b-8d976186b03b.jpg' },
  'lab-presencial-agosto': { tema: 'Intestino e Saúde da Mulher', palestrante: 'Gabi Davantel', capa: CDN + 'da0ed49d-0dcd-4fa5-80b5-f2e170a68b75.jpg' },
  'lab-online-agosto': { tema: 'Desordens Intestinais e Nutrigenética', palestrante: 'Karina Simas', capa: CDN + '75026788-ad63-4098-9f46-42ef67d0fdde.jpg' },
  'lab-presencial-setembro': { tema: 'Nutrição Clínica na Prática', palestrante: 'Hugo Rao', capa: CDN + 'b6641509-7ae8-4150-bef0-d56eb171957b.jpg' },
  'lab-online-setembro': { tema: 'Nutrição na Fertilidade', palestrante: 'Tassia Tanaka e Carol Schneider', capa: CDN + '124b42fc-fa5f-4b80-b97f-497e4f63200d.jpg' },
  'lab-presencial-outubro': { tema: 'Nutrição na Oncologia', palestrante: 'Ariana Ferrari', capa: CDN + '6874ceff-72ca-4aac-b99a-abe03549c9dd.jpg' },
  'lab-online-outubro': { tema: 'Manejo Nutricional no Lipedema', palestrante: 'Fer Altimari', capa: CDN + 'b316508f-7144-4fbd-9eca-19be8b9780b8.jpg' },
};
