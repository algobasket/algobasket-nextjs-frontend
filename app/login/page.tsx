'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('http://localhost:3002/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        // Store token in localStorage
        if (data.data?.token) {
          localStorage.setItem('auth_token', data.data.token)
        }
        // Store user info
        if (data.data?.user) {
          localStorage.setItem('user', JSON.stringify(data.data.user))
        }
        
        // Small delay for smooth transition
        setTimeout(() => {
          router.push('/account')
          router.refresh()
        }, 300)
      } else {
        setError(data.error || data.message || 'Login failed. Please check your credentials.')
        setLoading(false)
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
      console.error('Login error:', err)
      setLoading(false)
    }
  }

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes shake {
          0%, 100% {
            transform: translateX(0);
          }
          10%, 30%, 50%, 70%, 90% {
            transform: translateX(-5px);
          }
          20%, 40%, 60%, 80% {
            transform: translateX(5px);
          }
        }

        .login-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          position: relative;
          overflow: hidden;
        }

        .login-container::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: float 20s linear infinite;
        }

        @keyframes float {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        .login-card {
          animation: ${mounted ? 'fadeInUp 0.6s ease-out' : 'none'};
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .login-header {
          animation: ${mounted ? 'fadeIn 0.8s ease-out' : 'none'};
        }

        .form-group {
          animation: ${mounted ? 'slideInRight 0.6s ease-out' : 'none'};
          animation-fill-mode: both;
        }

        .form-group:nth-child(1) {
          animation-delay: 0.1s;
        }

        .form-group:nth-child(2) {
          animation-delay: 0.2s;
        }

        .form-group:nth-child(3) {
          animation-delay: 0.3s;
        }

        .btn-login {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .btn-login:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .btn-login:active {
          transform: translateY(0);
        }

        .btn-login::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .btn-login:hover::before {
          width: 300px;
          height: 300px;
        }

        .form-control {
          transition: all 0.3s ease;
          border: 2px solid #e0e0e0;
        }

        .form-control:focus {
          border-color: #667eea;
          box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
          transform: translateY(-2px);
        }

        .error-shake {
          animation: shake 0.5s ease-in-out;
        }

        .loading-spinner {
          display: inline-block;
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .floating-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.1;
          animation: float-shape 15s infinite ease-in-out;
        }

        .shape-1 {
          width: 200px;
          height: 200px;
          background: #fff;
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 150px;
          height: 150px;
          background: #fff;
          top: 60%;
          right: 10%;
          animation-delay: 2s;
        }

        .shape-3 {
          width: 100px;
          height: 100px;
          background: #fff;
          bottom: 20%;
          left: 20%;
          animation-delay: 4s;
        }

        @keyframes float-shape {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(30px, -30px) rotate(120deg);
          }
          66% {
            transform: translate(-20px, 20px) rotate(240deg);
          }
        }
      `}</style>

      <div className="login-container">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>

        <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', position: 'relative', zIndex: 1 }}>
          <div className="row w-100 justify-content-center">
            <div className="col-lg-5 col-md-7 col-sm-9">
              <div className={`login-card card border-0 rounded-4 p-4 ${error ? 'error-shake' : ''}`}>
                <div className="login-header text-center mb-4">
                  <h1 className="display-4 fw-bold mb-2" style={{ 
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    Welcome Back
                  </h1>
                  <p className="text-muted">Sign in to continue to Algobasket</p>
                </div>

                {error && (
                  <div className="alert alert-danger alert-dismissible fade show" role="alert" style={{ animation: 'fadeIn 0.3s ease-out' }}>
                    <i className="bi bi-exclamation-triangle-fill me-2"></i>
                    {error}
                    <button
                      type="button"
                      className="btn-close"
                      onClick={() => setError('')}
                      aria-label="Close"
                    ></button>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-4">
                    <label htmlFor="inputEmail" className="form-label fw-semibold text-dark mb-2">
                      <i className="bi bi-envelope me-2"></i>Email Address
                    </label>
                    <input
                      className="form-control form-control-lg"
                      id="inputEmail"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={loading}
                    />
                  </div>

                  <div className="form-group mb-4">
                    <label htmlFor="inputPassword" className="form-label fw-semibold text-dark mb-2">
                      <i className="bi bi-lock me-2"></i>Password
                    </label>
                    <input
                      className="form-control form-control-lg"
                      id="inputPassword"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      disabled={loading}
                    />
                  </div>

                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="rememberMe" />
                      <label className="form-check-label text-muted small" htmlFor="rememberMe">
                        Remember me
                      </label>
                    </div>
                    <Link 
                      href="/forgot-password" 
                      className="text-decoration-none small"
                      style={{ color: '#667eea' }}
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <button
                    className="btn-login btn btn-primary btn-lg w-100 py-3 fw-semibold"
                    type="submit"
                    disabled={loading}
                    style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      border: 'none',
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    {loading ? (
                      <>
                        <span className="loading-spinner me-2"></span>
                        Signing in...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-box-arrow-in-right me-2"></i>
                        Sign In
                      </>
                    )}
                  </button>
                </form>

                <div className="text-center mt-4">
                  <p className="text-muted mb-0">
                    Don&apos;t have an account?{' '}
                    <Link 
                      href="/register" 
                      className="text-decoration-none fw-semibold"
                      style={{ color: '#667eea' }}
                    >
                      Create one now
                    </Link>
                  </p>
                </div>

                <div className="text-center mt-4 pt-4 border-top">
                  <p className="text-muted small mb-2">Or continue with</p>
                  <div className="d-flex gap-2 justify-content-center">
                    <button className="btn btn-outline-secondary btn-sm" type="button">
                      <i className="bi bi-google"></i>
                    </button>
                    <button className="btn btn-outline-secondary btn-sm" type="button">
                      <i className="bi bi-github"></i>
                    </button>
                    <button className="btn btn-outline-secondary btn-sm" type="button">
                      <i className="bi bi-facebook"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

