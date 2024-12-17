import React, { useState } from 'react';
import './AuthPage.css';

function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);

    const toggleAuthMode = () => setIsLogin(!isLogin);

    return (
        <div className="auth-container">
            <div className="auth-form">
                <h2 className="auth-heading">{isLogin ? 'Login' : 'Register'}</h2>
                {isLogin ? (
                    <LoginComponent />
                ) : (
                    <RegisterComponent />
                )}
            </div>
            <div className="auth-toggle-container">
                {isLogin ? (
                    <p className="auth-toggle-text">
                        New to SkillShare? <span onClick={toggleAuthMode} className="auth-toggle-link">Register</span>
                    </p>
                ) : (
                    <p className="auth-toggle-text">
                        Already have an account? <span onClick={toggleAuthMode} className="auth-toggle-link">Login</span>
                    </p>
                )}
            </div>
        </div>
    );
}

    function LoginComponent() {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [message, setMessage] = useState(''); // State for success/error message
        const [loading, setLoading] = useState(false);

      
      
        const handleLogin = async (e) => {
          e.preventDefault();
          setLoading(true);
          const loginData = {
            username: username,
            password: password,
          };
      
          try {
            const response = await fetch('http://localhost:8080/api/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(loginData),
              credentials: 'include', // Include cookies for session management
            });
      
            const data = await response.json();
            if (response.ok) {
              // Redirect to the homepage after successful login
              localStorage.setItem("token", data.jwString);
              console.log(data)
              window.location.href = '/profile';
            } else {
              const errorMessage = await response.text();
              setMessage(errorMessage || 'Invalid username or password');
            }
          } catch (error) {
            // setMessage(`Unexpected error: ${error.message}`);
            setMessage('Invalid Credential, Please try again or Register now!');
          } finally {
            setLoading(false); // Stop loading
          }
        };
      
        return (
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              className="auth-input"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              className="auth-input"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" disabled={loading}>
              {loading ? "Loading..." : "Login"}
            </button>
            {loading && <p>Loading, please wait... </p>}
            {message && <p>{message}</p>}
          </form>
        );
      }
      

function RegisterComponent() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // Loading state for registration

  const handleRegister = async (e) => {
      e.preventDefault();

      if (!username || !email || !password || !confirmPassword) {
          setMessage("Please fill in all fields.");
          return;
      }

      if (password !== confirmPassword) {
          setMessage("Passwords do not match");
          return;
      }

      setLoading(true); // Start loading for registration

      const registerData = {
          username: username,
          email: email,
          password: password,
      };

      try {
          const response = await fetch('http://localhost:8080/api/register', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(registerData),
          });

          const result = await response.text()
          if (response.status === 400){
            setMessage(result);
          }
        //   else if(response.status == )
        //   const result = await response.text();
          setMessage(response.ok ? result : 'Registration failed: ' + result);
      } catch (error) {
        console.log(error);
          setMessage('Error: Unable to reach the server.');
      } finally {
          setLoading(false); // Stop loading after registration process
      }
  };


  return (
      <form onSubmit={handleRegister}>
          <input
              type="text"
              placeholder="Username"
              className="auth-input"
              value={username}
              onChange={(e) => {
                  setUsername(e.target.value);
              }}
          />

          <input
              type="email"
              placeholder="Email"
              className="auth-input"
              value={email}
              onChange={(e) => {
                  setEmail(e.target.value);
              }}
              required
          />
          <input
              type="password"
              placeholder="Password"
              className="auth-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
          />
          <input
              type="password"
              placeholder="Confirm Password"
              className="auth-input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
          />
          <button type="submit" disabled={loading}>
              {loading ? "Registering..." : "Register"}
          </button>

          {loading && <p>Loading, please wait...</p>}
          {message && <p>{message}</p>}
      </form>
  );
}


export default AuthPage;
