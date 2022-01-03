class Plate {
	// = (options = {})
		// let _this = {}
		constructor (name = "Plate", type = "component", tech = "react", variant = "simple"){
			this.name = name
			this.type = type
			this.variant = variant
			this.output = ""

			this.setOutput = (value) => {
				this.output = value
			}
		}			
}

module.exports = Plate