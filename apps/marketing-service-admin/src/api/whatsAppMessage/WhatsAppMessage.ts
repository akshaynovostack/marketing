export type WhatsAppMessage = {
  createdAt: Date;
  id: string;
  message: string | null;
  recipientNumber: string | null;
  status: string | null;
  updatedAt: Date;
};
