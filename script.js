const container = document.querySelector('#card-container');

const LEGENDS = [
    {
        name: 'Sankhadeep Ghosh',
        image: './img/Sankhadeep.png',
        post: 'President',
        motto: 'Dont settle for average lets achieve the best together.',
        color: '#325895',
        time: 10000,
        facebook : 'https://www.facebook.com/100086375027463/posts/pfbid02TZesipTayjS6zzQKfxKXcpFM31YTC7ZhxtygRyU57289hwRpbruuBfw8gt9qYGmTl/',
        instagram : 'https://www.instagram.com/p/CjahXqZJPxT/?igshid=NmNmNjAwNzg='
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

LEGENDS.map((data,index) =>{
    const card = document.createElement('div');
    card.className = 'swiper-slide'
    card.setAttribute('data-swiper-autoplay',data.time)
    card.innerHTML = `
        <div class="card">
            <div class="card-body text-center">
                <div class="d-flex justify-content-center items-center">
                    <div class="img-card" style="background: ${data.color}">
                        <img class="w-100" src="${data.image}" alt="">
                    </div>
                </div>
                    <h5 class="mt-3 mb-2">${data.name}</h5>
                    <h6 class="fw-bold">${data.post}</h6>
                    <article class="my-3">"${data.motto}"</article>
                    <div class="d-flex justify-content-center items-center">
                    ${ data.facebook ? `<a class="mx-2" href="${data.facebook}" target="_blank"><i class="fab fa-facebook"></i></a>` : `<a class="mx-2" href="/" target="_blank"><i class="fab fa-facebook"></i></a>`}
                    ${ data.instagram ? `<a class="mx-2" href="${data.instagram}" target="_blank"><i class="fab fa-instagram"></i></a>` : `<a class="mx-2" href="/" target="_blank"><i class="fab fa-instagram"></i></a>`}
                    </div>
            </div>
        </div>
    `;
    container.appendChild(card);
})

