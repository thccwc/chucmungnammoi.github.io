let anchorlinks = document.querySelectorAll('a[href^="#"]');

for (let item of anchorlinks) {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        
        let hashval = item.getAttribute('href');
        let target = document.querySelector(hashval);

        if (!target) return;

        let scrollContainer = target.closest('.content') || document.documentElement;

        scrollContainer.scrollTo({
            top: target.offsetTop - scrollContainer.offsetTop,
            behavior: 'smooth'
        });

        history.pushState(null, null, hashval);
    });
	document.querySelector('.content').querySelector('#sectionc').scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	});
	
}


