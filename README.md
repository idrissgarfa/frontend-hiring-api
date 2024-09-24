# Akera Help Center Frontend Test

## Overview

This test requires you to integrate the [provided Figma](https://www.figma.com/design/scjzaJfb6ynJVpNn7Cojut/Frontend-Hiring---Help-Center?m=auto&t=CKq0ilNy1QKtlCZp-1) designs into a web application using **React.js**, **Tailwind CSS** for styling, and **TypeScript**. The design contains two pages:

1. **Admin Page**: Allows the admin to view quick statistics and a list of issues submitted by students.
2. **Student Page**: Enables students to view their submitted issues and submit new requests.

In addition to implementing the design, you'll need to integrate with the [provided API.](https://github.com/idrissgarfa/frontend-hiring-api)

### API Setup

To set up and run the API locally, follow these steps:

1. **Clone the GitHub Repository**:

   Run the following command to clone the repository to your local machine:

   ```powershell
   git clone https://github.com/idrissgarfa/frontend-hiring-api.git
   ```

2. **Install Dependencies**:

   Navigate to the cloned repository and run:

   ```bash
   bun install
   ```

3. **Configure Environment Variables**:

   Update your `.env` file with the following values:

   ```bash
   DATABASE_URL=DATABASE_CONNECTION_STRING
   ```

4. **Run the Server**:

   To start the server, run:

   ```bash
   bun dev
   ```

5. **Access Drizzle Studio**:

   In a separate terminal, navigate to the same directory and run:

   ```bash
   bun db:studio
   ```

6. **API Documentation**:

   You can view the API documentation at [localhost:4444/api/docs](http://localhost:4444/api/docs).

<aside>
📌

> Note: If you encounter any issues with the API setup, double-check the steps. If problems persist, please reach out for assistance.

</aside>

### Development Guidelines

- Use clear and descriptive branch names for each feature or task. Ensure your commit messages are concise and meaningful.
- Use Tailwind CSS to implement the design precisely as shown in the Figma file. It is crucial to respect the layout, colors, spacing, and overall design specifications from the Figma.
- Use TypeScript to catch errors early and maintain type safety across your application.
- Make sure to **reuse components** wherever possible to maintain code modularity and reduce redundancy.
- Follow **API documentation** for proper API calls and ensure smooth integration of the backend with the frontend.

### Deliverables

- **GitHub Repository**:
  Once you complete the test, invite **idriss@akera.agency** to your GitHub repository and ensure it's ready for review. Make sure to message me once you've sent the invitation.
- **Deadline**:
  The deadline for submission is **30th September by 6:00 PM**. Please ensure your work is delivered on time.

> Best of luck ✌️, and don’t hesitate to reach out if you need any clarifications!
