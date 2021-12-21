class Slider {
    constructor(opt){
        this.init(opt);
        this.bindingEvent();
    }

    init(opt){
        this.btnUp = document.querySelector(opt.btnUp);
        this.btnDown = document.querySelector(opt.btnDown);
        this.panel = document.querySelector(opt.frame);
        this.panel_li= this.panel.querySelectorAll("li");
        this.arr_li = Array.from(this.panel_li);
        this.len = this.panel_li.length-1;
        this.delay = opt.delay;
        this.delay2 = this.convertSpeed(opt.delay2_item);
        this.enableClick = true;
    }

    bindingEvent(){
        this.btnUp.addEventListener("click", e=>{
            e.preventDefault();
            
            if(this.enableClick){
                this.enableClick = false;
                this.moveUp();
            }       
        })
        
        this.btnDown.addEventListener("click", e=>{
            e.preventDefault();
            
            if(this.enableClick){
                this.enableClick = false;
                this.moveDown();
            }       
        })
    }

    moveUp(){
        let current_item = this.panel.querySelector(".on"); 
        let current_index = this.arr_li.indexOf(current_item);
        let next_index;
        (current_index !== this.len) ? next_index = current_index+1 : next_index=0;
        
        current_item.classList.remove("on");
        current_item.classList.add("up"); 
        this.panel_li[next_index].classList.add("down");
    
        setTimeout(()=>{
            this.panel_li[next_index].classList.remove("down");
            this.panel_li[next_index].classList.add("on");
            this.panel.querySelector(".up").classList.remove("up");
    
            setTimeout(()=>{this.enableClick=true}, this.delay2);
        },this.delay)
    }
    
    moveDown(){
        let current_item = this.panel.querySelector(".on");   
        let current_index = this.arr_li.indexOf(current_item);      
        let prev_index;
        (current_index !== 0) ? prev_index = current_index-1 : prev_index=this.len;
        
        current_item.classList.remove("on");
        current_item.classList.add("down"); 
        this.panel_li[prev_index].classList.add("up");
    
        setTimeout(()=>{
            this.panel_li[prev_index].classList.remove("up");
            this.panel_li[prev_index].classList.add("on");
            this.panel.querySelector(".down").classList.remove("down");
    
            setTimeout(()=>{this.enableClick=true}, this.delay2);
        },this.delay)
    }
    
    convertSpeed(el){
        const item = document.querySelector(el);   
        const delay = parseFloat(getComputedStyle(item).transitionDuration)*1000;
        return delay;
    }
}





