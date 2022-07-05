function pilihanCom(){
  let komputer = Math.random();
  if (komputer <0.34) {
    return 'batu';
  } else if (komputer >= 0.34 && komputer < 0.67 ) {
    return 'gunting';
  } else {
    return 'kertas';
  }
}


function tampilHasil(komputer, pemain){
  if (pemain == komputer) {
    return 'DRAW';
  } else if (pemain == 'batu') {
    return (komputer == 'gunting') ? 'PLAYER 1 WIN' : 'COM WIN';
  } else if (pemain == 'gunting') {
    return(komputer == 'kertas') ? 'PLAYER 1 WIN' : 'COM WIN';
  } else if (pemain == 'kertas') {
    return(komputer == 'batu') ? 'PLAYER 1 WIN' : 'COM WIN';
  } else{
    hasil = 'invalid input!';
  }
}

function bKomputer(com, bungkus) {
  if (com === 'batu') {
    bungkus.className = 'bungkusBatu';
  } else if (com === 'gunting') {
    bungkus.className = 'bungkusGunting';
  } else{
    bungkus.className = 'bungkusKertas';
  }
}

const pemainBatu = document.getElementById('batuPlayer');
const pemainKertas = document.getElementById('kertasPlayer');
const pemainGunting = document.getElementById('guntingPlayer');
const infoHasil = document.getElementById('liatHasil');
const vs = document.getElementById('versus');
const bungkus = document.getElementsByClassName('bungkusKomputer')[0];

pemainBatu.addEventListener('click', function(){
  const com = pilihanCom();
  const pBatu = 'batu';
  const hasil = tampilHasil(com, pBatu);
  bKomputer(com, bungkus);
  vs.style.opacity = '0';
  infoHasil.style.opacity = '1';
  infoHasil.innerHTML = hasil;
  if (infoHasil.innerHTML === 'DRAW') {
    infoHasil.style.background = '#035B0C'
  } else {
    infoHasil.style.background = '#4C9654';
  }
})

pemainKertas.addEventListener('click', function(){
  const com = pilihanCom();
  const pKertas = 'kertas';
  const hasil = tampilHasil(com, pKertas);
  bKomputer(com, bungkus);
  vs.style.opacity = '0';
  infoHasil.style.opacity = '1';
  infoHasil.innerHTML = hasil;
  if (infoHasil.innerHTML === 'DRAW') {
    infoHasil.style.background = '#035B0C'
  } else {
    infoHasil.style.background = '#4C9654';
  }
})

pemainGunting.addEventListener('click', function(){
  const com = pilihanCom();
  const pGunting = 'gunting';
  const hasil = tampilHasil(com, pGunting);
  bKomputer(com, bungkus);
  vs.style.opacity = '0';
  infoHasil.style.opacity = '1';
  infoHasil.innerHTML = hasil;
  if (infoHasil.innerHTML === 'DRAW') {
    infoHasil.style.background = '#035B0C'
  } else {
    infoHasil.style.background = '#4C9654';
  }
})
