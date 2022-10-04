export default async function isLogged() {
    const request = await fetch("http://localhost:3001/api/me");
    const session = await request.json();
    
    return session.loggedIn;
}