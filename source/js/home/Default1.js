
$(document).ready(function () {

    var windowsize = $(window).width();

    if (windowsize < 800) {
        $("#ddlType").css("margin-top", "20px");
    }


    $("#mobpop").click(function () {
        //alert('1');
        $("#mobpop").removeClass("active");
        
    });

    $("#txtName").blur(function () {
        if ($("#txtName").val() == "") {
          //  $("#lblErrorName").text("Please Enter Name");
            $("#txtName").css({ 'border-color': 'red' });

        }
        else {
          //  $("#lblErrorName").text("");
            $("#txtName").css({ 'border-color': '' });
        }
    });

    $("#txtMobile").keydown(function (e) {
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


    $('#txtMobile').blur(function () {
        var mob = /^[1-9]{1}[0-9]{9}$/;

        if (mob.test($.trim($("#txtMobile").val())) == false) {
            //  $("#lblErrormob").text("Please Enter Mobile No.");
            $("#txtMobile").css({ "border-color": "red" });
            return false;
        }
        else {
            // $("#lblErrormob").text("");
            $("#txtMobile").css({ "border-color": "" });
        }

    });

    $("#txtMail").blur(function () {

        if ($("#txtMail").val() != "") {
            if (!ValidateEmail($("#txtMail").val())) {
                //  $("#lblErrorEmail").text("Please Enter Email Id.");
                $("#txtMail").css({ 'border-color': 'red' });

                return false;
            }
            else {
                // $("#lblErrorEmail").text("");
                $("#txtMail").css({ 'border-color': '' });
            }
        }
    });

    //Start Footer Subscription
    $("#Submit").click(function (e) {
        var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if ($("#txtEmail").val() != "") {
            if (!expr.test($("#txtEmail").val())) {
                $("#txtEmail").css({ "border-color": "red" });
                //$("#lblEmailerror").text("Please Enter valid email");
                return false;
            }
            else {
               // $("#SubscribeText").text('');
                                
                ShowSubDialog(true);
                //$("#SubscribeText").val('Email Id already subscribed');
                //$("#SubscribeText").text('Email Id already subscribed');
                
                var param = {
                    EmailId: $("#txtEmail").val()
                };

                $.ajax({

                    url: "DefaultOld.aspx/InsertSubscription",

                    data: JSON.stringify(param),

                    dataType: "json",

                    type: "POST",

                    contentType: "application/json; charset=utf-8",

                    dataFilter: function (data) { return data; },

                    success: function (data) {
                        if (data.d != "") {
                            //$("#lblEmailerror").text("Email Id Already Subscribed");
                            $("#txtEmail").css({ "border-color": "red" });
                            //ShowSubDialog(true);
                            //$("#txtEmail").css({ "border-color": "red" });
                            $("#SubscribeText").text('Email Id already subscribed');
                            $("#SubscribeHeader").text('');
                        }
                        else {
                            $("#SubscribeText").text('Your Subscription is submitted successfully. You will soon receive revert from hindustanproperty.com');
                            $("#txtEmail").css({ "border-color": "" });
                            $("#lblEmailerror").text("");
                            $("#txtEmail").val("");
                        }
                    }
                });
                return false;
            }
        }
        else {
            $("#txtEmail").css({ "border-color": "red" });
            //$("#lblEmailerror").text("Please Enter Email Id");
            return false;
        }
    });

    $("#txtEmail").blur(function () {
        var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if ($("#txtEmail").val() == "") {
            $("#txtEmail").css({ "border-color": "red" });
            $("#lblEmailerror").text("Please Enter Email Id");
        }
        else {
            $("#txtEmail").css({ "border-color": "" });
            $("#lblEmailerror").text("");
        }
        if ($("#txtEmail").val() != "") {
            if (!expr.test($("#txtEmail").val())) {
                $("#txtEmail").css({ "border-color": "red" });
                $("#lblEmailerror").text("Please Enter valid email");
                return false;
            }
            else {
                $("#txtEmail").css({ "border-color": "" });
                $("#lblEmailerror").text("");
                return true;
            }
        }

    });
    //End Footer Subscription

});

function ShowVerificationDialog(modal) {
    $("#overlay").show();
    $("#DivVerification").fadeIn(300);
}
function RestrictSpace() {
    if (event.keyCode == 32) {
        return false;
    }
}
function ValidateEmail(email) {
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return expr.test(email);
};
function ShowDialog(modal) {
    $("#overlay").show();
    $("#dialog").fadeIn(300);

    if (modal) {
        $("#overlay").bind("click");
    }
    else {
        $("#overlay").click(function (e) {
            HideDialog();
        });
    }
}
function HideDialog() {
    $("#overlay").hide();
    $("#dialog").fadeOut(300);
}
function showmodalpopup() {
           $("#popupdiv").dialog({
               title: "Success",
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
function HideVerificationDialog() {
    $("#overlay").hide();
    $("#DivVerification").fadeOut(300);
}
function ShowForgot(modal) {
    $("#overlay").show();
    $("#DivForgot").fadeIn(300);

    if (modal) {
        $("#overlay").bind("click");
    }
    else {
        $("#overlay").click(function (e) {
            HideForgot();
        });
    }
}
function HideForgot() {
    $("#overlay").hide();
    $("#DivForgot").fadeOut(300);
}
$(document).ready(function () {
    $("#btnSubmit").click(function () {
        var i = "0";
        if ($("#txtName").val() == "") {
            //  $("#lblErrorName").text("Please Enter Name");
            $("#txtName").css({ 'border-color': 'red' });
            i = "1";
        }
        else {
            //  $("#lblErrorName").text("");
            $("#txtName").css({ 'border-color': '' });
        }
        if ($("#txtMobile").val() == "") {
            //  $("#lblErrormob").text("Please Enter Mobile No.");
            $("#txtMobile").css({ 'border-color': 'red' });
            i = "1";
        }
        else {
            // $("#lblErrormob").text("");
            $("#txtMobile").css({ 'border-color': '' });
        }
        if ($("#txtMail").val() == "") {
            //  $("#lblErrorEmail").text("Please Enter Email Id.");
            $("#txtMail").css({ 'border-color': 'red' });
            i = "1";
        }
        else {
            // $("#lblErrorEmail").text("");
            $("#txtMail").css({ 'border-color': '' });
        }

        if ($("#txtMail").val() != "") {
            if (!ValidateEmail($("#txtMail").val())) {
                //  $("#lblErrorEmail").text("Please Enter Email Id.");
                $("#txtMail").css({ 'border-color': 'red' });

                i = "1";
            }
            else {
                // $("#lblErrorEmail").text("");
                $("#txtMail").css({ 'border-color': '' });
            }

        }
        var mob = /^[1-9]{1}[0-9]{9}$/;

        if (mob.test($.trim($("#txtMobile").val())) == false) {
            //  $("#lblErrormob").text("Please Enter Mobile No.");
            $("#txtMobile").css({ "border-color": "red" });
            i = "1";
        }
        else {
            // $("#lblErrormob").text("");
            $("#txtMobile").css({ "border-color": "" });
        }


        if (i == "1") {
            return false;
        }
        else {
            return true;
        }


    });
});

$(document).ready(function () {
   
    $("#txtUserName").blur(function () {
        if ($("#txtUserName").val() == "") {          
            $("#txtUserName").css({ 'border-color': 'red' });            
        }
        else {          
            $("#txtUserName").css({ 'border-color': '' });            
        }
    });
    $("#txtEmail1").blur(function () {
        if ($("#txtEmail1").val() == "") {
            $("#txtEmail1").css({ "border-color": "red" });
        }
        else {
            $("#txtEmail1").css({ "border-color": "" });            
        }
    });
    $("#txtEmail1").blur(function () {

        if ($("#txtEmail1").val() != "") {
            if (!ValidateEmail($("#txtEmail1").val())) {                
                $("#txtEmail1").css({ 'border-color': 'red' });
                return false;
            }
            else {               
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
        }
        else {
            $("#txtMobileNo").css({ 'border-color': '' });
        }

        
    });
    $('#txtMobileNo').blur(function () {
        var mob = /^[1-9]{1}[0-9]{9}$/;
        if (mob.test($.trim($("#txtMobileNo").val())) == false) {
            $("#txtMobileNo").css({ "border-color": "red" });
            return false;
        }
        else {
            $("#txtMobile").css({ "border-color": "" });
        }

    });
    $("#txtPassword").blur(function () {
        if ($("#txtPassword").val() == "") {
            $("#txtPassword").css({ "border-color": "red" });            
        }
        else {
            $("#txtPassword").css({ "border-color": "" });
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
        }

        else {
            $("#txtConfirmPass").css({ "border-color": "" });
        }

    });
    $("#txtConfirmPass").blur(function () {
        if ($("#txtConfirmPass").val() != "" && $("#txtPassword").val() != "") {
            if ($("#txtPassword").val() == $("#txtConfirmPass").val()) {
                $("#txtPassword").css({ "border-color": "" });
                $("#txtConfirmPass").css({ "border-color": "" });                
            }

            else {
                $("#txtPassword").css({ "border-color": "red" });
                $("#txtConfirmPass").css({ "border-color": "red" });
            }
        }
    });

});
$(document).ready(function () {
    $("#submitSignup").click(function () {
        var i = "0";

        if ($("#txtUserName").val() == "") {
            $("#txtUserName").css({ 'border-color': 'red' });            
            i = "1";
        }
        else {
            $("#txtUserName").css({ 'border-color': '' });           
        }
        if ($("#txtEmail1").val() == "") {
            $("#txtEmail1").css({ "border-color": "red" });           
            i = "1";
        }
        else {
            $("#txtEmail1").css({ "border-color": "" });           
        }
        if ($("#txtEmail1").val() != "") {
            if (!ValidateEmail($("#txtEmail1").val())) {
                $("#txtEmail1").css({ 'border-color': 'red' });
                i = "1";
            }
            else {
                $("#txtEmail1").css({ 'border-color': '' });
            }
        }
        if ($("#txtMobileNo").val() == "") {
            $("#txtMobileNo").css({ 'border-color': 'red' });
            i = "1";
        }
        else {
            $("#txtMobileNo").css({ 'border-color': '' });
        }
        var mob = /^[1-9]{1}[0-9]{9}$/;
        if (mob.test($.trim($("#txtMobileNo").val())) == false) {
            $("#txtMobileNo").css({ "border-color": "red" });
            i = "1";
        }
        else {
            $("#txtMobile").css({ "border-color": "" });
        }

        if ($("#txtPassword").val() == "") {
            $("#txtPassword").css({ "border-color": "red" });
            i = "1";
        }
        else {
            $("#txtPassword").css({ "border-color": "" });            
        }

        if ($("#txtConfirmPass").val() == "") {
            $("#txtConfirmPass").css({ "border-color": "red" });
            i = "1";
        }
        else {
            $("#txtConfirmPass").css({ "border-color": "" });
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
            }

            else {
                $("#txtPassword").css({ "border-color": "red" });
                $("#txtConfirmPass").css({ "border-color": "red" });
                i = "1";
            }
        }
       
        if (i == "1") {
            return false;
        }
        else {
            //alert('true');
            //ShowRegisterVer();
            return true;
        }
    });
});
$(document).ready(function () {
    $("#btnSubmitCode").click(function () {
        //alert($("#txtcode").val());
        //alert($("#hdVerificationCode").val());

        if ($("#txtcode").val() != $("#hdVerificationCode").val()) {
            $("#lblwrongcode").text("Wrong code");
            $("#txtcode").css({ 'border-color': 'red' });            
            return false;
        }
        else {
            $("#lblwrongcode").text("");
            $("#txtcode").css({ 'border-color': '' });
            ShowRegisterSuccess();
            return true;
        }
    });
});

//login

$(document).ready(function () {
    $("#txtLoginUserName").blur(function () {
        if ($("#txtLoginUserName").val() == "") {
            $("#txtLoginUserName").css({ 'border-color': 'red' });
        }
        else {
            $("#lblLoginUserError").text("");
            $("#txtLoginUserName").css({ 'border-color': '' });
        }
    });
    $("#txtLogPassword").blur(function () {
        if ($("#txtLogPassword").val() == "") {
            $("#txtLogPassword").css({ 'border-color': 'red' });
        }
        else {
            $("#txtLogPassword").css({ 'border-color': '' });
        }
    });

});
$(document).ready(function () {
    $("#btnlogin").click(function () {
        var i = "0";
               if ($("#txtLoginUserName").val() == "") {
            $("#txtLoginUserName").css({ 'border-color': 'red' });
            i = "1";
        }
        else {
            $("#lblLoginUserError").text("");
            $("#txtLoginUserName").css({ 'border-color': '' });
        }

        if ($("#txtLogPassword").val() == "") {
            $("#txtLogPassword").css({ 'border-color': 'red' });
            i = "1";
        }
        else {
            $("#txtLogPassword").css({ 'border-color': '' });
        }


      
        if (i == "1") {
            return false;
        }
        else {            
            //$("#dispsignup").css("display", "none");
            return true;
        }

    });

});

//forgot

$(document).ready(function () {
    $("#lnkForgot").click(function () {
        
        if ($("#txtLoginUserName").val() == "") {
            $("#txtLoginUserName").css({ 'border-color': 'red' });
        }
        else {
            $("#lblLoginUserError").text("");
            $("#txtLoginUserName").css({ 'border-color': '' });
        }
        if ($("#txtLoginUserName").val() == "")
            return false;
        else {
            //alert('2');
            var Id = $("#txtLoginUserName").val();
            var param = { MailId: Id };

            $("#userSignupForm").css("display", "none");
            $("#userLoginForm").css("display", "none");
            //ShowForgot(true);
            $("#DivForgot").css("display", "block");            
            $("#signinLabel").text("Forgot Password");
            $("#spanForgotPwd").text("Your password has been mailed to your email address:");
            //alert($("#txtLoginUserName").val());
            $("#lblemailaddress").text($("#txtLoginUserName").val());            

            $.ajax({
                type: "POST",

                url: "ChangePassword.aspx/SendMail",

                data: JSON.stringify(param),

                dataType: "json",

                contentType: "application/json; charset=utf-8",

                dataFilter: function (data) { return data; },

                success: function (data) {
                    if (data.d != "Email Id not registered.") {                                                
                    }
                    else {
                        $("#spanForgotPwd").text("Email Id not registered.");
                        $("#lblemailaddress").text($("#txtLoginUserName").val());
                        $("#lblLoginUserError").text("Email Id not registered.");
                    }
                }
            });
            return false;
        }
       
    });

    $("#linkforget").click(function () {
        
        //alert('signup');
        if ($("#txtEmail1").val() == "") {            
            $("#txtEmail1").css({ 'border-color': 'red' });
        }
        else {            
            $("#txtEmail1").css({ 'border-color': '' });
        }
        if ($("#txtEmail1").val() == "")
            return false;
        else {
            //alert('1');
            var Id = $("#txtEmail1").val();
            var param = { MailId: Id };

            $("#userSignupForm").css("display", "none");
            $("#dvVerification").css("display", "none");
            $("#dvRegisterSuccess").css("display", "none");
            $("#userLoginForm").css("display", "none");            
            $("#DivForgot").css("display", "block");

            $("#signinLabel").text("Forgot Password");
            $("#spanForgotPwd").text("Your password has been mailed to your email address:");
            //alert($("#txtEmail1").val());
            $("#lblemailaddress").text($("#txtEmail1").val());

            $.ajax({
                type: "POST",

                url: "ChangePassword.aspx/SendMail",

                data: JSON.stringify(param),

                dataType: "json",

                contentType: "application/json; charset=utf-8",

                dataFilter: function (data) { return data; },

                success: function (data) {
                    if (data.d != "Email Id not registered.") {                        
                        //ShowForgot(true);
                        //$("#mymodel").removeClass("modal-backdrop fade in");
                        //$("#signup").css("display", "block");                        
                    }
                    else {
                        $("#spanForgotPwd").text("Email Id not registered.");
                        $("#lblemailaddress").text($("#txtEmail1").val());
                        $("#lblLoginUserError").text("Email Id not registered.");
                    }
                }
            });

            return false;
        }

    });
});
$(document).ready(function () {

    $("#btnClose").click(function (e) {
        HideDialog();
        e.preventDefault();

    });
    $("#btnCloseVerCode").click(function (e) {
        HideVerificationDialog();
        e.preventDefault();

    });

    $("#overlay").click(function (e) {
        HideDialog();
    });

    $("#closeForgot").click(function (e) {
        HideForgot();
        e.preventDefault();

    });

});

$(document).ready(function () {
    
    $(".closeModal").click(function (e) {
        $("#signin").click();        
    });

    $(".closeModal1").click(function (e) {        
        $("#dvDwndOurApp").click();
    });
    
    $("#CloseAllCity").click(function (e) {
        $(".AllCityContainer, div[data-city-overlay]").toggleClass("hide");
    });

});


function DisableMaxBudBuy() {
    $('#ddlMaxBudgetType').attr("disabled", "disabled");
}

function EnableMaxBudBuy() {
    $('#ddlMaxBudgetType').removeAttr("disabled", "disabled");
    $('#ddlType').attr("disabled", "disabled");
}

function DisableMaxBudRent() {
    $('#ddlMaxBudgetType').attr("disabled", "disabled");
    SetActive('lirent');
}

function EnableMaxBudRent() {
    $('#ddlMaxBudgetType').removeAttr("disabled", "disabled");
    SetActive('lirent');

}

function ShowSubDialog(modal) {
    $("#overlay").show();
    $("#dialogSub").fadeIn(300);

    if (modal) {
        $("#overlay").bind("click");
    }
    else {
        $("#overlay").click(function (e) {
            HideSubDialog();
        });
    }
}

function HideSubDialog() {
    $("#overlay").hide();
    $("#dialogSub").fadeOut(300);
}

function DisplayMsg(Header, Message, type) {
    //alert('test');   
    if (type == '1')
    {
        $("#lblHeader").text(Header);
        $("#lblDesc").text(Message);
        $("#HdTypeFor").text(type);
        $("#HdTypeFor").val(type);
        $("#divother").css("display", "none");
        $("#divapp").css("display", "block");

        if ($(window).width() < 1024) {
           
        } else {
            $(".modal-body").css("height", "150px");
            $(".modal-dialog").css("width", "300px");
        };
      
       
    }
    else
    {
        if ($(window).width() < 1024) {

        } else {
            $(".modal-body").css("height", "410px");
            $(".modal-dialog").css("width", "600px");
        };
       
       
        $("#lblHeader").text(Header);
        $("#lblDesc").text(Message);
        $("#HdTypeFor").text(type);
        $("#HdTypeFor").val(type);
        $("#divother").css("display", "block");
        $("#divapp").css("display", "none");
        $("#txtName").css('border-color', '');
        $("#txtName").val("");
        $("#txtMobile").css('border-color', '');
        $("#txtMobile").val("");
        $("#txtMail").css('border-color', '');
        $("#txtMail").val("");
    }
}

function ResetSignUpControls()
{
    //$("#signin").modal();
    $("#txtUserName").css({ 'border-color': '' });
    $("#txtUserName").val('');
    $("#txtEmail1").css({ 'border-color': '' });
    $("#txtEmail1").val('');
    $("#txtMobileNo").css({ 'border-color': '' });
    $("#txtMobileNo").val('');
    $("#txtPassword").css({ 'border-color': '' });
    $("#txtPassword").val('');
    $("#txtConfirmPass").css({ 'border-color': '' });
    $("#txtConfirmPass").val('');

    
    $("#userSignupForm").css("display", "block");
    $("#dvVerification").css("display", "none");
    $("#dvRegisterSuccess").css("display", "none");    
    $("#userLoginForm").css("display", "none");    
    $("#DivForgot").css("display", "none");
    $("#signinLabel").text("Sign Up");
}

function ShowRegisterVer()
{
    $("#signin").modal();
    $("#userSignupForm").css("display", "none");
    $("#dvVerification").css("display", "block");
    $("#dvRegisterSuccess").css("display", "none");    
    $("#userLoginForm").css("display", "none");
    $("#DivForgot").css("display", "none");

    $("#signinLabel").text("Verification");
}

function ShowRegisterSuccess() {
    $("#signin").modal();
    $("#userSignupForm").css("display", "none");
    $("#dvVerification").css("display", "none");
    $("#dvRegisterSuccess").css("display", "block");
    $("#userLoginForm").css("display", "none");
    $("#DivForgot").css("display", "none");

    $("#signinLabel").text("Successfully Register");
}

function ResetSignInControls()
{
    $("#txtLoginUserName").css({ 'border-color': '' });
    $("#txtLoginUserName").val('');
    $("#txtLogPassword").css({ 'border-color': '' });
    $("#txtLogPassword").val('');
    $("#lblLoginUserError").text('');

    $("#userSignupForm").css("display", "none");
    $("#dvVerification").css("display", "none");
    $("#dvRegisterSuccess").css("display", "none");
    $("#userLoginForm").css("display", "block");
    $("#DivForgot").css("display", "none");
    $("#signinLabel").text("Sign In");
}

function ResetForgot()
{
    $("#txtLogPassword").css({ 'border-color': '' });
    $("#txtLogPassword").val('');
}


function ResetSignUpForgot() {
    $("#txtUserName").css({ 'border-color': '' });
    $("#txtUserName").val('');
    $("#txtMobileNo").css({ 'border-color': '' });
    $("#txtMobileNo").val('');
    $("#txtPassword").css({ 'border-color': '' });
    $("#txtPassword").val('');
    $("#txtConfirmPass").css({ 'border-color': '' });
    $("#txtConfirmPass").val('');

    $("#userSignupForm").css("display", "block");
    $("#DivForgot1").css("display", "none");
    $("#signupLabel").text("Sign In");

}

function HideControls()
{
    $('#ddlType').val('Buy');
    $('#ddlType').attr("disabled", "disabled");

    $('#ddlBudgetType').val('Min Budget');
    $("#ddlBudgetType").attr("disabled", "disabled");

    $('#ddlMaxBudgetType').val('Max Budget');
    $('#ddlMaxBudgetType').attr("disabled", "disabled");
    $('#ddlPropertyType').attr("disabled", "disabled");
    $('#ddlPropertyType').children('option:first').text('Residential Apartment' + "+" + (8));

    $("#chkResidencial").attr('checked',true);
    $("#divResidential").show();
    $("#commercial").css({ "top": "280px" });
    $('#chkCommercial').attr('checked', false);
    $("#divCommercial").hide();
    $("#checkboxes").css({ "height": "280px" });
    $('.chkResProp').attr('checked', true);
    $('.chkComrProp').attr('checked', false);
    $(".chkPropertytype").change();

    $('#chkNewProjects').attr('checked', false);
    $('#chkDealers').attr('checked', false);
    $("#checkboxes").hide();
}

function EnableControls() {
    $('#ddlType').val('Buy');
    $('#ddlType').removeAttr("disabled", "disabled");

    $('#ddlBudgetType').val('Min Budget');
    $("#ddlBudgetType").removeAttr("disabled", "disabled");

    $('#ddlMaxBudgetType').val('Max Budget');
    $('#ddlMaxBudgetType').removeAttr("disabled", "disabled");

    $('#ddlPropertyType').removeAttr("disabled", "disabled");
    //$(".chkPropertytype").change();
    
}


$(document).ready(function () {

    $("#txtLocation").blur(function () {
        if ($("#txtLocation").val() == "LOCATIONS" || $("#txtLocation").val() == "PROJECTS") {
            //alert($("#txtLocation").val());
            $("#txtLocation").css({ "border-color": "red" });
            $("#ErrorMessage").text("Invalid Location");
        }
        //else if ($("#txtLocation").val() != "")
        //{            
        //    alert($("#hdnProjectCode").val());
        //    if ($("#hdnProjectCode").val() != "") {
        //        $('#ddlType').val('Buy');
        //        $('#ddlType').attr("disabled", "disabled");

        //        $('#ddlBudgetType').val('Min Budget');
        //        $("#ddlBudgetType").attr("disabled", "disabled");

        //        $('#ddlMaxBudgetType').val('Max Budget');
        //        $('#ddlMaxBudgetType').attr("disabled", "disabled");

        //        //$('#ddlPropertyType').attr("disabled", "disabled");
        //    }
        //    else {
        //        $('#ddlType').val('Buy');
        //        $('#ddlType').removeAttr("disabled", "disabled");

        //        $('#ddlBudgetType').val('Min Budget');
        //        $("#ddlBudgetType").removeAttr("disabled", "disabled");

        //        $('#ddlMaxBudgetType').val('Max Budget');
        //        $('#ddlMaxBudgetType').removeAttr("disabled", "disabled");

        //        //$('#ddlPropertyType').removeAttr("disabled", "disabled");
        //    }
            

        //}
    });

    $("#txtLocation").autocomplete({        
        source: function (request, response) {
            var param = { Data: $("#txtLocation").val() };
            //alert('test');
            $.ajax({
                url: "WebMethodCommon.aspx/GetLocation",
                data: JSON.stringify(param),
                dataType: "json",
                type: "POST",
                contentType: "application/json; charset=utf-8",
                dataFilter: function (data) { return data; },
                success: function (data) {
                    if (data.d.length > 0) {                        
                        $("#txtLocation").css({ "border-color": "" });
                        $("#ErrorMessage").text("");
                        //alert(item.split('|')[0]);
                        response($.map(data.d, function (item) {
                            //alert(item.split('|')[0]);
                            //.attr('id','id1')
                            return {                                  
                                label: item.split('|')[0],
                                val: item.split('|')[1] 
                                
                            }
                        }))
                        
                    }
                    else {
                        //alert('test');
                        $("#txtLocation").css({ "border-color": "red" });
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
            $("#HDLocationId").val("");
            $("#hdnProjectCode").val("");
            var code = i.item.val;
            //alert(code);
            //alert(code.substring(0, 2));
            
            if (code.substring(0, 2) == "LO") {
                $("#HDLocationId").val(i.item.val);
                EnableControls();
            }
            else {
                $("#hdnProjectCode").val(i.item.val);
                HideControls();
                //alert(i.item.val);                
            }
            
        },
        minLength: 3
    });

    $("#btnSearch").click(function () {

        //alert('test submit');
        var i = 0;
        if ($("#txtLocation").val() == "" || $("#txtLocation").val() == "LOCATIONS" || $("#txtLocation").val() == "PROJECTS") {
            $("#txtLocation").css({ 'border': '1px solid red' });
            //$("#ErrorMessage").text("Invalid Location");
            $("#ErrorMessage").css({ "color": "red" });
            i = 1;
        }
        if ($("#hdnProjectCode").val() == "" && $("#HDLocationId").val() == "") {
            $("#txtLocation").css({ 'border': '1px solid red' });
            //$("#ErrorMessage").text("Invalid Location or Project");
            $("#ErrorMessage").css({ "color": "red" });
            i = 1;
        }
        if ($("#txtLocation").val() == "LOCATIONS" || $("#txtLocation").val() == "PROJECTS") {
            $("#txtLocation").css({ "border": "1px solid red" });
            //$("#ErrorMessage").text("Invalid Location");
            i = 1;
        }

        var proptype = $("#HDPropertyGroup").val();
        //alert(proptype);
        //alert(i);
        if (proptype == "") {
            $("#ddlPropertyType").css({ "border-color": "red" });
            $("#errorPropertyType").text("Enter Property Type");
            i = 1;
        }
        //alert(i);                    
        if (i == 1) {
            return false;
        }
        else {
            return true;
        }

    });

    $("#advanced").click(function () {
        var i = 0;
        if ($("#txtLocation").val() == "" || $("#txtLocation").val() == "LOCATIONS" || $("#txtLocation").val() == "PROJECTS") {            
            $("#txtLocation").css({ 'border-color': 'red' });
            $("#ErrorMessage").text("Invalid Location");
            $("#ErrorMessage").css({ "color": "red" });
            i = 1;
        }
        if ($("#hdnProjectCode").val() == "" && $("#HDLocationId").val() == "") {            
            $("#txtLocation").css({ 'border-color': 'red' });
            $("#ErrorMessage").text("Invalid Location or Project");
            $("#ErrorMessage").css({ "color": "red" });
            i = 1;
        }
        if ($("#txtLocation").val() == "LOCATIONS" || $("#txtLocation").val() == "PROJECTS") {            
            $("#txtLocation").css({ "border-color": "red" });
            $("#ErrorMessage").text("Invalid Location");
            i = 1;
        }

        var proptype = $("#HDPropertyGroup").val();
        //alert(proptype);
        //alert(i);
        if (proptype == "") {
            $("#ddlPropertyType").css({ "border-color": "red" });
            $("#errorPropertyType").text("Enter Property Type");
            i = 1;
        }
        //alert(i);                    
        if (i == 1) {
            return false;
        }
        else {
            return true;
        }
    });

});