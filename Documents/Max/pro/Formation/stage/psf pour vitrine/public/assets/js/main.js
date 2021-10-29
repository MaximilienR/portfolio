$('.carousel').carousel()

/*--------accordion--------*/
$(document).ready(function () {
    $(".accordion-title").click(function (e) {
        var accordionitem = $(this).attr("data-tab");
        $("#" + accordionitem).slideToggle().parent().siblings().find(".accordion-content").slideUp();

        $(this).toggleClass("active-title");
        $("#" + accordionitem).parent().siblings().find(".accordion-title").removeClass("active-title");

        $("i.fa-chevron-down", this).toggleClass("chevron-top");
        $("#" + accordionitem).parent().siblings().find(".accordion-title i.fa-chevron-down").removeClass("chevron-top");
    });

});


/*test2*/
Survey.StylesManager.applyTheme("modern");

var surveyJSON = { "pages": [{ "name": "page1", "elements": [{ "type": "checkbox", "name": "question1", "titleLocation": "left", "descriptionLocation": "underInput", "choices": ["item1", "item2", "item3"] }, { "type": "imagepicker", "name": "question2", "choices": [{ "value": "lion", "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg" }, { "value": "giraffe", "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg" }, { "value": "panda", "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg" }, { "value": "camel", "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg" }] }] }] }

function sendDataToServer(survey) {
    //send Ajax request to your web server.
    alert("The results are:" + JSON.stringify(survey.data));
}

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
});

(function ($) {
    'use strict';

    jQuery(document).on('ready', function () {

        $('a.page-scroll').on('click', function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1500);
            e.preventDefault();
        });

    });


})(jQuery);


/*------Faq--------*/
(function ($) {
    'use strict';

    jQuery(document).on('ready', function () {

        $('a.page-scroll').on('click', function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1500);
            e.preventDefault();
        });

    });


})(jQuery);




