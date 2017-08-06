//Heading Section Start
var serch_control_id = document.getElementById("serch_control_id");
var input_toggle = document.getElementsByClassName("input_toggle")[0];
var top_nav_menu = document.getElementsByClassName("top_nav_menu")[0];
var dd1 = document.getElementById("dd1");
var dd1Count = 1;

function show_serchbox() {
    if (input_toggle.style.display === "none") {
        input_toggle.style.display = "block";
        top_nav_menu.style.display = "none";
    } else {
        input_toggle.style.display = "none";
        top_nav_menu.style.display = "block";
    }
}

function dropdown() {
    if (dd1Count == 1) {
        dd1.style.display = "block";
        dd1Count = 2;
    } else {
        dd1.style.display = "none";
        dd1Count = 1;
    }
}
//Heading Section Start

//  promotion section Start
var item = document.getElementsByClassName("item");
var ln = item.length;
//var prev = ln - 1;
//var current = 0;
//var next = 1;
var prev = 1;
var current = 0;
var next = ln - 1;

function showSlidesAction() {
    showSlides();
    setTimeout(showSlidesAction, 5000);
}
showSlidesAction();

function showSlides() {
    console.log(prev + " " + current + " " + next);
    item[prev].className += " prev";
    item[prev].className = item[prev].className.replace(" current", "");
    item[prev].className = item[prev].className.replace(" next", "");
    item[current].className += " current";
    item[current].className = item[current].className.replace(" prev", "");
    item[current].className = item[current].className.replace(" next", "");
    item[next].className += " next";
    item[next].className = item[next].className.replace(" prev", "");
    item[next].className = item[next].className.replace(" current", "");
    //    for Left to right 
    prev = current;
    current = next;
    if (current == 0) {
        next = ln - 1;
    } else {
        next = current - 1;
    }
    //    From right to let
    //    if (current < ln - 1) {
    //        prev = current;
    //        var temp = current;
    //        current = current + 1;
    //        if (current % (ln - 1) == 0) {
    //            next = 0;
    //        } else {
    //            next = temp + 2;
    //        }
    //    } else {
    //        prev = current;
    //        current = 0;
    //        next = 1;
    //    }

    //    if (((current + 1) % ln) == 0) {
    //        prev = ln - 1;
    //        current = 0;
    //        next = 1;
    //    } else {
    //        current = current + 1;
    //        if (current == 1) {
    //            prev = 0;
    //        } else {
    //            prev = current - 1;
    //        }
    //        if (current == (ln - 1)) {
    //            next = 0;
    //        } else {
    //            next = current + 1;
    //        }
    //    }

}


//  promotion section End

//FedBack Section Start
var fedback_item_class = document.getElementsByClassName("fedback_item");
var fedback_item_length = fedback_item_class.length;
//var fb_prev = fedback_item_length - 1;
//var fb_current = 0;
//var fb_next = 1;
var fb_prev = 1;
var fb_current = 0;
var fb_next = fedback_item_length - 1;

function feedBackSlidesAction() {
    feedBackSlides();
    setTimeout(feedBackSlidesAction, 5000);
}
feedBackSlidesAction();

function feedBackSlides() {
    console.log(fb_prev + " " + fb_current + " " + fb_next);
    fedback_item_class[fb_prev].className += " fb_prev";
    fedback_item_class[fb_prev].className = fedback_item_class[fb_prev].className.replace(" fb_current", "");
    fedback_item_class[fb_prev].className = fedback_item_class[fb_prev].className.replace(" fb_next", "");
    fedback_item_class[fb_current].className += " fb_current";
    fedback_item_class[fb_current].className = fedback_item_class[fb_current].className.replace(" fb_prev", "");
    fedback_item_class[fb_current].className = fedback_item_class[fb_current].className.replace(" fb_next", "");
    fedback_item_class[fb_next].className += " fb_next";
    fedback_item_class[fb_next].className = fedback_item_class[fb_next].className.replace(" fb_prev", "");
    fedback_item_class[fb_next].className = fedback_item_class[fb_next].className.replace(" fb_current", "");
    fb_prev = fb_current;
    fb_current = fb_next;
    if (fb_current == 0) {
        fb_next = fedback_item_length - 1;
    } else {
        fb_next = fb_current - 1;
    }
    //    if (((fb_current + 1) % fedback_item_length) == 0) {
    //        fb_prev = fedback_item_length - 1;
    //        fb_current = 0;
    //        fb_next = 1;
    //    } else {
    //        fb_current = fb_current + 1;
    //        if (fb_current == 1) {
    //            fb_prev = 0;
    //        } else {
    //            fb_prev = fb_current - 1;
    //        }
    //        if (fb_current == (fedback_item_length - 1)) {
    //            fb_next = 0;
    //        } else {
    //            fb_next = fb_current + 1;
    //        }
    //    }


}

//FeedBack Section End

function actionOnBrowser() {
    calForDeals();
    calForProduct();
}
//Deals Section Start
//   You can chane class name if you want
var dealsClassName = "deals_item";
// Change Value the value of spaceBetween in percent
var dealsSpaceBetween = 1.5;
// Change Value the value of margin_top in pixel
var deals_margin_top = 10;
var deals_margin_bottom = 25;
// Change Value the value of margin_bottom in pixel
var deals_item_margin_bottom = 10;
window.addEventListener("resize", calForDeals);

function calForDeals() {
    var widthforDeals = window.innerWidth;
    if (widthforDeals >= 1200) {
        dealsServiceDisplay(dealsSpaceBetween, 5);
    } else if (widthforDeals >= 992) {
        dealsServiceDisplay(dealsSpaceBetween, 4);
    } else if (widthforDeals >= 768) {
        dealsServiceDisplay(dealsSpaceBetween, 3);
    } else if (widthforDeals >= 420) {
        dealsServiceDisplay(dealsSpaceBetween, 2);
    } else {
        dealsServiceDisplay(dealsSpaceBetween, 1);
    }
}

function dealsServiceDisplay(s, n) {
    var deals_item_class = document.getElementsByClassName(dealsClassName);
    var deals_item_length = deals_item_class.length;
    var index;
    var product_item_width = (100 - (n - 1) * s) / n;
    for (i = 0; i < deals_item_length; i++) {
        deals_item_class[i].style.margin = "0px";
    }
    stylingDeals(deals_item_class, deals_item_length, n);
    for (i = 0; i < deals_item_length; i++) {
        deals_item_class[i].style.float = "left";
        deals_item_class[i].style.width = product_item_width + "%";
        deals_item_class[i].style.marginRight = s + "%";
        index = (i + 1) % n;
        if (index == 0) {
            deals_item_class[i].style.marginRight = "0%";
        }
    }
    deals_item_class[deals_item_length - 1].style.marginRight = "0%";
}

function stylingDeals(array, length, n) {
    for (i = 0; i < length; i++) {
        if (i < ((length - (length % n)) / n) * n) {
            array[i].style.marginBottom = deals_item_margin_bottom + "px";
        } else {
            if (deals_margin_bottom > 0) {
                array[i].style.marginBottom = deals_margin_bottom + "px";
            } else {
                array[i].style.marginBottom = "0px";
            }

        }
    }
    for (i = 0; i < n; i++) {
        array[i].style.marginTop = deals_margin_top + "px";
    }
}
//Deals Section End


//Product section Start

//   You can chane class name if you want
var productClassName = "company_item";
// Change Value the value of spaceBetween in percent
var productSpaceBetween = 1;
// Change Value the value of margin_top in pixel
var product_margin_top = 10;
var product_margin_bottom = 10;
// Change Value the value of margin_bottom in pixel
var product_item_margin_bottom = 10;
window.addEventListener("resize", calForProduct);

function calForProduct() {
    var widthforProduct = window.innerWidth;
    if (widthforProduct >= 1200) {
        productServiceDisplay(productSpaceBetween, 4);
    } else if (widthforProduct >= 992) {
        productServiceDisplay(productSpaceBetween, 4);
    } else if (widthforProduct >= 768) {
        productServiceDisplay(productSpaceBetween, 3);
    } else if (widthforProduct >= 420) {
        productServiceDisplay(productSpaceBetween, 2);
    } else {
        productServiceDisplay(productSpaceBetween, 1);
    }
}

function productServiceDisplay(s, n) {
    var productCompany_item = document.getElementsByClassName(productClassName);
    var product_item_length = productCompany_item.length;
    var index;
    var product_item_width = (100 - (n - 1) * s) / n;
    for (i = 0; i < product_item_length; i++) {
        productCompany_item[i].style.margin = "0px";
    }
    stylingProduct(productCompany_item, product_item_length, n);
    for (i = 0; i < product_item_length; i++) {
        productCompany_item[i].style.float = "left";
        productCompany_item[i].style.width = product_item_width + "%";
        productCompany_item[i].style.marginRight = s + "%";
        index = (i + 1) % n;
        if (index == 0) {
            productCompany_item[i].style.marginRight = "0%";
        }
    }
    productCompany_item[product_item_length - 1].style.marginRight = "0%";
}

function stylingProduct(array, length, n) {
    for (i = 0; i < length; i++) {
        if (i < ((length - (length % n)) / n) * n) {
            array[i].style.marginBottom = product_item_margin_bottom + "px";
        } else {
            if (product_margin_bottom > 0) {
                array[i].style.marginBottom = product_margin_bottom + "px";
            } else {
                array[i].style.marginBottom = "0px";
            }

        }
    }
    for (i = 0; i < n; i++) {
        array[i].style.marginTop = product_margin_top + "px";
    }
}
//Product section End
