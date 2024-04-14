-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "idade" INTEGER,
    "admin" BOOLEAN NOT NULL DEFAULT false,
    "password" TEXT NOT NULL,
    "biblioteca_id" INTEGER,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "biblioteca" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "biblioteca_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_biblioteca_id_fkey" FOREIGN KEY ("biblioteca_id") REFERENCES "biblioteca"("id") ON DELETE SET NULL ON UPDATE CASCADE;
