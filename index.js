function check() {
    alert(x);
    alert(y);
    alert(z);
    alert(n);
    alert(l);
}



function btn() {


    let x1 = $('#x').val();;
    let y1 = $('#y').val();;
    let h1 = $('#h').val();;
    let n1 = $('#n').val();;
    let l1 = $('#l').val();;

    let x = Number(x1);
    let y = Number(y1);
    let h = Number(h1);
    let n = Number(n1);
    let l = Number(l1);

    let room = document.getElementById("room");

    let widthres = x * 100;
    let heightres = y * 100;
    room.style.width = widthres + 'px';
    room.style.height = heightres + 'px';


    $('#desc-w').html(x);
    $('#desc-h').html(y);


    function higtlight(square, height){
        let k;

        if (height <= 2.7){
            k = 1;
        } 
        if (height >= 2.8 && height <= 3){
            k = 1.2;
        }
        if (height >= 3.1 && height <= 3.5){
            k = 1.5;
        }
        if (height > 3.6) {
            k = 2;
        }
        
        /// 300 это нормативное значение освещенности
        return 300 * square * k;
    }

    s = x * y;
    $('#res-s').html(s); //площадь
    $('#res-o').html(higtlight(s, h)); //Необходимая освещенность помещения
    $('#reslampa').html(higtlight(s, h) / l);




    // ________________________________________________________//

    $('#kolvovat').html(Math.round((higtlight(s, h) / 100) / l)); //для светодиодных  для 1 лампы
    $('#vats').html(Math.round(higtlight(s, h) / 100)); //для светодиодных  для всех ламп

    // ________________________________________________________//



    // ________________________________________________________//

    $('#kolvovat2').html(Math.round((higtlight(s, h) / 40) / l)); //для Люминесцентные  для 1 лампы
    $('#vats2').html(Math.round(higtlight(s, h) / 40)); //для Люминесцентные  для всех ламп

    // ________________________________________________________//


    // ________________________________________________________//

    $('#kolvovat3').html(Math.round((higtlight(s, h) / 10) / l)); //для накаливания   для 1 лампы
    $('#vats3').html(Math.round(higtlight(s, h) / 10)); //для накаливания   для всех ламп

    // ________________________________________________________//


    $('#lampas').html(l);
    $('#lampas2').html(l);
    $('#lampas3').html(l);



}