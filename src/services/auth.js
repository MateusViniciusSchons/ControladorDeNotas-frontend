export default function isAuthenticated() {
    const userId = localStorage.getItem('userId')

    return userId? true: false
}