// cek user
let user = localStorage.getItem("user");
user = JSON.parse(user);

console.log(user);

if (!user) {
  window.location.href = "login.html";
}

function sukses() {
  Swal.fire(
    "Pembayaran Berhasil",
    "Terima kasih telah melakukan pembayaran",
    "success"
  );
  Swal.fire({
    title: "Pembayaran Berhasil",
    text: "Terima kasih telah melakukan pembayaran",
    icon: "success",
    confirmButtonText: "Ok",
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "../index.html";
    }
  });
  // window.location.href = './index.html'
}

const login = () => {
  const isLogin = localStorage.getItem("login") === "true";
  const user = JSON.parse(localStorage.getItem("user")); // Parse objek pengguna
  const loginButton = document.getElementById("login-btn");
  const userInfo = document.getElementById("user-info");
  const userName = document.getElementById("user-name");
  const userAvatar = document.getElementById("user-avatar");

  if (isLogin) {
    console.log("sudah login");
    loginButton.classList.add("d-none");
    userInfo.classList.remove("d-none");
    userName.textContent = `${user.name}`;
    userAvatar.setAttribute("src", user.avatar);
  } else {
    console.log("belum login");
  }
};

login();

const logoutButton = document.getElementById("logout-btn");

logoutButton.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "/pages/login.html";

  localStorage.clear();
  const userInfo = document.getElementById("user-info");
  userInfo.classList.add("d-none");
  const loginButton = document.getElementById("loggin-btn");
  loginButton.classList.remove("d-none");
});
