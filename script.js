let remediesData = JSON.parse(localStorage.getItem('userRemedies')) || [
    { id: 1, title: "Khansi (Khajoor Doodh)", symptoms: "khansi sukhi khajoor doodh cough khajoor doodh", solution: "Khajoor ko doodh me ubaal kar peene se sukhi khansi me aaram mil sakta hai.", helpfulCount: 125, author: "Dadi Special", favorite: false },
    { id: 2, title: "Gale ki Kharash (Gargle)", symptoms: "gale ki kharash gunguna pani namak gargle throat", solution: "Gungune paani me namak mila kar gargle karne se rahat milti hai.", helpfulCount: 451, author: "Grandma", favorite: false },
    { id: 3, title: "Kaf (Adrak aur Shahad)", symptoms: "shahad adrak ras kaf cough cold", solution: "Adrak ke ras me shahad mila kar lene se kaf kam hone me madad mil sakti hai.", helpfulCount: 85, author: "Aayurved", favorite: false },
    { id: 4, title: "Immunity (Tulsi aur Kali Mirch)", symptoms: "tulsi pani patte kali mirch ubal kar immunity", solution: "Paani me tulsi ke patte aur kali mirch ubaal kar peene se immunity ko support milta hai.", helpfulCount: 110, author: "Ghar ka Vaidya", favorite: false },
    { id: 5, title: "Band Naak (Ajwain Bhaap)", symptoms: "bhaap ajwain eucalyptus oil band naak cold", solution: "Ajwain ya eucalyptus oil ki bhaap lene se band naak khulne me madad milti hai.", helpfulCount: 95, author: "Mom", favorite: false },
    { id: 6, title: "Kabz (Triphala Churna)", symptoms: "kabz raat gunguna pani triphala churna pet saaf", solution: "Raat me gungune paani ke saath Triphala churna lene se pet saaf hone me madad mil sakti hai.", helpfulCount: 150, author: "Traditional", favorite: false },
    { id: 7, title: "Gas aur Pet Phoolna (Hing aur Kala Namak)", symptoms: "gas hing kala namak gunguna pani pet phoolne", solution: "Hing aur kala namak gungune paani me mila kar peene se gas aur pet phoolne me rahat mil sakti hai.", helpfulCount: 200, author: "Kitchen Secrets", favorite: false },
    { id: 8, title: "Acidity (Thanda Doodh)", symptoms: "acidity seene ki jalan thanda doodh", solution: "Thanda doodh peene se seene ki jalan me aaram mil sakta hai.", helpfulCount: 60, author: "Family Tip", favorite: false },
    { id: 9, title: "Apach (Saunf aur Mishri)", symptoms: "apach saunf mishri chabane pachan", solution: "Saunf aur mishri chabane se pachan sudharne me madad milti hai.", helpfulCount: 75, author: "Dadi", favorite: false },
    { id: 10, title: "Dast (Chhaas aur Jeera)", symptoms: "dast chhaas bhuna hua jeera", solution: "Chhaas me bhuna hua jeera mila kar peene se fayda ho sakta hai.", helpfulCount: 40, author: "Home remedy", favorite: false },
    { id: 11, title: "Sir Dard (Pudina Ras)", symptoms: "sir dard taazi pudine ki patti ras matha sirdard", solution: "Taazi pudine ki pattiyon ka ras soonghne ya maathay par lagane se sir dard me rahat mil sakti hai.", helpfulCount: 130, author: "Natural", favorite: false },
    { id: 12, title: "Tanav aur Neend (Sarson Tel Malish)", symptoms: "tanav sone se pehle talvo sarson tel maalish neend sirdard", solution: "Sone se pehle talvo ke sarson ke tel ki maalish karne se achhi neend aane me madad mil sakti hai.", helpfulCount: 90, author: "Grandpa", favorite: false },
    { id: 13, title: "Thakan (Nimbu Paani / Shikanji)", symptoms: "thakan nimbu pani shikanji taazgi", solution: "Thakan mehsoos hone par shikanji peene se taazgi mil sakti hai.", helpfulCount: 310, author: "Quick Fix", favorite: false },
    { id: 14, title: "Sir Dard / Rahat (Dalchini aur Shahad)", symptoms: "dalchini powder shahad sirdard", solution: "Aadha chamach dalchini powder shahad ke saath lene se kuch logon ko rahat milti hai.", helpfulCount: 50, author: "Herbal", favorite: false },
    { id: 15, title: "Muhase / Pimples (Neem Paste)", symptoms: "muhase neem pattiyon paste chehre pimples", solution: "Neem ke pattiyon ka paste chehre par lagane se pimples kam hone me madad mil sakti hai.", helpfulCount: 180, author: "Skin Care", favorite: false },
    { id: 16, title: "Daag-Dhabbe (Nimbu Ras aur Shahad)", symptoms: "daag dhabbe nimbu ka ras shahad twacha nikhar", solution: "Nimbu ka ras aur shahad mila kar lagane se twacha me nikhar aa sakta hai.", helpfulCount: 140, author: "Beauty Tip", favorite: false },
    { id: 17, title: "Dark Circles (Kheere ke Tukde)", symptoms: "dark circles kheere ke tukde aankh sujan", solution: "Kheere ke tukde aankhon par rakhne se sujan aur dark circles kam ho sakte hain.", helpfulCount: 220, author: "Ayurveda", favorite: false },
    { id: 18, title: "Fate Honth (Malai ya Ghee)", symptoms: "fate honth malai ghee", solution: "Malai ya ghee lagane se hont mulayam hote hain.", helpfulCount: 160, author: "Home remedy", favorite: false },
    { id: 19, title: "Skin Hydration (Aloe Vera Gel)", symptoms: "skin hydration aloe vera gel", solution: "Aloe Vera gel lagane se skin hydrated rehti hai.", helpfulCount: 290, author: "Natural", favorite: false },
    { id: 20, title: "Hair Fall (Amla aur Nariyal Tel)", symptoms: "hair fall amla powder nariyal tel maalish baal", solution: "Amla powder ko nariyal tel me paka kar sir ki maalish karne se fayda ho sakta hai.", helpfulCount: 210, author: "Hair Expert", favorite: false },
    { id: 21, title: "Dandruff (Nimbu Ras Scalp)", symptoms: "dandruff nimbu ka ras scalp", solution: "Nimbu ka ras scalp par lagane se dandruff kam ho sakta hai.", helpfulCount: 115, author: "Dadi", favorite: false },
    { id: 22, title: "Muh ke Chhale (Amrood Patte)", symptoms: "muh ke chhale amrood komal patte shahad", solution: "Amrood ke komal patte chabane ya shahad lagane se chhalon me rahat mil sakti hai.", helpfulCount: 88, author: "Traditional", favorite: false },
    { id: 23, title: "Daant Dard (Laung Tel)", symptoms: "daant dard laung ka tel", solution: "Laung ka tel dard wale daant par lagane se temporary aaram mil sakta hai.", helpfulCount: 340, author: "Emergency", favorite: false },
    { id: 24, title: "Muh ki Badbu (Elaichi)", symptoms: "muh ki badbu elaichi", solution: "Elaichi chabane se saans ki badbu kam ho sakti hai.", helpfulCount: 95, author: "Fresh", favorite: false },
    { id: 25, title: "Moch ya Sujan (Barf Sinkai)", symptoms: "moch sujan chot barf ki sinkai", solution: "Chot par barf ki sinkai karne se sujan kam ho sakti hai.", helpfulCount: 270, author: "First Aid", favorite: false },
    { id: 26, title: "Jalne par (Aloe Vera Gel)", symptoms: "jalne par thanda pani shuddh aloe vera gel", solution: "Jale hue hisse par turant thanda paani ya shuddh Aloe Vera gel lagayein.", helpfulCount: 380, author: "Safety First", favorite: false },
    { id: 27, title: "Dard aur Thakan (Haldi Doodh)", symptoms: "dard thakan haldi wala doodh raat neend sirdard", solution: "Raat ko sone se pehle haldi wala doodh peene se dard aur thakan me kuch logon ko rahat mil sakti hai.", helpfulCount: 510, author: "Dadi Special", favorite: false },
    { id: 28, title: "Kaf (Kaala Namak aur Multhi)", symptoms: "kaf khansi cough cold", solution: "Thode se gungune paani me thoda sa kaala namak aur multhi powder mila kar lene se kaf me aaram mil sakta hai.", helpfulCount: 65, author: "Aayurved", favorite: false },
    { id: 29, title: "Acidity (Saunf ka Paani)", symptoms: "acidity seene ki jalan saunf paani", solution: "Thanda paani peene ya saunf ka paani peene se seene ki jalan me rahat milti hai.", helpfulCount: 90, author: "Natural", favorite: false },
    { id: 30, title: "Thakan (Saadha Paani / Ghaas par chalna)", symptoms: "thakan taazgi", solution: "Thakan mehsoos hone par nangi aankhon se thodi der hari ghaas par chalne ya saadha thanda paani peene se taazgi mil sakti hai.", helpfulCount: 110, author: "Quick Fix", favorite: false },
    { id: 31, title: "Sir Dard (Dalchini Paste)", symptoms: "sir dard dalchini powder matha sirdard", solution: "Dalchini powder ko paani mein mila kar halka garm karke maathay par lagane se sir dard mein aaram milta hai.", helpfulCount: 55, author: "Herbal", favorite: false },
    { id: 32, title: "Muhase / Pimples (Multani Mitti)", symptoms: "muhase chehre pimples multani mitti gulab jal", solution: "Multani Mitti aur gulab jal ka paste chehre par lagane se pimples kam hone me madad mil sakti hai.", helpfulCount: 160, author: "Skin Care", favorite: false },
    { id: 33, title: "Daag-Dhabbe (Aloe Vera aur Gulab Jal)", symptoms: "daag dhabbe twacha nikhar aloe vera gulab jal", solution: "Aloevera gel aur thoda sa gulab jal mila kar lagane se twacha me nikhar aa sakta hai.", helpfulCount: 125, author: "Beauty Tip", favorite: false },
    { id: 34, title: "Dandruff (Nariyal Tel aur Kapoor)", symptoms: "dandruff scalp nariyal tel kapoor", solution: "Naariyal ke tel mein thoda sa camphor (kapoor) mila kar scalp par maalish karne se dandruff kam ho sakta hai.", helpfulCount: 105, author: "Dadi", favorite: false },
    { id: 35, title: "Muh ke Chhale (Amrood Patte Ubaal kar)", symptoms: "muh ke chhale amrood patte kulla", solution: "Amrood ke komal pattiyon ko paani mein ubaal kar us thande paani se kulla karne se chhalon me rahat milti hai.", helpfulCount: 75, author: "Traditional", favorite: false }
];

let pendingRemedies = JSON.parse(localStorage.getItem('pendingRemedies')) || [];

const searchInput = document.getElementById('searchInput');
const remediesContainer = document.getElementById('remediesContainer');
const pendingContainer = document.getElementById('pendingContainer');
const modal = document.getElementById('remedyModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeBtn = document.querySelector('.close-btn');
const addRemedyForm = document.getElementById('addRemedyForm');
const micBtn = document.getElementById('micBtn');

function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
    if (tabId === 'adminTab') displayPendingRemedies();
}
 
function displayRemedies(data, container = remediesContainer) {
    container.innerHTML = "";
    if (data.length === 0) {
        container.innerHTML = "<p style='text-align:center; color:#888; grid-column:1/-1;'>Koi nuska nahi mila.</p>";
        return;
    }
    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('remedy-card');
        
        let communityBadge = item.helpfulCount >= 100 ? `<span class="badge-community">Community Verified</span>` : '';
        let contributorBadge = item.helpfulCount > 200 ? `<span class="badge-contributor">Top Contributor</span>` : '';

        card.innerHTML = `
            <h3>${item.title} ${communityBadge} ${contributorBadge}</h3>
            <p class="helpful-text">👥 ${item.helpfulCount} people found this helpful.</p>
            <p><strong>Nuska:</strong> ${item.solution}</p>
            <p style="font-size: 11px; color: #777;">Added by: ${item.author || 'User'}</p>
            <div class="card-actions">
                <button class="btn-speak" onclick="speakNuska('${item.title}: ${item.solution}')">🔊 Suno</button>
                <button class="helpful-btn" onclick="incrementHelpful(${item.id})">👍 Helpful</button>
                <button class="bookmark-btn ${item.favorite ? 'favorited' : ''}" onclick="toggleBookmark(${item.id})">❤️</button>
            </div>
        `;
        container.appendChild(card);
    });
}
displayRemedies(remediesData);

function incrementHelpful(id) {
    const item = remediesData.find(r => r.id === id);
    if (item) {
        item.helpfulCount += 1;
        localStorage.setItem('userRemedies', JSON.stringify(remediesData));
        displayRemedies(remediesData);
    }
}

function speakNuska(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const cleanText = text.replace(/👥|❤️|🔊|👍/g, ''); 
        const utterance = new SpeechSynthesisUtterance(cleanText);
        
        const voices = window.speechSynthesis.getVoices();
        const indianVoice = voices.find(v => v.lang.includes('hi-IN') || v.lang.includes('en-IN'));
        if (indianVoice) {
            utterance.voice = indianVoice;
        }
        
        utterance.lang = 'hi-IN';
        utterance.rate = 0.9;
        utterance.pitch = 1.0;
        window.speechSynthesis.speak(utterance);
    } else {
        alert("Aapka browser voice support nahi karta!");
    }
}

searchInput.addEventListener('input', (e) => {
    const searchText = e.target.value.toLowerCase().trim();
    if (searchText === "") {
        displayRemedies(remediesData);
        return;
    }
    const searchKeywords = searchText.split(" ");
    const filtered = remediesData.filter(item => {
        const combinedText = (item.title + " " + item.symptoms + " " + item.solution).toLowerCase();
        return searchKeywords.some(keyword => combinedText.includes(keyword));
    });
    displayRemedies(filtered);
});

// Smart Voice Converter (Hindi, Hinglish aur English teeno ke liye)
function convertToSearchable(text) {
    let lower = text.toLowerCase().trim();
    const translations = {
        // Hindi words
        "खांसी": "khansi",
        "खांसी / कफ": "khansi",
        "कफ": "kaf",
        "सिरदर्द": "sir dard",
        "सिर दर्द": "sir dard",
        "एसिडिटी": "acidity",
        "गैस": "gas",
        "थकान": "thakan",
        "जुकाम": "cold",
        "सर्दी": "cold",
        "पेट दर्द": "pet dard",
        
        // English words mapping
        "cough": "khansi",
        "cold": "cold",
        "headache": "sir dard",
        "stomach pain": "pet dard",
        "fatigue": "thakan",
        "tiredness": "thakan"
    };

    // Agar exact match mil jaye ya word andar ho
    for (let key in translations) {
        if (lower.includes(key)) {
            return translations[key];
        }
    }
    return lower;
}

if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'hi-IN';

    micBtn.addEventListener('click', () => {
        micBtn.style.color = '#ff5252';
        recognition.start();
    });

    recognition.onresult = (event) => {
        const rawSpeechText = event.results[0][0].transcript;
        const processedText = convertToSearchable(rawSpeechText);
        
        searchInput.value = rawSpeechText;
        micBtn.style.color = '#4CAF50';

        const filteredArray = remediesData.filter(item => {
            const combinedText = (item.title + " " + item.symptoms + " " + item.solution).toLowerCase();
            const searchKeywords = processedText.split(" ");
            return searchKeywords.some(keyword => combinedText.includes(keyword));
        });

        displayRemedies(filteredArray);
    };
    recognition.onerror = () => { micBtn.style.color = '#4CAF50'; };
} else {
    micBtn.style.display = 'none';
}

function selectPain(category) {
    const resultBox = document.getElementById('wizardResult');
    if(resultBox) {
        resultBox.style.display = 'block';
        let item = remediesData.find(i => i.symptoms.includes(category)) || remediesData[0];
        resultBox.innerHTML = `
            <div class="remedy-card" style="margin: 0; width: 100%;">
                <h3>${item.title}</h3>
                <p class="helpful-text">👥 ${item.helpfulCount} people found this helpful.</p>
                <p><strong>Nuska:</strong> ${item.solution}</p>
                <p style="font-size: 11px; color: #777;">Added by: ${item.author || 'User'}</p>
                <div class="card-actions" style="margin-top: 15px;">
                    <button class="btn-speak" onclick="speakNuska('${item.title}: ${item.solution}')">🔊 Suno</button>
                    <button class="helpful-btn" onclick="incrementHelpful(${item.id})">👍 Helpful</button>
                    <button class="bookmark-btn ${item.favorite ? 'favorited' : ''}" onclick="toggleBookmark(${item.id})">❤️</button>
                </div>
            </div>
        `;
    }
}

// Night Care & Kitchen Jugad Filter Logic
function updateNightCare() {
    const selectedProblem = document.getElementById('nightProblemSelect') ? document.getElementById('nightProblemSelect').value : "";
    const selectedItems = Array.from(document.querySelectorAll('.night-item:checked')).map(el => el.value);
    const nightContainer = document.getElementById('nightCareResults');
    if(!nightContainer) return;

    if (!selectedProblem) {
        nightContainer.innerHTML = "<p style='color:#888; grid-column:1/-1;'>Kripya pehle raat ki takleef select karein.</p>";
        return;
    }

    const filtered = remediesData.filter(item => {
        const matchesProblem = item.symptoms.includes(selectedProblem) || item.title.toLowerCase().includes(selectedProblem);
        if (selectedItems.length > 0) {
            const matchesItem = selectedItems.some(ing => item.solution.toLowerCase().includes(ing) || item.title.toLowerCase().includes(ing) || item.symptoms.includes(ing));
            return matchesProblem && matchesItem;
        }
        return matchesProblem;
    });

    displayRemedies(filtered, nightContainer);
}

function updateAllergyFiltered() {
    const selectedBimari = document.getElementById('bimariSelect') ? document.getElementById('bimariSelect').value : "";
    const selectedAllergies = Array.from(document.querySelectorAll('.allergy-item:checked')).map(el => el.value);
    const allergyContainer = document.getElementById('allergyResults');
    if(!allergyContainer) return;

    if (!selectedBimari) {
        allergyContainer.innerHTML = "<p style='color:#888; grid-column:1/-1;'>Kripya pehle bimari select karein.</p>";
        return;
    }

    const filtered = remediesData.filter(item => {
        const matchesBimari = item.symptoms.includes(selectedBimari) || item.title.toLowerCase().includes(selectedBimari);
        const hasAllergen = selectedAllergies.some(allergy => item.solution.toLowerCase().includes(allergy) || item.title.toLowerCase().includes(allergy));
        return matchesBimari && !hasAllergen;
    });

    displayRemedies(filtered, allergyContainer);
}

if(openModalBtn) openModalBtn.addEventListener('click', () => modal.style.display = 'flex');
if(closeBtn) closeBtn.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });

if(addRemedyForm) {
    addRemedyForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newEntry = {
            id: Date.now(),
            title: document.getElementById('newTitle').value,
            symptoms: document.getElementById('newSymptoms').value.toLowerCase(),
            solution: document.getElementById('newSolution').value,
            author: document.getElementById('newAuthor').value,
            helpfulCount: 1,
            favorite: false
        };
        pendingRemedies.push(newEntry);
        localStorage.setItem('pendingRemedies', JSON.stringify(pendingRemedies));
        
        alert("Aapka nuska review ke liye admin ke paas bhej diya gaya hai!");
        addRemedyForm.reset();
        modal.style.display = 'none';
    });
}

function displayPendingRemedies() {
    if(!pendingContainer) return;
    pendingContainer.innerHTML = "";
    if (pendingRemedies.length === 0) {
        pendingContainer.innerHTML = "<p style='text-align:center; color:#888; grid-column:1/-1;'>Koi naya nuska pending nahi hai.</p>";
        return;
    }
    pendingRemedies.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('remedy-card', 'pending-card');
        card.innerHTML = `
            <h3>${item.title}</h3>
            <p><strong>Keywords:</strong> ${item.symptoms}</p>
            <p><strong>Nuska:</strong> ${item.solution}</p>
            <p><strong>By:</strong> ${item.author}</p>
            <div class="card-actions">
                <button class="btn-approve" onclick="approveRemedy(${item.id})">✅ Approve Karein</button>
            </div>
        `;
        pendingContainer.appendChild(card);
    });
}

function approveRemedy(id) {
    const index = pendingRemedies.findIndex(r => r.id === id);
    if (index !== -1) {
        const approvedItem = pendingRemedies.splice(index, 1)[0];
        remediesData.push(approvedItem);
        localStorage.setItem('userRemedies', JSON.stringify(remediesData));
        localStorage.setItem('pendingRemedies', JSON.stringify(pendingRemedies));
        displayPendingRemedies();
        displayRemedies(remediesData);
        alert("Nuska successfully approve ho gaya!");
    }
}

function toggleBookmark(id) {
    const item = remediesData.find(r => r.id === id);
    if (item) {
        item.favorite = !item.favorite;
        localStorage.setItem('userRemedies', JSON.stringify(remediesData));
        displayRemedies(remediesData);
    }
}