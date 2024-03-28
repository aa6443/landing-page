import  { useState } from 'react';

const LandingPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [verified, setVerified] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleVerify = () => {
    // Perform verification logic here
    // For simplicity, let's just toggle the verified state
    setVerified(!verified);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { name, email });
  };

  return (
    <div>
      <section id="about">
        <h1>About Us</h1>
        <p>This is the about section of our landing page.</p>
      </section>

      <section id="signup-signin">
        <h2>Sign Up/Sign In</h2>
        {/* Include sign up/sign in form components here */}
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <p>Contact us at example@example.com</p>
      </section>

      <section id="form">
        <h2>Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={handleNameChange} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} />
          </div>
          {verified ? (
            <p>Email Verified!</p>
          ) : (
            <div>
              <p>Email Not Verified!</p>
              <button type="button" onClick={handleVerify}>Verify</button>
            </div>
          )}
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default LandingPage;
