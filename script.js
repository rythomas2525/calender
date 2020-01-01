$(document).ready(function () {


    // this will pull from local storage
    $(".saveBtn").each(function () {
        var item = localStorage.getItem("description" + $(this).data("number"))
        $(this).prev().val(item)
    })



    $(".saveBtn").click(function (event) {


        var description = $(this).prev().val()
        var dataNumber = $(this).data("number")
        console.log(dataNumber)
        event.preventDefault();


        if (description === "") {
            displayMessage("error empty");
        }
        else {


            localStorage.setItem("description" + $(this).data("number"), description);
            // localStorage.getItem("description", description)
            // renderLastRegistered();
        }


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