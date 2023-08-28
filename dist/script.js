gsap.set(".wrapper", {autoAlpha:1})
gsap.set("h3", {xPercent:-100})
const text = new SplitText("h3", {type:"chars"})
const textWidth = document.querySelector("h3").clientWidth

const handleDistance = ()=> {
	let fullWidth = window.innerWidth + textWidth
	if(gsap.getProperty("h3 div:nth-of-type(1)", "x") > fullWidth ){
		gsap.set("body", {background:"rebeccapurple"})
		animation.pause()
	}
}


const animation = gsap.timeline({repeatRefresh:true, repeat:-1, onRepeat:handleDistance})
animation.to(text.chars, {x:"+=150", ease:"sine.inOut", 
	stagger:{
		each:0.03,
		from:"end"
	}
})



animation.to(text.chars, {y:-60, ease:"sine.inOut", duration:0.75,
	stagger:{
				from:"end",
		each:0.03,
		yoyo:true,
		repeat:1,
		
	}
}, 0)