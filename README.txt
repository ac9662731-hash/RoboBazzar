NexVora Lab Cloudflare Pages website

DEPLOY:
1. Cloudflare Dashboard -> Workers & Pages -> Create application -> Pages -> Direct Upload.
2. Upload this folder (or its ZIP contents).
3. The project gets a free YOURNAME.pages.dev address.

WHAT IT DOES:
- Animated Projects section with online project images.
- Live public MakerBazar catalogue through a Cloudflare Pages Function.
- Only currently available products are displayed; prices are hidden.
- Search/filter included.
- Every WhatsApp enquiry opens +91 80816 75281 with product name, photo URL and the message "I want to know about this".

IMPORTANT WHATSAPP LIMIT:
A wa.me link can pre-fill a message, but it cannot silently attach and send an image. The image URL is included in the pre-filled message; the user presses Send.

MAKERBAZAR:
The current public store has thousands of catalogue entries, so the site loads the catalogue dynamically rather than hard-coding a short list. MakerBazar can change its public API/catalogue structure, so the function may need adjustment if that endpoint changes.
