import emailjs from '@emailjs/browser'
import { ContactForm } from '../types'

// Initialize EmailJS with your public key
const initEmailJS = () => {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  if (publicKey) {
    emailjs.init(publicKey)
  }
}

// Initialize on module load
initEmailJS()

export const sendEmailNotification = async (formData: ContactForm): Promise<void> => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  // Check if EmailJS is configured
  if (!serviceId || !templateId || !publicKey) {
    console.warn('EmailJS is not configured. Skipping email notification.')
    return
  }

  try {
    // EmailJS expects these parameter names
    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'your-email@example.com' // Optional: hardcode your email or add to env
    }

    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    )

    console.log('Email sent successfully:', response)
  } catch (error) {
    console.error('Failed to send email notification:', error)
    // Don't throw - we still want to save to Firebase even if email fails
  }
}
