#!/usr/bin/env bash

	openssl req -x509 -newkey rsa:4096 -sha256 -nodes -keyout tls.key -out tls.crt -subj "/CN=scitest.esss.lu.se" -days 3650
	kubectl create secret -ndev tls scichatservice --key tls.key --cert tls.crt
	rm tls.*

	openssl req -x509 -newkey rsa:4096 -sha256 -nodes -keyout tls.key -out tls.crt -subj "/CN=scicat.ess.eu" -days 3650
	kubectl create secret -nproduction tls scichatservice --key tls.key --cert tls.crt
	rm tls.*
