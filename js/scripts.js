// Makes the top menu items fix to the screen as the user scrolls down
$(window).scroll(function() {
    if($(window).scrollTop() > 200){
        $('#nav-one').addClass('fixed-one');
    }else{
        $('#nav-one').removeClass('fixed-one');
    }

    if($(window).scrollTop() > 100){
        $('#nav-two').addClass('fixed-two');
    }else{
        $('#nav-two').removeClass('fixed-two');
    }

    if($(window).scrollTop() > 50){
        $('#nav-home').addClass('fixed-home');
        $('#home-link-img').css("padding-top","52px");
        $('#home-link-img').css("padding-bottom","5px");
    }else{
        $('#nav-home').removeClass('fixed-home');
        $('#home-link-img').css("padding-top","17px");
        $('#home-link-img').css("padding-bottom","17px");
    }

    if($(window).scrollTop() > 100){
        $('#nav-three').addClass('fixed-three');
    }else{
        $('#nav-three').removeClass('fixed-three');
    }

    if($(window).scrollTop() > 200){
        $('#nav-four').addClass('fixed-four');
    }else{
        $('#nav-four').removeClass('fixed-four');
    }
    /*)
     if($(window).scrollTop() > $('#about').offset().top){
     $('#about-menu').addClass('show-menu');
     }else{
     $('#about-menu').removeClass('show-menu');
     }
     */
});

$(document).ready(function(){

    /*$('.contact-background').parallax({speed : -.25, coffset: "-20"});
    $('.resources-background').parallax({speed : -.25, coffset: "-20"});
    $('.portfolio-background').parallax({speed : -.25, coffset: "-20"});*/
    //$('.bg-about1').parallax({speed : -.25, coffset: "-20"});


    $(".home-container").vegas({
        delay: 5000,
        slides: [
            {src: "images/northern_lights1.jpg", cover: 'true'},
            {src: "images/fog1.jpg", cover: 'true'},
            {src: "images/image1.jpg", cover: 'true'},
            {src: "images/palm-tree1.jpg", cover: 'true'}
        ],
        timer: false,
        transitionDuration: 3000,
        transition: 'blur2'
    });
    /* Handles the highlighting of the nav butons
    $('.nav-bar-inner div').hover(function(evt){
        if($(this).child().attr('id') != "nav-link-home") {
            console.log($(this).attr('id'));
            $(evt.target).parent().addClass('bghigh');
        }
    },function(evt){
        $(evt.target).parent().removeClass('bghigh');
    });
    */

    // Opens a new window with the page specified
    $('#openWindowBtn').on('click', function(event) {
        var link = $('.active-form').val();
        var win = window.open(link, '_blank');
        if(win){
            win.focus();
        }else{
            alert('Please allow popups for this site');
        }
    });

    $('#bookmarkPageBtn').click(function(e) {
        var bookmarkURL = window.location.href;
        var bookmarkTitle = document.title;

        if ('addToHomescreen' in window && window.addToHomescreen.isCompatible) {
            // Mobile browsers
            addToHomescreen({ autostart: false, startDelay: 0 }).show(true);
        } else if (window.sidebar && window.sidebar.addPanel) {
            // Firefox version < 23
            window.sidebar.addPanel(bookmarkTitle, bookmarkURL, '');
        } else if ((window.sidebar && /Firefox/i.test(navigator.userAgent)) || (window.opera && window.print)) {
            // Firefox version >= 23 and Opera Hotlist
            $(this).attr({
                href: bookmarkURL,
                title: bookmarkTitle,
                rel: 'sidebar'
            }).off(e);
            return true;
        } else if (window.external && ('AddFavorite' in window.external)) {
            // IE Favorite
            window.external.AddFavorite(bookmarkURL, bookmarkTitle);
        } else {
            // Other browsers (mainly WebKit - Chrome/Safari)
            alert('Press ' + (/Mac/i.test(navigator.userAgent) ? 'Cmd' : 'Ctrl') + '+D to bookmark this page.');
        }

        return false;
    });


    // Handles the contact clipboard
    var clipboardTwo = new Clipboard('.pulse');
    $('.pulse').on('click', function(event) {
        event.preventDefault();
    });

    // Disables href on polaroid
    $('.polaroids a').on('click', function(event) {
        event.preventDefault();
    });

    // Make this more concise
    $('#scrollbtn').on('click', function(event) {
        event.preventDefault();
        var targetST = $('#about').offset().top;
        $('body, html').animate({
            scrollTop: targetST + 'px'
        }, 700);
    });

    $('#dwnldResume').on('click',function(event){
       window.open('resources/dave_erichsen_resume.pdf');
    });

    $('#showBio').on('click',function(event){
        $('.full-bio').addClass('show-bio');
        $('#showBio').css("display","none");
        $('#hideBio').css("display","inline-block");
    });

    $('#hideBio').on('click',function(event){
        $('.full-bio').removeClass('show-bio');
        $('#hideBio').css("display","none");
        $('#showBio').css("display","inline-block");
    });

    // Portfolio open buton
    $('.thumb').on('click', function(event) {
        event.preventDefault();
        var targetID = $(this).attr('id');
        var idWrap = "#";
        var newTarget = idWrap.concat(targetID.substring(0,(targetID.indexOf('-'))+1).concat("frame"));
        $(newTarget).addClass('show-work');
    });

    // Portfolio close button
    $('.close-button').on('click', function(event) {
        event.preventDefault();
        var targetID = $(this).parent().attr('id');
        var idWrap = "#";
        var newTarget = idWrap.concat(targetID);
        $(newTarget).removeClass('show-work');
    });

    $('.tab-btn').on('click', function(evt){
        evt.preventDefault();
        var targetID = "#";
        targetID = targetID.concat($(this).data("linkType"));
        $('.active-tab').removeClass('active-tab');
        $(this).addClass('active-tab');
        $('.active-form').removeClass('active-form');
        $(targetID).addClass('active-form');
    });

    // Handles navation
    $('.nav-bar-inner div').on('click', function(event) {
        event.preventDefault();
        var targetID = $(this).children().attr('href');
        var targetST = $(targetID).offset().top;
        $('body, html').animate({
            scrollTop: targetST + 'px'
        }, 700);
    });
});