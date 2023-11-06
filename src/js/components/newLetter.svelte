<script>
    let email = '';
  
    const handleSubmit = () => {
      console.log(`Sign up email: ${email}`);
      email = '';
    };
  </script>
  
  <style>
    .signup-box {
      border: 3px solid darkgoldenrod; /* Dark yellow border */
      background-color: lightyellow; /* Light yellow background */
      padding: 20px;
      border-radius: 5px;
      max-width: 400px;
      margin: auto;
    }
  
    .signup-form {
      display: flex;
      flex-direction: column;
    }
  
    .signup-form input[type=email] {
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  
    .signup-form button {
      padding: 10px;
      background-color: darkgoldenrod; /* Dark yellow */
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  
    .signup-form button:hover {
      background-color: goldenrod;
    }
  </style>
  
  <div class="signup-box">
    <h2>Newsletter Signup</h2>
    <form class="signup-form" on:submit|preventDefault={handleSubmit}>
      <input type="email" bind:value={email} placeholder="Enter your email" required />
      <button type="submit">Sign Up</button>
    </form>
  </div>
  