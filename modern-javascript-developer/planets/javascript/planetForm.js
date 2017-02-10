"use strict";

function fillMeOut(planetData) {
			let outputMe = 
				`<div class="col-xs-6 planet" id="${planetData.Name}">
					<ul>
						<li>
							<h3>
							Planet Name: ${planetData.Name}
							</h3>
						</li>
						<li>
							Named After: ${planetData.Named}
						</li>
						<li>
							Distance From The Sun: ${planetData.DFTS}
						</li>
						<li>
							Orbit Period: ${planetData.Orbit_Period}
						</li>
						<li>
							Diameter: ${planetData.Diameter}
						</li>
						<li>
							Discovered: ${planetData.Discovered}
						</li>
						<li>
							Mass: ${planetData.Mass}
						</li>
						<li>
							Pressure: ${planetData.Pressure}
						</li>
						<li>
							Atmospheric Comp: ${planetData.Atomsphere_Comp}
						</li>
						<li>
							Orbiting Bodies: ${planetData.Satellites}
						</li>
						<li>
							Visited By: ${planetData.Visited}
						</li>
						<li>
							Day Duration: ${planetData.Day}
						</li>
					</ul>
				<div>`;
	return outputMe;
}

function appendTo(domElement, planetForm) {
	domElement.append(planetForm);
}


module.exports = {fillMeOut, appendTo};


