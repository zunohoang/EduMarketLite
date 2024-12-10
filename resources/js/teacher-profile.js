document.querySelectorAll('.tab').forEach(tab => {
    //gan click
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        // class active    
        tab.classList.add('active');
        
        document.querySelectorAll('.tab-content').forEach(content => {
            content.style.display = 'none';
        });

        const contentId = `${tab.dataset.tab}-content`;
        document.getElementById(contentId).style.display = 'block';
    });
});