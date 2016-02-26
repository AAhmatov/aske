$("#a-handle").click(function() {
    var Sidebar_Current_Margin = $("#sidebar-left").css('margin-left');
    var Sidebar_Width = 232;
    var Sidebar_Close_Margin = '-' + Sidebar_Width + 'px';
    var Sidebar_Open_Margin = '0px';
    var Content_Width = $("#Wrap_Container").width();
    var Content_Height = $("#Wrap_Container").height();
    if (Sidebar_Current_Margin == Sidebar_Open_Margin) {
        $("#sidebar-left").css("margin-left", Sidebar_Close_Margin);
        $("#ccross").css("transform", "rotate(315deg)");
        Content_Width = Content_Width + Sidebar_Width;
    } else {
        $("#sidebar-left").css("margin-left", Sidebar_Open_Margin);
        $("#ccross").css("transform", "rotate(0deg)");
        Content_Width = Content_Width - Sidebar_Width;
    }
    if (Content_Height / 2 > Content_Width / 3) {
        $("#Slide_Top").css("height", Content_Height);
        $("#Slide_Top").css("width", Content_Height / 2 * 3);
    } else {
        $("#Slide_Top").css("width", Content_Width);
        $("#Slide_Top").css("height", Content_Width / 3 * 2);
    }
});

