/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {
    "use strict";
    $(".fa-times").click(function () {
        $(".sidebar_menu").addClass("hide_menu");
        $(".toggle_menu").addClass("opacity_one");
    });

    $(".toggle_menu").click(function () {
        $(".sidebar_menu").removeClass("hide_menu");
        $(".toggle_menu").removeClass("opacity_one");

    });

});

function.onload(function () {

});
