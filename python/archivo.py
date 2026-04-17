informacion = {"jorge": "12345", "maria": "123456", "pedro": "1234567"}

Mensajes = []


print("Login acceso Bloc de notas")
datos = input("Introduce tu nommbre: ")
if datos in informacion:
    contraseña = input("Introduce tu contraseña: ")
    if datos in informacion and contraseña == informacion[datos]:
        print("Hola " + datos + " Eres bienvenido")

        while True:
            print("---Menu---")
            print("1. escribir un mensaje")
            print("2. ver mensajes")
            print("3. salir")

            opcion = input("selecciona un mensaje:  ")

            if opcion == "1":
                mensaje = input("Escribe el mensaje: ")
                Mensajes.append(mensaje)
                print("mensaje guardado")

            elif opcion == "2":
                print("mensajes guardados: ")
                for mensaje in Mensajes:
                    print(mensaje)

            
            elif opcion == "3":
                print("Saliendo del programa...")
                break
    else:
        print("contraseña incorrecta")  

else:
    print("Usuario no encontrado")


    



 