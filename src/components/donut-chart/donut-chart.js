const segments = $(".donut-chart__segment");
const firstSegmentOffset = parseInt($(segments[0]).attr("stroke-dashoffset"));
let preSegmentsTotalLength = $(segments[0]).data("per");

for (let i = 0; i < segments.length; i++) {
    let percent = $(segments[i]).data("per");
    let strokeDasharray = `${percent} ${100 - percent}`;
    $(segments[i]).css("stroke-dasharray", strokeDasharray);

    if (i != 0) {
        let strokeDashoffset = `${100 - preSegmentsTotalLength + firstSegmentOffset}`;
        $(segments[i]).css("stroke-dashoffset", strokeDashoffset);
        preSegmentsTotalLength += percent;
    }
}
