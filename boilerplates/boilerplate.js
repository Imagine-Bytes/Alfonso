class Plate {
	// = (options = {})
		// let _this = {}
		constructor (name, type, simple, addons = []){
			this.name = name || "Test"
			this.type = type || "component"
			this.simple = simple || true
			this.styles = [
				"sass",
				"scss",
				"module",
				"cssInJs",
				"styledComponent",
				"less",
				"tailwind",
			
			this.rendered = `<div>Hi from Alfonso</div>`
			this.dependencies = [
			"import React from 'react';",
			""
			]
			this.body = {
				default: `${this.rendered}`,
				ts: ""
			}
			// this.checkAddons
			this.structure = () => {
				let dependencies = this.dependencies.map(dependency => {
					return dependency+"\n"
				})
				return `${dependencies}

${this.body.default}
				`
			}

		}
}

module.exports = Plate