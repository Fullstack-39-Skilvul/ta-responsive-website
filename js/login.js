let email = document.getElementById('email')
let password = document.getElementById('password')
let button = document.getElementById('btn-submit')

async function getData () {
  try {
    let data = await fetch("https://6525469867cfb1e59ce6ff49.mockapi.io/user")
    let user = await data.json()

    return user

  } catch (error) {
    console.log(error);
  }
}

button.addEventListener('click', function (event) {
    event.preventDefault()
    let emailValue = email.value
    let passwordValue = password.value

    if (emailValue === '' || passwordValue === '') {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'error',
            title: 'Please enter your email and password'
          })
      return
    }

    getData()
    .then((data) => {
      const user = data.find((user) => {
        return user.username === emailValue && user.password === passwordValue
      })
      if (user) {
        alert('Login success')
      } else {
        alert('Login failed')
      }
    })

    return(emailValue, passwordValue)
})



