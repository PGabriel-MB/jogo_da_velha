var rodada = 1;
var matrizJogo = Array(3);

$(document).ready(function(){

    $('#btn_iniciarJogo').click(function(){
        
        if($('#ipt_entradaPl1').val() == ''){ //validating name inputs
            alert('Apelido do Primeiro jogador vazio!!');
            return false;
        }
        else if($('#ipt_entradaPl2').val() == ''){
            alert('Apelido do Segundo jogador vazio!!');
            return false;
        }

        //showing names
        $('#spn_namePlayer1').html($('#ipt_entradaPl1').val());
        $('#spn_namePlayer2').html($('#ipt_entradaPl2').val());

        //divs visibility
        $('#pagina_inicial').hide();
        $('#palco_jogo').show();
    });

    $('.jogada ').click( function(){
        var id_clickedArea = this.id;
        jogada(id_clickedArea)
    });

    function jogada( id){
        var icone = '';
        var ponto = 0;

        if((rodada % 2) == 1){
            icone = 'url("imagens/marcacao_1.png")';
            ponto = -1;
        }
        else{
            icone = 'url("imagens/marcacao_2.png")';
            ponto = 1;
        }
        
        rodada++;

        $('#'+id).css('background-image', icone);
    }
});