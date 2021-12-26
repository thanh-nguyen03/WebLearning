import { useState } from 'react';

const Login = ({ setLogin }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const info = {
    user: 'admin',
    password: '123',
  };

  const onShowPassword = (e) => {
    e.preventDefault();

    setShowPassword(!showPassword);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (userName.trim() === info.user && password.trim() === info.password) {
      setLogin();
    } else {
      alert('Your username or password is wrong!');
      return;
    }
  };

  return (
    <div className="login-container">
      <h2>ToDo List App</h2>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>UserName</label>
          <input
            type="text"
            placeholder="user name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label>Password</label>
          <div style={{ display: 'flex' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {password ? (
              <button
                type="button"
                className="btn btn-outline-success"
                style={{
                  fontSize: '0.7rem',
                  padding: '3px',
                  fontWeight: 'bold',
                }}
                onClick={onShowPassword}
              >
                Show Password
              </button>
            ) : (
              ''
            )}
          </div>
        </div>

        <input type="submit" className="btn btn-block btn-dark" />
      </form>
    </div>
  );
};

export default Login;
