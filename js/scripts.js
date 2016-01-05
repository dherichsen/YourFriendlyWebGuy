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

    if(($(window).scrollTop() > 50) && ($(window).width() > 800)){
        console.log('hey');
        $('#nav-home').addClass('fixed-home');
        $('#home-link-img').css("padding-top","52px");
        $('#home-link-img').css("padding-bottom","5px");
    }else if(($(window).scrollTop() < 50) && ($(window).width() > 800)){
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
    winHeight = $(window).height();
    toScroll = winHeight/2;
    var offsetHeight = (winHeight * .3) - 20;
    if($(window).scrollTop() > offsetHeight){
        $('.container-header').addClass('container-header-absolute');
    }else{
        $('.container-header').removeClass('container-header-absolute');
    }
    if($(window).scrollTop() > 100){
        $('.container-top .scroll-button').css('display','none');
    }else{
        $('.container-top .scroll-button').css('display','block');
    }
});

$(document).ready(function(){
    winHeight = $(window).height();
    toScroll = winHeight/2;
    // device detection
    var isMobile = false;
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

    /*$('.contact-background').parallax({speed : -.25, coffset: "-20"});
    $('.resources-background').parallax({speed : -.25, coffset: "-20"});
    $('.portfolio-background').parallax({speed : -.25, coffset: "-20"});*/
    //$('.bg-about1').parallax({speed : -.25, coffset: "-20"});

    if(!isMobile){
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
    }

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
        var targetST = toScroll;
        //var targetST = $('#about').offset().top;
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
        $('.nav-bar-inner').css("display","none");
    });

    // Portfolio close button
    $('.close-button').on('click', function(event) {
        event.preventDefault();
        var targetID = $(this).parent().attr('id');
        var idWrap = "#";
        var newTarget = idWrap.concat(targetID);
        $(newTarget).removeClass('show-work');
        $('.nav-bar-inner').css("display","block");
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
        //event.preventDefault();
        var targetID = $(this).children().attr('href');
        var targetST = $(targetID).offset().top;
        $('body, html').animate({
            scrollTop: targetST + 'px'
        }, 700);
    });
});