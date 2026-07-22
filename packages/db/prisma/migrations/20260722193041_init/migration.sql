-- CreateTable
CREATE TABLE "Deudor" (
    "id" TEXT NOT NULL,
    "codigoExterno" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "identificacion" TEXT NOT NULL,
    "telefono" TEXT,
    "email" TEXT,
    "direccion" TEXT,
    "estadoCartera" TEXT NOT NULL DEFAULT 'AL_DIA',
    "saldoActual" DECIMAL(65,30) NOT NULL,
    "actualizadoEn" TIMESTAMP(3) NOT NULL,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Deudor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Factura" (
    "id" TEXT NOT NULL,
    "codigoExterno" TEXT NOT NULL,
    "deudorId" TEXT NOT NULL,
    "periodo" TEXT NOT NULL,
    "valor" DECIMAL(65,30) NOT NULL,
    "fechaEmision" TIMESTAMP(3) NOT NULL,
    "fechaVencimiento" TIMESTAMP(3) NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'PENDIENTE',
    "fechaPago" TIMESTAMP(3),

    CONSTRAINT "Factura_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReglaRecordatorio" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "diasOffset" INTEGER NOT NULL,
    "canal" TEXT NOT NULL,
    "plantillaMensaje" TEXT NOT NULL,
    "activa" BOOLEAN NOT NULL DEFAULT true,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ReglaRecordatorio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recordatorio" (
    "id" TEXT NOT NULL,
    "deudorId" TEXT NOT NULL,
    "facturaId" TEXT,
    "reglaId" TEXT,
    "canal" TEXT NOT NULL,
    "mensajeEnviado" TEXT NOT NULL,
    "estadoEnvio" TEXT NOT NULL,
    "enviadoPor" TEXT,
    "respuestaProveedor" TEXT,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Recordatorio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SyncLog" (
    "id" TEXT NOT NULL,
    "iniciadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finalizadoEn" TIMESTAMP(3),
    "registrosProcesados" INTEGER,
    "estado" TEXT NOT NULL,
    "detalleError" TEXT,

    CONSTRAINT "SyncLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsuarioPanel" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "rol" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UsuarioPanel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuditLog" (
    "id" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "accion" TEXT NOT NULL,
    "entidadAfectada" TEXT,
    "detalle" TEXT,
    "ip" TEXT,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Deudor_codigoExterno_key" ON "Deudor"("codigoExterno");

-- CreateIndex
CREATE UNIQUE INDEX "Factura_codigoExterno_key" ON "Factura"("codigoExterno");

-- CreateIndex
CREATE UNIQUE INDEX "UsuarioPanel_email_key" ON "UsuarioPanel"("email");

-- AddForeignKey
ALTER TABLE "Factura" ADD CONSTRAINT "Factura_deudorId_fkey" FOREIGN KEY ("deudorId") REFERENCES "Deudor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recordatorio" ADD CONSTRAINT "Recordatorio_deudorId_fkey" FOREIGN KEY ("deudorId") REFERENCES "Deudor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recordatorio" ADD CONSTRAINT "Recordatorio_facturaId_fkey" FOREIGN KEY ("facturaId") REFERENCES "Factura"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recordatorio" ADD CONSTRAINT "Recordatorio_reglaId_fkey" FOREIGN KEY ("reglaId") REFERENCES "ReglaRecordatorio"("id") ON DELETE SET NULL ON UPDATE CASCADE;
