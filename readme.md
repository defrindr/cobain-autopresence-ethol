# Ethol Auto Presence

<img src="./assets/logo.png" style="display: block; width:220px;height:auto;margin-bottom:25px">

Adalah sebuah library untuk melakukan presensi otomatis pada [Layanan Ethol](http://ethol.pens.ac.id)



## Instalasi


1. Cloning Repository Ini

```sh
git clone https://github.com/defrindr/ethol-autopresence
cd ethol-autopresence
```

2. Install dependency

```sh
yarn install
#atau
npm install
```

3. Copy ```credentials.js.sample``` menjadi ```credentials.js``` dan Atur credentials akun ethol anda

```sh
cp credentials.js.sample credentials.js
nano credentials.js
```

4. Ubah BASE_PATH pada config/file.js menjadi fullpath dari directory dimana library ini di install


5. Jalankan Bot

```sh
yarn start
#atau
npm run start
#atau
node main.js
```


## Todos

- Menambahkan comment di setiap fungsi
- ...

