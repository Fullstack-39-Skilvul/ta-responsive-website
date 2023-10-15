// cek user 
let user = localStorage.getItem('user');
user = JSON.parse(user);

console.log(user)

if (!user) {
    window.location.href = 'login.html';
}