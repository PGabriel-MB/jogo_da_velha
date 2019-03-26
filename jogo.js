var rodada = 1;
var matrizJogo = Array(3);

matrizJogo['a'] = Array(3);
matrizJogo['b'] = Array(3);
matrizJogo['c'] = Array(3);

matrizJogo['a'][1] = 0;
matrizJogo['a'][2] = 0;
matrizJogo['a'][3] = 0;

matrizJogo['b'][1] = 0;
matrizJogo['b'][2] = 0;
matrizJogo['b'][3] = 0;

matrizJogo['c'][1] = 0;
matrizJogo['c'][2] = 0;
matrizJogo['c'][3] = 0;

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
        $('#'+id_clickedArea).off();
        jogada(id_clickedArea);
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

        var linha_coluna = id.split('-');

        matrizJogo[linha_coluna[0]][linha_coluna[1]] = ponto;

        verifica_combinacao();
    }

    function verifica_combinacao(){
        //checking horizontal
        var pontos = 0;
        for(let i = 1; i <= 3; i++){
            pontos = pontos + matrizJogo['a'][i];
        }
        ganhador(pontos);

        pontos = 0;
        for(let i = 1; i <= 3; i++){
            pontos = pontos + matrizJogo['b'][i];
        }
        ganhador(pontos);

        pontos = 0;
        for(let i = 1; i <= 3; i++){
            pontos = pontos + matrizJogo['c'][i];
        }
        ganhador(pontos);

        //checking vertical
        for(let l = 1; l <= 3; l++){
            pontos = 0;
            pontos += matrizJogo['a'][l];
            pontos += matrizJogo['b'][l];
            pontos += matrizJogo['c'][l];

            ganhador(pontos);
        }

        //checking diagonal
        pontos = 0;
        pontos = matrizJogo['a'][1] + matrizJogo['b'][2] + matrizJogo['c'][3];
        ganhador(pontos);

        pontos = 0;
        pontos = matrizJogo['a'][3] + matrizJogo['b'][2] + matrizJogo['c'][1];
        ganhador(pontos);

    }

    function ganhador(pontos){
        if(pontos == -3){
            var jogada_1 = $('#ipt_entradaPl1').val();
            alert(jogada_1 + ' é o VENCEDOR!');
            $('.jogada').off();
        }
        else if(pontos == -3){
            var jogada_2 = $('#ipt_entradaPl2').val();
            alert(jogada_2 + ' é o VENCEDOR!');
            $('.jogada').off();
        }
    }
});