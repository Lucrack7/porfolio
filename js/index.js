// Funcion que carga las animaciones
function cargarAnimaciones(){
    $(function(){
        $('.chart1').easyPieChart({
            size: 160,
            barColor: '#D4AF37',
            scaleLength: 0,
            lineWidth: 15,
            tackColor: '#525151',
            lineCap: 'circle',
            animate: 2000,
        });
        $('.chart2').easyPieChart({
            size: 160,
            barColor: '#D4AF37',
            scaleLength: 0,
            lineWidth: 15,
            tackColor: '#525151',
            lineCap: 'circle',
            animate: 2000,
        });
        $('.chart3').easyPieChart({
            size: 160,
            barColor: '#D4AF37',
            scaleLength: 0,
            lineWidth: 15,
            tackColor: '#525151',
            lineCap: 'circle',
            animate: 2000,
        });
        $('.chart4').easyPieChart({
            size: 160,
            barColor: '#D4AF37',
            scaleLength: 0,
            lineWidth: 15,
            tackColor: '#525151',
            lineCap: 'circle',
            animate: 2000,
        });
        $('.chart5').easyPieChart({
            size: 160,
            barColor: '#D4AF37',
            scaleLength: 0,
            lineWidth: 15,
            tackColor: '#525151',
            lineCap: 'circle',
            animate: 2000,
        });
        $('.chart6').easyPieChart({
            size: 160,
            barColor: '#D4AF37',
            scaleLength: 0,
            lineWidth: 15,
            tackColor: '#525151',
            lineCap: 'circle',
            animate: 2000,
        });
    })
}

// Funcion para filtrar las categorias de los trabajos
function verCategoria(cat){
    const items = document.getElementsByClassName('item');
    for(let i=0; i < items.length;i++){
        items[i].style.display = 'none';
    }

    const itemCat = document.getElementsByClassName(cat);
    for(let i = 0; i < itemCat.length;i++){
        itemCat[i].style.display = 'block';
    }

    const links = document.querySelectorAll('.trabajos nav a');
    links[0].className = '';
    links[1].className = '';
    links[2].className = '';
    links[3].className = '';

    const itemSeleccionado = document.getElementById(cat);
    itemSeleccionado.className = 'borde';
}

// Funcion que detecta cuando lanzar la animacion de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById('habilidades');
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName('chart');
        habilidades[0].classList.add('chart1');
        habilidades[1].classList.add('chart2');
        habilidades[2].classList.add('chart3');
        habilidades[3].classList.add('chart4');
        habilidades[4].classList.add('chart5');
        habilidades[5].classList.add('chart6');

        cargarAnimaciones();
    }
}

// Detencion el scrolling para aplicar la animacion de las habilidades
window.onscroll = function(){
    efectoHabilidades();
}

// function que muestra el menu responsive
function responsiveMenu(){
    let x = document.getElementById('nav');
    if(x.className===''){
        x.className = 'responsive';

        // creamos el elemento que cierra el menu
        let span = document.createElement('span');
        span.innerHTML = 'X';
        document.getElementById('nav').appendChild(span);

        // quita el boton eliminar cuando se hace click sobre el
        span.onclick = function(){
            x.className = '';
            span.remove();
        }
    }else{
        x.className='';
    }
}


// este codigo elimina el menu responsive cuando se hace click sobre algun Element
const links = document.querySelectorAll('#nav a');
for(i=0; i < links.length;i++){
    links[i].onclick = function(){
        var x = document.getElementById('nav');
        x.className = '';

        // removemos el boton eliminar
        btnEliminar = document.querySelector('#nav span');
        btnEliminar.remove();
    }
}