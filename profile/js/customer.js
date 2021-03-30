$(document).ready(function() {

    // CLEAR THE DATE
  //  $('#mainMenu #clearDate').click(function(e) {
        // don't allow the anchor to visit the link
    //     e.preventDefault();
    //     $("#s").html("Date to go here.");
    // });

    // CONTACT THE SERVER AND GET THE DATE FROM THE SERVER
//     $('#mainMenu #getDate').click(function(e) {

//         // don't allow the anchor to visit the link
//         e.preventDefault();
// //jQuery, $ format
//         $.ajax({
//             url: "/coffee-GET-list",
//             dataType: "json",
//             type: "GET",
//             success: function(data) {
//                 $("#p1").text(data['msg']);
//                 console.log("SUCCESS:", data);

//             },
//             error: function(jqXHR, textStatus, errorThrown) {
//                 $("#p1").text(jqXHR.statusText);
//                 console.log("ERROR:", jqXHR, textStatus, errorThrown);
//             }

//         });
//     });

    // INTENTIONALLY GET A 404 FROM THE SERVER
    // $('#mainMenu #getBadURL').click(function(e) {

    //     // don't allow the anchor to visit the link
    //     e.preventDefault();

    //     $.ajax({
    //         url: "/ajax-GET-SOMETHING-THAT-DOESNT-EXIST",
    //         dataType: "json",
    //         type: "GET",
    //         success: function(data) {
    //             $("#p1").text(data['msg']);
    //             console.log("SUCCESS:", data);

    //         },
    //         error: function(jqXHR, textStatus, errorThrown) {
    //             $("#p1").text(jqXHR.statusText);
    //             console.log("ERROR:", jqXHR, textStatus, errorThrown);
    //         },
    //         // handle a 404 (i.e., page not found)
    //         statusCode: {
    //             404: function() {
    //                 $("#p1").text("Page doesn't exist.");
    //             }
    //         }
    //     });
    // });

    // GET A LIST OF 'THINGS' FROM THE SERVER AS HTML DATA
    

    $('#getHotTe').click(function(e) {

        //eval("console.log('lolomg')");
        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/coffee-GET-list",
            dataType: "html",
            type: "GET",
            data: { format: "hottea-list" },
            success: function(data) {
                console.log("SUCCESS HTML:", data);
                $(".HotTe").html(data);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#s").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

            
        });
    });

    
    $('#getloafJ').click(function(e) {

        //eval("console.log('lolomg')");
        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/coffee-GET-list",
            dataType: "json",
            type: "GET",
            data: { format: "getloafJSON" },
            success: function(data) {
                //console.log("SUCCESS COURSES IN JSON:", data);
                let t2 = "<table>";
                for(let i = 0; i < data.length; i++) {
                    //console.log(data[i]['name']);
                    //console.log(data[i].credits);
                    if(i==0){
                        t2 += "<tr><th>" + data[i]['name'] + "</th><th>"
                        + data[i]['Calories'] + "</th><th>" + data[i]['Fat'] + "</th><th>"
                        + data[i]['Cholesterol'] + "</th><th>" + data[i]['Sodium'] 
                        + "</th><th>" + data[i]['Ingredients'] + "</th></tr>";
                    } else {
                        t2 += "<tr><th>" + data[i]['name'] + "</th><td>"
                      + data[i]['Calories'] + "</td><td>" + data[i]['Fat'] + "</td><td>"
                      + data[i]['Cholesterol'] + "</td><td>" + data[i]['Sodium'] 
                      + "</td><td>" + data[i]['Ingredients'] + "</td></tr>";
                    }
                    
                }
                t2 += "</table>";
                var div = $(".loafJ");
                div.html(t2);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#s").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });


    $('#getpepperJ').click(function(e) {

        //eval("console.log('lolomg')");
        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/coffee-GET-list",
            dataType: "json",
            type: "GET",
            data: { format: "getpepperJSON" },
            success: function(data) {
                //console.log("SUCCESS COURSES IN JSON:", data);
                let t2 = "<table>";
                for(let i = 0; i < data.length; i++) {
                    //console.log(data[i]['name']);
                    //console.log(data[i].credits);
                    t2 += "<tr><td>" + data[i]['name'] + "</td><td>"
                      + data[i]['Calories'] + "</td><td>" + data[i]['Fat'] 
                      + data[i]['Cholesterol'] + "</td><td>" + data[i]['Sodium'] 
                      + "</td><td>" + data[i]['Ingredients'] + "</td></tr>";
                }
                t2 += "</table>";
                var div = $(".pepperJ");
                div.html(t2);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#s").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });

    $('#getpopJ').click(function(e) {

        //eval("console.log('lolomg')");
        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/coffee-GET-list",
            dataType: "json",
            type: "GET",
            data: { format: "getpopJSON" },
            success: function(data) {
                //console.log("SUCCESS COURSES IN JSON:", data);
                let t2 = "<table>";
                for(let i = 0; i < data.length; i++) {
                    //console.log(data[i]['name']);
                    //console.log(data[i].credits);
                    t2 += "<tr><td>" + data[i]['name'] + "</td><td>"
                      + data[i]['Calories'] + "</td><td>" + data[i]['Fat'] 
                      + data[i]['Cholesterol'] + "</td><td>" + data[i]['Sodium'] 
                      +"</td></tr>";
                }
                t2 += "</table>";
                var div = $(".popJ");
                div.html(t2);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#s").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });



    // GET A LIST OF 'THINGS' FROM THE SERVER AS JSON DATA
   
    // PERFORM A HTTP POST, AND GET A RESPONSE FROM THE SERVER
    $('#submit').click(function(e) {
        let formData = { firstName: $("#firstName").val(),
                         lastName: $("#lastName").val(),
                         email: $("#email").val()
                       };
        console.log("Form data to send:", formData);
        $.ajax({
            url: "/post-form",
            dataType: "json",
            type: "POST",
            data: formData,
            success: function(data) {
                console.log("SUCCESS JSON:", data);
                // how do we know what we are getting?
                $("#p2").html(data[0] + " " + data[1]['firstName']
                              + " " + data[1]['lastName']
                              + " " + data[1]['email']
                             );

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p2").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });

});
