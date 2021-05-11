import '../css/style.css'; 
import api from './services/apiService'; 
import chart from './controller/chart'; 
import front from './controller/frontendAnimations'; 
import { fr } from 'date-fns/locale';

// api.cryptInfo().then(res => document.getElementById('ad').textContent = res); 
api.cryptInfo().then(res => console.log(res)); 
chart.lines(); 
front.header();
front.selectResponseAdd(); 