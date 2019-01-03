#!make
start:
	yarn start

predeploy:
	rm -rf ../static
	yarn run build
	mv ./build/* ../
	rm -rf ./build