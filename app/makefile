#!make
start:
	npm start

predeploy:
	rm -rf ../static
	npm run build
	mv ./build/* ../
	rm -rf ./build