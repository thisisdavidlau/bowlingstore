function bowlingBalls(name, cost, line, image){
	this.name = name
	this.cost = cost
	this.line = line
	this.image = image
}

var ballArray = []

var code30 = new bowlingBalls('CODE 30', 199.99, 'Premier', 'img/code30.png')
var codePlat = new bowlingBalls('CODE PLATINUM', 172.50, 'Premier', 'img/codePlatinum.png')
var crux = new bowlingBalls('CRUX', 162.99, 'Premier', 'img/crux.png')
var HyperCell = new bowlingBalls('HYPER CELL SKID', 155.99, 'HP4', 'img/HyperCellSkid.png')
var IQ = new bowlingBalls('IQ TOUR RISING', 249.95, 'Premier', 'img/IqRising.png')
var optimus = new bowlingBalls('OPTIMUS', 146.99, 'Master', 'img/optimus.png')
var SkyRocket = new bowlingBalls('SKY ROCKET', 122.99, 'Thunder', 'img/SkyRocket.png')
var snapLock = new bowlingBalls('SNAP LOCK', 169.95, 'Premier', 'img/snapLock.png')
var syncTour = new bowlingBalls('SYNC TOUR', 139.99, 'Premier', 'img/SyncTour.png')
var codeRed = new bowlingBalls('CODE RED', 199.99, 'Premier', 'img/codeRed.png'  )
var IQTourFusion = new bowlingBalls('IQ TOUR FUSION', 149.99, 'Master', 'img/iqTourFusion.png')
var zeroGravity = new bowlingBalls('ZERO GRAVITY', 119.99, 'Premier', 'img/zeroGravity.png')


ballArray.push(code30)
ballArray.push(codePlat)
ballArray.push(codeRed)
ballArray.push(crux)
ballArray.push(HyperCell)
ballArray.push(IQ)
ballArray.push(IQTourFusion)
ballArray.push(optimus)
ballArray.push(SkyRocket)
ballArray.push(snapLock)
ballArray.push(syncTour)
ballArray.push(zeroGravity)



for(i = 0; i < ballArray.length; i++) {
	var ballName = document.createTextNode(ballArray[i].name)
	var ballCost = document.createTextNode('$' + ballArray[i].cost)
	var ballLine = document.createTextNode(ballArray[i].line)
	var ballBtn = document.createTextNode('Add to Cart')
	var ballImage = ballArray[i].image

	var newCol = document.createElement('div')
	var newDiv = document.createElement('div')
	var nameH1 = document.createElement('h1')
	var costH3 = document.createElement('h3')
	var lineH4 = document.createElement('h4')
	var button = document.createElement('button')
	var image = document.createElement('img')


	nameH1.appendChild(ballName)
	costH3.appendChild(ballCost)
	lineH4.appendChild(ballLine)
	button.appendChild(ballBtn)
	image.src = ballImage
	image.className = "img-responsive"
	image.id = "ballId"


	newCol.className = "col-lg-3 col-md-3 col-sm-4 col-xs-6"
	newDiv.className = "ballDiv"
	newDiv.appendChild(image)
	newDiv.appendChild(lineH4)
	newDiv.appendChild(nameH1)
	newDiv.appendChild(costH3)
	newDiv.appendChild(button)
	newCol.appendChild(newDiv)

	document.getElementById("balls").appendChild(newCol)

	var numItems = 0
	var cart = document.getElementById("cart")
	cart.textContent = numItems

	button.addEventListener('click', function(){
		numItems++
		cart.textContent = numItems
	});

	// image.addEventListener('mouseover', handleMouseOver)
	// function handleMouseOver(e){
	// 	e.target.className = "animated rotateIn"
	// }

}

$(document).ready(function(){
    /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
    var url = $("#cartoonVideo").attr('src');
    
    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $("#myModal").on('hide.bs.modal', function(){
        $("#cartoonVideo").attr('src', '');
    });
    
    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again */
    $("#myModal").on('show.bs.modal', function(){
        $("#cartoonVideo").attr('src', url);
    });
});









