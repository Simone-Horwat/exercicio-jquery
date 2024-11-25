$(document).ready(function() {
    const form = $('#form-tarefa'); 

    form.on('submit', function(e) {
        e.preventDefault();

        const nometarefa = $('#nome-tarefa').val();  
        console.log(nometarefa);

        if (nometarefa) {
            
            const novoItem = $('<li></li>').text(nometarefa);

            
            $('ul').append(novoItem);

            
            $('#nome-tarefa').val('');

            // Adicionar o evento de riscar quando o item é clicado
            $(novoItem).on('click', function() {
                $(this).toggleClass('riscado');
            });
        }
    });
});
