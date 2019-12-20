$(document).ready(function () {



    function renderLastRegistered() {
        // var description = localStorage.getItem(".description");
        var description = $(this).prev().val()


        if (description === null) {
            return;
        }

        $(".description").textContent = description


    }


    $(".saveBtn").click(function (event) {

        var description = $(this).prev().val()
        console.log(this)
        console.log(description)
        event.preventDefault();


        if (description === "") {
            displayMessage("error empty");
        }
        else {


            localStorage.setItem("description", description);

            renderLastRegistered();
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