
document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('.header-menu');
    // যদি header-menu না থাকে, তবে স্ক্রিপ্ট বন্ধ হবে
    if (!menu) return; 
    
    const bar = menu.querySelector('.running-bar');
    const links = menu.querySelectorAll('a');

    links.forEach(link => {
        // মাউস হোভার করলে
        link.addEventListener('mouseenter', () => {
            // হোভার করা লিঙ্কের অবস্থান এবং আকার গণনা
            const linkRect = link.getBoundingClientRect();
            const menuRect = menu.getBoundingClientRect();
            
            // নতুন অবস্থান এবং প্রস্থ সেট করা 
            // left: মেনু কন্টেইনারের শুরু থেকে লিঙ্কের শুরু পর্যন্ত দূরত্ব
            const newLeft = linkRect.left - menuRect.left;
            const newWidth = linkRect.width;

            bar.style.left = newLeft + 'px';
            bar.style.width = newWidth + 'px';
        });
    });
    
    // মেনু থেকে মাউস পুরোপুরি সরে গেলে বারটি বন্ধ করা
    menu.addEventListener('mouseleave', () => {
        bar.style.width = '0';
    });
    
    // পেজ লোড হওয়ার পর প্রথম আইটেমের নিচে বারটি সেট করে তারপর লুকিয়ে রাখা
    if (links.length > 0) {
        links[0].dispatchEvent(new Event('mouseenter')); 
        setTimeout(() => {
            bar.style.width = '0';
        }, 350); // ট্রানজিশন শেষ হওয়ার পর লুকানো
    }
});


//===================================
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-slider');
    const closeButton = document.querySelector('.close-btn');
    const sideSlider = document.getElementById('side-slider');

    // ১. 'আরও দেখুন' বোতামে ক্লিক করলে
    toggleButton.addEventListener('click', () => {
        // স্লাইডারকে দৃশ্যমান করার জন্য 'is-open' ক্লাস যোগ করা
        sideSlider.classList.add('is-open');
        
        // ঐচ্ছিক: পুরো পেজের বডি স্ক্রল করা বন্ধ করার জন্য
        document.body.style.overflow = 'hidden'; 
    });

    // ২. বন্ধ করার বোতামে ক্লিক করলে
    closeButton.addEventListener('click', () => {
        // 'is-open' ক্লাস সরিয়ে স্লাইডারকে লুকিয়ে ফেলা
        sideSlider.classList.remove('is-open');
        
        // ঐচ্ছিক: বডি স্ক্রল আবার চালু করা
        document.body.style.overflow = '';
    });
});
//=======================================



