# Prueba Técnica Ainhoa Hdez. Salo

Proyecto en NX monorepo y con Angular 17.

## Descripción

La prueba consiste en coger buscar un repositorio, copiar la URL, lanzar la busqueda y listar las incidencias que tiene asociadas, pudiendo ver algunos de sus campos.

## Para iniciar el proyecto
Clonar repositorio
```sh
git clone https://github.com/AinhoaSalo/technical-test-irontec.git
```

### Para instalar todas las dependencias del proyecto
 - Ir al directorio apps/technical-test
 - Ejecutar el siguiente comando
    ```sh
    npm install
    ```

### Configurar el environment con el token de Github
Vas a tu perfil, ajustes, developers settings, personal acces token, [token](https://github.com/settings/tokens) (classic) y generamos uno.

Una vez lo tenemos, modificamos en el enviroment.ts el texto `YOUR-GITHUB-TOKEN` por el token que te has generado anteriormente.

### Para arrancar el proyecto
```sh
nx serve
```
