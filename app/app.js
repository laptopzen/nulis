// .tulisan .jumlah-huruf .jumlah-kata

database = "nulis"
hitung = function(){
  tulisan = $(".tulisan").val()
  localStorage.setItem(database, tulisan)

  jumlah_huruf = 0
  for (n = 0, panjang = tulisan.length; n < panjang; n++){
    if (tulisan[n] !== " "){
      jumlah_huruf++
    }
  }
  $(".jumlah-huruf"). html(Number(jumlah_huruf).toLocaleString("id"))

  $(".jumlah-kata").html(Number(tulisan.split(/\w+/).length - 1).toLocaleString("id"))
}

if (localStorage.getItem(database)){
  $(".tulisan").val(localStorage.getItem(database))
  hitung()
}
$(".tulisan").on("keyup", function(){
  hitung()
})