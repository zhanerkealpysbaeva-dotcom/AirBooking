// Рейстерді іздеу функциясы
function searchFlights() {
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const departure = document.getElementById('departure').value;
    const returnDate = document.getElementById('return').value;
    const passengers = document.getElementById('passengers').value;

    // Желілі тексеру
    if (!from || !to || !departure) {
        alert('Барлық міндетті өрістерді толтырыңыз!');
        return;
    }

    if (from === to) {
        alert('Қайда және қайдан бірдей болмауы керек!');
        return;
    }

    // Іздеу нәтижелерін көрсету
    const searchResults = {
        from: getCityName(from),
        to: getCityName(to),
        departure: departure,
        returnDate: returnDate,
        passengers: passengers
    };

    // Нәтижелерді сақтау
    localStorage.setItem('searchResults', JSON.stringify(searchResults));
    
    // Нәтижелер бетіне өту (кейіннен жасалады)
    alert('Іздеу сәтті аяқталды! Нәтижелер бетіне өтеміз...');
    window.location.href = 'flights.html';
}

// Қала атауын алу функциясы
function getCityName(code) {
    const cities = {
        'ALA': 'Алматы',
        'NQZ': 'Нұр-Сұлтан',
        'CIT': 'Шымкент',
        'GUW': 'Атырау',
        'IST': 'Стамбул',
        'DXB': 'Дубай',
        'MOW': 'Мәскеу'
    };
    return cities[code] || code;
}

// Күндерді шектеу (бүгінгі күннен кейінгі)
document.getElementById('departure').min = new Date().toISOString().split('T')[0];
document.getElementById('return').min = new Date().toISOString().split('T')[0];

// Қайту күнін кету күнінен кейін ету
document.getElementById('departure').addEventListener('change', function() {
    document.getElementById('return').min = this.value;
});

// Демо рейстер деректері
const demoFlights = [
    {
        id: 1,
        airline: 'Air Astana',
        from: 'ALA',
        to: 'IST',
        departure: '2024-12-20 08:00',
        arrival: '2024-12-20 12:30',
        price: 150000,
        duration: '4h 30m'
    },
    {
        id: 2,
        airline: 'FlyArystan',
        from: 'NQZ',
        to: 'DXB',
        departure: '2024-12-21 14:00',
        arrival: '2024-12-21 19:45',
        price: 200000,
        duration: '5h 45m'
    }
];

// Пайдаланушы интерфейсін жақсарту
document.addEventListener('DOMContentLoaded', function() {
    // Плавный скролл для навигации
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
