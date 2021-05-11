import { el } from "date-fns/locale";
import api from '../services/apiService'; 

class Front{
    constructor(){}

    async header(){
        try {
            const link = document.querySelectorAll('.nav-list_link');
            let url = document.location.href;
            for (let i = 0; i < link.length; i++) {
                if (url === link[i].href) {
                    link[i].classList.add('is-active');
                }
            }
        } catch (error) {
            console.log(error); 
            Promise.reject(error); 
        }
    }
    selectResponseAdd(){
        api.cryptInfo().then(response => {
            for (let i = 0; i < response.length - 1; i++) { 
                let element1 = response[i]; 
                let element2 = response[i + 1]; 
                const {symbol} =  element2; 
                document.querySelector('.info-select_visible').addEventListener('click', () => { 
                    const li = document.createElement('li'); 
                    li.classList.add('invisible-list_item'); 
                    document.querySelector('.invisible-list').appendChild(li); 
                    li.textContent =  `${element1.symbol} - ${symbol}`; 
                }); 
            } 
        }) 
        api.cryptInfo().then(response => {
            for (let i = 0; i < response.length ; i++) { 

                const div1 = document.createElement('div'); 
                div1.classList.add('pairs-item_currency'); 
                const div2 = document.createElement('div'); 
                div2.classList.add('item-currency_info'); 
                const div3 = document.createElement('div'); 
                div3.classList.add('item-currency_price'); 

                div1.appendChild(div2); 
                div1.appendChild(div3); 

                document.querySelector('.pairs-item').prepend(div1); 
                



                let element = response[i]; 
                const {symbol, priceUsd} =  element;
                document.querySelector('.item-currency_info').textContent = `${symbol} - USD`; 
                document.querySelector('.item-currency_price').textContent = `$${priceUsd} `
            } 
        }) 
    } 
} 


const front = new Front(); 

export default front; 