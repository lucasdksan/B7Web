import $ from 'jquery';
import './styles.css';

$(function(){
    $('#botao').on('click', function(){
        $('h1').html('Olá Mundo 2.0');
        $(this).addClass('botao');
    });
});