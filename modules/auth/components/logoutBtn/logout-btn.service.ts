export function logout(): void {
  sessionStorage.removeItem('laylo-auth');
}
