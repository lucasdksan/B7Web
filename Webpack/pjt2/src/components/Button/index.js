import './styles.css';
//oi lucas
class Button {
    constructor(){
        this.title = '';
        this.callback = ()=>{};
    }
    setTitle(t){
        this.title = t;
    }
    setClick(f){
        this.callback = f;
    }
    render(){
        let b = document.createElement('button');
        b.classList.add('button');
        b.innerHTML = this.title;
        b.addEventListener('click', this.callback);
        return b;
    }
}

export default Button;