# FiestaHaloween - boletos de un solo uso

## Configuracion
1. Crea un proyecto en Firebase Console.
2. Agrega una aplicacion Web y copia sus datos en `firebase-config.js`.
3. Activa Authentication > Sign-in method > Email/Password.
4. Crea el usuario administrador en Authentication > Users.
5. Copia su UID y reemplaza `REEMPLAZAR_UID_ADMIN` en `firestore.rules`.
6. Crea Cloud Firestore en modo Production.
7. En Firestore > Rules, pega `firestore.rules` y publica.
8. Sube `index.html`, `firebase-config.js` y la carpeta `admin` a la raiz del repositorio `FiestaHaloween`.

## Uso
- El invitado abre `?b=01` y ve su boleto.
- En la entrada, toca `Control de acceso` e inicia sesion.
- Pulsa `MARCAR COMO UTILIZADO`.
- La transaccion evita que el mismo boleto se marque válidamente dos veces.

## Seguridad
No uses reglas `allow read, write: if true`. Solo el UID administrador puede consultar o modificar el checklist.
