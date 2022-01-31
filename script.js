
const isAllButttonsOpen = () => {
    if ($(".icons").length === 3) 
        $(".button-forth").css("visibility", "visible");
}

const onClick1 = () => {
    let firstIcon = $("<img/>").attr("src", "bang.png").addClass("icons animate__animated animate__rubberBand");
    $(".button-first").html(firstIcon).css({"top": "220px", "left": "170px"});
    isAllButttonsOpen();
}

const onClick2 = () => {
    let secondIcon = $("<img/>").attr("src", "boom.png").addClass("icons animate__animated animate__wobble");
    $(".button-second").html(secondIcon).css({"top": "80px", "left": "550px"});
    isAllButttonsOpen();
}

const onClick3 = () => {
    let thirdIcon = $("<img/>").attr("src", "wow.png").addClass("icons animate__animated animate__heartBeat");
    $(".button-third").html(thirdIcon).css({"top": "300px", "left": "880px"});
    isAllButttonsOpen();
}

const onClick4 = () => {
    $(".suprise").html("Have a nice Day!").css("visibility", "visible").addClass("animate__animated animate__bounceInDown");
    $(".button-forth").css("visibility", "hidden");
}
