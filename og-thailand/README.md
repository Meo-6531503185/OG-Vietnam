# OG Trading (Thailand) Corporate Website

A modern, responsive corporate website built for **OG Trading (Thailand) Co., Ltd.**, utilizing React and Tailwind CSS. This project features a bilingual interface (English/Thai), smooth scroll navigation, and a fully functional contact form integrated with EmailJS.

![Project Status](https://img.shields.io/badge/Status-Active-success)
![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwind-css)

## 🌟 Key Features

* **Multi-Language Support (i18n):** Seamless toggling between English (EN) and Vietnamese (VN) using a custom Language Context.
* **Responsive Design:** Fully adaptive layout for mobile, tablet, and desktop screens.
* **Smooth Scroll Spy Navigation:** The navigation bar highlights the active section as the user scrolls through the page.
* **Business Division Showcase:** Dynamic components for displaying Chemical, Plastic, and Textile divisions with alternating layouts.
* **Functional Contact Form:** Integrated with **EmailJS** to send inquiries directly to the company email without a backend server.
* **Interactive UI:** Hover effects, gradient buttons, and animated mobile menus.

## 🛠️ Tech Stack

* **Framework:** [React.js](https://react.dev/) (Vite)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Icons:** [Font Awesome](https://fontawesome.com/)
* **Email Service:** [EmailJS](https://www.emailjs.com/)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

* Node.js (v16 or higher)
* npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/your-username/og-trading-website.git](https://github.com/your-username/og-trading-website.git)
    cd og-trading-website
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

## ⚙️ Configuration

### EmailJS Setup (Contact Form)

To make the contact form work, you need to set up your own EmailJS account.

1.  Create an account at [EmailJS.com](https://www.emailjs.com/).
2.  Create a **Service** (e.g., connect Gmail).
3.  Create an **Email Template**.
4.  Get your **Service ID**, **Template ID**, and **Public Key**.
