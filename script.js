const container = document.querySelector('#card-container');
const manifesto = document.querySelector('#facilities');
const LEGENDS = [
    {
        name: 'Sankhadeep Ghosh',
        image: './img/Sankhadeep.png',
        post: 'President',
        motto: 'Dont settle for average lets achieve the best together.',
        color: '#325895',
        time: 10000,
        facebook: 'https://www.facebook.com/100086375027463/posts/pfbid02TZesipTayjS6zzQKfxKXcpFM31YTC7ZhxtygRyU57289hwRpbruuBfw8gt9qYGmTl/',
        instagram: 'https://www.instagram.com/p/CjahXqZJPxT/?igshid=NmNmNjAwNzg='
    },
    {
        name: 'Satyam Shorya Jha',
        image: './img/Satyam.png',
        post: 'Vice President',
        motto: 'Acknowledge what we have lost, accept what we have, and what we can do together.',
        color: '#F2404C',
        time: 2000,
        instagram: 'https://www.instagram.com/p/CjdCwsMBQ_b/?igshid=MDJmNzVkMjY='
    },
    {
        name: 'Kumari Swati',
        image: './img/Swati.png',
        post: 'Girls Students Representative (UG)',
        motto: 'Coming together is a beginning, keeping together is progress, working together is success.',
        color: '#D3D4E9',
        time: 2000,
    },
    {
        name: 'MD Adnan Hussain',
        image: './img/Adnan.png',
        post: 'General Secretary',
        motto: 'We cannot be seperated in interest or divided in purpose we stand together until the end.',
        color: '#F57D02',
        time: 2000,
        instagram: 'https://www.instagram.com/achieve_with_adnan/'
    },
    {
        name: 'Sankalp Mishra',
        image: './img/Sankalp.png',
        post: 'Asst. General Secretary (Cultural)',
        motto: 'Tradition is not the workship of ashes, but the preservation of fire.',
        color: '#EEC110',
        time: 2000,
    },
    {
        name: 'Esha Mandal',
        image: './img/Esha.png',
        post: 'Asst. General Secretary (Sports)',
        motto: 'All succesfull dugouts have three aspects in common infrastructure, strategy and trust.',
        color: '#1CD7CC',
        time: 2000,
    },
];

LEGENDS.map((data, index) => {
    const card = document.createElement('div');
    card.className = 'swiper-slide'
    card.setAttribute('data-swiper-autoplay', data.time)
    card.innerHTML = `
        <div class="sw-card bg-white">
            <div class="sw-card-body text-center">
                <div class="d-flex justify-content-center items-center">
                    <div class="img-card" style="background: ${data.color}">
                        <img class="w-100" src="${data.image}" alt="">
                    </div>
                </div>
                    <h5 class="mt-3 mb-2">${data.name}</h5>
                    <h6 class="fw-bold">${data.post}</h6>
                    <article class="my-3">"${data.motto}"</article>
                    <div class="d-flex justify-content-center items-center">
                    ${data.facebook ? `<a class="mx-2" href="${data.facebook}" target="_blank"><i class="fab fa-facebook"></i></a>` : `<a class="mx-2" href="/" target="_blank"><i class="fab fa-facebook"></i></a>`}
                    ${data.instagram ? `<a class="mx-2" href="${data.instagram}" target="_blank"><i class="fab fa-instagram"></i></a>` : `<a class="mx-2" href="/" target="_blank"><i class="fab fa-instagram"></i></a>`}
                    </div>
            </div>
        </div>
    `;
    container.appendChild(card);
})

const MANIFESTO = [
    {   
        id: '5rg1weg52we1g3wer21',
        title: 'General Facilities',
        data: [
            'Properly maintained AC common rooms with refurnished seating and indoor games in every hostel',
            'Increased number of subsidised cafeterias',
            'Pooling and justified Auto-rickshaw fares',
            'Measures against snakes and mosquitoes',
            'Proper treatment/relocation of injured campus dogs ',
            'High Speed Internet facilities across campus',
            'Restoration of Speed Breakers and Proper Barricading outside main gate',
        ],
    },
    {
        id: '3s5dg1werg231',
        title: 'Academic Facilities',
        data: [

            '24*7 open library and increase in number of desks and plug points',
            'Incubation centre for startups',
            'Available interview rooms with high speed internet for online interviews',
            'Free access to various softwares using institute credentials',
            'Pre-placement/internship mock sessions and mentorship ',
            'Mentorship for English and communication skill development',
        ],
    },
    {
        id: 'adgv13as2g1as3d',
        title: 'Healthcare and Cultural Activities',
        data: [
            'Reopen ovals for 24hrs for better practice',
            'Renovated gym with brand new equipments and extension of timings till 11 P.M.',
            'Introduction of new fests and restoration of Food Fest',
            'Medical store inside campus',
            'Improved Health Insurance for all students ',
            'Better Lighting and levelling of Ovals and Lords grounds and reconstruction of proper cricket pitches',
            'Proper court flooring for tennis and basketball courts',
            'Encouragement in Inter-NITS through sponsored and reimbursement of equipments',
        ],
    },
    {
        id: 'asd3eg561sa3gd1',
        title: 'Essential Facilities',
        data: [
            'Mess system for all halls instead of company-tender system',
            'Re-entry of online food delivery services through hostel gates ',
            'Reopening of shopping complex',
            'Vending machines for sanitary pads',
            'Vending machines for snacks',
            'Introduction of Night canteen',
            'Laundry and stationary facilities (especially printing and photocopy) at every hall',
            'Egg, Paneer and Dahi Pantry at Mess',
            'Hygenic isolation of Veg and Non Veg food and utensils in Mess',
        ],
    },
]


MANIFESTO.map((data,index) => {
    const card = document.createElement('div');
    card.className = 'man col-12 col-lg-6 my-3'
    card.innerHTML = `
        <div class="card py-2">
            <div class="card-body">
            <h4 class="text-white head mb-3 text-center">${data.title}</h4>
            <hr class="bg-white">
            <div class="accordion" id="${data.id}">
                    ${data.data.map((item, index) => {
                        return `
                        <div class="accordion-item mb-3">
                            <h2 class="accordion-header my-0" id="flushhead-${data.id}-${index}">
                                <button class="accordion-button collapsed real" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-${data.id}-${index}" aria-expanded="false" aria-controls="flush-${index}">
                                    ${item}
                                </button>
                            </h2>
                            <div id="flush-${data.id}-${index}" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                                data-bs-parent="#${data.title}">
                                <div class="accordion-body">Placeholder content for this accordion</div>
                            </div>
                        </div>
                        `
                    }).join('')}
                </div>
            </div>
        </div>
    `;
    manifesto.appendChild(card);
})