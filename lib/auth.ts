const SESSION_KEY = "forest_session"

function isBrowser() {
  return typeof window !== "undefined"
}

export function hasSession(): boolean {
  if (!isBrowser()) return false
  return Boolean(localStorage.getItem(SESSION_KEY))
}

export async function signIn(_email: string, _password: string) {
  if (!isBrowser()) {
    return { success: false }
  }

  localStorage.setItem(
    SESSION_KEY,
    JSON.stringify({ signedInAt: Date.now() }),
  )

  return { success: true }
}

export async function registerUser(
  username: string,
  email: string,
  _password: string,
) {
  return {
    success: true,
    user: {
      id: `user_${Math.random().toString(36).slice(2, 9)}`,
      username,
      email,
    },
  }
}

export async function signOut() {
  if (isBrowser()) {
    localStorage.removeItem(SESSION_KEY)
  }
  return { success: true }
}
