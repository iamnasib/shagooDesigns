
  document.addEventListener('DOMContentLoaded', function() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentItemIndex = 0;

    function showCurrentItem() {
      carouselItems.forEach((item, index) => {
        if (index === currentItemIndex) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    }

    function nextItem() {
      currentItemIndex = (currentItemIndex + 1) % carouselItems.length;
      showCurrentItem();
    }

    function startCarousel() {
      setInterval(nextItem, 3000); // Change slide every 3 seconds
    }

    showCurrentItem(); // Show the first slide initially
    startCarousel();   // Start the automatic carousel

  });




  <script>
        document.addEventListener('DOMContentLoaded', function() {
          const carouselItems = document.querySelectorAll('.carousel-item');
          let currentItemIndex = 0;
          let transitioning = false; // Flag to track animation state

          function showCurrentItem() {
            if (transitioning) {
                return; // Exit if animation is ongoing
            }

            transitioning = true; // Set flag to true
            carouselItems.forEach((item, index) => {
              if (index === currentItemIndex) {
                item.classList.add('transition-opacity'); // Add transition class
                item.style.display = 'block';
                item.style.opacity = 1; // Set opacity to fully visible
              } else {
                item.style.opacity = 0; // Set opacity to fully transparent
                setTimeout(() => {
                  item.style.display = 'none'; // Hide after opacity transition
                  transitioning = false;
                }, 300); // Adjust the time to match the transition duration
              }
            });
          }
      
          function nextItem() {
            if (transitioning) {
                return; // Exit if animation is ongoing
              }
        
              transitioning = true; // Set flag to true
            currentItemIndex = (currentItemIndex + 1) % carouselItems.length;
            showCurrentItem();
          }
      
          function startCarousel() {
            setInterval(nextItem, 3000); // Change slide every 3 seconds
          }
      
          showCurrentItem(); // Show the first slide initially
          startCarousel();   // Start the automatic carousel
      
        });
      </script>


<div class="grid grid-cols-2 p-2 sm:grid-cols-4 gap-4">
        <img src="Wallpaper.jpg" alt="Image 1" class="w-full h-[200px]">
        <img src="wooden flooring.jpg" alt="Image 2" class="w-full h-[200px]">
        <img src="img.jpg" alt="Image 3" class="w-full h-[200px]">
        <img src="img2.jpg" alt="Image 4" class="w-full h-[200px]">
        <!-- Add more images as needed -->
      </div>