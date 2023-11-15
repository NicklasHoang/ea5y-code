//rechte Seite
right_side_meta_click = false;
right_side_meta_out = false;

toggler = document.getElementById("btn-right");
toggler.addEventListener('click', toggleRechteSeite);
toggler.addEventListener('mouseover', toggleRechteSeite);

toggler = document.getElementById("sidebar-right-meta");
toggler.addEventListener("mouseleave",toggleRechteSeite);

function toggleRechteSeite(Event){
    if(Event.type === "click"){
        if(!right_side_meta_click && !right_side_meta_out){
            right_side_meta_out = !right_side_meta_out;
            document.querySelector("#sidebar-right-meta").classList.toggle("collapsed");
            document.querySelector("#sidebar-down").classList.toggle("collapsed-right-meta");
            document.querySelector("#btn-down").classList.toggle("collapsed");
        }
        right_side_meta_click = !right_side_meta_click;
    }else if(Event.type === "mouseover" && right_side_meta_click){
        return;
    }else if(Event.type === "mouseleave" && right_side_meta_click){
        return;
    }

    if(!right_side_meta_click){
        right_side_meta_out = !right_side_meta_out;
        document.querySelector("#sidebar-right-meta").classList.toggle("collapsed");
        document.querySelector("#sidebar-down").classList.toggle("collapsed-right-meta");
        document.querySelector("#btn-down").classList.toggle("collapsed");
    }
}
