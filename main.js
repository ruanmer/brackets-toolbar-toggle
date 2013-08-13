/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window */

define(function (require, exports, module) {
    "use strict";
    
    var $sidebar = $("#sidebar"),
        $toolbar = $("#main-toolbar"),
        $content = $(".main-view .content");

    function hideToolbar() {
        $toolbar.css("display", "none");
        $content.css("right", "0");
    }
    
    function showToolbar() {
        $toolbar.show();
        $content.css("right", "30px");
    }
    
    $sidebar.on("panelCollapsed", hideToolbar);
    $sidebar.on("panelExpanded", showToolbar);
    
    if (!$sidebar.is(":visible")) {
        $sidebar.trigger("panelCollapsed");
    }
});