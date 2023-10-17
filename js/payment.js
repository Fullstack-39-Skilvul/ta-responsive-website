// cek user 
let user = localStorage.getItem('user');
user = JSON.parse(user);

console.log(user)

if (!user) {
    window.location.href = 'login.html';
}

function sukses() {
    Swal.fire('Pembayaran Berhasil', 'Terima kasih telah melakukan pembayaran', 'success');
    Swal.fire({
        title: 'Pembayaran Berhasil',
        text: 'Terima kasih telah melakukan pembayaran',
        icon: 'success',
        confirmButtonText: 'Ok'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = '../index.html'
        }
    })
    // window.location.href = './index.html'
}