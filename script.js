// about me
document.addEventListener('DOMContentLoaded', function() {
    const imageContainers = document.querySelectorAll('.image-container');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const close = document.getElementsByClassName('close')[0];
    const caption = document.getElementById('caption');

    imageContainers.forEach(function(container) {
        const img = container.querySelector('img');

        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
            caption.innerHTML = this.getAttribute('data-description');
        });
    });

    close.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});

// Buy my works

let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    total += price;
    updateCart();
}

function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const totalDiv = document.getElementById('total');

    cartItemsDiv.innerHTML = '';
    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.name} - $${item.price}`;
        
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = () => removeFromCart(index);
        
        itemDiv.appendChild(removeBtn);
        cartItemsDiv.appendChild(itemDiv);
    });

    totalDiv.textContent = `Total: $${total}`;
}

//register login
    document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginLink = document.getElementById('loginLink');
    const registerLink = document.getElementById('registerLink');
  
    // Hide the login form initially
    loginForm.style.display = 'none';

    // Event listener for clicking "Create an account" link
    registerLink.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default link behavior (navigation)
        registerForm.style.display = 'block'; // Show registration form
        loginForm.style.display = 'none'; // Hide login form
    });
  
    // Event listener for clicking "Login here" link
    loginLink.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default link behavior (navigation)
        registerForm.style.display = 'none'; // Hide registration form
        loginForm.style.display = 'block'; // Show login form
    });
  
    // Event listener for registration form submission
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission
        
        // Retrieve values from input fields
        let regUsername = document.getElementById('regUsername').value;
        let regPassword = document.getElementById('regPassword').value;
        
        // Example: Output values to console (replace with actual registration logic)
        console.log('Register:', regUsername, regPassword);
        
        // Implement your registration logic here
        // Example: Send data to server, store new user, handle response
    });

    // Event listener for login form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission
        
        // Retrieve values from input fields
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        
        // Example: Output values to console (replace with actual login logic)
        console.log('Login:', username, password);
        
        // Implement your login validation and handling logic here
        // Example: Send data to server, validate credentials, handle response
    });
});




// materials
// Function to handle responsive adjustments
    document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const thumbnails = document.querySelectorAll('.thumbnail .item');

    const slides = document.querySelectorAll('.slider .list .item');
    let currentSlide = 0;

    // Function to show slide based on index
    function showSlide(index) {
        slides[currentSlide].classList.remove('active');
        thumbnails[currentSlide].classList.remove('active');
        currentSlide = index;
        slides[currentSlide].classList.add('active');
        thumbnails[currentSlide].classList.add('active');
    }

    // Previous button click event
    prevButton.addEventListener('click', function() {
        let index = currentSlide - 1;
        if (index < 0) {
            index = slides.length - 1;
        }
        showSlide(index);
    });

    // Next button click event
    nextButton.addEventListener('click', function() {
        let index = currentSlide + 1;
        if (index >= slides.length) {
            index = 0;
        }
        showSlide(index);
    });

    // Thumbnail click events
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', function() {
            showSlide(index);
        });
    });
});


//alertbox
function myFunctionConfirm(){
    if (confirm("Press a button!")) {
        txt = "You pressed OK!";
      } else {
        txt = "You pressed Cancel!";
      }
}


//coming soon
function myFunctionAlert(){
    alert("Coming Soon!")
}
//no account yet
function myFunctionAlertNo(){
    alert("No Account Yet")
}
function myFunctionConfirmCheckOut(){
    if (confirm("Are you sure you want to checkout?")) {
        txt = "Yes";
      } else {
        txt = "Cancel";
      }
}

function myFunctionConfirmCheckOut(){
    if (confirm("Are you sure you want register this data")) {
        txt = "Yes";
        return;
      } else {
        txt = "Cancel";
      }
}

//feedback
function myFunctionAlertFeedback(){
    alert("Thank You for your Feedback!")
}

//registration
// Function to handle registration form submission
function registerUser(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Fetch input values
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let address = document.getElementById('address').value;
    let phoneNumber = document.getElementById('phoneNumber').value;
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;

    // You can add validation here if needed

    // Example of storing user data in localStorage
    let user = {
        firstName: firstName,
        lastName: lastName,
        address: address,
        phoneNumber: phoneNumber,
        username: username,
        password: password,
        gender: gender
    };

    localStorage.setItem('user', JSON.stringify(user));

    alert('Registration successful! Please login.');

    // Clear the form
    document.getElementById('registrationForm').reset();
}

// Function to handle login form submission
function loginUser(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Fetch input values
    let username = document.getElementById('loginUsername').value;
    let password = document.getElementById('loginPassword').value;

    // Retrieve user data from localStorage
    let storedUser = JSON.parse(localStorage.getItem('user'));

    // Check if the stored user exists and credentials match
    if (storedUser && storedUser.username === username && storedUser.password === password) {
        alert('Login successful!');
        // You can redirect to another page or perform additional actions here
    } else {
        alert('Invalid username or password. Please try again.');
    }

    // Clear the form
    document.getElementById('loginForm').reset();
}


//videos
document.addEventListener('DOMContentLoaded', function() {
    const playlist = document.getElementById('playlist');
    const videoSource = document.getElementById('video-source');
    const video = document.getElementById('video');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const playlistItems = Array.from(playlist.getElementsByTagName('li'));

    let currentIndex = 0;

    // Function to load and play video from playlist
    function loadVideo(index) {
        const videoFile = playlistItems[index].getAttribute('data-video-src');
        videoSource.setAttribute('src', videoFile);
        video.load();
        video.play();
        currentIndex = index;
    }

    // Event listeners for previous and next buttons
    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + playlistItems.length) % playlistItems.length;
        loadVideo(currentIndex);
    });

    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % playlistItems.length;
        loadVideo(currentIndex);
    });

    // Event delegation to handle clicks on playlist items
    playlist.addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
            const clickedIndex = playlistItems.indexOf(e.target);
            loadVideo(clickedIndex);
        }
    });

    // Load the first video in the playlist on page load
    loadVideo(currentIndex);
});
