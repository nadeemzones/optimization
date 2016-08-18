$(document).ready(function () {
    $("#txtReqName").blur(function () {
        if ($.trim($("#txtReqName").val()) == "") {
            $("#txtReqName").addClass("error");
			i = "1";
		}
		else {

            $("#txtReqName").removeClass("error");
		}
	});
    $("#txtReqMob").keydown(function (e) {
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
    $("#txtMaxbudget").keydown(function (e) {
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
    $("#txtMinbudget").keydown(function (e) {
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
    $("#txtReqMob").blur(function () {
        if ($.trim($("#txtReqMob").val()) == "") {
            $("#txtReqMob").addClass("error");
			
		}
		else {
            var mob = /^[1-9]{1}[0-9]{9}$/;

            if (mob.test($.trim($("#txtReqMob").val())) == false) {
                $("#txtReqMob").addClass("error");

            }
            else {
                $("#txtReqMob").removeClass("error");
            }
          
		}
	});
	
    $("#txtMinbudget").blur(function () {
        if ($.trim($("#txtMinbudget").val()) == "") {

            $("#txtMinbudget").addClass("error");
		}
		else {

            $("#txtMinbudget").removeClass("error");
		}
	});
    $("#txtMaxbudget").blur(function () {
        if ($.trim($("#txtMaxbudget").val()) == "") {
			//  $("#lblErrorBudget").show();
            $("#txtMaxbudget").addClass("error");
		}
		else {
			// $("#lblErrorBudget").hide();
            $("#txtMaxbudget").removeClass("error");
		}

        if ($.trim($("#txtMaxbudget").val()) != "") {
            if ((parseInt($("#txtMaxbudget").val())) <= (parseInt($("#txtMinbudget").val()))) {
				// $("#lblErrorBudget").text("Max Budget should be greater than Min Budget");
				//  $("lblErrorBudget").show();
                $("#txtMaxbudget").addClass("error");
                $("#txtMaxbudget").val('');
			}
			else {
				//    $("#lblErrorBudget").hide();
                $("#txtMaxbudget").removeClass("error");
			}
		}
	});
    $("#txtLocality").blur(function () {
        if ($.trim($("#txtLocality").val()) == "") {

            $("#txtLocality").addClass("error");
		}
		else {

            $("#txtLocality").removeClass("error");
		}
	});
    $("#ddlBedReq").change(function () {

        if ($("#ddlBedReq").get(0).selectedIndex == -1) {
            $("#ddlBedReq").addClass("error");
			//  $("#lblErrorBed").text("Select Bedroom");
			$("#divbedroom").addClass("error");


		}
		else {
            var bed = $("#ddlBedReq").val();

			//alert(bed);
			//bed = bed.join("~");
			$("#hdbed").val(bed);
			//alert(bed);
			$("#ddlBedReq").removeClass("error");
			// $("#lblErrorBed").text("");
			$("#divbedroom").removeClass("error");
		}
	});
    $("#ddlPropertytypeReq").change(function () {

        if ($("#ddlPropertytypeReq").val() == null) {
			// $("#lblerrorProperty").text("Select Property Type");
			$("#divproptype").addClass("error");


		}
		else {
			// $("#ddlPropertytypeReq").removeClass("error");
			$("#divproptype").removeClass("error");

			var prop = $("#ddlPropertytypeReq").val();

			$("#finalproptype").val(prop);
			//  alert($("#finalproptype").val());

		}
	});
	$(".allownumericwithdecimal").on("keypress keyup blur", function (event) {
		$(this).val($(this).val().replace(/[^0-9\.]/g, ''));
		if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
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

	
});

$(document).ready(function () {

	$("#btnSubmitReq").click(function () {
		var i = "0";
		
		if ($.trim($("#txtReqName").val()) == "") {
		    $("#txtReqName").addClass("error");
			i = "1";
			//alert('1');
		}
		else {

		    $("#txtReqName").removeClass("error");
		}
		if ($.trim($("#txtReqMob").val()) == "") {
		    $("#txtReqMob").addClass("error");
			i = "1";
			//alert('2');
		}
		else {

		    $("#txtReqMob").removeClass("error");
		}
		
		var mob = /^[1-9]{1}[0-9]{9}$/;

		if (mob.test($.trim($("#txtReqMob").val())) == false) {
		    $("#txtReqMob").addClass("error");
			i = "1";
			//alert('3');
		}
		else {
		    $("#txtReqMob").removeClass("error");
		}

		if (($.trim($("#txtMaxbudget").val()) != "") && ($.trim($("#txtMinbudget").val()) == "")) {
		    $("#txtMinbudget").addClass("error");
		    i = "1";
			//alert('4');
		}
		else {
		    $("#txtMinbudget").removeClass("error");
		}
		if (($.trim($("#txtMaxbudget").val()) == "") && ($.trim($("#txtMinbudget").val()) != "")) {
		    $("#txtMaxbudget").addClass("error");
		    i = "1";
			//alert('5');
		}
		else {
		    $("#txtMaxbudget").removeClass("error");
		}
		
		if (($.trim($("#txtMaxbudget").val()) != "")) {
		    if ((parseInt($("#txtMaxbudget").val().replace(/,/g, ''))) < (parseInt($("#txtMinbudget").val().replace(/,/g, '')))) {

		        $("#txtMaxbudget").addClass("error");
		        $("#txtMaxbudget").text("");
		        i = "1";
				//alert('6');
			}
			else {
		        $("#txtMaxbudget").removeClass("error");
			}
		}

		
		//if ($("#LstBeds").get(0).selectedIndex == -1) {
		//	$("#LstBeds").addClass("error");
		//	//  $("#lblErrorBed").text("Select Bedroom");
		//	$("#divbedroom").addClass("error");
		//	i = 1;
		//	//alert('7');
		//}
		//else {
		//	$("#LstBeds").removeClass("error");
		//	//$("#lblErrorBed").text("");
		//	$("#divbedroom").removeClass("error");
		//}


		if ($.trim($("#txtLocality").val()) == "" || $("#HDLocationId").val() == "") {
			$("#txtLocality").addClass("error");
			i = "1";
			//alert('8');
		}
		
		//if ($("#ddlPropertytypeReq").get(0).selectedIndex == -1) {
			
		//	$("#divproptype").addClass("error");
		//	i = 1;
		//	//alert('9');
		//}
		//else {
			
		//	$("#divproptype").removeClass("error");
	    //}
		var radioValue = $("input[name='Ttype']:checked").val();
		if (typeof radioValue === "undefined")
		{
		    var radioValue = $("input[name='ctl00$Ttype']:checked").val();
		}
		//alert($("input[name='ctl00$Ttype']").val());
		if (i == "1") {
		    //alert('3');
			return false;
		}
		else {
		    //alert('4');
		    $('#matchproject').attr('href', 'New-Upcoming-Residential-Projects-In-' + $("#txtLocality").val());

		    var transtype = radioValue;
			var ptype = $("#finalproptype").val();
			var loc = $("#HDLocationId").val();
			var bed = $("#hdbed").val();
			var min = $("#txtMinbudget").val();
			var max = $("#txtMaxbudget").val();
			var name = $("#txtReqName").val();
			var mob = $("#txtReqMob").val();
            

			/// alert(transtype); alert(ptype); alert(loc); alert(bed); alert(min); alert(max); alert(name); alert(mob);

			var param = {
				transtype: transtype, ptype: ptype, loc: loc, bed: bed, min: min, max: max, name: name, mob: mob
			};

			$("#VerificationReq").css("display", "block");
			$("#maindiv").css("display", "none");

			$.ajax({
				url: "WebMethodCommon.aspx/InsertAgentContactData",

				data: JSON.stringify(param),

				dataType: "json",

				type: "POST",

				contentType: "application/json; charset=utf-8",

				dataFilter: function (data) { return data; },


				success: function (data) {
					if (data.d != "0") {
						$("#lblVerMobileNo1Req").text(mob);
						$("#hdVerificationCodeReq").val(data.d);
						//$("#VerificationReq").css("display", "block");
						//$("#maindiv").css("display", "none");
					}
				}

			});

			return false;
		}
	});


	$("#btnSubmitCode1Req").click(function () {

		if ($("#txtcode1Req").val() != $("#hdVerificationCodeReq").val()) {
			$("#lblwrongcodeReq").text("Wrong code");
			$("#txtcode1Req").css({ 'border-color': 'red' });
			return false;
		}
		else {
			$("#lblwrongcodeReq").text("");
			$("#txtcode1Req").css({ 'border-color': '' });
			var radioValue = $("input[name='Ttype']:checked").val();
			if (typeof radioValue === "undefined") {
			    var radioValue = $("input[name='ctl00$Ttype']:checked").val();
			}
			var transtype = radioValue;
			var ptype = $("#finalproptype").val();
			var loc = $("#HDLocationId").val();
			var bed = $("#hdbed").val();
			var min = $("#txtMinbudget").val();
			var max = $("#txtMaxbudget").val();
			var name = $("#txtReqName").val();
			var mob = $("#txtReqMob").val();

		///	alert(transtype); alert(ptype); alert(loc); alert(bed); alert(min); alert(max); alert(name); alert(mob);

			var param = {
				transtype: transtype, ptype: ptype, loc: loc, bed: bed, min: min, max: max, name: name, mob: mob
			};
			
			$("#VerificationReq").css("display", "none");
			$("#maindiv").css("display", "none");
			$("#thanksdivReq").css("display", "block");

			$.ajax({

				url: "WebMethodCommon.aspx/VerifiCode",

				data: JSON.stringify(param),

				dataType: "json",

				type: "POST",

				contentType: "application/json; charset=utf-8",

				dataFilter: function (data) { return data; },

				success: function (data) {
					//$("#VerificationReq").css("display", "none");
					//$("#maindiv").css("display", "none");
					//$("#thanksdivReq").css("display", "block");
					$("#lblwrongcodeReq").text("");
					$("#txtcode1Req").val("");
					e.preventDefault();

				}
			});
		}
	});
});

$(function () {
	$('[id*=ddlPropertytypeReq]').multiselect({
		includeSelectAllOption: false,
		nonSelectedText: 'Select Property Type',
		//buttonWidth: 182,
		maxHeight: 300,
		margileft: -111


	});

	$('[id*=LstBeds]').multiselect({
		includeSelectAllOption: false,
		nonSelectedText: 'Select No Of Bed',
		//buttonWidth: 182,
		margileft: -111
	});
});


var expanded = false;
function showCheckboxes() {

	var checkboxes = document.getElementById("checkboxes");
	if (!expanded) {
		checkboxes.style.display = "block";
		expanded = true;
	} else {
		checkboxes.style.display = "none";
		expanded = false;


	}
}

$(document).ready(function () {

	$("#txtLocality").autocomplete({
		source: function (request, response) {
			var param = { Data: $("#txtLocality").val() };
			

			$.ajax({
				url: "DefaultOld.aspx/GetLocation",
				data: JSON.stringify(param),
				dataType: "json",
				type: "POST",
				contentType: "application/json; charset=utf-8",
				dataFilter: function (data) { return data; },
				success: function (data) {
					if (data.d.length > 0) {
						$("#txtLocality").css({ "border-color": "" });
						$("#ErrorMessage").text("");
						response($.map(data.d, function (item) {
							return {
								label: item.split('|')[0],
								val: item.split('|')[1]
							}
						}))
					}
					else {
						$("#txtLocality").css({ "border-color": "red" });
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
			$("#HDLocationId").val(i.item.val);
		},
		minLength: 3
	});

	$(".chkPropertytype").change(function () {

		if ($(".chkPropertytype").is(":checked")) {
			$("#ddlPropertyType").removeClass("error");
			$("#ddlPropertyType").css({ "width": "100%" });
		}
		else {
			$("#ddlPropertyType").addClass("error");
			$("#ddlPropertyType").css({ "width": "100%" });
			return false;
		}

	});

	$('.postproperty-close').click(function (e) {
		//alert('1');
		e.preventDefault();
		$("div[postproperty-container]").removeAttr("style");
		$("#VerificationReq").css("display", "none");
		$("#thanksdivReq").css("display", "none");
	});

	$("#ddlPropertytypeReq").change(function () {

	    if ($("#ddlPropertytypeReq").val() == "PRTY00009" || $("#ddlPropertytypeReq").val() == "PRTY00013" || $("#ddlPropertytypeReq").val() == "PRTY00019" || $("#ddlPropertytypeReq").val() == "PRTY00006") {
	        $("#ReqPropertyGrp").val("PTYGR00002");
			$("#divbedroom").hide();
		}
		else {
		    $("#ReqPropertyGrp").val("PTYGR00001");
			$("#divbedroom").show();
		}
	});

	$("#ShowPopRequirement").click(function () {
		ShowPostRequirement();
	});

	$("#ShowPopRequirementMenu").click(function () {
	    ShowPostRequirement();
	});
	
	$(".multiselect").css({ 'background': '#fff' });
	$(".multiselect").css({ 'color': '#000' });
});

$(document).ready(function () {
	

	$("#ddlPropertytypeReq").change(function () {
		
		if ($("#ddlPropertytypeReq").val() == null) {

			$("#divproptype").addClass("error");			
			$("#ddlPropertytypeReq").css({ 'background': '#18a7c9' });
			
			$("input[type='checkbox'][value='PRTY00001']").prop({
				disabled: false
			});
			$("input[type='checkbox'][value='PRTY00002']").prop({

				disabled: false
			});
			$("input[type='checkbox'][value='PRTY00003']").prop({
				disabled: false
			});
			$("input[type='checkbox'][value='PRTY00004']").prop({
				disabled: false
			});
			$("input[type='checkbox'][value='PRTY00005']").prop({
				disabled: false
			});
			$("input[type='checkbox'][value='PRTY00006']").prop({
				disabled: false
			});
			$("input[type='checkbox'][value='PRTY00007']").prop({
				disabled: false
			});
			$("input[type='checkbox'][value='PRTY00008']").prop({
				disabled: false
			});
			$("input[type='checkbox'][value='PRTY00009']").prop({
				disabled: false
			});
			$("input[type='checkbox'][value='PRTY00010']").prop({
				disabled: false
			});
			$("input[type='checkbox'][value='PRTY00011']").prop({
				disabled: false
			});
			$("input[type='checkbox'][value='PRTY00012']").prop({
				disabled: false
			});
			$("input[type='checkbox'][value='PRTY00013']").prop({
				disabled: false
			});
			$("input[type='checkbox'][value='PRTY00014']").prop({
				disabled: false
			});
			$("input[type='checkbox'][value='PRTY00015']").prop({
				disabled: false
			});
			$("input[type='checkbox'][value='PRTY00016']").prop({
				disabled: false
			});
			$("input[type='checkbox'][value='PRTY00017']").prop({
				disabled: false
			});
			$("input[type='checkbox'][value='PRTY00018']").prop({
				disabled: false
			});
			$("input[type='checkbox'][value='PRTY00019']").prop({
				disabled: false
			});
			$("input[type='checkbox'][value='PRTY00020']").prop({
				disabled: false
			});
			$("input[type='checkbox'][value='PRTY00021']").prop({
				disabled: false
			});
			$("input[type='checkbox'][value='PRTY00022']").prop({
				disabled: false
			});
			$("input[type='checkbox'][value='PRTY00023']").prop({
				disabled: false
			});
			$("input[type='checkbox'][value='PRTY00024']").prop({
				disabled: false
			});
			$("input[type='checkbox'][value='PRTY00025']").prop({
				disabled: false
			});
			$("input[type='checkbox'][value='PRTY00026']").prop({
				disabled: false
			});
			$("input[type='checkbox'][value='PRTY00027']").prop({
				disabled: false
			});

		}
		else {
			$("#ddlPropertytypeReq").removeClass("error");
			//  $("#lblerrorProperty").text("");
			// $("#lblErrorPro").hide();
			//   $("#lblerrorProperty").text("");
			$("#divproptype").removeClass("error");
		}

		if ($("#ddlPropertytypeReq").val().indexOf("PRTY00001") >= 0 || $("#ddlPropertytypeReq").val().indexOf("PRTY00002") >= 0
			|| $("#ddlPropertytypeReq").val().indexOf("PRTY00003") >= 0 || $("#ddlPropertytypeReq").val().indexOf("PRTY00012") >= 0
			|| $("#ddlPropertytypeReq").val().indexOf("PRTY00014") >= 0 || $("#ddlPropertytypeReq").val().indexOf("PRTY00016") >= 0
			|| $("#ddlPropertytypeReq").val().indexOf("PRTY00017") >= 0 || $("#ddlPropertytypeReq").val().indexOf("PRTY00018") >= 0 ||
			$("#ddlPropertytypeReq").val().indexOf("PRTY00021") >= 0) {
			$("#divBedroom").show();
			$("#divCoverArea").show();
			$("#divPlotArea").hide();
			$("#ReqPropertyGrp").val("PTYGR00001");

			$("input[type='checkbox'][value='PRTY00004']").prop({
				disabled: true
			});

			$("input[type='checkbox'][value='PRTY00005']").prop({
				disabled: true
			});

			$("input[type='checkbox'][value='PRTY00006']").prop({
				disabled: true
			});

			$("input[type='checkbox'][value='PRTY00013']").prop({
				disabled: true
			});

			$("input[type='checkbox'][value='PRTY00007']").prop({
				disabled: true
			});

			$("input[type='checkbox'][value='PRTY00008']").prop({
				disabled: true
			});

			$("input[type='checkbox'][value='PRTY00009']").prop({
				disabled: true
			});

			$("input[type='checkbox'][value='PRTY00010']").prop({
				disabled: true
			});
			$("input[type='checkbox'][value='PRTY00011']").prop({
				disabled: true
			});
			$("input[type='checkbox'][value='PRTY00019']").prop({
				disabled: true
			});
			$("input[type='checkbox'][value='PRTY00020']").prop({
				disabled: true
			});
			$("input[type='checkbox'][value='PRTY00022']").prop({
				disabled: true
			});
			$("input[type='checkbox'][value='PRTY00023']").prop({
				disabled: true
			});
			$("input[type='checkbox'][value='PRTY00024']").prop({
				disabled: true
			});
			$("input[type='checkbox'][value='PRTY00025']").prop({
				disabled: true
			});
			$("input[type='checkbox'][value='PRTY00026']").prop({
				disabled: true
			});
			$("input[type='checkbox'][value='PRTY00027']").prop({
				disabled: true
			});

		}

		if ($("#ddlPropertytypeReq").val().indexOf("PRTY00004") >= 0 ||
			$("#ddlPropertytypeReq").val().indexOf("PRTY00005") >= 0 || $("#ddlPropertytypeReq").val().indexOf("PRTY00008") >= 0 ||
			$("#ddlPropertytypeReq").val().indexOf("PRTY00007") >= 0 ||
			$("#ddlPropertytypeReq").val().indexOf("PRTY00020") >= 0 || $("#ddlPropertytypeReq").val().indexOf("PRTY00021") >= 0 ||
			$("#ddlPropertytypeReq").val().indexOf("PRTY00022") >= 0 || $("#ddlPropertytypeReq").val().indexOf("PRTY00023") >= 0 ||
			$("#ddlPropertytypeReq").val().indexOf("PRTY00024") >= 0 || $("#ddlPropertytypeReq").val().indexOf("PRTY00025") >= 0 ||
			$("#ddlPropertytypeReq").val().indexOf("PRTY00026") >= 0) {
			$("input[type='checkbox'][value='PRTY00001']").prop({
				disabled: true
			});

			$("input[type='checkbox'][value='PRTY00002']").prop({
				disabled: true
			});

			$("input[type='checkbox'][value='PRTY00003']").prop({
				disabled: true
			});

			$("input[type='checkbox'][value='PRTY00006']").prop({
				disabled: true
			});

			$("input[type='checkbox'][value='PRTY00013']").prop({
				disabled: true
			});

			$("input[type='checkbox'][value='PRTY00012']").prop({
				disabled: true
			});


			$("input[type='checkbox'][value='PRTY00010']").prop({
				disabled: true
			});
			$("input[type='checkbox'][value='PRTY00011']").prop({
				disabled: true
			});
			$("input[type='checkbox'][value='PRTY00014']").prop({
				disabled: true
			});
			$("input[type='checkbox'][value='PRTY00016']").prop({
				disabled: true
			});
			$("input[type='checkbox'][value='PRTY00017']").prop({
				disabled: true
			});
			$("input[type='checkbox'][value='PRTY00018']").prop({
				disabled: true
			});
			$("input[type='checkbox'][value='PRTY00019']").prop({
				disabled: true
			});
			$("input[type='checkbox'][value='PRTY00009']").prop({
				disabled: true
			});

			$("#divCoverArea").show();
			$("#divPlotArea").hide();
			$("#divBedroom").hide();
			$("#ReqPropertyGrp").val("PTYGR00002");
		}
		if ($("#ddlPropertytypeReq").val().indexOf("PRTY00006") >= 0 || $("#ddlPropertytypeReq").val().indexOf("PRTY00010") >= 0
			 || $("#ddlPropertytypeReq").val().indexOf("PRTY00011") >= 0 || $("#ddlPropertytypeReq").val().indexOf("PRTY00013") >= 0 ||
			$("#ddlPropertytypeReq").val().indexOf("PRTY00019") >= 0 || $("#ddlPropertytypeReq").val().indexOf("PRTY00009") >= 0) {
			$("#divCoverArea").hide();
			$("#divPlotArea").show();
			$("#divBedroom").hide();
			$("#ReqPropertyGrp").val("PTYGR00002");
			$("input[type='checkbox'][value='PRTY00001']").prop({
				disabled: true
			});

			$("input[type='checkbox'][value='PRTY00002']").prop({
				disabled: true
			});

			$("input[type='checkbox'][value='PRTY00003']").prop({
				disabled: true
			});

			$("input[type='checkbox'][value='PRTY00004']").prop({
				disabled: true
			});

			$("input[type='checkbox'][value='PRTY00005']").prop({
				disabled: true
			});

			$("input[type='checkbox'][value='PRTY00008']").prop({
				disabled: true
			});

			$("input[type='checkbox'][value='PRTY00007']").prop({
				disabled: true
			});

			$("input[type='checkbox'][value='PRTY00012']").prop({
				disabled: true
			});
			$("input[type='checkbox'][value='PRTY00014']").prop({
				disabled: true
			});
			$("input[type='checkbox'][value='PRTY00015']").prop({
				disabled: true
			});
			$("input[type='checkbox'][value='PRTY00016']").prop({
				disabled: true
			});
			$("input[type='checkbox'][value='PRTY00017']").prop({
				disabled: true
			});
			$("input[type='checkbox'][value='PRTY00018']").prop({
				disabled: true
			});
			$("input[type='checkbox'][value='PRTY00020']").prop({
				disabled: true
			});
			$("input[type='checkbox'][value='PRTY00021']").prop({
				disabled: true
			});
			$("input[type='checkbox'][value='PRTY00022']").prop({
				disabled: true
			});
			$("input[type='checkbox'][value='PRTY00023']").prop({
				disabled: true
			});
			$("input[type='checkbox'][value='PRTY00024']").prop({
				disabled: true
			});
			$("input[type='checkbox'][value='PRTY00025']").prop({
				disabled: true
			});
			$("input[type='checkbox'][value='PRTY00026']").prop({
				disabled: true
			});
			$("input[type='checkbox'][value='PRTY00027']").prop({
				disabled: true
			});
		}
	});
//	//$(".multiselect").css({ 'width': '83%' }); background:#18a7c9;
	$(".ui-widget-header").css({ 'background': '#18a7c9' });
});

function ShowPostRequirement() {

                $("div[postproperty-container]").css("display", "block");
                $("#VerificationReq").css("display", "none");
                $("#thanksdivReq").css("display", "none");
                $("#maindiv").css("display", "block");
                $("#txtLocality").val('');
                $("#txtLocality").text("");
                $("#txtMinbudget").val('');
                $("#txtMinbudget").text("");
                $("#txtMaxbudget").val('');
                $("#txtMaxbudget").text("");
                $("#txtReqName").val('');
                $("#txtReqName").text("");
                $("#txtReqMob").val('');
                $("#txtReqMob").text("");
                $("#txtReqName").removeClass("error");
                $("#divbedroom").removeClass("error");
                $("#txtLocality").removeClass("error");
                $("#divproptype").removeClass("error");
                $("#txtReqMob").removeClass("error");
                $("#txtMinbudget").removeClass("error");
                $("#txtMaxbudget").removeClass("error");
                $("#ddlPropertytypeReq").multiselect("clearSelection");
                $("#LstBeds").multiselect("clearSelection");
                e.preventDefault();
            }

