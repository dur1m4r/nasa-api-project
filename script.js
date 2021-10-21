$.getJSON("https://api.nasa.gov/planetary/apod?api_key=N3GRS37WJlutRoDEhwj4agqiWD1MbXmzX3joF3L6", function(data){
    $("#img").attr('src', data.url);
    $("#title").append(data.title+" ("+ data.date + ")");
    $("#copyright").append("By "+data.copyright);
    $("#explanation").append(data.explanation);
});

$(document).ready(function(){ 
    $("#datepicker").datepicker({
        format: 'yyyy-mm-dd',
        startDate: '2000-01-01',
        endDate: '0d',
        autoclose: true
    })
    .on("changeDate", function(e) {
        let pickedDate = $("#datepicker").val();
        console.log(pickedDate);
        $.getJSON("https://api.nasa.gov/planetary/apod?api_key=N3GRS37WJlutRoDEhwj4agqiWD1MbXmzX3joF3L6&date="+pickedDate, function(data){
            $("#img").attr('src', data.url);
            $("#title").text(data.title+" ("+ data.date + ")");
            $("#copyright").text("By "+data.copyright);
            $("#explanation").text(data.explanation);
        });
    });
});
    