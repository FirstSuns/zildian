var lcly_parent_0                 = document.getElementById('lcly-button-1');
var lcly_link_0                   = document.getElementById('lcly-link-1');
var lcly_wrapper_0                = document.createElement('div');
var lcly_host_domain_0            = document.domain;
var lcly_orig_query_string_obj_0  = {"company_name":"Zildjian","company_id":"222417","inline":"1","category":"distributors","lang":"en-us","dealers_company_id":"222417"};
var lcly_append_query_string_0 	  = '';
var lcly_is_reload_0 			  = false;


lcly_link_0.style.fontFamily		= 'Verdana';
lcly_link_0.style.fontSize			= '11px';
lcly_link_0.style.color				= '#707070';
lcly_link_0.style.textDecoration	= 'none';
lcly_link_0.style.fontWeight		= 'normal';
lcly_link_0.style.marginTop			= '5px';
lcly_link_0.style.display			= 'block';
lcly_link_0.style.lineHeight		= '12px';


	
	lcly_link_0.parentNode.insertBefore(lcly_wrapper_0, lcly_link_0);

	lcly_link_0.style.textAlign    	 = 'right';
	lcly_wrapper_0.style.border    	 = '0px solid #F1F1F1';
	lcly_wrapper_0.style.boxSizing 	 = 'border-box';
	lcly_wrapper_0.style.overflow  	 = 'hidden';
	lcly_wrapper_0.style.width     	 = '100%';
	lcly_wrapper_0.style.height    	 = '800px';
	lcly_wrapper_0.style.margin    	 = '0';


function lcly_audit_hash_0(){
	
	var new_category = lcly_hashed_category_0();

	if (new_category){

		lcly_reload_0({ category : new_category });
	}
}

function lcly_hashed_category_0(){
	
	var token = '#lcly:';
	var hash = window.location.hash;

	if (hash.indexOf(token) > -1){

		return hash.replace(token, '');
	
	} else {

		return false;
	}
}

function lcly_init_category_0(){
	
	window.onhashchange = function() { 
    
	    lcly_audit_hash_0();
	}

	var initial_category = lcly_hashed_category_0();

	if (initial_category && !lcly_is_reload_0){

		lcly_append_query_string_0 = '&category=' + initial_category;
	}
}

lcly_init_category_0();

var lcly_iframe_html_0 = 
	
	'<iframe id="lcly-embedded-iframe-inner-0" scrolling="no" frameborder="0" title="Buy it Locally" '
		+ 'src="https://zildjian.locally.com/conversion?company_name=Zildjian&company_id=222417&inline=1&category=distributors&lang=en-us&dealers_company_id=222417&host_domain=' + lcly_host_domain_0 + lcly_append_query_string_0 
		+ '#/?company_name=Zildjian&company_id=222417&inline=1&category=distributors&lang=en-us&dealers_company_id=222417&host_domain=' + lcly_host_domain_0 + lcly_append_query_string_0 + '" style="width: 100%; height: 800px; margin: 0;">'
	+ '</iframe>';

lcly_wrapper_0.innerHTML  = lcly_iframe_html_0;

var lcly_reload_0 = function(params){

	var cachebuster                 = Math.round(new Date().getTime() / 1000);
	params.v 						= cachebuster;
	params.is_reload 				= 1;
	var old_script                  = document.getElementById('lcly-script-0');
	var new_script                  = document.createElement('script');
	var new_params                  = typeof params.refresh != 'undefined' ? params : lcly_merge_0(lcly_orig_query_string_obj_0, params);

	delete new_params.product_id;
	
	var new_query_string            = lcly_serialize_0(new_params);

	if(old_script !== null && old_script != undefined) {
		if (old_script.parentNode.id.indexOf('lcly-button') > -1){ // script tag is within the container :0 - it's malformed.

			old_script.parentNode.parentNode.insertBefore(new_script, old_script.parentNode);
			old_script.parentNode.removeChild(old_script);
			
		} else { // do the standard reload

			old_script.parentNode.insertBefore(new_script, old_script);
			old_script.parentNode.removeChild(old_script);
		}
	} else {
		// couldn't found our script? insert into head
		console.log('Locally Error: could not locate script tag to update locally script');
		const head_list = document.getElementsByTagName('head');
		if(head_list.length === 1) {
			head_list[0].appendChild(new_script);
			
		} else {
			console.log('Locally Error: could not locate head tag');
		}
	}

	lcly_parent_0.innerHTML = '<a id="lcly-link-0"></a>';
	new_script.setAttribute('src', 'https://zildjian.locally.com/stores/map.js?' + new_query_string);
	new_script.setAttribute('id', 'lcly-script-0');
}

var lcly_serialize_0 = function(obj) {

  var str = [];
  for(var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}

var lcly_merge_0 = function(obj, src) {

    for (var key in src) {
        if (src.hasOwnProperty(key)) obj[key] = src[key];
    }
    return obj;
}
var lcly_overlay_0       = null;
var lcly_fixed_width_0   = false;
var lcly_fixed_height_0  = false;
var lcly_event_method_0  = window.addEventListener ? "addEventListener" : "attachEvent";
var lcly_eventer_0       = window[lcly_event_method_0];
var lcly_message_event_0 = lcly_event_method_0 == "attachEvent" ? "onmessage" : "message";
var lcly_endpoint_0 	 = 'https://zildjian.locally.com/stores/map/embedded?action=convert';
var lcly_modal_title_0   = 'Find Zildjian. Locally.';
var lcly_native_viewport 		 = false;
var lcly_min_supported_height	 = 600;
var lcly_body_0 = document.getElementsByTagName('body')[0];

if (typeof window.lcly_orig_scroll_padding_top === 'undefined') {
	window.lcly_orig_scroll_padding_top = '0px';
}

// Polyfill to support CustomEvent in IE11
(function () {
  if ( typeof window.CustomEvent === "function" ) return false; //If not IE

  function CustomEvent ( event, params ) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent( 'CustomEvent' );
    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
    return evt;
   }

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = CustomEvent;
})();

lcly_eventer_0(lcly_message_event_0, function(e) {
	if (typeof e.data.affiliate_redirect != 'undefined') {
		window.open('https://zildjian.locally.com' + e.data.affiliate_redirect, '_blank', 'noopener noreferrer');
	}

	if (typeof e.data.start_conversion_query != 'undefined'){

		lcly_query_string_0 = e.data.start_conversion_query;
		if (e.data.start_conversion_title != '') lcly_modal_title_0 = e.data.start_conversion_title ;
		if (e.data.start_conversion_endpoint != '') lcly_endpoint_0 = e.data.start_conversion_endpoint ;
		if (e.data.start_conversion_query != '') lcly_query_string_0 = e.data.start_conversion_query;
		lcly_modal_launch_0();

	} else if (typeof e.data.requestor != 'undefined' && e.data.requestor == 'widget' && typeof lcly_element_0 != 'undefined' && typeof lcly_body_0 != 'undefined' ) {
		
		lcly_element_0.style.height = (e.data.height + 100) + 'px';

		if(e.data.is_fullscreen != undefined && e.data.is_fullscreen){
			lcly_element_0.style.position = 'fixed';
			lcly_element_0.style.top = '0';
			lcly_element_0.style.bottom = '0';
			lcly_element_0.style.left = '0';
			lcly_element_0.style.right = '0';
			lcly_element_0.style.zIndex = '99999999999999';
			lcly_element_0.style.backgroundColor = '#fff';
			lcly_body_0.style.overflow = 'hidden';

			var iframes = document.getElementsByTagName('iframe');
			var iframesArray = Array.prototype.slice.call(iframes);

			if (iframes != null && typeof iframes != 'undefined' && iframes.length > 0){
				iframesArray.forEach(function(thisFrame){
					if (thisFrame == lcly_element_0){
						return;
					}
					var lcly_orig_opacity = thisFrame.style.opacity;										
					thisFrame.style.opacity = '0';
					thisFrame.setAttribute('lcly_orig_opacity', lcly_orig_opacity);						
				});
			}

		} else{
			lcly_element_0.style.position = '';
			lcly_element_0.style.top = '';
			lcly_element_0.style.bottom = '';
			lcly_element_0.style.left = '';
			lcly_element_0.style.right = '';
			lcly_element_0.style.zIndex = '';
			lcly_element_0.style.backgroundColor = '';
			lcly_body_0.style.overflow = '';

			var iframes = document.getElementsByTagName('iframe');
			var iframesArray = Array.prototype.slice.call(iframes);

			if ( iframes != null && !typeof iframes != 'undefined' && iframes.length > 0 ){				
				iframesArray.forEach(function(thisFrame){
					if (thisFrame == lcly_element_0){
						return;
					}
					var lcly_orig_opacity = thisFrame.getAttribute('lcly_orig_opacity');
					if (typeof lcly_orig_opacity != 'undefined'){
						thisFrame.style.opacity = lcly_orig_opacity;
					}	
				});
			}	
		}

		lcly_element_0.style.height = e.data.height;//debugger;
		if (!e.data.change_url) return false;

		if (e.data.document_path.indexOf('http://') > -1 || e.data.document_path.indexOf('https://') > -1){

			window.open(e.data.document_path);

		} else {

			lcly_element_0.src = 'https://zildjian.locally.com' + e.data.document_path;
			window.location = '#' + e.data.document_path;
			window.scroll(0,lcly_find_y_pos(lcly_element_0) - 100);
		}

	} else if (typeof e.data.broadcast != 'undefined') {

		var lcly_event_name = 'LOCALLY_' + e.data.broadcast.name;
		var lcly_broadcast_data = e.data.broadcast.data;
		var lcly_event = new CustomEvent(lcly_event_name, { detail: lcly_broadcast_data } );
		window.dispatchEvent(lcly_event);

	} else if (typeof e.data.geolocate != 'undefined') {

		lcly_geo_locate_0();
	} else if (typeof e.data.scroll_top != 'undefined') {
		setTimeout(function() {
			var scroll_padding_top = document.documentElement.style.scrollPaddingTop;
			if (scroll_padding_top && window.lcly_orig_scroll_padding_top === '0px') {
				window.lcly_orig_scroll_padding_top = scroll_padding_top;
				document.documentElement.style.scrollPaddingTop = '0px';
			}
			
			var modal_frame = document.getElementById("lcly-iframe-outer-0");
			if (modal_frame) {
				setTimeout(function() {
					modal_frame.scrollIntoView();
				}, 0);
			}
		}, 300);
	} else { // it's a state change 

		if (typeof e.data.width != 'undefined') lcly_fixed_width_0 = e.data.width.toString().replace('px', '');
		if (typeof e.data.height != 'undefined' && e.data.height > 100) lcly_fixed_height_0 = e.data.height.toString().replace('px', '');
		lcly_audit_size_0();
	}

}, false);

function lcly_modal_launch_0(){	
	
	
	var lcly_scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

	lcly_overlay_0     = document.createElement('div');
	lcly_overlay_0.id  = 'lcly-overlay-0';

	var lcly_body_0 = document.getElementsByTagName('body')[0],
		lcly_w = window;
	lcly_body_0.appendChild(lcly_overlay_0);

	if (lcly_w.innerHeight > lcly_min_supported_height){
		lcly_body_0.style.overflow = "hidden";
	}
	lcly_add_class_0(lcly_body_0, 'lcly-active');

	lcly_set_viewport_0(false);
	var iframe_query_string = lcly_query_string_0 + '&host_domain=' + document.domain;

	var lcly_html_0 = 

		'<div id="lcly-iframe-outer-0" style="position: absolute; left: 0; z-index: 99999; width: 100%; height: 100%; top: ' + lcly_scrollTop + 'px !important;" onclick="lcly_remove_0()" tabindex="0">'
			+ '<a id="lcly-iframe-closer-0" tabindex="0" '
			+   'title="Close Retailers" '
			+   'aria-label="Close Retailers" '
			+   'href="javascript:;" style="position: absolute; top: 10px; width: 50px; height: 50px; text-indent: -9999px; background: url(https://zildjian.locally.com/img/modal-x.png) no-repeat 50% 50%; background-size: 50%; z-index: 99;right: 15px;"></a>'
			+ '<div id="lcly-iframe-0" onclick="lcly_prevent_bubbling_0()" style="width: 70%; height: 80%; margin: 100px auto;">'
			   + '<iframe id="lcly-iframe-inner-0" title="Retailers / Where to Buy" '
			    + 'scrolling="no" frameborder="0" '
				+ 'src="' + lcly_endpoint_0 + '&' + iframe_query_string + '#/?' + iframe_query_string + '" '
				+ 'style="width: 100%; height: 600px; margin: 0 auto;">'
			   + '</iframe>'
			+ '</div>'
		+ '</div>'
		+ '<div class="lcly-screen" style="top: 0; left: 0; width: 100%; height: 100%; z-index: 9999; overflow: hidden; position: fixed; background: #312e2e; opacity: 0.9; filter: alpha(opacity=90);"></div>';

	lcly_overlay_0.innerHTML = lcly_html_0;
	lcly_audit_size_0();

	// initiate accessibility
	var lcly_iframe_outer_0 = document.getElementById('lcly-iframe-outer-0');
	lcly_iframe_outer_0.focus();
}

function lcly_remove_0(){
	lcly_set_viewport_0(true);
	lcly_overlay_0.parentNode.removeChild(lcly_overlay_0);
	var lcly_body_0 = document.getElementsByTagName('body')[0];
	lcly_body_0.style.overflow = "";
	lcly_remove_class_0(lcly_body_0, 'lcly-active');

	if (window.lcly_orig_scroll_padding_top !== '0px') {
		document.documentElement.style.scrollPaddingTop = window.lcly_orig_scroll_padding_top;
		window.lcly_orig_scroll_padding_top = '0px';
	}
}

function lcly_prevent_bubbling_0(e){
	e.stopPropagation();
}

function lcly_set_viewport_0(remove){
	
	var lcly_viewport = document.querySelector("meta[name=viewport]");

	if (remove){

		if (!lcly_viewport) return false;
		lcly_viewport.setAttribute('content', lcly_native_viewport ? lcly_native_viewport : '');

	} else {

		if (lcly_viewport){
			
			lcly_native_viewport = lcly_viewport.getAttribute('content');
			lcly_viewport.setAttribute('content', 'width=device-width initial-scale=1.0 minimum-scale=1.0');
		
		} else {

			var lcly_meta_tag = document.createElement('meta');
			lcly_meta_tag.name = "viewport"
			lcly_meta_tag.content = "width=device-width, initial-scale=1.0"
			document.getElementsByTagName('head')[0].appendChild(lcly_meta_tag);
		}
	}
}

function lcly_audit_size_0(){

	var lcly_w = window,
	    lcly_d = document,
	    lcly_e = lcly_d.documentElement,
	    lcly_g = lcly_d.getElementsByTagName('body')[0],
	    lcly_x = lcly_g.clientWidth,
	    lcly_y = lcly_g.clientHeight;

	var lcly_iframe					= document.getElementById('lcly-iframe-0');
	var lcly_iframe_inner			= document.getElementById('lcly-iframe-inner-0');
	var lcly_embedded_iframe 		= document.getElementById('lcly-embedded-iframe-inner-0');
	var lcly_target_width 			= lcly_w.innerWidth < 960 ? lcly_w.innerWidth - 40 : lcly_w.innerWidth - 160;

	if (lcly_iframe) {

		lcly_width						= lcly_fixed_width_0 ? lcly_fixed_width_0 : lcly_target_width;
		// set lcly_height to min supported height, unless window is bigger than min supported height, then scale window using value from "eventer"
		lcly_height						= lcly_min_supported_height;
		if (lcly_w.innerHeight > lcly_min_supported_height){
			lcly_height					= lcly_fixed_height_0 ? lcly_fixed_height_0 : lcly_w.innerHeight - 140;
		}

		lcly_iframe.style.width			= lcly_width + 'px';
		lcly_iframe.style.height		= lcly_height + 'px';
		lcly_iframe.style.marginTop		= "70px";
		lcly_iframe.style.marginBottom  = "70px";
		lcly_iframe_inner.style.width	= lcly_width + 'px';
		lcly_iframe_inner.style.height	= lcly_height + 'px';
	}

	}

function lcly_has_class_0(ele,cls) {
  return !!ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}

function lcly_add_class_0(ele,cls) {
  if (!lcly_has_class_0(ele,cls)) ele.className += " "+cls;
}

function lcly_remove_class_0(ele,cls) {
  if (lcly_has_class_0(ele,cls)) {
    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
    ele.className=ele.className.replace(reg,' ');
  }
}

window.onresize = function() {

    lcly_audit_size_0();
}

/* GEO-LOCATION METHODS */

function lcly_geo_locate_0(){
	
	if (navigator.geolocation) {
    	navigator.geolocation.getCurrentPosition(lcly_geo_locate_success_0, lcly_geo_locate_error_0);
  	} else {
  		alert("Sorry, your browser doesn't support geolocation.");
  	}
}

function lcly_geo_locate_success_0(position){

	var lcly_embedded_iframe = document.getElementById('lcly-embedded-iframe-inner-0');
	lcly_embedded_iframe = !lcly_embedded_iframe ? document.getElementById('lcly-iframe-inner-0') : lcly_embedded_iframe;

	lcly_embedded_iframe.contentWindow.postMessage({ lat : position.coords.latitude, lng : position.coords.longitude }, "*");
}

function lcly_geo_locate_error_0(error){

	alert('Sorry your browser could not provide a location. You may need to enable location services for this browser. Or try typing the name of your location here instead.');
}
