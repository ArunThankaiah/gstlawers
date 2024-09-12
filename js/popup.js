// Popup

    const popupOverlay = document.querySelector('.popup-overlay')
    const agreeButton = document.querySelector('.agree-btn')


    function closeButton() {
        popupOverlay.style.display = 'none'
    }

// Popup end


    // Services Categories Inner

    // Select all category buttons and all bond info cards
    const categoriesInner = document.querySelectorAll('.categories .categorybtn');
    const bondInfo = document.querySelectorAll('.bonds-info .card');

    // Function to filter the bond info cards based on the selected category
    const filterCategory = (e) => {
        e.preventDefault(); // Prevent default link behavior

        // Remove 'active' class from the currently active button
        document.querySelector('.categories .categorybtn.active').classList.remove('active');

        // Add 'active' class to the clicked button
        e.target.classList.add('active');

        // Hide all bond info cards
        bondInfo.forEach(card => {
            card.classList.add('hide');
        });

        // Show the cards that match the selected category
        bondInfo.forEach(card => {
            if (card.dataset.name === e.target.dataset.name) {
                card.classList.remove('hide');
            }
        });
    };

    // Add click event listener to each category button
    categoriesInner.forEach(categorybtn => categorybtn.addEventListener('click', filterCategory));
    // Initialize page load
    const initialCategory = categoriesInner[0]; // Get the first category button
    if (initialCategory) {
        // Set the first button as active
        initialCategory.classList.add('active');

        // Show only the content related to the first category
        bondInfo.forEach(card => {
            if (card.dataset.name === initialCategory.dataset.name) {
                card.classList.remove('hide');
            } else {
                card.classList.add('hide');
            }
        });
    }
