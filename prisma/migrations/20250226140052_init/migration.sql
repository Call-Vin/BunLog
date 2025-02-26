-- CreateTable
CREATE TABLE "ipaas-generic-campaign" (
    "id" SERIAL NOT NULL,
    "data" TEXT NOT NULL,
    "tanggal" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ipaas-generic-campaign_pkey" PRIMARY KEY ("id")
);
