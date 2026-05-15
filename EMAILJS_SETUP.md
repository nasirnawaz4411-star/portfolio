# EmailJS Setup Guide for Your Portfolio

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

## Step 2: Add Gmail Service
1. Go to **Admin Panel** → **Email Services**
2. Click **Add Service**
3. Select **Gmail**
4. Click **Connect Gmail Account**
5. Authorize EmailJS to access your Gmail
6. Copy your **Service ID** (looks like: `service_xxxxxxx`)

## Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Set Template Name: `contact_form_template` (or any name you prefer)
4. Configure template variables:

```
Template Variables to use:
- {{from_name}}    → Visitor's name
- {{from_email}}   → Visitor's email
- {{message}}      → Visitor's message
- {{reply_to}}     → For reply-to header
```

### Example Template Content:
```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_email}}

Message:
{{message}}
```

5. Click **Save** and copy your **Template ID** (looks like: `template_xxxxxxx`)

## Step 4: Get Your Public Key
1. Go to **Account** → **API Keys**
2. Copy your **Public Key** (looks like: `xxxxxxxxxxxxxxxxxxxx`)

## Step 5: Update Environment Variables
Open `.env.local` in your project root and add:

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
```

Replace with your actual values from steps above.

## Step 6: Important Notes
- **NEXT_PUBLIC_** prefix = These are public and safe to expose in frontend code
- EmailJS free tier allows up to 200 emails/month
- Template variables MUST match form field names:
  - `from_name` (not `name`)
  - `from_email` (not `email`)
  - `message` (stays the same)

## Testing
1. Run your dev server: `npm run dev`
2. Navigate to the contact form
3. Fill in all fields and click "Send Message"
4. Check the response:
   - ✓ Success: Form resets and green success message appears
   - ✗ Error: Red error message shows

## Features Added
✅ Loading state on submit button  
✅ Success/error messages with icons  
✅ Email validation  
✅ Form reset after successful submission  
✅ Disabled inputs during submission  
✅ WhatsApp button for alternative contact  

## Troubleshooting
- **Form not sending?** Check browser console (F12) for errors
- **Wrong email format?** Verify template variable names in EmailJS match form names
- **Need more emails?** Upgrade EmailJS plan
- **CORS issues?** EmailJS handles CORS automatically
