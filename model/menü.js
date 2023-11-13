//linke Seite
left_side_click = false;
left_side_out = false; 

toggler = document.getElementById("btn-left");
toggler.addEventListener('click', toggleLinkeSeite);
toggler.addEventListener('mouseover', toggleLinkeSeite);

toggler = document.getElementById("sidebar-left");
toggler.addEventListener("mouseleave",toggleLinkeSeite);

//rechte Seite
right_side_click = false;
right_side_out = false;

toggler = document.getElementById("btn-right");
toggler.addEventListener('click', toggleRechteSeite);
toggler.addEventListener('mouseover', toggleRechteSeite);

toggler = document.getElementById("sidebar-right");
toggler.addEventListener("mouseleave",toggleRechteSeite);

//Untere Seite
down_side_click = false;
down_side_out = false;

toggler = document.getElementById("btn-down");
toggler.addEventListener('click', toggleUntereSeite);
toggler.addEventListener('mouseover', toggleUntereSeite);

toggler = document.getElementById("sidebar-down");
toggler.addEventListener("mouseleave",toggleUntereSeite);

function toggleLinkeSeite(Event){
    if(Event.type === "click"){
        if(!left_side_click && !left_side_out){
            left_side_out = !left_side_out;
            document.querySelector("#sidebar-left").classList.toggle("collapsed");
            document.querySelector("#sidebar-down").classList.toggle("collapsed-left");
        }
        left_side_click = !left_side_click;
    }else if(Event.type === "mouseover" && left_side_click){
        return;
    }else if(Event.type === "mouseleave" && left_side_click){
        return;
    }

    if(!left_side_click){
        left_side_out = !left_side_out;
        document.querySelector("#sidebar-left").classList.toggle("collapsed");
        document.querySelector("#sidebar-down").classList.toggle("collapsed-left");
    }
}

function toggleRechteSeite(Event){
    if(Event.type === "click"){
        if(!right_side_click && !right_side_out){
            right_side_out = !right_side_out;
            document.querySelector("#sidebar-right").classList.toggle("collapsed");
            document.querySelector("#sidebar-down").classList.toggle("collapsed-right");
        }
        right_side_click = !right_side_click;
    }else if(Event.type === "mouseover" && right_side_click){
        return;
    }else if(Event.type === "mouseleave" && right_side_click){
        return;
    }

    if(!right_side_click){
        right_side_out = !right_side_out;
        document.querySelector("#sidebar-right").classList.toggle("collapsed");
        document.querySelector("#sidebar-down").classList.toggle("collapsed-right");
    }
}

function toggleUntereSeite(Event){
    if(Event.type === "click"){
        if(!down_side_click && !down_side_out){
            down_side_out = !down_side_out;
            document.querySelector("#sidebar-down").classList.toggle("collapsed");
        }
        down_side_click = !down_side_click;
    }else if(Event.type === "mouseover" && down_side_click){
        return;
    }else if(Event.type === "mouseleave" && down_side_click){
        return;
    }

    if(!down_side_click){
        down_side_out = !down_side_out;
        document.querySelector("#sidebar-down").classList.toggle("collapsed");

    }
}