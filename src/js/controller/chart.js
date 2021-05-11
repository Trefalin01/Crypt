import data from '../config/dataConfig'; 

class Chart {
    constructor(canvas, WIDTH, HEIGHT, STEP_COUNT, data){
        this.canvas = canvas,
        this.WIDTH = WIDTH, 
        this.HEIGHT = HEIGHT, 
        this.STEP_COUNT = STEP_COUNT,
        this.step = HEIGHT/STEP_COUNT, 
        this.data = data
    }
    lines() {
        const DPI_WIDTH = 1000; 
        const DPI_HEIGHT = 200; 

        this.canvas.style.width = this.WIDTH + '%'; 
        this.canvas.style.height = this.HEIGHT + '%'; 
        const ctx = this.canvas.getContext('2d');
        this.canvas.width = DPI_WIDTH; 
        this.canvas.height = DPI_HEIGHT; 


        ctx.beginPath();
        ctx.lineWidth = 1; 
        ctx.strokeStyle = '#bcbdc1'
        for (let i = 0; i <= this.STEP_COUNT; i++) {
            const y = this.step * i * 2; 
            ctx.fillText(DPI_HEIGHT - y, 6, y);
            ctx.moveTo(0, y); 
            ctx.lineTo(DPI_WIDTH, y); 
        }
        ctx.stroke();
        ctx.closePath();
        for (let i = 0; i < this.data.length; i++) {
            const element = this.data[i];
            ctx.beginPath(); 
            ctx.lineWidth = 13; 
            ctx.strokeStyle = 'rgb(0,' + Math.floor(255-42.5*i) + ',' + Math.floor(255-42.5*i) + ')';
            ctx.lineCap = 'round';  
            for(const[x, y] of element){
                ctx.lineTo(x, DPI_HEIGHT - y); 
            }
            ctx.stroke();
            ctx.closePath();
        }

        
    }

}

const chart = new Chart(document.getElementById('canvas'), 100, 100, 5, data); 

export default chart; 