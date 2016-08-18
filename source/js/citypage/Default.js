$(document).ready(function () {
    //var dd = $('.vticker').easyTicker({
    //    direction: 'up',
    //    easing: 'easeInOutBack',
    //    speed: 'slow',
    //    interval: 4000,
    //    height: 500,
    //    visible: 1,
    //    mousePause: 0,
    //    controls: {
    //        up: '.up',
    //        down: '.down',
    //        toggle: '.toggle',
    //        stopText: 'Stop !!!'
    //    }
    //}).data('easyTicker');

    cc = 1;

    $("#Individual").prop("checked", true);
});

$(document).ready(function () {

    $('.form-control').on("keydown", function (event) {
        if (event.keyCode == 13) {

            event.preventDefault();
        }
    });


    $(".allownumericwithoutdecimal").on("keydown", function (event) {
        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 || event.keyCode == 188
            // Allow: Ctrl+A
    (event.keyCode == 65 && event.ctrlKey === true) ||

            // Allow: home, end, left, right
    (event.keyCode >= 35 && event.keyCode <= 45)) {
            // let it happen, don't do anything
            return;
        } else {
            // Ensure that it is a number and stop the keypress
            if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                event.preventDefault();
            }
        }
    });

    $("#ContentPlaceHolder1_txtLocation").blur(function () {

        if ($("#ContentPlaceHolder1_txtLocation").val() == "") {
            //$("#ContentPlaceHolder1_txtLocation").css({ "border-color": "red" });
        }
        else {
            //$("#ContentPlaceHolder1_txtLocation").css({ "border-color": "" });
        }
    });
});
function RestrictSpace() {
    if (event.keyCode == 32) {
        return false;
    }
}
function alpha(e) {
    var k;
    document.all ? k = e.keyCode : k = e.which;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 );
}
function ValidateEmail(email) {
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return expr.test(email);
};

function showmodalpopup() {
    $("#popupdiv").dialog({
        title: "Message",
        width: 300,
        height: 150,
        modal: true,
        buttons: {
            Close: function () {
                $(this).dialog('close');
            }
        }
    });
};



$(document).ready(function () {

    $("#ContentPlaceHolder1_txtMobile").blur(function () {
        if (($("#ContentPlaceHolder1_txtMobile").val().length) == 10) {
            $("#ContentPlaceHolder1_txtMobile").css({ "border-color": "" });

        }
        else {
            $("#ContentPlaceHolder1_txtMobile").css({ "border-color": "red" });

        }
    });

    $("#ContentPlaceHolder1_txtQuery").blur(function () {
        if ($("#ContentPlaceHolder1_txtQuery").val() == "") {
            $("#ContentPlaceHolder1_txtQuery").css({ "border-color": "red" });
        }
        else {
            $("#ContentPlaceHolder1_txtQuery").css({ "border-color": "" });
        }
    });


    $("#ContentPlaceHolder1_TextBox2").blur(function () {
        if (!ValidateEmail($("#ContentPlaceHolder1_TextBox2").val())) {
            $("#ContentPlaceHolder1_lblErrorEmail").text("Please Enter Email");

            $("#ContentPlaceHolder1_TextBox2").css({ 'border-color': 'red' });

            return false;
        }
        else {
            $("#ContentPlaceHolder1_lblErrorEmail").text("");
            $("#ContentPlaceHolder1_TextBox2").css({ 'border-color': '' });

        }
    });
    $("#ContentPlaceHolder1_txtMobile").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
            // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
    $("#ContentPlaceHolder1_TextBox1").blur(function () {
        if ($("#ContentPlaceHolder1_TextBox1").val() == "") {

            $("#ContentPlaceHolder1_lblErrorName").text("Please Enter Name");
            $("#ContentPlaceHolder1_TextBox1").css({ "border-color": "red" });
        }
        else {
            $("#ContentPlaceHolder1_lblErrorName").text("");
            $("#ContentPlaceHolder1_TextBox1").css({ "border-color": "" });
        }
    });

    $("#ContentPlaceHolder1_txtMaxArea").blur(function () {
        if (($("#ContentPlaceHolder1_txtMaxArea").val() != "")) {
            if ((parseInt($("#ContentPlaceHolder1_txtMaxArea").val())) <= (parseInt($("#ContentPlaceHolder1_txtMinArea").val()))) {
                $("#MaxAreaError").text("Max greater than Min");
                $("#ContentPlaceHolder1_txtMaxArea").css({ 'border-color': 'red' });
                $("#ContentPlaceHolder1_txtMaxArea").val('');
            }
            else {
                $("#MaxAreaError").text("");
                $("#ContentPlaceHolder1_txtMaxArea").css({ 'border-color': '' });
            }
        
        }
    });

    $("#ContentPlaceHolder1_txtMinArea").blur(function () {
        if (($("#ContentPlaceHolder1_txtMaxArea").val() != "")) {
            if ((parseInt($("#ContentPlaceHolder1_txtMaxArea").val())) <= (parseInt($("#ContentPlaceHolder1_txtMinArea").val()))) {
                $("#MaxAreaError").text("Max greater than Min");
                $("#ContentPlaceHolder1_txtMaxArea").css({ 'border-color': 'red' });
                $("#ContentPlaceHolder1_txtMaxArea").val('');
            }
            else {
                $("#MaxAreaError").text("");
                $("#ContentPlaceHolder1_txtMaxArea").css({ 'border-color': '' });
            }

        }
    });


    $("#ContentPlaceHolder1_txtMaxAreaProject").blur(function () {
        if (($("#ContentPlaceHolder1_txtMinAreaProject").val() != "")) {
            if ((parseInt($("#ContentPlaceHolder1_txtMaxAreaProject").val())) <= (parseInt($("#ContentPlaceHolder1_txtMinAreaProject").val()))) {
                $("#ErrorMaxAreaProject").text("Max greater than Min");
                $("#ContentPlaceHolder1_txtMaxAreaProject").css({ 'border-color': 'red' });
                $("#ContentPlaceHolder1_txtMaxAreaProject").val('');
            }
            else {
                $("#ErrorMaxAreaProject").text("");
                $("#ContentPlaceHolder1_txtMaxAreaProject").css({ 'border-color': '' });
            }

        }
    });

    $("#ContentPlaceHolder1_txtMinAreaProject").blur(function () {
        if (($("#ContentPlaceHolder1_txtMaxAreaProject").val() != "")) {
            if ((parseInt($("#ContentPlaceHolder1_txtMaxAreaProject").val())) <= (parseInt($("#ContentPlaceHolder1_txtMinAreaProject").val()))) {
                $("#ErrorMaxAreaProject").text("Max greater than Min");
                $("#ContentPlaceHolder1_txtMaxAreaProject").css({ 'border-color': 'red' });
                $("#ContentPlaceHolder1_txtMaxAreaProject").val('');
            }
            else {
                $("#ErrorMaxAreaProject").text("");
                $("#ContentPlaceHolder1_txtMaxAreaProject").css({ 'border-color': '' });
            }

        }
    });

    $("#ContentPlaceHolder1_txtMaxAreaCommercial").blur(function () {
        if (($("#ContentPlaceHolder1_txtMinAreaCommercial").val() != "")) {
            if ((parseInt($("#ContentPlaceHolder1_txtMaxAreaCommercial").val())) <= (parseInt($("#ContentPlaceHolder1_txtMinAreaCommercial").val()))) {
                $("#ErrorAreaCommercial").text("Max greater than Min");
                $("#ContentPlaceHolder1_txtMaxAreaCommercial").css({ 'border-color': 'red' });
                $("#ContentPlaceHolder1_txtMaxAreaCommercial").val('');
            }
            else {
                $("#ErrorAreaCommercial").text("");
                $("#ContentPlaceHolder1_txtMaxAreaCommercial").css({ 'border-color': '' });
            }

        }
    });

    $("#ContentPlaceHolder1_txtMinAreaCommercial").blur(function () {
        if (($("#ContentPlaceHolder1_txtMaxAreaCommercial").val() != "")) {
            if ((parseInt($("#ContentPlaceHolder1_txtMaxAreaCommercial").val())) <= (parseInt($("#ContentPlaceHolder1_txtMinAreaCommercial").val()))) {
                $("#ErrorAreaCommercial").text("Max greater than Min");
                $("#ContentPlaceHolder1_txtMaxAreaCommercial").css({ 'border-color': 'red' });
                $("#ContentPlaceHolder1_txtMaxAreaCommercial").val('');
            }
            else {
                $("#ErrorAreaCommercial").text("");
                $("#ContentPlaceHolder1_txtMaxAreaCommercial").css({ 'border-color': '' });
            }

        }
    });


    $("#ContentPlaceHolder1_txtMaxAreaR").blur(function () {
        if (($("#ContentPlaceHolder1_txtMaxAreaR").val() != "")) {
            if ((parseInt($("#ContentPlaceHolder1_txtMaxAreaR").val())) <= (parseInt($("#ContentPlaceHolder1_txtMinAreaR").val()))) {
                $("#RMaxAreaError").text("Max greater than Min");
                $("#ContentPlaceHolder1_txtMaxAreaR").css({ 'border-color': 'red' });
                $("#ContentPlaceHolder1_txtMaxAreaR").val('');
            }
            else {
                $("#RMaxAreaError").text("");
                $("#ContentPlaceHolder1_txtMaxAreaR").css({ 'border-color': '' });
            }

        }
    });

    $("#ContentPlaceHolder1_txtMinAreaR").blur(function () {
        if (($("#ContentPlaceHolder1_txtMaxAreaR").val() != "")) {
            if ((parseInt($("#ContentPlaceHolder1_txtMaxAreaR").val())) <= (parseInt($("#ContentPlaceHolder1_txtMinAreaR").val()))) {
                $("#RMaxAreaError").text("Max greater than Min");
                $("#ContentPlaceHolder1_txtMaxAreaR").css({ 'border-color': 'red' });
                $("#ContentPlaceHolder1_txtMaxAreaR").val('');
            }
            else {
                $("#RMaxAreaError").text("");
                $("#ContentPlaceHolder1_txtMaxAreaR").css({ 'border-color': '' });
            }

        }
    });


    $(".allownumericwithoutdecimal").on("keydown", function (event) {
        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
            // Allow: Ctrl+A
    (event.keyCode == 65 && event.ctrlKey === true) ||

            // Allow: home, end, left, right
    (event.keyCode >= 35 && event.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        } else {
            // Ensure that it is a number and stop the keypress
            if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                event.preventDefault();
            }
        }
        //$(this).val($(this).val().replace(/[^\d].+/, ""));

        //if ((event.which < 48 || event.which > 57)) {
        //    event.preventDefault();
        //}
    });

});

$(document).ready(function () {

    $(document).mouseup(function (e) {

        var container = $("#checkboxes");
        var containerMob = $("#checkboxesMob");
      
        if ($("#ContentPlaceHolder1_checkboxclose").text() == "1") {
            if (container.has(e.target).length === 0) {

                checkboxes.style.display = "none";

                $("#ContentPlaceHolder1_checkboxclose1").text("1");
                $("#ContentPlaceHolder1_checkboxclose").text("0");
                expanded = false;
              
            }

        }
        else {
            $("#ContentPlaceHolder1_checkboxclose").text("0");
            $("#ContentPlaceHolder1_checkboxclose1").text("0");
        }

        if ($("#ContentPlaceHolder1_checkboxclose2").text() == "1") {
            if (container.has(e.target).length === 0) {

                checkboxes.style.display = "none";

                $("#ContentPlaceHolder1_checkboxclose3").text("1");
                $("#ContentPlaceHolder1_checkboxclose2").text("0");
                expanded = false;

            }

        }
        else {
            $("#ContentPlaceHolder1_checkboxclose2").text("0");
            $("#ContentPlaceHolder1_checkboxclose3").text("0");
        }

    });
    $(document).mouseup(function (e) {
        var container = $("#checkboxes1");
        
        if (container.has(e.target).length === 0) {
            $("#checkboxes1").css({ "display": "none" });

            return false;
        }

    });

    $(document).mouseup(function (e) {
        var container = $("#checkboxesCommercial");

        if (container.has(e.target).length === 0) {
            $("#checkboxesCommercial").css({ "display": "none" });

            return false;
        }

    });
});

var expanded = false;
function showCheckboxes() {
   
   
    if ($("#ContentPlaceHolder1_checkboxclose1").text() == "1") {
     
        $("#checkboxes").hide();
        $("#ContentPlaceHolder1_checkboxclose").text("0");
        $("#ContentPlaceHolder1_checkboxclose1").text("0");
    }
    else if ($("#ContentPlaceHolder1_checkboxclose").text() == "0") {
        $("#checkboxes").show();
        $("#ContentPlaceHolder1_checkboxclose").text("1");
       
    }
    else {
        $("#checkboxes").hide();
        $("#ContentPlaceHolder1_checkboxclose").text("0");
        $("#ContentPlaceHolder1_checkboxclose1").text("0");
    }

    //alert($("#ContentPlaceHolder1_checkboxclose3").text());
    //alert($("#ContentPlaceHolder1_checkboxclose2").text());    
    if ($("#ContentPlaceHolder1_checkboxclose3").text() == "1") {

        $("#checkboxesMob").hide();
        $("#ContentPlaceHolder1_checkboxclose2").text("0");
        $("#ContentPlaceHolder1_checkboxclose3").text("0");
    }
    else if ($("#ContentPlaceHolder1_checkboxclose2").text() == "0") {        
        $("#checkboxesMob").show();
        $("#ContentPlaceHolder1_checkboxclose2").text("1");

    }
    else {        
        $("#checkboxesMob").hide();
        $("#ContentPlaceHolder1_checkboxclose2").text("0");
        $("#ContentPlaceHolder1_checkboxclose3").text("0");
    }
   
}
function showCheckboxes1() {

    var checkboxes = document.getElementById("checkboxes1");
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;

    }
}

function showCheckboxesCommercial() {

    var checkboxes = document.getElementById("checkboxesCommercial");
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;

    }
}

function DisableMaxBudBuy() {
    $("#ContentPlaceHolder1_ddlMaxBudgetType").prop({
        disabled: true
    });
}

function EnableMaxBudBuy() {
    $("#ContentPlaceHolder1_ddlMaxBudgetType").prop({
        disabled: false
    });
}

function DisableMaxBudProject() {
    $("#ContentPlaceHolder1_ddlMaxBudgetProject").prop({
        disabled: true
    });
}

function EnableMaxBudProject() {
    $("#ContentPlaceHolder1_ddlMaxBudgetProject").prop({
        disabled: false
    });
}

function DisableMaxBudRent() {
    $("#ContentPlaceHolder1_ddlMaxBudR").prop({
        disabled: true
    });
}

function EnableMaxBudRent() {
    $("#ContentPlaceHolder1_ddlMaxBudR").prop({
        disabled: false
    });
}

function DisableMaxBudCommercial() {
    $("#ContentPlaceHolder1_ddlMaxBudgetCommercial").prop({
        disabled: true
    });
}

function EnableMaxBudCommercial() {
    $("#ContentPlaceHolder1_ddlMaxBudgetCommercial").prop({
        disabled: false
    });
}

//AP-20152904-Modified below function to validate property type dropdown select one categary at a time and enable/disable bedrooms dropdown
$(document).ready(function () {
    var selected = "";
    var cnt = "";
    var selectedMob = "";
    var cntMob = "";
    $(".chkPropertytype").change(function () {
        //$("#ddlPropertyType").css({ "width": "180%" });
        var cntMob = "";
        if ($(".chkPropertytype").is(":checked")) {
            
            if ($(".chkResProp").is(":checked")) {
                $('#ContentPlaceHolder1_HDPropertyGroup').val("Residential");
                selected = $(".chkPropertytype:checked:first").next('span').text();
                cnt = $(".chkPropertytype:checked").size();
                //cnt = cnt - 9;
                $(".chkResProp").prop({
                    disabled: false
                });
                $(".chkComrProp").prop({
                    disabled: true
                });
                $("#ContentPlaceHolder1_ddlBeds").prop({
                    disabled: false
                });
                $("#ContentPlaceHolder1_ddlBedsR").prop({
                    disabled: false
                });
            }
            if ($(".chkComrProp").is(":checked")) {
                $('#ContentPlaceHolder1_HDPropertyGroup').val("Commercial");
                selected = $(".chkPropertytype:checked:first").next('span').text();
                cnt = $(".chkPropertytype:checked").size();
                //cnt = cnt - 15;
                $(".chkResProp").prop({
                    disabled: true
                });
                //alert($(".btn").data('id'));
                //alert( $("#ContentPlaceHolder1_ddlBeds").next('span').val());
                $(".chkComrProp").prop({
                    disabled: false
                });
                $("#ContentPlaceHolder1_ddlBeds").prop({
                    disabled: true
                });
                $("#ContentPlaceHolder1_ddlBedsR").prop({
                    disabled: true
                });
            }
            
           
            if (cnt > 1) {
                $('#ddlPropertyType').children('option:first').text(selected + "+" + (cnt - 1));
                //$('#ddlPropertyTypeR').children('option:first').text(selected + "+" + (cnt - 1));
               
            }
            else {
                $('#ContentPlaceHolder1_HDPropertyType').val(selected);
                $('#ddlPropertyType').children('option:first').text(selected);
                //$('#ddlPropertyTypeR').children('option:first').text(selected);
               
            }

           


          
            $("#ddlPropertyType").css({ "border-color": "" });
            $("#errorPropertyTypeMob").text("");
           
         
        }
        else {
            $(".chkComrProp").prop({
                disabled: false
            });
           
            $(".chkResProp").prop({
                disabled: false
            });
           
            $("#ContentPlaceHolder1_ddlBedsR").prop({
                disabled: false
            });
            $("#ContentPlaceHolder1_ddlBeds").prop({
                disabled: false
            });
           
            $("#errorPropertyType").text("Enter Property Type");
            $('#ddlPropertyType').children('option:first').text("Property Type");
         
            //$('#ddlPropertyTypeR').children('option:first').text("Property Type");
            $("#ddlPropertyType").css({ "border-color": "red" });
            //$("#ddlPropertyType").css({ "width": "180%" });
            return false;
        }


    });

    $(".chkPropertytypeCommercial").change(function () {
        //$("#ddlPropertyType").css({ "width": "180%" });
        if ($(".chkPropertytypeCommercial").is(":checked")) {
            $('#ContentPlaceHolder1_HDPropertyGroup').val("Commercial");
            selected = $(".chkPropertytypeCommercial:checked:first").next('span').text();
            cnt = $(".chkPropertytypeCommercial:checked").size();
          
            if (cnt > 1) {
                $('#ddlPropertyTypeCommercial').children('option:first').text(selected + "+" + (cnt - 1));
            }
            else {
                $('#ContentPlaceHolder1_HDPropertyType').val(selected);
                $('#ddlPropertyTypeCommercial').children('option:first').text(selected);
            }
            $("#ddlPropertyTypeCommercial").css({ "border-color": "" });
            $("#errorPropertyTypeCommercial").text("");


        }
        else {

            $("#errorPropertyTypeCommercial").text("Enter Property Type");
            $('#ddlPropertyTypeCommercial').children('option:first').text("Property Type");
            $("#ddlPropertyTypeCommercial").css({ "border-color": "red" });
            //$("#ddlPropertyType").css({ "width": "180%" });
            return false;
        }

    });

    $(".chkPropertytypeR").change(function () {
        if ($(".chkPropertytypeR").is(":checked")) {

            if ($(".chkResPropR").is(":checked")) {
                $('#ContentPlaceHolder1_HDPropertyGroup').val("Residential");
                selected = $(".chkPropertytypeR:checked:first").next('span').text();
                cnt = $(".chkPropertytypeR:checked").size();
                //cnt = cnt - 9;
                $(".chkResPropR").prop({
                    disabled: false
                });
                $(".chkComrPropR").prop({
                    disabled: true
                });

                $("#ContentPlaceHolder1_ddlBedsR").prop({
                    disabled: false
                });
            }
            if ($(".chkComrPropR").is(":checked")) {
                $('#ContentPlaceHolder1_HDPropertyGroup').val("Commercial");
                selected = $(".chkPropertytypeR:checked:first").next('span').text();
                cnt = $(".chkPropertytypeR:checked").size();
                //cnt = cnt - 15;
                $(".chkResPropR").prop({
                    disabled: true
                });
                //alert($(".btn").data('id'));
                //alert( $("#ContentPlaceHolder1_ddlBeds").next('span').val());
                $(".chkComrPropR").prop({
                    disabled: false
                });

                $("#ContentPlaceHolder1_ddlBedsR").prop({
                    disabled: true
                });
            }
        }
        else {
            $(".chkComrPropR").prop({
                disabled: false
            });
           
            $(".chkResPropR").prop({
                disabled: false
            });
           
            $("#ContentPlaceHolder1_ddlBedsR").prop({
                disabled: false
            });
         
            $('#ddlPropertyTypeR').children('option:first').text("Property Type");
            $("#ddlPropertyTypeR").css({ "border-color": "red" });
        
            return false;
        }

        if (cnt > 1) {

            $('#ddlPropertyTypeR').children('option:first').text(selected + "+" + (cnt - 1));

        }
        else {
            $('#ContentPlaceHolder1_HDPropertyType').val(selected);

            $('#ddlPropertyTypeR').children('option:first').text(selected);

        }


    });

    $(".chkPropertytypeMob").change(function () {
        cntMob = "";
        if ($(".chkPropertytypeMob").is(":checked")) {

            if ($(".chkResPropMob").is(":checked")) {
                $('#ContentPlaceHolder1_HDPropertyGroup').val("Residential");
                selectedMob = $(".chkPropertytypeMob:checked:first").next('span').text();
                cntMob = $(".chkPropertytypeMob:checked").size();

                $(".chkResPropMob").prop({
                    disabled: false
                });
                $(".chkComrPropMob").prop({
                    disabled: true
                });
            }
            if ($(".chkComrPropMob").is(":checked")) {
                $('#ContentPlaceHolder1_HDPropertyGroup').val("Commercial");
                selectedMob = $(".chkPropertytypeMob:checked:first").next('span').text();
                cntMob = $(".chkPropertytypeMob:checked").size();

                $(".chkResPropMob").prop({
                    disabled: true
                });
                //alert($(".btn").data('id'));
                //alert( $("#ContentPlaceHolder1_ddlBeds").next('span').val());
                $(".chkComrPropMob").prop({
                    disabled: false
                });
            }

        }
        else {
            $(".chkComrPropMob").prop({
                disabled: false
            });

            $(".chkResPropMob").prop({
                disabled: false
            });

            $('#ddlPropertyTypeMob').children('option:first').text("Property Type");
            $("#ddlPropertyTypeMob").css({ "border-color": "red" });

            return false;
        }

        if (cntMob > 1) {

            $('#ddlPropertyTypeMob').children('option:first').text(selectedMob + "+" + (cntMob - 1));

        }
        else {
            $('#ContentPlaceHolder1_HDPropertyTypeMob').val(selectedMob);

            $('#ddlPropertyTypeMob').children('option:first').text(selectedMob);

        }
    });



    $("#commercial *").attr("enabled", "enabled").on('click');
    $("#ContentPlaceHolder1_submit").click(function () {
        if ($("#ContentPlaceHolder1_txtLocation").val() == "" || $("#ContentPlaceHolder1_HDLocationId").val() == "") {

            $("#ContentPlaceHolder1_txtLocation").css({ 'border-color': 'red' });
            $("#ErrorMessage").text("Invalid Location");
            $("#ErrorMessage").css({ "color": "red" });
           
        }
        if ($(".chkPropertytype").is(":checked")) {
            $("#ddlPropertyType").css({ "border-color": "" });
            $("#errorPropertyType").text("");
        }
        else {
            $("#ddlPropertyType").css({ "border-color": "red" });
            $("#errorPropertyType").text("Enter Property Type");
            return false;
            
        }

        if (($("#ContentPlaceHolder1_txtMaxArea").val() != "")) {
            if ((parseInt($("#ContentPlaceHolder1_txtMaxArea").val())) <= (parseInt($("#ContentPlaceHolder1_txtMinArea").val()))) {
                $("#MaxAreaError").text("Max greater than Min");
                $("#ContentPlaceHolder1_txtMaxArea").css({ 'border-color': 'red' });
                $("#ContentPlaceHolder1_txtMaxArea").val('');
            }
            else {
                $("#MaxAreaError").text("");
                $("#ContentPlaceHolder1_txtMaxArea").css({ 'border-color': '' });
            }

        }

        if (!$(".chkPropertytype").is(":checked")) {
            return false;
        }
        else 
            if ($("#ContentPlaceHolder1_txtLocation").val() == "" || $("#ContentPlaceHolder1_HDLocationId").val() == "") {
                return false;
            }

    });

   

    $("#ContentPlaceHolder1_btnProject").click(function () {
        var i = "0";
        if ($("#ContentPlaceHolder1_txtLocationProject").val() == "" || $("#ContentPlaceHolder1_txtLocationProject").val() == "LOCATIONS" || $("#ContentPlaceHolder1_txtLocationProject").val() == "PROJECTS") {
            $("#ContentPlaceHolder1_txtLocationProject").css({ 'border-color': 'red' });
            $("#ErrorLocationProject").text("Invalid Location");
            $("#ErrorLocationProject").css({ "color": "red" });
            i = "1";
        }

        if ($("#ContentPlaceHolder1_HDLocationId").val() == "" && $("#ContentPlaceHolder1_hdnProjectCode").val() == "")
        {
            $("#ContentPlaceHolder1_txtLocationProject").css({ 'border-color': 'red' });
            $("#ErrorLocationProject").text("Invalid Location");
            $("#ErrorLocationProject").css({ "color": "red" });
            i = "1";
        }

        if (($("#ContentPlaceHolder1_txtMaxAreaProject").val() != "")) {
            if ((parseInt($("#ContentPlaceHolder1_txtMaxAreaProject").val())) <= (parseInt($("#ContentPlaceHolder1_txtMinAreaProject").val()))) {
                $("#ErrorMaxAreaProject").text("Max greater than Min");
                $("#ContentPlaceHolder1_txtMaxAreaProject").css({ 'border-color': 'red' });
                $("#ContentPlaceHolder1_txtMaxAreaProject").val('');
                i = "1";
            }
            else {
                $("#ErrorMaxAreaProject").text("");
                $("#ContentPlaceHolder1_txtMaxAreaProject").css({ 'border-color': '' });
            }

        }

        if (i == "1") {
            return false;
        }
        else {
            return true;
        }

    });

    $("#ContentPlaceHolder1_SubmitR").click(function () {
        if ($("#ContentPlaceHolder1_txtLocationR").val() == "" || $("#ContentPlaceHolder1_HDLocationId").val() == "") {

            $("#ContentPlaceHolder1_txtLocationR").css({ 'border-color': 'red' });
            $("#ErrorLocationR").text("Invalid Location");
            $("#ErrorLocationR").css({ "color": "red" });
        }
        if ($("#ddlPropertyTypeR").val()!="Property Type") {
            $("#ddlPropertyTypeR").css({ "border-color": "" });
            $("#errorPropertyTypeR").text("");
        }
        else {
            $("#ddlPropertyTypeR").css({ "border-color": "red" });
            $("#errorPropertyTypeR").text("Enter Property Type");
            return false;

        }

        if (($("#ContentPlaceHolder1_txtMaxAreaR").val() != "")) {
            if ((parseInt($("#ContentPlaceHolder1_txtMaxAreaR").val())) <= (parseInt($("#ContentPlaceHolder1_txtMinAreaR").val()))) {
                $("#RMaxAreaError").text("Max greater than Min");
                $("#ContentPlaceHolder1_txtMaxAreaR").css({ 'border-color': 'red' });
                $("#ContentPlaceHolder1_txtMaxAreaR").val('');
            }
            else {
                $("#RMaxAreaError").text("");
                $("#ContentPlaceHolder1_txtMaxAreaR").css({ 'border-color': '' });
            }

        }

        if ($("#ddlPropertyTypeR").val() == "Property Type") {
            return false;
        }
        else
            if ($("#ContentPlaceHolder1_txtLocationR").val() == "" || $("#ContentPlaceHolder1_HDLocationId").val() == "") {
                return false;
            }

    });

    $("#ContentPlaceHolder1_btnSubmitCommercial").click(function () {
        var flag = "0";
        if ($("#ContentPlaceHolder1_txtLocationCommercial").val() == "" || $("#ContentPlaceHolder1_HDLocationId").val() == "") {

            $("#ContentPlaceHolder1_txtLocationCommercial").css({ 'border-color': 'red' });
            $("#ErrorLocationCommercial").text("Invalid Location");
            $("#ErrorLocationCommercial").css({ "color": "red" });
            flag = "1";
        }
        if ($("#ddlPropertyTypeCommercial").val() != "Property Type") {
            $("#ddlPropertyTypeCommercial").css({ "border-color": "" });
            $("#errorPropertyTypeCommercial").text("");
        }
        else {
            $("#ddlPropertyTypeCommercial").css({ "border-color": "red" });
            $("#errorPropertyTypeCommercial").text("Enter Property Type");
            flag = "1";

        }

        if (($("#ContentPlaceHolder1_txtMaxAreaCommercial").val() != "")) {
            if ((parseInt($("#ContentPlaceHolder1_txtMaxAreaCommercial").val())) <= (parseInt($("#ContentPlaceHolder1_txtMinAreaCommercial").val()))) {
                $("#ErrorAreaCommercial").text("Max greater than Min");
                $("#ContentPlaceHolder1_txtMaxAreaCommercial").css({ 'border-color': 'red' });
                $("#ContentPlaceHolder1_txtMaxAreaCommercial").val('');
                flag = "1";
            }
            else {
                $("#ErrorAreaCommercial").text("");
                $("#ContentPlaceHolder1_txtMaxAreaCommercial").css({ 'border-color': '' });
            }

        }

        if (flag == "1")
        {
            return false;
        }

    });

    $("#ContentPlaceHolder1_btnDealers").click(function () {
        var flag = "0";
        if ($("#ContentPlaceHolder1_txtLocationDealer").val() == "" || $("#ContentPlaceHolder1_HDLocationId").val() == "") {

            $("#ContentPlaceHolder1_txtLocationDealer").css({ 'border-color': 'red' });
            $("#ErrorLocationDealer").text("Invalid Location");
            $("#ErrorLocationDealer").css({ "color": "red" });
            flag = "1";
        }

        if (flag == "1") {
            return false;
        }

    });

    $("#ContentPlaceHolder1_btnSearchMob").click(function () {
        var flag = "0";
        if ($("#ContentPlaceHolder1_ContentPlaceHolder1_txtLocationMob").val() == "" || $("#ContentPlaceHolder1_HDLocationId").val() == "") {

            $("#ContentPlaceHolder1_ContentPlaceHolder1_txtLocationMob").css({ 'border-color': 'red' });
            flag = "1";
        }
        if ($('#ddlPropertyTypeMob').children('option:first').text() == "Property Type") {
            $("#ddlPropertyTypeMob").css({ "border-color": "red" });
            flag = "1";
        }
        else {
            $("#ddlPropertyTypeMob").css({ "border-color": "" });
        }

        if (flag == "1") {
            return false;
        }

    });



    $("#ContentPlaceHolder1_txtMobileNo").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
            // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });

});
$(function () {
    $("#ContentPlaceHolder1_txtLocation").autocomplete({
        source: function (request, response) {
            var param = { Data: $('#ContentPlaceHolder1_txtLocation').val() };
            $.ajax({
                url: "DefaultOld.aspx/GetLocation",
                data: JSON.stringify(param),
                dataType: "json",
                type: "POST",
                contentType: "application/json; charset=utf-8",
                dataFilter: function (data) { return data; },
                success: function (data) {
                    if (data.d.length > 0) {
                        $("#ContentPlaceHolder1_txtLocation").css({ "border-color": "" });
                        $("#ErrorMessage").text("");
                        response($.map(data.d, function (item) {
                            return {
                                label: item.split('|')[0],
                                val: item.split('|')[1]

                            }
                        }))
                    }
                    else {
                        $("#ContentPlaceHolder1_txtLocation").css({ "border-color": "red" });
                        $("#ErrorMessage").text("Invalid Location");
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    var err = eval("(" + XMLHttpRequest.responseText + ")");
                    //alert(err.Message)

                }
            });
        },

        select: function (e, i) {
            $("#ContentPlaceHolder1_HDLocationId").val("");
            $("#ContentPlaceHolder1_HDLocationId").val(i.item.val);
        },
        minLength: 3
    });
});
$(function () {
    $("#ContentPlaceHolder1_txtLocationR").autocomplete({
        source: function (request, response) {
            var param = { Data: $('#ContentPlaceHolder1_txtLocationR').val() };
            $.ajax({
                url: "DefaultOld.aspx/GetLocation",
                data: JSON.stringify(param),
                dataType: "json",
                type: "POST",
                contentType: "application/json; charset=utf-8",
                dataFilter: function (data) { return data; },
                success: function (data) {
                    if (data.d.length > 0) {
                       
                        $("#ContentPlaceHolder1_txtLocationR").css({ "border-color": "" });
                        $("#ErrorLocationR").text("");
                        response($.map(data.d, function (item) {
                            return {
                                label: item.split('|')[0],
                                val: item.split('|')[1]

                            }
                        }))
                    }
                    else {
                        $("#ContentPlaceHolder1_txtLocationR").css({ "border-color": "red" });
                        $("#ErrorLocationR").text("Invalid Location");
                       
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    var err = eval("(" + XMLHttpRequest.responseText + ")");
                    //alert(err.Message)

                }
            });
        },

        select: function (e, i) {

            $("#ContentPlaceHolder1_HDLocationId").val(i.item.val);
        },
        minLength: 3
    });
});
$(function () {
    $("#ContentPlaceHolder1_txtLocationProject").autocomplete({
        source: function (request, response) {
            var param = { Data: $('#ContentPlaceHolder1_txtLocationProject').val() };
            $.ajax({
                url: "WebMethodCommon.aspx/GetLocation",
                data: JSON.stringify(param),
                dataType: "json",
                type: "POST",
                contentType: "application/json; charset=utf-8",
                dataFilter: function (data) { return data; },
                success: function (data) {
                    if (data.d.length > 0) {
                        $("#ContentPlaceHolder1_txtLocationProject").css({ "border-color": "" });
                        $("#ErrorMessage").text("");
                        response($.map(data.d, function (item) {
                            return {
                                label: item.split('|')[0],
                                val: item.split('|')[1]

                            }
                        }))
                    }
                    else {
                        $("#ContentPlaceHolder1_txtLocationProject").css({ "border-color": "red" });
                        $("#ErrorMessage").text("Invalid Location");
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    var err = eval("(" + XMLHttpRequest.responseText + ")");
                    //alert(err.Message)

                }
            });
        },

        select: function (e, i) {
            $("#ContentPlaceHolder1_HDLocationId").val("");
            $("#ContentPlaceHolder1_hdnProjectCode").val("");
            var code = i.item.val;
            if (code.substring(0, 2) == "LO") {
                $("#ContentPlaceHolder1_HDLocationId").val(i.item.val);
               
            }
            else {
                $("#ContentPlaceHolder1_hdnProjectCode").val(i.item.val);
                            
            }

            
        },
        minLength: 3
    });
});
$(function () {
    $("#ContentPlaceHolder1_txtLocationCommercial").autocomplete({
        source: function (request, response) {
            var param = { Data: $('#ContentPlaceHolder1_txtLocationCommercial').val() };
            $.ajax({
                url: "DefaultOld.aspx/GetLocation",
                data: JSON.stringify(param),
                dataType: "json",
                type: "POST",
                contentType: "application/json; charset=utf-8",
                dataFilter: function (data) { return data; },
                success: function (data) {
                    if (data.d.length > 0) {
                        $("#ContentPlaceHolder1_txtLocationCommercial").css({ "border-color": "" });
                        $("#ErrorLocationCommercial").text("");
                        response($.map(data.d, function (item) {
                            return {
                                label: item.split('|')[0],
                                val: item.split('|')[1]

                            }
                        }))
                    }
                    else {
                        $("#ContentPlaceHolder1_txtLocationCommercial").css({ "border-color": "red" });
                        $("#ErrorLocationCommercial").text("Invalid Location");
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    var err = eval("(" + XMLHttpRequest.responseText + ")");
                    //alert(err.Message)

                }
            });
        },

        select: function (e, i) {
            $("#ContentPlaceHolder1_HDLocationId").val("");
            $("#ContentPlaceHolder1_HDLocationId").val(i.item.val);
        },
        minLength: 3
    });
});

$(function () {
    $("#ContentPlaceHolder1_txtLocationDealer").autocomplete({
        source: function (request, response) {
            var param = { Data: $('#ContentPlaceHolder1_txtLocationDealer').val() };
            $.ajax({
                url: "DefaultOld.aspx/GetLocation",
                data: JSON.stringify(param),
                dataType: "json",
                type: "POST",
                contentType: "application/json; charset=utf-8",
                dataFilter: function (data) { return data; },
                success: function (data) {
                    if (data.d.length > 0) {
                        $("#ContentPlaceHolder1_txtLocationDealer").css({ "border-color": "" });
                        $("#ErrorLocationDealer").text("");
                        response($.map(data.d, function (item) {
                            return {
                                label: item.split('|')[0],
                                val: item.split('|')[1]

                            }
                        }))
                    }
                    else {
                        $("#ContentPlaceHolder1_txtLocationDealer").css({ "border-color": "red" });
                        $("#ErrorLocationDealer").text("Invalid Location");
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    var err = eval("(" + XMLHttpRequest.responseText + ")");
                    //alert(err.Message)

                }
            });
        },

        select: function (e, i) {
            $("#ContentPlaceHolder1_HDLocationId").val("");
            $("#ContentPlaceHolder1_HDLocationId").val(i.item.val);
        },
        minLength: 3
    });
});


function RestrictSpace() {
    if (event.keyCode == 32) {
        return false;
    }
}

$(document).ready(function () {
  
    $("#Details").hide();

    $(".allownumericwithoutdecimal").on("keypress keyup blur", function (event) {
        $(this).val($(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
    });

    function ValidateEmail(email) {
        var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return expr.test(email);
    };
    //AP-20153004-Modified to save proper query code
    $(document).ready(function () {
        $("#ContentPlaceHolder1_btnSubmitAdv").click(function () {
            var i = "0";
            if ($("#ContentPlaceHolder1_Textarea1").val() == "") {

                $("#ContentPlaceHolder1_Textarea1").css({ 'border-color': 'red' });
                i = "1";
            }
            else {

                $("#ContentPlaceHolder1_Textarea1").css({ 'border-color': '' });
            }

            if ($("#ContentPlaceHolder1_TextBox1").val() == "") {
                $("#ContentPlaceHolder1_lblErrorName").text("Please Enter Name");
                $("#ContentPlaceHolder1_TextBox1").css({ 'border-color': 'red' });
                i = "1";
            }
            else {
                $("#ContentPlaceHolder1_lblErrorName").text("");
                $("#ContentPlaceHolder1_TextBox1").css({ 'border-color': '' });

            }
            if ($("#ContentPlaceHolder1_TextBox2").val() == "") {
                $("#ContentPlaceHolder1_lblErrorEmail").text("Please Enter Email");
                $("#ContentPlaceHolder1_TextBox2").css({ 'border-color': 'red' });
                i = "1";
            }
            else {
                $("#ContentPlaceHolder1_lblErrorEmail").text("");
                $("#ContentPlaceHolder1_TextBox2").css({ 'border-color': '' });
            }
            if ($("#ContentPlaceHolder1_txtMobileNo").val() == "") {
                $("#ContentPlaceHolder1_lblErrorMobileNo").text("Please Enter Mobile No.");
                $("#ContentPlaceHolder1_txtMobileNo").css({ 'border-color': 'red' });
                i = "1";
            }
            else {
                if ($("#ContentPlaceHolder1_txtMobileNo").val() != "") {
                    var mob = /^[1-9]{1}[0-9]{9}$/;

                    if (mob.test($.trim($("#ContentPlaceHolder1_txtMobileNo").val())) == false) {
                        $("#ContentPlaceHolder1_lblErrorMobileNo").text("Please Enter valid Mobile No.");
                        $("#ContentPlaceHolder1_txtMobileNo").css({ 'border-color': 'red' });
                        i = "1";

                    }
                    else {
                        $("#ContentPlaceHolder1_lblErrorMobileNo").text("");
                        $("#ContentPlaceHolder1_txtMobileNo").css({ 'border-color': '' });
                    }
                }

            }

            if ($("#ContentPlaceHolder1_TextBox2").val() != "") {
                if (!ValidateEmail($("#ContentPlaceHolder1_TextBox2").val())) {

                    $("#ContentPlaceHolder1_lblErrorEmail").text("Please Enter Valid Email Id")
                    $("#ContentPlaceHolder1_TextBox2").css({ 'border-color': 'red' });
                    i = "1";


                }
                else {

                    $("#ContentPlaceHolder1_txtEmail").css({ 'border-color': '' });
                    $("#ContentPlaceHolder1_lblErrorEmail").text("");
                }
            }

            if (i == "1")
            {
                return false;
            }
            else{

                var isAllow
                if ($('#ContentPlaceHolder1_chkHPAllow').is(":checked")) {
                    isAllow = true;
                }
                else {
                    isAllow = false;
                }
                var isLoan
                if ($('#ContentPlaceHolder1_chkloan').is(":checked")) {
                    isLoan = true;
                }
                else {
                    isLoan = false;
                }
                var CUSTTYPE1 = "";

                if ($("#Individual").is(':checked') == true) {

                    CUSTTYPE1 = "MISC00029";
                }
                else {
                    CUSTTYPE1 = "MISC00017";
                }
                var QueryType
                if ($("#header").text() == "Interested in the Project? Please fill in your details below ") {
                    QueryType = "MISC00028"
                }
                else {
                    QueryType = "MISC00033"
                }
          
                var param = {
                    PropertyCode: $("#txtProjectid").text(), CustomerName: $("#ContentPlaceHolder1_TextBox1").val(),
                    Mob: $("#ContentPlaceHolder1_txtMobileNo").val(),
                    EmailId: $("#ContentPlaceHolder1_TextBox2").val(), Message: $("#ContentPlaceHolder1_Textarea1").val(),
                    QueryTypecode: QueryType,
                    IsHI: isAllow, Loan: isLoan, CUSTTYPE: CUSTTYPE1, TabType: "AD SLIDER / VIEW DETAILS"
                };
            
                $.ajax({

                    url: "DefaultOld.aspx/InsertContactpro",

                    data: JSON.stringify(param),

                    dataType: "json",

                    type: "POST",

                    contentType: "application/json; charset=utf-8",

                    dataFilter: function (data) { return data; },

                    success: function (data) {
                  

                    }
                });
            }
                $("#contact").hide();
                $("#Details").show();

                return false;
            });
        

    });


    $("#ContentPlaceHolder1_btnSubmitCode").click(function () {
        if ($("#ContentPlaceHolder1_txtcode").val() != $("#ContentPlaceHolder1_hdVerificationCode").val()) {
            $("#ContentPlaceHolder1_lblwrongcode").text("Wrong code");
            $("#ContentPlaceHolder1_txtcode").css({ 'border-color': 'red' });
            return false;
        }
        else {
            $("#ContentPlaceHolder1_lblwrongcode").text("");
            $("#ContentPlaceHolder1_txtcode").css({ 'border-color': '' });
            
            var param = {
                code: $("#ContentPlaceHolder1_txtcode").val()
            };

            $.ajax({

                url: "DefaultOld.aspx/VerifiCode",

                data: JSON.stringify(param),

                dataType: "json",

                type: "POST",

                contentType: "application/json; charset=utf-8",

                dataFilter: function (data) { return data; },

                success: function (data) {
                    HideVerificationDialog(true);
                    ShowAskDialog(true);
                    e.preventDefault();

                }
            });

            return false;
        }
    });

    //AP-20152904-Modified code to save proper query code while saving ask now
    $("#btnSubmit").click(function () {
        var flag = "1";
       
        if ($("#ContentPlaceHolder1_txtMobile").val() == "") {
            $("#ContentPlaceHolder1_ErrorMobile").text("Please Enter Mobile No.");
            $("#ContentPlaceHolder1_txtMobile").css({ 'border-color': 'red' });
            flag = "0";
        }
        else {
            $("#ContentPlaceHolder1_ErrorMobile").text("");
            $("#ContentPlaceHolder1_txtMobile").css({ 'border-color': '' });
        }
        if ($("#ContentPlaceHolder1_txtMobile").val() != "") {
            $("#ContentPlaceHolder1_lblVerMobileNo").text($("#ContentPlaceHolder1_txtMobile").val());
            var mob = /^[1-9]{1}[0-9]{9}$/;

            if (mob.test($.trim($("#ContentPlaceHolder1_txtMobile").val())) == false) {
                $("#ContentPlaceHolder1_ErrorMobile").text("Please Enter valid Mobile No.");
                $("#ContentPlaceHolder1_txtMobile").css({ 'border-color': 'red' });
                flag = "0";

            }
            else {
                $("#ContentPlaceHolder1_ErrorMobile").text("");
                $("#ContentPlaceHolder1_txtMobile").css({ 'border-color': '' });
            }
        }


        if ($("#ContentPlaceHolder1_txtName").val() == "") {
            $("#ContentPlaceHolder1_Errorname").text("Please Enter Name");
            $("#ContentPlaceHolder1_txtName").css({ 'border-color': 'red' });
            flag = "0";
        }
        else {
            $("#ContentPlaceHolder1_Errorname").text("");
            $("#ContentPlaceHolder1_txtName").css({ 'border-color': '' });
        }

        if ($("#ContentPlaceHolder1_txtEmail").val() == "") {
            $("#ContentPlaceHolder1_ErrorEmail").text("Please Enter Email");
            $("#ContentPlaceHolder1_txtEmail").css({ 'border-color': 'red' });
            flag = "0";
        }
        else {
            $("#ContentPlaceHolder1_ErrorEmail").text("");
            $("#ContentPlaceHolder1_txtEmail").css({ 'border-color': '' });
        }

        if ($("#ContentPlaceHolder1_txtEmail").val() != "") {
            var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
            if (!expr.test($("#ContentPlaceHolder1_txtEmail").val())) {

                $("#ContentPlaceHolder1_ErrorEmail").text("Please Enter Valid Email Id")
                $("#ContentPlaceHolder1_txtEmail").css({ 'border-color': 'red' });

                flag = "0";
            }
            else {

                $("#ContentPlaceHolder1_txtEmail").css({ 'border-color': '' });
                $("#ContentPlaceHolder1_ErrorEmail").text("");
            }
        }

        if ($("#ContentPlaceHolder1_txtQuery").val() == "") {

            $("#ContentPlaceHolder1_txtQuery").css({ 'border-color': 'red' });
            $("#ContentPlaceHolder1_ErrorQuery").text("Please Enter query");
            flag = "0";
        }
        else {

            if ($("#ContentPlaceHolder1_txtQuery").val().length < 50) {
                $("#ContentPlaceHolder1_txtQuery").css({ 'border-color': 'red' });
                $("#ContentPlaceHolder1_ErrorQuery").text("Please Enter min 50 characters");
                flag = "0";
            }
            else {

                $("#ContentPlaceHolder1_ErrorQuery").text("");

                $("#ContentPlaceHolder1_txtQuery").css({ 'border-color': '' });
            }
        }
        
        if (flag == "0") {
            return false;
        }
        else {
           // ShowLoader(true);
            var type = "";
            if ($("#ContentPlaceHolder1_rdogenproperty").is(':checked') == true) {
                type = "MISC00023";
            }
            else if ($("#ContentPlaceHolder1_rdoLegal").is(':checked') == true) {
                type = "MISC00024";
            }
            else if ($("#ContentPlaceHolder1_rdocaretaker").is(':checked') == true) {
                type = "MISC00025";
            }
            else {
                type = "MISC00026";
            }
            var param = {
                Query: $("#ContentPlaceHolder1_txtQuery").val(), Mobile: $("#ContentPlaceHolder1_txtMobile").val(),
                Emailid: $("#ContentPlaceHolder1_txtEmail").val(), Name: $("#ContentPlaceHolder1_txtName").val(), type: type

            };

            $.ajax({

                url: "DefaultOld.aspx/SaveAsknow",

                data: JSON.stringify(param),

                dataType: "json",

                type: "POST",

                contentType: "application/json; charset=utf-8",

                dataFilter: function (data) { return data; },

                success: function (data) {
                    if (data.d != "0" && data.d != "Ask Now") {
                        $("#ContentPlaceHolder1_hdVerificationCode").val(data.d);
                       // HideLoader();
                        ShowVerificationDialog(true);
                    }
                    if (data.d == "Ask Now") {
                        //HideLoader();
                        ShowAskDialog(true);
                    }

                    $.ajax({
                        url: "DefaultOld.aspx/SendMail",

                        data: JSON.stringify(param),

                        dataType: "json",

                        type: "POST",

                        contentType: "application/json; charset=utf-8",

                        dataFilter: function (data) { return data; },

                        success: function (data) { }

                    });


                   
                    
                }

            });
            $("#btnSubmit1").click();
            $("#ContentPlaceHolder1_txtQuery").val("");
            $("#ContentPlaceHolder1_txtName").val("");
            $("#ContentPlaceHolder1_txtEmail").val("");
            $("#ContentPlaceHolder1_txtMobile").val("");
            return false;
        }
       
    });

    $("#ContentPlaceHolder1_txtName").blur(function () {
        if ($("#ContentPlaceHolder1_txtName").val() == "") {
            $("#ContentPlaceHolder1_Errorname").text("Please Enter Name");
            $("#ContentPlaceHolder1_txtName").css({ 'border-color': 'red' });
        }
        else {
            $("#ContentPlaceHolder1_Errorname").text("");
            $("#ContentPlaceHolder1_txtName").css({ 'border-color': '' });
        }
    });

    $("#ContentPlaceHolder1_txtEmail").blur(function () {
        if ($("#ContentPlaceHolder1_txtEmail").val() == "") {
            $("#ContentPlaceHolder1_ErrorEmail").text("Please Enter Email");
            $("#ContentPlaceHolder1_txtEmail").css({ 'border-color': 'red' });
        }
        else {
            $("#ContentPlaceHolder1_ErrorEmail").text("");
            $("#ContentPlaceHolder1_txtEmail").css({ 'border-color': '' });
        }
        if ($("#ContentPlaceHolder1_txtEmail").val() != "") {
            if (!ValidateEmail($("#ContentPlaceHolder1_txtEmail").val())) {

                $("#ContentPlaceHolder1_ErrorEmail").text("Please Enter Valid Email Id")
                $("#ContentPlaceHolder1_txtEmail").css({ 'border-color': 'red' });

                return false;
            }
            else {

                $("#ContentPlaceHolder1_txtEmail").css({ 'border-color': '' });
                $("#ContentPlaceHolder1_ErrorEmail").text("");
            }
        }
       

    });

    $("#ContentPlaceHolder1_txtQuery").blur(function () {
        if ($("#ContentPlaceHolder1_txtQuery").val() == "") {

            $("#ContentPlaceHolder1_txtQuery").css({ 'border-color': 'red' });
            $("#ContentPlaceHolder1_ErrorQuery").text("Please Enter query");

        }
        else {

            if ($("#ContentPlaceHolder1_txtQuery").val().length < 50) {
                $("#ContentPlaceHolder1_txtQuery").css({ 'border-color': 'red' });
                $("#ContentPlaceHolder1_ErrorQuery").text("Please Enter min 50 characters");
            }
            else {

                $("#ContentPlaceHolder1_ErrorQuery").text("");

                $("#ContentPlaceHolder1_txtQuery").css({ 'border-color': '' });
            }
        }
    });
    $("#ContentPlaceHolder1_txtMobile").blur(function () {
        if ($("#ContentPlaceHolder1_txtMobile").val() == "") {
            $("#ContentPlaceHolder1_ErrorMobile").text("Please Enter Mobile No.");
            $("#ContentPlaceHolder1_txtMobile").css({ 'border-color': 'red' });
        }
        else {
            $("#ContentPlaceHolder1_ErrorMobile").text("");
            $("#ContentPlaceHolder1_txtMobile").css({ 'border-color': '' });
        }
        if ($("#ContentPlaceHolder1_txtMobile").val() != "") {
            var mob = /^[1-9]{1}[0-9]{9}$/;

            if (mob.test($.trim($("#ContentPlaceHolder1_txtMobile").val())) == false) {
                $("#ContentPlaceHolder1_ErrorMobile").text("Please Enter valid Mobile No.");
                $("#ContentPlaceHolder1_txtMobile").css({ 'border-color': 'red' });

            }
            else {
                $("#ContentPlaceHolder1_ErrorMobile").text("");
                $("#ContentPlaceHolder1_txtMobile").css({ 'border-color': '' });
            }
        }
    });

});
$(document).ready(function () {

    //$("#ContentPlaceHolder1_ContentPlaceHolder1_txtLocationMob").click(function (e) {
      
    //  //  $(".search-categaory").addClass("s-c-active");
    //    $("#ContentPlaceHolder1_ContentPlaceHolder1_txtLocationMob").focus();
    //    $("div[data-Location-overlay]").toggleClass("hide");
        

    //});

    $("div[data-Location-overlay]").on("click", function () {
        $(".search-categaory").toggleClass("s-c-active");
        $("div[data-Location-overlay]").toggleClass("hide");
    });

    //$(".s_overlay").click(function (e) {
    //    $(".search-categaory").toggleClass("s-c-active");

    //});
    
    $("#btnSubmit1").click(function (e) {
            //$("#contact").hide();
            //$("#Details").show();
            //$(".MainHeading").text("Ask Expert");
            //$("#message1").text("Your Question is submitted successfully.");
            //$("#message2").text("You will soon received revert from");
            //$("#message3").text("hindustanproperty.com on your question.");
           
            //ShowAskDialog(true);
            //e.preventDefault();
        });
    
    

    $("#btnClose").click(function (e) {
        HideDialog();
        e.preventDefault();
       
    });

    $("#btnCloseAsk").click(function (e) {
        HideAskDialog();
        e.preventDefault();

    });

    $("#btnCloseNot").click(function (e) {
        HideNotFoundDialog();
        e.preventDefault();

    });

   

    $("#btnCancel").click(function (e) {
        HideDialog();
        e.preventDefault();
    });

    $("#overlay").click(function (e) {
        HideAskDialog();
        HideNotFoundDialog();
    });

   


});


$(document).keyup(function (e) {

    if (e.keyCode == 27) {
        HideAskDialog();
        HideNotFoundDialog();
    }   // escape key maps to keycode `27`
});

function ShowDialog(modal) {
    $("#overlay").show();
    $("#dialog").fadeIn(300);

    if (modal) {
        $("#overlay").unbind("click");
    }
    else {
        $("#overlay").click(function (e) {
            HideDialog();
        });
    }
}

function ShowAskDialog(modal) {
   
    $("#overlay").show();
    $("#dialog2").fadeIn(300);

    if (modal) {
        $("#overlay").bind("click");
    }
    else {
        $("#overlay").click(function (e) {
            HideAskDialog();
        });
    }
}

function ShowNotFoundDialog(modal) {

    $("#divNotFound").show();
    $("#dialogNot").fadeIn(300);

    if (modal) {
        $("#divNotFound").bind("click");
    }
    else {
        $("#divNotFound").click(function (e) {
            HideNotFoundDialog();
        });
    }
}

function HideAskDialog() {
    $("#overlay").hide();
    $("#dialog2").fadeOut(300);
}

function HideNotFoundDialog() {
    $("#divNotFound").hide();
    $("#dialogNot").fadeOut(300);
}


function HideDialog() {
    $("#overlay").hide();
    $("#dialog").fadeOut(300);
}

function ShowVerificationDialog(modal) {
    $("#overlay").show();
    $("#DivVerification").fadeIn(300);
}

function HideVerificationDialog() {
    $("#overlay").hide();
    $("#DivVerification").fadeOut(300);
}
function ShowLoader(modal) {
   
    $("#overlay").show();
    $("#divLoader").fadeIn(300);
}

function HideLoader() {
    $("#overlay").hide();
    $("#divLoader").fadeOut(300);
}


function openpopup1(ProjectName, type) {

    $(".sliderlink0").click();
    $(".Test").text(ProjectName);
    $(".Test").css({ "margin-left": "10px", "font-size": "15px" });
    $(".location").text(type);
    $(".location").css({ "font-size": "15px", "margin-left": "5px" });
}

function GetSliderImages(Propertyid, type, ProjectName) {
   
    var h = 0;
    for (h = 0; h < 25; h++) {

        $(".sliderlink" + h).removeAttr("href");
    }
    var i = 0;
    var param = { ID: Propertyid, Type: type };
    $.ajax({
        type: "POST",
        url: "DefaultOld.aspx/GetSliderImages",
        data: JSON.stringify(param),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: OnSuccess,
        failure: function (response) {
            alert(response.d);
        },
        error: function (response) {
            alert(response.d);
        }
    });


    function OnSuccess(response) {
        var xmlDoc = $.parseXML(response.d);
        var xml = $(xmlDoc);
        var customers = xml.find("Table");
        if (customers.text() != "") {

            customers.each(function () {
                var customer = $(this);
                $(".sliderlink" + i).attr("href", customer.find("Section_Image_Path").text());
                $(".sliderlink" + i).attr("data-rel='prettyPhoto[gallery]'");

                i++;

            });

            openpopup1(ProjectName, type);
        }
        else {
            ShowNotFoundDialog(true);
            //$('#mask-dialogBox').dialogBox({
            //    hasClose: true,
            //    hasMask: true,
            //    time: 3000,
            //    title: 'Sorry...',
            //    content: 'Image Not Available.'
            //});
        }

    }

}

$('.allowCharacters').keypress(function (event) {
    return isCharacters(event, this)
});

function isCharacters(evt, element) {
    //Add keycode 8 to allow backspace
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (
           (charCode != 32 || $(element).val().indexOf('-') != -1) &&      // “-” CHECK MINUS, AND ONLY ONE.               
           (charCode < 97 || charCode > 122) && (charCode < 65 || charCode > 90) && (charCode != 8) && (charCode != 9))
        return false;

    return true;
}


$(document).ready(function () {

    $("#divCommercial").hide();
    $("#divCommercialR").hide();
    $("#divCommercialMob").hide();
    $("#divArea").hide();
    $('#chkResidencial').attr('checked', true);
    $('#chkResidencialMob').attr('checked', true);
    $('#chkCommercialTab').attr('checked', true);
    //$('#ContentPlaceHolder1_HDPropertyGroup').val("Residencial");
    $(".projectClose").css("margin-left", "240px");
    //$('.chkResProp').attr('checked', true);
    //$('.chkResPropMob').attr('checked', true);
    if ($(window).width() < 1023) {
        $('.chkResPropMob').attr('checked', true);
        $(".chkPropertytypeMob").change();
    }
    else {
        $('.chkResProp').attr('checked', true);
        $(".chkPropertytype").change();
       
    }
   
    

    $("#chkResidencial").change(function () {
        //$("#ddlPropertyType").css({ "width": "180%" });
        if ($("#chkResidencial").is(":checked")) {
            $("#divResidential").show();
            $("#commercial").css({ "top": "255px" });
            $('#chkCommercial').attr('checked', false);
            $("#divCommercial").hide();
            $("#checkboxes").css({ "height": "280px" });
            $('.chkResProp').attr('checked', true);
            $('.chkComrProp').attr('checked', false);
            $(".chkPropertytype").change();

        }
        else {
            //$("#divResidential").hide();
            $("#divCommercial").hide();
            //$("#commercial").css({ "top": "28px" });
            //$("#checkboxes").css({ "height": "60px" });
            $("#commercial").css({ "top": "260px" });
            $("#checkboxes").css({ "height": "280px" });
            $('.chkResProp').attr('checked', false);
            $(".chkPropertytype").change();
        }
       
    });

    $("#chkCommercial").change(function () {
        //$("#ddlPropertyType").css({ "width": "180%" });
        if ($("#chkCommercial").is(":checked")) {

            $("#divCommercial").show();
            $("#divResidential").hide();
            $("#commercial").css({ "top": "28px" });
            $('#chkResidencial').attr('checked', false);
            $('.chkComrProp').attr('checked', true);
            $('.chkResProp').attr('checked', false);
            $("#checkboxes").css({ "height": "280px" });
        }
        else {
            $('.chkComrProp').attr('checked', false);
            //$("#divCommercial").hide();
            $("#divResidential").hide();
            $("#checkboxes").css({ "height": "280px" });
        }
        $(".chkPropertytype").change();
       ;
    });

    $("#chkResidentialR").change(function () {
        //$("#ddlPropertyType").css({ "width": "180%" });
        if ($("#chkResidentialR").is(":checked")) {

            $("#divResidentialR").show();
            $("#Div5").css({ "top": "255px" });
            $('#chkCommertialR').attr('checked', false);
            $('.chkComrPropR').attr('checked', false);
            $("#divCommercialR").hide();
            $("#checkboxes1").css({ "height": "280px" });
            $('.chkResPropR').attr('checked', true);
           
        }
        else {
            //$("#divResidentialR").hide();
            $("#divCommercialR").hide();
            $("#Div5").css({ "top": "260px" });
            $("#checkboxes1").css({ "height": "280px" });
            $('.chkResPropR').attr('checked', false);
          
        }
        $(".chkPropertytypeR").change();
    });

    $("#chkCommertialR").change(function () {
        //$("#ddlPropertyType").css({ "width": "180%" });
        if ($("#chkCommertialR").is(":checked")) {

            $("#divCommercialR").show();
            $("#divResidentialR").hide();
            $("#Div5").css({ "top": "28px" });
            $('#chkResidentialR').attr('checked', false);
            $("#checkboxes1").css({ "height": "280px" });
            $('.chkComrPropR').attr('checked', true);
            $('.chkResPropR').attr('checked', false);
        }
        else {
            //$("#divCommercialR").hide();
            $("#divResidentialR").hide();
            $("#checkboxes1").css({ "height": "280px" });
            $('.chkComrPropR').attr('checked', false);
            $("#chkResidencial").change();
        }
        $(".chkPropertytypeR").change();
    });


    $("#chkCommercialTab").change(function () {
        //$("#ddlPropertyType").css({ "width": "180%" });
        if ($("#chkCommercialTab").is(":checked")) {
            $('.chkComrPropCommercial').attr('checked', true);
        }
        else {
            $('.chkComrPropCommercial').attr('checked', false);
        }
        $(".chkPropertytypeCommercial").change();
    });

    $("#ContentPlaceHolder1_ddlProjectType").change(function () {
        if ($("#ContentPlaceHolder1_ddlProjectType").val() == 'PTYGR00001')
        {
            $("#divArea").hide();
            $("#divBed").show();
            $(".projectClose").css("margin-left", "240px");
        }
        if ($("#ContentPlaceHolder1_ddlProjectType").val() == 'PTYGR00002')
        {
            $("#divArea").show();
            $("#divBed").hide();
            $(".projectClose").css("margin-left", "75px");
        }
    });

    $("#Rent").hide();
    if ($.browser.mozilla) {
        $(".web_dialog").css("height", "80%");
    }

    // $(".ExtraSearch").hide();

    //$("#ContentPlaceHolder1_txtLocation").click(function (e) {
    //    $(".ExtraSearch").css("display", "block");
    //});

    //$("#ContentPlaceHolder1_txtLocationR").click(function (e) {
    //    $(".ExtraSearchR").css("display", "block");
    //});

    $("#btnCloseVerCode").click(function (e) {
        HideVerificationDialog();
        e.preventDefault();

    });

    $(".more a").on("click", function () {
        $(this).hide();
        $(".search-fild2").removeClass("hide");
        $(".search-bar").css({ "height": "170px" });
        return false;
    });
    // Search Close
    $(".search-close a").on("click", function () {
        $(".search-fild2").addClass("hide");
        $(".more a").show();
        $(".search-bar").removeAttr("style", "");
    });

    $("#liBuy").on("click", function () {
        $('#chkResidencial').attr('checked', true);
        $("#buy").show();
        $("#buy").removeClass("hide");
        $("#Rent").addClass("hide");
        $("#project").addClass("hide");
        $("#CommercialTab").addClass("hide");
        $("#liDealers").removeClass("active")
        $("#Dealers	").addClass("hide");
        $("#liBuy").addClass("active")
        $("#liRent").removeClass("active")
        $("#liProject").removeClass("active")
        $("#liCommercial").removeClass("active")
        $(".search-fild2").addClass("hide");
        $(".search-bar").removeAttr("style", "");
        $(".more a").show();
        $('#chkResidencial').change();
        //$('.chkResProp').attr('checked', true);
        //$('.chkComrProp').attr('checked', false);
        $(".chkPropertytype").change();
        $('#ddlPropertyTypeR').children('option:first').text("Property Type");
        $('.chkPropertytypeCommercial').prop('checked', false);
        ClearForProject();
    });
    $("#liRent").on("click", function () {
        $('#chkResidentialR').attr('checked', true);
        $("#buy").addClass("hide");
        $("#buy").removeClass("hidden-xs");
        $("#Rent").show();
        $("#Rent").removeClass("hide");
        $("#project").addClass("hide");
        $("#CommercialTab").addClass("hide");
        $("#liDealers").removeClass("active")
        $("#Dealers	").addClass("hide");
        $("#liRent").addClass("active")
        $("#liBuy").removeClass("active")
        $("#liProject").removeClass("active")
        $("#liCommercial").removeClass("active")
        $(".search-fild2").addClass("hide");
        $(".search-bar").removeAttr("style", "");
        $(".more a").show();
        $("#chkResidentialR").change();
        //$('.chkResProp').attr('checked', true);
        //$('.chkComrProp').attr('checked', false);
        //$(".chkPropertytype").change();
        $('#ddlPropertyType').children('option:first').text("Property Type");
        $('.chkPropertytypeCommercial').prop('checked', false);
        $(".chkPropertytypeR").change();
        ClearForProject();
    });
    $("#liProject").on("click", function () {
        $("#buy").addClass("hide");
        $("#buy").removeClass("hidden-xs");
        $("#Rent").addClass("hide");
        $("#CommercialTab").addClass("hide");
        $("#project").removeClass("hide");
        $("#project").show();
        $("#liDealers").removeClass("active")
        $("#liCommercial").removeClass("active")
        $("#Dealers	").addClass("hide");
        $("#liBuy").removeClass("active")
        $("#liRent").removeClass("active")
        $("#liProject").addClass("active")
        $(".search-fild2").addClass("hide");
        $(".search-bar").removeAttr("style", "");
        $(".more a").show();
        $('.chkPropertytypeCommercial').prop('checked', false);
        ClearForProject();
    });

    $("#liCommercial").on("click", function () {
        $("#buy").removeClass("hidden-xs");
        $("#buy").addClass("hide");
        $("#Rent").addClass("hide");
        $("#project").addClass("hide");
        $("#Dealers	").addClass("hide");
        $("#CommercialTab").removeClass("hide");
        $("#CommercialTab").show();
        $("#liBuy").removeClass("active")
        $("#liRent").removeClass("active")
        $("#liProject").removeClass("active")
        $("#liDealers").removeClass("active")
        $("#liCommercial").addClass("active")
        $(".search-fild2").addClass("hide");
        $(".search-bar").removeAttr("style", "");
        $(".more a").show();
        ClearForProject();
        $('.chkPropertytypeCommercial').attr('checked', true);
        $(".chkPropertytypeCommercial").change();
        
    });

    $("#liDealers").on("click", function () {
        $("#buy").removeClass("hidden-xs");
        $("#buy").addClass("hide");
        $("#Rent").addClass("hide");
        $("#project").addClass("hide");
        $("#CommercialTab").addClass("hide");
        $("#Dealers").removeClass("hide");
        $("#Dealers").show();
        $("#liBuy").removeClass("active")
        $("#liRent").removeClass("active")
        $("#liProject").removeClass("active")
        $("#liCommercial").removeClass("active")
        $("#liDealers").addClass("active")
        $(".search-fild2").addClass("hide");
        $(".search-bar").removeAttr("style", "");
        $(".more a").show();
        $('.chkPropertytypeCommercial').prop('checked', false);
        ClearForProject();

    });

    $("#chkResidencialMob").change(function () {
        //alert('2');
        //$("#ddlPropertyType").css({ "width": "180%" });
        if ($("#chkResidencialMob").is(":checked")) {
            //alert('res');
            $("#divResidentialMob").show();
            $("#commercialMob").css({ "top": "290px" });
            $('#chkCommercialMob').attr('checked', false);
            $("#divCommercialMob").hide();
            $("#checkboxesMob").css({ "height": "280px" });
            $('.chkResPropMob').attr('checked', true);
            $('.chkComrPropMob').attr('checked', false);
            $(".chkPropertytypeMob").change();

            $('#chkNewProjects').attr('checked', false);
            $('#chkDealers').attr('checked', false);

            $('#ddlType').removeAttr("disabled", "disabled");
            $('#ddlType').val('Buy');
            $('#ddlBudgetType').removeAttr("disabled", "disabled");
            $('#ddlBudgetType').val('Min Budget');
            $('#ddlMaxBudgetType').removeAttr("disabled", "disabled");
            $('#ddlMaxBudgetType').val('Max Budget');
        }
        else {

            //$("#divResidentialMob").hide();
            $("#divCommercialMob").hide();
            //$("#commercial").css({ "top": "28px" });
            $("#commercialMob").css({ "top": "290px" });
            //$("#checkboxes").css({ "height": "60px" });
            $("#checkboxesMob").css({ "height": "280px" });
            $('.chkResPropMob').attr('checked', false);
            $(".chkPropertytypeMob").change();
        }
    });

    $("#chkCommercialMob").change(function () {
        //$("#ddlPropertyType").css({ "width": "180%" });
        if ($("#chkCommercialMob").is(":checked")) {
            $("#divCommercialMob").show();
            $("#divResidentialMob").hide();
            //$("#commercial").css({ "top": "28px" });
            $("#commercialMob").css({ "top": "80px" });
            $('#chkResidencialMob').attr('checked', false);
            $('.chkResPropMob').attr('checked', false);
            $('.chkComrPropMob').attr('checked', true);
           
            $("#checkboxesMob").css({ "height": "280px" });

            $('#chkNewProjects').attr('checked', false);
            $('#chkDealers').attr('checked', false);

            $('#ddlType').removeAttr("disabled", "disabled");
            $('#ddlType').val('Buy');
            $('#ddlBudgetType').removeAttr("disabled", "disabled");
            $('#ddlBudgetType').val('Min Budget');
            $('#ddlMaxBudgetType').removeAttr("disabled", "disabled");
            $('#ddlMaxBudgetType').val('Max Budget');
        }
        else {
            $('.chkComrPropMob').attr('checked', false);
            //$("#divCommercialMob").hide();
            $("#divResidentialMob").hide();
            //$("#checkboxes").css({ "height": "60px" });
            $("#checkboxesMob").css({ "height": "280px" });
        }
        $(".chkPropertytypeMob").change();
        
    });

    $("#chkNewProjects").change(function () {
        if ($("#chkNewProjects").is(":checked")) {
            //alert('check projects');

            $('#chkCommercialMob').attr('checked', false);
            $('.chkComrPropMob').attr('checked', false);
            $("#divCommercialMob").hide();

            $('#chkResidencialMob').attr('checked', false);
            $('.chkResPropMob').attr('checked', false);
            $("#divResidentialMob").hide();
            //alert('new proj');
            $("#commercialMob").css({ "top": "80px" });
            $("#checkboxesMob").css({ "height": "110px" });

            $('#chkDealers').attr('checked', false);

            $('#ddlType').attr("disabled", "disabled");
            $('#ddlType').val('Buy');
            $('#ddlBudgetType').attr("disabled", "disabled");
            $('#ddlBudgetType').val('Min Budget');
            $('#ddlMaxBudgetType').attr("disabled", "disabled");
            $('#ddlMaxBudgetType').val('Max Budget');
            //$('#HDPropertyType').val('NEW PROJECTS');
            $('#ContentPlaceHolder1_HDPropertyGroup').val("NEW PROJECTS");

            //alert('2');
            $('#ddlPropertyTypeMob').children('option:first').text("New Projects");
            $("#ddlPropertyType").css({ "border-color": "" });
            $("#errorPropertyTypeMob").text("");
           
        }
        else {
            $('#ContentPlaceHolder1_HDPropertyGroup').val('');
            $('#ddlType').removeAttr("disabled", "disabled");
            $('#ddlBudgetType').removeAttr("disabled", "disabled");
            $('#ddlMaxBudgetType').removeAttr("disabled", "disabled");
            $("#ddlPropertyTypeMob").css({ "border-color": "red" });
            $("#errorPropertyTypeMob").text("Enter Property Type");
        }

    });

    $("#chkDealers").change(function () {
        if ($("#chkDealers").is(":checked")) {

            $('#chkCommercialMob').attr('checked', false);
            $('.chkComrPropMob').attr('checked', false);
            $("#divCommercialMob").hide();

            $('#chkResidencialMob').attr('checked', false);
            $('.chkResPropMob').attr('checked', false);
            $("#divResidentialMob").hide();
            //alert('new proj');
            $("#commercialMob").css({ "top": "80px" });
            $("#checkboxesMob").css({ "height": "110px" });

            $('#chkNewProjectsMob').attr('checked', false);

            $('#ddlType').attr("disabled", "disabled");
            $('#ddlType').val('Buy');
            $('#ddlBudgetType').attr("disabled", "disabled");
            $('#ddlBudgetType').val('Min Budget');
            $('#ddlMaxBudgetType').attr("disabled", "disabled");
            $('#ddlMaxBudgetType').val('Max Budget');

            $('#chkNewProjects').attr('checked', false);

            $('#ContentPlaceHolder1_HDPropertyGroup').val("PROPERTY DEALERS");
            $('#ddlPropertyTypeMob').children('option:first').text("Property Dealers");
            $("#ddlPropertyTypeMob").css({ "border-color": "" });
            $("#errorPropertyTypeMob").text("");
            
        }
        else {
            $('#ContentPlaceHolder1_HDPropertyGroup').val('');
            $('#ddlType').removeAttr("disabled", "disabled");
            $('#ddlType').val('Buy');
            $('#ddlBudgetType').removeAttr("disabled", "disabled");
            $('#ddlBudgetType').val('Min Budget');
            $('#ddlMaxBudgetType').removeAttr("disabled", "disabled");
            $('#ddlMaxBudgetType').val('Max Budget');
            $("#ddlPropertyTypeMob").css({ "border-color": "red" });
            $("#errorPropertyTypeMob").text("Enter Property Type");
        }

    });

    

});

function ClearForProject() {
    $("#ContentPlaceHolder1_txtLocation").val("");
    $("#ContentPlaceHolder1_ddlBudgetType").val("");
    $("#ContentPlaceHolder1_ddlMaxBudR").val("");
    $("#ContentPlaceHolder1_ddlMaxBudgetType").val("");
    $("#ContentPlaceHolder1_txtMinArea").val("");
    $("#ContentPlaceHolder1_txtMaxArea").val("");
    $("#ContentPlaceHolder1_ddlPostedBy").val("");
   // $('#ddlPropertyType').children('option:first').text("Property Type");
    $("#ContentPlaceHolder1_ddlBeds").multiselect("clearSelection");
    $("#ContentPlaceHolder1_ddlBeds").multiselect('refresh');

    $("#ContentPlaceHolder1_txtLocationR").val("");
    $("#ContentPlaceHolder1_ddlbudgetR").val("");
    $("#ContentPlaceHolder1_ddlMaxBudR").val("");
    $("#ContentPlaceHolder1_txtMinAreaR").val("");
    $("#ContentPlaceHolder1_txtMaxAreaR").val("");
    $("#ContentPlaceHolder1_ddlPostedByR").val("");
   // $('#ddlPropertyTypeR').children('option:first').text("Property Type");
    $("#ContentPlaceHolder1_ddlBedsR").multiselect("clearSelection");
    $("#ContentPlaceHolder1_ddlBedsR").multiselect('refresh');

    $("#ContentPlaceHolder1_txtLocationProject").val("");
    $("#ContentPlaceHolder1_ddlMinBudgetProject").val("");
    $("#ContentPlaceHolder1_ddlMaxBudgetProject").val("");
    $("#ContentPlaceHolder1_ddlBedProject").multiselect("clearSelection");
    $("#ContentPlaceHolder1_ddlBedProject").multiselect('refresh');

    $("#ContentPlaceHolder1_txtLocationCommercial").val("");
    $('#ddlPropertyTypeCommercial').children('option:first').text("Property Type");
    $("#ContentPlaceHolder1_ddlMinBudgetCommercial").val("");
    $("#ContentPlaceHolder1_ddlMaxBudgetCommercial").val("");
    $("#ContentPlaceHolder1_txtMinAreaCommercial").val("");
    $("#ContentPlaceHolder1_txtMaxAreaCommercial").val("");
    $("#ContentPlaceHolder1_ddlPostedByCommercial").val("");

    $("#ContentPlaceHolder1_txtLocationDealer").val("");
    $("#ContentPlaceHolder1_ddlDealingIn").val("");

    //$('.chkPropertytypeCommercial').prop('checked', false);
    //$('.chkPropertytype').prop('checked', false);

   
}

$(function () {
    $("#ContentPlaceHolder1_ContentPlaceHolder1_txtLocationMob").autocomplete({
      
        source: function (request, response) {
            var param = { Data: $("#ContentPlaceHolder1_ContentPlaceHolder1_txtLocationMob").val() };
            $.ajax({
                url: "DefaultOld.aspx/GetLocation",
                data: JSON.stringify(param),
                dataType: "json",
                type: "POST",
                contentType: "application/json; charset=utf-8",
                dataFilter: function (data) { return data; },
                success: function (data) {
                    if (data.d.length > 0) {
                        $("#ContentPlaceHolder1_ContentPlaceHolder1_txtLocationMob").css({ "border-color": "" });
                        $("#ContentPlaceHolder1_ErrorMessagemob").text("");
                        response($.map(data.d, function (item) {
                            return {
                                label: item.split('|')[0],
                                val: item.split('|')[1]
                            }
                        }))
                    }
                    else {
                        $("#ContentPlaceHolder1_ContentPlaceHolder1_txtLocationMob").css({ "border-color": "red" });
                        $("#ContentPlaceHolder1_ErrorMessagemob").text("Invalid Location");
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    var err = eval("(" + XMLHttpRequest.responseText + ")");
                    //alert(err.Message)

                }
            });
        },

        select: function (e, i) {
            $("#ContentPlaceHolder1_HDLocationId").val("");
            $("#ContentPlaceHolder1_HDLocationId").val(i.item.val);
        },
        minLength: 3
    });
});