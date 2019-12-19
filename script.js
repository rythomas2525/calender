$(document).ready(function () {

    $(".saveBtn").on("click", function () {
        console.log("you clicked a button")
    })


    function hoursUpdater() {

        var currentHour = moment().hours();

        $(".time-block").each(function () {

            var blockHour = parseInt($(this).attr("id").split("-")[1])

            if (blockHour < currentHour) {
                $(this.children[1]).addClass("past")
            } else if (blockHour > currentHour) {
                $(this.children[1]).addClass("future")

            } else {
                $(this.children[1]).addClass("present")

            }

        })


    }

    console.log("document is ready");

    hoursUpdater()

    var interval = setInterval(hoursUpdater, 150000);

})