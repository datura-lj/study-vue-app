<template>
	<div class="navtab">
		<div id="menu">
			<div id="menu_list">
		    	<img src="../../assets/images/navtools/prev.png" alt=""/>
	        <img src="../../assets/images/navtools/open.png" alt="" />
	        <img src="../../assets/images/navtools/clos.png" alt="" />
	        <img src="../../assets/images/navtools/full.png" alt="" />
	        <img src="../../assets/images/navtools/refresh.png" alt="" />
		    </div>
			<div id="home"></div>
		</div>
	</div>
</template>
<script>

export default {
	name: 'navtab',
	data(){
		return{
			msg: 'hi how are you 111'
		}
	},
	mounted(){
		function toMove(obj,delay,bType){
			if(obj.timer){
				clearTimeout(obj.timer);
			}
			obj.timer=setTimeout(function(){
				if(bType){		
					var oXY=getXY(obj.deg,150);
					setCss(obj,{
						$Transition:"0.3s all ease-in",
						left:-Math.round(oXY.x*1.1)+"px",
						top:-Math.round(oXY.y*1.1)+"px",
						$Transform:"rotate(-360deg)"
					});
					obj.timer=setTimeout(function(){
						setCss(obj,{
							$Transition:"0.1s all ease-in-out",
							left:-Math.round(oXY.x*0.9)+"px",
							top:-Math.round(oXY.y*0.9)+"px"
						});
						obj.timer=setTimeout(function(){
							setCss(obj,{
								$Transition:"0.05s all ease",
								left:-Math.round(oXY.x)+"px",
								top:-Math.round(oXY.y)+"px"
							});	
						},105);
					},305);			
				}else{
					setCss(obj,{
						MozTransition:"0.4s -moz-transform linear,0.3s 0.35s left ease,0.3s 0.35s top ease",
						OTransition:"0.3s 0.35s left ease,0.3s 0.35s top ease,0.4s -o-transform linear",
						WebkitTransition:"0.3s 0.35s left ease,0.3s 0.35s top ease,0.4s -webkit-transform linear",
						left:"0px",
						top:"0px",
						$Transform:"rotate(0deg)"
					});	
				}
			},delay);
		}
		function setCss(obj,oAttr){
			var sName="";
			var aName=["Webkit","Moz","O"];
			for(sName in oAttr){
				if(sName.charAt(0)==="$"){
					for(var i=0;i<aName.length;i++){
						obj.style[aName[i]+sName.substring(1)]=oAttr[sName];
					}
					obj.style[sName.substring(1)]=oAttr[sName];
				}else{
					obj.style[sName]=oAttr[sName];
				}
			}
		}
		function getXY(iDeg,iRadius){
			if(iDeg==0){
				return {x:0,y:iRadius};
			}else if(iDeg==90){
				return {x:iRadius,y:0};
			}
			return {x:Math.sin(iDeg*Math.PI/180)*iRadius,y:Math.cos(iDeg*Math.PI/180)*iRadius};
		}
		var oBtn=document.getElementById("home");
		var aMenus=document.getElementById("menu_list").getElementsByTagName("img");
		oBtn.off=true;
		setCss(oBtn,{$Transition:"0.5s ease all"})
		for(var i=0;i<aMenus.length;i++){
			aMenus[i].deg=90/(aMenus.length-1)*i;	
			aMenus[i].index=i;
			aMenus[i].onclick=function(){
				var obj=this;
				setCss(obj,{$Transition:"0.5s ease all",$Transform:"scale(2) rotate(-360deg)",opacity:0.1});
				setTimeout(function(){
					setCss(obj,{$Transition:"0.1s ease all",$Transform:"rotate(-360deg)",opacity:1});
				},300);
			};
		}
		oBtn.onclick=function(){
			if(this.off){
				setCss(this,{$Transform:"rotate(-360deg)"});
			}else{
				setCss(this,{$Transform:"rotate(0deg)"});
			}
			for(var i=0;i<aMenus.length;i++){
				if(this.off){
					toMove(aMenus[i],i*50,this.off);
				}else{
					toMove(aMenus[i],(aMenus.length-1-i)*50,this.off);
				}
			}
			this.off=!this.off;
		};
	}
}
</script>
<style lang='scss' rel="stylesheet/scss" type="text/css" scoped>
  .navtab{
  	#menu{
  		width: 50px;
  		height: 50px;
  		position: absolute;
  		left: 0.05rem; 
  		top: 0.05rem; 
  		transform: rotate(180deg);
  	}
		#menu_list{
			height: 42px;
			width: 42px; 
			position: relative;
			margin: 4px;
		}
		#menu_list img{ 
			border-radius: 21px;
			position: absolute;
			left: 0;
			top: 0;
		}
		#home{
			width: 50px;
			height: 50px;
		  background:url('../../assets/images/navtools/home.png') no-repeat; 
		  border-radius: 25px; 
		  position: absolute; 
		  left: 0;
		  top: 0;
		}
  }
</style>