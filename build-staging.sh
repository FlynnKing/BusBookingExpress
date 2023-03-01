#! /usr/bin/bash
echo "Avvio sistema di compilazione de sto ca"
echo "Creazione Doker image lol"
docker build . -t mtme/busbooking
clear
echo "creazione terminata"
echo "Avvio container bruh"
docker run mtme/busbooking