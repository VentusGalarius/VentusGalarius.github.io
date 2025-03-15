$(document).ready(function () {
    let activeOrder = false;
    // Список слов, которые хотим «печатать» и «стирать»
    const words = ["безопасность", "удобно", "кошелек звёзд"];

    // Настройки скоростей
    const typingSpeed = 100;      // скорость печати (мс на символ)
    const erasingSpeed = 50;      // скорость стирания (мс на символ)
    const delayBetweenWords = 1000; // пауза между словами (в мс) перед стиранием

    let wordIndex = 0;            // индекс слова из массива
    let charIndex = 0;            // индекс символа в слове

    const $typingElement = $("#typing"); // элемент, куда будет происходить печать

    function typeWord() {
        const currentWord = words[wordIndex];

        // добавляем по одному символу
        if (charIndex < currentWord.length) {
            $typingElement.text($typingElement.text() + currentWord.charAt(charIndex));
            charIndex++;
            setTimeout(typeWord, typingSpeed);
        } else {
            // Закончили печатать слово, небольшая пауза - и начинаем стирать
            setTimeout(eraseWord, delayBetweenWords);
        }
    }

    function eraseWord() {
        const currentWord = words[wordIndex];

        if (charIndex > 0) {
            // удаляем по одному символу с конца
            $typingElement.text(currentWord.substring(0, charIndex - 1));
            charIndex--;
            setTimeout(eraseWord, erasingSpeed);
        } else {
            // закончили стирать, переходим к следующему слову
            wordIndex = (wordIndex + 1) % words.length;  // переключаем индекс (по кругу)
            setTimeout(typeWord, 500); // небольшая пауза перед печатью следующего слова
        }
    }

    // Стартуем печать при загрузке страницы
    setTimeout(typeWord, 500);

    $(".btn_s_go_pay").on("click", function(){
        if(activeOrder){
            return; 
        }
        activeOrder = true;
        let btn = $(this);
        btn.css("opacity", "0.5")
        $.ajax({
            type: "POST",
            url: "/api/create_payment",
            data: {
                stars: $("._s_start_value").val(),
                username: $("._s_acc_value").val(),
                type: 'web'
            },
            success: function (result) {
                if(result.result){
                    window.location.href = result.message;
                }else{
                    activeOrder = false;
                    btn.css("opacity", "1")
                    alert(result.message)
                }
            },
            dataType: "json"
        })
    });

    $('._s_start_value').on('input', function () {
        let val = $(this).val();
        val = val.replace(/[^0-9.,]/g, '');
        val = val.replace(/,/g, '.');
        val = val.replace(/(\..*)\./g, '$1');

        if(val > 1000000){
            val = 1000000;
        }

        $(this).val(val);
    });
});


function openModal(){
    $("._s_modal").css('display', "flex");
}
function closeModal(){
    $("._s_modal").hide()
}
