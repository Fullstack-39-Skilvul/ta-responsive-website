let slideContent = document.getElementById("slider-content");

const konselor = JSON.parse(localStorage.getItem("konselor"));
let namaKonselor = document.getElementById("name");
let spesialisKonselor = document.getElementById("jenis");
if (konselor) {
  namaKonselor.value = konselor.name;
  spesialisKonselor.value = konselor.spesialis;
}

function kirimKonselor(data) {
  console.log(data);
  localStorage.setItem("konselor", JSON.stringify(data));
  const konselor = JSON.parse(localStorage.getItem("konselor"));
  if (konselor) {
    namaKonselor.value = konselor.name;
    spesialisKonselor.value = konselor.spesialis;
  }
}

async function getDataKonselor() {
  try {
    let response = await fetch(
      "https://6525469867cfb1e59ce6ff49.mockapi.io/konselor"
    );
    let konselor = await response.json();

    if (!konselor || !Array.isArray(konselor)) {
      console.error("Data konselor tidak valid atau tidak ada.");
      return;
    }

    console.log(konselor);
    konselor.map((item) => {
      const card = `
        <div class="card-konselor">
        <img src="${item.avatar}" class="card-img-top" alt="..." />
          <div class="card-body" >
              <h5 class="card-title text-truncate" id="name">${item.name}</h5>
              <p class="card-text" id="spesialis">${item.spesialis}</p>
              <button class="card-btn" onclick='kirimKonselor(${JSON.stringify(
                item
              )})'>Booking Now</button>
          </div>
        </div>
      `;
      slideContent.innerHTML += card;
    });
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }
}

getDataKonselor();

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
