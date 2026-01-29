'use server'

import nodemailer from 'nodemailer';

interface EmailData {
  name: string;
  email: string;
  category: string;
  subject: string;
  message: string;
  newsletter: boolean;
}

export async function sendContactEmail(data: EmailData) {
  try {
    // Create a transporter using standardized environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email to support team
    const supportEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #7c3aed 0%, #d946ef 100%);
              color: white;
              padding: 30px;
              border-radius: 10px 10px 0 0;
              text-align: center;
            }
            .content {
              background: #f9fafb;
              padding: 30px;
              border-radius: 0 0 10px 10px;
              border: 1px solid #e5e7eb;
              border-top: none;
            }
            .field {
              margin-bottom: 20px;
              background: white;
              padding: 15px;
              border-radius: 8px;
              border: 1px solid #e5e7eb;
            }
            .label {
              font-weight: 600;
              color: #7c3aed;
              margin-bottom: 5px;
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            .value {
              color: #1f2937;
              font-size: 15px;
            }
            .message-box {
              background: white;
              padding: 20px;
              border-radius: 8px;
              border: 1px solid #e5e7eb;
              white-space: pre-wrap;
              font-family: 'Courier New', monospace;
              font-size: 14px;
              line-height: 1.6;
            }
            .footer {
              margin-top: 20px;
              padding-top: 20px;
              border-top: 1px solid #e5e7eb;
              text-align: center;
              font-size: 12px;
              color: #6b7280;
            }
            .badge {
              display: inline-block;
              padding: 4px 12px;
              background: #7c3aed;
              color: white;
              border-radius: 12px;
              font-size: 12px;
              font-weight: 600;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 style="margin: 0; font-size: 24px;">📧 New Contact Form Submission</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">TimeMark Support</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">From</div>
              <div class="value">${data.name}</div>
            </div>
            
            <div class="field">
              <div class="label">Email Address</div>
              <div class="value"><a href="mailto:${data.email}" style="color: #7c3aed; text-decoration: none;">${data.email}</a></div>
            </div>
            
            <div class="field">
              <div class="label">Category</div>
              <div class="value"><span class="badge">${data.category}</span></div>
            </div>
            
            <div class="field">
              <div class="label">Subject</div>
              <div class="value"><strong>${data.subject}</strong></div>
            </div>
            
            <div class="field">
              <div class="label">Message</div>
              <div class="message-box">${data.message}</div>
            </div>
            
            ${data.newsletter ? `
            <div class="field" style="background: #ecfdf5; border-color: #a7f3d0;">
              <div class="label" style="color: #059669;">Newsletter Subscription</div>
              <div class="value" style="color: #059669;">✓ User wants to receive updates</div>
            </div>
            ` : ''}
            
            <div class="footer">
              <p>This email was sent from the TimeMark contact form.</p>
              <p>Sent on ${new Date().toLocaleString('en-US', { 
                dateStyle: 'full', 
                timeStyle: 'long',
                timeZone: 'America/Toronto'
              })}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email to support team
    await transporter.sendMail({
      from: `"TimeMark Contact Form" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL_TO,
      replyTo: data.email,
      subject: `[${data.category}] ${data.subject}`,
      html: supportEmailHtml,
    });

    // Auto-reply to user
    const userEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #7c3aed 0%, #d946ef 100%);
              color: white;
              padding: 40px 30px;
              border-radius: 10px 10px 0 0;
              text-align: center;
            }
            .content {
              background: white;
              padding: 30px;
              border-radius: 0 0 10px 10px;
              border: 1px solid #e5e7eb;
              border-top: none;
            }
            .checkmark {
              width: 60px;
              height: 60px;
              background: white;
              border-radius: 50%;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              font-size: 32px;
              margin-bottom: 15px;
            }
            .info-box {
              background: #f9fafb;
              padding: 20px;
              border-radius: 8px;
              border: 1px solid #e5e7eb;
              margin: 20px 0;
            }
            .footer {
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #e5e7eb;
              text-align: center;
              font-size: 12px;
              color: #6b7280;
            }
            a {
              color: #7c3aed;
              text-decoration: none;
            }
            a:hover {
              text-decoration: underline;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="checkmark">✓</div>
            <h1 style="margin: 0; font-size: 28px;">We Got Your Message!</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 16px;">Thanks for reaching out to TimeMark</p>
          </div>
          <div class="content">
            <p>Hi <strong>${data.name}</strong>,</p>
            
            <p>Thank you for contacting TimeMark! We've received your message and our team will review it shortly.</p>
            
            <div class="info-box">
              <p style="margin: 0 0 10px 0;"><strong>Your Submission Details:</strong></p>
              <p style="margin: 5px 0;"><strong>Category:</strong> ${data.category}</p>
              <p style="margin: 5px 0;"><strong>Subject:</strong> ${data.subject}</p>
              <p style="margin: 5px 0;"><strong>Response Time:</strong> 1-3 business days</p>
            </div>
            
            <p><strong>What happens next?</strong></p>
            <ul style="padding-left: 20px;">
              <li>Our team will review your message</li>
              <li>We'll respond to <a href="mailto:${data.email}">${data.email}</a></li>
              <li>Critical bugs are prioritized within 24 hours</li>
            </ul>
            
            <p>In the meantime, you might find these resources helpful:</p>
            <ul style="padding-left: 20px;">
              <li><a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://timemark.app'}/faq">Frequently Asked Questions</a></li>
              <li><a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://timemark.app'}/docs">Documentation</a></li>
              <li><a href="https://github.com/HarmanPreet-Singh-XYT/TimeMark-ScreenTimeApp/issues">GitHub Issues</a></li>
            </ul>
            
            <div class="footer">
              <p><strong>TimeMark Support Team</strong></p>
              <p>
                <a href="mailto:${process.env.CONTACT_EMAIL_TO || 'support.timemark@harmanita.com'}">
                  ${process.env.CONTACT_EMAIL_TO || 'support.timemark@harmanita.com'}
                </a>
              </p>
              <p style="margin-top: 15px; font-size: 11px; color: #9ca3af;">
                This is an automated confirmation. Please do not reply to this email.
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send auto-reply to user
    await transporter.sendMail({
      from: `"TimeMark Support" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: data.email,
      subject: `We received your message: ${data.subject}`,
      html: userEmailHtml,
    });

    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('Email sending error:', error);
    return { 
      success: false, 
      message: error instanceof Error ? error.message : 'Failed to send email. Please try again later.' 
    };
  }
}