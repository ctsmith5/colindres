/**
 * Submit contact form data.
 * Currently logs to console — replace with SendGrid API call when ready.
 *
 * Expected payload: { name, email, phone, service, message }
 */
export async function submitContactForm(data) {
  // TODO: Replace with SendGrid / backend API integration
  // Example:
  // const res = await fetch("/api/contact", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(data),
  // });
  // if (!res.ok) throw new Error("Failed to send message");
  // return res.json();

  console.log("Contact form submitted:", data);

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  return { success: true };
}
