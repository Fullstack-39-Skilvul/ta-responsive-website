let slideContent = document.getElementById("slider-content");

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
    konselor.forEach((item) => {
      const card = `
        <div class="card-konselor">
          <img src="${item.avatar}" class="card-img-top" alt="..." stylye={width:900px}>
          <div class="card-body">
            <h5 class="card-title fs-6">${item.name}</h5>
            <p class="card-text">${item.spesialis}</p>
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
