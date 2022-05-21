# Ethol Auto Presence

<img src="./assets/logo.png" style="display: block; width:220px;height:auto;margin-bottom:25px">

Adalah sebuah library untuk melakukan presensi otomatis pada [Layanan Ethol](http://ethol.pens.ac.id)



## Instalasi


### Cloning Repository Ini

```sh
git clone https://github.com/defrindr/ethol-autopresence
cd ethol-autopresence
```

### Install dependency

```sh
yarn install
```
atau
```sh
npm install
```

### Copy ```credentials.js.sample``` menjadi ```credentials.js``` dan Atur credentials akun ethol anda

```sh
cp credentials.js.sample credentials.js
nano credentials.js
```

### Ubah BASE_PATH pada config/file.js

Ubah BASE_PATH menjadi fullpath dari directory dimana library ini di install

### Jalankan Bot

```sh
yarn start
```
atau
```sh
npm run start
```
atau
```sh
node main.js
```


## Todos

- Menambahkan comment di setiap fungsi
- ...

