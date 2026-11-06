//your JS code here. If required.
const ul=document.getElementById("band")
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
function removeArticals(name) {
    const Lower=name.toLowerCase()
	if(Lower.startsWith("the ")){
		name=name.slice(4);
	}
	if(Lower.startsWith("an ")){
		name=name.slice(3)
	}
	if(Lower.startsWith("a ")){
		name=name.slice(2)
	}
	return name
}

 const sortedBands=bands.sort((a,b)=>{
	return removeArticals(a).localeCompare(removeArticals(b))
 })
sortedBands.forEach((band)=>{
	const li=document.createElement("li")
	li.textContent=band;
	li.style.padding="4px"
	ul.appendChild(li)
})

