'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Register() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    // Calculate password strength
    if (formData.password) {
      let strength = 0
      if (formData.password.length >= 8) strength++
      if (/[a-z]/.test(formData.password)) strength++
      if (/[A-Z]/.test(formData.password)) strength++
      if (/[0-9]/.test(formData.password)) strength++
      if (/[^A-Za-z0-9]/.test(formData.password)) strength++
      setPasswordStrength(strength)
    } else {
      setPasswordStrength(0)
    }
  }, [formData.password])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    setError('')
  }

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Name is required')
      return false
    }
    if (!formData.email.trim()) {
      setError('Email is required')
      return false
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address')
      return false
    }
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long')
      return false
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!validateForm()) {
      return
    }

    setLoading(true)

    try {
      const response = await fetch('http://localhost:3002/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
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
        setError(data.error || data.message || 'Registration failed. Please try again.')
        setLoading(false)
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
      console.error('Registration error:', err)
      setLoading(false)
    }
  }

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 2) return '#dc3545'
    if (passwordStrength <= 3) return '#ffc107'
    if (passwordStrength <= 4) return '#17a2b8'
    return '#28a745'
  }

  const getPasswordStrengthText = () => {
    if (passwordStrength <= 2) return 'Weak'
    if (passwordStrength <= 3) return 'Fair'
    if (passwordStrength <= 4) return 'Good'
    return 'Strong'
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

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .register-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          position: relative;
          overflow: hidden;
        }

        .register-container::before {
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

        .register-card {
          animation: ${mounted ? 'fadeInUp 0.6s ease-out' : 'none'};
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .register-header {
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

        .form-group:nth-child(4) {
          animation-delay: 0.4s;
        }

        .form-group:nth-child(5) {
          animation-delay: 0.5s;
        }

        .btn-register {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .btn-register:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .btn-register:active {
          transform: translateY(0);
        }

        .btn-register::before {
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

        .btn-register:hover::before {
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

        .password-strength {
          height: 4px;
          border-radius: 2px;
          transition: all 0.3s ease;
          margin-top: 8px;
        }

        .password-strength-bar {
          height: 100%;
          border-radius: 2px;
          transition: width 0.3s ease, background-color 0.3s ease;
        }

        .check-icon {
          color: #28a745;
          animation: ${mounted ? 'fadeIn 0.3s ease-out' : 'none'};
        }
      `}</style>

      <div className="register-container">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>

        <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', position: 'relative', zIndex: 1 }}>
          <div className="row w-100 justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
              <div className={`register-card card border-0 rounded-4 p-4 ${error ? 'error-shake' : ''}`}>
                <div className="register-header text-center mb-4">
                  <h1 className="display-4 fw-bold mb-2" style={{ 
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    Create Account
                  </h1>
                  <p className="text-muted">Join Algobasket and start your journey</p>
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
                    <label htmlFor="inputName" className="form-label fw-semibold text-dark mb-2">
                      <i className="bi bi-person me-2"></i>Full Name
                    </label>
                    <input
                      className="form-control form-control-lg"
                      id="inputName"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={loading}
                    />
                  </div>

                  <div className="form-group mb-4">
                    <label htmlFor="inputEmail" className="form-label fw-semibold text-dark mb-2">
                      <i className="bi bi-envelope me-2"></i>Email Address
                    </label>
                    <input
                      className="form-control form-control-lg"
                      id="inputEmail"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={loading}
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="inputPassword" className="form-label fw-semibold text-dark mb-2">
                      <i className="bi bi-lock me-2"></i>Password
                    </label>
                    <input
                      className="form-control form-control-lg"
                      id="inputPassword"
                      name="password"
                      type="password"
                      placeholder="Create a password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      minLength={8}
                    />
                    {formData.password && (
                      <div className="mt-2">
                        <div className="password-strength bg-light">
                          <div 
                            className="password-strength-bar"
                            style={{
                              width: `${(passwordStrength / 5) * 100}%`,
                              backgroundColor: getPasswordStrengthColor()
                            }}
                          ></div>
                        </div>
                        <small className="text-muted">
                          Strength: <span style={{ color: getPasswordStrengthColor(), fontWeight: 'bold' }}>
                            {getPasswordStrengthText()}
                          </span>
                        </small>
                        <div className="mt-2 small text-muted">
                          <div className="d-flex flex-wrap gap-3">
                            <span className={formData.password.length >= 8 ? 'text-success' : ''}>
                              <i className={`bi ${formData.password.length >= 8 ? 'bi-check-circle-fill' : 'bi-circle'} me-1`}></i>
                              At least 8 characters
                            </span>
                            <span className={/[a-z]/.test(formData.password) && /[A-Z]/.test(formData.password) ? 'text-success' : ''}>
                              <i className={`bi ${/[a-z]/.test(formData.password) && /[A-Z]/.test(formData.password) ? 'bi-check-circle-fill' : 'bi-circle'} me-1`}></i>
                              Upper & lowercase
                            </span>
                            <span className={/[0-9]/.test(formData.password) ? 'text-success' : ''}>
                              <i className={`bi ${/[0-9]/.test(formData.password) ? 'bi-check-circle-fill' : 'bi-circle'} me-1`}></i>
                              Number
                            </span>
                            <span className={/[^A-Za-z0-9]/.test(formData.password) ? 'text-success' : ''}>
                              <i className={`bi ${/[^A-Za-z0-9]/.test(formData.password) ? 'bi-check-circle-fill' : 'bi-circle'} me-1`}></i>
                              Special character
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="form-group mb-4">
                    <label htmlFor="inputConfirmPassword" className="form-label fw-semibold text-dark mb-2">
                      <i className="bi bi-shield-lock me-2"></i>Confirm Password
                    </label>
                    <input
                      className="form-control form-control-lg"
                      id="inputConfirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      disabled={loading}
                    />
                    {formData.confirmPassword && (
                      <div className="mt-2">
                        {formData.password === formData.confirmPassword ? (
                          <small className="text-success">
                            <i className="bi bi-check-circle-fill me-1"></i>
                            Passwords match
                          </small>
                        ) : (
                          <small className="text-danger">
                            <i className="bi bi-x-circle-fill me-1"></i>
                            Passwords do not match
                          </small>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="form-check mb-4">
                    <input 
                      className="form-check-input" 
                      type="checkbox" 
                      id="agreeTerms" 
                      required
                    />
                    <label className="form-check-label text-muted small" htmlFor="agreeTerms">
                      I agree to the{' '}
                      <Link href="/terms" className="text-decoration-none" style={{ color: '#667eea' }}>
                        Terms of Service
                      </Link>
                      {' '}and{' '}
                      <Link href="/privacy" className="text-decoration-none" style={{ color: '#667eea' }}>
                        Privacy Policy
                      </Link>
                    </label>
                  </div>

                  <button
                    className="btn-register btn btn-primary btn-lg w-100 py-3 fw-semibold"
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
                        Creating account...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-person-plus me-2"></i>
                        Create Account
                      </>
                    )}
                  </button>
                </form>

                <div className="text-center mt-4">
                  <p className="text-muted mb-0">
                    Already have an account?{' '}
                    <Link 
                      href="/login" 
                      className="text-decoration-none fw-semibold"
                      style={{ color: '#667eea' }}
                    >
                      Sign in here
                    </Link>
                  </p>
                </div>

                <div className="text-center mt-4 pt-4 border-top">
                  <p className="text-muted small mb-2">Or sign up with</p>
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

