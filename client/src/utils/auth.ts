import { JwtPayload, default as jwtDecode } from 'jwt-decode';

class AuthService {
  // Get user profile from decoded token
  getProfile() {
    const token = this.getToken();
    return token ? jwtDecode<JwtPayload>(token) : null;
  }

  // Check if user is logged in (i.e., token exists and is not expired)
  loggedIn() {
    const token = this.getToken();
    return token && !this.isTokenExpired(token);
  }

  // Check if token is expired
  isTokenExpired(token: string) {
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      if (decoded.exp) {
        const currentTime = Math.floor(Date.now() / 1000);
        return decoded.exp < currentTime;
      }
      return false;
    } catch (err) {
      return false;
    }
  }

  // Retrieve the token from localStorage
  getToken(): string | null {
    return localStorage.getItem('id_token');
  }

  // Login by saving the token to localStorage and redirecting to the home page
  login(idToken: string) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  // Logout by removing the token and redirecting to the login page
  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/login');
  }
}

export default new AuthService();