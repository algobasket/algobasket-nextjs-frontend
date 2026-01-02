/**
 * Authentication utilities for client-side
 */

export interface User {
  id: number
  email: string
  name: string
  role: 'admin' | 'manager' | 'user'
  created_at: string
  updated_at: string
}

/**
 * Check if user is authenticated
 */
export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false
  return !!localStorage.getItem('auth_token')
}

/**
 * Get current user from localStorage
 */
export function getCurrentUser(): User | null {
  if (typeof window === 'undefined') return null
  
  const userStr = localStorage.getItem('user')
  if (!userStr) return null
  
  try {
    return JSON.parse(userStr) as User
  } catch {
    return null
  }
}

/**
 * Get auth token
 */
export function getAuthToken(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem('auth_token')
}

/**
 * Logout user
 */
export function logout(): void {
  if (typeof window === 'undefined') return
  
  localStorage.removeItem('auth_token')
  localStorage.removeItem('user')
  
  // Redirect to login
  window.location.href = '/login'
}

/**
 * Check if user has specific role
 */
export function hasRole(role: 'admin' | 'manager' | 'user'): boolean {
  const user = getCurrentUser()
  if (!user) return false
  
  if (role === 'admin') return user.role === 'admin'
  if (role === 'manager') return user.role === 'admin' || user.role === 'manager'
  return true // All authenticated users have 'user' role
}

