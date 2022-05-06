# API: Express + DB 

# Parte 1: Conexión a Base de Datos Postgresql
1. Crear el projecto JS: <br>
   `npm init`
2. Agregar dependencias de Express y Prisma DB. <br>
   `npm install express --save-dev` <br>
   `npm install prisma --save-dev`
3. Inicializamos prisma: <br>
   `npx prisma init`
4. Modificar el archivo `.env` con mi usuario y contrasena: <br>
   ``` DATABASE_URL="postgresql://postgres:myPASSWORD@localhost:5432/explorers_api?schema=public" ```
5. Agregar nuevo modelo en `prisma/schema.prisma`
    ```prisma
        model Explorer {
        id Int @id @default(autoincrement())
        name String @unique
        username String @db.VarChar(255)
        mission String @db.VarChar(255)
        azureCertification Boolean @default(false)
        dateCreated DateTime @default(now())
        lastUpdated DateTime @updatedAt
        }
    ```