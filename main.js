try {

//        bg                 bc               bb             hb               ab                 cool           font
let cpreset = [
  ["rgb(60,100,120)", "rgb(5,15,20)", "rgb(20,30,40)", "rgb(40,50,60)", "rgb(50,70,90)", "rgb(50,60,70)", "#fff"],
  ["rgb(120,100,60)", "rgb(60,40,30)", "rgb(40,30,20)", "rgb(60,50,40)", "rgb(90,70,50)", "rgb(50,40,30)", "#fff"],
  ["rgb(40,150,120)", "rgb(15,45,35)", "rgb(40,70,60)", "rgb(50,80,70)", "rgb(50,90,70)", "rgb(50,70,60)", "#fff"],
  ["#fff", "rgb(0,0,0)", "rgb(255,255,255)", "rgb(200,200,200)", "rgb(150,150,150)", "rgb(0,0,0)", "#000"]
];

function c_change(style, load = false) {
  if (!load) {
    document.documentElement.style.setProperty("--tran", "ease-in-out 500ms");
  }
  let s = +style;
  document.documentElement.style.setProperty("--bg", cpreset[s][0]);
  document.documentElement.style.setProperty("--bc", cpreset[s][1]);
  document.documentElement.style.setProperty("--bb", cpreset[s][2]);
  document.documentElement.style.setProperty("--hb", cpreset[s][3]);
  document.documentElement.style.setProperty("--ab", cpreset[s][4]);
  document.documentElement.style.setProperty("--cool", cpreset[s][5]);
  document.documentElement.style.setProperty("--fontc", cpreset[s][6]);

  setTimeout(function() {
    document.documentElement.style.setProperty("--tran", "ease-in-out 500ms");
  }, 500);
  
  localStorage.setItem("colorStyle", s);
}
function comp() {
  c_change(localStorage.getItem("colorStyle"), true);
  document.getElementById("jserr").textContent = "";
};
} catch (error) {
  document.getElementById("jserr").textContent = "noooooo";
}