generator client {
    provider = "prisma-client-js"
  }
  
  datasource db {
    provider     = "mysql"
    url          = env("DATABASE_URL")
    relationMode = "prisma"
  }
  
  model User {
    id         String           @id @default(uuid())
    email      String           @unique
    name       String
    password   String
    profileUrl String?          @default("")
    role       Role             @default(USER)
    location   Location[]
    comment    Comment[]
    winLotProducts  WinLotProduct[] @relation("winLotProductOwner")
    lostLotProducts LostLotProduct[] @relation("lostLotProductOwner")
  }
  
  enum Role {
    USER
    ADMIN
  }
  
  model Location {
    id      String  @id @default(uuid())
    street  String
    town    String
    region  String
    country String
    user    User?   @relation(fields: [userId], references: [id])
    userId  String?
  
    @@index([userId])
  }
  
  model Product {
    id           String           @id @default(uuid())
    title        String
    image        String
    price        Int
    owner        User             @relation("ownedProducts")
    currentOwner User?            @relation("currentOwnerOfProducts", fields: [currentOwnerId], references: [id])
    currentOwnerId String?
    detailTitle  String?
    createdAt    DateTime         @default(now())
    updatedAt    DateTime         @updatedAt
    category     Json
    subCategory  Json?
    comment      Comment[]
    winLotProducts  WinLotProduct[] @relation("winLotProductProduct")
    lostLotProducts LostLotProduct[] @relation("lostLotProductProduct")
  }
  
  model Comment {
    id        String   @id @default(uuid())
    comment   String?
    rating    Float?   @default(0)
    createdAt DateTime @default(now())
    user      User?    @relation(fields: [userId], references: [id])
    userId    String?
    product   Product? @relation(fields: [productId], references: [id])
    productId String?
  
    @@index([userId])
    @@index([productId])
  }
  
  model WinLotProduct {
    id        String  @id @default(uuid())
    bidPrice  Int
    product   Product @relation("winLotProductProduct", fields: [productId], references: [id])
    productId String
    owner     User    @relation("winLotProductOwner", fields: [userId], references: [id])
    userId    String
  
    @@index([productId])
    @@index([userId])
  }
  
  model LostLotProduct {
    id        String  @id @default(uuid())
    bidPrice  Int
    product   Product @relation("lostLotProductProduct", fields: [productId], references: [id])
    productId String
    owner     User    @relation("lostLotProductOwner", fields: [ownerId], references: [id])
    ownerId   String
  
    @@index([productId])
    @@index([ownerId])
  }
  