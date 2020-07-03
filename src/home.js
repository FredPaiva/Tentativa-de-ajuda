
  document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("btnatualizar").addEventListener("click", btnSalvarcd)
  document.getElementById("btnnovo").addEventListener("click", btnnovocd)
  $('#example').popover(options)
  $('#myModal').modal(options)
  });

 //var datas
    var Hoje = new Date();
    var Ano = Hoje.getFullYear();
    var Mes = Hoje.getMonth()+1;
    var Dia = Hoje.getDay()+7;

  function getRndNumber(min, max){
  return Math.floor(Math.random() * (max - min +1) + min);
  }
function btnnovocd(){
  getRndNumber()
  var NiD = getRndNumber(1, 99999);
  var id = ('0000' + NiD).slice(-5);

  id = 'CD' + Ano +  id + 'GF';

  var ncd = id;
  var dt = Dia + "/" + Mes + "/" + Ano;
  var stnovo = "Analise"

  /*document.getElementById("id").value = ncd;
  document.getElementById("dtcad").value = dt;
  document.getElementById("status").value = stnovo;*/getRndNumber
  }

