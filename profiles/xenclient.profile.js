var profile = {
    basePath: "../src",
    action: "release",
    layerOptimize: "shrinksafe",
    cssOptimize: "comments",

    packages: [
            "dojo",
            "dijit",
            "citrix",
    ],
    layers: {
        "dojo": {
            include: [
                "dojo/_base/url",
                "dojo/cache",
                "dojo/cookie",
                "dojo/data/ItemFileReadStore",
                "dojo/data/util/filter",
                "dojo/data/util/simpleFetch",
                "dojo/data/util/sorter",
                "dojo/date/locale",
                "dojo/date/stamp",
                "dojo/DeferredList",
                "dojo/dnd/autoscroll",
                "dojo/dnd/Avatar",
                "dojo/dnd/common",
                "dojo/dnd/Container",
                "dojo/dnd/Manager",
                "dojo/dnd/Moveable",
                "dojo/dnd/Mover",
                "dojo/dnd/Selector",
                "dojo/dnd/Source",
                "dojo/dnd/TimedMoveable",
                "dojo/html",
                "dojo/NodeList-manipulate",
                "dojo/NodeList-traverse",
                "dojo/number",
                "dojo/parser",
                "dojo/require",
                "dojo/selector/acme",
                "dojo/Stateful",
                "dojo/text",
                "dojo/touch",
                "dojo/uacss",
                "dojo/window"
            ]
        },
        "citrix/xenclient": {
            exclude: [
                "dojo"
            ],
            include: [
                "citrix/common/ContentPane",
                "citrix/xenclient/AlertDialog",
                "citrix/xenclient/AlertPopup",
                "citrix/xenclient/Footer",
                "citrix/xenclient/Frame",
                "citrix/xenclient/HostPower",
                "citrix/xenclient/Keyboard",
                "citrix/xenclient/Menus",
                "citrix/xenclient/NotificationBar",
                "citrix/xenclient/StartupWizard",
                "citrix/xenclient/VMContainer",
                "citrix/xenclient/ZeroVMContainer"
            ]
        },
        "citrix/xenauth": {
            exclude: [
                "dojo"
            ],
            include: [
                "citrix/common/ContentPane",
                "citrix/xenclient/Authentication",
                "citrix/xenclient/Frame"
            ]
        },
        "citrix/xenreport": {
            exclude: [
                "dojo"
            ],
            include: [
                "citrix/common/ContentPane",
                "citrix/xenclient/Footer",
                "citrix/xenclient/Frame",
                "citrix/xenclient/ReportWizard"
            ]
        }
    }
 };
