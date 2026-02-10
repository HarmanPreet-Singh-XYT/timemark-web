import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    
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

    // Severity colors for HTML email
    const getSeverityColor = (severity: string) => {
      switch(severity) {
        case 'critical': return '#F43F5E';
        case 'high': return '#F97316';
        case 'medium': return '#EAB308';
        case 'low': return '#22C55E';
        default: return '#71717A';
      }
    };

    const getSeverityLabel = (severity: string) => {
      switch(severity) {
        case 'critical': return '🔴 Critical';
        case 'high': return '🟠 High';
        case 'medium': return '🟡 Medium';
        case 'low': return '🟢 Low';
        default: return severity;
      }
    };

    // Create HTML email
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f5f5f5;
            }
            .container {
              background: white;
              border-radius: 12px;
              padding: 40px;
              box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            }
            .header {
              background: linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%);
              color: white;
              padding: 30px;
              border-radius: 8px;
              margin-bottom: 30px;
            }
            .header.security {
              background: linear-gradient(135deg, #F43F5E 0%, #DC2626 100%);
            }
            .header h1 {
              margin: 0;
              font-size: 28px;
            }
            .header p {
              margin: 10px 0 0 0;
              opacity: 0.9;
            }
            .severity-badge {
              display: inline-block;
              padding: 8px 16px;
              border-radius: 6px;
              font-weight: bold;
              color: white;
              margin-bottom: 20px;
            }
            .section {
              margin-bottom: 30px;
            }
            .section-title {
              font-size: 14px;
              font-weight: bold;
              color: #666;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 8px;
            }
            .section-content {
              background: #f9fafb;
              padding: 16px;
              border-radius: 8px;
              border-left: 4px solid #7C3AED;
            }
            .info-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
              gap: 16px;
              margin-top: 20px;
            }
            .info-item {
              background: #f9fafb;
              padding: 12px;
              border-radius: 6px;
            }
            .info-label {
              font-size: 12px;
              color: #666;
              font-weight: bold;
              margin-bottom: 4px;
            }
            .info-value {
              color: #333;
              font-size: 14px;
            }
            .footer {
              margin-top: 40px;
              padding-top: 20px;
              border-top: 1px solid #e5e7eb;
              color: #666;
              font-size: 12px;
              text-align: center;
            }
            pre {
              background: #1f2937;
              color: #e5e7eb;
              padding: 16px;
              border-radius: 8px;
              overflow-x: auto;
              white-space: pre-wrap;
              word-wrap: break-word;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header ${formData.type === 'security' ? 'security' : ''}">
              <h1>${formData.type === 'security' ? '🔒 Security Issue Report' : '🐛 Bug Report'}</h1>
              <p>New ${formData.type === 'security' ? 'security issue' : 'bug'} submitted from Scolect</p>
            </div>

            <span class="severity-badge" style="background-color: ${getSeverityColor(formData.severity)}">
              ${getSeverityLabel(formData.severity)}
            </span>

            <div class="section">
              <div class="section-title">Bug Title</div>
              <div class="section-content">
                <strong>${formData.title}</strong>
              </div>
            </div>

            <div class="section">
              <div class="section-title">Description</div>
              <div class="section-content">
                ${formData.description}
              </div>
            </div>

            <div class="section">
              <div class="section-title">Steps to Reproduce</div>
              <div class="section-content">
                <pre>${formData.steps}</pre>
              </div>
            </div>

            <div class="section">
              <div class="section-title">Expected Behavior</div>
              <div class="section-content">
                ${formData.expected}
              </div>
            </div>

            <div class="section">
              <div class="section-title">Actual Behavior</div>
              <div class="section-content">
                ${formData.actual}
              </div>
            </div>

            <div class="section">
              <div class="section-title">System Information</div>
              <div class="info-grid">
                <div class="info-item">
                  <div class="info-label">Windows Version</div>
                  <div class="info-value">${formData.windowsVersion}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Scolect Version</div>
                  <div class="info-value">${formData.ScolectVersion}</div>
                </div>
                ${formData.ram ? `
                <div class="info-item">
                  <div class="info-label">RAM</div>
                  <div class="info-value">${formData.ram}</div>
                </div>
                ` : ''}
              </div>
            </div>

            <div class="section">
              <div class="section-title">Reporter Contact</div>
              <div class="section-content">
                <a href="mailto:${formData.email}">${formData.email}</a>
              </div>
            </div>

            <div class="footer">
              <p>This bug report was submitted via the Scolect bug report form.</p>
              <p>Submitted on ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Create plain text version
    const textContent = `
NEW ${formData.type === 'security' ? 'SECURITY ISSUE' : 'BUG'} REPORT
${formData.type === 'security' ? '=' : '-'}${'='.repeat(50)}

Severity: ${getSeverityLabel(formData.severity)}

TITLE
${formData.title}

DESCRIPTION
${formData.description}

STEPS TO REPRODUCE
${formData.steps}

EXPECTED BEHAVIOR
${formData.expected}

ACTUAL BEHAVIOR
${formData.actual}

SYSTEM INFORMATION
- Windows Version: ${formData.windowsVersion}
- Scolect Version: ${formData.ScolectVersion}
${formData.ram ? `- RAM: ${formData.ram}` : ''}

REPORTER CONTACT
${formData.email}

---
Submitted on ${new Date().toLocaleString()}
    `;

    // Email options
    const mailOptions = {
      from: `"Scolect Bug Reports" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: process.env.BUG_REPORT_EMAIL_TO,
      subject: `[${formData.type === 'security' ? 'SECURITY' : formData.severity.toUpperCase()}] ${formData.title}`,
      text: textContent,
      html: htmlContent,
      replyTo: formData.email,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log('Message sent: %s', info.messageId);

    // Send confirmation email to reporter
    const confirmationMailOptions = {
      from: `"Scolect Support" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: formData.email,
      subject: `Bug Report Received: ${formData.title}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%); color: white; padding: 30px; border-radius: 8px; text-align: center; }
              .content { background: white; padding: 30px; margin-top: 20px; border-radius: 8px; border: 1px solid #e5e7eb; }
              .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #666; font-size: 12px; text-align: center; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">✅ Bug Report Received</h1>
              </div>
              <div class="content">
                <p>Hi there,</p>
                <p>Thank you for submitting a bug report for <strong>Scolect</strong>. We've received your report about:</p>
                <p style="background: #f9fafb; padding: 16px; border-radius: 8px; border-left: 4px solid #7C3AED;">
                  <strong>${formData.title}</strong>
                </p>
                <p>Our team will review your report within 24-48 hours and get back to you if we need any additional information.</p>
                <p>In the meantime, you can track this issue or submit additional information by replying to this email.</p>
                <p>Thank you for helping us make Scolect better!</p>
                <p>Best regards,<br><strong>The Scolect Team</strong></p>
              </div>
              <div class="footer">
                <p>This is an automated confirmation. Please do not reply to this email unless you have additional information to provide.</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
Hi there,

Thank you for submitting a bug report for Scolect. We've received your report about:

"${formData.title}"

Our team will review your report within 24-48 hours and get back to you if we need any additional information.

Thank you for helping us make Scolect better!

Best regards,
The Scolect Team
      `
    };

    await transporter.sendMail(confirmationMailOptions);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Bug report sent successfully',
        messageId: info.messageId 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send bug report',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}