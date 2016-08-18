$(document).ready(function () {

    FILLWESTERN();
    FILLCENTRAL();
    FILLHARBOUR();
    
    $("#ContentPlaceHolder1_btnSearch1").click(function () {
        var i = "0";
        if ($("#ContentPlaceHolder1_lblloid").val() == "") {
            $("#inp1").css({ "border-color": "red" });
            i = "1";
        }
        else {
            $("#inp1").css({ "border-color": "" });
        }

        if (i == "1")
        {
            return false;
        }
        else
        {
            return true;
        }

    });

    $("#ContentPlaceHolder1_btnSearch2").click(function () {
        var i = "0";
        if ($("#ContentPlaceHolder1_lblloid").val() == "") {
            $("#inp1").css({ "border-color": "red" });
            i = "1";
        }
        else {
            $("#inp1").css({ "border-color": "" });
        }
        //alert(i);
        if (i == "1") {
            return false;
        }
        else {
            return true;
        }

    });

    $("#ContentPlaceHolder1_btnSearch3").click(function () {
        var i = "0";
        if ($("#ContentPlaceHolder1_lblloid").val() == "") {
            $("#inp1").css({ "border-color": "red" });
            i = "1";
        }
        else {
            $("#inp1").css({ "border-color": "" });
        }
        //alert(i);
        if (i == "1") {
            return false;
        }
        else {
            return true;
        }

    });

});


function CheckBlankLocation(id)
{
    var i = "0";
    alert('test');
    if ($("#ContentPlaceHolder1_txtLocation" + id).val() == "") {
        $("#ContentPlaceHolder1_txtLocation" + id).css({ "border-color": "red" });
        i = "1";
    }
    else {
        $("#ContentPlaceHolder1_txtLocation" + id).css({ "border-color": "" });
    }
    alert(i);
    if (i == "1") {
        return false;
    }
    else {
        return true;
    }
}




        (function ($) {
            $.widget("ui.combobox", {
                _create: function () {
                    $("#ContentPlaceHolder1_lblloid").val('');
                    var self = this,
                    select = this.element.hide(),
                    selected = select.children(":selected"),
                    value = selected.val() ? selected.text() : "";
                  
                    //onclick = 'GetAllLoc();'
                    var input = this.input = $("<input id='inp1'  placeholder='Search'>")
                    .insertAfter(select)
                    .val(value)
                    .autocomplete({
                        delay: 0,
                        minLength: 0,
                        source: function (request, response) {
                            var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
                            response(select.children("option").map(function () {
                                var text = $(this).text();
                                if (this.value && (!request.term || matcher.test(text)))
                                    return {
                                        label: text.replace(
                                        new RegExp(
                                        "(?![^&;]+;)(?!<[^<>]*)(" +
                                        $.ui.autocomplete.escapeRegex(request.term) +
                                        ")(?![^<>]*>)(?![^&;]+;)", "gi"
                                        ), "<strong>$1</strong>"),
                                        value: text,
                                        option: this
                                    };
                            }));                            
                        },
                        select: function (event, ui) {                           
                            
                            ui.item.option.selected = true;
                            self._trigger("selected", event, {
                                item: ui.item.option
                            });

                            var loca1 = select.children(":selected").text();
                            $("#ContentPlaceHolder1_lblloid").val(loca1);
                            //alert(select.children(":selected").text());
                        },
                        change: function (event, ui) {
                            //alert();                            
                            var loca = $(this).val()
                            $("#ContentPlaceHolder1_lblloid").val(loca);
                                                        
                            if (!ui.item) {
                                
                                var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex($(this).val()) + "$", "i"),
                                valid = false;
                                select.children("option").each(function () {
                                    if ($(this).text().match(matcher)) {
                                        this.selected = valid = true;
                                        
                                        return false;
                                    }
                                    
                                });
                                if (!valid) {

                                    // remove invalid value, as it didn't match anything
                                    $(this).val("");
                                    select.val("");
                                    input.data("autocomplete").term = "";
                                    
                                    return false;
                                }
                                
                            }
                            
                        }
                    })
                   
                    .addClass("ui-widget1 ui-widget-content1 ui-corner-left1");
                    input.data("autocomplete")._renderItem = function (ul, item) {
                        return $("<li></li>")
                        .data("item.autocomplete", item)
                        .append("<a style='font-size:9pt;'>" + item.label + "</a>")
                        .appendTo(ul);
                    };
                    this.button = $("<button id='btnLoc1' type='button' style='display:none'>&nbsp;</button>")
                    .attr("tabIndex", -1)
                    .attr("title", "Show All Items")
                    .insertAfter(input)
                    .button({
                        icons: {
                            primary: "ui-icon-triangle-1-s"
                        },
                        text: false
                    })
                    .removeClass("ui-corner-all1")
                    .addClass("ui-corner-right1 ui-button-icon1")
                    .click(function () {
                        // close if already visible
                        if (input.autocomplete("widget").is(":visible")) {
                            input.autocomplete("close");
                            return;
                        }
                        // work around a bug (likely same cause as #5265)
                        $(this).blur();
                        // pass empty string as value to search for, displaying all results
                        input.autocomplete("search", "");
                        input.focus();
                    });
                },
                destroy: function () {
                    this.input.remove();
                    this.button.remove();
                    this.element.show();
                    $.Widget.prototype.destroy.call(this);
                }
                
                
                
            });

        })(jQuery);
$(function () {
    $("#ContentPlaceHolder1_selLanguage").combobox();
    $("#ContentPlaceHolder1_selLanguage1").combobox();
    $("#ContentPlaceHolder1_selLanguage2").combobox();
    $("#ContentPlaceHolder1_selLanguage3").combobox();

    $("#ContentPlaceHolder1_selLanguage_central").combobox();
    $("#ContentPlaceHolder1_selLanguage_central1").combobox();
    $("#ContentPlaceHolder1_selLanguage_central2").combobox();
    $("#ContentPlaceHolder1_selLanguage_central3").combobox();

    $("#ContentPlaceHolder1_selLanguage_harbour").combobox();
    $("#ContentPlaceHolder1_selLanguage_harbour1").combobox();
    $("#ContentPlaceHolder1_selLanguage_harbour2").combobox();
    $("#ContentPlaceHolder1_selLanguage_harbour3").combobox();
});


function GetAllLoc()
{    
    $("#btnLoc1").click();
}


function FILLWESTERN() {
    
    var param = {

        CityCode: "CT00003"

    };
   
    $.ajax({
        url: "WebMethodCommon.aspx/GETLOC",

        data: JSON.stringify(param),

        dataType: "json",

        type: "POST",

        contentType: "application/json; charset=utf-8",

        dataFilter: function (data) { return data; },

        success: function (data) {
            $.each(data.d, function (key, value) {
                $("#ContentPlaceHolder1_selLanguage").append($("<option></option>").val
                (value.CityCode).html(value.CityName));

                $("#ContentPlaceHolder1_selLanguage1").append($("<option></option>").val
                (value.CityCode).html(value.CityName));

                $("#ContentPlaceHolder1_selLanguage2").append($("<option></option>").val
                (value.CityCode).html(value.CityName));

                $("#ContentPlaceHolder1_selLanguage3").append($("<option></option>").val
                (value.CityCode).html(value.CityName));
                
            });            
           // $("#ContentPlaceHolder1_selLanguage").prepend("<option value='0' selected='selected'>Select</option>");
        }
        
    });
}

function FILLCENTRAL() {

    var param = {

        CityCode: "CT00001"

    };

    $.ajax({
        url: "WebMethodCommon.aspx/GETLOC",

        data: JSON.stringify(param),

        dataType: "json",

        type: "POST",

        contentType: "application/json; charset=utf-8",

        dataFilter: function (data) { return data; },

        success: function (data) {
            $.each(data.d, function (key, value) {
                $("#ContentPlaceHolder1_selLanguage_central").append($("<option></option>").val
                (value.CityCode).html(value.CityName));

                $("#ContentPlaceHolder1_selLanguage_central1").append($("<option></option>").val
                (value.CityCode).html(value.CityName));

                $("#ContentPlaceHolder1_selLanguage_central2").append($("<option></option>").val
                (value.CityCode).html(value.CityName));

                $("#ContentPlaceHolder1_selLanguage_central3").append($("<option></option>").val
                (value.CityCode).html(value.CityName));

            });
            // $("#ContentPlaceHolder1_selLanguage").prepend("<option value='0' selected='selected'>Select</option>");
        }

    });
}

function FILLHARBOUR() {

    var param = {

        CityCode: "CT00341"

    };

    $.ajax({
        url: "WebMethodCommon.aspx/GETLOC",

        data: JSON.stringify(param),

        dataType: "json",

        type: "POST",

        contentType: "application/json; charset=utf-8",

        dataFilter: function (data) { return data; },

        success: function (data) {
            $.each(data.d, function (key, value) {
                $("#ContentPlaceHolder1_selLanguage_harbour").append($("<option></option>").val
                (value.CityCode).html(value.CityName));

                $("#ContentPlaceHolder1_selLanguage_harbour1").append($("<option></option>").val
                (value.CityCode).html(value.CityName));

                $("#ContentPlaceHolder1_selLanguage_harbour2").append($("<option></option>").val
                (value.CityCode).html(value.CityName));

                $("#ContentPlaceHolder1_selLanguage_harbour3").append($("<option></option>").val
                (value.CityCode).html(value.CityName));

            });
            // $("#ContentPlaceHolder1_selLanguage").prepend("<option value='0' selected='selected'>Select</option>");
        }

    });
}

function OnSelChangeColor()
{
    //alert($('#ContentPlaceHolder1_rbNewProjects input:checked').val());
    //$("#ContentPlaceHolder1_rbNewProjects").css('color', '#01f4ff');

    if ($('#ContentPlaceHolder1_rbNewProjects input:checked')) {
        //alert('1');
        $("#spnProjects").css('color', '#01f4ff');

        $("#spnFlatBuy").css('color', '#abb7ca');
        $("#spnFlatRent").css('color', '#abb7ca');
        $("#spnPG").css('color', '#abb7ca');
        $("#spnAgents").css('color', '#abb7ca');
    }
    else {
        $("#spnProjects").css('color', '#abb7ca');
    }

    
}

function OnSelChangeColor1()
{
    if ($('#ContentPlaceHolder1_rbFlatBuy').attr('checked', true)) {        
        $("#spnFlatBuy").css('color', '#01f4ff');

        $("#spnProjects").css('color', '#abb7ca');
        $("#spnFlatRent").css('color', '#abb7ca');
        $("#spnPG").css('color', '#abb7ca');
        $("#spnAgents").css('color', '#abb7ca');
    }
    else {
        $("#spnFlatBuy").css('color', '#abb7ca');
    }

    
}

function OnSelChangeColor2()
{
    if ($('#ContentPlaceHolder1_rbFlatRent').attr('checked', true)) {
        //alert('2');
        $("#spnFlatRent").css('color', '#01f4ff');

        $("#spnProjects").css('color', '#abb7ca');
        $("#spnFlatBuy").css('color', '#abb7ca');
        $("#spnPG").css('color', '#abb7ca');
        $("#spnAgents").css('color', '#abb7ca');
    }
    else {
        $("#spnFlatRent").css('color', '#abb7ca');
    }
}

function OnSelChangeColor3() {
    if ($('#ContentPlaceHolder1_rbPG').attr('checked', true)) {        
        $("#spnPG").css('color', '#01f4ff');

        $("#spnProjects").css('color', '#abb7ca');
        $("#spnFlatBuy").css('color', '#abb7ca');
        $("#spnFlatRent").css('color', '#abb7ca');
        $("#spnAgents").css('color', '#abb7ca');
    }
    else {
        $("#spnPG").css('color', '#abb7ca');
    }
}

function OnSelChangeColor4() {
    if ($('#ContentPlaceHolder1_rbAgents').attr('checked', true)) {
        //alert('2');
        $("#spnAgents").css('color', '#01f4ff');

        $("#spnProjects").css('color', '#abb7ca');
        $("#spnFlatBuy").css('color', '#abb7ca');
        $("#spnFlatRent").css('color', '#abb7ca');
        $("#spnPG").css('color', '#abb7ca');
    }
    else {
        $("#spnAgents").css('color', '#abb7ca');
    }
}