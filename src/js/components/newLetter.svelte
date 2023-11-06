<script>
  let isVisible = true;
  let email = "";

  const handleSubmit = () => {
    console.log(`Sign up email: ${email}`);
    email = "";
  };

  const toggleVisibility = () => {
    isVisible = false;
  };
</script>

<div class="signup-box" style="    display: {isVisible ? 'block' : 'none'};">
  <button class="closeButton" on:click={toggleVisibility}>X</button>
  <h2>Newsletter Signup</h2>
  <p>for promotional offers and information</p>
  <form class="signup-form" on:submit|preventDefault={handleSubmit}>
    <input
      type="email"
      bind:value={email}
      placeholder="Enter your email"
      required
    />
    <button type="submit">Sign Up</button>
  </form>
</div>

<style>
  .closeButton {
    position: absolute;
    top: 100;
    right: 0;
    padding: 0;
    background-color: transparent;
    color: black;
    margin: auto;
    display: block;
    border: 0;
    font-size: var(--large-font);
    cursor: pointer;
  }

  .signup-box {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    border: 3px solid darkgoldenrod; /* Dark yellow border */
    background-color: lightyellow; /* Light yellow background */
    padding: 20px;
    border-radius: 5px;
    max-width: 400px;
  }

  .signup-form {
    display: flex;
    flex-direction: column;
  }

  .signup-form input[type="email"] {
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
