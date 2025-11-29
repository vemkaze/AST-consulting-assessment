import { Article, Category } from '@/types/article';

// Categories matching LiveHindustan style
export const categories: Category[] = [
  { id: '1', name: 'देश', slug: 'desh', color: '#e53935' },
  { id: '2', name: 'विदेश', slug: 'videsh', color: '#1e88e5' },
  { id: '3', name: 'राज्य', slug: 'rajya', color: '#43a047' },
  { id: '4', name: 'खेल', slug: 'khel', color: '#fb8c00' },
  { id: '5', name: 'मनोरंजन', slug: 'manoranjan', color: '#8e24aa' },
  { id: '6', name: 'बिज़नेस', slug: 'business', color: '#00acc1' },
  { id: '7', name: 'टेक्नोलॉजी', slug: 'technology', color: '#5e35b1' },
  { id: '8', name: 'ऑटो', slug: 'auto', color: '#d81b60' },
];

// Mock news articles
export const mockArticles: Article[] = [
  {
    id: '1',
    title: 'संसद का शीतकालीन सत्र: विपक्ष ने किया जोरदार हंगामा, अदानी मुद्दे पर सरकार से मांगा जवाब',
    summary: 'संसद का शीतकालीन सत्र शुरू होते ही विपक्ष ने अदानी मुद्दे पर सरकार को घेरा। लोकसभा और राज्यसभा दोनों में जोरदार हंगामा देखने को मिला।',
    content: `संसद का शीतकालीन सत्र शुरू होते ही विपक्ष ने अदानी मुद्दे पर सरकार को जमकर घेरा। लोकसभा और राज्यसभा दोनों में जोरदार हंगामा देखने को मिला। विपक्षी दलों ने सदन के बाहर प्रदर्शन किया और सरकार से जवाब मांगा।

कांग्रेस अध्यक्ष ने कहा कि सरकार को इस मुद्दे पर संसद में बयान देना चाहिए और जनता को सच्चाई बतानी चाहिए। उन्होंने कहा कि यह देश की प्रतिष्ठा का मामला है।

सत्ता पक्ष ने इन आरोपों को खारिज किया और कहा कि विपक्ष बिना किसी ठोस सबूत के आरोप लगा रहा है। उन्होंने कहा कि सरकार संसद में हर सवाल का जवाब देने को तैयार है।`,
    image: null,
    category: 'देश',
    author: 'अमित शर्मा',
    publishedAt: '2025-11-28T10:30:00Z',
    readTime: 5,
    slug: 'parliament-winter-session-opposition-protest',
    isFeatured: true,
    isBreaking: true,
  },
  {
    id: '2',
    title: 'टीम इंडिया ने ऑस्ट्रेलिया को दूसरे टेस्ट में दी करारी हार, श्रृंखला में 2-0 से आगे। टीम इंडिया ने ऑस्ट्रेलिया को दूसरे टेस्ट में दी करारी हार, श्रृंखला में 2-0 से आगे। टीम इंडिया ने ऑस्ट्रेलिया को दूसरे टेस्ट में दी करारी हार, श्रृंखला में 2-0 से आगे। टीम इंडिया ने ऑस्ट्रेलिया को दूसरे टेस्ट में दी करारी हार!',
    summary: 'भारतीय क्रिकेट टीम ने ऑस्ट्रेलिया को दूसरे टेस्ट मैच में पारी और 50 रनों से हराकर श्रृंखला में 2-0 की अजेय बढ़त बना ली है।',
    content: `भारतीय क्रिकेट टीम ने ऑस्ट्रेलिया के खिलाफ शानदार प्रदर्शन करते हुए दूसरा टेस्ट मैच जीत लिया है। यह जीत पारी और 50 रनों से मिली, जिससे भारत ने श्रृंखला में 2-0 की अजेय बढ़त बना ली है।

भारतीय गेंदबाजों ने शानदार प्रदर्शन किया और ऑस्ट्रेलियाई बल्लेबाजों को पूरी तरह से बांध कर रखा। तेज गेंदबाजों ने पहले दिन से ही दबाव बनाया और ऑस्ट्रेलिया को दोनों पारियों में कम स्कोर पर समेट दिया।

कप्तान ने मैच के बाद कहा कि टीम का प्रदर्शन बेहतरीन रहा और हर खिलाड़ी ने अपना योगदान दिया।`,
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&h=500&fit=crop',
    category: 'खेल',
    author: 'राजेश कुमार',
    publishedAt: '2025-11-28T09:15:00Z',
    readTime: 4,
    slug: 'india-beats-australia-second-test',
    isFeatured: true,
    isBreaking: false,
  },
  {
    id: '3',
    title: 'शेयर बाजार में भारी गिरावट: सेंसेक्स 800 अंक टूटा, निवेशकों को 5 लाख करोड़ का नुकसान',
    summary: 'वैश्विक बाजारों में कमजोरी के बीच भारतीय शेयर बाजार में भारी गिरावट देखी गई। सेंसेक्स 800 अंक टूटकर बंद हुआ।',
    content: `वैश्विक बाजारों में कमजोरी के बीच गुरुवार को भारतीय शेयर बाजार में भारी गिरावट देखी गई। बीएसई सेंसेक्स 800 अंक टूटकर बंद हुआ, जबकि निफ्टी भी 250 अंक की गिरावट के साथ बंद हुआ।

इस गिरावट से निवेशकों को एक ही दिन में करीब 5 लाख करोड़ रुपये का नुकसान हुआ है। बैंकिंग, आईटी और ऑटो सेक्टर में सबसे ज्यादा गिरावट देखी गई।

विश्लेषकों का कहना है कि अमेरिकी बाजारों में कमजोरी और विदेशी निवेशकों की बिकवाली के कारण भारतीय बाजारों में दबाव बना हुआ है।`,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop',
    category: 'बिज़नेस',
    author: 'प्रिया गुप्ता',
    publishedAt: '2025-11-28T16:00:00Z',
    readTime: 3,
    slug: 'stock-market-crash-sensex-falls',
    isFeatured: false,
    isBreaking: true,
  },
  {
    id: '4',
    title: 'दिल्ली में प्रदूषण का कहर: AQI 400 के पार, स्कूलों में ऑनलाइन क्लास का आदेश',
    summary: 'राष्ट्रीय राजधानी दिल्ली में वायु प्रदूषण का स्तर खतरनाक हो गया है। AQI 400 के पार पहुंचने पर सरकार ने स्कूलों में ऑनलाइन क्लास का आदेश दिया।',
    content: `राष्ट्रीय राजधानी दिल्ली में वायु प्रदूषण का स्तर खतरनाक हो गया है। गुरुवार को दिल्ली का AQI 400 के पार पहुंच गया, जिसे 'गंभीर' श्रेणी में रखा गया है।

प्रदूषण के बढ़ते स्तर को देखते हुए दिल्ली सरकार ने सभी स्कूलों में ऑनलाइन क्लास का आदेश दिया है। साथ ही, निर्माण कार्यों पर भी प्रतिबंध लगा दिया गया है।

स्वास्थ्य विशेषज्ञों ने लोगों को घर से बाहर निकलने से बचने और मास्क पहनने की सलाह दी है। बुजुर्गों और बच्चों को विशेष सावधानी बरतने को कहा गया है।`,
    image: 'https://images.unsplash.com/photo-1562155618-e1a8bc2eb04f?w=800&h=500&fit=crop',
    category: 'देश',
    author: 'सुनीता वर्मा',
    publishedAt: '2025-11-28T08:00:00Z',
    readTime: 4,
    slug: 'delhi-pollution-aqi-400-schools-closed',
    isFeatured: false,
    isBreaking: false,
  },
  {
    id: '5',
    title: 'बॉलीवुड: शाहरुख खान की नई फिल्म किंग का फर्स्ट लुक जारी, फैंस हुए दीवाने',
    summary: 'सुपरस्टार शाहरुख खान की अगली फिल्म किंग का फर्स्ट लुक जारी हो गया है। सोशल मीडिया पर फैंस की प्रतिक्रिया जबरदस्त रही।',
    content: `बॉलीवुड के किंग शाहरुख खान की अगली फिल्म 'किंग' का फर्स्ट लुक जारी हो गया है। पोस्टर में शाहरुख का दमदार लुक देखने को मिला, जिसने फैंस को दीवाना बना दिया।

यह फिल्म सुजय घोष के निर्देशन में बन रही है और इसमें शाहरुख के साथ उनकी बेटी सुहाना खान भी नजर आएंगी। फिल्म अगले साल ईद पर रिलीज होगी।

शाहरुख ने सोशल मीडिया पर पोस्टर शेयर करते हुए लिखा, 'किंग इज कमिंग!' इस पोस्ट को कुछ ही घंटों में लाखों लाइक्स मिल गए।`,
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=500&fit=crop',
    category: 'मनोरंजन',
    author: 'रोहित मल्होत्रा',
    publishedAt: '2025-11-28T12:30:00Z',
    readTime: 3,
    slug: 'shahrukh-khan-king-first-look',
    isFeatured: true,
    isBreaking: false,
  },
  {
    id: '6',
    title: 'रूस-यूक्रेन युद्ध: कीव पर बड़ा मिसाइल हमला, 10 से ज्यादा नागरिकों की मौत',
    summary: 'रूस ने यूक्रेन की राजधानी कीव पर बड़ा मिसाइल हमला किया। इस हमले में 10 से ज्यादा नागरिकों की मौत हो गई और दर्जनों घायल हैं।',
    content: `रूस ने यूक्रेन की राजधानी कीव पर गुरुवार सुबह बड़ा मिसाइल हमला किया। इस हमले में 10 से ज्यादा नागरिकों की मौत हो गई और दर्जनों लोग घायल हैं।

यूक्रेनी अधिकारियों के अनुसार, रूस ने कई बैलिस्टिक मिसाइलों से हमला किया, जिनमें से कुछ को वायु रक्षा प्रणाली ने मार गिराया। हालांकि, कुछ मिसाइलें आवासीय इलाकों में गिरीं।

यूक्रेन के राष्ट्रपति ने इस हमले की कड़ी निंदा की और अंतरराष्ट्रीय समुदाय से रूस पर और सख्त प्रतिबंध लगाने की मांग की।`,
    image: null, // Testing article without image
    category: 'विदेश',
    author: 'अंकित सिंह',
    publishedAt: '2025-11-28T07:00:00Z',
    readTime: 5,
    slug: 'russia-ukraine-war-kyiv-missile-attack',
    isFeatured: false,
    isBreaking: true,
  },
  {
    id: '7',
    title: 'Apple iPhone 16 Pro Max की कीमतों में भारी कटौती, जानें नई कीमत',
    summary: 'Apple ने अपने फ्लैगशिप स्मार्टफोन iPhone 16 Pro Max की कीमतों में भारी कटौती की है। फेस्टिव सीजन में ग्राहकों को मिलेगा बड़ा फायदा।',
    content: `Apple ने अपने फ्लैगशिप स्मार्टफोन iPhone 16 Pro Max की कीमतों में भारी कटौती की है। यह ऑफर फेस्टिव सीजन के तहत दिया जा रहा है।

नई कीमत के अनुसार, iPhone 16 Pro Max अब 1,39,900 रुपये की बजाय 1,19,900 रुपये में उपलब्ध है। इसके अलावा, बैंक ऑफर्स के साथ और भी छूट मिल सकती है।

यह फोन Apple के A18 Pro चिप के साथ आता है और इसमें 48MP का मुख्य कैमरा दिया गया है। 5x ऑप्टिकल ज़ूम और एक्शन बटन इसकी खास विशेषताएं हैं।`,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=500&fit=crop',
    category: 'टेक्नोलॉजी',
    author: 'विकास जैन',
    publishedAt: '2025-11-28T14:00:00Z',
    readTime: 3,
    slug: 'iphone-16-pro-max-price-cut',
    isFeatured: false,
    isBreaking: false,
  },
  {
    id: '8',
    title: 'उत्तर प्रदेश: योगी सरकार का बड़ा फैसला, 10 लाख युवाओं को मिलेगी नौकरी',
    summary: 'उत्तर प्रदेश की योगी आदित्यनाथ सरकार ने बड़ा फैसला लेते हुए 10 लाख युवाओं को सरकारी नौकरी देने की घोषणा की है।',
    content: `उत्तर प्रदेश के मुख्यमंत्री योगी आदित्यनाथ ने गुरुवार को एक बड़ी घोषणा करते हुए कहा कि राज्य सरकार अगले दो साल में 10 लाख युवाओं को सरकारी नौकरी देगी।

इस योजना के तहत विभिन्न विभागों में भर्ती प्रक्रिया शुरू की जाएगी। पुलिस, शिक्षा, स्वास्थ्य और प्रशासनिक सेवाओं में बड़ी संख्या में पद भरे जाएंगे।

मुख्यमंत्री ने कहा कि यह योजना युवाओं के रोजगार और राज्य के विकास के लिए महत्वपूर्ण कदम है। भर्ती प्रक्रिया पूरी तरह से पारदर्शी होगी।`,
    image: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=800&h=500&fit=crop',
    category: 'राज्य',
    author: 'मनीष त्रिपाठी',
    publishedAt: '2025-11-28T11:00:00Z',
    readTime: 4,
    slug: 'up-yogi-government-10-lakh-jobs',
    isFeatured: false,
    isBreaking: false,
  },
  {
    id: '9',
    title: 'Tata की नई इलेक्ट्रिक कार Curvv EV लॉन्च, 500 km की रेंज, जानें कीमत',
    summary: 'Tata Motors ने अपनी नई इलेक्ट्रिक SUV Curvv EV को भारत में लॉन्च कर दिया है। यह कार 500 km की रेंज के साथ आती है।',
    content: `Tata Motors ने भारतीय बाजार में अपनी नई इलेक्ट्रिक SUV Curvv EV को लॉन्च कर दिया है। यह कंपनी की सबसे लंबी रेंज वाली इलेक्ट्रिक कार है।

Curvv EV 500 km की ARAI सर्टिफाइड रेंज के साथ आती है और इसकी शुरुआती कीमत 17.49 लाख रुपये है। यह कार 55 kWh बैटरी पैक के साथ आती है।

डिजाइन के मामले में यह कार काफी स्पोर्टी दिखती है। इसमें कूप स्टाइल रूफ, LED हेडलाइट्स और 17 इंच के अलॉय व्हील्स दिए गए हैं।`,
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=500&fit=crop',
    category: 'ऑटो',
    author: 'संदीप राजपूत',
    publishedAt: '2025-11-28T13:00:00Z',
    readTime: 4,
    slug: 'tata-curvv-ev-launch-india',
    isFeatured: false,
    isBreaking: false,
  },
  {
    id: '10',
    title: 'बिहार में शराब माफियाओं पर बड़ी कार्रवाई: 50 से ज्यादा गिरफ्तार, करोड़ों की शराब जब्त',
    summary: 'बिहार पुलिस ने राज्य में शराब माफियाओं के खिलाफ बड़ी कार्रवाई की है। 50 से ज्यादा लोगों को गिरफ्तार किया गया और करोड़ों रुपये की शराब जब्त की गई।',
    content: `बिहार पुलिस ने शराबबंदी कानून का उल्लंघन करने वालों के खिलाफ राज्यव्यापी अभियान चलाया है। इस अभियान में 50 से ज्यादा शराब माफियाओं को गिरफ्तार किया गया है।

पुलिस ने करोड़ों रुपये की अवैध शराब भी जब्त की है। कई वाहन और संपत्तियां भी कुर्क की गई हैं। यह अभियान मुख्यमंत्री के निर्देश पर चलाया गया।

DGP ने बताया कि यह अभियान जारी रहेगा और शराब माफियाओं के खिलाफ सख्त कार्रवाई की जाएगी। उन्होंने जनता से भी सहयोग की अपील की।`,
    image: null, // Another article without image for testing
    category: 'राज्य',
    author: 'अभिषेक कुमार',
    publishedAt: '2025-11-28T15:30:00Z',
    readTime: 3,
    slug: 'bihar-liquor-mafia-crackdown',
    isFeatured: false,
    isBreaking: false,
  },
  {
    id: '11',
    title: 'Champions Trophy 2025: भारत-पाकिस्तान मैच की तारीख तय, जानें पूरा शेड्यूल',
    summary: 'ICC ने Champions Trophy 2025 का पूरा शेड्यूल जारी कर दिया है। भारत और पाकिस्तान के बीच मुकाबला 23 फरवरी को होगा।',
    content: `ICC ने Champions Trophy 2025 का पूरा शेड्यूल जारी कर दिया है। टूर्नामेंट 19 फरवरी से 9 मार्च तक खेला जाएगा।

भारत और पाकिस्तान के बीच महामुकाबला 23 फरवरी को दुबई में खेला जाएगा। भारत के सभी मैच दुबई में ही होंगे।

टूर्नामेंट का फाइनल 9 मार्च को लाहौर में खेला जाएगा। अगर भारत फाइनल में पहुंचता है, तो वह मैच भी दुबई में शिफ्ट होगा।`,
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&h=500&fit=crop',
    category: 'खेल',
    author: 'विवेक शर्मा',
    publishedAt: '2025-11-28T10:00:00Z',
    readTime: 3,
    slug: 'champions-trophy-2025-schedule-india-pakistan',
    isFeatured: false,
    isBreaking: false,
  },
  {
    id: '12',
    title: 'RBI ने रेपो रेट में की कटौती, होम लोन की EMI होगी कम',
    summary: 'भारतीय रिजर्व बैंक ने रेपो रेट में 25 बेसिस पॉइंट की कटौती की है। इससे होम लोन और कार लोन की EMI कम होने की उम्मीद है।',
    content: `भारतीय रिजर्व बैंक ने मॉनेटरी पॉलिसी में रेपो रेट को 6.5% से घटाकर 6.25% कर दिया है। यह कटौती 25 बेसिस पॉइंट की है।

इस कटौती से होम लोन, कार लोन और पर्सनल लोन की EMI कम होने की उम्मीद है। बैंकों से उम्मीद है कि वे जल्द ही अपनी ब्याज दरों में कटौती करेंगे।

RBI गवर्नर ने कहा कि महंगाई दर नियंत्रण में है और अर्थव्यवस्था की ग्रोथ को बढ़ावा देने के लिए यह कटौती की गई है।`,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop',
    category: 'बिज़नेस',
    author: 'नेहा अग्रवाल',
    publishedAt: '2025-11-28T14:30:00Z',
    readTime: 4,
    slug: 'rbi-repo-rate-cut-emi-reduction',
    isFeatured: false,
    isBreaking: false,
  },
];

// Function to get all articles
export function getAllArticles(): Article[] {
  return mockArticles;
}

// Function to get article by slug
export function getArticleBySlug(slug: string): Article | undefined {
  return mockArticles.find(article => article.slug === slug);
}

// Function to get article by ID
export function getArticleById(id: string): Article | undefined {
  return mockArticles.find(article => article.id === id);
}

// Function to get featured articles
export function getFeaturedArticles(): Article[] {
  return mockArticles.filter(article => article.isFeatured);
}

// Function to get breaking news
export function getBreakingNews(): Article[] {
  return mockArticles.filter(article => article.isBreaking);
}

// Function to get articles by category
export function getArticlesByCategory(categorySlug: string): Article[] {
  const category = categories.find(cat => cat.slug === categorySlug);
  if (!category) return [];
  return mockArticles.filter(article => article.category === category.name);
}

// Function to get all categories
export function getAllCategories(): Category[] {
  return categories;
}

// Simulated API delay
export async function fetchArticlesWithDelay(delay: number = 500): Promise<Article[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockArticles);
    }, delay);
  });
}

// Simulated API that can fail (for testing error states)
export async function fetchArticlesMayFail(shouldFail: boolean = false): Promise<Article[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error('Failed to fetch articles'));
      } else {
        resolve(mockArticles);
      }
    }, 500);
  });
}
