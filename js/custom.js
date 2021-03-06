
        $('document').ready(function(){

            $('#designer-img').css({'left':'-500px'}).stop().animate({'opacity':'1', 'left':'100px'}, 1000, 'easeOutExpo');
	        $('#coder-img').css({'right':'-500px'}).stop().animate({'opacity':'1', 'right':'100px'}, 1000, 'easeOutExpo');
            var face = $('#face'); //contenedor padre de las imagenes
            var section = $('#section'); //contenedor principal
            var designerImg = $("#designer-img");
            var coderImg = $("#coder-img");
            let width_designer_img = $("#designer-img").width();
            let width_coder_img = $("#coder-img").width();
            var duration = 500;
            var frameRate =  30;
            var timeInterval = Math.round( 1000 / frameRate );	

            section.mousemove(function(e){

                mouseX = e.pageX;
                x = mouseX - face.offset().left;
                face_width = $("#face").width();
                

                loop = setInterval(function(){
                    if( x < (face_width/2) ){
                        aux_width_di =  width_designer_img + ( (face_width/2) - x);
                        aux_width_ci =  width_coder_img - ( (face_width/2) - x);
                        designerImg.css({width: aux_width_di});
                        coderImg.css({width: aux_width_ci});
                    }else{
                        aux_width_di =  width_designer_img - ( x - (face_width/2));
                        aux_width_ci =  width_coder_img + ( x - (face_width/2));
                        designerImg.css({width: aux_width_di});
                        coderImg.css({width: aux_width_ci});
                    }
                   

                }, timeInterval );



            }).mouseleave(function(e){
                clearInterval(loop);
                mouseX 		= 0;
		        x 	= face_width/2;
                // $("#designer-img").animate({'width':width_designer_img}, 100);
                // $("#coder-img").animate({'width':width_coder_img}, 100);

                designerImg.hoverFlow(e.type, {width: 420, left: 100}, duration, 'easeOutQuad');
                coderImg.hoverFlow(e.type, {width: 420, right: 100}, duration, 'easeOutQuad');
              

            });
        

        });

        jQuery.extend( jQuery.easing,{
            def: 'easeOutQuad',
            swing: function (x, t, b, c, d) {
                //alert(jQuery.easing.default);
                return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
            },
            easeInQuad: function (x, t, b, c, d) {
                return c*(t/=d)*t + b;
            },
            easeOutQuad: function (x, t, b, c, d) {
                return -c *(t/=d)*(t-2) + b;
            },
            easeInOutQuad: function (x, t, b, c, d) {
                if ((t/=d/2) < 1) return c/2*t*t + b;
                return -c/2 * ((--t)*(t-2) - 1) + b;
            },
            easeInCubic: function (x, t, b, c, d) {
                return c*(t/=d)*t*t + b;
            },
            easeOutCubic: function (x, t, b, c, d) {
                return c*((t=t/d-1)*t*t + 1) + b;
            },
            easeInOutCubic: function (x, t, b, c, d) {
                if ((t/=d/2) < 1) return c/2*t*t*t + b;
                return c/2*((t-=2)*t*t + 2) + b;
            },
            easeInQuart: function (x, t, b, c, d) {
                return c*(t/=d)*t*t*t + b;
            },
            easeOutQuart: function (x, t, b, c, d) {
                return -c * ((t=t/d-1)*t*t*t - 1) + b;
            },
            easeInOutQuart: function (x, t, b, c, d) {
                if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
                return -c/2 * ((t-=2)*t*t*t - 2) + b;
            },
            easeInQuint: function (x, t, b, c, d) {
                return c*(t/=d)*t*t*t*t + b;
            },
            easeOutQuint: function (x, t, b, c, d) {
                return c*((t=t/d-1)*t*t*t*t + 1) + b;
            },
            easeInOutQuint: function (x, t, b, c, d) {
                if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
                return c/2*((t-=2)*t*t*t*t + 2) + b;
            },
            easeInSine: function (x, t, b, c, d) {
                return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
            },
            easeOutSine: function (x, t, b, c, d) {
                return c * Math.sin(t/d * (Math.PI/2)) + b;
            },
            easeInOutSine: function (x, t, b, c, d) {
                return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
            },
            easeInExpo: function (x, t, b, c, d) {
                return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
            },
            easeOutExpo: function (x, t, b, c, d) {
                return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
            },
            easeInOutExpo: function (x, t, b, c, d) {
                if (t==0) return b;
                if (t==d) return b+c;
                if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
                return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
            },
            easeInCirc: function (x, t, b, c, d) {
                return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
            },
            easeOutCirc: function (x, t, b, c, d) {
                return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
            },
            easeInOutCirc: function (x, t, b, c, d) {
                if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
                return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
            },
            easeInElastic: function (x, t, b, c, d) {
                var s=1.70158;var p=0;var a=c;
                if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
                if (a < Math.abs(c)) { a=c; var s=p/4; }
                else var s = p/(2*Math.PI) * Math.asin (c/a);
                return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
            },
            easeOutElastic: function (x, t, b, c, d) {
                var s=1.70158;var p=0;var a=c;
                if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
                if (a < Math.abs(c)) { a=c; var s=p/4; }
                else var s = p/(2*Math.PI) * Math.asin (c/a);
                return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
            },
            easeInOutElastic: function (x, t, b, c, d) {
                var s=1.70158;var p=0;var a=c;
                if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
                if (a < Math.abs(c)) { a=c; var s=p/4; }
                else var s = p/(2*Math.PI) * Math.asin (c/a);
                if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
                return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
            },
            easeInBack: function (x, t, b, c, d, s) {
                if (s == undefined) s = 1.70158;
                return c*(t/=d)*t*((s+1)*t - s) + b;
            },
            easeOutBack: function (x, t, b, c, d, s) {
                if (s == undefined) s = 1.70158;
                return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
            },
            easeInOutBack: function (x, t, b, c, d, s) {
                if (s == undefined) s = 1.70158; 
                if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
                return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
            },
            easeInBounce: function (x, t, b, c, d) {
                return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
            },
            easeOutBounce: function (x, t, b, c, d) {
                if ((t/=d) < (1/2.75)) {
                    return c*(7.5625*t*t) + b;
                } else if (t < (2/2.75)) {
                    return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
                } else if (t < (2.5/2.75)) {
                    return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
                } else {
                    return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
                }
            },
            easeInOutBounce: function (x, t, b, c, d) {
                if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
                return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
            }
        });

        (function( $ ){

            $.fn.hoverFlow = function(type, prop, speed, easing, callback) {
                // only allow hover events
                if ($.inArray(type, ['mouseover', 'mouseenter', 'mouseout', 'mouseleave']) == -1) {
                    return this;
                }

                // build animation options object from arguments
                // based on internal speed function from jQuery core
                var opt = typeof speed === 'object' ? speed : {
                    complete: callback || !callback && easing || $.isFunction(speed) && speed,
                    duration: speed,
                    easing: callback && easing || easing && !$.isFunction(easing) && easing
                };
                
                // run immediately
                opt.queue = false;
                    
                // wrap original callback and add dequeue
                var origCallback = opt.complete;
                opt.complete = function() {
                    // execute next function in queue
                    $(this).dequeue();
                    // execute original callback
                    if ($.isFunction(origCallback)) {
                        origCallback.call(this);
                    }
                };
                
                // keep the chain intact
                return this.each(function() {
                    var $this = $(this);
                
                    // set flag when mouse is over element
                    if (type == 'mouseover' || type == 'mouseenter') {
                        $this.data('jQuery.hoverFlow', true);
                    } else {
                        $this.removeData('jQuery.hoverFlow');
                    }
                    
                    // enqueue function
                    $this.queue(function() {				
                        // check mouse position at runtime
                        var condition = (type == 'mouseover' || type == 'mouseenter') ?
                            // read: true if mouse is over element
                            $this.data('jQuery.hoverFlow') !== undefined :
                            // read: true if mouse is _not_ over element
                            $this.data('jQuery.hoverFlow') === undefined;
                            
                        // only execute animation if condition is met, which is:
                        // - only run mouseover animation if mouse _is_ currently over the element
                        // - only run mouseout animation if the mouse is currently _not_ over the element
                        if(condition) {
                            $this.animate(prop, opt);
                        // else, clear queue, since there's nothing more to do
                        } else {
                            $this.queue([]);
                        }
                    });

                });
            };

        })( jQuery );

        $( () => {
           
            $(window).scroll( () => {
                
                var windowTop = $(window).scrollTop();
               
                (windowTop > 30) ? $('header').addClass('fixed') : $('header').removeClass('fixed');
                // (windowTop < 30) ? $('header').addClass('absolute') : $('header').removeClass('absolute');
            });
           

            
        });

        $( document ).ready(function() {
            //Waypoints
            $('.under-inner').each(function(){
                var $this = $(this);
                $this.waypoint(function(direction) {
                    if (direction === 'down') {	
                      $this.children(".fixed-contact").addClass('locked');
                    }else{
                      $this.children(".fixed-contact").removeClass('locked');
                    }
                }, { offset: '60%' });
            });
            $("#checkbox-menu").change(function(){
                if ($('#checkbox-menu').prop('checked')){
                    $('#menu-movil').addClass('menu-movil-active');
                }else{
                    $('#menu-movil').removeClass('menu-movil-active');
                }
            });
           
           
        });
        
        