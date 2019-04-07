
$(document).ready(function() {
    $('[data-tab]').click(function() {
        var target = $(this).attr('data-tab');
        var $dataTarget = $("[data-target$=" + target + "]");
        $('.circle').removeClass('active');
        $('.btn').removeClass('active');
        $('.select-plan').removeClass('active');
        $dataTarget.addClass('active');
    });
});

