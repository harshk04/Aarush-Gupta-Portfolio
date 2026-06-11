import { handleContactRequest } from '../server/contact-mail.js';

export default function handler(req, res) {
  return handleContactRequest(req, res);
}
