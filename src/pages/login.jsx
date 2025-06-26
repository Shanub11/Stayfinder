import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.msg || 'Login failed');
      }
      
      // Store the token in localStorage
      localStorage.setItem('token', data.token);
      
      // Redirect to home page after successful login
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="form_container" onSubmit={handleSubmit}>
      <div className="logo_container"></div>
      <div className="title_container">
        <p className="title">Login to your Account</p>
        <span className="subtitle">
          Get started with our app, just create an account and enjoy the experience.
        </span>
      </div>
      <br />
      
      {error && <div className="error-message" style={{color: 'red', marginBottom: '15px'}}>{error}</div>}
      
      <div className="input_container">
        <label className="input_label" htmlFor="email_field">Email</label>
        <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" className="icon">
          <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="#141B34" d="M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5" />
          <path strokeLinejoin="round" strokeWidth="1.5" stroke="#141B34" d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" />
        </svg>
        <input 
          placeholder="Email" 
          title="Input title" 
          name="email" 
          type="email" 
          className="input_field" 
          id="email_field" 
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="input_container">
        <label className="input_label" htmlFor="password_field">Password</label>
        <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" className="icon">
          <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="#141B34" d="M12 14V11M12 14H9M12 14H15M12 14V17M7 8.30977C7.47052 8.1083 7.98206 8 8.5 8H15.5C16.0179 8 16.5295 8.1083 17 8.30977M7 8.30977C5.85888 8.86009 5 10.139 5 11.6667V15.3333C5 17.8063 7.23858 19 8.5 19H15.5C16.7614 19 17 17.8063 19 15.3333V11.6667C19 10.139 18.1411 8.86009 17 8.30977M7 8.30977V6.83333C7 4.2686 9.23858 3 10.5 3H13.5C14.7614 3 17 4.2686 17 6.83333V8.30977" />
        </svg>
        <input 
          placeholder="Password" 
          title="Input title" 
          name="password" 
          type="password" 
          className="input_field" 
          id="password_field" 
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      
      <button 
        title="Sign In" 
        type="submit" 
        className="sign-in_btn"
        disabled={isLoading}
      >
        <span>{isLoading ? 'Logging in...' : 'Sign In'}</span>
      </button>

      <div className="separator">
        <hr className="line" />
        <span>Or</span>
        <hr className="line" />
      </div>

      <button title="Sign In with Google" type="button" className="sign-in_ggl">
        <span>Sign In with Google</span>
      </button>

      <button title="Sign In with Apple" type="button" className="sign-in_apl">
        <span>Sign In with Apple</span>
      </button>

      <p className="note">Terms of use &amp; Conditions</p>
    </form>
  );
};

export default LoginForm;