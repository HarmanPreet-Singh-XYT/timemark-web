import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the data
    if (!body.type || !body.title || !body.description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter using standardized environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Format feedback type for better readability
    const typeLabels: { [key: string]: string } = {
      feature: 'Feature Request',
      ux: 'UI/UX Improvement',
      content: 'Content Suggestion',
      performance: 'Performance Issue',
      praise: 'General Praise',
      other: 'Other'
    };

    const feedbackTypeLabel = typeLabels[body.type] || body.type;

    // Email HTML template
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
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
              background: linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%);
              color: white;
              padding: 30px;
              border-radius: 10px 10px 0 0;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
            }
            .badge {
              display: inline-block;
              background: rgba(255, 255, 255, 0.2);
              padding: 5px 15px;
              border-radius: 20px;
              font-size: 12px;
              font-weight: bold;
              margin-top: 10px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            .content {
              background: #ffffff;
              padding: 30px;
              border: 1px solid #e5e7eb;
              border-top: none;
            }
            .field {
              margin-bottom: 25px;
            }
            .field-label {
              font-weight: bold;
              color: #7C3AED;
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 8px;
            }
            .field-value {
              background: #f9fafb;
              padding: 15px;
              border-radius: 8px;
              border-left: 3px solid #7C3AED;
              white-space: pre-wrap;
              word-wrap: break-word;
            }
            .title {
              font-size: 20px;
              font-weight: bold;
              color: #18181B;
            }
            .description {
              font-size: 15px;
              color: #52525B;
              line-height: 1.8;
            }
            .contact-info {
              background: #f3f4f6;
              padding: 20px;
              border-radius: 8px;
              margin-top: 20px;
            }
            .contact-info p {
              margin: 8px 0;
              color: #52525B;
            }
            .contact-info strong {
              color: #18181B;
            }
            .footer {
              background: #f9fafb;
              padding: 20px;
              border-radius: 0 0 10px 10px;
              text-align: center;
              border: 1px solid #e5e7eb;
              border-top: none;
              font-size: 12px;
              color: #6b7280;
            }
            .timestamp {
              color: #9ca3af;
              font-size: 12px;
              margin-top: 10px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>📬 New Feedback Received</h1>
            <div class="badge">${feedbackTypeLabel}</div>
          </div>
          
          <div class="content">
            <div class="field">
              <div class="field-label">Title</div>
              <div class="field-value title">${body.title}</div>
            </div>
            
            <div class="field">
              <div class="field-label">Description</div>
              <div class="field-value description">${body.description}</div>
            </div>
            
            ${body.name || body.email ? `
              <div class="contact-info">
                <div class="field-label" style="margin-bottom: 10px;">Contact Information</div>
                ${body.name ? `<p><strong>Name:</strong> ${body.name}</p>` : ''}
                ${body.email ? `<p><strong>Email:</strong> <a href="mailto:${body.email}" style="color: #7C3AED;">${body.email}</a></p>` : ''}
              </div>
            ` : ''}
            
            <div class="timestamp">
              Submitted on ${new Date().toLocaleString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short'
              })}
            </div>
          </div>
          
          <div class="footer">
            <p>This feedback was submitted via the TimeMark feedback form.</p>
            <p style="margin-top: 10px;">TimeMark - Productivity Tracking Tool</p>
          </div>
        </body>
      </html>
    `;

    // Plain text version for email clients that don't support HTML
    const emailText = `
New Feedback Received - ${feedbackTypeLabel}

Title: ${body.title}

Description:
${body.description}

${body.name ? `Name: ${body.name}\n` : ''}${body.email ? `Email: ${body.email}\n` : ''}

Submitted at: ${new Date().toISOString()}
    `.trim();

    // Send email
    const info = await transporter.sendMail({
      from: `"TimeMark Feedback" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: process.env.FEEDBACK_EMAIL_TO,
      subject: `[${feedbackTypeLabel}] ${body.title}`,
      text: emailText,
      html: emailHtml,
      // Optional: Add reply-to if user provided email
      ...(body.email && { replyTo: body.email })
    });

    console.log('Feedback email sent:', info.messageId);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Feedback submitted successfully',
        messageId: info.messageId 
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error sending feedback email:', error);
    
    // Return user-friendly error
    return NextResponse.json(
      { 
        error: 'Failed to submit feedback. Please try again or contact us directly.',
        details: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined
      },
      { status: 500 }
    );
  }
}