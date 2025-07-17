document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-button');
    const menuItems = document.querySelectorAll('.menu-card');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add 'active' class to the clicked button
            button.classList.add('active');

            const selectedCategory = button.dataset.category;

            menuItems.forEach(item => {
                const itemCategory = item.dataset.category;
                if (selectedCategory === 'all' || itemCategory === selectedCategory) {
                    item.style.display = 'block'; // Or 'grid', 'flex' depending on your grid layout
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
