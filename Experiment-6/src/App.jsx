
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  // 1. State variables for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // 2. State for errors, success message, and fetched users
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [users, setUsers] = useState([]);

  // 3. Fetch API data using useEffect (runs once on mount)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data.slice(0, 5))) // Taking first 5 users for display
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  // 4. Handle input changes (Controlled Components)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 5. Form Validation Logic
  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      tempErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }
    return tempErrors;
  };

  // 6. Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      setIsSubmitted(true);
      console.log("Form Submitted Successfully:", formData);
    } else {
      setErrors(validationErrors);
      setIsSubmitted(false);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <button type="submit" className="register-btn">Register</button>
        </form>

        {isSubmitted && (
          <div className="success-msg">
            <h3>Registration Successful!</h3>
          </div>
        )}

        <div className="user-list">
          <hr />
          <h3>Registered Users</h3>
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <strong>{user.name}</strong> - {user.email}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;