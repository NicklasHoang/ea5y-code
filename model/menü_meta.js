cooldown_time_meta = 1000;
document.querySelector("#btn-down").classList.toggle("collapsed");

//rechte Seite
cooldown_right_meta = false;
right_side_meta_click = true;
right_side_meta_out = true;

toggler = document.getElementById("btn-right");
toggler.addEventListener('click', toggleRechteSeite);
toggler.addEventListener('mouseover', toggleRechteSeite);

toggler = document.getElementById("sidebar-right-meta");
toggler.addEventListener("mouseleave",toggleRechteSeite);

toggler = document.getElementById("btn-div-right");
toggler.addEventListener('mouseover', toggleRechteSeite);
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

    if(!right_side_meta_click && !cooldown_right_meta){
        cooldown_right_meta = true;

        right_side_meta_out = !right_side_meta_out;
        document.querySelector("#sidebar-right-meta").classList.toggle("collapsed");
        document.querySelector("#sidebar-down").classList.toggle("collapsed-right-meta");
        document.querySelector("#btn-down").classList.toggle("collapsed");

        console.log(Event.type);
        setTimeout(() => {
            cooldown_right_meta = false;
            console.log('Cooldown ist abgelaufen.');
        }, cooldown_time_meta);
    }
}
