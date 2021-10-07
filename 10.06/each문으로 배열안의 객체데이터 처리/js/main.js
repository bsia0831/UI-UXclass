const linkData = [
    {
        text: "네이버",
        url: "http://www.naver.com"
    },
    {
        text: "네이트",
        url: "http://www.nate.com"
    },
    {
        text: "구글",
        url: "http://www.google.com"
    }
];

$("body").append("<ul>");

$(linkData).each(function (index, data) {
    $("ul")
    .append(
        $("<li>")
        .append(
            $("<a>")
                .attr({ href : data.url})
                .text(data.text)
        )
    )
});