let colorPalette = ['#481380', '#900c3f', '#ffa41b', '#b61aae', '#ff9a3c', '#17b978', '#7f78d2', '#f4eeff', '#000839', '#f3d1f4', '#323232', '#be79df', '#c70039', '#f0a500', '#06623b', '#f6f578'];
let i = 0;
document.querySelector('button').addEventListener('click', 
function(){
    i = 1 < colorPalette.length ? ++i : 0;
    document.querySelector('body').style.backgroundColor = colorPalette[i];
})