// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select all product cards
    const productCards = document.querySelectorAll('.product-card');
    console.log('Product Cards:', productCards); // Debugging: Check if product cards are selected
  
    // Select all filter inputs
    const categoryFilters = document.querySelectorAll('input[name="category"]');
    const occasionFilters = document.querySelectorAll('input[name="occasion"]');
    const dispatchFilters = document.querySelectorAll('input[name="dispatch"]');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
  
    // Update price range display
    if (priceRange && priceValue) {
      priceRange.addEventListener('input', () => {
        priceValue.textContent = priceRange.value;
        filterProducts();
      });
    }
  
    // Add event listeners to all filters
    if (categoryFilters) {
      categoryFilters.forEach(filter => filter.addEventListener('change', filterProducts));
    }
    if (occasionFilters) {
      occasionFilters.forEach(filter => filter.addEventListener('change', filterProducts));
    }
    if (dispatchFilters) {
      dispatchFilters.forEach(filter => filter.addEventListener('change', filterProducts));
    }
  
    // Filter products based on selected filters
    function filterProducts() {
      // Get selected categories
      const selectedCategories = Array.from(categoryFilters)
        .filter(filter => filter.checked)
        .map(filter => filter.value.replace(/\s+/g, '-')); // Replace spaces with hyphens
  
      // Get selected occasions
      const selectedOccasions = Array.from(occasionFilters)
        .filter(filter => filter.checked)
        .map(filter => filter.value);
  
      // Get selected dispatch times
      const selectedDispatch = Array.from(dispatchFilters)
        .filter(filter => filter.checked)
        .map(filter => filter.value);
  
      // Get maximum price from the range slider
      const maxPrice = parseInt(priceRange.value);
  
      // Loop through each product card and apply filters
      productCards.forEach(card => {
        // Get the classes of the product card
        const cardClasses = card.className.split(' ');
  
        // Extract the price from the classes (assuming the price is the last number in the class list)
        const cardPrice = parseInt(cardClasses.find(cls => !isNaN(cls)) || 0);
  
        // Check if the product matches the selected filters
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.some(cat => cardClasses.includes(cat));
        const matchesOccasion = selectedOccasions.length === 0 || selectedOccasions.some(occ => cardClasses.includes(occ));
        const matchesDispatch = selectedDispatch.length === 0 || selectedDispatch.some(disp => cardClasses.includes(disp));
        const matchesPrice = cardPrice <= maxPrice;
  
        // Show or hide the product card based on the filters
        if (matchesCategory && matchesOccasion && matchesDispatch && matchesPrice) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }
  
    // Initialize the filters (show all products by default)
    filterProducts();
  });