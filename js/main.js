/*
 * jQuery Easing v1.3 - https://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Г‚В© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend(jQuery.easing, {
    def: 'easeOutQuad',
    swing: function (x, t, b, c, d) {
        //alert(jQuery.easing.default);
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function (x, t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    easeOutQuad: function (x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    },
    easeInOutQuad: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    },
    easeInCubic: function (x, t, b, c, d) {
        return c * (t /= d) * t * t + b;
    },
    easeOutCubic: function (x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    easeInOutCubic: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    },
    easeInQuart: function (x, t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    },
    easeOutQuart: function (x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeInOutQuart: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },
    easeInQuint: function (x, t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    },
    easeOutQuint: function (x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    easeInOutQuint: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    easeInSine: function (x, t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },
    easeOutSine: function (x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },
    easeInOutSine: function (x, t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    easeInExpo: function (x, t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    easeOutExpo: function (x, t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    },
    easeInOutExpo: function (x, t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function (x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    easeOutCirc: function (x, t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    easeInOutCirc: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    easeInElastic: function (x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    easeOutElastic: function (x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    },
    easeInOutElastic: function (x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d / 2) == 2) return b + c;
        if (!p) p = d * (.3 * 1.5);
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    },
    easeInBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    easeOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    },
    easeInBounce: function (x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
    },
    easeOutBounce: function (x, t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        } else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
        } else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
        } else {
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
        }
    },
    easeInOutBounce: function (x, t, b, c, d) {
        if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    }
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Г‚В© 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */





(function (e, t, n, r) {
    var i = [],
        s = [],
        o = [],
        u = 0,
        a = t.location.hash,
        f = false,
        l, c = e(t).scrollTop(),
        h = false,
        p = {
            section: "section",
            sectionName: "section-name",
            easing: "easeOutExpo",
            scrollSpeed: 1100,
            offset: 0,
            scrollbars: true,
            before: function () {},
            after: function () {}
        };
    e.scrollify = function (r) {
        function d(n) {
            if (s[n]) {
                p.before(n, o);
                if (p.sectionName) {
                    t.location.hash = s[n]
                }
                e("html,body").stop().animate({
                    scrollTop: i[n]
                }, p.scrollSpeed, p.easing);
                e("html,body").promise().done(function () {
                    p.after(n, o)
                })
            }
        }
        var v = {
            handleMousedown: function () {
                h = false
            },
            handleMouseup: function () {
                h = true
            },
            handleScroll: function () {
                if (l) {
                    clearTimeout(l)
                }
                l = setTimeout(function () {
                    c = e(t).scrollTop();
                    if (h == false) {
                        return false
                    }
                    h = false;
                    var n = 1,
                        r = i.length,
                        s = 0,
                        o = Math.abs(i[0] - c),
                        a;
                    for (; n < r; n++) {
                        a = Math.abs(i[n] - c);
                        if (a < o) {
                            o = a;
                            s = n
                        }
                    }
                    u = s;
                    d(s)
                }, 200)
            },
            wheelHandler: function (e, t) {
                e.preventDefault();
                t = t || -e.originalEvent.detail / 3 || e.originalEvent.wheelDelta / 120;
                if (l) {
                    clearTimeout(l)
                }
                l = setTimeout(function () {
                    if (t < 0) {
                        if (u < i.length - 1) {
                            u++
                        }
                    } else if (t > 0) {
                        if (u > 0) {
                            u--
                        }
                    }
                    if (u >= 0) {
                        d(u)
                    } else {
                        u = 0
                    }
                }, 25)
            },
            keyHandler: function (e) {
                e.preventDefault();
                if (e.keyCode == 38) {
                    if (u > 0) {
                        u--
                    }
                    d(u)
                } else if (e.keyCode == 40) {
                    if (u < i.length - 1) {
                        u++
                    }
                    d(u)
                }
            },
            init: function () {
                if (p.scrollbars) {
                    e(t).bind("mousedown", v.handleMousedown);
                    e(t).bind("mouseup", v.handleMouseup);
                    e(t).bind("scroll", v.handleScroll)
                } else {
                    e("body").css({
                        overflow: "hidden"
                    })
                }
                e(n).bind("DOMMouseScroll mousewheel", v.wheelHandler);
                e(n).bind("keyup", v.keyHandler)
            }
        };
        var m = {
            touches: {
                touchstart: {
                    y: -1
                },
                touchmove: {
                    y: -1
                },
                touchend: false,
                direction: "undetermined"
            },
            options: {
                distance: 30,
                timeGap: 800,
                timeStamp: (new Date).getTime()
            },
            touchHandler: function (e) {
                var t;
                if (typeof e !== "undefined") {
                    e.preventDefault();
                    if (typeof e.touches !== "undefined") {
                        t = e.touches[0];
                        switch (e.type) {
                            case "touchstart":
                                m.options.timeStamp = (new Date).getTime();
                                m.touches.touchend = false;
                            case "touchmove":
                                m.touches[e.type].y = t.pageY;
                                if (m.options.timeStamp + m.options.timeGap < (new Date).getTime() && m.touches.touchend == false) {
                                    m.touches.touchend = true;
                                    if (m.touches.touchstart.y > -1) {
                                        if (Math.abs(m.touches.touchmove.y - m.touches.touchstart.y) > m.options.distance) {
                                            if (m.touches.touchstart.y < m.touches.touchmove.y) {
                                                if (u > 0) {
                                                    u--
                                                }
                                                d(u)
                                            } else {
                                                if (u < i.length - 1) {
                                                    u++
                                                }
                                                d(u)
                                            }
                                        }
                                    }
                                }
                                break;
                            case "touchend":
                                if (m.touches[e.type] == false) {
                                    m.touches[e.type] = true;
                                    if (m.touches.touchstart.y > -1) {
                                        if (Math.abs(m.touches.touchmove.y - m.touches.touchstart.y) > m.options.distance) {
                                            if (m.touches.touchstart.y < m.touches.touchmove.y) {
                                                if (u > 0) {
                                                    u--
                                                }
                                                d(u)
                                            } else {
                                                if (u < i.length - 1) {
                                                    u++
                                                }
                                                d(u)
                                            }
                                        }
                                    }
                                };
                            default:
                                break
                        }
                    }
                }
            },
            init: function () {
                if (n.addEventListener) {
                    n.addEventListener("touchstart", m.touchHandler, false);
                    n.addEventListener("touchmove", m.touchHandler, false);
                    n.addEventListener("touchend", m.touchHandler, false)
                }
            }
        };
        if (typeof r === "string") {
            var g = s.length;
            for (; g >= 0; g--) {
                if (typeof arguments[1] === "string") {
                    if (s[g] == arguments[1]) {
                        u = g;
                        d(g)
                    }
                } else {
                    if (g == arguments[1]) {
                        u = g;
                        d(g)
                    }
                }
            }
        } else {
            p = e.extend(p, r);
            e(p.section).each(function (t) {
                if (t > 0) {
                    i[t] = e(this).offset().top + p.offset
                } else {
                    i[t] = e(this).offset().top
                }
                if (p.sectionName && e(this).data(p.sectionName).length > 0) {
                    s[t] = "#" + e(this).data(p.sectionName).replace(/ /g, "-")
                } else {
                    s[t] = "#" + (t + 1)
                }
                o[t] = e(this);
                if (a == s[t]) {
                    u = t;
                    f = true
                }
            });
            if (f == false && p.sectionName) {
                t.location.hash = s[0]
            } else {
                d(u)
            }
            v.init();
            m.init()
        }
    }
})(jQuery, this, document)




$(function () {
    $(".panel").css({
        "height": $(window).height()
    });
    $.scrollify({
        section: ".panel"
    });


    $(".scroll").click(function (e) {
        e.preventDefault();
        $.scrollify("move", $(this).attr("href"));
    });
});
/*
* SnapScroll v1.3.0 Copyright (c) 2018 AJ Savino
* https://github.com/koga73/SnapScroll
* MIT License
*/
!function(h){function t(e){var n=null,t={callbackDelay:300,_lastOrientation:window.orientation,_timeout:0},i={init:function(){window.addEventListener?(window.addEventListener("resize",i._handler_resize,!1),window.addEventListener("orientationchange",i._handler_resize,!1)):window.attachEvent&&(window.attachEvent("onresize",i._handler_resize),window.attachEvent("onorientationchange",i._handler_resize))},destroy:function(){var e=t._timeout;e&&(clearTimeout(e),t._timeout=0),n.onResize=null,window.removeEventListener?(window.removeEventListener("resize",i._handler_resize),window.removeEventListener("orientationchange",i._handler_resize)):window.detachEvent&&(window.detachEvent("onresize",i._handler_resize),window.detachEvent("onorientationchange",i._handler_resize))},getWidth:function(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth},getHeight:function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},_handler_resize:function(){if("onorientationchange"in window){var e=window.orientation;if(e==t._lastOrientation)return;t._lastOrientation=e}t._timeout&&clearTimeout(t._timeout),t._timeout=setTimeout(i._handler_timeout,n.callbackDelay)},_handler_timeout:function(){clearTimeout(t._timeout),t._timeout=0,n.onResize(n.getWidth(),n.getHeight())}};for(var a in n={callbackDelay:t.callbackDelay,init:i.init,destroy:i.destroy,getWidth:i.getWidth,getHeight:i.getHeight,onResize:null},e)n[a]=e[a];return n.init(),n}h.fn.SnapScroll=function(e){var r=null,n={events:!0,eventChangeActive:"snapscroll_change-active",eventChangeVisible:"snapscroll_change-visible",classes:!0,classSnap:"snap-scroll",classVisible:"snap-scroll-visible",classActive:"snap-scroll-active",hashes:!1,scrollDelay:300,wheelInterval:1e3,animateDuration:250,animateTimeBuffer:100,snapTop:!0,snapBottom:!0,snaps:[],maxWheelDeviation:100};h.fn.SnapScroll.defaults=n;var l=100,c={_$this:this,_resizer:null,_snaps:null,_currentSnapIndex:-1,_scrollTimeout:0,_lastanimateDuration:0,_wheelDir:0,_lastWheelTime:0,_wheelEventDeltas:[],_wheelEventDeltaAvg:0,_lastWheelEventTime:0},_={init:function(){r.classes&&c._$this.addClass(r.classSnap),c._resizer=new t({onResize:_._handler_resize}),_._handler_resize(),h(document).on("scroll",_._handler_document_scroll),h(document).on("keydown",_._handler_document_keydown),h(window).on("DOMMouseScroll mousewheel wheel",_._handler_window_mousewheel)},destroy:function(){h(document).off("scroll",_._handler_document_scroll),h(document).off("keydown",_._handler_document_keydown),h(window).off("DOMMouseScroll mousewheel wheel",_._handler_window_mousewheel),c._resizer&&(c._resizer.destroy(),c._resizer=null),c._snaps=null,c._currentSnapIndex=-1,c._scrollTimeout&&(clearTimeout(c._scrollTimeout),c._scrollTimeout=0),c._lastanimateDuration=0,c._wheelDir=0,c._lastWheelTime=0,c._wheelEventDeltas.splice(0,c._wheelEventDeltas.length),c._wheelEventDeltaAvg=0,c._lastWheelEventTime=0,r.classes&&c._$this.removeClass(r.classSnap)},snapClosest:function(){for(var e=_._getScrollPosition(),n=-1,t=-1,i=c._snaps,a=i.length,s=0;s<a;s++){var l=Math.abs(i[s]-e);(-1==t||l<t)&&(t=l,n=s)}r.snapIndex(n)},snapPrev:function(){r.snapIndex(c._currentSnapIndex-1)},snapNext:function(){r.snapIndex(c._currentSnapIndex+1)},snapIndex:function(e){e=Math.min(Math.max(e,0),c._snaps.length-1),c._currentSnapIndex=e;var n=c._snaps[e],t=[],i=null;if(c._$this.each(function(){var e=h(this);i||e.offset().top!=n||(i=e),r.classes&&(i==e?e.hasClass(r.classActive)||(e.addClass(r.classActive),t.push(e)):e.hasClass(r.classActive)&&(e.removeClass(r.classActive),t.push(e)))}),r.events){var a=t.length;if(a)for(var s=0;s<a;s++)t[s].trigger(r.eventChangeActive,i)}if(r.hashes){var l="";if(i){var o=i.attr("id");o&&(l="#"+o)}history.replaceState({},window.location.href,window.location.href.replace(/#.*$/,"")+l)}_._evalVisibility(),_._scrollTo(n)},getSnapIndex:function(){return c._currentSnapIndex},update:function(){var e=r.snaps.concat(),t=h(document).height()-window.innerHeight;return c._$this.each(function(){e.push(h(this).offset().top)}),r.snapTop&&e.push(0),r.snapBottom&&e.push(t),(e=e.reduce(function(e,n){return-1==e.indexOf(n)&&n<=t&&e.push(n),e},[])).sort(_._sortNumeric),c._snaps=e,c._snaps},isVisible:function(e){var n=e.offset().top,t=n+e.height(),i=_._getScrollPosition(),a=i+window.innerHeight;return i<=n&&n<a||i<t&&t<=a},_evalVisibility:function(){if(r.classes){var n=[],t=[];if(c._$this.each(function(){var e=h(this);r.isVisible(e)?(e.hasClass(r.classVisible)||(e.addClass(r.classVisible),n.push(e)),t.push(e)):e.hasClass(r.classVisible)&&(e.removeClass(r.classVisible),n.push(e))}),r.events)for(var e=n.length,i=0;i<e;i++)n[i].trigger(r.eventChangeVisible,{data:t})}},_sortNumeric:function(e,n){return e-n},_handler_document_scroll:function(e){r.classes&&_._evalVisibility(),c._scrollTimeout&&clearTimeout(c._scrollTimeout);var n=c._lastanimateDuration+r.animateDuration+r.animateTimeBuffer-(new Date).getTime();c._scrollTimeout=setTimeout(_._handler_scroll_timeout,Math.max(r.scrollDelay,n))},_handler_scroll_timeout:function(){clearTimeout(c._scrollTimeout),c._scrollTimeout=0,r.snapClosest()},_scrollTo:function(e){if(_._getScrollPosition()!=e){c._lastanimateDuration=(new Date).getTime();var n=h("html,body");n.stop(!0),n.animate({scrollTop:e},r.animateDuration)}},_handler_window_mousewheel:function(e){e.preventDefault();var n=!1,t=(new Date).getTime();if(c._lastWheelEventTime){var i=t-c._lastWheelEventTime,a=c._wheelEventDeltas.length;a==l&&c._wheelEventDeltas.shift(),c._wheelEventDeltas.push(i),a++,c._wheelEventDeltaAvg=(c._wheelEventDeltaAvg*(a-1)+i)/a,Math.abs(i-c._wheelEventDeltaAvg)>=r.maxWheelDeviation&&(c._wheelEventDeltas.splice(0,a),n=!0)}else n=!0;c._lastWheelEventTime=t;var s=Math.max(-1,Math.min(1,e.originalEvent.deltaY||e.originalEvent.wheelDelta||-e.originalEvent.detail));return c._wheelDir=Math.abs(s)/s,(n||(new Date).getTime()>=c._lastWheelTime+r.wheelInterval)&&_._handler_wheel_timeout(),!1},_handler_wheel_timeout:function(){c._lastWheelTime=(new Date).getTime(),c._wheelDir<0?r.snapPrev():0<c._wheelDir&&r.snapNext()},_handler_document_keydown:function(e){switch(e.keyCode){case 38:r.snapPrev();break;case 40:r.snapNext()}},_handler_resize:function(e,n){r.update(),-1==c._currentSnapIndex?r.snapClosest():r.snapIndex(c._currentSnapIndex)},_getScrollPosition:function(){return window.scrollY||document.body.scrollTop||document.documentElement.scrollTop}};return(r=h.extend({init:_.init,destroy:_.destroy,snapClosest:_.snapClosest,snapPrev:_.snapPrev,snapNext:_.snapNext,snapIndex:_.snapIndex,getSnapIndex:_.getSnapIndex,update:_.update,isVisible:_.isVisible},n,e)).init(),r}}(jQuery);