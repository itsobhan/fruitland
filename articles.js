// Articles Page JavaScript

// Article titles for sticky header
const articleTitles = {
    1: "خواص میوه‌های تازه برای سلامتی",
    2: "همه چیز درباره میوه خشک",
    3: "طرز تهیه اسموتی‌های سالم",
    4: "بهترین میوه‌های فصل زمستان",
    5: "راهنمای انتخاب میوه‌های تازه",
    6: "خواص آبمیوه‌های طبیعی",
    7: "رژیم غذایی سالم با میوه‌ها",
    8: "کشت میوه در خانه: راهنمای کامل باغبانی خانگی",
    9: "ترکیب میوه و عسل: خواص درمانی و دستورات مفید",
    10: "فریز کردن میوه: راهنمای کامل نگهداری طولانی مدت",
    11: "دسرهای میوه‌ای: دستورات خوشمزه و سالم"
};

// Select article function
function selectArticle(articleNumber) {
    // Hide all articles
    document.querySelectorAll('.article-content').forEach(article => {
        article.classList.remove('active');
    });

    // Remove active class from all menu items
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });

    // Show selected article
    document.getElementById(`article-${articleNumber}`).classList.add('active');

    // Add active class to selected menu item
    document.querySelector(`[data-article="${articleNumber}"]`).classList.add('active');

    // Update sticky title
    updateStickyTitle(articleTitles[articleNumber]);

    // Scroll to article with smooth animation
    const articleElement = document.getElementById(`article-${articleNumber}`);
    if (articleElement) {
        articleElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Update sticky title
function updateStickyTitle(title) {
    const stickyTitle = document.querySelector('.sticky-article-title');
    if (stickyTitle) {
        stickyTitle.textContent = title;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Menu functionality
    const menuItems = document.querySelectorAll('.menu-item');
    
    // Add click event listeners to menu items
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const articleNumber = this.getAttribute('data-article');
            selectArticle(parseInt(articleNumber));
            
            // Update active state
            menuItems.forEach(menuItem => menuItem.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Initialize
    updateStickyTitle(articleTitles[1]);

    // Scroll tracking for sticky title and progress bar
    let ticking = false;

    function updateScrollProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;

        // Update progress bar
        const progressBar = document.getElementById('progress-bar');
        if (progressBar) {
            progressBar.style.width = scrollPercent + '%';
        }

        // Show/hide sticky title
        const stickyTitle = document.getElementById('sticky-title');
        if (stickyTitle) {
            if (scrollTop > 200) {
                stickyTitle.classList.add('show');
            } else {
                stickyTitle.classList.remove('show');
            }
        }

        // Update back button position based on scroll
        const backBtn = document.querySelector('.back-btn');
        if (backBtn) {
            if (scrollTop > 100) {
                backBtn.classList.add('scrolled');
            } else {
                backBtn.classList.remove('scrolled');
            }
        }

        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateScrollProgress);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick);
});