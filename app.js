const currentTime = () => {
  const el = document.querySelector("span");

  let date = new Date(); // variable to get current date
  let hh = date.getHours(); // variable to get current hours date
  let mm = date.getMinutes(); //variable to get current minutes date
  let ss = date.getSeconds(); //variable to get current seconds date

  //logic to show the time 

  hh = hh < 10 ? `0${hh}` : hh;
  mm = mm < 10 ? `0${mm}` : mm;
  ss = ss < 10 ? `0${ss}` : ss;


  let time = `${hh}:${mm}:${ss}`; //variable to show time after certain conditions
  el.innerText = time;
};

currentTime();
setInterval(currentTime, 1000);
