import $ from 'jquery';
import '../src/styles/GlobalStyles.scss';
import Button from '../src/components/Button/index';
import Gallery from '../src/components/Gallery/index';

$(function(){
    let buttonComponent = new Button();
    let gallery= new Gallery();
    buttonComponent.setTitle('Um simples teste, clique aqui!');
    buttonComponent.setClick(function(){
        alert('Deu Certo!!!!');
    });
    $('.area').html(buttonComponent.render(), gallery.render());
});