$(function () {
    $('.J_focus ul li:first').show(0)
    var count = 0
    $('.slider_control_next').click(function () {
        count++
        if(count === $(".fs_col2 li").length){
            count = 0
        }
        console.log(count)
        $(".fs_col2 li").eq(count).fadeIn().siblings("li").fadeOut()
    })

    $(".slider_control_prev").click(function () {
        count--;

        if(count === -1){
            count = $(".fs_col2 li").length - 1;
        }
        $(".fs_col2 li").eq(count).fadeIn().siblings("li").fadeOut();
    })
})