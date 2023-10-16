let konselorFromPromise = [];
fetch('https://cors-anywhere.herokuapp.com/https://mockapi.io/projects/6525469867cfb1e59ce6ff4a')
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((res) => {
    console.log(res);
    konselorFromPromise = [...res];
    console.log(konselorFromPromise);
  })
  .catch((err) => {
    console.log(err);
  });

let listKonselor = document.getElementById('list-konselor');

async function getDataKonselor() {
  try {
    let respons = await fetch('https://cors-anywhere.herokuapp.com/https://mockapi.io/projects/6525469867cfb1e59ce6ff4a');
    let konselor = await respons.json().filter((item) => item.role === 'konselor');

    console.log(konselors);

    konselors.map((item, index) => {
      let cardKonselor = `
        <div>
          <img src=${item.imageUrl} alt="..." width="200" />
          <h3>${item.name}</h3>
        </div>
      `;
      listKonselor.innerHTML += cardKonselor;
    });
  } catch (error) {
    console.log(error);
  }
}

getDataKonselor();
