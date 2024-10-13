document.addEventListener('DOMContentLoaded', function() {
    // Form selection
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Form submission and event prevention
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Input retrieval and trimming
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Validation logic
        let isValid = true;
        const messages = [];

        // Username validation
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Email validation
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }

        // Password validation
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Displaying feedback
        feedbackDiv.style.display = 'block'; // Make feedbackDiv visible
        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745'; // Success color
        } else {
            feedbackDiv.innerHTML = messages.join('<br>'); // Display error messages
            feedbackDiv.style.color = '#dc3545'; // Error color
        }
    });
});
// Define the API URL
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

// Function to fetch user data asynchronously
async function fetchUserData() {
    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        
        // Check if the response is OK
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        // Parse the JSON response
        const data = await response.json();
        
        // Log the user data to the console (you can modify this as needed)
        console.log(data);
        
        // You can also return the data if needed elsewhere in your application
        return data;
        
    } catch (error) {
        // Handle errors
        console.error('There was a problem fetching the data:', error);
    }
}

// Call the function to fetch user data
fetchUserData();
