const panels = document.querySelectorAll('.panel');

for(i=0; i<panels.length; i++){
    panels[i].addEventListener('click', function activate(){
        deactivate();
        this.classList.add('active');
    });
}

function deactivate(){
    for(i=0; i<panels.length; i++){
        panels[i].classList.remove('active');
    }
}