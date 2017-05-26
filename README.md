# Tutorial
.install: root directory: npm i
	cd fireloop: npm i
	cd webapp: npm i
.run server and client: fireloop serve
.node version: 6.x.x
.fix apiUrl in lb.config.ts file: 0.0.0.0:3000 to your apiUrl (ex: localhost:3000) in sdk client in webapp.