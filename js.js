var Mob=(navigator.userAgent.match(/iPad|iPhone|iPod|Android|Blackberry|Nokia|Mobi/i) != null);
try{Mob=Mob||((sessionStorage&&sessionStorage.mobile)!=undefined)}
catch(serr){}function F1(ShowLoader)
{var UA=navigator.userAgent;var IE=-1,Firefox=-1,Safari=-1,Chrome=-1;if(UA.indexOf("Firefox/")>-1)
{var FV=UA.indexOf("Firefox/");if(FV>-1){Firefox=parseFloat(UA.substr(FV+8,3));}}
    if(Firefox==-1&&UA.indexOf("Chrome/")>-1){
        var CV=UA.indexOf("Chrome/");if(CV>-1){
            Chrome=parseFloat(UA.substr(CV+7,3));
        }
    }
    if(Firefox==-1&&Chrome==-1&&UA.indexOf("Safari")>-1){
        var V=UA.indexOf("Version/");if(V>-1){
            Safari=parseFloat(UA.substr(V+8,3));
        }
    }
    if(UA.indexOf("MSIE")>-1){
        var RE=new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if(RE.exec(UA)!=null){
            IE=parseFloat(RegExp.$1);
        }
    }
    if(IE==-1&&(UA.indexOf("Trident")>-1||UA.indexOf("Edge")>-1))
    {
        IE=10;
    }
    var HasSVG=true;var HasTouch=(Mob|| screen.width <= 480)&&('ontouchstart' in document.documentElement);
    var MouseDown,MouseUp,MouseMove,MouseOver="",MouseOut="";if(HasTouch)
    {
        MouseDown="ontouchstart";
        MouseUp="ontouchend";
        MouseMove="ontouchmove";
        MouseOver="if(this.onmouseover){this.onmouseover();}";MouseOut="if(this.onmouseout){this.onmouseout();}";
    }
    else{
        MouseDown="onmousedown";MouseUp="onmouseup";MouseMove="onmousemove";
    }
    var MF="city/";var B="";if(document.createElement("audio").canPlayType)
    {
        B+="<!DOC"+"TYPE html>";
    }
    else
    {
        B+="<!DOC"+"TYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">";
    }
    B+="<html xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:svg=\"http://www.w3.org/2000/svg\" manifest=\"anim_Cache.appcache\" >";B+="<head>";B+="<title>anim</title>";B+="<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />";B+="<style type=\"text/css\">";B+="div,input,textarea,video,object,select,canvas{display:none;position:absolute;padding:0;margin:0;}table,svg,img,iframe{position:absolute;border-collapse:collapse;table-layout:fixed;display:none;background-color:transparent;padding:0;margin:0;border-style:none;-webkit-user-select: none;-webkit-touch-callout: none;}td,tr,form{padding:0;margin:0;border-style:none;}img,image,v:image,svg:image{background-repeat:no-repeat;}html{-webkit-backface-visibility: hidden;}.Background{position:relative;display:block;}table{pointer-events:none;}body{touch-zooming:none;-ms-touch-zooming:none;margin:0;overflow:hidden;background-color:#FFFFFF;}";if(ShowLoader){B+=".LoaderText{font-family:Arial;line-height:120%;color:#808080;text-align:center;font-size:12px;vertical-align:top;padding:0;width:120px;height:26px;}.LoaderBorder{width:120px;height:6px;background-color:#323232;border:1px solid #FFFFFF;padding:0;font-size:1px;}.LoaderBar{position:relative;background-color:#F0F0F0;font-size:1px;width:0%;height:100%;margin:0;display:block;}.Loader{width:120px;}";}B+=".V1{cursor:default;font-size:10000px;overflow:hidden;}";B+="</style>";B+="<script type=\"text/javascript\">";B+="var V2,V3;";var V4=0;B+="var MF=\""+MF+"\";";B+="var V5=1;";B+="var V6=1;";B+="var V7;";B+="var V8=new Array(100);";B+="var V9=new Array(\"Сцена1\");";B+="var C0,C0L4S5,C0L4S4,C0L4S3,C0L4S2,C0L4S1,C0L4S0,C0L3S1,C0L2S22,C0L2S21,C0L2S20,C0L2S19,C0L2S17,C0L2S15,C0L2S14,C0L2S12,C0L2S11,C0L2S10,C0L2S9,C0L2S8,C0L2S7,C0L2S6,C0L2S5,C0L2S4,C0L2S3,C0L2S2,C0L2S1,C0L2S0,C0L1S0,C0L0S6,C0L0S5,C0L0S4,C0L0S3,C0L0S2,C0L0S1,C0L0S0;";B+="var V10=1;";B+="var V11=new Date();";B+="var V12=(Math.PI*2)/360,V13=0;";B+="var V14,V15=-1,V16=-1,V17=-1,V18=-1,V19=0,V20=0,V21=1,V22=100;";B+="var V23=\"none\",V24=\"block\",V25=\"TABLE\",V26=\"px\",V27=\"\";";B+="var IE="+IE+",V28=0;";B+="var V29=true,V30=false;";B+="function F2(e){e=F3(e);if(e.target&&e.target.nodeName.toLowerCase()=='td'){return true;}if(e){if(e.stopPropagation){e.stopPropagation();}if(e.preventDefault){e.preventDefault();}e.cancelBubble = true;e.returnValue=false;}return false;}";B+="var V31=null;function F4(e){if(window.event){e=window.event;}if(e.touches){if(e.touches.length==0){return V31;}e=e.touches[0];}var Mouse=new Object();Mouse.X=e.clientX;Mouse.Y=e.clientY;";B+="var Scale=Math.min(V32/1300,V33/1300);";B+="Mouse.X=(Mouse.X-(V32-(Scale*1300))/2)/Scale;";B+="Mouse.Y=(Mouse.Y-(V33-(Scale*1300))/2)/Scale;";B+="V31=Mouse;return Mouse;}";B+="function F3(e){if(window.event){return window.event;}else{return e;}}";B+="function F5(Angle){return 90*Math.round((Angle-45)/90);}";B+="var V34=new Array(\"\",\"-webkit-\",\"-moz-\",\"-o-\",\"-ms-\");";B+="function F6(Style,NewTransform){";B+="for(var i=0;i<5;i++){";B+="var Trans=Style.indexOf(V34[i]+\"transform:\");";B+="if(Trans==-1){";B+="Style+=V34[i]+\"transform: \"+NewTransform+\";\";";B+="}else{";B+="Style=Style.substring(0,Trans+V34[i].length+10)+\" \"+NewTransform+Style.substring(Trans+V34[i].length+10);";B+="}";B+="}";B+="return Style;";B+="}";B+="var V32=0,V33=0;";B+="function F7() {if (parent.document.documentElement.clientWidth > 0){return parent.document.documentElement.clientWidth;}else{return F8(parent.window.innerWidth, parent.document.body.clientWidth);}}";B+="function F9() {if (parent.document.documentElement.clientHeight > 0){return parent.document.documentElement.clientHeight;}else{return F8(parent.window.innerHeight, parent.document.body.clientHeight);}}";B+="function F8(Value1, Value2) {";B+="var Value=0;";B+="if (!isNaN(Value1) && Value1 > Value) {Value= Value1;}if (!isNaN(Value2) && Value2 > Value) {Value= Value2;}";B+="return Value;";B+="}";B+="function F10() {V32=F7();V33=F9();if(!V30){V30=V32!=V17||V33!=V18;}V17=V32;V18=V33;}";B+="function F11(Id) {return document.getElementById(Id);}";B+="function F12(){";B+="C0L4S5.src=MF+\"grey_cracked_asphalt_texture__abstract_background_by_firnthirith_df60lt4-pre.png\";";B+="C0L4S4.src=MF+\"grey_cracked_asphalt_texture__abstract_background_by_firnthirith_df60lt4-pre.png\";";B+="C0L4S3.src=MF+\"grey_cracked_asphalt_texture__abstract_background_by_firnthirith_df60lt4-pre.png\";";B+="C0L4S2.src=MF+\"grey_cracked_asphalt_texture__abstract_background_by_firnthirith_df60lt4-pre.png\";";B+="C0L4S1.src=MF+\"grey_cracked_asphalt_texture__abstract_background_by_firnthirith_df60lt4-pre.png\";";B+="C0L4S0.src=MF+\"grey_cracked_asphalt_texture__abstract_background_by_firnthirith_df60lt4-pre.png\";";B+="C0L3S1.src=MF+\"sky-quotes.jpg\";";B+="C0L2S22.src=MF+\"Building.H03.watermarked.2k (1).png\";";B+="C0L2S21.src=MF+\"Building.G03.watermarked.2k (2).png\";";B+="C0L2S20.src=MF+\"Building.H03.watermarked.2k.png\";";B+="C0L2S19.src=MF+\"Building.G03.watermarked.2k (3).png\";";B+="C0L2S17.src=MF+\"Building.G16.watermarked.2k.png\";";B+="C0L2S15.src=MF+\"Old Apartment House.G03.watermarked.2k.png\";";B+="C0L2S14.src=MF+\"Building.G03.watermarked.2k.png\";";B+="C0L2S12.src=MF+\"Honda Civic Coupe 2016.G16.watermarked.2k.png\";";B+="C0L2S11.src=MF+\"Buick GSX 1970.F03.watermarked.2k.png\";";B+="C0L2S10.src=MF+\"Old Apartment House.G15.watermarked.2k.png\";";B+="C0L2S9.src=MF+\"Apartment Building.G03.watermarked.2k.png\";";B+="C0L2S8.src=MF+\"Aston Martin Vantage 2019.G08.watermarked.2k.png\";";B+="C0L2S7.src=MF+\"Apartment Building.G03.watermarked.png\";";B+="C0L2S6.src=MF+\"Christmas Tree Pine.G03.watermarked.2k.png\";";B+="C0L2S5.src=MF+\"Christmas Tree Pine.G03.watermarked.2k.png\";";B+="C0L2S4.src=MF+\"Christmas Tree Pine.G03.watermarked.2k.png\";";B+="C0L2S3.src=MF+\"Dodge Charger 1969.G03.watermarked.2k.png\";";B+="C0L2S2.src=MF+\"Christmas Tree Pine.G03.watermarked.2k.png\";";B+="C0L2S1.src=MF+\"Christmas Tree Pine.G03.watermarked.2k.png\";";B+="C0L2S0.src=MF+\"Red Light Aircraft.K08.watermarked.2k.png\";";B+="C0L1S0.src=MF+\"smoke_PNG55159.png\";";B+="}";B+="function F13(){";B+="V2=F11(\"L\");V3=F11(\"LB\");";B+="C0=F11(\"C0\");V7=C0;C0L4S5=F11(\"C0L4S5\");C0L4S4=F11(\"C0L4S4\");C0L4S3=F11(\"C0L4S3\");C0L4S2=F11(\"C0L4S2\");C0L4S1=F11(\"C0L4S1\");C0L4S0=F11(\"C0L4S0\");C0L3S1=F11(\"C0L3S1\");C0L2S22=F11(\"C0L2S22\");C0L2S21=F11(\"C0L2S21\");C0L2S20=F11(\"C0L2S20\");C0L2S19=F11(\"C0L2S19\");C0L2S17=F11(\"C0L2S17\");C0L2S15=F11(\"C0L2S15\");C0L2S14=F11(\"C0L2S14\");C0L2S12=F11(\"C0L2S12\");C0L2S11=F11(\"C0L2S11\");C0L2S10=F11(\"C0L2S10\");C0L2S9=F11(\"C0L2S9\");C0L2S8=F11(\"C0L2S8\");C0L2S7=F11(\"C0L2S7\");C0L2S6=F11(\"C0L2S6\");C0L2S5=F11(\"C0L2S5\");C0L2S4=F11(\"C0L2S4\");C0L2S3=F11(\"C0L2S3\");C0L2S2=F11(\"C0L2S2\");C0L2S1=F11(\"C0L2S1\");C0L2S0=F11(\"C0L2S0\");C0L1S0=F11(\"C0L1S0\");C0L0S6=F11(\"C0L0S6\");C0L0S5=F11(\"C0L0S5\");C0L0S4=F11(\"C0L0S4\");C0L0S3=F11(\"C0L0S3\");C0L0S2=F11(\"C0L0S2\");C0L0S1=F11(\"C0L0S1\");C0L0S0=F11(\"C0L0S0\");";B+="V17=-1;V18=-1;F10();";if(ShowLoader){B+="V14=window.setTimeout(\"F14();\",100);";}else{B+="F12();";B+="V11=new Date();";B+="V14=window.setTimeout(\"F15();\",5);";}B+="}";B+="function F16(Type,Div,X,Y,Width,Height,Opacity,Angle,FontSize,BorderWidth){";B+="if(Opacity==0){Div.style.display=V23;return;}";B+="V27=\"\";";B+="if(FontSize<0){FontSize*=-Math.min(Width/200,Height/50);}";B+="V10=Math.min(V32/1300,V33/1300);";B+="X*=V10;Y*=V10;";B+="FontSize*=V10;BorderWidth*=V10;Width*=V10;Height*=V10;";B+="if(Opacity<100){";B+="}";B+="if(Angle!=0){V27+=\"-webkit-transform-origin:\"+(Width/2)+\"px \"+(Height/2)+\"px;\";V27=F6(V27,\"rotate(\"+Angle.toFixed(2)+\"deg)\");}";B+="if(V27!=Div.getAttribute(\"oldstyle\")){Div.style.cssText=V27;Div.setAttribute(\"oldstyle\",V27);}";B+="if(BorderWidth>0){Div.style.borderWidth=Math.round(BorderWidth)+V26;Div.strokeWeight=BorderWidth.toString();}";B+="if(FontSize>0){Div.style.fontSize=FontSize+V26;}";B+="var NewLeft=X-(Width/2),NewTop=Y-(Height/2);";B+="Div.style.left=NewLeft.toFixed(2)+V26;";B+="Div.style.top=NewTop.toFixed(2)+V26;";B+="Div.style.width=Width.toFixed(2)+V26;";B+="Div.style.height=Height.toFixed(2)+V26;";B+="Div.style.opacity=(Opacity/100);";if(IE==-1||IE>8){B+="if(Div.nodeName.toUpperCase()==V25){Div.style.display=V25;}else{";}B+="Div.style.display=V24;";if(IE==-1||IE>8){B+="}";}B+="}";B+="function F17(Type,Div){";B+="Div.style.display=V23;";B+="}";B+="function F18(Index,Frame,Play){";B+="}";B+="function F19(Div,Clip){";B+="if(Clip){";B+="var Scale=Math.min(V32/1300,V33/1300);";B+="Div.style.cssText=\"left:\"+((V32-(Scale*1300))/2)+\"px;top:\"+((V33-(Scale*1300))/2)+\"px;width:\"+(Scale*1300)+\"px;height:\"+(Scale*1300)+\"px;display:block;overflow:hidden;\";";B+="}else{";B+="Div.style.cssText=\"left:0px;top:0px;width:\"+V32+\"px;height:\"+V33+\"px;display:block;overflow:hidden;\";";B+="}";B+="}";if(ShowLoader){B+="function F14(){";T=0;B+="V14=window.setTimeout(\"F20();\",15);";B+="}";B+="function F21(Filename,Wait,IsBG){";B+="var I=document.createElement(\"img\");if(IE>8||"+(Firefox>-1)+"){I.style.cssText=\"position:absolute;width:1px;height:1px;display:block;\";document.getElementsByTagName(\"body\")[0].appendChild(I);}";B+="if(Wait){I.onload=function(){V28++;};I.onerror=function(){V28++;};}";B+="I.src=Filename;";B+="}";B+="function F20(){";if(V4>0){B+="var Percent=Math.round(Math.min(100,(V28*100)/"+V4+"));";B+="V3.style.width=Percent+\"%\";";B+="V2.style.display=V24;";B+="V2.style.left=Math.round((V32-L.clientWidth)*0.50)+V26;";B+="V2.style.top=Math.round((V33-L.clientHeight)*0.50)+V26;";}B+="if(V28>="+V4+"){";B+="V2.style.display=V23;";B+="F12();";B+="V11=new Date();";B+="V14=window.setTimeout(\"F15();\",15);";B+="}else{";B+="V14=window.setTimeout(\"F20();\",15);";B+="}}";}B+="function F22(){";B+="F19(V7,true);";B+="if(screen.width>1024){V5=1;}else if(screen.width>600){V5=40;}else if(screen.width>400){V5=60;}else{V5=80;}";B+="V30=false;";B+="}";B+="function F15(){";B+="if(V30){F22();}";B+="var CTime=new Date();";B+="var TSpan=CTime.getTime()-V11.getTime();";B+="V11=CTime;";B+="var SpanGap=Math.min(V5,Math.max(1,V5-TSpan+V19));";B+="V19=SpanGap;";B+="var Span=(TSpan/1000)*12;";B+="if(Span>1){Span=1;};if(Span<-1){Span=-1;};";B+="if(V29){V13+=Span*V6;}";B+="if(((V6>0&&V13>V22)||(V6<0&&V13<0))){V13=0;}";B+="var Pos=0,NX,NY,NA;";B+="switch(V20){";B+="case 0:";B+="if(true){F16(1,C0L4S5,168.34,1150.68,495,495,100,0,0,0);}";B+="if(true){F16(1,C0L4S4,662.34,1150.68,495,495,100,0,0,0);}";B+="if(true){F16(1,C0L4S3,662.12,656.48,495,495,100,0,0,0);}";B+="if(true){F16(1,C0L4S2,168.12,656.48,495,495,100,0,0,0);}";B+="if(true){F16(1,C0L4S1,1157.12,656.48,495,495,100,0,0,0);}";B+="if(true){F16(1,C0L4S0,1155.34,1150.68,495,495,100,0,0,0);}";B+="if(true){F16(1,C0L3S1,634.69,256.20,1376,826,100,0,0,0);}";B+="if(true){F16(1,C0L2S22,1224.91,663.48,601,601,100,0,0,0);}";B+="if(true){F16(1,C0L2S21,596.76,549.14,841,841,100,0,0,0);}";B+="if(true){F16(1,C0L2S20,911.28,581.11,902,902,100,0,0,0);}";B+="if(true){F16(1,C0L2S19,-55.83,762.33,540,584,100,0,0,0);}";B+="if(true){F16(1,C0L2S17,358.99,744.82,683,683,100,0,0,0);}";B+="if(true){F16(1,C0L2S15,686.66,886,587,587,100,0,0,0);}";B+="if(true){F16(1,C0L2S14,113.52,824.35,865,865,100,0,0,0);}";B+="if(V13<35){F17(1,C0L2S12);}";B+="if(V13>=35&&V13<46){Pos=(V13-35)/11;NX=619.19+(Pos*99.04);NY=1070.20+(Pos*139.29);F16(1,C0L2S12,NX,NY,139.89+(Pos*22.47),145.07+(Pos*24.93),100,0,0,0);}";B+="if(V13>=46&&V13<60){NX=718.23;NY=1209.49;F16(1,C0L2S12,NX,NY,162.36,170,100,0,0,0);}";B+="if(V13>=60&&V13<75){Pos=(V13-60)/15;NX=718.23+(Pos*134.15);NY=1209.49+(Pos*178.05);F16(1,C0L2S12,NX,NY,162.36,170,100,0,0,0);}";B+="if(V13>=75){F16(1,C0L2S12,852.38,1387.54,162.36,170,100,0,0,0);}";B+="if(V13<80){F17(1,C0L2S11);}";B+="if(V13>=80&&V13<100){Pos=(V13-80)/20;NX=489.52+(Pos*656.09);NY=960.75+(Pos*417.08);F16(1,C0L2S11,NX,NY,167.53+(Pos*45.26),167.53+(Pos*45.26),100,0,0,0);}";B+="if(V13>=100){F16(1,C0L2S11,1145.62,1377.82,212.78,212.78,100,0,0,0);}";B+="if(true){F16(1,C0L2S10,459.21,1044.04,740,740,100,0,0,0);}";B+="if(true){F16(1,C0L2S9,1249.16,813.61,691,691,100,0,0,0);}";B+="if(V13<41){F17(1,C0L2S8);}";B+="if(V13>=41&&V13<50){Pos=(V13-41)/9;NX=1335.29+(Pos*-319.51);NY=1237.53+(Pos*-239.02);F16(1,C0L2S8,NX,NY,190.38,190.38,100,0,0,0);}";B+="if(V13>=50){F16(1,C0L2S8,1015.77,998.51,190.38,190.38,100,0,0,0);}";B+="if(true){F16(1,C0L2S7,968.98,976.82,599,599,100,0,0,0);}";B+="if(true){F16(1,C0L2S6,635.89,1169.04,316.54,318.98,100,0,0,0);}";B+="if(true){F16(1,C0L2S5,542.82,1188.90,358,358,100,0,0,0);}";B+="if(true){F16(1,C0L2S4,194.87,1248.53,326,332,100,0,0,0);}";B+="if(V13<60){Pos=(V13-0)/60;NX=1478.89+(Pos*-770.73);NY=1003.01+(Pos*363.41);F16(1,C0L2S3,NX,NY,203.20,203.20,100,0,0,0);}";B+="if(V13>=60){F16(1,C0L2S3,708.16,1366.43,203.20,203.20,100,0,0,0);}";B+="if(true){F16(1,C0L2S2,1275.55,1164.68,326,332,100,0,0,0);}";B+="if(true){F16(1,C0L2S1,19.85,1133.80,326,332,100,0,0,0);}";B+="if(V13<95){Pos=(V13-0)/95;NX=1404.73+(Pos*-1544.15);NY=-219.83+(Pos*533.17);F16(1,C0L2S0,NX,NY,2048+(Pos*-1844.39),2048+(Pos*-1807.80),100,0,0,0);}";B+="if(V13>=95){F16(1,C0L2S0,-139.41,313.34,203.61,240.20,100,0,0,0);}";B+="if(V13<50){Pos=(V13-0)/50;NX=394.67+(Pos*57);NY=961;F16(1,C0L1S0,NX,NY,1851,865,100,0,0,0);}";B+="if(V13>=50&&V13<100){Pos=(V13-50)/50;NX=451.67+(Pos*-57);NY=961;F16(1,C0L1S0,NX,NY,1851,865,100,0,0,0);}";B+="if(V13>=100){F16(1,C0L1S0,394.67,961,1851,865,100,0,0,0);}";B+="if(V13<20){F16(1,C0L0S6,940.70,237.84,9.12,21.01,80,0,0,0);}";B+="if(V13>=20&&V13<21){Pos=(V13-20)/1;NX=940.70;NY=237.84;F16(1,C0L0S6,NX,NY,9.12,21.01,80+(Pos*-80),0,0,0);}";B+="if(V13>=21){F16(1,C0L0S6,940.70,237.84,9.12,21.01,0,0,0,0);}";B+="if(V13<10){F17(1,C0L0S5);}";B+="if(V13>=10&&V13<45){F16(1,C0L0S5,907.89,339.09,9.12,21.01,80,0,0,0);}";B+="if(V13>=45&&V13<46){Pos=(V13-45)/1;NX=940.39;NY=286.90;F16(1,C0L0S5,NX,NY,9.12,21.01,80+(Pos*-80),0,0,0);}";B+="if(V13>=46){F16(1,C0L0S5,940.39,286.90,9.12,21.01,0,0,0,0);}";B+="if(V13<10){F17(1,C0L0S4);}";B+="if(V13>=10&&V13<45){F16(1,C0L0S4,940.39,339.40,9.12,21.01,80,0,0,0);}";B+="if(V13>=45&&V13<46){Pos=(V13-45)/1;NX=940.39;NY=286.90;F16(1,C0L0S4,NX,NY,9.12,21.01,80+(Pos*-80),0,0,0);}";B+="if(V13>=46){F16(1,C0L0S4,940.39,286.90,9.12,21.01,0,0,0,0);}";B+="if(V13<6){F17(1,C0L0S3);}";B+="if(V13>=6&&V13<74){F16(1,C0L0S3,1014.29,393.62,26.31,29.45,17,358.09,0,0);}";B+="if(V13>=74&&V13<75){Pos=(V13-74)/1;NX=940.39;NY=286.90;F16(1,C0L0S3,NX,NY,9.12,21.01,80+(Pos*-80),0,0,0);}";B+="if(V13>=75){F16(1,C0L0S3,940.39,286.90,9.12,21.01,0,0,0,0);}";B+="if(V13<35){F17(1,C0L0S2);}";B+="if(V13>=35&&V13<50){NX=819.97;NY=429.26;F16(1,C0L0S2,NX,NY,11.77,18.57,50,0,0,0);}";B+="if(V13>=50&&V13<51){Pos=(V13-50)/1;NX=819.97;NY=429.26;F16(1,C0L0S2,NX,NY,11.77,18.57,50+(Pos*-50),0,0,0);}";B+="if(V13>=51){F16(1,C0L0S2,819.97,429.26,11.77,18.57,0,0,0,0);}";B+="if(V13<25){F17(1,C0L0S1);}";B+="if(V13>=25&&V13<60){NX=886.72;NY=484.48;F16(1,C0L0S1,NX,NY,8.97,28.21,50,0,0,0);}";B+="if(V13>=60&&V13<61){Pos=(V13-60)/1;NX=886.72;NY=484.48;F16(1,C0L0S1,NX,NY,8.97,28.21,50+(Pos*-50),0,0,0);}";B+="if(V13>=61){F16(1,C0L0S1,886.72,484.48,8.97,28.21,0,0,0,0);}";B+="if(V13<10){NX=753.49;NY=907.08;F16(1,C0L0S0,NX,NY,16.72,32.73,40,0.73,0,0);}";B+="if(V13>=10&&V13<15){F17(1,C0L0S0);}";B+="if(V13>=15&&V13<20){NX=753.49;NY=907.08;F16(1,C0L0S0,NX,NY,16.72,32.73,40,0.73,0,0);}";B+="if(V13>=20&&V13<22){F17(1,C0L0S0);}";B+="if(V13>=22&&V13<26){NX=753.49;NY=907.08;F16(1,C0L0S0,NX,NY,16.72,32.73,40,0.73,0,0);}";B+="if(V13>=26&&V13<31){F17(1,C0L0S0);}";B+="if(V13>=31&&V13<34){NX=753.49;NY=907.08;F16(1,C0L0S0,NX,NY,16.72,32.73,40,0.73,0,0);}";B+="if(V13>=34&&V13<38){F17(1,C0L0S0);}";B+="if(V13>=38&&V13<50){NX=753.49;NY=907.08;F16(1,C0L0S0,NX,NY,16.72,32.73,40,0.73,0,0);}";B+="if(V13>=50&&V13<53){NX=753.49;NY=907.08;F16(1,C0L0S0,NX,NY,16.72,32.73,40,0.73,0,0);}";B+="if(V13>=53&&V13<57){F17(1,C0L0S0);}";B+="if(V13>=57&&V13<61){NX=753.49;NY=907.08;F16(1,C0L0S0,NX,NY,16.72,32.73,40,0.73,0,0);}";B+="if(V13>=61&&V13<67){F17(1,C0L0S0);}";B+="if(V13>=67&&V13<91){NX=753.49;NY=907.08;F16(1,C0L0S0,NX,NY,16.72,32.73,40,0.73,0,0);}";B+="if(V13>=91&&V13<99){F17(1,C0L0S0);}";B+="if(V13>=99&&V13<100){NX=753.49;NY=907.08;F16(1,C0L0S0,NX,NY,16.72,32.73,40,0.73,0,0);}";B+="if(V13>=100){F16(1,C0L0S0,753.49,907.08,16.72,32.73,40,0.73,0,0);}";B+="break;";B+="}";B+="var IntTime=parseInt(V13);if(IntTime!=V16||V20!=V15){V16=IntTime;V15=V20;";B+="}";B+="V14=window.setTimeout(\"F15();\",SpanGap);";B+="}";B+="function F23(X,Y,OX,OY,Angle){X-=OX;Y-=OY;var r=Angle*(Math.PI/180);var ct=Math.cos(r);var st=Math.sin(r);var x=ct*X-st*Y;var y=st*X+ct*Y;var Point=new Object();Point.X=x+OX;Point.Y=y+OY;return Point;}";B+="<"+"/script>";B+="</"+"head>";B+="<body onload=\"window.setTimeout('F13();', 100);\" onresize=\"F10();\" onorientationchange=\"F10();\" ondragstart=\"return false;\" style=\"cursor:default;\" "+MouseDown+"=\"var m=F4(event);\">";if(ShowLoader){B+="<table id=\"L\" class=\"Loader\"><tr><td class=\"LoaderText\">Hippani</td></tr><tr><td ><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAB3RJTUUH3wMbDyoZ71iNwQAAAAlwSFlzAAAOwgAADsIBFShKgAAAAARnQU1BAACxjwv8YQUAAAJfSURBVHja7ZXLa1NBFMbvnUiDoNCikW60ooIQJa+1unNTQUEFcaku7E5sXemmIIJY/wK34kqooFg3KnZRdHPJy4aoMboQ1EDR9iohrxt/Y2/LNKRyZ2roJgc+zty5M+f75px5WFbf+rbJZgcdGI/HTwghbtIcBjOu646XSqWljQrYEmRQMpmM4aZt2x7wuy5tx/DnepEBEY1GB/ErZFY4HL4G+YQ6qN1uN2q12gGa9YBc9UKh8BPvdRXAKkdwk+AkGIIwcHmCGILbuB/gied5k9ls9vOqgFQqdRT3GAz+T9J/iFkEpzKZzKwdi8V2hUKheRa8UzNIEzfvZ2uPgYgFSnhYQH7VgPxDq9U6lE6nE2CE74ugpRMDzh3srXFBY1RXPXPGcrnc+0QicZ7yzVJTWdv7unGwUYFyrfTJlVYqlde+kDu4Y9wPt+ifMxCwW1gB7wLFRCQS2eu3pyH2EPII7DMQYAvtGcvHc4q7YoD6X2EjbUXEA/rGDARYNuffJeY23YmQvgMzzB3i86xhjCXd9KuZOCgRgKSKCynXuGrftUugaQ6P1nCz2dyPkK9d/j/vqQCO5zP5Yubz+S98vunIzG+E3e2pANK++vDI06K06+ACwsq9LsEak3cIeAWO8A48lH3Gm7BL8DlwDxQt/4luNBrflGxMVKvVy8VicWFNlkyPoUIsn9nb3Ak35Kfu/HVLQNxPuNOsQu7gM6C8ztCnkF83IZfWtQSQ1bjfjzuO89HvKpOpHP1vyVa4Y/iUafZWMvCLwK4K+l4o5H+NVZZwLzvGLvIsOxsR0Le+bbr9AdSwQAbXDReKAAAAAElFTkSuQmCC\" style=\"width:32px;height:32px;position:relative;padding-bottom:8px;display:block;padding-left:44px\" /></td></tr><tr><td class=\"LoaderBorder\"><div id=\"LB\" class=\"LoaderBar\"></div></td></tr></table>";}B+="<div id=\"C0\">";B+="<span id=\"C0L4\" >";B+="<img id=\"C0L4S5\" class=\"V1\" />";B+="<img id=\"C0L4S4\" class=\"V1\" />";B+="<img id=\"C0L4S3\" class=\"V1\" />";B+="<img id=\"C0L4S2\" class=\"V1\" />";B+="<img id=\"C0L4S1\" class=\"V1\" />";B+="<img id=\"C0L4S0\" class=\"V1\" />";B+="</span>";B+="<span id=\"C0L3\" >";B+="<img id=\"C0L3S1\" class=\"V1\" />";B+="</span>";B+="<span id=\"C0L2\" >";B+="<img id=\"C0L2S22\" class=\"V1\" />";B+="<img id=\"C0L2S21\" class=\"V1\" />";B+="<img id=\"C0L2S20\" class=\"V1\" />";B+="<img id=\"C0L2S19\" class=\"V1\" />";B+="<img id=\"C0L2S17\" class=\"V1\" />";B+="<img id=\"C0L2S15\" class=\"V1\" />";B+="<img id=\"C0L2S14\" class=\"V1\" />";B+="<img id=\"C0L2S12\" class=\"V1\" />";B+="<img id=\"C0L2S11\" class=\"V1\" />";B+="<img id=\"C0L2S10\" class=\"V1\" />";B+="<img id=\"C0L2S9\" class=\"V1\" />";B+="<img id=\"C0L2S8\" class=\"V1\" />";B+="<img id=\"C0L2S7\" class=\"V1\" />";B+="<img id=\"C0L2S6\" class=\"V1\" />";B+="<img id=\"C0L2S5\" class=\"V1\" />";B+="<img id=\"C0L2S4\" class=\"V1\" />";B+="<img id=\"C0L2S3\" class=\"V1\" />";B+="<img id=\"C0L2S2\" class=\"V1\" />";B+="<img id=\"C0L2S1\" class=\"V1\" />";B+="<img id=\"C0L2S0\" class=\"V1\" />";B+="</span>";B+="<span id=\"C0L1\" >";B+="<img id=\"C0L1S0\" class=\"V1\" />";B+="</span>";B+="<span id=\"C0L0\" >";var S1="";if(HasSVG){S1+="<svg id=\"{id}\" class=\"\" viewBox=\"0 0 49 100\" preserveAspectRatio=\"none\" >";S1+="<path d=\" M0,0 L49,0 L49,100 L0,100 Z\" fill-rule=\"evenodd\" fill=\"#FFCC33\" fill-opacity=\"1.00\" stroke=\"none\" />";S1+="</svg>";}B+=S1.replace("{id}","C0L0S6").replace(/GDef/g,"GDef1");B+=S1.replace("{id}","C0L0S5");B+=S1.replace("{id}","C0L0S4");B+=S1.replace("{id}","C0L0S3");B+=S1.replace("{id}","C0L0S2");B+=S1.replace("{id}","C0L0S1");B+=S1.replace("{id}","C0L0S0");B+="</span>";B+="</div>";B+="</"+"body></html>";document.body.innerHTML = "<iframe id=\"Movie\" style=\"width:100%;height:100%;\" scrolling=\"no\" frameborder=\"0\"></iframe>";var IFrame = document.body.firstChild;var Doc = IFrame.contentDocument || IFrame.contentWindow.document;Doc.open();Doc.write(B);Doc.close();}window.onresize=function(){if(Mob){if(window==window.top){window.scrollTo(0,0);}}else{document.getElementById('Movie').style.cssText='width:'+(window.innerWidth||document.documentElement.clientWidth)+'px;height:'+(window.innerHeight||document.documentElement.clientHeight)+'px;';}};

