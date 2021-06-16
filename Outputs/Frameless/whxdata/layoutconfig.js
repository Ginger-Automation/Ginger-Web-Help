(function() {
var config = {"type":"layout-config", html:{"search_highlight_bg_color":"#ffff00","search_highlight_text_color":"#000000","showBreadcrumbs":true,"tocImageDataSet":["tocimg1.png","tocimg2.png","tocimg3.png","tocimg4.png","tocimg5.png","tocimg6.png","tocimg7.png","tocimg8.png"],"minitoc_levelFrom":"2","minitoc_levelTo":"4","minitoc_caption":"","gdprCompliant":false,"showName":false,"toTop":true,"showOnlyDesktopView":true,"drillDownTOC":true,"fullScreen":true,"assets":[],"custom_buttons":[{"id":"0","image":"expand_all.svg","name":"Expand/Collapse All","tabId":"Expand","title":"Expand All","onclick":"EVT_EXPAND_COLLAPSE_ALL","toggledTitle":"Collapse All"},{"id":"1","image":"unsaved.svg","name":"Saved","tabId":"Saved","title":"Favorites","onclick":"EVT_SHOW_FAVORITES","show":"@showFav"},{"id":"2","image":"filter.svg","name":"Filter","tabId":"Filter","title":"Filter","onclick":"EVT_SHOW_FILTERS","show":"@showFilter"},{"id":"3","image":"filter.svg","name":"Select Bookmark","tabId":"BmrkSelect","title":"Select Bookmark","onclick":"EVT_SHOW_BOOKMARKS","show":"@showBmrkSelect"},{"id":"4","image":"download_pdf.svg","name":"Download PDF","tabId":"Pdf","title":"Download PDF","onclick":"EVT_DOWNLOAD_PDF","show":"@showPdf"},{"id":"5","image":"search.svg","name":"Search","tabId":"Search","title":"Search","onclick":"EVT_PROJ_SEARCH","show":"@showSearchIcon"},{"id":"6","name":"Share","tabId":"Share","onclick":"EVT_SHOW_SHARE","title":"Share"}],"dropdown_options":[{"id":"0000","title":"Twitter","url":"https://twitter.com/intent/tweet?url=%url%","group":"Share","tooltip":"Share on Twitter","name":"Twitter"},{"name":"LinkedIn","id":"0002","title":"LinkedIn","url":"https://www.linkedin.com/shareArticle?mini=true&url=%url%","group":"Share","tooltip":"Share on LinkedIn"},{"name":"Facebook","id":"0001","title":"Facebook","url":"https://www.facebook.com/sharer.php?u=%url%","group":"Share","tooltip":"Share on Facebook"},{"name":"Email","id":"0003","group":"Share","title":"Email","url":"mailto:?body=%url%","tooltip":"Share via Email"}],"default_screen":"desktop","default_pane":"toc","max_width_mobile":"1000","max_width_tablet":"1000","search_results_highlight_bgcolor":"#FCFF00","search_results_highlight_color":"#000000","search_results_in_content_area":false,"show_filter":true,"show_glossary":true,"show_header_on_mobile":false,"show_index":true,"show_toc":true,"sidebar_open_by_default":true,"use_and_search":true,"use_facebook":false,"use_twitter":false,"avoidPageRefresh":true}};
window.rh.model.publish(rh.consts('KEY_LAYOUT_CONFIG'), config, { sync:true });
})();