$.ajax({
    url: "data.json", 
    dataType: "json"
})
.success(function (data) {
    console.log(data);
})

.error(function (err) {
    console.error(err);
})