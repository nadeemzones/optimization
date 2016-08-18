$(document).ready(function () {
    //alert("js");
 
    $("#txtUserName").blur(function () {
        if ($("#txtUserName").val() == "") {
            $("#txtUserName").css({ 'border-color': 'red' });
            $("#lbluserName").text("Please Enter Your Name");
        }
        else {
            $("#txtUserName").css({ 'border-color': '' });
            $("#lbluserName").text("");
        }
    });

    $("#txtEmail1").blur(function () {
        if ($("#txtEmail1").val() == "") {
            $("#txtEmail1").css({ "border-color": "red" });
            $("#lblErroeEmail1").text("Please Enter Email Id");

        }
        else {
            $("#txtEmail1").css({ "border-color": "" });
            $("#lblErroeEmail1").text("");
        }
    });

    $("#txtEmail1").blur(function () {

        if ($("#txtEmail1").val() != "") {
            if (!ValidateEmail($("#txtEmail1").val())) {
                $("#lblErroeEmail1").text("Please Enter Valid Email Id");
                $("#txtEmail1").css({ 'border-color': 'red' });

                return false;
            }
            else {
                $("#lblErroeEmail1").text("");
                $("#txtEmail1").css({ 'border-color': '' });
            }
        }
    });

    $("#txtMobileNo").keydown(function (e) {
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
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105) && (e.keyCode != 46)) {
            e.preventDefault();
        }
    });

    $("#txtMobileNo").blur(function () {
        if ($("#txtMobileNo").val() == "") {
            $("#txtMobileNo").css({ 'border-color': 'red' });
            $("#lblmobileno").text("Please Enter valid Mobile NO ");
        }
        else {
            $("#txtMobileNo").css({ 'border-color': '' });
            $("#lblmobileno").text("");
        }


    });

    $('#txtMobileNo').blur(function () {
        var mob = /^[1-9]{1}[0-9]{9}$/;
        if (mob.test($.trim($("#txtMobileNo").val())) == false) {
            $("#lblmobileno").text("Please Enter Valid Mobile No.");
            $("#txtMobileNo").css({ "border-color": "red" });
            return false;
        }
        else {
            $("#lblmobileno").text("");
            $("#txtMobile").css({ "border-color": "" });
        }

    });

    $("#txtPassword").blur(function () {
        if ($("#txtPassword").val() == "") {
            $("#txtPassword").css({ "border-color": "red" });
            $("#lblerrorpassword").text("Please Enter Password");

        }
        else {
            $("#txtPassword").css({ "border-color": "" });
            $("#lblerrorpassword").text("");
        }
        if ($("#txtPassword").val() != "") {
            var characterReg = /((?=.*[0-9])(?=.*[a-zA-Z]).{8,10})/gm;
            if (!characterReg.test($("#txtPassword").val())) {
                $("#txtPassword").css({ "border-color": "red" });
                $("#lblerrorpassword").text("Min 8 Character with Alpha numeric");
                //return false;
            }
            else {
                $("#txtPassword").css({ "border-color": "" });
                $("#lblerrorpassword").text("");
            }
        }


    });

    $("#txtConfirmPass").blur(function () {
        if ($("#txtConfirmPass").val() == "") {
            $("#txtConfirmPass").css({ "border-color": "red" });
            $("#lblerrorcpwd").text("Please Enter Confirm Password");
            //   return false;
        }

        else {
            $("#txtConfirmPass").css({ "border-color": "" });
            $("#lblerrorcpwd").text("");
        }

        if ($("#txtConfirmPass").val() != "" && $("#txtPassword").val() != "") {
            if ($("#txtPassword").val() == $("#txtConfirmPass").val()) {
                $("#txtPassword").css({ "border-color": "" });
                $("#txtConfirmPass").css({ "border-color": "" });
                $("#lblerrorcpwd").text("");
            }

            else {
                $("#txtPassword").css({ "border-color": "red" });
                $("#txtConfirmPass").css({ "border-color": "red" });
                $("#lblerrorcpwd").text("Confirm Password is not equal to Password");
                //   return false;
            }
        }

    });

   

    $("#submitSignup").click(function () {
        var i = "0";
        if ($("#txtUserName").val() == "") {
            $("#txtUserName").css({ 'border-color': 'red' });
            $("#lbluserName").text("Please Enter Your Name");
            i = "1";
        }
        else {
            $("#txtUserName").css({ 'border-color': '' });
            $("#lbluserName").text("");
        }
        if ($("#txtEmail1").val() == "") {
            $("#txtEmail1").css({ "border-color": "red" });
            $("#lblErroeEmail1").text("Please Enter Email Id");
            i = "1";
        }
        else {
            $("#txtEmail1").css({ "border-color": "" });
            $("#lblErroeEmail1").text("");
        }
        if ($("#txtEmail1").val() != "") {
            if (!ValidateEmail($("#txtEmail1").val())) {
                $("#lblErroeEmail1").text("Please Enter Valid Email Id");
                $("#txtEmail1").css({ 'border-color': 'red' });
                i = "1";
            }
            else {
                $("#lblErroeEmail1").text("");
                $("#txtEmail1").css({ 'border-color': '' });
            }
        }
        if ($("#txtMobileNo").val() == "") {
            $("#txtMobileNo").css({ 'border-color': 'red' });
            $("#lblmobileno").text("Please Enter valid Mobile NO ");
            i = "1";
        }
        else {
            $("#txtMobileNo").css({ 'border-color': '' });
            $("#lblmobileno").text("");
        }
        var mob = /^[1-9]{1}[0-9]{9}$/;
        if (mob.test($.trim($("#txtMobileNo").val())) == false) {
            $("#lblmobileno").text("Please Enter Valid Mobile No.");
            $("#txtMobileNo").css({ "border-color": "red" });
            i = "1";
        }
        else {
            $("#lblmobileno").text("");
            $("#txtMobile").css({ "border-color": "" });
        }


        if ($("#txtPassword").val() == "") {
            $("#txtPassword").css({ "border-color": "red" });
            $("#lblerrorpassword").text("Please Enter Password");
            i = "1";
        }
        else {
            $("#txtPassword").css({ "border-color": "" });
            $("#lblerrorpassword").text("");
        }

        if ($("#txtConfirmPass").val() == "") {
            $("#txtConfirmPass").css({ "border-color": "red" });
            $("#lblerrorcpwd").text("Please Enter Confirm Password");
            i = "1";
        }
        else {
            $("#txtConfirmPass").css({ "border-color": "" });
            $("#lblerrorcpwd").text("");
        }
        if ($("#txtPassword").val() != "") {
            var characterReg = /((?=.*[0-9])(?=.*[a-zA-Z]).{8,10})/gm;
            if (!characterReg.test($("#txtPassword").val())) {
                $("#txtPassword").css({ "border-color": "red" });
                $("#lblerrorpassword").text("Min 8 Character with Alpha numeric");
                i = "1";
            }
            else {
                $("#txtPassword").css({ "border-color": "" });
                $("#lblerrorpassword").text("");
            }
        }

        if ($("#txtPassword").val() != "" && $("#txtConfirmPass").val() != "") {
            if ($("#txtPassword").val() == $("#txtConfirmPass").val()) {
                $("#txtPassword").css({ "border-color": "" });
                $("#txtConfirmPass").css({ "border-color": "" });
                $("#lblerrorcpwd").text("");

            }

            else {
                $("#txtPassword").css({ "border-color": "red" });
                $("#txtConfirmPass").css({ "border-color": "red" });
                $("#lblerrorcpwd").text("Confirm Password is not equal to Password");
                i = "1";
            }
        }
        if ($("#lblErroeEmail1").text() == "Email Id Already Exist") {
            i = "1";
        }



        if (i == "1") {
            return false;
        }
        else {
            return true;
        }

    });

    $("#btnSubmitCode").click(function () {
        if ($("#txtcode").val() != $("#hdVerificationCode").val()) {
            $("#lblwrongcode").text("Wrong code");
            $("#txtcode").css({ 'border-color': 'red' });
            return false;
        }
        else {
            $("#lblwrongcode").text("");
            $("#txtcode").css({ 'border-color': '' });
            return true;
        }
    });

    $("#txtLoginUserName").blur(function () {
        if ($("#txtLoginUserName").val() == "") {
            //$("#lblLoginUserError").text("Please Enter Email Id");
            $("#txtLoginUserName").css({ 'border-color': 'red' });
        }
        else {
            $("#lblLoginUserError").text("");
            $("#txtLoginUserName").css({ 'border-color': '' });
        }
    });

    $("#txtLogPassword").blur(function () {
        $("#lblLoginError").text("");
        if ($("#txtLogPassword").val() == "") {
            //$("#lblLoginPasswordError").text("Please Enter Password");
            $("#txtLogPassword").css({ 'border-color': 'red' });
        }
        else {
            $("#lblLoginPasswordError").text("");
            $("#txtLogPassword").css({ 'border-color': '' });
        }
    });

    $("#btnlogin").click(function () {
        //alert("call");
        var i = "0";
        if ($("#txtLoginUserName").val() == "") {
            //$("#lblLoginUserError").text("Please Enter Email Id");
            $("#txtLoginUserName").css({ 'border-color': 'red' });
            i = "1";
        }
        else {
            $("#lblLoginUserError").text("");
            $("#txtLoginUserName").css({ 'border-color': '' });
        }

        if ($("#txtLogPassword").val() == "") {
            //$("#lblLoginPasswordError").text("Please Enter Password");
            $("#txtLogPassword").css({ 'border-color': 'red' });
            i = "1";
        }
        else {
            $("#lblLoginPasswordError").text("");
            $("#txtLogPassword").css({ 'border-color': '' });
        }

        if (i == "1") {
            return false;
        }
        else {
            return true;
        }

    });

    $("#lnkForgot").click(function () {

        if ($("#txtLoginUserName").val() == "") {
            //$("#lblLoginUserError").text("Please Enter Email Id");
            $("#txtLoginUserName").css({ 'border-color': 'red' });
        }
        else {
            $("#lblLoginUserError").text("");
            $("#txtLoginUserName").css({ 'border-color': '' });
        }
        if ($("#txtLoginUserName").val() == "")

            return false;
        else {

            var Id = $("#txtLoginUserName").val();
            var param = { MailId: Id };


            $.ajax({
                type: "POST",

                url: "ChangePassword.aspx/SendMail",

                data: JSON.stringify(param),

                dataType: "json",

                contentType: "application/json; charset=utf-8",

                dataFilter: function (data) { return data; },

                success: function (data) {
                    if (data.d != "Email Id not registered.") {
                        $("#lblemailaddress").text($("#txtLoginUserName").val());
                        ShowForgetMail();

                    }
                    else {
                        //$("#lblLoginUserError").text("Email Id not registered.");
                    }
                }
            });

            return false;
        }

    });

    $("#linkforget").click(function () {

        if ($("#txtEmail1").val() == "") {
            //$("#lblErroeEmail1").text("Please Enter Email Id");
            $("#txtEmail1").css({ 'border-color': 'red' });
        }
        else {
            $("#lblErroeEmail1").text("");
            $("#txtEmail1").css({ 'border-color': '' });
        }
        if ($("#txtEmail1").val() == "")

            return false;
        else {

            var Id = $("#txtEmail1").val();
            var param = { MailId: Id };


            $.ajax({
                type: "POST",

                url: "ChangePassword.aspx/SendMail",

                data: JSON.stringify(param),

                dataType: "json",

                contentType: "application/json; charset=utf-8",

                dataFilter: function (data) { return data; },

                success: function (data) {
                    if (data.d != "Email Id not registered.") {
                        $("#lblErroeEmail1").text($("#txtEmail1").val());
                        ShowForgetMail();
                    }
                    else {
                        //$("#lblErroeEmail1").text("Email Id not registered.");
                    }
                }
            });

            return false;
        }

    });

});




