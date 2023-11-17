$(document).ready(function(){
    $('#carousel-img').slick({
        autoplay:true,
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            nome:{
                required: true
            },
            email:{
                required: true,
                email:true
            },
            telefone:{
                required: true,
            },
            mensagem:{
                required: true,
            },
            veiculoDeInteresse:{
                required: false,
            }
        }, messeges:{
            nome: 'Por favor, insira seu nome'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let campoIncorreto = validador.numberOfInvalids();
            if(campoIncorreto){
                alert(`Existem ${campoIncorreto} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        },1000)
    })
})