'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { isAuthenticated, getCurrentUser, logout } from '@/lib/auth'

export default function Account() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check authentication on client side
    if (!isAuthenticated()) {
      router.push('/login')
      return
    }

    const currentUser = getCurrentUser()
    setUser(currentUser)
    setLoading(false)
  }, [router])

  const handleLogout = () => {
    logout()
  }

  // Show loading state while checking auth
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  // If not authenticated, redirect will happen
  if (!user) {
    return null
  }
  return (
    <>
      {/* Header */}
      <header className="bg-dark py-5">
        <div className="container px-5">
          <div className="row gx-5 align-items-center justify-content-center">
            <div className="col-lg-8 col-xl-7 col-xxl-6">
              <div className="my-5 text-center text-xl-start">
                <h1 className="display-5 fw-bolder text-white mb-2">Account</h1>
                <p className="lead fw-normal text-white-50 mb-4">
                  Manage your account settings and preferences
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Account Section */}
      <section className="py-5">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-8 col-xl-6">
              <div className="card shadow-lg border-0 rounded-lg mt-5">
                <div className="card-header bg-primary bg-gradient text-white">
                  <h3 className="text-center font-weight-light my-4">Account Management</h3>
                </div>
                <div className="card-body">
                  <div className="mb-4">
                    <h5>Profile Settings</h5>
                    <p className="text-muted">Update your profile information and preferences.</p>
                    <Link href="/account/profile" className="btn btn-primary">
                      Edit Profile
                    </Link>
                  </div>
                  <hr />
                  <div className="mb-4">
                    <h5>Security</h5>
                    <p className="text-muted">Manage your password and security settings.</p>
                    <Link href="/account/security" className="btn btn-primary">
                      Security Settings
                    </Link>
                  </div>
                  <hr />
                  <div className="mb-4">
                    <h5>Subscriptions</h5>
                    <p className="text-muted">View and manage your premium subscriptions.</p>
                    <Link href="/account/subscriptions" className="btn btn-primary">
                      View Subscriptions
                    </Link>
                  </div>
                  <hr />
                  <div className="mb-4">
                    <h5>Orders & Downloads</h5>
                    <p className="text-muted">Access your purchase history and downloads.</p>
                    <Link href="/account/orders" className="btn btn-primary">
                      View Orders
                    </Link>
                  </div>
                </div>
                <div className="card-footer text-center py-3">
                  <div className="mb-2">
                    <strong>Logged in as:</strong> {user.email} ({user.role})
                  </div>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

